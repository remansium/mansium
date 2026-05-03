/* =========================================================
   MANSIUM — Projects Page
   - Self-contained i18n (TR default / EN)
   - Dynamic project rendering from PROJECTS array
   - Filtering, counts, header scroll, mobile nav
   - To add/remove a project: simply edit the PROJECTS array.
   ========================================================= */

(function () {
    'use strict';

    /* =====================================================
       1. PROJECTS DATA
       -----------------------------------------------------
       Add or remove projects here.
       Each project is an object with the following fields:

         id         : string  — unique identifier
         title      : { tr, en }
         client     : string  — display label (no translation needed)
         service    : { tr, en }
         category   : 'video' | 'design' | 'web' | 'management'
         year       : number
         icon       : string  — SVG markup (used as fallback when imageUrl is empty)
         gradient   : { from, to }  — CSS color stops for the visual block
         imageUrl   : string  — OPTIONAL. Real project image URL.
                                If provided, replaces the SVG icon.
                                Leave '' or null to render the abstract SVG.
         projectUrl : string  — Link to the live project / case study.
                                Opens in a new tab. Leave '' to disable.
       ===================================================== */
    const PROJECTS = [
        {
            id: 'lumiere-residences',
            title:   { tr: 'Lumière Residences Lansman Filmi',   en: 'Lumière Residences Launch Film' },
            client:  'Lumière Residences',
            service: { tr: 'Sinematik Lansman Videosu',          en: 'Cinematic Launch Video' },
            category: 'video',
            year: 2025,
            gradient: { from: '#04356A', to: '#0A6ED3' },
            imageUrl:   '',
            projectUrl: 'https://youtube.com',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                    <path d="M16 10 L22 7 L22 17 L16 14 Z"></path>
                </svg>
            `,
        },
        {
            id: 'noor-bosphorus',
            title:   { tr: 'Noor Bosphorus Kişisel Marka',       en: 'Noor Bosphorus Personal Brand' },
            client:  'Selim Karaca',
            service: { tr: 'Post & Story Tasarımı',              en: 'Post & Story Design' },
            category: 'design',
            year: 2025,
            gradient: { from: '#001D3F', to: '#054E98' },
            imageUrl:   '',
            projectUrl: '',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="3"></rect>
                    <circle cx="8.5" cy="9" r="1.5"></circle>
                    <path d="M21 16 L15 10 L5 20"></path>
                </svg>
            `,
        },
        {
            id: 'astra-collection',
            title:   { tr: 'Astra Collection — Markalı Web Deneyimi', en: 'Astra Collection — Branded Web Experience' },
            client:  'Astra Collection',
            service: { tr: 'Pro Web Sitesi (8 Sayfa)',            en: 'Pro Website (8 Pages)' },
            category: 'web',
            year: 2025,
            gradient: { from: '#000919', to: '#04356A' },
            imageUrl:   '',
            projectUrl: '',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="9" x2="22" y2="9"></line>
                    <circle cx="5.5" cy="6.5" r="0.6" fill="currentColor"></circle>
                    <circle cx="7.5" cy="6.5" r="0.6" fill="currentColor"></circle>
                    <line x1="8" y1="22" x2="16" y2="22"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                </svg>
            `,
        },
        {
            id: 'baylan-properties',
            title:   { tr: 'Baylan Properties Sosyal Medya Yönetimi', en: 'Baylan Properties Social Management' },
            client:  'Baylan Properties',
            service: { tr: 'Aylık Sosyal Medya Yönetimi',         en: 'Monthly Social Media Management' },
            category: 'management',
            year: 2024,
            gradient: { from: '#054E98', to: '#0A6ED3' },
            imageUrl:   '',
            projectUrl: '',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M3 12 H21"></path>
                    <path d="M12 3 C15 6 16.5 9 16.5 12 C16.5 15 15 18 12 21 C9 18 7.5 15 7.5 12 C7.5 9 9 6 12 3 Z"></path>
                </svg>
            `,
        },
        {
            id: 'mansion-yalikavak',
            title:   { tr: 'Yalıkavak Mansion Reels Serisi',     en: 'Yalıkavak Mansion Reels Series' },
            client:  'Mansion Group',
            service: { tr: 'Kısa Form Video Üretimi',            en: 'Short-form Video Production' },
            category: 'video',
            year: 2024,
            gradient: { from: '#04356A', to: '#001D3F' },
            imageUrl:   '',
            projectUrl: '',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polygon points="6 4 20 12 6 20 6 4"></polygon>
                </svg>
            `,
        },
        {
            id: 'aria-listing-design',
            title:   { tr: 'Aria Listing Tasarım Sistemi',       en: 'Aria Listing Design System' },
            client:  'Aria Estates',
            service: { tr: 'Listing & Story Tasarımı',           en: 'Listing & Story Design' },
            category: 'design',
            year: 2024,
            gradient: { from: '#000919', to: '#054E98' },
            imageUrl:   '',
            projectUrl: '',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M3 11 L12 4 L21 11"></path>
                    <path d="M5 10 V20 H19 V10"></path>
                    <rect x="10" y="14" width="4" height="6"></rect>
                </svg>
            `,
        },
        {
            id: 'ekberkonak-portfolio',
            title:   { tr: 'Ekber Konak Danışman Portföyü',      en: 'Ekber Konak Consultant Portfolio' },
            client:  'Ekber Konak',
            service: { tr: 'Kişisel Marka Web Sitesi',           en: 'Personal Brand Website' },
            category: 'web',
            year: 2024,
            gradient: { from: '#04356A', to: '#0A6ED3' },
            imageUrl:   '',
            projectUrl: '',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 21 C4 16.5 7.5 13 12 13 C16.5 13 20 16.5 20 21"></path>
                </svg>
            `,
        },
        {
            id: 'sirena-monthly',
            title:   { tr: 'Sirena Estate Aylık Yayın Stratejisi', en: 'Sirena Estate Monthly Strategy' },
            client:  'Sirena Estate',
            service: { tr: 'İçerik & Yayın Yönetimi',            en: 'Content & Publishing Management' },
            category: 'management',
            year: 2025,
            gradient: { from: '#054E98', to: '#04356A' },
            imageUrl:   '',
            projectUrl: '',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="17" rx="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                </svg>
            `,
        },
        {
            id: 'azure-hill',
            title:   { tr: 'Azure Hill Tanıtım Filmi',           en: 'Azure Hill Promo Film' },
            client:  'Azure Hill Residences',
            service: { tr: 'Sinematik Mülk Turu',                en: 'Cinematic Property Tour' },
            category: 'video',
            year: 2025,
            gradient: { from: '#001D3F', to: '#0A6ED3' },
            imageUrl:   '',
            projectUrl: '',
            icon: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M3 19 L9 11 L13 15 L17 9 L21 19 Z"></path>
                    <circle cx="17" cy="6" r="2"></circle>
                </svg>
            `,
        },
    ];

    /* =====================================================
       2. TRANSLATIONS  (page-scoped)
       ===================================================== */
    const translations = {
        tr: {
            'meta.title':           'Mansium — Projeler',
            'meta.description':     'Mansium projeleri — lüks gayrimenkul markaları için tasarlanmış sinematik içerik, dijital varlık ve marka konumlandırma çalışmaları.',

            'nav.home':             'Ana Sayfa',
            'nav.projects':         'Projeler',
            'nav.packages':         'Paketler',
            'nav.about':            'Hakkımızda',
            'nav.contact':          'İletişim',
            'nav.back':             'Ana Sayfa',
            'nav.brandAria':        'Mansium — Ana Sayfa',
            'nav.backAria':         'Ana sayfaya dön',
            'nav.menuAria':         'Menü',

            'proj.eyebrow':         'Seçilmiş Çalışmalar',
            'proj.title.line1':     'Lüks markalar için',
            'proj.title.line2':     'üretilen anlar.',
            'proj.lead':            'Sinematik içerikten dijital varlıklara, post tasarımından markalı web deneyimlerine — her proje, üst pazarda fark yaratmak için tasarlandı.',

            'proj.filter.all':      'Tümü',
            'proj.filter.video':    'Video',
            'proj.filter.design':   'Tasarım',
            'proj.filter.web':      'Web',
            'proj.filter.management':'Yönetim',

            'proj.grid.srTitle':    'Proje Galerisi',

            'proj.card.viewProject':'Detayları Gör',

            'proj.empty.title':     'Bu kategoride henüz proje yok',
            'proj.empty.copy':      'Yakında yeni çalışmalar burada yer alacak. Şimdilik diğer kategorilere göz atabilirsiniz.',

            'proj.cta.eyebrow':     'Yeni Proje',
            'proj.cta.title.line1': 'Bir sonraki projeyi',
            'proj.cta.title.line2': 'birlikte üretelim.',
            'proj.cta.copy':        'Markanızın hedeflerini paylaşın; size özel kapsam ve takvim ile en kısa sürede dönelim.',
            'proj.cta.primary':     'Görüşme Planla',
            'proj.cta.secondary':   'Paketleri Keşfet',

            'footer.rights':        'Tüm hakları saklıdır.',

            'badge.video':          'Video',
            'badge.design':         'Tasarım',
            'badge.web':            'Web',
            'badge.management':     'Yönetim',
        },
        en: {
            'meta.title':           'Mansium — Projects',
            'meta.description':     'Mansium projects — cinematic content, digital presence and brand positioning crafted for luxury real estate brands.',

            'nav.home':             'Home',
            'nav.projects':         'Projects',
            'nav.packages':         'Packages',
            'nav.about':            'About',
            'nav.contact':          'Contact',
            'nav.back':             'Home',
            'nav.brandAria':        'Mansium — Home',
            'nav.backAria':         'Back to home',
            'nav.menuAria':         'Menu',

            'proj.eyebrow':         'Selected Work',
            'proj.title.line1':     'Moments crafted',
            'proj.title.line2':     'for luxury brands.',
            'proj.lead':            'From cinematic content to digital presence, from post design to branded web experiences — every project is built to stand out in the upper market.',

            'proj.filter.all':      'All',
            'proj.filter.video':    'Video',
            'proj.filter.design':   'Design',
            'proj.filter.web':      'Web',
            'proj.filter.management':'Management',

            'proj.grid.srTitle':    'Project Gallery',

            'proj.card.viewProject':'View Project',

            'proj.empty.title':     'No projects in this category yet',
            'proj.empty.copy':      'New work will appear here soon. In the meantime, browse the other categories.',

            'proj.cta.eyebrow':     'New Project',
            'proj.cta.title.line1': 'Let us craft the next',
            'proj.cta.title.line2': 'project together.',
            'proj.cta.copy':        'Share your brand goals — we will get back to you with a tailored scope and timeline shortly.',
            'proj.cta.primary':     'Schedule a Call',
            'proj.cta.secondary':   'Explore Packages',

            'footer.rights':        'All rights reserved.',

            'badge.video':          'Video',
            'badge.design':         'Design',
            'badge.web':            'Web',
            'badge.management':     'Management',
        },
    };

    const STORAGE_KEY  = 'mansium.lang';
    const DEFAULT_LANG = 'tr';
    let   currentLang  = DEFAULT_LANG;

    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;

    /* =====================================================
       3. RENDER PROJECTS
       ===================================================== */
    const arrowSvg = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    `;

    const tagSvg = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>
    `;

    /**
     * Escape arbitrary user-supplied strings before injecting them into
     * an HTML attribute (alt, href, etc.). Keeps the renderer XSS-safe
     * even when project data comes from external sources.
     */
    function escapeAttr(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function renderProjects() {
        const grid = document.querySelector('[data-proj-grid]');
        if (!grid) return;

        const html = PROJECTS.map((p, i) => {
            const indexLabel = String(i + 1).padStart(2, '0');
            const styleVars  = `--g-from:${p.gradient.from};--g-to:${p.gradient.to};`;
            const titleText  = p.title[currentLang] || p.title.tr;

            /* —— Visual: real <img> if imageUrl is provided, else SVG icon —— */
            const visualMedia = p.imageUrl
                ? `<img
                        class="proj-card__image"
                        src="${escapeAttr(p.imageUrl)}"
                        alt="${escapeAttr(titleText)}"
                        loading="lazy"
                        decoding="async"
                   />`
                : `<span class="proj-card__icon">${p.icon}</span>`;

            /* —— Visual decor only renders when there is no real image —— */
            const visualDecor = p.imageUrl
                ? ''
                : `<span class="proj-card__shape proj-card__shape--a"></span>
                   <span class="proj-card__shape proj-card__shape--b"></span>`;

            /* —— CTA: real anchor when projectUrl exists, otherwise span —— */
            const ctaInner = `
                <span data-i18n="proj.card.viewProject">${t('proj.card.viewProject')}</span>
                ${arrowSvg}
            `;
            const cta = p.projectUrl
                ? `<a
                        class="proj-card__cta"
                        href="${escapeAttr(p.projectUrl)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="${escapeAttr(titleText)}"
                   >${ctaInner}</a>`
                : `<span class="proj-card__cta proj-card__cta--disabled" aria-disabled="true">${ctaInner}</span>`;

            return `
                <article
                    class="proj-card${p.imageUrl ? ' has-image' : ''}"
                    data-category="${p.category}"
                    data-project-id="${p.id}"
                    style="${styleVars}animation-delay:${i * 60}ms;"
                >
                    <div class="proj-card__visual" aria-hidden="${p.imageUrl ? 'false' : 'true'}">
                        ${visualDecor}
                        <span class="proj-card__index">${indexLabel}</span>
                        <span class="proj-card__badge">
                            ${tagSvg}
                            <span data-i18n="badge.${p.category}">${p.category}</span>
                        </span>
                        ${visualMedia}
                    </div>

                    <div class="proj-card__body">
                        <span class="proj-card__client">${p.client}</span>
                        <h3 class="proj-card__title" data-proj-title>${titleText}</h3>
                        <p class="proj-card__service" data-proj-service>${p.service[currentLang] || p.service.tr}</p>

                        <div class="proj-card__meta">
                            <span class="proj-card__year">${p.year}</span>
                            ${cta}
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        grid.innerHTML = html;
    }

    /* =====================================================
       4. FILTERING
       ===================================================== */
    function updateCounts() {
        const counts = { all: PROJECTS.length, video: 0, design: 0, web: 0, management: 0 };
        PROJECTS.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });

        Object.keys(counts).forEach((key) => {
            const el = document.querySelector(`[data-count-${key}]`);
            if (el) el.textContent = counts[key];
        });
    }

    function applyFilter(filter) {
        const cards = document.querySelectorAll('.proj-card');
        let visible = 0;

        cards.forEach((card) => {
            const match = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('is-hidden', !match);
            if (match) visible++;
        });

        const empty = document.querySelector('[data-proj-empty]');
        if (empty) empty.hidden = visible !== 0;
    }

    function initFilters() {
        const filters = document.querySelectorAll('[data-proj-filters] [data-filter]');
        filters.forEach((btn) => {
            btn.addEventListener('click', () => {
                filters.forEach((b) => {
                    b.classList.remove('is-active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('is-active');
                btn.setAttribute('aria-selected', 'true');
                applyFilter(btn.dataset.filter);
            });
        });
    }

    /* =====================================================
       5. LANGUAGE TOGGLE
       ===================================================== */
    function applyLanguage(lang) {
        currentLang = translations[lang] ? lang : DEFAULT_LANG;
        const dict = translations[currentLang];

        document.documentElement.lang = currentLang;
        document.documentElement.dataset.lang = currentLang;

        /* text content */
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        /* attribute translations  format: "attr:key" or "attr:key|attr2:key2" */
        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            el.dataset.i18nAttr.split('|').forEach((pair) => {
                const [attr, key] = pair.split(':').map((s) => s.trim());
                if (attr && key && dict[key] !== undefined) {
                    el.setAttribute(attr, dict[key]);
                }
            });
        });

        /* document title + meta */
        if (dict['meta.title']) document.title = dict['meta.title'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict['meta.description']) {
            metaDesc.setAttribute('content', dict['meta.description']);
        }

        /* re-translate dynamic project titles + services */
        document.querySelectorAll('.proj-card').forEach((card) => {
            const id = card.dataset.projectId;
            const data = PROJECTS.find((p) => p.id === id);
            if (!data) return;

            const titleEl   = card.querySelector('[data-proj-title]');
            const serviceEl = card.querySelector('[data-proj-service]');
            if (titleEl   && data.title[currentLang])   titleEl.textContent   = data.title[currentLang];
            if (serviceEl && data.service[currentLang]) serviceEl.textContent = data.service[currentLang];
        });

        /* visual state — sync every [data-lang-toggle] (desktop + mobile) */
        document.querySelectorAll('[data-lang-toggle]').forEach((toggle) => {
            toggle.dataset.active = currentLang;
            toggle.querySelectorAll('[data-lang-option]').forEach((btn) => {
                const isActive = btn.dataset.langOption === currentLang;
                btn.classList.toggle('is-active', isActive);
                btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });
        });
    }

    function initLanguageToggle() {
        const toggles = document.querySelectorAll('[data-lang-toggle]');
        let saved = DEFAULT_LANG;

        try { saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; } catch (_) {}

        applyLanguage(saved);

        if (!toggles.length) return;

        toggles.forEach((toggle) => {
            toggle.querySelectorAll('[data-lang-option]').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const next = btn.dataset.langOption;
                    if (next === currentLang) return;
                    applyLanguage(next);
                    try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
                });
            });
        });
    }

    /* =====================================================
       6. HEADER SCROLL STATE + MOBILE NAV
       ===================================================== */
    function initHeaderScrollState() {
        const header = document.querySelector('[data-header]');
        if (!header) return;
        const setState = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
        setState();
        window.addEventListener('scroll', setState, { passive: true });
    }

    function initMobileNav() {
        const trigger  = document.querySelector('[data-nav-trigger]');
        const nav      = document.querySelector('[data-nav]');
        const closeBtn = nav ? nav.querySelector('[data-nav-close]') : null;
        if (!trigger || !nav) return;

        const MOBILE_MAX = 1024;

        const open = () => {
            trigger.setAttribute('aria-expanded', 'true');
            trigger.setAttribute('aria-label', 'Close menu');
            nav.classList.add('is-open');
            document.body.classList.add('has-nav-open');
        };

        const close = () => {
            trigger.setAttribute('aria-expanded', 'false');
            trigger.setAttribute('aria-label', 'Open menu');
            nav.classList.remove('is-open');
            document.body.classList.remove('has-nav-open');
        };

        trigger.addEventListener('click', () => {
            if (nav.classList.contains('is-open')) close(); else open();
        });

        /* a) Close button (X) */
        if (closeBtn) closeBtn.addEventListener('click', close);

        /* b) Close on ANY navigation link tap */
        nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));

        /* Esc also closes the overlay */
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && nav.classList.contains('is-open')) close();
        });

        /* Auto-close when crossing the desktop breakpoint */
        window.addEventListener('resize', () => {
            if (window.innerWidth > MOBILE_MAX) close();
        });
    }

    /* =====================================================
       7. CURRENT YEAR
       ===================================================== */
    function setCurrentYear() {
        const el = document.querySelector('[data-current-year]');
        if (el) el.textContent = String(new Date().getFullYear());
    }

    /* =====================================================
       8. BOOT
       ===================================================== */
    function boot() {
        renderProjects();
        updateCounts();
        initFilters();
        initLanguageToggle();   /* triggers initial applyLanguage() and re-translates cards */
        initHeaderScrollState();
        initMobileNav();
        setCurrentYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }

})();
