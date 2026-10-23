import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories, serviceChapters } from "@/content/services";

const chapters = serviceChapters.map((chapter) => ({
  ...chapter,
  categories: serviceCategories.filter((category) =>
    chapter.categorySlugs.includes(category.slug),
  ),
}));

export default function HomeCapabilities() {
  return (
    <section
      id="what-we-handle"
      className="scroll-mt-24 border-b border-border py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
              What we handle
            </p>
            <h2 className="mt-6 max-w-md font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
              From the website to the system behind it.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              One team for the build, the growth and the operations that follow.
              No handoffs between suppliers who never speak.
            </p>
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-2 border-b border-brand/30 pb-1 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
            >
              View all capabilities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3 lg:col-span-8">
            {chapters.map((chapter) => (
              <article
                key={chapter.slug}
                className="border-t border-brand/25 pt-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
                  {chapter.number}
                </p>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-brand">
                  {chapter.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {chapter.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-border pt-4">
                  {chapter.categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/services/${category.slug}`}
                        className="text-sm font-medium text-foreground transition-colors hover:text-accent-ink"
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
