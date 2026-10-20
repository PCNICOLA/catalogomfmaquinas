// ==========================================================
// SISTEMA DE SINCRONIZAÇÃO EM TEMPO REAL E STORAGE
// Suporta:
// 1. Firebase Realtime Database (Nuvem em Tempo Real p/ GitHub Pages / Netlify)
// 2. Servidor Local / API (se rodando via server.py)
// 3. LocalStorage / IndexedDB (Fallback imediato no navegador)
// ==========================================================

const DEFAULT_CONFIG = {
  titulo: "MF MÁQUINAS",
  subtitulo: "Catálogo de Peças e Pedido Direto via WhatsApp",
  whatsapp: "5537988091454",
  mostrarPreco: true,
  logoUrl: "logo.jpg",
  senhaAdmin: "mf1234",
  firebaseDatabaseURL: "" // Ex: https://seu-projeto-default-rtdb.firebaseio.com
};

const CatalogoStorage = {
  dbName: "MFMaquinasDB",
  storeName: "catalogo_state",
  listeners: [],
  firebaseEventSource: null,

  // Inicializa IndexedDB (suporta grandes volumes de fotos em base64 sem limite de 5MB do localStorage)
  openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async getLocal(key) {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(this.storeName, "readonly");
        const req = tx.objectStore(this.storeName).get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch (e) {
      const raw = localStorage.getItem("mf_" + key);
      return raw ? JSON.parse(raw) : null;
    }
  },

  async setLocal(key, value) {
    try {
      const db = await this.openDB();
      await new Promise((resolve, reject) => {
        const tx = db.transaction(this.storeName, "readwrite");
        tx.objectStore(this.storeName).put(value, key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    } catch (e) {
      try {
        localStorage.setItem("mf_" + key, JSON.stringify(value));
      } catch (err) {
        console.warn("Storage local cheio:", err);
      }
    }
    // Dispara evento entre abas do mesmo navegador
    try {
      localStorage.setItem("mf_sync_ping", Date.now().toString());
    } catch (e) {}
  },

  getFirebaseUrl() {
    const savedUrl = localStorage.getItem("mf_firebase_url");
    return (savedUrl || DEFAULT_CONFIG.firebaseDatabaseURL || "").replace(/\/+$/, "");
  },

  setFirebaseUrl(url) {
    const clean = (url || "").trim().replace(/\/+$/, "");
    localStorage.setItem("mf_firebase_url", clean);
    this.iniciarEscutaTempoReal();
  },

  // Carrega o estado mesclado (produtos.js original + alterações em tempo real)
  async carregarEstado() {
    // 1. Tenta buscar do Firebase se configurado
    const fbUrl = this.getFirebaseUrl();
    if (fbUrl) {
      try {
        const res = await fetch(`${fbUrl}/mf_catalogo.json`, { cache: "no-store" });
        if (res.ok) {
          const cloudData = await res.json();
          if (cloudData) {
            await this.setLocal("cloud_cache", cloudData);
            return this.mesclarComBase(cloudData);
          }
        }
      } catch (e) {
        console.warn("Falha ao buscar nuvem Firebase, usando cache:", e);
      }
    }

    // 2. Tenta buscar do servidor local Python (se estiver ativo)
    try {
      const res = await fetch("/api/state", { cache: "no-store" });
      if (res.ok) {
        const srvData = await res.json();
        if (srvData && (srvData.overrides || srvData.config)) {
          await this.setLocal("cloud_cache", srvData);
          return this.mesclarComBase(srvData);
        }
      }
    } catch (e) {
      // Sem servidor local Python rodando, segue para IndexedDB
    }

    // 3. Busca do IndexedDB / LocalStorage
    const localData = await this.getLocal("cloud_cache");
    return this.mesclarComBase(localData || {});
  },

  // Salva alterações (apenas o delta/overrides + novos + excluídos + config) para ser super leve e rápido na nuvem!
  async salvarAlteracoes(stateDelta) {
    stateDelta.updatedAt = Date.now();
    await this.setLocal("cloud_cache", stateDelta);

    const status = { local: true, servidor: false, nuvem: false };

    // Salva no servidor local Python se estiver rodando
    try {
      const res = await fetch("/api/state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stateDelta)
      });
      if (res.ok) status.servidor = true;
    } catch (e) {}

    // Salva no Firebase Realtime Database se configurado
    const fbUrl = this.getFirebaseUrl();
    if (fbUrl) {
      try {
        const res = await fetch(`${fbUrl}/mf_catalogo.json`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(stateDelta)
        });
        if (res.ok) status.nuvem = true;
      } catch (e) {
        console.error("Erro ao salvar no Firebase:", e);
      }
    }

    this.notificarListeners(this.mesclarComBase(stateDelta));
    return status;
  },

  // Mescla a lista original de `produtos` (3.700+ itens do produtos.js) com as edições em tempo real
  mesclarComBase(delta) {
    const baseProdutos = typeof produtos !== "undefined" ? produtos : [];
    const overrides = (delta && delta.overrides) ? delta.overrides : {};
    const customProducts = (delta && delta.customProducts) ? delta.customProducts : [];
    const deletedIds = new Set((delta && delta.deletedIds) ? delta.deletedIds : []);
    const config = Object.assign({}, DEFAULT_CONFIG, (delta && delta.config) ? delta.config : {});

    const listaFinal = [];

    // Primeiro coloca os produtos novos adicionados pelo admin (no topo)
    customProducts.forEach((p) => {
      if (!deletedIds.has(p.id)) {
        const ov = overrides[p.id] || {};
        listaFinal.push(Object.assign({}, p, ov, { isCustom: true }));
      }
    });

    // Depois processa os produtos da base original
    baseProdutos.forEach((p, idx) => {
      const id = p.id || `base_${idx}`;
      if (deletedIds.has(id)) return;
      const ov = overrides[id] || {};
      listaFinal.push({
        id,
        ref: ov.ref !== undefined ? ov.ref : (p.ref || ""),
        desc: ov.desc !== undefined ? ov.desc : (p.desc || ""),
        marca: ov.marca !== undefined ? ov.marca : (p.marca || ""),
        uni: ov.uni !== undefined ? ov.uni : (p.uni || "PC"),
        cat: ov.cat !== undefined ? ov.cat : (p.cat || "Diversos e Acessórios"),
        preco: ov.preco !== undefined ? ov.preco : (p.preco || ""),
        img: ov.img !== undefined ? ov.img : (p.img || ""),
        destaque: ov.destaque !== undefined ? ov.destaque : (p.destaque || false)
      });
    });

    return {
      produtos: listaFinal,
      config,
      rawDelta: {
        overrides,
        customProducts,
        deletedIds: Array.from(deletedIds),
        config,
        updatedAt: delta ? delta.updatedAt : null
      }
    };
  },

  onUpdate(callback) {
    this.listeners.push(callback);
  },

  notificarListeners(mergedState) {
    this.listeners.forEach((cb) => {
      try { cb(mergedState); } catch (e) { console.error(e); }
    });
  },

  // Escuta alterações em tempo real (entre abas, SSE do Firebase ou polling inteligente)
  iniciarEscutaTempoReal() {
    // 1. Escuta mudanças em outras abas do mesmo navegador
    window.addEventListener("storage", async (e) => {
      if (e.key === "mf_sync_ping" || e.key === "mf_firebase_url") {
        const state = await this.carregarEstado();
        this.notificarListeners(state);
      }
    });

    // 2. Escuta Server-Sent Events (SSE) em tempo real do Firebase Realtime Database
    if (this.firebaseEventSource) {
      this.firebaseEventSource.close();
      this.firebaseEventSource = null;
    }

    const fbUrl = this.getFirebaseUrl();
    if (fbUrl && typeof EventSource !== "undefined") {
      try {
        const sse = new EventSource(`${fbUrl}/mf_catalogo.json`);
        sse.addEventListener("put", async (e) => {
          try {
            const payload = JSON.parse(e.data);
            if (payload && payload.path === "/" && payload.data) {
              await this.setLocal("cloud_cache", payload.data);
              this.notificarListeners(this.mesclarComBase(payload.data));
            } else {
              const state = await this.carregarEstado();
              this.notificarListeners(state);
            }
          } catch (err) {}
        });
        this.firebaseEventSource = sse;
      } catch (e) {
        console.warn("SSE Firebase não disponível, usando verificação periódica.");
      }
    }
  },

  // Utilitário para comprimir imagem antes do upload (gera Base64 leve e nítido para salvar na nuvem/JSON)
  comprimirImagem(file, maxWidth = 700, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let w = img.width;
          let h = img.height;
          if (w > maxWidth || h > maxWidth) {
            if (w > h) {
              h = Math.round((h * maxWidth) / w);
              w = maxWidth;
            } else {
              w = Math.round((w * maxWidth) / h);
              h = maxWidth;
            }
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          const dataUrl = canvas.toDataURL("image/jpeg", quality);
          resolve(dataUrl);
        };
        img.onerror = reject;
        img.src = ev.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
};
