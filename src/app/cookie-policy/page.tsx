import LegalPage, { LegalSection } from "@/component/LegalPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "How Zhirmitech uses cookies and similar technologies.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="22 October 2026">
      <LegalSection title="What cookies are">
        <p>
          Cookies are small text files stored on your device by a website. They
          are commonly used to make sites work, remember preferences and measure
          how pages are used.
        </p>
      </LegalSection>

      <LegalSection title="Cookies we use">
        <p>
          At the time of writing this site only uses cookies and similar storage
          that are necessary to operate it securely and reliably. We do not
          currently run advertising or third-party analytics cookies on this site.
        </p>
        <p>
          If we add analytics or advertising tools, we will update this policy and
          ask for consent where required before those cookies are set.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          Some pages may embed third-party content or link to services such as
          booking tools, video platforms or payment providers. Those services may
          set their own cookies when you interact with them.
        </p>
      </LegalSection>

      <LegalSection title="Managing cookies">
        <p>
          You can control and delete cookies through your browser settings. Note
          that blocking essential cookies may affect how parts of a site work.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy as the site and the tools we use change. The
          latest version will always be available on this page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
