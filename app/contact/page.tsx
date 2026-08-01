import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact Wolverhampton Plumber | Send a Plumbing Enquiry",
  description:
    "Send a Wolverhampton plumbing enquiry by WhatsApp for leaks, blocked toilets, blocked drains, tap repairs, kitchen plumbing, bathroom plumbing and water pressure issues.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>WhatsApp plumbing enquiry</div>

          <h1>
            Send Your Wolverhampton
            <span> Plumbing Enquiry</span>
          </h1>

          <p>
            Choose the issue, Wolverhampton area and urgency. The form creates a
            clear WhatsApp message that you can edit before sending.
          </p>

          <small>
            Gas work must be handled by a Gas Safe registered engineer. If water
            is near electrics, sewage is backing up, or there is a gas smell,
            follow safety guidance first.
          </small>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
