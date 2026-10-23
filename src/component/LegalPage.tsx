import type { ReactNode } from "react";
import { site } from "@/content/site";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-ink">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        <p className="mt-6 rounded-xl border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-foreground">
          This page is a working draft and will be reviewed before the new site
          launches. Questions? Email{" "}
          <a href={`mailto:${site.email}`} className="text-accent-ink underline">
            {site.email}
          </a>
          .
        </p>

        <div className="mt-10 space-y-8">{children}</div>
      </section>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-brand">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}
