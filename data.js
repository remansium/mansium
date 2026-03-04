/* ============================================================
   MANSIUM — data.js
   ============================================================
   This is your central content file.
   Edit TEMPLATES_DATA and PROJECTS_DATA here to manage ALL
   content across the entire site. No HTML editing required.

   TEMPLATES_DATA fields:
     id        — unique key used by the configurator
     name      — display name (shown everywhere)
     desc      — short description for the configurator tile
     fullDesc  — longer description for the Templates page
     image     — path to image, e.g. "images/template-estate.jpg"
                 Leave as "" to show a placeholder until you add photos.
     tag       — optional badge label ("Popular", "New", etc.)
                 Leave as "" for no badge.
     features  — array of feature strings shown on the Templates page
     bespoke   — set to true ONLY for the Bespoke/Custom option

   PROJECTS_DATA fields:
     id        — unique key
     name      — project name shown on cards and in modal
     client    — client / company name
     year      — year delivered (string, e.g. "2024")
     category  — used for filter tabs, e.g. "Real Estate", "Brand"
     template  — which Mansium template was used (display string)
     image     — path to screenshot, e.g. "images/projects/meridian.jpg"
                 Leave as "" for placeholder.
     desc      — full paragraph shown inside the project modal
     liveUrl   — URL for the "View Live Site" button. Use "#" if none.
     stats     — array of up to 3 objects: { num: "340%", label: "Enquiry uplift" }
   ============================================================ */

/* ── BASE PRICE ──────────────────────────────────────────────
   All templates share this single base price.
   Extra costs come only from the pages and timeline add-ons.
   Change this one value to update pricing everywhere instantly.
   ─────────────────────────────────────────────────────────── */
const BASE_PRICE = 2400;

/* ── TEMPLATES DATA ─────────────────────────────────────────
   Add or remove objects to add or remove template options.
   ─────────────────────────────────────────────────────────── */
const TEMPLATES_DATA = [
  {
    id:       "showcase",
    name:     "Showcase One-Pager",
    desc:     "A single, scroll-driven canvas. Ideal for portfolio presentations, property reveals, or brand launches.",
    fullDesc: "A powerful single-page experience designed for maximum impact. The Showcase One-Pager guides visitors through your story in one seamless scroll — from hero statement to contact, with no distractions and no dead ends. Perfect for property launches, personal brands, and campaign microsites.",
    image:    "logo.png",   // e.g. "images/template-showcase.jpg"
    tag:      "",
    features: ["Single-page scroll", "Full-screen hero", "Contact form", "Mobile-first", "Scroll animations"],
    bespoke:  false
  },
  {
    id:       "estate",
    name:     "Estate Listing Platform",
    desc:     "Multi-property listings with gallery, virtual tour integration, enquiry forms, and CRM connection.",
    fullDesc: "A comprehensive property showcase platform built for premium estate agents and developers. Display multiple listings with rich galleries, floor plans, and virtual tour embeds. Enquiry forms connect directly to your CRM of choice, and the admin panel lets you manage listings without a developer.",
    image:    "",   // e.g. "images/template-estate.jpg"
    tag:      "Popular",
    features: ["Multi-listing", "Gallery & tours", "CRM integration", "Enquiry forms", "Map view", "Filter & search"],
    bespoke:  false
  },
  {
    id:       "brand",
    name:     "Brand & Studio Site",
    desc:     "A multi-section brand platform with team profiles, editorial journal, service detail pages, and contact flows.",
    fullDesc: "A complete brand presence for agencies, studios, and consultancies. Features team bios, an editorial journal, detailed service pages, and a sophisticated contact flow. Built to communicate credibility and attract high-calibre clients through authoritative, well-structured content.",
    image:    "",   // e.g. "images/template-brand.jpg"
    tag:      "",
    features: ["Journal / blog", "Team profiles", "Service pages", "Contact flow", "SEO optimised"],
    bespoke:  false
  },
  {
    id:       "investment",
    name:     "Investment Deck Site",
    desc:     "A private, password-protected digital investment deck — data-room ready with gated document access.",
    fullDesc: "A secure, beautifully designed digital counterpart to your pitch deck. Protected by a password gate, it presents your investment thesis, team, market opportunity, and financials in a way that inspires confidence. Document download gating and analytics tell you exactly who engaged with what.",
    image:    "",   // e.g. "images/template-investment.jpg"
    tag:      "",
    features: ["Password protection", "Document gating", "Investor analytics", "Investor-focused layout", "Custom domain"],
    bespoke:  false
  },
  {
    id:       "bespoke",
    name:     "Bespoke / Custom Build",
    desc:     "A completely unique digital architecture, conceived and engineered from scratch. No templates, no constraints — only precision craftsmanship tailored exclusively to your brief.",
    fullDesc: "When off-the-shelf simply will not do. Our Bespoke Build service begins with a blank canvas and ends with a digital product that exists nowhere else on the internet. From custom interaction design to proprietary CMS architecture, every decision is made exclusively in service of your brand.",
    image:    "",   // e.g. "images/template-bespoke.jpg"
    tag:      "",
    features: ["Fully custom architecture", "Unique interaction design", "Proprietary CMS", "Bespoke animations", "Dedicated team"],
    bespoke:  true
  }
];

/* ── PROJECTS DATA ───────────────────────────────────────────
   Add or remove objects to manage your portfolio.
   New category values automatically create new filter tabs.
   ─────────────────────────────────────────────────────────── */
const PROJECTS_DATA = [
  {
    id:       "proj-001",
    name:     "Meridian Residences",
    client:   "Meridian Developments Ltd.",
    year:     "2024",
    category: "Real Estate",
    template: "Estate Listing Platform",
    image:    "",   // e.g. "images/projects/meridian.jpg"
    desc:     "A premium multi-listing platform for a boutique London developer specialising in riverside residences. The site replaced a generic template with a bespoke experience that elevated every listing through immersive gallery views, interactive floor plans, and a streamlined enquiry flow. Organic enquiries increased by 340% within 60 days of launch.",
    liveUrl:  "#",
    stats: [
      { num: "340%", label: "Enquiry uplift" },
      { num: "60",   label: "Days to impact" },
      { num: "12",   label: "Listings managed" }
    ]
  },
  {
    id:       "proj-002",
    name:     "Studio Calloway",
    client:   "Calloway Architecture Ltd.",
    year:     "2024",
    category: "Brand",
    template: "Brand & Studio Site",
    image:    "",   // e.g. "images/projects/calloway.jpg"
    desc:     "A flagship brand site for a Mayfair-based architecture studio seeking to attract high-net-worth residential clients. The design language mirrors the studio's architectural philosophy — clean geometry, controlled white space, and material sensitivity. The editorial journal positions the partners as industry voices, driving consistent inbound from target demographics.",
    liveUrl:  "#",
    stats: [
      { num: "5×",  label: "Inbound leads" },
      { num: "3",   label: "Award entries" },
      { num: "68h", label: "Prototype delivery" }
    ]
  },
  {
    id:       "proj-003",
    name:     "Aurum Capital Partners",
    client:   "Aurum Capital Partners LLP",
    year:     "2023",
    category: "Investment",
    template: "Investment Deck Site",
    image:    "",   // e.g. "images/projects/aurum.jpg"
    desc:     "A gated digital investment deck for a London-based private equity firm raising a second fund. The site presents the firm's thesis, portfolio performance, and team credentials in an experience that mirrors the rigour of the fund itself. Password-protected access and document download analytics gave the team real-time insight into LP engagement.",
    liveUrl:  "#",
    stats: [
      { num: "£28M", label: "Fund raised" },
      { num: "100%", label: "LP engagement" },
      { num: "48h",  label: "Build turnaround" }
    ]
  },
  {
    id:       "proj-004",
    name:     "Lowe Residences",
    client:   "Lowe Property Group",
    year:     "2023",
    category: "Real Estate",
    template: "Showcase One-Pager",
    image:    "",   // e.g. "images/projects/lowe.jpg"
    desc:     "A high-impact one-page launch site for a flagship riverside development in East London. Designed to generate pre-launch registrations through a cinematic full-screen hero, animated reveal sections, and a frictionless waitlist form. The page generated over 800 registrations in its first two weeks — exceeding the client's target by 4×.",
    liveUrl:  "#",
    stats: [
      { num: "800+", label: "Pre-registrations" },
      { num: "4×",   label: "Target exceeded" },
      { num: "2",    label: "Weeks to result" }
    ]
  },
  {
    id:       "proj-005",
    name:     "Forma Studio",
    client:   "Forma Design Studio",
    year:     "2024",
    category: "Brand",
    template: "Brand & Studio Site",
    image:    "",   // e.g. "images/projects/forma.jpg"
    desc:     "A portfolio and studio site for an interior design practice specialising in high-end residential and hospitality projects. The visual system was built around the studio's own project photography, with a custom cursor, parallax gallery, and a project filtration system that allows visitors to explore work by typology and scale.",
    liveUrl:  "#",
    stats: [
      { num: "220%", label: "Session duration" },
      { num: "8",    label: "Projects featured" },
      { num: "95",   label: "Lighthouse score" }
    ]
  },
  {
    id:       "proj-006",
    name:     "The Harlow Collection",
    client:   "Harlow Luxury Interiors",
    year:     "2023",
    category: "Brand",
    template: "Bespoke / Custom Build",
    image:    "",   // e.g. "images/projects/harlow.jpg"
    desc:     "A fully bespoke digital showroom for a luxury furniture and interiors brand. Built from scratch with a custom CMS, product configurator, and an immersive 3D product viewer. The experience was designed to mirror the tactility and exclusivity of the physical showroom, resulting in a substantial increase in high-value direct enquiries.",
    liveUrl:  "#",
    stats: [
      { num: "190%",   label: "Direct enquiries" },
      { num: "Custom", label: "Architecture" },
      { num: "3D",     label: "Product viewer" }
    ]
  }
];
