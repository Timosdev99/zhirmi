import LegalPage, { LegalSection } from "@/component/LegalPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: "The terms that apply to Zhirmitech projects, retainers and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="22 October 2026">
      <LegalSection title="Scope of services">
        <p>
          Each project is defined in a written quote or proposal. Work outside
          that scope is treated as a change request and may be quoted separately.
          Third-party costs such as domains, hosting, plugins, platform
          subscriptions, ad spend and AI usage are not included unless stated.
        </p>
      </LegalSection>

      <LegalSection title="Quotes and payment">
        <p>
          Prices are valid for 30 days unless stated otherwise. Projects under
          £1,000 are billed 50% on acceptance and 50% before launch. Projects over
          £1,000 are billed 40% on acceptance, 30% at design approval and 30%
          before launch. Retainers are billed monthly in advance.
        </p>
        <p>
          Payment is accepted by bank transfer, Wise, Stripe or PayPal. Late
          payment may pause work and delivery.
        </p>
      </LegalSection>

      <LegalSection title="Client responsibilities">
        <p>
          You agree to provide content, access, feedback and approvals promptly.
          Delays in providing these may affect timelines. You confirm that
          material you supply does not infringe third-party rights.
        </p>
      </LegalSection>

      <LegalSection title="Revisions and approvals">
        <p>
          The number of revision rounds is set out in the relevant package or
          proposal. Additional revisions are billed at the agreed hourly rate.
          Work is considered approved when you confirm it in writing or when it
          goes live.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          On full payment, ownership of the final approved deliverables passes to
          you, excluding third-party licences, pre-existing tools and platform
          components. We may show the work in our portfolio unless you ask us not
          to.
        </p>
      </LegalSection>

      <LegalSection title="Care plans and cancellation">
        <p>
          Monthly care plans have no lock-in and can be cancelled with 30 days&apos;
          notice. Unused hours do not roll over. Monthly SEO has a minimum term
          of three months because results take time.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          We provide our services with reasonable skill and care. We are not
          liable for indirect or consequential loss, lost profits, or third-party
          platform outages. Our total liability is limited to the fees paid for
          the affected service.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws of England and Wales. The courts
          of England and Wales have exclusive jurisdiction over any dispute.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
