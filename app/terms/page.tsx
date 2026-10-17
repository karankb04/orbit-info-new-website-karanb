import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig, formattedAddress, telHref } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description: `The terms that apply when you use this website or hire ${siteConfig.name} for repairs, installation, software and support.`,
  path: "/terms",
});

/**
 * Deliberately avoids business numbers nobody has confirmed (minimum charges,
 * warranty months, storage periods). Those live on the quote, job sheet or
 * invoice, and the terms point there. Add them here only once the business
 * confirms them.
 */
export default function TermsPage() {
  const { name, email, phone } = siteConfig;
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="The terms that apply when you use this website or hire us for repairs, installation, software or support."
      path="/terms"
      updated="2026-10-17"
    >
      <h2>About these terms</h2>
      <p>
        These terms apply when you use this website or hire {name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), {formattedAddress}.
        Your quote, job sheet, invoice or AMC agreement may add specific terms for your job. Where they differ from this
        page, those documents apply.
      </p>

      <h2>Information on this website</h2>
      <p>
        We keep this website accurate, but product ranges, stock and specifications change. Nothing on the site is a fixed
        offer or price. Call or message us to confirm availability and get a current quote.
      </p>

      <h2>Quotes and approval</h2>
      <ul>
        <li>Quotes are free. A quote is valid for the period written on it.</li>
        <li>
          For repairs, we diagnose the fault first and tell you the cost before starting work. If we find more work is
          needed, we ask you before doing it.
        </li>
        <li>Prices are subject to GST and any other taxes that apply.</li>
      </ul>

      <h2>Your data during repairs</h2>
      <ul>
        <li>
          Please back up your data before handing over a device. Repairs, part replacements and software reinstallation can
          erase stored data.
        </li>
        <li>
          We take care with your data, but we are not responsible for data loss during a repair unless it is caused by our
          negligence.
        </li>
        <li>
          If we need a password to test a device, share only what the job needs and change it once the device is back with
          you.
        </li>
      </ul>

      <h2>Products, parts and warranty</h2>
      <ul>
        <li>We supply genuine products and parts.</li>
        <li>
          Manufacturer warranties are provided by the manufacturer on its own terms. We help you make warranty claims for
          products we supplied.
        </li>
        <li>Any warranty on our own workmanship is stated on your invoice or job sheet and covers only the work we did.</li>
        <li>
          Warranties do not cover physical or liquid damage, misuse, power surges, or work done by someone else after us.
        </li>
      </ul>

      <h2>Collecting your device</h2>
      <p>
        Please collect your device soon after we tell you it is ready. If you cannot, let us know. We will contact you
        before taking any further step about a device that stays uncollected.
      </p>

      <h2>On-site work: CCTV, networking and UPS</h2>
      <ul>
        <li>
          You give us safe access to the site at the agreed time, along with any permission needed from your housing
          society, landlord or building management.
        </li>
        <li>
          You decide where cameras point. We advise on placement, but you are responsible for using CCTV lawfully and
          respecting other people&rsquo;s privacy.
        </li>
        <li>
          Network and CCTV equipment relies on your power supply and internet connection. Faults in those are outside our
          control.
        </li>
      </ul>

      <h2>Software and licences</h2>
      <p>
        Software we sell or install, such as Tally and antivirus, is licensed to you by its publisher under the publisher&rsquo;s
        own licence terms.
      </p>

      <h2>Annual maintenance contracts</h2>
      <p>
        The equipment covered, visit frequency and response terms of an AMC are set out in your AMC agreement.
      </p>

      <h2>Payment</h2>
      <p>Payment terms are stated on your quote or invoice.</p>

      <h2>Limitation of liability</h2>
      <p>
        We are not liable for indirect or consequential losses, such as lost business, lost profit or downtime. Our total
        liability for any job is limited to the amount you paid us for it. Nothing in these terms limits liability that
        Indian law does not allow us to limit, or your rights under the Consumer Protection Act, 2019.
      </p>

      <h2>Using this website</h2>
      <p>
        The text, photos and design of this website belong to {name}. You may not copy them for commercial use without our
        permission. Brand names and logos shown on this site, including CP Plus, Hikvision, Seagate, APC, Luminous, Artis,
        Synology and Tally, are trademarks of their owners.
      </p>

      <h2>Privacy</h2>
      <p>
        How we handle personal data is explained in our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India. Courts in Mumbai have jurisdiction over any dispute.</p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms. The version on this page, with the date at the top, is the current one. For questions,
        email <a href={`mailto:${email}`}>{email}</a> or call <a href={telHref}>{phone.primary.display}</a>.
      </p>
    </LegalPage>
  );
}
