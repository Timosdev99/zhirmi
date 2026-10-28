import Header from "@/component/header";
import Footer from "@/component/footer";
//import Analytics from "@/component/analytics";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  founder: {
    "@type": "Person",
    name: "Samuel Ogbegun",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: ["United Kingdom", "United States", "Australia", "Nigeria"],
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <Analytics />
    </>
  );
}
