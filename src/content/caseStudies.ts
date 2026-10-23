import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "wolfs-bakery",
    client: "Wolf's Bakery",
    industry: "Bakery and hospitality",
    summary:
      "A Wix Studio website with a Coffee Club membership system, including QR lookup, rewards and an admin dashboard.",
    problem:
      "The bakery needed a site that reflected the brand and a Coffee Club membership system the team could run day to day, rather than a separate loyalty tool bolted onto the website.",
    approach: [
      "Designed and built the site in Wix Studio around the bakery's menu, story and visit information.",
      "Built a Coffee Club membership flow with sign-up, QR lookup and rewards.",
      "Added an admin dashboard so the team could look up members and manage the club without developer help.",
    ],
    scope: [
      "Wix Studio site build",
      "Coffee Club membership system",
      "QR lookup and rewards",
      "Admin dashboard",
    ],
    tools: ["Wix Studio", "Wix Velo"],
    outcome: [
      "A Wix Studio site and membership system in one place.",
      "Staff can look up a member by QR code and manage rewards from the dashboard.",
    ],
    serviceSlugs: ["websites", "operations"],
  },
  {
    slug: "olender-feldman",
    client: "Olender Feldman",
    industry: "Professional services",
    summary:
      "A Wix site build with a CMS-driven Deals & Transactions page, cookie-compliance testing and an email platform migration.",
    problem:
      "The firm needed a Wix site with a CMS-driven Deals & Transactions page, plus confidence that cookie behaviour was compliant and that email could move off Mailchimp.",
    approach: [
      "Built the Wix site and set up a CMS collection for Deals & Transactions.",
      "Ran cookie-compliance testing across the site.",
      "Migrated the email platform from Mailchimp to MailerLite.",
    ],
    scope: [
      "Wix site build",
      "CMS Deals & Transactions page",
      "Cookie-compliance testing",
      "Mailchimp to MailerLite migration",
    ],
    tools: ["Wix", "MailerLite"],
    outcome: [
      "The team can update deals and transactions through the CMS.",
      "Cookie behaviour was tested before launch.",
      "The email list and templates moved to MailerLite.",
    ],
    serviceSlugs: ["websites", "marketing"],
  },
  {
    slug: "modular-pathways",
    client: "Modular Pathways & Portable Buildings WA",
    industry: "Construction and portable buildings",
    summary:
      "WordPress forms connected to GoHighLevel so enquiries land in the CRM and trigger automated follow-up.",
    problem:
      "Enquiries from the WordPress site were not flowing into the CRM, so follow-up depended on manual copying and memory.",
    approach: [
      "Connected the WordPress forms to GoHighLevel.",
      "Set up the CRM pipeline and contact fields.",
      "Built automated follow-up so new enquiries trigger the next step.",
    ],
    scope: [
      "WordPress form integration",
      "GoHighLevel CRM setup",
      "Automated follow-up",
    ],
    tools: ["WordPress", "GoHighLevel"],
    outcome: [
      "New enquiries create a CRM contact and start the follow-up automatically.",
      "The team can see and manage leads in one pipeline.",
    ],
    serviceSlugs: ["ai-automation", "websites"],
  },
  {
    slug: "west-coast-granny-flats",
    client: "West Coast Granny Flats",
    industry: "Home design and construction",
    summary:
      "Wix landing pages and model pages for a home-design business, built to present options clearly and capture enquiries.",
    problem:
      "The business needed to present its home models clearly and give visitors a straightforward way to enquire.",
    approach: [
      "Built Wix landing pages for the main offers.",
      "Created model pages that compare the options.",
      "Added a consistent enquiry path across the pages.",
    ],
    scope: ["Wix landing pages", "Model pages", "Enquiry capture"],
    tools: ["Wix"],
    outcome: [
      "A clear set of model and landing pages.",
      "Visitors can move from browsing options to enquiring in a few steps.",
    ],
    serviceSlugs: ["websites", "marketing"],
  },
  {
    slug: "dawg-team",
    client: "DAWG Team",
    summary:
      "Ongoing website maintenance and reporting under a care plan, keeping the site updated and monitored.",
    problem:
      "The site needed ongoing updates, monitoring and reporting without an internal web team.",
    approach: [
      "Set up a care plan for updates and backups.",
      "Monitored uptime, links and forms.",
      "Produced a short monthly report.",
    ],
    scope: ["Website maintenance", "Monitoring", "Monthly reporting"],
    tools: ["WordPress", "Analytics"],
    outcome: [
      "The site stays updated and monitored.",
      "The team gets a monthly report instead of chasing issues.",
    ],
    serviceSlugs: ["operations", "websites"],
  },
  {
    slug: "chaga-yaga",
    client: "Chaga Yaga",
    industry: "E-commerce",
    summary:
      "Amazon Seller Central management covering FBA, Brand Registry and storefront setup.",
    problem:
      "The brand needed its Amazon Seller Central account managed across FBA, Brand Registry and storefront setup.",
    approach: [
      "Managed FBA shipments and listings.",
      "Completed Brand Registry setup.",
      "Built A+ content and the storefront.",
    ],
    scope: ["Amazon Seller Central", "FBA", "Brand Registry", "Storefront"],
    tools: ["Amazon Seller Central"],
    outcome: [
      "Amazon operations handled under one service.",
      "Listings, brand assets and storefront in place.",
    ],
    serviceSlugs: ["operations"],
  },
  {
    slug: "women-in-ai-governance",
    client: "Women in AI Governance",
    industry: "Professional network",
    summary:
      "Wix member data and segmentation setup to help the team communicate with the right audiences.",
    problem:
      "The team needed to communicate with different member groups, but its Wix member data was not structured for segmentation.",
    approach: [
      "Reviewed and structured the Wix member data.",
      "Created segments for different audiences.",
      "Set up the email list structure to match.",
    ],
    scope: ["Wix member data", "Segmentation", "Email list structure"],
    tools: ["Wix", "Email platform"],
    outcome: [
      "A structured member list with usable segments.",
      "Email communication can be targeted to the right group.",
    ],
    serviceSlugs: ["marketing", "operations"],
  },
];
