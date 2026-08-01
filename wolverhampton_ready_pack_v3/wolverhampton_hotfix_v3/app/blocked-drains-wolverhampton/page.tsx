import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink = "https://wa.me/447405955956?text=Hi%2C%20I%20have%20a%20blocked%20drain%20or%20slow%20drainage%20issue%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Blocked Drains Wolverhampton | Drainage Enquiry Page",
  description:
    "Send a clear blocked drains enquiry in Wolverhampton for slow drainage, smells, gurgling, backing up water or outside drain concerns.",
  alternates: { canonical: "/blocked-drains-wolverhampton" },
};

const signs = [
  { icon: "🧼", title: "Slow drainage", text: "Tell us whether the sink, shower, bath, toilet or outside drain clears slowly." },
  { icon: "👃", title: "Bad smells", text: "Mention smells from shower drains, sinks, toilets or outside drains." },
  { icon: "🔁", title: "Water backing up", text: "Say if water comes back up into a fixture or drain area." },
  { icon: "📍", title: "Local area", text: "Add Wolverhampton area or WV postcode in the first line." },
];

const faqs = [
  { q: "What details should I send for a blocked drain?", a: "Send your area, which fixture or drain is affected, whether water is slow or backing up, whether there is smell or gurgling, and how urgent it feels." },
  { q: "Is a smelly shower drain a blocked drain?", a: "It can be related to drainage, especially with slow water, gurgling or other affected fixtures. Mention all symptoms clearly." },
  { q: "What if water is backing up?", a: "Treat the enquiry as more urgent and avoid using the affected fixture if it makes the situation worse." },
];

export default function BlockedDrainsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.badge}>Blocked drains Wolverhampton</div>
              <h1>Blocked drains, slow water <span>and drain smells.</span></h1>
              <p>Use this page for Wolverhampton drainage enquiries involving slow sinks, shower drain smells, gurgling, blocked toilets, backing up water or outside drain concerns.</p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryBtn}>Build Drain Enquiry</Link>
                <a href={whatsappLink} className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp Enquiry</a>
              </div>
              <div className={styles.microTrust}><span>Slow drainage</span><span>Bad smells</span><span>Water backing up</span></div>
            </div>
            <aside className={styles.visualCard}>
              <div className={styles.visualHeader}><span>Quick route</span><strong>Drain details</strong></div>
              <div className={styles.requestCard}>
                <div className={styles.requestIcon}>🧼</div>
                <p>Useful details</p>
                <h2>Which drain is affected?</h2>
                <div className={styles.requestRows}>
                  <div><span>Fixture</span><strong>sink, shower, toilet or outside drain</strong></div>
                  <div><span>Symptom</span><strong>slow, smell, gurgle or backup</strong></div>
                  <div><span>Area</span><strong>Wolverhampton / WV postcode</strong></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div className={styles.badge}>Drain symptoms</div><h2>What visitors usually <span>notice first.</span></h2><p>Describe the visible symptom instead of guessing the cause.</p></div>
          <div className={styles.cardsGrid}>{signs.map((item) => <article className={styles.serviceCard} key={item.title}><div className={styles.serviceIcon}>{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <div>
              <div className={styles.badge}>Message checklist</div>
              <h2>Send the area, fixture <span>and symptom.</span></h2>
              <p>A clear first message helps route the enquiry: say what is slow, whether there is smell or gurgling, and whether water backs up.</p>
              <div className={styles.trustList}>
                <div><strong>🚿 Shower drain smells</strong><span>Mention slow water, gurgling and when the smell appears.</span></div>
                <div><strong>🚽 Toilet water rising</strong><span>Do not keep flushing if water rises after flushing.</span></div>
              </div>
            </div>
            <div className={styles.enquiryBox}>
              <div className={styles.checkCircle}>📱</div>
              <h3>Build a blocked drain enquiry</h3>
              <div className={styles.enquiryRows}>
                <div><span>Area</span><strong>Wolverhampton / WV postcode</strong></div>
                <div><span>Issue</span><strong>slow, blocked or backing up</strong></div>
                <div><span>Fixtures</span><strong>one fixture or several?</strong></div>
              </div>
              <Link href="/contact" className={styles.fullBtn}>Open Enquiry Form</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div className={styles.badge}>FAQs</div><h2>Blocked drain <span>questions.</span></h2></div>
          <div className={styles.faqGrid}>{faqs.map((item) => <details className={styles.faqItem} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
        </div>
      </section>
    </main>
  );
}
