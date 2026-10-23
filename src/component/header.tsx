"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
            <span className="h-5 w-5 rounded border-2 border-accent" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-brand">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link inline-flex items-center pb-1 text-sm font-medium transition-colors hover:text-accent-ink ${isActive(link.href) ? "text-accent-ink" : "text-foreground"
                }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>


        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-brand md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-surface md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive(link.href)
                  ? "bg-accent/10 text-accent-ink"
                  : "text-foreground hover:bg-background"
                  }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 px-3 py-2 hover:text-accent-ink"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 px-3 py-2 hover:text-accent-ink"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>

            <Link
              href={site.bookingUrl}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Book a free call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
