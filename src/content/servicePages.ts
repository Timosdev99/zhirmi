import type { ServicePageContent } from "./types";

export const servicePageContent: Record<string, ServicePageContent> = {
  websites: {
    headline: "Websites built to bring in enquiries, not just look good.",
    intro: [
      "We design and build fast, mobile-first websites on Wix Studio, WordPress, Webflow or Shopify. Every page is planned around what your customers need to see before they contact you or buy.",
      "Whether you need a single landing page, a full business site or a custom build with membership features, you get one project lead, a fixed quote and a site you can update yourself.",
    ],
    goodFor: [
      "New businesses that need a credible first site",
      "Existing sites that look dated or are hard to update",
      "Lead-generation sites for ads and launches",
      "Stores, memberships and content-heavy builds",
    ],
    outcomes: [
      {
        title: "A clear page structure",
        description:
          "We map the pages and sections around the questions customers actually ask before enquiring.",
      },
      {
        title: "Mobile-first build",
        description:
          "Most visitors arrive on a phone. Layouts, forms and calls to action are designed for small screens first.",
      },
      {
        title: "A CMS you can use",
        description:
          "Edit text, images, posts or products without touching code or waiting on a developer.",
      },
      {
        title: "SEO foundations",
        description:
          "Clean headings, metadata, redirects and analytics set up from day one, not bolted on later.",
      },
      {
        title: "A tested handover",
        description:
          "Forms, links and tracking checked before launch, with a short walkthrough and handover notes.",
      },
      {
        title: "Support after launch",
        description:
          "Manage the site yourself, or choose a care plan for updates, backups, monitoring and small changes.",
      },
    ],
    startingPrice: {
      uk: "from £450",
      us: "from $600",
      note: "One-off projects. Domains, hosting and third-party subscriptions are billed separately.",
    },
    pricingGroupSlug: "websites",
    caseStudySlugs: ["wolfs-bakery", "olender-feldman", "west-coast-granny-flats"],
    faqs: [
      {
        question: "Which platform will you use?",
        answer:
          "Wix Studio, WordPress, Webflow, Shopify or custom code, depending on what you need. We recommend the simplest platform that fits your budget and how you want to manage the site.",
      },
      {
        question: "How long does a website take?",
        answer:
          "It depends on the number of pages, the content and how quickly feedback comes back. We confirm the timeline in your quote before work starts.",
      },
      {
        question: "Can you move my existing site?",
        answer:
          "Yes. We rebuild or migrate the site and set up redirects so existing search visibility is protected.",
      },
      {
        question: "Do you write the content?",
        answer:
          "We can structure the pages and write copy for an additional fee, or work with the content you provide.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You can manage the site yourself, or choose a monthly care plan for updates, backups, monitoring and small changes.",
      },
    ],
    metaTitle: "Website Design & Development",
    metaDescription:
      "Conversion-focused websites on Wix Studio, WordPress, Webflow and Shopify. Landing pages, business sites, CMS builds, stores and migrations.",
  },
  marketing: {
    headline: "Get found on Google, then turn attention into enquiries.",
    intro: [
      "We handle the practical marketing that compounds: technical SEO, local search, content, Google and Meta ads, and email campaigns that stay in touch with leads.",
      "You get a clear plan and monthly reporting, not a list of vanity metrics. Every change is tied to a question: did it bring more qualified enquiries?",
    ],
    goodFor: [
      "Businesses with a website but no steady enquiries",
      "Local services competing in Google Maps",
      "Companies spending on ads without tracking",
      "Teams with a list but no email follow-up",
    ],
    outcomes: [
      {
        title: "A search baseline",
        description:
          "We check how you currently appear on Google, fix technical issues and identify the pages worth improving first.",
      },
      {
        title: "Local visibility",
        description:
          "Google Business Profile, citations and schema set up so nearby customers can find and trust you.",
      },
      {
        title: "Content that answers questions",
        description:
          "Pages and posts planned around what buyers search for, not what we feel like writing.",
      },
      {
        title: "Ads with proper tracking",
        description:
          "Campaigns connected to GA4 and conversion tracking so spend can be judged on enquiries, not clicks.",
      },
      {
        title: "Email follow-up",
        description:
          "Welcome, nurture and re-engagement flows so leads hear from you more than once.",
      },
      {
        title: "Plain-English reporting",
        description:
          "What we checked, what we changed, what happened and what we recommend next.",
      },
    ],
    startingPrice: {
      uk: "from £295 one-off",
      us: "from $390 one-off",
      note: "Monthly SEO starts at £395 / $500. Ad spend is paid directly to Google or Meta.",
    },
    pricingGroupSlug: "seo",
    caseStudySlugs: ["olender-feldman", "modular-pathways"],
    faqs: [
      {
        question: "How long until SEO works?",
        answer:
          "SEO is a medium-term investment. We ask for a minimum of three months for monthly work, and we report on leading indicators such as impressions, rankings and enquiries rather than promising a position.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No. Anyone who guarantees a specific ranking is guessing. We focus on technical health, useful content and measurable improvements.",
      },
      {
        question: "Is ad spend included?",
        answer:
          "No. You pay Google or Meta directly for ad spend. Our fee covers setup, tracking and management.",
      },
      {
        question: "Can you work with our existing website?",
        answer:
          "Yes. We can improve the current site, or recommend a rebuild if the platform is holding it back.",
      },
      {
        question: "What do you need from us?",
        answer:
          "Access to your website, Google Business Profile, Search Console and analytics, plus a short call to understand your customers and offers.",
      },
    ],
    metaTitle: "SEO, Ads & Email Marketing",
    metaDescription:
      "Technical SEO, local search, content, Google and Meta ads, and email marketing with clear monthly reporting.",
  },
  "ai-automation": {
    headline: "AI agents and automations that answer, qualify and follow up.",
    intro: [
      "We set up chat agents, AI receptionists and workflow automations that handle the repetitive parts of customer contact, then pass the useful details to your team or CRM.",
      "The goal is not AI for its own sake. It is fewer missed enquiries, faster replies and less copy-pasting between tools.",
    ],
    goodFor: [
      "Clinics and service businesses that miss calls",
      "Teams answering the same questions repeatedly",
      "Businesses with leads spread across forms, email and WhatsApp",
      "Companies connecting booking, CRM and accounting tools",
    ],
    outcomes: [
      {
        title: "Answers when you are closed",
        description:
          "Chat and voice agents handle common questions and capture details outside business hours.",
      },
      {
        title: "Qualified leads, not raw messages",
        description:
          "Agents ask the questions you need answered before a call is booked.",
      },
      {
        title: "Your CRM stays current",
        description:
          "Forms, calls and chats can create or update contacts and trigger follow-up.",
      },
      {
        title: "Fewer manual handoffs",
        description:
          "Automations move data between your website, CRM, email, SMS and internal tools.",
      },
      {
        title: "Human handover",
        description:
          "Agents transfer to a person when the request needs judgement or authority.",
      },
      {
        title: "Monitoring and updates",
        description:
          "We review transcripts and workflows, then refine the scripts and automations after launch.",
      },
    ],
    startingPrice: {
      uk: "from £495 setup",
      us: "from $650 setup",
      note: "Management from £75 / $99 per month. Platform, call-minute and API costs are billed separately.",
    },
    pricingGroupSlug: "ai",
    caseStudySlugs: ["modular-pathways", "wolfs-bakery"],
    faqs: [
      {
        question: "Will the AI make things up?",
        answer:
          "We limit agents to approved information and set clear handover rules. We test common questions before launch and review transcripts afterwards.",
      },
      {
        question: "Can it book appointments?",
        answer:
          "Yes, when your booking tool has an API or supported integration. We confirm what is possible during scoping.",
      },
      {
        question: "Do we need to replace our CRM?",
        answer:
          "No. We work with GoHighLevel, HubSpot, Systeme.io and other tools, or connect existing systems through APIs and automation platforms.",
      },
      {
        question: "What happens to caller data?",
        answer:
          "We agree what is stored, where it goes and how long it is kept. Client logins are shared securely, never over chat.",
      },
      {
        question: "How long does setup take?",
        answer:
          "A chat agent is usually faster than a voice agent. Timelines depend on integrations, call flows and how much content needs to be prepared.",
      },
    ],
    metaTitle: "AI Agents, Automation & Integrations",
    metaDescription:
      "Website AI chat agents, AI voice receptionists, WhatsApp inboxes, CRM setup and workflow automation for growing businesses.",
  },
  operations: {
    headline: "The day-to-day tech admin, handled.",
    intro: [
      "Not every business needs another big project. Sometimes the bottleneck is the weekly admin: booking systems, product listings, customer emails, reports and keeping tools in order.",
      "We step in as a fractional tech and operations partner, either for a set number of hours each month or as an ongoing managed service.",
    ],
    goodFor: [
      "Owners spending too long on admin",
      "Clinics and service businesses with booking systems",
      "Amazon sellers managing listings and Brand Registry",
      "Teams without an in-house operations person",
    ],
    outcomes: [
      {
        title: "A reliable weekly rhythm",
        description:
          "Bookings, records, pricing updates and reports handled on a schedule you can plan around.",
      },
      {
        title: "Customer messages answered",
        description:
          "Email, website chat and contact forms handled in your brand voice during agreed hours.",
      },
      {
        title: "Product listings kept current",
        description:
          "Amazon listings, FBA shipments, Brand Registry, A+ content and storefront updates.",
      },
      {
        title: "Tools that talk to each other",
        description:
          "We fix broken connections between booking, payment, CRM and reporting tools.",
      },
      {
        title: "Clear documentation",
        description:
          "Processes written down so the work does not depend on one person's memory.",
      },
      {
        title: "A plan for what to automate",
        description:
          "A practical review of repetitive tasks and the order to tackle them.",
      },
    ],
    startingPrice: {
      uk: "from £450 per month",
      us: "from $600 per month",
      note: "Fractional support from £650 / $850 for 20 hours per month. Ad-hoc help is £40 / $55 per hour.",
    },
    pricingGroupSlug: "operations",
    caseStudySlugs: ["dawg-team", "chaga-yaga", "women-in-ai-governance"],
    faqs: [
      {
        question: "Can we start with a small block of hours?",
        answer:
          "Yes. Ad-hoc help is available hourly, and monthly fractional support starts at 20 hours.",
      },
      {
        question: "Do you work inside our existing tools?",
        answer:
          "Yes. We use your current booking, CRM, e-commerce and reporting systems wherever possible.",
      },
      {
        question: "Who owns the accounts?",
        answer:
          "You do. We work with your accounts and share access through a password manager.",
      },
      {
        question: "Can you handle customer service in our tone?",
        answer:
          "Yes. We agree templates and escalation rules, and review replies during the first weeks.",
      },
      {
        question: "Is there a minimum term?",
        answer:
          "Monthly support is billed in advance and can be cancelled with 30 days' notice.",
      },
    ],
    metaTitle: "Business Operations & Support",
    metaDescription:
      "Fractional tech and ops support, outsourced customer service, Amazon Seller Central management and process reviews.",
  },
  content: {
    headline: "Content that keeps your brand visible.",
    intro: [
      "We edit short-form video, long-form YouTube videos, podcasts and custom audio, and design the graphics that go with them.",
      "You send the raw material; we handle pacing, captions, clean-up and delivery in the formats each platform needs.",
    ],
    goodFor: [
      "Businesses posting inconsistently",
      "Coaches and founders building an audience",
      "Podcasters who need a reliable edit",
      "Teams that need social graphics without hiring a designer",
    ],
    outcomes: [
      {
        title: "Platform-ready edits",
        description:
          "Reels, TikToks and Shorts cut to length with captions, music and a clear hook.",
      },
      {
        title: "A repeatable publishing rhythm",
        description:
          "Monthly packs so you are not starting from scratch every week.",
      },
      {
        title: "Long-form that holds attention",
        description:
          "YouTube edits with pacing, b-roll and clean audio.",
      },
      {
        title: "Podcast episodes ready to publish",
        description:
          "Noise reduction, filler removal and consistent levels.",
      },
      {
        title: "Brand-consistent graphics",
        description:
          "Social posts, ad creatives and simple brand kits that match your site.",
      },
      {
        title: "Copy that fits the format",
        description:
          "Captions, hooks and page copy written for the platform, not copied from a brochure.",
      },
    ],
    startingPrice: {
      uk: "from £35 per edit",
      us: "from $45 per edit",
      note: "Reels packs start at £240 / $310 per month. Social management starts at £395 / $500 per month.",
    },
    pricingGroupSlug: "content",
    caseStudySlugs: [],
    faqs: [
      {
        question: "What do you need from us?",
        answer:
          "Raw footage, audio or a brief, plus brand assets such as fonts, colours and logo. We can work from a shared folder.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Revisions are agreed in the scope before work starts. Larger projects are scoped individually.",
      },
      {
        question: "Do you provide the music and stock footage?",
        answer:
          "We use licensed music and stock where needed. Any extra licence costs are agreed before purchase.",
      },
      {
        question: "Can you post for us?",
        answer:
          "Yes. Social media management is available as a monthly add-on.",
      },
      {
        question: "How fast is turnaround?",
        answer:
          "Turnaround depends on the volume and how quickly files and feedback are ready. Short-form edits are scheduled in advance; larger edits are booked into a production slot.",
      },
    ],
    metaTitle: "Content, Video & Audio Editing",
    metaDescription:
      "Short-form video editing, YouTube and podcast edits, custom audio, graphic design and copywriting for growing brands.",
  },
  engineering: {
    headline: "Custom engineering when off-the-shelf tools are not enough.",
    intro: [
      "For projects that need custom logic, integrations or performance work, we deliver through our engineering partner, TMOT.",
      "That covers web apps, dashboards, APIs, payment flows, data migration, AI agents and technical due diligence, with Zhirmitech as your single point of contact.",
    ],
    goodFor: [
      "Businesses outgrowing spreadsheets and manual processes",
      "Founders who need a technical second opinion",
      "Companies connecting payments, data and internal tools",
      "Teams that need a custom portal or dashboard",
    ],
    outcomes: [
      {
        title: "A scoped build, not a vague retainer",
        description:
          "We define the workflows, data and integrations before development starts.",
      },
      {
        title: "Custom apps and dashboards",
        description:
          "Internal tools, booking systems, admin panels and customer portals built around how you work.",
      },
      {
        title: "APIs and payments",
        description:
          "REST APIs and integrations with Paystack, Flutterwave, Stripe and existing systems.",
      },
      {
        title: "Clean data migrations",
        description:
          "Records moved and normalised with a plan for duplicates and missing fields.",
      },
      {
        title: "AI agents that take action",
        description:
          "Support, lead qualification and internal operations agents connected to your tools.",
      },
      {
        title: "Independent technical review",
        description:
          "Code reviews, performance audits and due diligence for founders hiring developers.",
      },
    ],
    startingPrice: {
      uk: "from £295 for an audit",
      us: "from $390 for an audit",
      note: "Custom builds start at £3,500 / $4,500. Cloud, API, gateway and AI usage costs are excluded.",
    },
    pricingGroupSlug: "engineering",
    caseStudySlugs: ["wolfs-bakery", "modular-pathways"],
    faqs: [
      {
        question: "Who does the engineering work?",
        answer:
          "TMOT, Zhirmitech's engineering partner, delivers the build. Zhirmitech manages the project, scope and communication.",
      },
      {
        question: "Can you work with our existing codebase?",
        answer:
          "Yes. We review the current stack first and recommend whether to extend it or rebuild the failing parts.",
      },
      {
        question: "How are custom projects priced?",
        answer:
          "After a scoping call we provide a written scope and fixed quote. Prices shown are starting points, not estimates for every project.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Yes. We can sign an NDA before reviewing code, data or commercial details.",
      },
      {
        question: "What about ongoing maintenance?",
        answer:
          "We can include a support agreement or hand over documentation and monitoring to your team.",
      },
    ],
    metaTitle: "Custom Engineering & Fintech",
    metaDescription:
      "Custom web apps, dashboards, APIs, payments, data migration and AI agents delivered with engineering partner TMOT.",
  },
};
