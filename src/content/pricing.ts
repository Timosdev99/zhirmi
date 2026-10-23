import type {
  Bundle,
  CarePlan,
  PriceGroup,
  WebsitePackage,
} from "./types";

export const pricingNote =
  "All projects start with a free 20-minute call. 50% deposit to start, 50% on launch. Monthly plans billed in advance, cancel with 30 days' notice. No hidden fees.";

export const bundles: Bundle[] = [
  {
    name: "Launch",
    bestFor: "New businesses",
    includes: [
      "Starter Website",
      "Local SEO setup",
      "Email platform setup",
      "1 month Essential Care",
    ],
    uk: "from £1,750 one-off",
    us: "from $2,300 one-off",
  },
  {
    name: "Grow",
    bestFor: "Businesses ready for leads",
    includes: [
      "Growth Care",
      "SEO Starter",
      "2 email campaigns per month",
      "Monthly report",
    ],
    uk: "£749/mo",
    us: "$975/mo",
    popular: true,
  },
  {
    name: "Scale",
    bestFor: "Busy multi-location businesses",
    includes: [
      "Priority Care",
      "SEO Growth",
      "Ads management",
      "AI chat agent",
      "Monthly strategy call",
    ],
    uk: "from £1,695/mo",
    us: "from $2,200/mo",
  },
];

export const websitePackages: WebsitePackage[] = [
  {
    name: "Landing Page",
    description: "A single conversion-focused page for ads, launches and lead capture.",
    features: [
      "1 page",
      "Conversion-focused copy layout",
      "Form or booking integration",
      "Mobile optimised",
      "Basic SEO and analytics",
    ],
    uk: "from £450",
    us: "from $600",
  },
  {
    name: "Starter Website",
    description: "A clean, credible site for a new or small business.",
    features: [
      "Up to 5 pages",
      "Wix Studio or WordPress",
      "Contact form",
      "Google Business Profile link",
      "Basic SEO",
      "2 revision rounds",
      "14 days post-launch support",
    ],
    uk: "from £1,200",
    us: "from $1,600",
  },
  {
    name: "Business Website",
    description: "A complete site with CMS, SEO and analytics for growing businesses.",
    features: [
      "Up to 12 pages",
      "CMS blog or portfolio",
      "On-page SEO for every page",
      "Email signup connected",
      "GA4 and Search Console",
      "3 revisions",
      "30 days support",
    ],
    uk: "from £2,400",
    us: "from $3,200",
    popular: true,
  },
  {
    name: "CMS / Custom Build",
    description: "Dynamic collections, member areas and custom features.",
    features: [
      "Dynamic collections",
      "Member areas or custom features",
      "Wix Velo, Webflow CMS or custom code",
      "Listings, team, products or deals",
    ],
    uk: "from £3,500",
    us: "from $4,500",
  },
  {
    name: "E-commerce Store",
    description: "A store ready to take payments and fulfil orders.",
    features: [
      "Shopify, Wix Stores or WooCommerce",
      "Up to 50 products loaded",
      "Payments, shipping and tax",
      "Order email automations",
    ],
    uk: "from £2,800",
    us: "from $3,700",
  },
  {
    name: "Redesign / Migration",
    description: "Move or rebuild an existing site without losing search visibility.",
    features: [
      "Move or rebuild an existing site",
      "SEO preserved with 301 redirects",
      "Refreshed design",
      "Content and media migration",
    ],
    uk: "from £1,500",
    us: "from $2,000",
  },
];

export const carePlans: CarePlan[] = [
  {
    name: "Essential Care",
    description: "The basics, handled.",
    features: [
      "Updates and backups",
      "Uptime and security monitoring",
      "Monthly link and form check",
      "1 hour of edits",
      "Short monthly report",
    ],
    uk: "£79",
    us: "$99",
  },
  {
    name: "Growth Care",
    description: "Proactive care with room to improve.",
    features: [
      "Everything in Essential",
      "Weekly checks",
      "3 hours of edits",
      "Speed and SEO health monitoring",
      "Monthly report with recommendations",
    ],
    uk: "£179",
    us: "$229",
    popular: true,
  },
  {
    name: "Priority Care",
    description: "Priority support for busy businesses.",
    features: [
      "Everything in Growth",
      "6 hours of edits",
      "Same-day priority support",
      "Quarterly strategy call",
      "Cookie and GDPR check",
    ],
    uk: "£329",
    us: "$429",
  },
];

export const priceGroups: PriceGroup[] = [
  {
    slug: "seo",
    title: "SEO & AI visibility",
    note: "Minimum 3 months for monthly SEO. Results take time.",
    rows: [
      { service: "SEO audit + action plan (one-off)", uk: "£295", us: "$390" },
      { service: "Local SEO setup (Google Business Profile, citations, schema)", uk: "£350", us: "$450" },
      { service: "SEO Starter (monthly)", uk: "£395/mo", us: "$500/mo" },
      { service: "SEO Growth (monthly)", uk: "£795/mo", us: "$1,000/mo" },
      { service: "AI search visibility (GEO) add-on", uk: "£175/mo", us: "$225/mo" },
    ],
  },
  {
    slug: "ads",
    title: "Paid ads",
    note: "Ad spend is paid by the client directly to Google or Meta.",
    rows: [
      { service: "Account setup + conversion tracking + first campaign", uk: "£450 per platform", us: "$600" },
      { service: "Monthly management (spend up to £3k / $4k)", uk: "£350/mo", us: "$450/mo" },
      { service: "Monthly management (above that)", uk: "12% of ad spend", us: "12% of ad spend" },
    ],
  },
  {
    slug: "email",
    title: "Email marketing",
    rows: [
      { service: "Platform setup or migration", uk: "£395", us: "$500" },
      { service: "Automation flow", uk: "£175 per flow", us: "$225 per flow" },
      { service: "Monthly campaigns — 2 emails/month", uk: "£250/mo", us: "$325/mo" },
      { service: "Monthly campaigns — 4 emails/month", uk: "£425/mo", us: "$550/mo" },
    ],
  },
  {
    slug: "ai",
    title: "AI, automation & integrations",
    rows: [
      { service: "Website AI chat agent — setup", uk: "£495", us: "$650" },
      { service: "Website AI chat agent — management", uk: "£75/mo", us: "$99/mo" },
      { service: "AI voice receptionist — setup", uk: "£895", us: "$1,200" },
      { service: "AI voice receptionist — management", uk: "from £195/mo", us: "from $250/mo" },
      { service: "WhatsApp / omnichannel inbox setup", uk: "£450", us: "$600" },
      { service: "CRM setup", uk: "from £650", us: "from $850" },
      { service: "Workflow automation", uk: "from £195 per workflow", us: "from $250 per workflow" },
      { service: "Custom API integration", uk: "from £1,200", us: "from $1,600" },
    ],
  },
  {
    slug: "operations",
    title: "Business operations & support",
    rows: [
      { service: "Fractional tech/ops manager — 20 hrs/month", uk: "£650/mo", us: "$850/mo" },
      { service: "Fractional tech/ops manager — 40 hrs/month", uk: "£1,200/mo", us: "$1,550/mo" },
      { service: "Outsourced customer service", uk: "from £450/mo", us: "from $600/mo" },
      { service: "Amazon Seller Central management", uk: "from £450/mo", us: "from $600/mo" },
      { service: "Amazon listing optimisation", uk: "£85 per listing", us: "$110" },
      { service: "Brand Registry + A+ Content + Storefront", uk: "from £495", us: "from $650" },
      { service: "Ad-hoc tech help", uk: "£40/hr", us: "$55/hr" },
    ],
  },
  {
    slug: "content",
    title: "Content, video & audio",
    rows: [
      { service: "Short-form video edit", uk: "£35 each", us: "$45" },
      { service: "Reels pack — 8 videos/month", uk: "£240/mo", us: "$310/mo" },
      { service: "Long-form / YouTube edit", uk: "from £120", us: "from $160" },
      { service: "Podcast episode edit", uk: "from £60", us: "from $80" },
      { service: "Meditation / ambient audio track", uk: "from £95", us: "from $125" },
      { service: "Social media management", uk: "from £395/mo", us: "from $500/mo" },
    ],
  },
  {
    slug: "engineering",
    title: "Engineering, AI & fintech (TMOT)",
    note: "Indicative 'from' prices. Third-party costs such as cloud, APIs and AI usage are excluded.",
    rows: [
      { service: "Custom web app / dashboard", uk: "from £3,500", us: "from $4,500" },
      { service: "Backend & API development", uk: "from £1,200", us: "from $1,600" },
      { service: "Data migration & cleanup", uk: "from £600", us: "from $800" },
      { service: "Custom AI agent — setup", uk: "from £895", us: "from $1,200" },
      { service: "Error monitoring & auto-fix agent", uk: "from £495", us: "from $650" },
      { service: "Entity resolution & dedupe", uk: "from £650", us: "from $850" },
      { service: "Payment flows, wallets & reconciliation", uk: "from £1,500", us: "from $2,000" },
      { service: "Performance & reliability audit", uk: "£295", us: "$390" },
      { service: "Code review & technical due diligence", uk: "from £295", us: "from $390" },
      { service: "Linux / server / deployment setup", uk: "from £450", us: "from $600" },
    ],
  },
];

export const paymentTerms = [
  "Projects under £1,000: 50% deposit, 50% before launch.",
  "Projects over £1,000: 40% deposit, 30% at design approval, 30% before launch.",
  "Retainers: monthly in advance.",
  "Currencies: GBP for UK, Europe and Australia; USD for the US; NGN on request for Nigeria.",
  "Payment methods: bank transfer, Wise, Stripe or PayPal.",
];
