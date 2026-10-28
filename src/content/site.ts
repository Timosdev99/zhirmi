import type { NavLink } from "./types";

export const site = {
  name: "ZhirmiTech",
  tagline: "Your business's tech and growth partner.",
  description:
    "Websites, SEO, email marketing, AI agents and automation for UK and US businesses. One point of contact, a team of specialists.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zhirmitech.com",
  email: "samuel@zhirmitech.com",
  phone: "+234 704 363 5009",
  phoneHref: "tel:+2347043635009",
  location: "Lagos, Nigeria",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ?? "/contact#contact-form",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  serviceLinks: [
    { label: "Websites & Development", href: "/services/websites" },
    { label: "Marketing & SEO", href: "/services/marketing" },
    { label: "AI & Automation", href: "/services/ai-automation" },
    { label: "Operations & Support", href: "/services/operations" },
    { label: "Content & Video", href: "/services/content" },
    { label: "Engineering & Fintech", href: "/services/engineering" },
  ] satisfies NavLink[],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ] satisfies NavLink[],
};
