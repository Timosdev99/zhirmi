import AboutSection from "@/component/aboutSection";
import TestimonialsSection from "@/component/testimonies";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About — Your Tech & Growth Partner",
  description:
    "Meet Samuel Ogbegun and the Zhirmitech network of web, marketing and AI specialists.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
