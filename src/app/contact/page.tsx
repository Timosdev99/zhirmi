import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/component/forms/ContactForm";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact — Book a Free Call",
  description:
    "Tell us about your business. We reply within one working day and start with a free 20-minute call.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-ink">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
            Tell us what is slowing your business down.
          </h1>
          <p className="mt-5 text-lg text-muted">
            Book a free 20-minute call. We will tell you the three things we
            would fix first, whether you work with us or not.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-display text-xl font-semibold text-brand">
                Get in touch
              </h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-start gap-3 text-foreground hover:text-accent-ink"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" />
                    <span>
                      <span className="block font-medium">Email</span>
                      <span className="text-muted">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="flex items-start gap-3 text-foreground hover:text-accent-ink"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" />
                    <span>
                      <span className="block font-medium">Phone</span>
                      <span className="text-muted">{site.phone}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" />
                  <span>
                    <span className="block font-medium">Based in</span>
                    <span className="text-muted">{site.location}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" />
                  <span>
                    <span className="block font-medium">Response time</span>
                    <span className="text-muted">Within one working day</span>
                  </span>
                </li>
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm text-muted">
                  Prefer to talk it through? Use the form and we will send a
                  calendar invite for a free 20-minute call.
                </p>
                {site.whatsappUrl && (
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-accent-dark"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message us on WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              id="contact-form"
              className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <h2 className="font-display text-xl font-semibold text-brand">
                Send a message
              </h2>
              <p className="mt-1 text-sm text-muted">
                A few details help us come prepared.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
