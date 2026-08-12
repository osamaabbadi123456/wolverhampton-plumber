import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact Wolverhampton Plumber | Send a Clear Plumbing Enquiry",
  description:
    "Send a clear Wolverhampton plumbing enquiry by WhatsApp for leaks, blocked toilets, drains, taps, kitchen plumbing, bathroom plumbing and water pressure issues.",
  alternates: {
    canonical: "/contact",
  },
};

const quickTips = [
  {
    title: "Start with your area",
    text: "Wolverhampton, Bilston, Wednesfield, Tettenhall, Penn, Bushbury or the nearest WV area.",
  },
  {
    title: "Name the exact fixture",
    text: "Toilet, kitchen sink, bath, shower, tap, pipe, radiator or appliance connection.",
  },
  {
    title: "Describe what changed",
    text: "Rising water, slow draining, dripping, spreading water, pressure drop, smell or gurgling.",
  },
  {
    title: "Add a safe photo",
    text: "A clear photo can help explain the issue faster when it is safe and relevant.",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.badge}>WhatsApp enquiry builder</div>
              <h1>
                Send a clear Wolverhampton
                <span> plumbing enquiry.</span>
              </h1>
              <p>
                Pick the closest issue, area and urgency. The page builds a structured
                WhatsApp message so the first enquiry is easier to understand.
              </p>
              <div className={styles.heroActions}>
                <a href="#enquiry-form" className={styles.primaryAction}>Build message</a>
                <Link href="/plumbing-advice" className={styles.secondaryAction}>Read advice first</Link>
              </div>
            </div>

            <aside className={styles.heroPanel} aria-label="Helpful enquiry details">
              <span>What helps most</span>
              <h2>Area, room, symptom and urgency.</h2>
              <ul>
                <li>Say where in Wolverhampton the issue is.</li>
                <li>Mention the affected room or fixture.</li>
                <li>Explain whether it is leaking, blocked, rising or slow.</li>
                <li>Include a photo or short video if safe.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.tipSection}>
        <div className={styles.container}>
          <div className={styles.tipGrid}>
            {quickTips.map((tip, index) => (
              <article className={styles.tipCard} key={tip.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{tip.title}</h2>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formSection} id="enquiry-form">
        <div className={styles.container}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}



