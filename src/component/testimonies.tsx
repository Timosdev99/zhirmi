import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/content/testimonials";

export default function TestimonialsSection() {
  if (testimonials.length === 0) {
    return null;
  }

  const averageRating = (
    testimonials.reduce(
      (total, testimonial) => total + (testimonial.rating ?? 5),
      0,
    ) / testimonials.length
  ).toFixed(1);

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-b border-border bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                Client words
              </p>
              <h2 className="mt-6 max-w-sm font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
                What working together is like.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Feedback from businesses and founders who have trusted us with
                their websites, design and launch work.
              </p>

              <div className="mt-10 flex items-end gap-4 border-t border-border pt-5">
                <p className="font-display text-4xl font-bold tracking-tight text-brand">
                  {averageRating}
                </p>
                <div className="pb-1">
                  <div className="flex gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-3.5 w-3.5 fill-accent-ink text-accent-ink"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-muted">
                    {testimonials.length} client reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="divide-y divide-border border-y border-border lg:col-span-8">
            {testimonials.map((testimonial) => {
              const rating = testimonial.rating ?? 5;
              const initial = testimonial.name.trim().charAt(0).toUpperCase();

              return (
                <figure key={testimonial.name} className="py-8">
                  <div
                    className="flex gap-0.5"
                    role="img"
                    aria-label={`${rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        aria-hidden
                        className={`h-3.5 w-3.5 ${
                          index < rating
                            ? "fill-accent-ink text-accent-ink"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="mt-6 text-base leading-relaxed text-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-4">
                    {testimonial.imageUrl ? (
                      <Image
                        src={testimonial.imageUrl}
                        alt={`${testimonial.name} profile`}
                        width={48}
                        height={48}
                        sizes="48px"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand font-display text-base font-bold text-white"
                      >
                        {initial}
                      </span>
                    )}
                    <div>
                      <p className="font-display text-sm font-bold text-brand">
                        {testimonial.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        {[
                          testimonial.role,
                          testimonial.company,
                          testimonial.country,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
