import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Wolverhampton Plumber",
  description:
    "Privacy Policy for Wolverhampton Plumber, including information about WhatsApp enquiries, analytics, cookies and contact details.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Privacy Policy</div>
            <h1>
              Privacy Policy
              <span> Wolverhampton Plumber</span>
            </h1>
            <p>
              This page explains how Wolverhampton Plumber handles basic website
              and enquiry information.
            </p>
          </div>

          <article className={styles.legalContent}>
            <h2>1. Who we are</h2>
            <p>
              Wolverhampton Plumber is a local plumbing enquiry website focused
              on helping visitors send plumbing enquiries relating to
              Wolverhampton and nearby areas.
            </p>

            <h2>2. Information you may send</h2>
            <p>
              If you use the WhatsApp enquiry flow, the information you choose
              to send may include your area, plumbing issue, urgency, message
              details and any information you include manually in WhatsApp.
            </p>

            <h2>3. WhatsApp enquiries</h2>
            <p>
              The website creates a pre-filled WhatsApp message. You can review
              and edit the message before sending. Once sent, the message is
              handled through WhatsApp according to WhatsApp’s own terms and
              privacy practices.
            </p>

            <h2>4. Analytics and website data</h2>
            <p>
              The website may use analytics or performance tools to understand
              visits, page views, devices, search performance and how visitors
              interact with the site. This helps improve the website and enquiry
              flow.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Cookies or similar technologies may be used for analytics,
              performance measurement or basic website functionality. You can
              manage cookies in your browser settings.
            </p>

            <h2>6. Sharing information</h2>
            <p>
              Enquiry details may be used to understand the plumbing request
              and, where appropriate, to help route the enquiry. The site does
              not present itself as a fake registered trade body or fake local
              contractor.
            </p>

            <h2>7. Safety note</h2>
            <p>
              Gas work and gas boiler work must be handled by a Gas Safe
              registered engineer. For suspected gas leaks or immediate danger,
              follow official emergency guidance.
            </p>

            <h2>8. Contact</h2>
            <p>
              You can contact the website through the WhatsApp enquiry route or
              by email if an email address is displayed on the site.
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



