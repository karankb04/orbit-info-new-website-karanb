import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig, formattedAddress, telHref } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal data, and how to contact us about it.`,
  path: "/privacy",
});

/**
 * Written for India's Digital Personal Data Protection Act, 2023 and the DPDP
 * Rules, 2025: what we collect, why, who it goes to, how long we keep it, your
 * rights, and a named grievance contact. Every statement describes what the
 * site actually does (no cookies, no analytics; the quote form posts to a
 * Google Apps Script that writes to a Google Sheet). Change it if that changes.
 */
export default function PrivacyPage() {
  const { name, email, phone, gstin } = siteConfig;
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What personal data we collect, why we need it, and the choices you have."
      path="/privacy"
      updated="2026-10-17"
    >
      <h2>Who we are</h2>
      <p>
        This website belongs to {name}, an IT and electronic security business based at {formattedAddress} (GSTIN {gstin}).
        When this policy says &ldquo;we&rdquo; or &ldquo;us&rdquo;, it means {name}. Under Indian data protection law we are the
        Data Fiduciary for the personal data described here.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Quote and contact forms:</strong> your name, email address, phone number (optional), the service you need,
          and anything you write in the message box.
        </li>
        <li>
          <strong>Calls, WhatsApp messages and emails:</strong> whatever you choose to tell us, including photos of a faulty
          device.
        </li>
        <li>
          <strong>Service work:</strong> details of your devices and systems, your address for on-site visits, and billing
          details for invoices. Repairing a laptop, setting up a NAS or configuring a CCTV recorder can mean we see files
          stored on that equipment. We only access what the job needs and do not copy or keep your files.
        </li>
        <li>
          <strong>Website visits:</strong> our hosting provider records basic technical data such as your IP address, browser
          type and the pages requested, to keep the site running and secure.
        </li>
      </ul>
      <p>
        This website does not use cookies, analytics tools or advertising trackers.
      </p>

      <h2>Why we use it</h2>
      <ul>
        <li>To reply to your enquiry and send you a quote.</li>
        <li>To carry out the work you ask for, including visits, repairs, installation and support.</li>
        <li>To raise invoices and handle warranty claims and AMC support.</li>
        <li>To meet legal duties, such as GST and accounting records.</li>
        <li>To keep this website secure.</li>
      </ul>
      <p>
        We do not use your details for unrelated marketing, and we do not sell or rent personal data to anyone.
      </p>

      <h2>Your consent</h2>
      <p>
        When you submit a form or contact us, you agree to us using your details for the purposes above. You can withdraw
        that consent at any time by emailing <a href={`mailto:${email}`}>{email}</a>. Withdrawing consent does not affect
        anything we did before you withdrew it, and we may still need to keep some records where the law requires it.
      </p>

      <h2>Who we share it with</h2>
      <ul>
        <li>
          <strong>Google:</strong> quote form submissions are stored in a Google Sheet through Google Apps Script, so Google
          processes them on our behalf.
        </li>
        <li>
          <strong>Vercel:</strong> our website host, which handles the technical data described above.
        </li>
        <li>
          <strong>Manufacturers and distributors:</strong> when a warranty claim or replacement part needs it, we share the
          device details and the contact details needed for that claim.
        </li>
        <li>
          <strong>Authorities:</strong> when we are legally required to.
        </li>
      </ul>
      <p>
        Some of these providers may store data outside India. We only use well-established providers and share no more than
        each one needs.
      </p>

      <h2>Links to other services</h2>
      <p>
        Buttons on this site open WhatsApp, Google Maps and your phone or email app. Once you use those services, their own
        privacy policies apply.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry details for as long as we need them to respond and follow up. We keep service and invoice records
        for as long as Indian tax and accounting law requires. After that we delete them.
      </p>

      <h2>How we protect it</h2>
      <p>
        Access to customer details is limited to the staff who need them for your job. We use reasonable technical and
        organisational safeguards to protect personal data from loss, misuse and unauthorised access.
      </p>

      <h2>Your rights</h2>
      <p>Under the Digital Personal Data Protection Act, 2023 you can ask us to:</p>
      <ul>
        <li>give you a summary of the personal data we hold about you and how we use it;</li>
        <li>correct, complete or update it;</li>
        <li>erase it, where we no longer need it or the law does not require us to keep it;</li>
        <li>stop using it, by withdrawing your consent;</li>
        <li>let someone you nominate exercise these rights on your behalf if you cannot.</li>
      </ul>
      <p>
        To make a request, email <a href={`mailto:${email}`}>{email}</a>. We may ask you to confirm your identity before we
        act on it.
      </p>

      <h2>Grievances</h2>
      <p>
        If you have a concern about how we handle your personal data, contact our grievance officer at{" "}
        <a href={`mailto:${email}`}>{email}</a>, call <a href={telHref}>{phone.primary.display}</a>, or write to{" "}
        {name}, {formattedAddress}. We will respond within the time the law requires. If you are not satisfied with our
        response, you can complain to the Data Protection Board of India.
      </p>

      <h2>Children</h2>
      <p>
        Our services are meant for adults and businesses. We do not knowingly collect personal data from anyone under 18.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change how we handle personal data, we will update this page and the date at the top.
      </p>
    </LegalPage>
  );
}
