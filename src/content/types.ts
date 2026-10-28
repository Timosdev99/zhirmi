export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  name: string;
  detail?: string;
  deliveredBy?: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  services: Service[];
};

export type ServiceChapter = {
  slug: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  categorySlugs: string[];
};

export type ServiceStartPoint = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type ServiceOutcome = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  headline: string;
  intro: string[];
  goodFor: string[];
  outcomes: ServiceOutcome[];
  startingPrice: {
    uk: string;
    us: string;
    note: string;
  };
  pricingGroupSlug: string;
  caseStudySlugs: string[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
};

export type PriceRow = {
  service: string;
  uk: string;
  us: string;
};

export type PriceGroup = {
  slug: string;
  title: string;
  note?: string;
  rows: PriceRow[];
};

export type WebsitePackage = {
  name: string;
  description: string;
  features: string[];
  uk: string;
  us: string;
  popular?: boolean;
};

export type CarePlan = {
  name: string;
  description: string;
  features: string[];
  uk: string;
  us: string;
  popular?: boolean;
};

export type Bundle = {
  name: string;
  bestFor: string;
  includes: string[];
  uk: string;
  us: string;
  popular?: boolean;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  mobileImageUrl?: string;
  mobileImageWidth?: number;
  mobileImageHeight?: number;
  summary: string;
  problem: string;
  approach: string[];
  scope: string[];
  tools?: string[];
  outcome: string[];
  serviceSlugs: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  company?: string;
  role?: string;
  imageUrl?: string;
  country?: string;
  rating?: number;
};
