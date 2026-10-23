import LegalPage, { LegalSection } from "@/component/LegalPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "How Zhirmitech collects, uses and protects your personal data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="22 October 2026">
      <LegalSection title="Who we are">
        <p>
          Zhirmitech provides websites, marketing, AI and operations services to
          businesses. For the purposes of UK data protection law, Zhirmitech is
          the data controller for the personal data described on this page.
        </p>
      </LegalSection>

      <LegalSection title="What we collect">
        <p>We collect information you give us directly, including:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Your name, email address and company when you use the contact form.</li>
          <li>The message, service interest and any project details you send us.</li>
          <li>Your email address when you subscribe to our newsletter.</li>
        </ul>
        <p>
          Our hosting provider may also process basic technical data such as IP
          address, browser type and requested pages in server logs for security
          and reliability.
        </p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <ul className="list-disc space-y-1 pl-5">
          <li>To reply to your enquiry and provide a quote or proposal.</li>
          <li>To deliver services you have engaged us for.</li>
          <li>To send newsletters you have asked to receive.</li>
          <li>To keep records, prevent abuse and meet legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Lawful basis">
        <p>
          We rely on legitimate interests to respond to business enquiries, on
          contract where we are delivering services, and on consent for
          newsletter emails. You can withdraw consent at any time.
        </p>
      </LegalSection>

      <LegalSection title="Who we share it with">
        <p>
          We use trusted service providers for email delivery, hosting, project
          management and accounting. They only process data on our instructions.
          We do not sell your personal data.
        </p>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          We keep enquiry and client records only as long as needed for the
          relationship and for legal, tax and accounting requirements. Newsletter
          subscribers stay on the list until they unsubscribe or we remove
          inactive contacts.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          You have the right to access, correct, delete or restrict the use of
          your personal data, and to object to processing or request
          portability. To exercise any of these rights, email{" "}
          <a href="mailto:samuel@zhirmitech.com" className="text-accent-ink underline">
            samuel@zhirmitech.com
          </a>
          .
        </p>
        <p>
          You also have the right to complain to the Information Commissioner&apos;s
          Office (ICO) if you are unhappy with how we have handled your data.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy from time to time. The latest version will
          always be available on this page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
