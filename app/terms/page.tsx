import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

export const metadata: Metadata = {
  title: "Terms | Wolverhampton Plumber",
  description:
    "Terms for using Wolverhampton Plumber, a local plumbing enquiry website for Wolverhampton plumbing issues.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Terms</div>
            <h1>
              Terms of Use
              <span> Wolverhampton Plumber</span>
            </h1>
            <p>
              These terms explain how the Wolverhampton Plumber website should
              be used.
            </p>
          </div>

          <article className={styles.legalContent}>
            <h2>1. Website purpose</h2>
            <p>
              Wolverhampton Plumber is a local plumbing enquiry website. It is
              designed to help visitors send clear enquiry details by WhatsApp,
              including their area, issue, urgency and extra notes.
            </p>

            <h2>2. Enquiry information</h2>
            <p>
              When you use the enquiry flow, you are responsible for checking
              the message before sending it through WhatsApp. The message opens
              pre-filled so you can edit it first.
            </p>

            <h2>3. Service availability</h2>
            <p>
              Response depends on availability, timing, location, the type of
              plumbing issue and the details provided in the enquiry. The
              website is intended to organise the information clearly before any
              next step.
            </p>

            <h2>4. No emergency substitute</h2>
            <p>
              This website is not a substitute for official emergency services.
              If there is immediate danger, serious flooding, electrical risk or
              a suspected gas issue, follow official emergency guidance.
            </p>

            <h2>5. Gas work</h2>
            <p>
              Gas work and gas boiler work must be handled by a Gas Safe
              registered engineer. Do not use this website as a replacement for
              qualified gas safety advice.
            </p>

            <h2>6. Accuracy of information</h2>
            <p>
              Visitors should provide accurate enquiry details where possible,
              including the property area, the visible issue and how urgent the
              situation is.
            </p>

            <h2>7. Website content</h2>
            <p>
              The content on this website is general information and enquiry
              guidance. It should not be treated as professional plumbing,
              drainage, gas or safety advice.
            </p>

            <h2>8. Changes</h2>
            <p>
              The website content, pages and enquiry flow may be updated over
              time to improve clarity, usability and local relevance.
            </p>

            <div className={styles.legalActions}>
              <Link href="/contact" className={styles.primaryBtn}>
                Contact Page
              </Link>
              <Link href="/" className={styles.secondaryBtn}>
                Back Home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}



