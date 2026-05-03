/* =========================================================
   MANSIUM — script.js
   Vanilla JavaScript (no frameworks)
   - i18n: TR (default) / EN language toggle
   - Sticky header scroll state
   - Mobile nav trigger
   - Apple-style 3-step package quiz + recommendation engine
   ========================================================= */

(function () {
    'use strict';

    /* =====================================================
       1. TRANSLATION DICTIONARY
       ===================================================== */
    const translations = {
        tr: {
            /* Document meta */
            'meta.title':       'Mansium — Lüks Gayrimenkul Danışmanları için Stratejik Danışmanlık',
            'meta.description': 'Mansium, lüks gayrimenkul profesyonellerinin strateji, marka konumlandırma ve yüksek değerli müşteri kazanımıyla üst pazara ölçeklenmesine yardımcı olan üst düzey bir danışmanlık firmasıdır.',

            /* Header navigation */
            'nav.projects': 'Projeler',
            'nav.packages': 'Paketler',
            'nav.about':    'Hakkımızda',
            'nav.contact':  'İletişim',

            /* Hero section */
            'hero.eyebrow':        'Lüks Gayrimenkul Danışmanlığı',
            'hero.title.line1':    'Lüks pazarın',
            'hero.title.line2':    'zirvesindeki danışmanlar',
            'hero.title.line3':    'arasına katılın.',
            'hero.lead':           'Mansium; üst düzey gayrimenkul profesyonellerini ultra-yüksek varlıklı müşterilere ulaştıran stratejik danışmanlık, marka konumlandırma ve yüksek değerli müşteri kazanımı sunar.',
            'hero.cta.primary':    'Paketleri Keşfet',
            'hero.cta.secondary':  'Görüşme Planla',
            'hero.meta.advised':   'Danışmanlık Verilen Portföy',
            'hero.meta.clients':   'Elit Danışman Müşteri',
            'hero.meta.markets':   'Lüks Pazar',
            'hero.scroll':         'Aşağı Kaydır',

            /* Packages — section */
            'packages.eyebrow':       'Paket Seçici',
            'packages.title.line1':   'Size en uygun paketi',
            'packages.title.line2':   '3 adımda bulun.',
            'packages.lead':          'İhtiyacınızı anlamamız için kısa bir konfigürasyon. Cevaplarınıza göre markanız için en doğru ölçek ve fiyatlandırmayı öneriyoruz.',

            'packages.step':          'Adım',
            'packages.q1.label':      'Süre',
            'packages.q2.label':      'Paylaşım',
            'packages.q3.label':      'Segment',

            'packages.back':          'Geri',
            'packages.next':          'İleri',
            'packages.see-result':    'Sonucu Gör',

            /* Q1 */
            'packages.q1.question':   'Sosyal medyaya günde ne kadar süre ayırıyorsunuz?',
            'packages.q1.opt1.title': '0 – 1 saat',
            'packages.q1.opt1.hint':  'Yalnızca temel varlık',
            'packages.q1.opt2.title': '1 – 3 saat',
            'packages.q1.opt2.hint':  'Aktif kullanıcı',
            'packages.q1.opt3.title': '3+ saat',
            'packages.q1.opt3.hint':  'Yoğun varlık',
            'packages.q1.placeholder':'Örn. günde yaklaşık 2 saat',

            /* Q2 */
            'packages.q2.question':   'Düzenli olarak paylaşım yapıyor musunuz?',
            'packages.q2.opt1.title': 'Hayır, neredeyse hiç',
            'packages.q2.opt1.hint':  'Sıfırdan başlıyoruz',
            'packages.q2.opt2.title': 'Bazen',
            'packages.q2.opt2.hint':  'Düzensiz aralıklarla',
            'packages.q2.opt3.title': 'Evet, düzenli olarak',
            'packages.q2.opt3.hint':  'Tutarlı yayın akışı',
            'packages.q2.placeholder':'Örn. ayda birkaç kez',

            /* Q3 */
            'packages.q3.question':   'Ne tür fiyat aralığındaki mülkler ile çalışıyorsunuz?',
            'packages.q3.opt1.title': '5M – 15M ₺',
            'packages.q3.opt1.hint':  'Üst orta segment',
            'packages.q3.opt2.title': '15M – 50M ₺',
            'packages.q3.opt2.hint':  'Lüks segment',
            'packages.q3.opt3.title': '50M ₺ ve üzeri',
            'packages.q3.opt3.hint':  'Ultra-lüks segment',
            'packages.q3.placeholder':'Örn. karma portföy',

            /* Other */
            'packages.opt.other.title': 'Diğer',
            'packages.opt.other.hint':  'Kendi yanıtımı yazayım',
            'packages.opt.other.label': 'Yanıtınızı yazın',

            /* Result */
            'packages.result.eyebrow':  'Önerilen Paketiniz',
            'packages.result.title':    'Sizin için en uygun paket',
            'packages.result.badge':    'Sizin için önerilen',
            'packages.cta.book':        'Katıl',
            'packages.cta.restart':     'Geri Dön',
            'packages.compare.title':   'Tüm paketleri karşılaştırın',
            'packages.compare.lead':    'Tek seferlik projeden uçtan uca dijital varlığa kadar dört ölçek.',
            'packages.feature.included':'Dahil',

            /* Package definitions */
            'pkg.tekil.name':       'Tekil',
            'pkg.tekil.tagline':    'Tek seferlik bir lansman ya da öne çıkan ilan için.',
            'pkg.tekil.period':     'tek seferlik',
            'pkg.tekil.f1':         '1 profesyonel video prodüksiyonu',
            'pkg.tekil.f2':         '1 sosyal medya post tasarımı',
            'pkg.tekil.f3':         'Tek mülk için yaratıcı yönlendirme',
            'pkg.tekil.f4':         'Yayına hazır master dosyalar',

            'pkg.baslangic.name':   'Başlangıç',
            'pkg.baslangic.tagline':'Tutarlı ve profesyonel bir varlık inşa etmek isteyenler için.',
            'pkg.baslangic.period': '/ ay',
            'pkg.baslangic.f1':     'Aylık 4 video',
            'pkg.baslangic.f2':     'Aylık 4 sosyal medya postu',
            'pkg.baslangic.f3':     '3 günde bir hikâye paylaşımı',
            'pkg.baslangic.f4':     'Sosyal medya yönetimi',

            'pkg.ileri.name':       'İleri Seviye',
            'pkg.ileri.tagline':    'Markanızı tutarlı şekilde büyütmek isteyen profesyoneller için.',
            'pkg.ileri.period':     '/ ay',
            'pkg.ileri.f1':         'Aylık 6 video',
            'pkg.ileri.f2':         'Aylık 6 sosyal medya postu',
            'pkg.ileri.f3':         '2 günde bir hikâye paylaşımı',
            'pkg.ileri.f4':         'Sosyal medya yönetimi',
            'pkg.ileri.f5':         '0 – 3 sayfalık web sitesi',

            'pkg.profesyonel.name':   'Profesyonel',
            'pkg.profesyonel.tagline':'Üst pazarda lider konuma oynayan elit danışmanlar için.',
            'pkg.profesyonel.period': '/ ay',
            'pkg.profesyonel.f1':     'Aylık 8 video',
            'pkg.profesyonel.f2':     'Aylık 8 sosyal medya postu',
            'pkg.profesyonel.f3':     'Her gün hikâye paylaşımı',
            'pkg.profesyonel.f4':     'Sosyal medya yönetimi',
            'pkg.profesyonel.f5':     'Mülk listesi tasarımı',
            'pkg.profesyonel.f6':     'Pro web sitesi (0 – 8 sayfa)',
            'pkg.profesyonel.f7':     'Domain dahil',

            /* Services section */
            'services.eyebrow':      'Hizmetlerimiz',
            'services.title.line1':  'Lüks markanız için',
            'services.title.line2':  'uçtan uca yapım.',
            'services.lead':         'Sinematik içerikten stratejik dijital varlığa kadar — markanızı üst pazarda konumlandıran her bileşen tek bir stüdyodan.',

            'services.card1.title':  'Kısa Form Videolar',
            'services.card1.copy':   'Reels, Shorts ve TikTok için sinematik mülk turları, kişisel marka içerikleri ve yüksek dönüşümlü kreatif yapım.',
            'services.card2.title':  'Post & Story Tasarımı',
            'services.card2.copy':   'Lüks segmente özgü tipografi ve görsel sistem ile feed\'inizde tutarlı, prestijli bir kimlik.',
            'services.card3.title':  'Sosyal Medya Yönetimi',
            'services.card3.copy':   'İçerik takvimi, yayın stratejisi, topluluk yönetimi ve performans takibi — markanızı işletiyoruz, siz mülkleri satıyorsunuz.',
            'services.card4.title':  'Web Sitesi Tasarımı',
            'services.card4.copy':   'Üst düzey müşteriler için tasarlanmış; hızlı, sinematik ve dönüşüme odaklı kişisel marka siteleri.',

            /* About section */
            'about.eyebrow':         'Hakkımızda',
            'about.title.line1':     'İki tutkulu girişimcinin',
            'about.title.line2':     'vizyonu.',
            'about.body':            'Lise yıllarında filizlenen finansal özgürlük ve başarı hedefleri, onları dijital dünyanın farklı alanlarını keşfetmeye yöneltti. Ancak asıl dönüm noktası, estetik tasarıma ve stratejik pazarlamaya olan ortak tutkularını birleştirmeleriyle yaşandı. Mansium; bu vizyonun bir eseri olarak, lüks gayrimenkul profesyonellerinin dijital varlıklarını en üst seviyeye taşımak için kuruldu ve yolculuğumuz böylece başladı.',
            'about.pillar1.title':   'Estetik Tasarım',
            'about.pillar1.copy':    'Lüks segmente özgü, ölçülü ve prestijli görsel dil.',
            'about.pillar2.title':   'Stratejik Pazarlama',
            'about.pillar2.copy':    'Doğru müşteri kitlesine, doğru hikâye, doğru zamanda.',

            /* Contact section */
            'contact.eyebrow':              'İletişim',
            'contact.title.line1':          'Lüks pazarda',
            'contact.title.line2':          'birlikte yükselelim.',
            'contact.lead':                 'Markanızı bir sonraki seviyeye taşımak için kısa bir keşif görüşmesi planlayın. Ekibimiz 24 saat içinde size geri döner.',
            'contact.phone.label':          'Telefon',
            'contact.email.label':          'E-posta',
            'contact.hours.label':          'Çalışma Saatleri',
            'contact.hours.value':          'Pzt – Cmt · 09:00 – 19:00',

            'contact.form.title':           'Bize yazın',
            'contact.form.subtitle':        'Aşağıdaki formu doldurun, en kısa sürede dönüş yapalım.',
            'contact.form.name.label':      'Adınız Soyadınız',
            'contact.form.name.placeholder':'Örn. Mehmet Yılmaz',
            'contact.form.email.label':     'E-posta',
            'contact.form.email.placeholder':'ornek@ajans.com',
            'contact.form.message.label':   'Mesajınız',
            'contact.form.message.placeholder':'Hedefleriniz, mevcut durumunuz ve ihtiyaçlarınız hakkında kısaca bahsedin.',
            'contact.form.submit':          'Mesajı Gönder',
            'contact.form.sending':         'Gönderiliyor…',
            'contact.form.success':         'Teşekkürler! Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız.',
            'contact.form.error':           'Bir sorun oluştu. Lütfen tekrar deneyin ya da bize doğrudan e-posta gönderin.',
            'contact.form.invalid':         'Lütfen tüm alanları geçerli bilgilerle doldurun.',
            'contact.form.legal':           'Formu göndererek bilgilerinizin yalnızca size dönüş yapmak amacıyla kullanılacağını kabul etmiş olursunuz.',
        },

        en: {
            /* Document meta */
            'meta.title':       'Mansium — Strategic Advisory for Luxury Real Estate Consultants',
            'meta.description': 'Mansium is a high-ticket consulting firm helping elite real estate professionals scale into the luxury market through strategy, brand positioning, and high-value client acquisition.',

            /* Header navigation */
            'nav.projects': 'Projects',
            'nav.packages': 'Packages',
            'nav.about':    'About Us',
            'nav.contact':  'Contact',

            /* Hero section */
            'hero.eyebrow':        'Luxury Real Estate Advisory',
            'hero.title.line1':    'Stand among the',
            'hero.title.line2':    'top consultants',
            'hero.title.line3':    'in the luxury market.',
            'hero.lead':           'Mansium delivers strategic advisory, brand positioning, and high-value client acquisition that connects elite real estate professionals with ultra-high-net-worth clientele.',
            'hero.cta.primary':    'Explore Packages',
            'hero.cta.secondary':  'Book a Call',
            'hero.meta.advised':   'Portfolio Advised',
            'hero.meta.clients':   'Elite Consultant Clients',
            'hero.meta.markets':   'Luxury Markets',
            'hero.scroll':         'Scroll Down',

            /* Packages — section */
            'packages.eyebrow':       'Package Configurator',
            'packages.title.line1':   'Find the perfect package',
            'packages.title.line2':   'in 3 simple steps.',
            'packages.lead':          'A short configuration to understand your needs. Based on your answers, we recommend the right scope and pricing for your brand.',

            'packages.step':          'Step',
            'packages.q1.label':      'Time',
            'packages.q2.label':      'Posting',
            'packages.q3.label':      'Segment',

            'packages.back':          'Back',
            'packages.next':          'Next',
            'packages.see-result':    'See Result',

            /* Q1 */
            'packages.q1.question':   'How much time do you spend on social media each day?',
            'packages.q1.opt1.title': '0 – 1 hour',
            'packages.q1.opt1.hint':  'Minimal presence',
            'packages.q1.opt2.title': '1 – 3 hours',
            'packages.q1.opt2.hint':  'Active user',
            'packages.q1.opt3.title': '3+ hours',
            'packages.q1.opt3.hint':  'Heavy presence',
            'packages.q1.placeholder':'e.g. roughly 2 hours a day',

            /* Q2 */
            'packages.q2.question':   'Do you post on a regular schedule?',
            'packages.q2.opt1.title': 'No, almost never',
            'packages.q2.opt1.hint':  'Starting from scratch',
            'packages.q2.opt2.title': 'Sometimes',
            'packages.q2.opt2.hint':  'Irregular intervals',
            'packages.q2.opt3.title': 'Yes, consistently',
            'packages.q2.opt3.hint':  'Steady publishing flow',
            'packages.q2.placeholder':'e.g. a few times a month',

            /* Q3 */
            'packages.q3.question':   'What property price range do you work with?',
            'packages.q3.opt1.title': '₺5M – ₺15M',
            'packages.q3.opt1.hint':  'Upper-mid segment',
            'packages.q3.opt2.title': '₺15M – ₺50M',
            'packages.q3.opt2.hint':  'Luxury segment',
            'packages.q3.opt3.title': '₺50M and above',
            'packages.q3.opt3.hint':  'Ultra-luxury segment',
            'packages.q3.placeholder':'e.g. mixed portfolio',

            /* Other */
            'packages.opt.other.title': 'Something else',
            'packages.opt.other.hint':  'Let me write my own answer',
            'packages.opt.other.label': 'Type your answer',

            /* Result */
            'packages.result.eyebrow':  'Your Recommended Package',
            'packages.result.title':    'The right package for you',
            'packages.result.badge':    'Recommended for you',
            'packages.cta.book':        'Book It',
            'packages.cta.restart':     'Restart',
            'packages.compare.title':   'Compare all packages',
            'packages.compare.lead':    'From a one-off project to a full digital presence — four scales.',
            'packages.feature.included':'Included',

            /* Package definitions */
            'pkg.tekil.name':       'Single',
            'pkg.tekil.tagline':    'For a one-off launch or a featured listing.',
            'pkg.tekil.period':     'one-off',
            'pkg.tekil.f1':         '1 professional video production',
            'pkg.tekil.f2':         '1 social media post design',
            'pkg.tekil.f3':         'Creative direction for one property',
            'pkg.tekil.f4':         'Production-ready master files',

            'pkg.baslangic.name':   'Starter',
            'pkg.baslangic.tagline':'For consultants building a steady, professional presence.',
            'pkg.baslangic.period': '/ month',
            'pkg.baslangic.f1':     '4 videos per month',
            'pkg.baslangic.f2':     '4 social media posts per month',
            'pkg.baslangic.f3':     'Story every 3 days',
            'pkg.baslangic.f4':     'Social media management',

            'pkg.ileri.name':       'Advanced',
            'pkg.ileri.tagline':    'For professionals scaling their brand consistently.',
            'pkg.ileri.period':     '/ month',
            'pkg.ileri.f1':         '6 videos per month',
            'pkg.ileri.f2':         '6 social media posts per month',
            'pkg.ileri.f3':         'Story every 2 days',
            'pkg.ileri.f4':         'Social media management',
            'pkg.ileri.f5':         '0 – 3 page website',

            'pkg.profesyonel.name':   'Professional',
            'pkg.profesyonel.tagline':'For elite consultants leading the upper market.',
            'pkg.profesyonel.period': '/ month',
            'pkg.profesyonel.f1':     '8 videos per month',
            'pkg.profesyonel.f2':     '8 social media posts per month',
            'pkg.profesyonel.f3':     'Daily story',
            'pkg.profesyonel.f4':     'Social media management',
            'pkg.profesyonel.f5':     'Listing design',
            'pkg.profesyonel.f6':     'Pro website (0 – 8 pages)',
            'pkg.profesyonel.f7':     'Domain included',

            /* Services section */
            'services.eyebrow':      'Our Services',
            'services.title.line1':  'End-to-end production',
            'services.title.line2':  'for your luxury brand.',
            'services.lead':         'From cinematic content to a strategic digital presence — every component that positions your brand in the upper market, delivered by a single studio.',

            'services.card1.title':  'Short-form Videos',
            'services.card1.copy':   'Cinematic property tours, personal brand content, and high-converting creative for Reels, Shorts and TikTok.',
            'services.card2.title':  'Post & Story Design',
            'services.card2.copy':   'Typography and visual systems crafted for the luxury segment — a consistent, prestigious identity across your feed.',
            'services.card3.title':  'Social Media Management',
            'services.card3.copy':   'Content calendar, publishing strategy, community management, and performance tracking — we run your brand while you sell properties.',
            'services.card4.title':  'Website Design',
            'services.card4.copy':   'Designed for high-end clientele: fast, cinematic, conversion-focused personal brand websites.',

            /* About section */
            'about.eyebrow':         'About Us',
            'about.title.line1':     'The vision of two',
            'about.title.line2':     'passionate entrepreneurs.',
            'about.body':            'Their goals of financial freedom and success — first sparked during their high school years — led them to explore different fields of the digital world. The real turning point came when they combined their shared passion for aesthetic design and strategic marketing. Mansium was founded as the embodiment of that vision, dedicated to elevating the digital presence of luxury real estate professionals to its highest level — and that is how our journey began.',
            'about.pillar1.title':   'Aesthetic Design',
            'about.pillar1.copy':    'A measured, prestigious visual language tailored to the luxury segment.',
            'about.pillar2.title':   'Strategic Marketing',
            'about.pillar2.copy':    'The right story, to the right audience, at the right moment.',

            /* Contact section */
            'contact.eyebrow':              'Contact',
            'contact.title.line1':          'Let us rise together',
            'contact.title.line2':          'in the luxury market.',
            'contact.lead':                 'Schedule a short discovery call to take your brand to the next level. Our team gets back to you within 24 hours.',
            'contact.phone.label':          'Phone',
            'contact.email.label':          'Email',
            'contact.hours.label':          'Working Hours',
            'contact.hours.value':          'Mon – Sat · 09:00 – 19:00',

            'contact.form.title':           'Write to us',
            'contact.form.subtitle':        'Fill out the short form below and we will get back to you shortly.',
            'contact.form.name.label':      'Full Name',
            'contact.form.name.placeholder':'e.g. Mehmet Yılmaz',
            'contact.form.email.label':     'Email',
            'contact.form.email.placeholder':'you@agency.com',
            'contact.form.message.label':   'Your Message',
            'contact.form.message.placeholder':'Briefly describe your goals, your current situation, and what you need.',
            'contact.form.submit':          'Send Message',
            'contact.form.sending':         'Sending…',
            'contact.form.success':         'Thank you! Your message has reached us — we will get back to you shortly.',
            'contact.form.error':           'Something went wrong. Please try again or email us directly.',
            'contact.form.invalid':         'Please fill in every field with valid information.',
            'contact.form.legal':           'By submitting this form, you agree that your information will be used solely to get back to you.',
        },
    };

    const STORAGE_KEY     = 'mansium.lang';
    const DEFAULT_LANG    = 'tr';
    const SUPPORTED_LANGS = ['tr', 'en'];
    let   currentLang     = DEFAULT_LANG;

    /* =====================================================
       2. PACKAGE DEFINITIONS
       Prices fixed; copy comes from translations.
       ===================================================== */
    const PACKAGES = [
        {
            id: 'tekil',
            priceTR: '7.900 ₺',
            priceEN: '₺7,900',
            featureKeys: ['pkg.tekil.f1', 'pkg.tekil.f2', 'pkg.tekil.f3', 'pkg.tekil.f4'],
        },
        {
            id: 'baslangic',
            priceTR: '29.900 ₺',
            priceEN: '₺29,900',
            featureKeys: ['pkg.baslangic.f1', 'pkg.baslangic.f2', 'pkg.baslangic.f3', 'pkg.baslangic.f4'],
        },
        {
            id: 'ileri',
            priceTR: '54.900 ₺',
            priceEN: '₺54,900',
            featureKeys: ['pkg.ileri.f1', 'pkg.ileri.f2', 'pkg.ileri.f3', 'pkg.ileri.f4', 'pkg.ileri.f5'],
        },
        {
            id: 'profesyonel',
            priceTR: '99.900 ₺',
            priceEN: '₺99,900',
            featureKeys: ['pkg.profesyonel.f1', 'pkg.profesyonel.f2', 'pkg.profesyonel.f3', 'pkg.profesyonel.f4', 'pkg.profesyonel.f5', 'pkg.profesyonel.f6', 'pkg.profesyonel.f7'],
        },
    ];

    function getPackageById(id) { return PACKAGES.find(p => p.id === id); }
    function getPackagePrice(pkg, lang) { return lang === 'en' ? pkg.priceEN : pkg.priceTR; }

    /* =====================================================
       3. LANGUAGE APPLICATION
       ===================================================== */
    function applyLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
        currentLang = lang;
        const dict = translations[lang];

        document.documentElement.setAttribute('lang', lang);

        /* Text content */
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        /* Attribute translations */
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const pairs = el.getAttribute('data-i18n-attr').split(',');
            pairs.forEach(pair => {
                const [attr, key] = pair.split(':').map(s => s.trim());
                if (attr && key && dict[key] !== undefined) {
                    el.setAttribute(attr, dict[key]);
                }
            });
        });

        /* Document title + meta description */
        if (dict['meta.title']) document.title = dict['meta.title'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict['meta.description']) {
            metaDesc.setAttribute('content', dict['meta.description']);
        }

        /* Toggle UI state — sync every .lang-toggle instance (desktop + mobile) */
        document.querySelectorAll('.lang-toggle').forEach(toggle => {
            toggle.setAttribute('data-active', lang);
            toggle.querySelectorAll('.lang-toggle__option').forEach(btn => {
                const isActive = btn.getAttribute('data-lang') === lang;
                btn.classList.toggle('is-active', isActive);
                btn.setAttribute('aria-pressed', String(isActive));
            });
        });

        /* Re-render quiz dynamic UI (next button label, package grid, recommended card) */
        if (typeof window.__mansiumQuizRefresh === 'function') {
            window.__mansiumQuizRefresh();
        }

        /* Persist */
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }

        document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
    }

    function t(key) {
        return (translations[currentLang] && translations[currentLang][key]) || key;
    }

    /* =====================================================
       4. INIT — Language toggle bindings
       ===================================================== */
    function initLanguageToggle() {
        const toggles = document.querySelectorAll('.lang-toggle');
        if (!toggles.length) return;

        toggles.forEach(toggle => {
            toggle.querySelectorAll('.lang-toggle__option').forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    if (lang) applyLanguage(lang);
                });
            });
        });

        let initial = DEFAULT_LANG;
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored && SUPPORTED_LANGS.includes(stored)) initial = stored;
        } catch (_) { /* ignore */ }

        applyLanguage(initial);
    }

    /* =====================================================
       5. INIT — Sticky header scroll state
       ===================================================== */
    function initHeaderScrollState() {
        const header = document.getElementById('site-header');
        if (!header) return;

        const onScroll = () => {
            if (window.scrollY > 12) header.classList.add('is-scrolled');
            else header.classList.remove('is-scrolled');
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* =====================================================
       6. INIT — Mobile nav trigger
       ===================================================== */
    function initMobileNav() {
        const trigger    = document.querySelector('.nav-trigger');
        const nav        = document.querySelector('.site-nav');
        const closeBtn   = nav ? nav.querySelector('[data-nav-close]') : null;
        if (!trigger || !nav) return;

        const MOBILE_MAX = 1024;

        const open = () => {
            nav.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
            trigger.setAttribute('aria-label', 'Close menu');
            document.body.classList.add('has-nav-open');
        };

        const close = () => {
            nav.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
            trigger.setAttribute('aria-label', 'Open menu');
            document.body.classList.remove('has-nav-open');
        };

        trigger.addEventListener('click', () => {
            if (nav.classList.contains('is-open')) close(); else open();
        });

        /* a) Close button (X) */
        if (closeBtn) closeBtn.addEventListener('click', close);

        /* b) Close on ANY navigation link tap — they trigger smooth-scroll
              to the target section, so the overlay must vanish immediately. */
        nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

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
       7. INIT — Apple-style 3-step Package Quiz
       ===================================================== */
    function initPackageQuiz() {
        const quiz = document.querySelector('[data-quiz]');
        if (!quiz) return;

        const steps        = quiz.querySelectorAll('.quiz__step');
        const stepPills    = quiz.querySelectorAll('[data-step-pill]');
        const stepFills    = quiz.querySelectorAll('[data-step-fill]');
        const backBtn      = quiz.querySelector('[data-quiz-back]');
        const nextBtn      = quiz.querySelector('[data-quiz-next]');
        const nextLabel    = nextBtn ? nextBtn.querySelector('[data-i18n]') : null;
        const counterCur   = quiz.querySelector('[data-quiz-current]');

        const resultEl     = document.querySelector('[data-quiz-result]');
        const recCard      = document.querySelector('[data-recommended-card]');
        const recName      = document.querySelector('[data-recommended-name]');
        const recTagline   = document.querySelector('[data-recommended-tagline]');
        const recPrice     = document.querySelector('[data-recommended-price]');
        const recPeriod    = document.querySelector('[data-recommended-period]');
        const recFeatures  = document.querySelector('[data-recommended-features]');
        const grid         = document.querySelector('[data-package-grid]');

        const TOTAL_STEPS = 3;
        let   currentStep = 1;

        /* answers[stepIndex] = { value, score, custom?: string } */
        const answers = { 1: null, 2: null, 3: null };
        let   recommendedId = null;

        /* ---- Render helpers ---- */
        function showStep(n) {
            steps.forEach(s => {
                const idx = Number(s.getAttribute('data-step'));
                const isActive = idx === n;
                s.classList.toggle('is-active', isActive);
                if (isActive) s.removeAttribute('hidden');
                else s.setAttribute('hidden', '');
            });

            stepPills.forEach(p => {
                const idx = Number(p.getAttribute('data-step-pill'));
                p.classList.toggle('is-active', idx === n);
                p.classList.toggle('is-complete', idx < n);
            });

            /* Progress bar fills */
            stepFills.forEach(f => {
                const range = f.getAttribute('data-step-fill'); // e.g. "1-2"
                const [from, to] = range.split('-').map(Number);
                f.classList.toggle('is-filled', n >= to);
            });

            if (counterCur) counterCur.textContent = String(n);

            /* Back button */
            if (backBtn) backBtn.disabled = (n === 1);

            /* Next button label + enabled state */
            updateNextButton();
        }

        function updateNextButton() {
            if (!nextBtn || !nextLabel) return;

            const isFinal = currentStep === TOTAL_STEPS;
            const key = isFinal ? 'packages.see-result' : 'packages.next';
            nextLabel.setAttribute('data-i18n', key);
            nextLabel.textContent = t(key);

            const ans = answers[currentStep];
            let isValid = !!ans;
            /* If the answer is "other", require a non-empty custom value */
            if (ans && ans.value === 'other') {
                isValid = !!(ans.custom && ans.custom.trim());
            }
            nextBtn.disabled = !isValid;
        }

        /* ---- Option clicks ---- */
        quiz.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const step  = Number(btn.getAttribute('data-step'));
                const value = btn.getAttribute('data-value');
                const score = Number(btn.getAttribute('data-score'));

                /* Toggle selected state within this step */
                quiz.querySelectorAll(`.quiz-option[data-step="${step}"]`).forEach(o => {
                    o.classList.remove('is-selected');
                    o.setAttribute('aria-checked', 'false');
                });
                btn.classList.add('is-selected');
                btn.setAttribute('aria-checked', 'true');

                /* Reveal / hide the "other" custom input for this step */
                const otherWrap = quiz.querySelector(`[data-other-input="${step}"]`);
                const otherField = quiz.querySelector(`[data-other-field="${step}"]`);
                if (value === 'other') {
                    if (otherWrap) otherWrap.hidden = false;
                    setTimeout(() => otherField && otherField.focus({ preventScroll: true }), 80);
                } else {
                    if (otherWrap) otherWrap.hidden = true;
                }

                answers[step] = {
                    value,
                    score,
                    custom: value === 'other' ? (otherField ? otherField.value : '') : null,
                };
                updateNextButton();
            });
        });

        /* ---- Custom input typing keeps Next disabled until non-empty ---- */
        quiz.querySelectorAll('[data-other-field]').forEach(input => {
            input.addEventListener('input', () => {
                const step = Number(input.getAttribute('data-other-field'));
                if (answers[step] && answers[step].value === 'other') {
                    answers[step].custom = input.value;
                    updateNextButton();
                }
            });
        });

        /* ---- Navigation ---- */
        function goNext() {
            if (currentStep < TOTAL_STEPS) {
                currentStep += 1;
                showStep(currentStep);
            } else {
                computeAndShowResult();
            }
        }

        function goBack() {
            if (currentStep > 1) {
                currentStep -= 1;
                showStep(currentStep);
            }
        }

        if (nextBtn) nextBtn.addEventListener('click', goNext);
        if (backBtn) backBtn.addEventListener('click', goBack);

        /* ---- Recommendation engine ---- */
        function computeRecommendation() {
            const s1 = answers[1] ? answers[1].score : 0;
            const s2 = answers[2] ? answers[2].score : 0;
            const s3 = answers[3] ? answers[3].score : 0;
            const total = s1 + s2 + s3; // range 1..8

            if (total <= 2) return 'tekil';
            if (total <= 4) return 'baslangic';
            if (total <= 6) return 'ileri';
            return 'profesyonel';
        }

        /* ---- Render the recommended (featured) card ---- */
        function renderRecommended(id) {
            const pkg = getPackageById(id);
            if (!pkg || !recCard) return;

            recCard.setAttribute('data-package', id);

            if (recName)    recName.textContent    = t(`pkg.${id}.name`);
            if (recTagline) recTagline.textContent = t(`pkg.${id}.tagline`);
            if (recPrice)   recPrice.textContent   = getPackagePrice(pkg, currentLang);
            if (recPeriod)  recPeriod.textContent  = t(`pkg.${id}.period`);

            if (recFeatures) {
                recFeatures.innerHTML = '';
                pkg.featureKeys.forEach(k => {
                    const li = document.createElement('li');
                    li.className = 'package-card__feature';
                    li.innerHTML = `
                        <span class="package-card__feature-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="5 12 10 17 19 7"></polyline>
                            </svg>
                        </span>
                        <span class="package-card__feature-text">${t(k)}</span>
                    `;
                    recFeatures.appendChild(li);
                });
            }
        }

        /* ---- Render the comparison grid ---- */
        function renderGrid(highlightId) {
            if (!grid) return;
            grid.innerHTML = '';

            PACKAGES.forEach(pkg => {
                const isHighlighted = pkg.id === highlightId;
                const card = document.createElement('article');
                card.className = 'package-card package-card--mini' + (isHighlighted ? ' is-highlighted' : '');
                card.setAttribute('data-package', pkg.id);

                const featuresHtml = pkg.featureKeys.map(k => `
                    <li class="package-card__feature">
                        <span class="package-card__feature-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="5 12 10 17 19 7"></polyline>
                            </svg>
                        </span>
                        <span class="package-card__feature-text">${t(k)}</span>
                    </li>
                `).join('');

                card.innerHTML = `
                    <div class="package-card__head">
                        ${isHighlighted ? `
                            <span class="package-card__badge package-card__badge--mini">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"></polygon>
                                </svg>
                                <span>${t('packages.result.badge')}</span>
                            </span>
                        ` : ''}
                        <h5 class="package-card__name">${t(`pkg.${pkg.id}.name`)}</h5>
                        <p class="package-card__tagline">${t(`pkg.${pkg.id}.tagline`)}</p>
                    </div>
                    <div class="package-card__price">
                        <span class="package-card__amount">${getPackagePrice(pkg, currentLang)}</span>
                        <span class="package-card__period">${t(`pkg.${pkg.id}.period`)}</span>
                    </div>
                    <ul class="package-card__features">${featuresHtml}</ul>
                `;
                grid.appendChild(card);
            });
        }

        /* ---- Show result ---- */
        function computeAndShowResult() {
            recommendedId = computeRecommendation();
            renderRecommended(recommendedId);
            renderGrid(recommendedId);

            if (resultEl) {
                resultEl.hidden = false;
                /* Smooth transition in */
                requestAnimationFrame(() => resultEl.classList.add('is-visible'));
                /* Scroll into view */
                setTimeout(() => {
                    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 60);
            }

            /* Hide the quiz card itself */
            quiz.classList.add('is-complete');
        }

        /* ---- Restart ---- */
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-quiz-restart]');
            if (!btn) return;
            restartQuiz();
        });

        function restartQuiz() {
            currentStep = 1;
            answers[1] = answers[2] = answers[3] = null;
            recommendedId = null;

            quiz.querySelectorAll('.quiz-option').forEach(o => {
                o.classList.remove('is-selected');
                o.setAttribute('aria-checked', 'false');
            });
            quiz.querySelectorAll('[data-other-input]').forEach(w => w.hidden = true);
            quiz.querySelectorAll('[data-other-field]').forEach(f => f.value = '');

            quiz.classList.remove('is-complete');
            if (resultEl) {
                resultEl.classList.remove('is-visible');
                resultEl.hidden = true;
            }

            showStep(currentStep);
            quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        /* ---- Public refresh hook (called after language change) ---- */
        window.__mansiumQuizRefresh = function () {
            updateNextButton();
            if (recommendedId) {
                renderRecommended(recommendedId);
                renderGrid(recommendedId);
            }
        };

        /* ---- Boot ---- */
        showStep(currentStep);
    }

    /* =====================================================
       8. INIT — Contact form (Formspree, AJAX)
       ===================================================== */
    function initContactForm() {
        const form    = document.querySelector('[data-contact-form]');
        if (!form) return;

        const status  = form.querySelector('[data-contact-status]');
        const submit  = form.querySelector('[data-contact-submit]');
        const label   = submit ? submit.querySelector('.contact-form__submit-label') : null;
        const original = label ? label.textContent : '';

        const setStatus = (state, key) => {
            if (!status) return;
            status.hidden = false;
            status.dataset.state = state;
            status.textContent = t(key);
        };

        const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name    = form.querySelector('#cf-name');
            const email   = form.querySelector('#cf-email');
            const message = form.querySelector('#cf-message');

            const valid =
                name && name.value.trim().length >= 2 &&
                email && isValidEmail(email.value.trim()) &&
                message && message.value.trim().length >= 5;

            if (!valid) {
                setStatus('error', 'contact.form.invalid');
                return;
            }

            if (submit) submit.disabled = true;
            if (label)  label.textContent = t('contact.form.sending');
            setStatus('pending', 'contact.form.sending');

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: new FormData(form),
                });

                if (response.ok) {
                    form.reset();
                    setStatus('success', 'contact.form.success');
                } else {
                    setStatus('error', 'contact.form.error');
                }
            } catch (_) {
                setStatus('error', 'contact.form.error');
            } finally {
                if (submit) submit.disabled = false;
                if (label)  label.textContent = original || t('contact.form.submit');
            }
        });
    }

    /* =====================================================
       9. BOOT
       ===================================================== */
    function boot() {
        initPackageQuiz();      /* before language so quiz refresh hook exists */
        initLanguageToggle();   /* triggers initial applyLanguage() */
        initHeaderScrollState();
        initMobileNav();
        initContactForm();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
