import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import NewsletterForm from "./forms/NewsletterForm";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Join the Network", href: "/join" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <span className="h-5 w-5 rounded border-2 border-accent" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {site.tagline} Websites, marketing, AI and operations for growing
              businesses.
            </p>
            <Link
              href={site.bookingUrl}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-accent-dark"
            >
              Book a free call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h2>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h2>
            <ul className="mt-4 space-y-3">
              {site.serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {site.phone}
                </a>
              </li>
              {site.whatsappUrl && (
                <li>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 transition-colors hover:text-accent"
                  >
                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    WhatsApp
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2 md:items-center md:p-8">
          <div>
            <h2 className="font-display text-xl font-semibold">
              One useful email a month
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Practical ideas on websites, search and automation. No spam.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
