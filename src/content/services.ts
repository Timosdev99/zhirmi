import type {
  ServiceCategory,
  ServiceChapter,
  ServiceFAQ,
  ServiceStartPoint,
} from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "websites",
    title: "Websites & Development",
    description:
      "Conversion-focused websites, CMS builds and e-commerce stores on the platform that fits your business, not ours.",
    services: [
      {
        name: "Landing pages",
        detail: "Ads, launches and lead capture on Wix Studio, WordPress or Webflow.",
        deliveredBy: "Samuel / team",
      },
      {
        name: "Business websites",
        detail: "5–15 page sites with CMS, forms, booking and analytics.",
        deliveredBy: "Samuel",
      },
      {
        name: "CMS & dynamic builds",
        detail: "Listings, portfolios, blogs, directories and member areas.",
        deliveredBy: "Samuel / partner / TMOT",
      },
      {
        name: "E-commerce stores",
        detail: "Shopify, Wix Stores and WooCommerce, including product setup and payments.",
        deliveredBy: "Partner / Samuel",
      },
      {
        name: "Redesign & migration",
        detail: "Move or rebuild an existing site while protecting SEO with redirects.",
        deliveredBy: "Samuel / team / TMOT",
      },
      {
        name: "Custom-coded sites & web apps",
        detail: "Next.js and React builds for requirements off-the-shelf platforms cannot meet.",
        deliveredBy: "TMOT / partner",
      },
      {
        name: "Membership & loyalty systems",
        detail: "QR lookup, rewards and admin dashboards.",
        deliveredBy: "Samuel / TMOT",
      },
      {
        name: "Website care & maintenance",
        detail: "Updates, backups, link and form checks, and monthly reporting.",
        deliveredBy: "Samuel",
      },
      {
        name: "Cookie consent & GDPR checks",
        detail: "Consent testing and compliance reviews across platforms.",
        deliveredBy: "Samuel",
      },
    ],
  },
  {
    slug: "marketing",
    title: "Marketing & SEO",
    description:
      "Get found on Google and in AI answers, then turn that attention into enquiries with email and paid campaigns.",
    services: [
      {
        name: "SEO audits & technical SEO",
        detail: "Search Console, Screaming Frog, Ahrefs and Semrush.",
        deliveredBy: "Samuel",
      },
      {
        name: "Local SEO & Google Business Profile",
        detail: "Profile optimisation, citations and schema.",
        deliveredBy: "Samuel",
      },
      {
        name: "Monthly SEO & content",
        detail: "Blogs, on-page improvements and link building.",
        deliveredBy: "Samuel / writer",
      },
      {
        name: "AI search visibility (GEO)",
        detail: "Getting found in ChatGPT, Gemini and Google AI answers.",
        deliveredBy: "Samuel",
      },
      {
        name: "Google Ads setup & management",
        detail: "Search, Performance Max and GA4 conversion tracking.",
        deliveredBy: "Samuel",
      },
      {
        name: "Meta ads",
        detail: "Facebook and Instagram campaigns managed end to end.",
        deliveredBy: "Samuel / partner",
      },
      {
        name: "Email marketing",
        detail: "Setup, migration, campaigns and automations on Mailchimp, Brevo, ActiveCampaign, MailerLite and Systeme.io.",
        deliveredBy: "Samuel",
      },
      {
        name: "Analytics & reporting",
        detail: "GA4, Looker Studio and Jetpack dashboards.",
        deliveredBy: "Samuel",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI, Automation & Integrations",
    description:
      "Chat agents, AI receptionists and automations that answer customers, capture leads and keep your CRM up to date.",
    services: [
      {
        name: "Website AI chat agents",
        detail: "Answer FAQs, capture leads and book appointments.",
        deliveredBy: "Samuel / TMOT",
      },
      {
        name: "AI voice receptionist",
        detail: "24/7 call answering, booking, qualification and transfers on UK or US numbers.",
        deliveredBy: "Samuel / TMOT / partner",
      },
      {
        name: "WhatsApp & omnichannel inbox",
        detail: "Superchat and WhatsApp Business API setup.",
        deliveredBy: "Samuel",
      },
      {
        name: "CRM setup & lead pipelines",
        detail: "GoHighLevel, HubSpot and Systeme.io.",
        deliveredBy: "Samuel",
      },
      {
        name: "Workflow automation",
        detail: "Forms to CRM to email or SMS, with team alerts.",
        deliveredBy: "Samuel / TMOT",
      },
      {
        name: "Custom API integrations",
        detail: "Connect shops, booking systems and supplier tools.",
        deliveredBy: "Samuel / TMOT",
      },
      {
        name: "Booking & clinic systems",
        detail: "SimplyBook, Calendly and clinic management tools.",
        deliveredBy: "Samuel",
      },
    ],
  },
  {
    slug: "operations",
    title: "Business Operations & Support",
    description:
      "Day-to-day technical and operational support so the systems behind your business keep running.",
    services: [
      {
        name: "Fractional tech & ops manager",
        detail: "Booking systems, records, pricing updates, reports and tool admin.",
        deliveredBy: "Samuel",
      },
      {
        name: "Outsourced customer service",
        detail: "Email, website chat and contact forms handled in your brand voice.",
        deliveredBy: "Samuel / support partner",
      },
      {
        name: "Amazon Seller Central management",
        detail: "FBA shipments, listings, Brand Registry, A+ content and storefronts.",
        deliveredBy: "Samuel",
      },
      {
        name: "Business process review",
        detail: "A practical plan for what to automate first.",
        deliveredBy: "Samuel",
      },
    ],
  },
  {
    slug: "content",
    title: "Content, Video & Audio",
    description:
      "Consistent content that keeps your brand visible, from short-form video to podcasts and custom audio.",
    services: [
      {
        name: "Short-form video editing",
        detail: "Reels, TikToks and Shorts with captions and music.",
        deliveredBy: "Samuel / editor",
      },
      {
        name: "Long-form & YouTube editing",
        detail: "Up to 15 minute edits in CapCut, Premiere or DaVinci.",
        deliveredBy: "Editor",
      },
      {
        name: "Meditation & ambient audio",
        detail: "Custom relaxation and ambient tracks.",
        deliveredBy: "Samuel / audio partner",
      },
      {
        name: "Podcast editing",
        detail: "Clean-up and editing in Audacity or Descript.",
        deliveredBy: "Team",
      },
      {
        name: "Graphic design",
        detail: "Social posts, ad creatives and brand kits.",
        deliveredBy: "Team",
      },
      {
        name: "Copywriting",
        detail: "Web pages, emails and ads written for conversion.",
        deliveredBy: "Samuel / writer",
      },
    ],
  },
  {
    slug: "engineering",
    title: "Engineering, AI & Fintech",
    description:
      "Custom engineering delivered with our technical partner, TMOT, for projects that need more than a website platform.",
    services: [
      {
        name: "Custom web apps & dashboards",
        detail: "Internal tools, booking systems and admin panels.",
        deliveredBy: "TMOT",
      },
      {
        name: "Backend & API development",
        detail: "REST APIs and payment gateways including Paystack, Flutterwave and Stripe.",
        deliveredBy: "TMOT",
      },
      {
        name: "Data migration & cleanup",
        detail: "Move and normalise data between systems.",
        deliveredBy: "TMOT",
      },
      {
        name: "Custom AI agents",
        detail: "Support, lead qualification and internal operations agents that take action.",
        deliveredBy: "TMOT",
      },
      {
        name: "Error monitoring & auto-fix agents",
        detail: "Logging, alerts and automated remediation for client sites.",
        deliveredBy: "TMOT",
      },
      {
        name: "Entity resolution & dedupe",
        detail: "Merge duplicate customers and records across CRMs and spreadsheets.",
        deliveredBy: "TMOT",
      },
      {
        name: "Performance & reliability audits",
        detail: "Speed, uptime and logging reviews.",
        deliveredBy: "TMOT",
      },
      {
        name: "Code review & technical due diligence",
        detail: "Independent review for founders hiring developers.",
        deliveredBy: "TMOT",
      },
    ],
  },
];

export const serviceChapters: ServiceChapter[] = [
  {
    slug: "build",
    number: "01",
    title: "Build",
    headline: "The product takes shape.",
    description:
      "Websites, platforms and custom engineering, built around how the business actually works.",
    categorySlugs: ["websites", "engineering"],
  },
  {
    slug: "growth",
    number: "02",
    title: "Growth",
    headline: "Attention turns into enquiries.",
    description:
      "Search, content and campaigns that make the business easier to find and easier to choose.",
    categorySlugs: ["marketing", "content"],
  },
  {
    slug: "systems",
    number: "03",
    title: "Systems",
    headline: "The work keeps moving.",
    description:
      "AI, automation and operational support that remove manual handoffs and keep the tools connected.",
    categorySlugs: ["ai-automation", "operations"],
  },
];

export const serviceStartPoints: ServiceStartPoint[] = [
  {
    title: "A new website or platform",
    description:
      "You know what the business needs. The site or product still has to be shaped, built and launched.",
    href: "/services/websites",
    label: "Explore websites",
  },
  {
    title: "More qualified enquiries",
    description:
      "The site works, but search, content or campaigns are not pulling their weight.",
    href: "/services/marketing",
    label: "Explore marketing",
  },
  {
    title: "Fewer manual handoffs",
    description:
      "Leads, calls and admin are spread across tools that do not talk to each other.",
    href: "/services/ai-automation",
    label: "Explore automation",
  },
];

export const serviceHubFaqs: ServiceFAQ[] = [
  {
    question: "What does Zhirmitech actually do?",
    answer:
      "We build and run the technology and growth work behind a business: websites, custom engineering, SEO, content, ads, AI agents, automation and day-to-day operational support.",
  },
  {
    question: "Can you work with our existing website or team?",
    answer:
      "Yes. Many projects start with something that already exists. We review what is there, agree where we take responsibility and work from that boundary.",
  },
  {
    question: "Do you handle both strategy and implementation?",
    answer:
      "Yes. Scoping, design, build, integrations and ongoing support sit with the same team, so decisions made in planning survive delivery.",
  },
  {
    question: "How do projects start?",
    answer:
      "Tell us what needs to change. If it is a fit, we have a free working call, then agree whether to scope the work directly or start with a smaller review.",
  },
  {
    question: "Can you add AI or automation without rebuilding everything?",
    answer:
      "Usually. We map the workflow and the systems involved first, then connect agents or automations to what you already run. We recommend a rebuild only when the existing system is the problem.",
  },
];
