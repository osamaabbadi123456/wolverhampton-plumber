import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact Wolverhampton Plumber | WhatsApp Plumbing Enquiry",
  description:
    "Send a Wolverhampton plumbing enquiry by WhatsApp. Choose your issue, area and urgency for leaks, blocked toilets, blocked drains, tap repairs and heating plumbing concerns.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Wolverhampton Plumber",
    url: "https://wolverhamptonplumber.co.uk/contact",
    description:
      "WhatsApp plumbing enquiry page for Wolverhampton plumbing issues including leaks, blocked toilets, blocked drains, tap repairs and heating plumbing concerns.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.copy}>
                <div className={styles.badge}>WhatsApp plumbing enquiry</div>

                <h1>
                  Send Your Wolverhampton
                  <span> Plumbing Enquiry</span>
                </h1>

                <p>
                  Choose your plumbing issue, Wolverhampton area and urgency.
                  The form will create a clear WhatsApp message that you can
                  edit before sending.
                </p>

                <div className={styles.trustRow}>
                  <span>Leaks</span>
                  <span>Blocked toilets</span>
                  <span>Blocked drains</span>
                  <span>Tap repairs</span>
                  <span>Heating pipework</span>
                </div>

                <small>
                  This website helps organise local plumbing enquiries in
                  Wolverhampton. Response depends on availability, timing and
                  the details of the enquiry. Gas work must be handled by a Gas
                  Safe registered engineer.
                </small>
              </div>

              <div className={styles.formShell}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
