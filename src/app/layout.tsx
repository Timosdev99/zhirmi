import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { site } from "@/content/site";
import { ogImage } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zhirmitech — Websites, Marketing & AI for Growing Businesses",
    template: "%s | Zhirmitech",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: site.name,
    title: "Zhirmitech — Websites, Marketing & AI for Growing Businesses",
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zhirmitech — Websites, Marketing & AI for Growing Businesses",
    description: site.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
