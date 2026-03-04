/* ============================================================
   MANSIUM — data.js  (complete, luxury real estate niche)
   ============================================================
   Central content file. Edit here to update the entire site.
   ============================================================ */

const BASE_PRICE = 999;

/* ── TEMPLATES DATA ── */
const TEMPLATES_DATA = [
  {
    id:       "showcase",
    name:     "Property Showcase",
    desc:     "A single, scroll-driven canvas built to launch one exceptional property. Ideal for penthouses, villas, and flagship new-build reveals.",
    fullDesc: "A powerful single-page experience engineered for maximum impact at the point of launch. The Property Showcase guides serious buyers through your listing in one seamless scroll — from cinematic hero to enquiry form, with no distractions and no dead ends. Ideal for off-plan launches, private villa sales, and prestige apartment reveals in London, Dubai, Qatar, or New York.",
    image:    "",
    tag:      "",
    features: ["Single-page scroll", "Full-screen hero", "Buyer enquiry form", "Virtual tour embed", "Mobile-first", "Scroll animations"],
    bespoke:  false
  },
  {
    id:       "estate",
    name:     "Estate Listing Platform",
    desc:     "Multi-property listings with gallery, virtual tour integration, buyer enquiry flows, and CRM connection. Built for elite agents and developers.",
    fullDesc: "A comprehensive property showcase platform built for premium estate agencies and development groups managing multiple active listings. Display properties with rich galleries, interactive floor plans, and virtual tour embeds. Enquiry forms connect directly to your CRM, and the admin panel lets your team manage listings independently — no developer required.",
    image:    "",
    tag:      "Popular",
    features: ["Multi-listing management", "Gallery & virtual tours", "CRM integration", "Buyer enquiry flows", "Interactive map view", "Filter & search"],
    bespoke:  false
  },
  {
    id:       "brand",
    name:     "Agency Brand Site",
    desc:     "A flagship multi-section brand platform for luxury estate agencies — agent profiles, featured listings, editorial content, and a sophisticated contact flow.",
    fullDesc: "A complete brand presence for luxury real estate agencies and boutique developers. Features agent profiles, a curated listings showcase, editorial content hub, and a sophisticated buyer contact flow. Built to attract high-net-worth clients and position your agency as the definitive authority in your market — whether that is Mayfair, DIFC, or the Hamptons.",
    image:    "",
    tag:      "",
    features: ["Agent profiles", "Featured listings", "Editorial content hub", "Contact flow", "International SEO"],
    bespoke:  false
  },
  {
    id:       "investment",
    name:     "Investment Deck Site",
    desc:     "A private, password-gated digital investment deck for off-plan developments — data-room ready with document access and investor analytics.",
    fullDesc: "A secure, beautifully designed digital counterpart to your off-plan investment deck. Protected by a password gate, it presents your development thesis, site CGIs, projected returns, and payment plan structure in a way that inspires confidence. Document download gating and engagement analytics tell you exactly which investors reviewed what.",
    image:    "",
    tag:      "",
    features: ["Password protection", "Document gating", "Investor analytics", "Off-plan focused layout", "Custom domain"],
    bespoke:  false
  },
  {
    id:       "bespoke",
    name:     "Bespoke / Custom Build",
    desc:     "A completely unique digital architecture for a property or agency that refuses to be templated. No constraints — only precision craftsmanship.",
    fullDesc: "When the property is extraordinary, the website must be too. Our Bespoke Build service begins with a blank canvas and ends with a digital experience that exists nowhere else on the internet. From custom 3D property walkthroughs to proprietary CMS architecture, every decision is made exclusively in service of one listing or brand.",
    image:    "",
    tag:      "",
    features: ["Fully custom architecture", "Unique interaction design", "Proprietary CMS", "Bespoke animations", "Dedicated senior team"],
    bespoke:  true
  }
];

/* ── PROJECTS DATA ── */
const PROJECTS_DATA = [
  {
    id:       "proj-001",
    name:     "Meridian Residences",
    client:   "Meridian Developments Ltd.",
    year:     "2024",
    category: "Real Estate",
    template: "Estate Listing Platform",
    image:    "",
    desc:     "A premium multi-listing platform for a boutique London developer specialising in riverside residences. The site replaced a generic template with a bespoke experience that elevated every listing through immersive gallery views, interactive floor plans, and a streamlined enquiry flow. Organic buyer enquiries increased by 340% within 60 days of launch.",
    liveUrl:  "Our Work/work-1.html",
    stats: [
      { num: "340%", label: "Buyer enquiry uplift" },
      { num: "60",   label: "Days to impact" },
      { num: "12",   label: "Listings managed" }
    ]
  },
  {
    id:       "proj-002",
    name:     "Khalidiyah Towers",
    client:   "Al Faris Developments, Dubai",
    year:     "2024",
    category: "Real Estate",
    template: "Property Showcase",
    image:    "",
    desc:     "A cinematic single-page launch site for a 42-storey luxury tower on Sheikh Zayed Road, Dubai. Designed to drive off-plan reservations through a full-screen hero, animated floor reveal sections, and a frictionless buyer registration flow. Over 600 qualified enquiries were captured before ground-breaking, exceeding the sales team's pre-launch target by more than 3x.",
    liveUrl:  "#",
    stats: [
      { num: "600+", label: "Pre-launch enquiries" },
      { num: "3x",   label: "Target exceeded" },
      { num: "72h",  label: "Prototype delivery" }
    ]
  },
  {
    id:       "proj-003",
    name:     "The Pearl Collection",
    client:   "Lusail Luxury Properties, Qatar",
    year:     "2024",
    category: "Investment",
    template: "Investment Deck Site",
    image:    "",
    desc:     "A password-gated digital investment deck for an off-plan residential development on The Pearl, Qatar. The site presents the development thesis, CGI renderings, projected yields, and payment plan structure in a format designed to inspire institutional and private investor confidence. Real-time document analytics allowed the sales team to prioritise follow-up with the most engaged leads.",
    liveUrl:  "#",
    stats: [
      { num: "£94M", label: "Units reserved" },
      { num: "100%", label: "Investor engagement" },
      { num: "48h",  label: "Build turnaround" }
    ]
  },
  {
    id:       "proj-004",
    name:     "Lowe Residences",
    client:   "Lowe Property Group, London",
    year:     "2023",
    category: "Real Estate",
    template: "Property Showcase",
    image:    "",
    desc:     "A high-impact one-page launch site for a flagship riverside development in East London. Designed to generate pre-launch registrations through a cinematic full-screen hero, animated reveal sections, and a frictionless waitlist form. The page generated over 800 registrations in its first two weeks — exceeding the client's target by 4x.",
    liveUrl:  "#",
    stats: [
      { num: "800+", label: "Pre-registrations" },
      { num: "4x",   label: "Target exceeded" },
      { num: "2",    label: "Weeks to result" }
    ]
  },
  {
    id:       "proj-005",
    name:     "Calloway Prime",
    client:   "Calloway Residential, Mayfair",
    year:     "2024",
    category: "Brand",
    template: "Agency Brand Site",
    image:    "",
    desc:     "A flagship agency brand site for a Mayfair-based residential agency specialising in super-prime London properties. The design language mirrors the precision of the properties they represent — controlled white space, refined typography, and a curated listings showcase. The editorial market intelligence section positions the partners as the authoritative voice in prime central London.",
    liveUrl:  "#",
    stats: [
      { num: "5x",  label: "Qualified inbound" },
      { num: "3",   label: "Award nominations" },
      { num: "68h", label: "Prototype delivery" }
    ]
  },
  {
    id:       "proj-006",
    name:     "The Harlow Collection",
    client:   "Harlow Luxury Interiors, London",
    year:     "2023",
    category: "Brand",
    template: "Bespoke / Custom Build",
    image:    "",
    desc:     "A fully bespoke digital showroom for a luxury property staging and interiors brand. Built from scratch with a custom CMS, room configurator, and an immersive 3D material viewer. The experience was designed to mirror the tactility and exclusivity of the physical showroom — directly serving the high-net-worth buyers and developers who commission their work.",
    liveUrl:  "#",
    stats: [
      { num: "190%",   label: "Direct enquiries" },
      { num: "Custom", label: "Architecture" },
      { num: "3D",     label: "Material viewer" }
    ]
  }
];
