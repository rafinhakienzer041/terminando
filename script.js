document.addEventListener("DOMContentLoaded", () => {
  // produto data source: try loading data.json; fall back to embeddedProdutos if unavailable
  let produtos = null;

  const embeddedProdutos = {
    
cachorro: [
      { id: "cachorro-simples", nome: "Cachorro Quente Simples", preco: 10, descricao: "Salsicha, pão e molho especial", imagem: "https://static.itdg.com.br/images/1200-630/535cc599b45272dd1f4f02f339711e37/cachorro-quente-aprovadissimo.jpg" },
      { id: "cachorro-duplo", nome: "Cachorro Quente Duplo", preco: 15, descricao: "Duas salsichas e queijo derretido", imagem: "https://www.sadia.com.br/assets/images/_/recipes/308a0a2652b2047b23ad43a0b8c1da3c2db9ffb8.webp?1758641543719" },
      { id: "cachorro-bacon", nome: "Cachorro Quente com Bacon", preco: 18, descricao: "Salsicha, bacon crocante, queijo e molho especial", imagem: "https://static.itdg.com.br/images/1200-630/535cc599b45272dd1f4f02f339711e37/cachorro-quente-aprovadissimo.jpg" },
      { id: "cachorro-especial", nome: "Cachorro Quente Especial", preco: 22, descricao: "Salsicha, ovo, batata palha e molho especial", imagem: "https://www.sadia.com.br/assets/images/_/recipes/308a0a2652b2047b23ad43a0b8c1da3c2db9ffb8.webp?1758641543719" },
  { id: "cachorro-simples-2", nome: "Cachorro Quente Simples", preco: 10, descricao: "Salsicha, pão e molho especial", imagem: "https://static.itdg.com.br/images/1200-630/535cc599b45272dd1f4f02f339711e37/cachorro-quente-aprovadissimo.jpg" },
  { id: "cachorro-duplo-2", nome: "Cachorro Quente Duplo", preco: 15, descricao: "Duas salsichas e queijo derretido", imagem: "https://www.sadia.com.br/assets/images/_/recipes/308a0a2652b2047b23ad43a0b8c1da3c2db9ffb8.webp?1758641543719" },
  { id: "cachorro-bacon-2", nome: "Cachorro Quente com Bacon", preco: 18, descricao: "Salsicha, bacon crocante, queijo e molho especial", imagem: "https://static.itdg.com.br/images/1200-630/535cc599b45272dd1f4f02f339711e37/cachorro-quente-aprovadissimo.jpg" },
  { id: "cachorro-especial-2", nome: "Cachorro Quente Especial", preco: 22, descricao: "Salsicha, ovo, batata palha e molho especial", imagem: "https://www.sadia.com.br/assets/images/_/recipes/308a0a2652b2047b23ad43a0b8c1da3c2db9ffb8.webp?1758641543719" }
    
    ],
    macarronada: [
      { id: "macarronada-tradicional", nome: "Macarronada Tradicional", preco: 10, descricao: "Macarrão, Molho, salsicha, ovo, presunto, queijo, milho e ervilha.", imagem: "https://receitatodahora.com.br/wp-content/uploads/2024/10/macarronada-de-carne-moida-2310.jpg" },
  { id: "macarronada-tradicional-2", nome: "Macarronada Tradicional", preco: 15, descricao: "Molho de tomate e queijo ralado", imagem: "https://receitatodahora.com.br/wp-content/uploads/2024/10/macarronada-de-carne-moida-2310.jpg" },
  { id: "macarronada-tradicional-3", nome: "Macarronada Tradicional", preco: 18, descricao: "Molho de tomate e queijo ralado", imagem: "https://receitatodahora.com.br/wp-content/uploads/2024/10/macarronada-de-carne-moida-2310.jpg" },
  { id: "macarronada-tradicional-4", nome: "Macarronada Tradicional", preco: 25, descricao: "Molho de tomate e queijo ralado", imagem: "https://receitatodahora.com.br/wp-content/uploads/2024/10/macarronada-de-carne-moida-2310.jpg" }
    ],
    batatas: [
      { id: "batata-frita", nome: "Batata Frita 5", preco: 5, descricao: "Crocante e dourada", imagem: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/06/como-fazer-batata-frita-topo.jpg" },
  { id: "batata-frita-10", nome: "Batata Frita 10", preco: 10, descricao: "Crocante e dourada", imagem: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/06/como-fazer-batata-frita-topo.jpg" },
  { id: "batata-frita-11", nome: "Batata Frita 11", preco: 11, descricao: "Crocante e dourada", imagem: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/06/como-fazer-batata-frita-topo.jpg" },
  { id: "batata-frita-12", nome: "Batata Frita 12", preco: 12, descricao: "Crocante e dourada", imagem: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/06/como-fazer-batata-frita-topo.jpg" }
    ],
    bebidas: [
      { id: "refri-lata-coca", nome: "Refrigerante Lata 350ML", preco: 5, descricao: "(Coca-Cola)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\coca-cola-logo.jpg" },
      { id: "refri-1lt-coca", nome: "Refrigerante  1L", preco: 8, descricao: "(Coca-Cola)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\coca-cola-logo.jpg" },
      { id: "refri-2lt-coca", nome: "Refrigerante  2L", preco: 12, descricao: "(Coca-Cola)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\coca-cola-logo.jpg" },

      { id: "refri-lata-guarana", nome: "Refrigerante Lata 350ML", preco: 5, descricao: "(Guaraná Antarctica)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\guarana-logo.jpg" },
      { id: "refri-1lt-guarana", nome: "Refrigerante 1L", preco: 8, descricao: "(Guaraná Antarctica)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\guarana-logo.jpg" },
      { id: "refri-2lt-guarana", nome: "Refrigerante 2L", preco: 12, descricao: "(Guaraná Antarctica)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\guarana-logo.jpg" },

      { id: "refri-lata-fanta", nome: "Refrigerante Lata 350ML", preco: 5, descricao: "(Fanta Laranja)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\fanta-logo.png" },
      { id: "refri-1lt-fanta", nome: "Refrigerante 1L", preco: 8, descricao: "(Fanta Laranja)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\fanta-logo.png" },
      { id: "refri-2lt-fanta", nome: "Refrigerante 2L", preco: 12, descricao: "(Fanta Laranja)", imagem: "C:\\Users\\rafin\\Documents\\Chinezlanches-main\\Frontend\\imagens\\fanta-logo.png" }

    ]
  };

  // initialize produtos with embeddedProdutos so UI can render immediately
  produtos = embeddedProdutos;

  // attempt to load an external JSON file; if it fails, keep using embeddedProdutos
  (function loadExternalData() {
    fetch('data.json', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then((json) => {
        produtos = json;
        console.info('Produtos carregados de data.json:', Object.keys(produtos));
      })
      .catch((err) => {
        console.warn('Não foi possível carregar data.json — continuando com dados embutidos. Motivo:', err && err.message);
      });
  })();

  const produtosContainer = document.getElementById("produtos");
  const itensCarrinho = document.getElementById("itens-carrinho");
  const totalElement = document.getElementById("total");
  const finalizarButton = document.getElementById("finalizar");
  // cart object keyed by product name -> { produto, qty }
  const carrinho = {};
  const limparBtn = document.getElementById('limpar-carrinho');

  const telaInicial = document.getElementById("tela-inicial");
  const carrinhoAside = document.getElementById("carrinho");
  const inicioConteudo = document.querySelector('.inicio-conteudo');

  // mobile cart toggle (created dynamically)
  let mobileCartToggle = null;
  function ensureMobileCartToggle() {
    if (mobileCartToggle) return;
    mobileCartToggle = document.createElement('button');
    mobileCartToggle.id = 'mobile-cart-toggle';
    mobileCartToggle.setAttribute('aria-label', 'Abrir carrinho');
    mobileCartToggle.textContent = '🛒';
    document.body.appendChild(mobileCartToggle);
    mobileCartToggle.addEventListener('click', () => {
      if (!carrinhoAside) return;
      const open = carrinhoAside.classList.toggle('mobile-open');
      mobileCartToggle.setAttribute('aria-pressed', open ? 'true' : 'false');
      mobileCartToggle.setAttribute('aria-label', open ? 'Fechar carrinho' : 'Abrir carrinho');
      // When the cart opens on mobile, hide the floating toggle to avoid overlapping buttons.
      const mobileCartCloseBtn = document.getElementById('mobile-cart-close');
      if (open) {
        mobileCartToggle.style.display = 'none';
        if (mobileCartCloseBtn) mobileCartCloseBtn.style.display = 'flex';
      } else {
        mobileCartToggle.style.display = '';
          if (mobileCartCloseBtn) {
            // only hide the close button if the cart is not currently open
            if (!carrinhoAside || !carrinhoAside.classList.contains('mobile-open')) {
              mobileCartCloseBtn.style.display = 'none';
            }
          }
      }
    });

    // close cart on outside click
    document.addEventListener('click', (ev) => {
      if (!carrinhoAside) return;
      if (!carrinhoAside.classList.contains('mobile-open')) return;
      const path = ev.composedPath ? ev.composedPath() : (ev.path || []);
      if (!path.includes(carrinhoAside) && ev.target !== mobileCartToggle) {
        carrinhoAside.classList.remove('mobile-open');
        mobileCartToggle.setAttribute('aria-pressed', 'false');
        mobileCartToggle.setAttribute('aria-label', 'Abrir carrinho');
        // restore visibility of the floating toggle when cart is closed
        if (mobileCartToggle) mobileCartToggle.style.display = '';
          const mobileCartCloseBtn = document.getElementById('mobile-cart-close');
          if (mobileCartCloseBtn) {
            if (!carrinhoAside || !carrinhoAside.classList.contains('mobile-open')) {
              mobileCartCloseBtn.style.display = 'none';
            }
          }
      }
    });

    // close on Escape
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && carrinhoAside && carrinhoAside.classList.contains('mobile-open')) {
        carrinhoAside.classList.remove('mobile-open');
        mobileCartToggle.setAttribute('aria-pressed', 'false');
        mobileCartToggle.setAttribute('aria-label', 'Abrir carrinho');
        if (mobileCartToggle) mobileCartToggle.style.display = '';
        const mobileCartCloseBtn = document.getElementById('mobile-cart-close');
          if (mobileCartCloseBtn) {
            if (!carrinhoAside || !carrinhoAside.classList.contains('mobile-open')) {
              mobileCartCloseBtn.style.display = 'none';
            }
          }
      }
    });
    
    // create mobile cart close button (only for mobile UI)
    let mobileCartClose = document.getElementById('mobile-cart-close');
    if (!mobileCartClose) {
      mobileCartClose = document.createElement('button');
      mobileCartClose.id = 'mobile-cart-close';
      mobileCartClose.setAttribute('aria-label', 'Fechar carrinho');
      mobileCartClose.innerHTML = '✕';
      // initially hidden; CSS will position it when needed
      mobileCartClose.style.display = 'none';
      document.body.appendChild(mobileCartClose);

      mobileCartClose.addEventListener('click', (ev) => {
        ev.stopPropagation();
        if (!carrinhoAside) return;
        carrinhoAside.classList.remove('mobile-open');
        mobileCartToggle.setAttribute('aria-pressed', 'false');
        mobileCartToggle.setAttribute('aria-label', 'Abrir carrinho');
        if (mobileCartToggle) mobileCartToggle.style.display = '';
        mobileCartClose.style.display = 'none';
      });
    }

    // Ensure the cart element is shown when the class .mobile-open is present
    // and hidden after the slide-down transition when it's removed. This handles
    // cases where CSS sets `display: none` by default but code toggles only the class.
    try {
      if (carrinhoAside) {
        // make sure it's hidden initially (CSS already sets display:none on mobile)
        carrinhoAside.style.display = carrinhoAside.classList.contains('mobile-open') ? 'block' : 'none';
        const mo = new MutationObserver(() => {
          if (carrinhoAside.classList.contains('mobile-open')) {
            // show immediately so the transform animation is visible
            carrinhoAside.style.display = 'block';
            // force reflow to ensure the transform transition runs
            // (read a layout property)
            void carrinhoAside.offsetWidth;
          } else {
            // wait for the same duration as the CSS transition then hide
            const hideAfter = 340; // ms (slightly longer than CSS 320ms)
            setTimeout(() => {
              if (!carrinhoAside.classList.contains('mobile-open')) {
                carrinhoAside.style.display = 'none';
              }
            }, hideAfter);
          }
        });
        mo.observe(carrinhoAside, { attributes: true, attributeFilter: ['class'] });
      }
    } catch (err) {
      // fail silently if MutationObserver unsupported (very old browsers)
    }
  }
  
  // ensure the mobile cart toggle exists (no-op on desktop) after initial animations
  // and hide it immediately if the initial screen is visible (so it doesn't show on Home)
  setTimeout(() => {
    ensureMobileCartToggle();
    try {
      const isHomeVisible = telaInicial && getComputedStyle(telaInicial).display !== 'none';
      if (isHomeVisible && mobileCartToggle) mobileCartToggle.style.display = 'none';
    } catch (err) {
      // silence any issues reading styles during early load
    }
  }, 600);

  // If a close button exists in the HTML (we added it statically), wire its handler
  (function attachStaticMobileClose() {
    const staticClose = document.getElementById('mobile-cart-close');
    if (!staticClose) return;
    staticClose.addEventListener('click', (ev) => {
      ev.stopPropagation();
      // Only treat as mobile-close if we're in the mobile breakpoint
      const isMobile = window.matchMedia && window.matchMedia('(max-width:600px)').matches;
      if (!isMobile) return;
      if (!carrinhoAside) return;
      carrinhoAside.classList.remove('mobile-open');
      // restore floating toggle visibility if present
      if (mobileCartToggle) mobileCartToggle.style.display = '';
        // only hide static close if cart is no longer open
        if (staticClose) {
          if (!carrinhoAside || !carrinhoAside.classList.contains('mobile-open')) {
            staticClose.style.display = 'none';
          }
        }
    });
  })();

  // set initial footer visibility: show on inicio, hide on others
  setTimeout(() => {
    const footerEl = document.querySelector('footer');
    if (!footerEl) return;
    if (telaInicial && getComputedStyle(telaInicial).display !== 'none') {
      footerEl.style.display = '';
    } else {
      footerEl.style.display = 'none';
    }
  }, 700);

  /* ----------------- MENU HAMBURGER MÓVEL ----------------- */
  (function() {
    const hamburger = document.getElementById('hamburger-btn');
    const header = document.querySelector('header');
    const mainNav = document.getElementById('main-nav');
    if (!hamburger || !header || !mainNav) return;

    function closeMenu() {
      header.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    function openMenu() {
      header.classList.add('nav-open');
      hamburger.setAttribute('aria-expanded', 'true');
    }

    hamburger.addEventListener('click', (e) => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(); else openMenu();
    });

    // close menu when clicking a nav link (mobile)
    mainNav.addEventListener('click', (e) => {
      if (e.target && e.target.matches('a')) {
        // allow the normal link click handler to run, then close menu
        setTimeout(closeMenu, 60);
      }
    });

    // ensure menu closes when resizing to desktop
    window.addEventListener('resize', () => {
      if (window.matchMedia && window.matchMedia('(min-width: 601px)').matches) {
        closeMenu();
      }
    });

    // Close menu when clicking outside it AND allow the original click to reach
    // the underlying element. This handles the case where the mobile dropdown
    // sits above page content: we close the menu and then redispatch a click
    // to the element that was actually under the cursor so the user's intent
    // (e.g. clicking a product) still happens.
    document.addEventListener('click', (ev) => {
      try {
        if (!header.classList.contains('nav-open')) return;
        const path = ev.composedPath ? ev.composedPath() : (ev.path || []);
        // If the click happened inside the header/nav/hamburger, do nothing here
        if (path.includes(header) || ev.target === hamburger) return;

        const x = ev.clientX;
        const y = ev.clientY;

        // Close the menu immediately
        closeMenu();

        // After a short delay let the menu hide (and remove its pointer-events)
        // so we can find the element underneath and re-dispatch a click to it.
        setTimeout(() => {
          // Temporarily disable pointer events on header so elementFromPoint
          // returns the element under the closed menu.
          const prevPointer = header.style.pointerEvents;
          header.style.pointerEvents = 'none';
          const el = document.elementFromPoint(x, y);
          header.style.pointerEvents = prevPointer || '';

          if (el && el !== document.documentElement && el !== document.body) {
            // Create a MouseEvent that resembles the original click and dispatch it.
            const newEvt = new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true,
              clientX: x,
              clientY: y
            });
            el.dispatchEvent(newEvt);
          }
        }, 30);
      } catch (err) {
        // be robust and never throw from a global handler
        console.warn('Error in outside-click handler for hamburger menu:', err);
      }
    });
  })();

  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const categoria = item.dataset.category;
      const isMobile = window.matchMedia && window.matchMedia('(max-width: 600px)').matches;

      // open Relatórios if chosen
      if (categoria === 'relatorios') {
        const relSection = document.getElementById('relatorios');
        if (relSection) relSection.style.display = 'block';
        // ensure cart is hidden when viewing reports
        try {
          if (carrinhoAside) {
            carrinhoAside.classList.remove('mobile-open');
            carrinhoAside.style.display = 'none';
          }
          if (mobileCartToggle) mobileCartToggle.style.display = 'none';
          const mobileCartCloseBtn = document.getElementById('mobile-cart-close');
          if (mobileCartCloseBtn) mobileCartCloseBtn.style.display = 'none';
        } catch (err) {
          // ignore
        }
        // hide other main sections
        const produtosContainer = document.getElementById('produtos'); if (produtosContainer) produtosContainer.style.display = 'none';
        const telaInicial = document.getElementById('tela-inicial'); if (telaInicial) telaInicial.style.display = 'none';
        // set month to current and render
        const relMonth = document.getElementById('rel-month');
        if (relMonth && !relMonth.value) {
          const now = new Date(); relMonth.value = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
        }
        // automatically render for current month
        if (relMonth && relMonth.value) {
          const [y, m] = relMonth.value.split('-').map(Number);
          renderReport(y, m);
        }
        // hide footer when viewing reports
        const footerEl = document.querySelector('footer'); if (footerEl) footerEl.style.display = 'none';
        return;
      }

      if(categoria === "inicio") {
        // hide reports when navigating away
        const relSection = document.getElementById('relatorios'); if (relSection) relSection.style.display = 'none';
        telaInicial.style.display = "flex";
        // add active state to lift curtain
        telaInicial.classList.remove('active');
        void telaInicial.offsetWidth;
        telaInicial.classList.add('active');
        // ensure child stagger starts after curtain lifts a bit
        inicioConteudo.classList.remove('show');
        setTimeout(() => {
          inicioConteudo.classList.add('show');
        }, 260);
    produtosContainer.style.display = "none";
  carrinhoAside.style.display = "none";
  // also hide categorias when returning to inicio
  const categoriasEl = document.getElementById('categorias'); if (categoriasEl) categoriasEl.style.display = 'none';
  // on mobile, hide the floating cart toggle on the home screen
  if (isMobile && mobileCartToggle) mobileCartToggle.style.display = 'none';
    // ensure close button hidden on home (unless cart is open)
    const mobileCartCloseBtn = document.getElementById('mobile-cart-close');
    if (mobileCartCloseBtn) {
      if (!carrinhoAside || !carrinhoAside.classList.contains('mobile-open')) {
        mobileCartCloseBtn.style.display = 'none';
      }
    }
        // show footer only on inicio
        const footerEl = document.querySelector('footer');
        if (footerEl) footerEl.style.display = '';
      } else if (categoria === 'carrinho') {
        // hide reports when opening cart
        const relSection = document.getElementById('relatorios'); if (relSection) relSection.style.display = 'none';
        // On mobile, prefer opening cart only from product views via floating toggle.
        if (isMobile) {
          // If on mobile and a product view is active, open cart; otherwise, switch to products first
          const productsVisible = produtosContainer && produtosContainer.style.display !== 'none';
          if (!productsVisible) {
            // switch to products view, then leave cart closed (user can tap floating icon)
            telaInicial.style.display = "none";
            telaInicial.classList.remove('active');
            inicioConteudo.classList.remove('show');
            produtosContainer.style.display = "flex";
            carrinhoAside.style.display = "none";
            const footerEl = document.querySelector('footer');
            if (footerEl) footerEl.style.display = 'none';
            ensureMobileCartToggle();
            if (mobileCartToggle) mobileCartToggle.style.display = '';
            return; // stop; user can open cart via floating toggle
          }
        }
  // show only the cart (desktop or explicit mobile flow)
  telaInicial.style.display = "none";
  telaInicial.classList.remove('active');
  inicioConteudo.classList.remove('show');
  produtosContainer.style.display = "none";
  carrinhoAside.style.display = "block";
  const footerEl = document.querySelector('footer');
  if (footerEl) footerEl.style.display = 'none';
  ensureMobileCartToggle();
  // hide floating toggle when cart is visible on mobile to avoid overlap
  if (isMobile && mobileCartToggle) mobileCartToggle.style.display = 'none';
  // show the mobile close button when cart is visible on small screens
  const mobileCartCloseBtn = document.getElementById('mobile-cart-close');
  if (isMobile && mobileCartCloseBtn) {
    mobileCartCloseBtn.style.display = 'flex';
    // position it near cart (CSS already sets absolute positioning in style.css)
    mobileCartCloseBtn.style.position = 'fixed';
    mobileCartCloseBtn.style.top = '8px';
    mobileCartCloseBtn.style.right = '10px';
    mobileCartCloseBtn.style.zIndex = '10040';
    mobileCartCloseBtn.style.width = '40px';
    mobileCartCloseBtn.style.height = '40px';
    mobileCartCloseBtn.style.alignItems = 'center';
    mobileCartCloseBtn.style.justifyContent = 'center';
    mobileCartCloseBtn.style.border = 'none';
    mobileCartCloseBtn.style.borderRadius = '8px';
    mobileCartCloseBtn.style.background = 'rgba(0,0,0,0.6)';
    mobileCartCloseBtn.style.color = '#fff';
    mobileCartCloseBtn.style.cursor = 'pointer';
    mobileCartCloseBtn.style.display = 'flex';
  }
      } else {
        // hide reports when viewing products
        const relSection = document.getElementById('relatorios'); if (relSection) relSection.style.display = 'none';
        // show product list only; do NOT show the cart here
        telaInicial.style.display = "none";
        telaInicial.classList.remove('active');
        inicioConteudo.classList.remove('show');
        produtosContainer.style.display = "flex";
  // keep the cart hidden unless user explicitly opens it via menu or mobile toggle
  carrinhoAside.style.display = "none";
        // hide footer on product views
        const footerEl = document.querySelector('footer');
        if (footerEl) footerEl.style.display = 'none';
        ensureMobileCartToggle(); // ensure the mobile cart toggle exists (no-op on desktop)
        // on mobile, make sure the floating toggle is visible when viewing products
  if (isMobile && mobileCartToggle) mobileCartToggle.style.display = '';
      // ensure close button hidden when viewing products (unless cart is open)
      const mobileCartCloseBtn2 = document.getElementById('mobile-cart-close');
      if (mobileCartCloseBtn2) {
        if (!carrinhoAside || !carrinhoAside.classList.contains('mobile-open')) {
          mobileCartCloseBtn2.style.display = 'none';
        }
      }
        mostrarProdutos(categoria);
      }
    });
  });

  // Show categorias when clicking the hero CTA
  const verBtn = document.getElementById('ver-cardapio');
  if (verBtn) {
    verBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      try {
        const telaInicial = document.getElementById('tela-inicial');
        const categoriasEl = document.getElementById('categorias');
        const produtosContainer = document.getElementById('produtos');
        if (telaInicial) telaInicial.style.display = 'none';
        if (categoriasEl) categoriasEl.style.display = 'grid';
        if (produtosContainer) produtosContainer.style.display = 'none';
        // smooth scroll to categorias
        categoriasEl && categoriasEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (err) {
        console.warn('Erro ao abrir categorias via ver-cardapio:', err);
      }
    });
  }

  // wire category shortcut cards (.cat-card) to behave like header menu items
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = card.dataset.category;
      if (!cat) return;
      // hide categories panel when user selects a category so it doesn't remain visible
      try {
        const categoriasEl = document.getElementById('categorias');
        if (categoriasEl) categoriasEl.style.display = 'none';
      } catch (err) {
        // ignore
      }
      const menuItem = document.querySelector(`.menu-item[data-category="${cat}"]`);
      if (menuItem) { menuItem.click(); return; }
      // fallback: show products directly
      try {
        const produtosContainer = document.getElementById('produtos');
        const telaInicial = document.getElementById('tela-inicial');
        if (telaInicial) telaInicial.style.display = 'none';
        if (produtosContainer) produtosContainer.style.display = 'flex';
        mostrarProdutos(cat);
      } catch (err) {
        console.warn('Erro ao navegar via cat-card:', err);
      }
    });
  });

  // on initial load, trigger the animation for the welcome block
  const splash = document.getElementById('splash');
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function startInitialAnimations() {
    // initial entrance: lift curtain then show children
    setTimeout(() => {
      telaInicial.classList.add('active');
      setTimeout(() => inicioConteudo.classList.add('show'), 260);
    }, 150);
  }

  if (prefersReduced) {
    // skip splash entirely
    if (splash) splash.remove();
    startInitialAnimations();
  } else if (splash) {
    // show splash, then animate out and start page animations
    // allow its CSS animation to run, then add 'out' to play exit
    setTimeout(() => {
      splash.classList.add('out');
      // remove splash after its exit animation
      setTimeout(() => {
        splash.remove();
        startInitialAnimations();
      }, 480);
    }, 900); // keep splash visible for ~900ms
  } else {
    startInitialAnimations();
  }

  function mostrarProdutos(categoria) {
    // ensure the categories panel (shortcut grid) is hidden whenever products are shown
    try {
      const categoriasEl = document.getElementById('categorias');
      if (categoriasEl) categoriasEl.style.display = 'none';
    } catch (err) {
      // ignore
    }
    // ensure a centered inner wrapper exists so title and grid align
    let inner = produtosContainer.querySelector('.produtos-inner');
    if (!inner) {
      produtosContainer.innerHTML = '';
      inner = document.createElement('div');
      inner.className = 'produtos-inner';
      produtosContainer.appendChild(inner);
    }
    // always clear inner content to avoid leftover submenu/cards from previous category
    inner.innerHTML = '';

    // ensure grid exists inside the inner wrapper
    let grid = inner.querySelector('.cards-container');
    if (!grid) {
      grid = document.createElement('div');
      grid.className = 'cards-container';
      inner.appendChild(grid);
    } else {
      grid.innerHTML = '';
    }

    // category -> title mapping (custom names; uppercase as requested)
    const categoryTitles = {
      macarronada: 'MACARRONADAS',
      cachorro: 'CACHORROS QUENTES',
      batatas: 'BATATAS FRITAS',
    };

    // Special handling for 'bebidas': show submenu (Refrigerantes / Sucos)
    if (categoria === 'bebidas') {
      // build bebidas section with submenu and product list
      inner.innerHTML = '';
      const sec = document.createElement('section'); sec.id = 'bebidas';
      const h2 = document.createElement('h2'); h2.className = 'section-title'; h2.textContent = 'BEBIDAS';
      sec.appendChild(h2);

      const submenu = document.createElement('div'); submenu.id = 'submenu-bebidas'; submenu.className = 'submenu-bebidas';
      const btnRef = document.createElement('button'); btnRef.className = 'categoria-btn'; btnRef.dataset.categoria = 'refrigerantes'; btnRef.textContent = '🥤 Refrigerantes';
      const btnSuc = document.createElement('button'); btnSuc.className = 'categoria-btn'; btnSuc.dataset.categoria = 'sucos'; btnSuc.textContent = '🧃 Sucos';
      submenu.appendChild(btnRef); submenu.appendChild(btnSuc);

      const lista = document.createElement('div'); lista.id = 'lista-bebidas'; lista.className = 'lista-produtos';
      sec.appendChild(submenu); sec.appendChild(lista);
      inner.appendChild(sec);

      // categories data
      const bebidasCategorias = {
        refrigerantes: [
          { nome: 'Refrigerante Lata 350ML', preco: 5.00, imagem: 'imagens/coca-cola-logo.jpg' },
          { nome: 'Refrigerante 1L', preco: 8.00, imagem: 'imagens/coca-cola-logo.jpg' },
          { nome: 'Refrigerante 2L', preco: 12.00, imagem: 'imagens/coca-cola-logo.jpg' },
          { nome: 'Guaraná Lata 350ML', preco: 5.00, imagem: 'imagens/guarana-logo.jpg' },
          { nome: 'Guaraná 1L', preco: 8.00, imagem: 'imagens/guarana-logo.jpg' },
          { nome: 'Guaraná 2L', preco: 12.00, imagem: 'imagens/guarana-logo.jpg' }
        ],
        sucos: [
          { nome: 'Suco de Laranja 300ML', preco: 6.00, imagem: 'imagens/suco-fanta.jpg' },
          { nome: 'Suco de Maracujá 300ML', preco: 6.00, imagem: 'imagens/suco-maracuja.jpg' },
          { nome: 'Suco de Goiaba 300ML', preco: 6.00, imagem: 'imagens/suco-goiaba.png' },
          { nome: 'Suco de Uva 300ML', preco: 6.00, imagem: 'imagens/suco-uva.png' }
        ]
      };

      // render function for bebida lists
      function renderizarProdutosBebida(lista) {
        const container = document.getElementById('lista-bebidas');
        if (!container) return;
        container.innerHTML = '';
        lista.forEach(prod => {
          const card = document.createElement('div'); card.className = 'produto'; card.dataset.prodName = prod.nome;
          card.innerHTML = `
            <img src="${prod.imagem}" alt="${prod.nome}">
            <h3>${prod.nome}</h3>
            <p class="descricao">${prod.descricao || ''}</p>
            <p class="price">R$ ${prod.preco.toFixed(2)}</p>
            <div class="produto-actions">
              <button class="adicionar">➕ <span class="btn-text">Adicionar</span></button>
              <span class="card-qty" aria-live="polite" aria-atomic="true" style="display:none">0</span>
              <button class="remover">➖ <span class="btn-text">Remover</span></button>
            </div>
          `;
          const btnAdd = card.querySelector('.adicionar'); const btnRem = card.querySelector('.remover');
          btnAdd && btnAdd.addEventListener('click', () => adicionarCarrinho(prod));
          btnRem && btnRem.addEventListener('click', () => removerCarrinho(prod.nome));
          container.appendChild(card);
          updateCardQty(prod.nome);
        });
      }

      // wire submenu buttons
      [btnRef, btnSuc].forEach(b => b.addEventListener('click', () => {
        const cat = b.dataset.categoria;
        renderizarProdutosBebida(bebidasCategorias[cat]);
        // active class
        [btnRef, btnSuc].forEach(x => x.classList.remove('ativo'));
        b.classList.add('ativo');
      }));

      // default: show refrigerantes
      btnRef.classList.add('ativo');
      renderizarProdutosBebida(bebidasCategorias.refrigerantes);
      return;
    }

    const titleText = categoryTitles[categoria];
    if (titleText) {
      const title = document.createElement('h2');
      title.className = 'section-title';
      title.textContent = titleText;
      // insert title before the grid wrapper inside the inner wrapper
      inner.insertBefore(title, grid);
    }

    produtos[categoria].forEach(prod => {
      const div = document.createElement("div");
      div.classList.add("produto");
      // expose product name on the element so we can update its badge later
      div.dataset.prodName = prod.nome;
      div.innerHTML = `
        <img src="${prod.imagem}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
          <p class="descricao">${prod.descricao}</p>
        <p class="price">R$ ${prod.preco.toFixed(2)}</p>
        <div class="produto-actions">
          <button class="adicionar" aria-label="Adicionar">➕ <span class="btn-text">Adicionar</span></button>
          <span class="card-qty" aria-live="polite" aria-atomic="true" style="display:none">0</span>
          <button class="remover" aria-label="Remover">➖ <span class="btn-text">Remover</span></button>
        </div>
      `;
      const btnAdd = div.querySelector(".adicionar");
      const btnRemove = div.querySelector(".remover");

      btnAdd.addEventListener("click", () => adicionarCarrinho(prod));
      btnRemove.addEventListener("click", () => removerCarrinho(prod.nome));
      grid.appendChild(div);
      // reflect current cart qty on the card if item already in cart
      updateCardQty(prod.nome);
    });
  }

  // helper: update the on-card quantity badge for a given product name
  function updateCardQty(prodName) {
    // find all cards and update those matching the name (handles duplicates gracefully)
    const cards = document.querySelectorAll('.produto');
    cards.forEach(card => {
      if (!card.dataset || card.dataset.prodName !== prodName) return;
      const badge = card.querySelector('.card-qty');
      const qty = carrinho[prodName] ? carrinho[prodName].qty : 0;
      if (!badge) return;
      if (qty > 0) {
        badge.textContent = qty;
        badge.style.display = 'inline-block';
      } else {
        badge.textContent = '0';
        badge.style.display = 'none';
      }
    });
  }

  function atualizarCarrinho() {
    itensCarrinho.innerHTML = "";
    let total = 0;
    Object.keys(carrinho).forEach(key => {
      const entry = carrinho[key];
      const li = document.createElement('li');
      const name = document.createElement('span');
  name.className = 'cart-item-name';
  name.textContent = `${entry.produto.nome} - R$ ${entry.produto.preco.toFixed(2)}`;
      const qtyControls = document.createElement('span');
      qtyControls.className = 'cart-qty';
      const btnDec = document.createElement('button'); btnDec.textContent = '-';
      const qty = document.createElement('span'); qty.className = 'qty'; qty.textContent = entry.qty;
      const btnInc = document.createElement('button'); btnInc.textContent = '+';
      btnDec.addEventListener('click', () => {
        if (entry.qty > 1) { entry.qty--; } else { delete carrinho[key]; }
        atualizarCarrinho();
      });
      btnInc.addEventListener('click', () => {
        entry.qty++; atualizarCarrinho();
      });
      qtyControls.appendChild(btnDec);
      qtyControls.appendChild(qty);
      qtyControls.appendChild(btnInc);
      li.appendChild(name);
      li.appendChild(document.createTextNode(' '));
      li.appendChild(qtyControls);
      itensCarrinho.appendChild(li);
      total += entry.produto.preco * entry.qty;
    });
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    // update mobile toggle badge if exists
    const toggle = document.getElementById('mobile-cart-toggle');
    if (toggle) {
      const count = Object.values(carrinho).reduce((s, e) => s + e.qty, 0);
      toggle.setAttribute('data-count', count);
      toggle.title = `Carrinho (${count})`;
    }
  }

  function adicionarCarrinho(produto) {
    const key = produto.nome;
    if (carrinho[key]) {
      carrinho[key].qty++;
    } else {
      carrinho[key] = { produto: produto, qty: 1 };
    }
    atualizarCarrinho();
    showToast(`${produto.nome} adicionado ao carrinho`);
    // update badge on product card(s)
    updateCardQty(key);
    // animate the add button briefly on the visible card(s)
    const cards = document.querySelectorAll('.produto');
    cards.forEach(card => {
      if (card.dataset && card.dataset.prodName === key) {
        const addBtn = card.querySelector('.adicionar');
        if (addBtn) {
          addBtn.classList.add('btn-anim');
          setTimeout(() => addBtn.classList.remove('btn-anim'), 400);
        }
      }
    });
  }
  function removerCarrinho(nome) {
    if (carrinho[nome]) {
      if (carrinho[nome].qty > 1) {
        carrinho[nome].qty--;
      } else {
        delete carrinho[nome];
      }
      atualizarCarrinho();
      updateCardQty(nome);
    }
  }

  // Toast helper is defined globally below so reporting code can call it

  if (limparBtn) {
    limparBtn.addEventListener('click', () => {
      const totalItems = Object.values(carrinho).reduce((s, e) => s + e.qty, 0);
      if (totalItems === 0) return alert('Carrinho já está vazio.');
      if (!confirm('Deseja realmente limpar o carrinho?')) return;
      Object.keys(carrinho).forEach(k => delete carrinho[k]);
      atualizarCarrinho();
    });
  }

  if (finalizarButton) {
    finalizarButton.addEventListener("click", () => {
    // show confirmation modal with order summary
    const totalItems = Object.values(carrinho).reduce((s, e) => s + e.qty, 0);
    if (totalItems === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const textoList = Object.values(carrinho).map(e => `• ${e.produto.nome} x${e.qty} - R$ ${(e.produto.preco * e.qty).toFixed(2)}`).join("\n");
    const total = Object.values(carrinho).reduce((s, e) => s + e.produto.preco * e.qty, 0).toFixed(2);

    // create or get modal; include name field and delivery fee note
    let modal = document.getElementById('confirm-modal');
    const isMobileModal = window.matchMedia && window.matchMedia('(max-width:600px)').matches;
    let prevCarrinhoDisplay;
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'confirm-modal';
      modal.innerHTML = `
        <div class="modal-card">
          <h3>Confirmar pedido</h3>
          <div class="modal-body">
            <pre id="modal-summary" style="white-space:pre-wrap;">${textoList}\n\nTotal: R$ ${total}</pre>
            <label for="modal-name" style="display:block;margin-top:10px;font-weight:600">Nome</label>
            <input id="modal-name" type="text" style="width:100%;box-sizing:border-box;margin-top:6px" placeholder="Seu nome" />
            <label for="modal-address" style="display:block;margin-top:10px;font-weight:600">Endereço de entrega</label>
            <textarea id="modal-address" rows="2" style="width:100%;box-sizing:border-box;margin-top:6px" placeholder="Rua, número, bairro, complemento..."></textarea>
            <label for="modal-phone" style="display:block;margin-top:10px;font-weight:600">Telefone para contato</label>
            <input id="modal-phone" type="tel" style="width:100%;box-sizing:border-box;margin-top:6px" placeholder="(99) 9 9999-9999" />
            <p style="font-size:0.95rem;color:#333;margin-top:8px;">Taxa de entrega: o valor será calculado no WhatsApp.</p>
            <div style="display:flex;gap:8px;margin-top:10px;align-items:center;">
              <button id="modal-location">Usar minha localização</button>
              <input id="modal-location-link" type="text" readonly style="flex:1;" placeholder="Nenhuma localização definida" />
            </div>
          </div>
          <div class="modal-actions">
            <button id="modal-cancel">Cancelar</button>
            <button id="modal-confirm">Confirmar</button>
          </div>
        </div>`;
      document.body.appendChild(modal);
    } else {
      const summary = modal.querySelector('#modal-summary');
      if (summary) summary.textContent = `${textoList}\n\nTotal: R$ ${total}`;
      const addr = modal.querySelector('#modal-address');
      const phone = modal.querySelector('#modal-phone');
      const name = modal.querySelector('#modal-name');
      if (addr) addr.value = '';
      if (phone) phone.value = '';
      if (name) name.value = '';
    }

    // On mobile, minimize the cart (shrink to a small bar) instead of fully hiding it
    // This keeps the confirm form visible while preserving cart context
    let prevCarrinhoMinimized = false;
    if (isMobileModal && carrinhoAside) {
      prevCarrinhoMinimized = carrinhoAside.classList.contains('minimized');
      carrinhoAside.classList.add('minimized');
    }
    if (isMobileModal && mobileCartToggle) mobileCartToggle.style.display = 'none';
    // also hide mobile cart close button if present so it won't overlap the modal
    if (isMobileModal) {
      const mobileCartCloseBtn = document.getElementById('mobile-cart-close');
        if (mobileCartCloseBtn) {
          if (!carrinhoAside || !carrinhoAside.classList.contains('mobile-open')) {
            mobileCartCloseBtn.style.display = 'none';
          }
        }
    }

    modal.classList.add('active');

    // attach location handler
    const btnLoc = modal.querySelector('#modal-location');
    const locInput = modal.querySelector('#modal-location-link');
    if (btnLoc) {
      btnLoc.onclick = (ev) => {
        ev.preventDefault();
        if (!navigator.geolocation) {
          alert('Geolocalização não é suportada no seu navegador.');
          return;
        }
        btnLoc.disabled = true;
        btnLoc.textContent = 'Obtendo...';
        navigator.geolocation.getCurrentPosition((pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const mapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
          if (locInput) locInput.value = mapsLink;
          btnLoc.textContent = 'Localização obtida';
          btnLoc.disabled = false;
        }, (err) => {
          alert('Não foi possível obter a localização: ' + (err.message || err.code));
          btnLoc.textContent = 'Usar minha localização';
          btnLoc.disabled = false;
        }, { enableHighAccuracy: true, timeout: 10000 });
      };
    }

    const btnCancel = document.getElementById('modal-cancel');
    const btnConfirm = document.getElementById('modal-confirm');

    function closeModal() {
      modal.classList.remove('active');
      // restore cart and toggle on mobile
      if (isMobileModal) {
        if (carrinhoAside) {
          // restore previous minimized state
          if (!prevCarrinhoMinimized) {
            carrinhoAside.classList.remove('minimized');
          } else {
            carrinhoAside.classList.add('minimized');
          }
        }
        if (mobileCartToggle) mobileCartToggle.style.display = '';
        const mobileCartCloseBtn = document.getElementById('mobile-cart-close');
        if (mobileCartCloseBtn) {
          if (!carrinhoAside || !carrinhoAside.classList.contains('mobile-open')) {
            mobileCartCloseBtn.style.display = 'none';
          }
        }
      }
    }

    btnCancel.onclick = () => { closeModal(); };

    btnConfirm.onclick = () => {
      // validate name, address and phone
      const nameInput = modal.querySelector('#modal-name');
      const addrInput = modal.querySelector('#modal-address');
      const phoneInput = modal.querySelector('#modal-phone');
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const address = addrInput ? addrInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      if (!nameVal) {
        alert('Por favor, informe seu nome.');
        if (nameInput) nameInput.focus();
        return;
      }
      if (!address) {
        alert('Por favor, informe o endereço de entrega.');
        if (addrInput) addrInput.focus();
        return;
      }
      if (!phone) {
        alert('Por favor, informe o número de celular para contato.');
        if (phoneInput) phoneInput.focus();
        return;
      }
  // append order to owner panel
      const ownerPanel = document.getElementById('owner-pedidos');
      const pedidosList = document.getElementById('pedidos-list');
      let ownerLi = null;
      if (ownerPanel && pedidosList) {
        ownerPanel.style.display = 'block';
        const li = document.createElement('li');
        li.className = 'pedido-item';
        const itemsText = Object.values(carrinho).map(e=>e.produto.nome + (e.qty>1?(' x'+e.qty):'')).join(', ');
        li.innerHTML = `
          <div class="pedido-main">
            <div class="pedido-top">
              <div class="pedido-meta">
                <div class="pedido-time">${new Date().toLocaleString()}</div>
                <div class="pedido-total">R$ ${total}</div>
              </div>
              <div class="pedido-actions">
                <button class="pedido-btn view-whatsapp">WhatsApp</button>
                <button class="pedido-btn pedido-delete">Excluir</button>
              </div>
            </div>
            <div class="pedido-items">${itemsText}</div>
            <div class="pedido-address">${address}</div>
            <div class="pedido-phone">${phone}</div>
          </div>
        `;
        // prepend so newest appear first
        pedidosList.prepend(li);
        ownerLi = li;

        // wire actions
        const waBtn = li.querySelector('.view-whatsapp');
        const delBtn = li.querySelector('.pedido-delete');
        if (waBtn) waBtn.addEventListener('click', () => {
          // show preview modal with decoded message so owner can edit before sending
          const preview = document.getElementById('wa-preview-modal');
          const txt = document.getElementById('wa-preview-text');
          if (txt && preview) {
            try {
              // show decoded message for read-only preview
              const decoded = decodeURIComponent(encodedMessage);
              txt.value = decoded;
            } catch (e) {
              txt.value = '';
            }
            preview.style.display = 'flex';
          }
        });
        if (delBtn) delBtn.addEventListener('click', async () => {
          const ok = await verifyAdminPassword();
          if (!ok) return alert('Senha inválida ou ação cancelada.');
          if (li && li.parentNode) li.parentNode.removeChild(li);
          showToast('Pedido removido do painel.');
          updateOrdersBadge(-1);
        });
        // increment badge
        updateOrdersBadge(1);
      }

    modal.querySelector('#modal-confirm').addEventListener('click', () => {
  const nome = document.getElementById('modal-name').value.trim();
  const endereco = document.getElementById('modal-address').value.trim();
  const telefone = document.getElementById('modal-phone').value.trim();
  const locationLink = document.getElementById('modal-location-link').value.trim();
  
  if (!nome || !endereco || !telefone) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const mensagem = 
`🍔 *Novo Pedido - Chinês Lanches*
👤 Nome: ${nome}
🏠 Endereço: ${endereco}
📞 Telefone: ${telefone}
📍 Localização: ${locationLink || "Não informada"}

🛒 *Itens do pedido:*
${textoList}

💰 *Total:* R$ ${total}
  
Aguardando confirmação da taxa de entrega.`;

  const numeroLoja = "5598985814695"; // coloque o número da lanchonete
  const url = `https://wa.me/${5598985814695}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');

  modal.remove();
});

    // Persistir venda no histórico (localStorage) ANTES de limpar o carrinho
    let saleObj = null;
    try {
      const salesRaw = localStorage.getItem('chinez_sales_history');
      const sales = salesRaw ? JSON.parse(salesRaw) : [];
      saleObj = {
        id: `sale_${Date.now()}`,
        timestamp: new Date().toISOString(),
        total: Number(total),
        items: Object.values(carrinho).map(e => ({ nome: e.produto.nome, preco: e.produto.preco, qty: e.qty }))
      };
      sales.push(saleObj);
      localStorage.setItem('chinez_sales_history', JSON.stringify(sales));
      showToast('Venda registrada para relatórios.');
    } catch (err) {
      console.error('Erro ao salvar histórico de vendas:', err);
    }

    // Attempt to send sale to backend server (if configured). This is best-effort
    // so it will not block the user flow if the server is offline.
    if (saleObj) {
      (async function trySendToServer(sale) {
        try {
          // configure SERVER_URL via global variable or default to localhost:3000
          const SERVER_URL = window.SERVER_URL || 'http://localhost:3000';
          const endpoint = SERVER_URL.replace(/\/$/, '') + '/sale';
          // attempt POST and remove from localStorage only on success
          const headers = { 'Content-Type': 'application/json' };
          if (window.SALE_TOKEN) headers['x-sale-token'] = window.SALE_TOKEN;
          const r = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(sale) });
          if (r.ok) {
            console.info('Venda enviada ao servidor:', endpoint);
            try {
              const raw = localStorage.getItem('chinez_sales_history');
              const arr = raw ? JSON.parse(raw) : [];
              const filtered = arr.filter(s => s.id !== sale.id);
              localStorage.setItem('chinez_sales_history', JSON.stringify(filtered));
            } catch (e) {
              console.warn('Não foi possível atualizar localStorage após envio:', e);
            }
          } else {
            console.warn('Servidor respondeu com erro ao enviar venda:', r.status);
            if (r.status === 403) {
              showToast('Venda não autorizada (token inválido). Verifique a configuração do sistema.');
            } else {
              showToast('Erro ao enviar pedido ao servidor. Será tentado novamente mais tarde.');
            }
          }
          } catch (err) {
            // ignore network errors but log for debugging
            console.warn('Não foi possível enviar venda ao servidor:', err, 'endpoint=', endpoint);
          }
      })(saleObj);
    }

    closeModal();
    // limpar carrinho (mantém a referência do objeto)
    Object.keys(carrinho).forEach(k => delete carrinho[k]);
    atualizarCarrinho();


      // remover o pedido do painel do proprietário após abrir o WhatsApp
      // ( pequena espera para que seja visível por um momento )
      setTimeout(() => {
        if (ownerLi && ownerLi.parentNode) {
          ownerLi.remove();
        }
        // se não houver mais pedidos, esconder o painel
        const pedidosListNow = document.getElementById('pedidos-list');
        const ownerPanelNow = document.getElementById('owner-pedidos');
        if (pedidosListNow && ownerPanelNow) {
          if (pedidosListNow.children.length === 0) ownerPanelNow.style.display = 'none';
        }
      }, 800);
    };
  });
  
  }

  // ensure the mobile cart toggle exists (no-op on desktop) after initial animations
  // also ensure it's hidden when the inicio screen is active
  setTimeout(() => {
    ensureMobileCartToggle();
    try {
      const isHomeVisible = telaInicial && getComputedStyle(telaInicial).display !== 'none';
      if (isHomeVisible && mobileCartToggle) mobileCartToggle.style.display = 'none';
    } catch (err) {
      // ignore
    }
  }, 600);

  // set initial footer visibility: show on inicio, hide on others
  setTimeout(() => {
    const footerEl = document.querySelector('footer');
    if (!footerEl) return;
    if (telaInicial && getComputedStyle(telaInicial).display !== 'none') {
      footerEl.style.display = '';
    } else {
      footerEl.style.display = 'none';
    }
  }, 700);

});

// Hidden admin shortcut: press Ctrl+Shift+A to reveal an Admin button (useful without showing it in header)
(function adminShortcut() {
  let adminBtn = null;
  function createBtn() {
    if (adminBtn) return adminBtn;
    adminBtn = document.createElement('button');
    adminBtn.textContent = 'Admin';
    adminBtn.style.position = 'fixed';
    adminBtn.style.bottom = '14px';
    adminBtn.style.right = '14px';
    adminBtn.style.padding = '8px 10px';
    adminBtn.style.borderRadius = '8px';
    adminBtn.style.display = 'none';
    adminBtn.style.zIndex = '11000';
    adminBtn.style.background = '#fff';
    adminBtn.style.border = '1px solid #ccc';
    adminBtn.style.cursor = 'pointer';
    document.body.appendChild(adminBtn);
    adminBtn.addEventListener('click', () => {
      const base = (window.SERVER_URL || 'http://localhost:3000').replace(/\/$/, '');
      window.open(base + '/admin/login', '_blank');
    });
    return adminBtn;
  }
  window.addEventListener('keydown', (ev) => {
    if (ev.ctrlKey && ev.shiftKey && ev.key && ev.key.toLowerCase() === 'a') {
      const btn = createBtn();
      btn.style.display = btn.style.display === 'none' ? 'block' : 'none';
    }
  });
})();

// Make showToast available globally (used by reports code outside the initial DOMContentLoaded scope)
function showToast(text, timeout = 1800) {
  const toastRoot = document.getElementById('toast');
  if (!toastRoot) return;
  const msg = document.createElement('div');
  msg.className = 'toast-msg';
  msg.textContent = text;
  toastRoot.appendChild(msg);
  setTimeout(() => { msg.style.opacity = '0'; msg.style.transition = 'opacity 220ms'; }, timeout - 220);
  setTimeout(() => { if (msg.parentNode) msg.parentNode.removeChild(msg); }, timeout);
}

// Orders badge helper
function getOrdersBadgeEl() {
  return document.getElementById('orders-badge');
}
function updateOrdersBadge(deltaOrSet) {
  const el = getOrdersBadgeEl();
  if (!el) return;
  let cur = parseInt(el.textContent || '0', 10) || 0;
  if (typeof deltaOrSet === 'number') {
    cur = Math.max(0, cur + deltaOrSet);
  } else {
    cur = Number(deltaOrSet) || 0;
  }
  el.textContent = String(cur);
  el.style.display = cur > 0 ? 'inline-block' : 'none';
}

// Wire WA preview modal buttons
document.addEventListener('DOMContentLoaded', () => {
  const waModal = document.getElementById('wa-preview-modal');
  const waCancel = document.getElementById('wa-preview-cancel');
  if (waCancel) waCancel.addEventListener('click', () => { if (waModal) waModal.style.display = 'none'; });
});

// ---------------- RELATÓRIOS ----------------
// helpers to read sales history and compute monthly aggregates
function getSalesHistory() {
  try {
    const raw = localStorage.getItem('chinez_sales_history');
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Erro lendo histórico de vendas:', err);
    return [];
  }
}

// ---------------------------
// Extras: Open/Closed badge and scroll fade-ins
// ---------------------------

function updateOpenClosedBadge() {
  const badgeDesktop = document.getElementById('status-badge-desktop');
  const badgeMobile = document.getElementById('status-badge-mobile');
  // at least one badge should exist
  if (!badgeDesktop && !badgeMobile) return;
  try {
    const now = new Date();
    const hrs = now.getHours();
    const mins = now.getMinutes();
    // Store local business hours: open 18:00, close 23:00 (23:00 inclusive)
    const openHour = 18; const closeHour = 23;
    let open = false;
    if (hrs > openHour && hrs < closeHour) open = true;
    if (hrs === openHour && mins >= 0) open = true;
    if (hrs === closeHour && mins === 0) open = true; // show open at exact closing minute

    if (open) {
      if (badgeDesktop) { badgeDesktop.textContent = 'Aberto agora ✅'; badgeDesktop.style.color = '#bfffe0'; badgeDesktop.classList.add('aberto-agora'); badgeDesktop.classList.remove('fechado-agora'); }
      if (badgeMobile)  { badgeMobile.textContent  = 'Aberto agora ✅'; badgeMobile.style.color  = '#bfffe0'; badgeMobile.classList.add('aberto-agora'); badgeMobile.classList.remove('fechado-agora'); }
    } else {
      if (badgeDesktop) { badgeDesktop.textContent = 'Fechado ❌'; badgeDesktop.style.color = '#f8b4b4'; badgeDesktop.classList.remove('aberto-agora'); badgeDesktop.classList.add('fechado-agora'); }
      if (badgeMobile)  { badgeMobile.textContent  = 'Fechado ❌'; badgeMobile.style.color  = '#f8b4b4'; badgeMobile.classList.remove('aberto-agora'); badgeMobile.classList.add('fechado-agora'); }
    }
  } catch (err) {
    console.warn('Erro ao atualizar badge de status:', err);
  }
}

// run on load and update every 60s
try { updateOpenClosedBadge(); setInterval(updateOpenClosedBadge, 60 * 1000); } catch (e) { /* ignore */ }

// IntersectionObserver for fade-in on scroll
(function setupFadeOnScroll() {
  const items = document.querySelectorAll('.fade-item');
  if (!items || items.length === 0) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in-view');
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(i => obs.observe(i));
})();

function computeMonthlyReport(year, month) {
  // month: 1-12
  const sales = getSalesHistory();
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1); // exclusive
  let total = 0;
  const itemsMap = new Map(); // nome -> { qty, total }
  sales.forEach(s => {
    const ts = new Date(s.timestamp);
    if (ts >= start && ts < end) {
      total += Number(s.total || 0);
      (s.items || []).forEach(it => {
        const prev = itemsMap.get(it.nome) || { qty: 0, total: 0 };
        prev.qty += Number(it.qty || 0);
        prev.total += Number(it.preco || 0) * Number(it.qty || 0);
        itemsMap.set(it.nome, prev);
      });
    }
  });
  const items = Array.from(itemsMap.entries()).map(([nome, v]) => ({ nome, qty: v.qty, total: v.total }));
  items.sort((a, b) => b.qty - a.qty || b.total - a.total);
  return { total, items };
}

function renderReport(year, month) {
  const relSection = document.getElementById('relatorios');
  const relTotal = document.getElementById('rel-total');
  const tableContainer = document.getElementById('rel-table-container');
  if (!relSection || !relTotal || !tableContainer) return;
  const report = computeMonthlyReport(year, month);
  relTotal.textContent = `Total vendido: R$ ${report.total.toFixed(2)}`;
  // Prefer filling the semantic table body if present (#rel-table-body)
  if (report.items.length === 0) {
    const p = document.createElement('p'); p.textContent = 'Nenhuma venda neste mês.'; tableContainer.appendChild(p);
    return;
  }
  const semanticTbody = document.getElementById('rel-table-body');
  if (semanticTbody) {
    // Clear existing rows but keep static table in DOM
    semanticTbody.innerHTML = '';
    report.items.forEach(it => {
      const tr = document.createElement('tr');
      tr.dataset.nome = it.nome;
      tr.innerHTML = `
        <td>${escapeHtml(it.nome)}</td>
        <td>${it.qty}</td>
        <td>R$ ${Number(it.total / it.qty || it.total).toFixed(2)}</td>
        <td class="col-right">R$ ${it.total.toFixed(2)}</td>
        <td class="col-actions">
          <button class="row-btn view" title="Ver vendas deste item">${createIcon('view')}</button>
          <button class="row-btn export" title="Exportar vendas deste item">${createIcon('download')}</button>
          <button class="row-btn delete" title="Remover vendas deste item">${createIcon('trash')}</button>
        </td>
      `;
      // wire actions
      tr.querySelector('.row-btn.view').addEventListener('click', () => showSalesForItem(it.nome, year, month));
      tr.querySelector('.row-btn.export').addEventListener('click', () => exportItemCSV(it.nome, year, month));
      tr.querySelector('.row-btn.delete').addEventListener('click', async () => {
        if (!confirm(`Deseja realmente remover todas as vendas do item "${it.nome}" neste período?`)) return;
        const ok = await verifyAdminPassword();
        if (!ok) { alert('Senha inválida ou ação cancelada.'); return; }
        // remove sales that contain this item
        const all = getSalesHistory();
        const filtered = all.filter(s => !(s.items||[]).some(i => i.nome === it.nome));
        localStorage.setItem('chinez_sales_history', JSON.stringify(filtered));
        showToast('Vendas do item removidas do histórico.');
        // re-render
        renderReport(year, month);
        renderChartFromReport(computeMonthlyReport(year, month));
        renderSalesHistory(1, 6);
      });
      semanticTbody.appendChild(tr);
    });
  } else {
      // Fallback: build a plain table into the container (backwards compatibility)
      tableContainer.innerHTML = '';
      const table = document.createElement('table');
      table.style.width = '100%';
      table.style.borderCollapse = 'collapse';
      table.innerHTML = `
        <thead>
          <tr style="text-align:left;border-bottom:1px solid #ddd;">
            <th style="padding:8px">Produto</th>
            <th style="padding:8px">Quantidade</th>
            <th style="padding:8px">Preço unit.</th>
            <th style="padding:8px">Subtotal</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      const tbody = table.querySelector('tbody');
      report.items.forEach(it => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="padding:8px;border-bottom:1px solid #f0f0f0">${it.nome}</td>
          <td style="padding:8px;border-bottom:1px solid #f0f0f0">${it.qty}</td>
          <td style="padding:8px;border-bottom:1px solid #f0f0f0">R$ ${Number(it.total / it.qty || it.total).toFixed(2)}</td>
          <td style="padding:8px;border-bottom:1px solid #f0f0f0">R$ ${it.total.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
      });
      tableContainer.appendChild(table);
  }
}

// Small helper to escape HTML text
function escapeHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Create simple inline SVG icons (returns string)
function createIcon(name) {
  const size = 16;
  if (name === 'view') return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5c5 0 9 4 9 7s-4 7-9 7-9-4-9-7 4-7 9-7zm0 2a5 5 0 100 10 5 5 0 000-10zm0 3a2 2 0 110 4 2 2 0 010-4z" fill="currentColor"/></svg>`;
  if (name === 'download') return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20h14v-2H5v2zm7-18v10l4-4 1.4 1.4L12 16 6.6 11.4 8 10l4 4V2h0z" fill="currentColor"/></svg>`;
  if (name === 'trash') return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/></svg>`;
  return '';
}

// Show a modal listing sales that contain a specific item
function showSalesForItem(itemName, year, month) {
  let modal = document.getElementById('rel-item-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'rel-item-modal';
    modal.className = 'readable-panel';
    modal.style.position = 'fixed';
    modal.style.inset = '10% 8%';
    modal.style.zIndex = 12000;
    modal.style.overflow = 'auto';
    modal.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><h3>Vendas do item</h3><button id="rel-item-close">Fechar</button></div><div id="rel-item-list" style="margin-top:12px"></div>`;
    document.body.appendChild(modal);
    document.getElementById('rel-item-close').addEventListener('click', () => { modal.remove(); });
  }
  const list = modal.querySelector('#rel-item-list');
  list.innerHTML = '';
  const sales = getSalesHistory();
  const filtered = sales.filter(s => (s.items||[]).some(i => i.nome === itemName));
  if (filtered.length === 0) { list.textContent = 'Nenhuma venda encontrada para este item.'; return; }
  filtered.forEach(s => {
    const div = document.createElement('div');
    div.style.borderBottom = '1px solid #eee';
    div.style.padding = '8px 6px';
    const lines = (s.items||[]).map(it => `${it.nome} x${it.qty} (R$ ${Number(it.preco).toFixed(2)})`).join(' • ');
    div.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-start"><div><strong>${new Date(s.timestamp).toLocaleString()}</strong><div style="font-size:0.95rem;color:#333;margin-top:6px">${lines}</div><div style="margin-top:6px;color:#666">Total: R$ ${Number(s.total).toFixed(2)}</div></div><div style="display:flex;flex-direction:column;gap:6px"><button class="mini-export">${createIcon('download')} Exportar</button><button class="mini-delete">${createIcon('trash')} Excluir</button></div></div>`;
    const btnExp = div.querySelector('.mini-export');
    const btnDel = div.querySelector('.mini-delete');
    if (btnExp) btnExp.addEventListener('click', () => {
      // export this sale to CSV (single sale rows)
      const rows = [['Data','VendaID','Produto','Quantidade','Preço unit.','Subtotal']];
      (s.items||[]).forEach(it => rows.push([new Date(s.timestamp).toLocaleString(), s.id, it.nome, it.qty, Number(it.preco).toFixed(2), (Number(it.preco)*Number(it.qty)).toFixed(2)]));
      const lines = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\r\n');
      const csv = '\uFEFFsep=,\r\n' + lines + '\r\n';
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = `sale_${s.id}.csv`; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 4000);
    });
    if (btnDel) btnDel.addEventListener('click', async () => {
      if (!confirm('Excluir esta venda?')) return;
      const ok = await verifyAdminPassword(); if (!ok) { alert('Senha inválida ou ação cancelada.'); return; }
      const all = getSalesHistory(); const filteredAll = all.filter(x => x.id !== s.id); localStorage.setItem('chinez_sales_history', JSON.stringify(filteredAll)); showToast('Venda excluída.'); renderSalesHistory(1,6); renderReport(year, month); renderChartFromReport(computeMonthlyReport(year, month));
      div.remove();
    });
    list.appendChild(div);
  });
}

// Export all sales lines that contain a specific item as CSV
function exportItemCSV(itemName, year, month) {
  const sales = getSalesHistory();
  const rows = [];
  rows.push(['Data','VendaID','Produto','Quantidade','Preço unit.','Subtotal']);
  sales.forEach(s => {
    const ts = new Date(s.timestamp);
    if (!(ts.getFullYear() === year && (ts.getMonth()+1) === month)) return;
    (s.items||[]).forEach(it => {
      if (it.nome === itemName) rows.push([new Date(s.timestamp).toLocaleString(), s.id, it.nome, it.qty, Number(it.preco).toFixed(2), (Number(it.preco)*Number(it.qty)).toFixed(2)]);
    });
  });
  if (rows.length === 1) { alert('Nenhuma venda para exportar deste item neste mês.'); return; }
  const lines = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const csv = '\uFEFFsep=,\r\n' + lines + '\r\n';
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `item_${sanitizeFilename(itemName)}_${year}_${String(month).padStart(2,'0')}.csv`; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 4000);
}

function sanitizeFilename(s) { return String(s).replace(/[^a-z0-9\-_\.]/gi, '_'); }

function exportReportCSV(year, month) {
  const report = computeMonthlyReport(year, month);
  const rows = [];
  // Header: Mês in first column, item-columns next to it
  rows.push(['Mês', 'Item', 'Quantidade', 'Valor']);
  // Put the month value on the next line under the 'Mês' column
  rows.push([`${year}-${String(month).padStart(2,'0')}`, '', '', '']);
  // Each item row: leave the month cell empty to align under Item columns
  report.items.forEach(it => rows.push(['', it.nome, it.qty, it.total.toFixed(2)]));
  // blank line then total at the bottom (under the Item column)
  rows.push([]);
  rows.push(['', 'Total vendido', '', report.total.toFixed(2)]);
  // Prefix with UTF-8 BOM and an Excel-friendly separator line to avoid
  // broken accents when opened in Excel on Windows. Use CRLF for line endings.
  const sepLine = 'sep=,';
  const lines = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const csv = '\uFEFF' + sepLine + '\r\n' + lines + '\r\n';
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `relatorio_${year}_${String(month).padStart(2,'0')}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 5000);
}

// Export detailed CSV: one row per sale line (date, saleId, produto, qty, preco, subtotal)
function exportDetailedCSV(mode, year, month, day) {
  const sales = getSalesHistory();
  const rows = [];
  rows.push(['Data', 'VendaID', 'Produto', 'Quantidade', 'Preço unit.', 'Subtotal']);
  sales.forEach(s => {
    const ts = new Date(s.timestamp);
    if (mode === 'month') {
      if (!(ts.getFullYear() === year && (ts.getMonth() + 1) === month)) return;
    } else if (mode === 'day') {
      if (!(ts.getFullYear() === year && (ts.getMonth() + 1) === month && ts.getDate() === day)) return;
    }
    (s.items || []).forEach(it => {
      rows.push([
        new Date(s.timestamp).toLocaleString(),
        s.id,
        it.nome,
        it.qty,
        Number(it.preco).toFixed(2),
        (Number(it.preco) * Number(it.qty)).toFixed(2)
      ]);
    });
  });
  if (rows.length === 1) { alert('Nenhum dado para exportar nesse período.'); return; }
  // Prefix with UTF-8 BOM and an Excel-friendly separator line to avoid
  // broken accents when opened in Excel on Windows. Use CRLF for line endings.
  const sepLine = 'sep=,';
  const lines = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const csv = '\uFEFF' + sepLine + '\r\n' + lines + '\r\n';
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `relatorio_detalhado_${mode}_${year}_${String(month).padStart(2,'0')}${mode==='day'?`_${String(day).padStart(2,'0')}`:''}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 5000);
}

// Export as real XLSX using SheetJS so Excel opens with correct encoding/formatting
function exportReportXLSX(year, month) {
  try {
    const report = computeMonthlyReport(year, month);
    const wb = XLSX.utils.book_new();
    const wsData = [];
  // Header: Mês in first column, item-columns next to it
  wsData.push(['Mês', 'Item', 'Quantidade', 'Valor']);
  // Put the month value on the next line under the 'Mês' column
  wsData.push([`${year}-${String(month).padStart(2,'0')}`, '', '', '']);
  // Item rows: leave the month cell empty for subsequent rows
  report.items.forEach(it => wsData.push(['', it.nome, it.qty, Number(it.total).toFixed(2)]));
  // blank row then total at the bottom under the Item column
  wsData.push([]);
  wsData.push(['', 'Total vendido', '', report.total.toFixed(2)]);
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'Relatorio');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio_${year}_${String(month).padStart(2,'0')}.xlsx`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 5000);
  } catch (err) {
    alert('Erro ao gerar XLSX: ' + (err && err.message ? err.message : err));
  }
}

function exportDetailedXLSX(mode, year, month, day) {
  try {
    const sales = getSalesHistory();
    const wsData = [];
    wsData.push(['Data', 'VendaID', 'Produto', 'Quantidade', 'Preço unit.', 'Subtotal']);
    sales.forEach(s => {
      const ts = new Date(s.timestamp);
      if (mode === 'month') {
        if (!(ts.getFullYear() === year && (ts.getMonth() + 1) === month)) return;
      } else if (mode === 'day') {
        if (!(ts.getFullYear() === year && (ts.getMonth() + 1) === month && ts.getDate() === day)) return;
      }
      (s.items || []).forEach(it => {
        wsData.push([
          new Date(s.timestamp).toLocaleString(),
          s.id,
          it.nome,
          it.qty,
          Number(it.preco).toFixed(2),
          (Number(it.preco) * Number(it.qty)).toFixed(2)
        ]);
      });
    });
    if (wsData.length === 1) { alert('Nenhum dado para exportar nesse período.'); return; }
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'Detalhado');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio_detalhado_${mode}_${year}_${String(month).padStart(2,'0')}${mode==='day'?`_${String(day).padStart(2,'0')}`:''}.xlsx`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 5000);
  } catch (err) {
    alert('Erro ao gerar XLSX: ' + (err && err.message ? err.message : err));
  }
}

// wire up new buttons (if present)
document.addEventListener('DOMContentLoaded', () => {
  const btnXlsx = document.getElementById('rel-export-xlsx');
  const btnXlsxDet = document.getElementById('rel-export-detailed-xlsx');
  const relMonth = document.getElementById('rel-month');
  const relDay = document.getElementById('rel-day');
  const relMode = document.getElementById('rel-mode');
  if (btnXlsx) btnXlsx.addEventListener('click', () => {
    if (!relMonth || !relMonth.value) { alert('Selecione o mês.'); return; }
    const [y, m] = relMonth.value.split('-').map(Number);
    exportReportXLSX(y, m);
  });
  if (btnXlsxDet) btnXlsxDet.addEventListener('click', () => {
    const mode = relMode && relMode.value ? relMode.value : 'month';
    if (!relMonth || !relMonth.value) { alert('Selecione o mês.'); return; }
    const [y, m] = relMonth.value.split('-').map(Number);
    const d = relDay && relDay.value ? new Date(relDay.value).getDate() : undefined;
    exportDetailedXLSX(mode, y, m, d);
  });
});

// Render sales history with pagination and delete buttons
function renderSalesHistory(page = 1, pageSize = 6) {
  const historyRoot = document.getElementById('rel-history');
  const paginationRoot = document.getElementById('rel-pagination');
  if (!historyRoot || !paginationRoot) return;
  const sales = getSalesHistory().slice().reverse(); // most recent first
  const total = sales.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (page > pages) page = pages;
  historyRoot.innerHTML = '';
  const start = (page - 1) * pageSize;
  const chunk = sales.slice(start, start + pageSize);
  if (chunk.length === 0) {
    historyRoot.textContent = 'Nenhuma venda registrada.';
  } else {
    chunk.forEach(s => {
      const div = document.createElement('div');
      div.style.borderBottom = '1px solid #eee';
      div.style.padding = '8px 6px';
      const date = new Date(s.timestamp).toLocaleString();
      const lines = (s.items||[]).map(it => `${it.nome} x${it.qty} (R$ ${Number(it.preco).toFixed(2)})`).join(' • ');
      div.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;"><div><strong>${date}</strong><div style="font-size:0.95rem;color:#333;margin-top:6px">${lines}</div><div style="margin-top:6px;color:#666">Total: R$ ${Number(s.total).toFixed(2)}</div></div><div style="display:flex;flex-direction:column;gap:6px"><button class="rel-delete" data-id="${s.id}" style="background:#b00;padding:6px 8px;border-radius:6px;color:#fff;border:none">Excluir</button></div></div>`;
      historyRoot.appendChild(div);
    });
  }
  // pagination controls
  paginationRoot.innerHTML = '';
  const prev = document.createElement('button'); prev.textContent = '← Anterior'; prev.disabled = page <= 1;
  const next = document.createElement('button'); next.textContent = 'Próximo →'; next.disabled = page >= pages;
  const info = document.createElement('span'); info.textContent = ` Página ${page} de ${pages} `;
  prev.addEventListener('click', () => renderSalesHistory(page - 1, pageSize));
  next.addEventListener('click', () => renderSalesHistory(page + 1, pageSize));
  paginationRoot.appendChild(prev); paginationRoot.appendChild(info); paginationRoot.appendChild(next);

  // wire delete buttons
  historyRoot.querySelectorAll('.rel-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      if (!confirm('Excluir essa venda do histórico?')) return;
      // verify admin password
      const ok = await verifyAdminPassword();
      if (!ok) { alert('Senha inválida ou ação cancelada.'); return; }
      const all = getSalesHistory();
      const filtered = all.filter(s => s.id !== id);
      localStorage.setItem('chinez_sales_history', JSON.stringify(filtered));
      showToast('Venda removida do histórico.');
      renderSalesHistory(page, pageSize);
    });
  });
}

// Render chart using Chart.js
let relChartInstance = null;
function renderChartFromReport(report, topN = 6) {
  const canvas = document.getElementById('rel-chart-canvas');
  const ctx = canvas && canvas.getContext ? canvas.getContext('2d') : null;
  if (!ctx) return;
  const labels = report.items.slice(0, topN).map(i => i.nome);
  const data = report.items.slice(0, topN).map(i => i.qty);
  if (relChartInstance) relChartInstance.destroy();
  try {
    relChartInstance = new Chart(ctx, {
      type: 'bar',
      data: { labels, datasets: [{ label: 'Quantidade vendida', data, backgroundColor: 'rgba(255,204,0,0.9)' }] },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { precision:0 } } } }
    });
    // show fade-in class (apply after paint for smoother animation)
    const chartWrapper = document.getElementById('rel-chart');
    if (chartWrapper) {
      // ensure CSS transition triggers after the element is painted
      requestAnimationFrame(() => {
        chartWrapper.classList.add('canvas-visible');
      });
    }
  } catch (err) {
    console.warn('Chart.js não inicializado ou erro:', err);
  }
}

// Post sales to webhook (simple POST JSON)
async function sendSalesToWebhook(url, mode, year, month, day) {
  if (!url) return alert('Informe a URL do webhook.');
  const sales = getSalesHistory();
  const payload = [];
  sales.forEach(s => {
    const ts = new Date(s.timestamp);
    if (mode === 'month') {
      if (!(ts.getFullYear() === year && (ts.getMonth() + 1) === month)) return;
    } else if (mode === 'day') {
      if (!(ts.getFullYear() === year && (ts.getMonth() + 1) === month && ts.getDate() === day)) return;
    }
    payload.push(s);
  });
  if (payload.length === 0) return alert('Nenhuma venda para enviar nesse período.');
  try {
    const res = await fetchWithRetry(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }, 3);
    showToast('Vendas enviadas ao webhook com sucesso.');
    addSyncLog({ when: new Date().toISOString(), mode, count: payload.length, status: 'ok', info: `Enviado com sucesso (${res.status})` });
  } catch (err) {
    console.error('Erro ao enviar webhook:', err);
    addSyncLog({ when: new Date().toISOString(), mode, count: payload.length, status: 'error', info: String(err) });
    alert('Falha ao enviar. Veja o console para detalhes.');
  }
}

// Auto-sync helpers
function getLastSync() {
  const v = localStorage.getItem('chinez_last_sync');
  return v ? new Date(v) : null;
}
function setLastSync(date) {
  if (!date) { localStorage.removeItem('chinez_last_sync'); return; }
  localStorage.setItem('chinez_last_sync', new Date(date).toISOString());
}

async function sendNewSalesToWebhook(url) {
  if (!url) return;
  const last = getLastSync();
  const sales = getSalesHistory();
  const toSend = sales.filter(s => {
    const ts = new Date(s.timestamp);
    return !last || ts > last;
  });
  if (toSend.length === 0) return;
  try {
    const res = await fetchWithRetry(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(toSend) }, 3);
    setLastSync(new Date());
    showToast('Novas vendas sincronizadas.');
    addSyncLog({ when: new Date().toISOString(), mode: 'autosync', count: toSend.length, status: 'ok', info: `Enviado com sucesso (${res.status})` });
  } catch (err) {
    console.error('Erro no auto-sync:', err);
    addSyncLog({ when: new Date().toISOString(), mode: 'autosync', count: toSend.length, status: 'error', info: String(err) });
  }
}

// Fetch with retry and exponential backoff
async function fetchWithRetry(url, options = {}, maxRetries = 3, baseDelay = 600) {
  let attempt = 0;
  while (true) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res;
    } catch (err) {
      attempt++;
      if (attempt > maxRetries) throw err;
      const delay = baseDelay * Math.pow(2, attempt - 1) + Math.floor(Math.random() * 200);
      console.warn(`fetchWithRetry: tentativa ${attempt} falhou, retry em ${delay}ms`, err);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

// Sync logs (persist in localStorage)
function getSyncLogs() {
  try { return JSON.parse(localStorage.getItem('chinez_sync_logs') || '[]'); } catch { return []; }
}
function addSyncLog(entry) {
  const logs = getSyncLogs();
  logs.push(entry);
  try { localStorage.setItem('chinez_sync_logs', JSON.stringify(logs.slice(-200))); } catch (e) { console.warn('Não foi possível gravar logs:', e); }
}

let autosyncTimer = null;
function startAutoSync(url, intervalMin) {
  stopAutoSync();
  if (!url) return;
  const ms = Math.max(1, Number(intervalMin)) * 60 * 1000;
  autosyncTimer = setInterval(() => sendNewSalesToWebhook(url), ms);
  // run immediately once
  sendNewSalesToWebhook(url);
}
function stopAutoSync() {
  if (autosyncTimer) { clearInterval(autosyncTimer); autosyncTimer = null; }
}

// ---------------- ADMIN PASSWORD HELPERS ----------------
// Simple client-side password stored in localStorage (not secure for public deployments)
function getAdminPassword() {
  return localStorage.getItem('chinez_admin_pass') || null;
}
function setAdminPassword(pass) {
  if (!pass) { localStorage.removeItem('chinez_admin_pass'); return; }
  localStorage.setItem('chinez_admin_pass', pass);
}

// show modal and return a promise that resolves with the entered password or null if cancelled
function promptAdminPasswordModal() {
  return new Promise((resolve) => {
    const modal = document.getElementById('admin-pass-modal');
    const input = document.getElementById('admin-pass-input');
    const btnCancel = document.getElementById('admin-pass-cancel');
    const btnConfirm = document.getElementById('admin-pass-confirm');
    if (!modal || !input || !btnCancel || !btnConfirm) { resolve(null); return; }
    modal.style.display = 'flex';
    input.value = '';
    input.focus();
    function cleanup() {
      btnCancel.removeEventListener('click', onCancel);
      btnConfirm.removeEventListener('click', onConfirm);
    }
    function onCancel() { cleanup(); modal.style.display = 'none'; resolve(null); }
    function onConfirm() { const val = input.value || null; cleanup(); modal.style.display = 'none'; resolve(val); }
    btnCancel.addEventListener('click', onCancel);
    btnConfirm.addEventListener('click', onConfirm);
  });
}

async function verifyAdminPassword() {
  const stored = getAdminPassword();
  // if no password set, ask user to set one (first time)
  if (!stored) {
    const want = confirm('Nenhuma senha administrativa definida. Deseja definir uma agora?');
    if (!want) return false;
    const newPass = prompt('Defina uma senha administrativa (guarde-a):');
    if (!newPass) return false;
    setAdminPassword(newPass);
    alert('Senha definida. Use-a para confirmar ações administrativas.');
    return true;
  }
  const entered = await promptAdminPasswordModal();
  if (!entered) return false;
  return entered === stored;
}

// Wire up UI (defer until DOM ready)
document.addEventListener('DOMContentLoaded', () => {
  const relSection = document.getElementById('relatorios');
  const relMonth = document.getElementById('rel-month');
  const relDay = document.getElementById('rel-day');
  const relBtn = document.getElementById('rel-generate');
  const relExport = document.getElementById('rel-export-csv');
  const relExportDetailed = document.getElementById('rel-export-detailed-csv');
  const relMode = document.getElementById('rel-mode');
  const relClear = document.getElementById('rel-clear-history');
  const relSendWebhook = document.getElementById('rel-send-webhook');
  const relConfigPass = document.getElementById('rel-config-pass');
  // default month value
  if (relMonth) {
    const now = new Date();
    relMonth.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  }

  // toggle inputs when switching mode
  if (relMode) {
    relMode.addEventListener('change', () => {
      const mode = relMode.value;
      const relDayLabel = document.querySelector('label[for="rel-day"]');
      if (mode === 'day') {
        if (relDayLabel) relDayLabel.style.display = '';
        if (relDay) relDay.style.display = '';
        if (relMonth) relMonth.style.display = 'none';
      } else {
        if (relDayLabel) relDayLabel.style.display = 'none';
        if (relDay) relDay.style.display = 'none';
        if (relMonth) relMonth.style.display = '';
      }
    });
  }

  // generate report (handles both modes)
  if (relBtn) {
    relBtn.addEventListener('click', () => {
      const mode = relMode ? relMode.value : 'month';
      if (mode === 'month') {
        const val = relMonth && relMonth.value ? relMonth.value : null;
        if (!val) return alert('Selecione o mês para gerar o relatório.');
        const [y, m] = val.split('-').map(Number);
        renderReport(y, m);
        renderChartFromReport(computeMonthlyReport(y, m));
        renderSalesHistory(1, 6);
      } else {
        const val = relDay && relDay.value ? relDay.value : null;
        if (!val) return alert('Selecione o dia para gerar o relatório.');
        const d = new Date(val);
        const y = d.getFullYear(); const m = d.getMonth() + 1; const day = d.getDate();
        // aggregate day's items
        const sales = getSalesHistory();
        const itemsMap = new Map();
        let total = 0;
        sales.forEach(s => {
          const ts = new Date(s.timestamp);
          if (ts.getFullYear() === y && (ts.getMonth() + 1) === m && ts.getDate() === day) {
            total += Number(s.total || 0);
            (s.items || []).forEach(it => {
              const prev = itemsMap.get(it.nome) || { qty: 0, total: 0 };
              prev.qty += Number(it.qty || 0);
              prev.total += Number(it.preco || 0) * Number(it.qty || 0);
              itemsMap.set(it.nome, prev);
            });
          }
        });
        const items = Array.from(itemsMap.entries()).map(([nome, v]) => ({ nome, qty: v.qty, total: v.total }));
        items.sort((a, b) => b.qty - a.qty || b.total - a.total);
        const relTotalEl = document.getElementById('rel-total'); if (relTotalEl) relTotalEl.textContent = `Total vendido: R$ ${total.toFixed(2)}`;
        const container = document.getElementById('rel-table-container'); if (container) {
          container.innerHTML = '';
          if (items.length === 0) { container.textContent = 'Nenhuma venda neste dia.'; } else {
            const table = document.createElement('table'); table.style.width = '100%'; table.style.borderCollapse = 'collapse';
            table.innerHTML = `<thead><tr style="text-align:left;border-bottom:1px solid #ddd;"><th style="padding:8px">Produto</th><th style="padding:8px">Quantidade</th><th style="padding:8px">Preço unit.</th><th style="padding:8px">Subtotal</th></tr></thead><tbody></tbody>`;
            const tb = table.querySelector('tbody'); items.forEach(it => { const tr = document.createElement('tr'); tr.innerHTML = `<td style="padding:8px;border-bottom:1px solid #f0f0f0">${it.nome}</td><td style="padding:8px;border-bottom:1px solid #f0f0f0">${it.qty}</td><td style="padding:8px;border-bottom:1px solid #f0f0f0">R$ ${Number(it.total/it.qty || it.total).toFixed(2)}</td><td style="padding:8px;border-bottom:1px solid #f0f0f0">R$ ${it.total.toFixed(2)}</td>`; tb.appendChild(tr); }); container.appendChild(table);
          }
        }
        renderChartFromReport({ items });
        renderSalesHistory(1, 6);
      }
      if (relSection) relSection.style.display = 'block';
      const produtosContainer = document.getElementById('produtos'); if (produtosContainer) produtosContainer.style.display = 'none';
      const telaInicial = document.getElementById('tela-inicial'); if (telaInicial) telaInicial.style.display = 'none';
    });
  }

  // export monthly summary CSV
  if (relExport) {
    relExport.addEventListener('click', () => {
      const val = relMonth && relMonth.value ? relMonth.value : null;
      if (!val) return alert('Selecione o mês antes de exportar.');
      const [y, m] = val.split('-').map(Number);
      exportReportCSV(y, m);
    });
  }

  // export detailed CSV
  if (relExportDetailed) {
    relExportDetailed.addEventListener('click', () => {
      const mode = relMode ? relMode.value : 'month';
      if (mode === 'month') {
        const val = relMonth && relMonth.value ? relMonth.value : null; if (!val) return alert('Selecione o mês antes de exportar.'); const [y, m] = val.split('-').map(Number); exportDetailedCSV('month', y, m);
      } else {
        const val = relDay && relDay.value ? relDay.value : null; if (!val) return alert('Selecione o dia antes de exportar.'); const d = new Date(val); exportDetailedCSV('day', d.getFullYear(), d.getMonth()+1, d.getDate());
      }
    });
  }

  // send webhook
  if (relSendWebhook) {
    relSendWebhook.addEventListener('click', () => {
      const url = document.getElementById('rel-webhook-url') ? document.getElementById('rel-webhook-url').value.trim() : '';
      const mode = relMode ? relMode.value : 'month';
      if (mode === 'month') {
        const val = relMonth && relMonth.value ? relMonth.value : null; if (!val) return alert('Selecione o mês para enviar.'); const [y,m] = val.split('-').map(Number); sendSalesToWebhook(url, 'month', y, m);
      } else {
        const val = relDay && relDay.value ? relDay.value : null; if (!val) return alert('Selecione o dia para enviar.'); const d = new Date(val); sendSalesToWebhook(url, 'day', d.getFullYear(), d.getMonth()+1, d.getDate());
      }
    });
  }

  // configure admin password
  if (relConfigPass) {
    relConfigPass.addEventListener('click', () => {
      const cur = getAdminPassword();
      if (cur) {
        if (!confirm('Já existe uma senha definida. Deseja remover a senha atual?')) return;
        setAdminPassword(null);
        alert('Senha removida.');
        return;
      }
      const nv = prompt('Defina a senha administrativa (guarde-a):');
      if (!nv) return;
      setAdminPassword(nv);
      alert('Senha definida. Use-a para confirmar exclusões e limpeza de histórico.');
    });
  }

  // autosync UI wiring
  const relAutoSync = document.getElementById('rel-autosync');
  const relAutoSyncInterval = document.getElementById('rel-autosync-interval');
  function saveAutoSyncState(enabled, interval) {
    localStorage.setItem('chinez_autosync_enabled', enabled ? '1' : '0');
    localStorage.setItem('chinez_autosync_interval', String(interval));
  }
  function loadAutoSyncState() {
    const ena = localStorage.getItem('chinez_autosync_enabled') === '1';
    const itv = parseInt(localStorage.getItem('chinez_autosync_interval') || (relAutoSyncInterval ? relAutoSyncInterval.value : '15'), 10);
    return { ena, itv };
  }
  if (relAutoSync && relAutoSyncInterval) {
    const state = loadAutoSyncState();
    relAutoSync.checked = state.ena;
    relAutoSyncInterval.value = state.itv;
    relAutoSync.addEventListener('change', () => {
      const url = document.getElementById('rel-webhook-url') ? document.getElementById('rel-webhook-url').value.trim() : '';
      saveAutoSyncState(relAutoSync.checked, relAutoSyncInterval.value);
      if (relAutoSync.checked) startAutoSync(url, relAutoSyncInterval.value); else stopAutoSync();
    });
    relAutoSyncInterval.addEventListener('change', () => {
      saveAutoSyncState(relAutoSync.checked, relAutoSyncInterval.value);
      if (relAutoSync.checked) {
        const url = document.getElementById('rel-webhook-url') ? document.getElementById('rel-webhook-url').value.trim() : '';
        startAutoSync(url, relAutoSyncInterval.value);
      }
    });
    // start autosync if saved enabled
    if (state.ena) {
      const url = document.getElementById('rel-webhook-url') ? document.getElementById('rel-webhook-url').value.trim() : '';
      startAutoSync(url, state.itv);
    }
  }

  // clear history
  if (relClear) {
    relClear.addEventListener('click', async () => {
      if (!confirm('Deseja realmente apagar todo o histórico de vendas? Esta ação não pode ser desfeita.')) return;
      try {
        const ok = await verifyAdminPassword();
        if (!ok) { alert('Senha inválida ou ação cancelada.'); return; }
        localStorage.removeItem('chinez_sales_history');
        showToast('Histórico de vendas limpo.');
        // refresh report view
        if (relMonth && relMonth.value) {
          const [y, m] = relMonth.value.split('-').map(Number);
          renderReport(y, m);
        }
        renderSalesHistory(1, 6);
      } catch (err) {
        console.error('Erro ao limpar histórico:', err);
        alert('Não foi possível limpar o histórico. Veja o console.');
      }
    });
  }

  // initial history render
  renderSalesHistory(1, 6);
  // wire search filter (debounced)
  const relSearch = document.getElementById('rel-search');
  if (relSearch) {
    let searchTimer = null;
    relSearch.addEventListener('input', () => {
      if (searchTimer) clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        const q = relSearch.value.trim().toLowerCase();
        const tbody = document.getElementById('rel-table-body');
        if (!tbody) return;
        Array.from(tbody.querySelectorAll('tr')).forEach(tr => {
          const text = (tr.textContent || '').toLowerCase();
          tr.style.display = q === '' || text.indexOf(q) !== -1 ? '' : 'none';
        });
      }, 240);
    });
  }
});
