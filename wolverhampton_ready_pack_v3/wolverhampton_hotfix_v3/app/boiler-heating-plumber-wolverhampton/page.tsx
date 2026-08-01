import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink = "https://wa.me/447405955956?text=Hi%2C%20I%20need%20boiler%20or%20heating%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Boiler & Heating Plumber Wolverhampton | Enquiry Page",
  description:
    "Send a Wolverhampton boiler or heating plumbing enquiry with clear details. Gas work and gas boiler work must be handled by a Gas Safe registered engineer.",
  alternates: { canonical: "/boiler-heating-plumber-wolverhampton" },
};

const checks = [
  { icon: "🔥", title: "Boiler or radiator?", text: "Say whether the issue is boiler, radiator, heating pipework, hot water or pressure related." },
  { icon: "💧", title: "Any leak visible?", text: "Mention water under the boiler, near pipework, around radiators or on flooring." },
  { icon: "📍", title: "Add your area", text: "Include your Wolverhampton area or WV postcode in the first line." },
  { icon: "⚠️", title: "Gas safety", text: "Gas work and gas boiler work must be handled by a Gas Safe registered engineer." },
];

const faqs = [
  { q: "Can I send a boiler enquiry through this page?", a: "Yes, but any gas work or gas boiler work must be handled by a Gas Safe registered engineer." },
  { q: "What details should I send?", a: "Send your area, the heating issue, whether there is a leak, whether hot water is affected and how urgent it feels." },
  { q: "What if I smell gas?", a: "Follow official emergency guidance immediately. Do not use this page as a replacement for emergency gas safety action." },
];

export default function BoilerHeatingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.badge}>Boiler and heating enquiry</div>
              <h1>A Wolverhampton boiler and heating <span>enquiry page.</span></h1>
              <p>Use this page to send clear details about heating pipework, radiator leaks, hot water concerns, pressure issues or boiler-related plumbing concerns in Wolverhampton.</p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryBtn}>Open Enquiry Page</Link>
                <a href={whatsappLink} className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp Enquiry</a>
              </div>
              <small>Gas work and gas boiler work must be handled by a Gas Safe registered engineer.</small>
            </div>
            <aside className={styles.visualCard}>
              <div className={styles.visualHeader}><span>Safety first</span><strong>Heating enquiry</strong></div>
              <div className={styles.requestCard}>
                <div className={styles.requestIcon}>🔥</div>
                <p>What to send</p>
                <h2>Area, issue and urgency</h2>
                <div className={styles.requestRows}>
                  <div><span>Area</span><strong>Bilston / WV1 / Wednesfield</strong></div>
                  <div><span>Issue</span><strong>radiator leak, pressure or pipework</strong></div>
                  <div><span>Safety</span><strong>Gas Safe for gas work</strong></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Clear details</div>
            <h2>What to include <span>before sending.</span></h2>
            <p>These details help separate a heating pipework enquiry from leaks, water pressure concerns or gas safety issues.</p>
          </div>
          <div className={styles.cardsGrid}>
            {checks.map((item) => (
              <article className={styles.serviceCard} key={item.title}>
                <div className={styles.serviceIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <div>
              <div className={styles.badge}>Important safety note</div>
              <h2>Gas boiler work needs <span>Gas Safe handling.</span></h2>
              <p>This website helps collect clear enquiry details. It does not replace official gas emergency guidance or Gas Safe requirements.</p>
              <div className={styles.trustList}>
                <div><strong>⚠️ Smell gas?</strong><span>Follow official emergency guidance immediately.</span></div>
                <div><strong>💧 Water leak?</strong><span>Say where the water appears and whether it is spreading.</span></div>
              </div>
            </div>
            <div className={styles.enquiryBox}>
              <div className={styles.checkCircle}>📱</div>
              <h3>Build a clear message</h3>
              <div className={styles.enquiryRows}>
                <div><span>Area</span><strong>Wolverhampton / WV postcode</strong></div>
                <div><span>Issue</span><strong>boiler, radiator or pipework</strong></div>
                <div><span>Urgency</span><strong>today / 24-48 hours / flexible</strong></div>
              </div>
              <Link href="/contact" className={styles.fullBtn}>Open Enquiry Form</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div className={styles.badge}>FAQs</div><h2>Boiler and heating <span>questions.</span></h2></div>
          <div className={styles.faqGrid}>{faqs.map((item) => <details className={styles.faqItem} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
        </div>
      </section>
    </main>
  );
}
