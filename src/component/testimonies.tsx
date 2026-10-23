import { testimonials } from "@/content/testimonials";

export default function TestimonialsSection() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-ink">
          Testimonials
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">
          What clients say
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={`${testimonial.name}-${testimonial.company}`}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <blockquote className="flex-1 text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-brand">{testimonial.name}</p>
                <p className="text-sm text-muted">
                  {testimonial.role ? `${testimonial.role}, ` : ""}
                  {testimonial.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
