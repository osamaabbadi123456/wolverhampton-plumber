import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

export const metadata: Metadata = {
  title: "Plumbing Advice Wolverhampton | Toilets, Drains, Leaks & Taps",
  description: "Wolverhampton plumbing advice hub for blocked toilets, slow kitchen sinks, low water pressure, leaks, shower drain smells, stop taps, burst pipes and gas smell guidance.",
  alternates: { canonical: "/plumbing-advice" },
};

const guides = [
  { icon: "🚽", title: "Toilet Water Rising", text: "Do not flush again. Check water level and nearby fixtures.", href: "/plumbing-advice/blocked-toilet-water-rising-wolverhampton" },
  { icon: "🍽️", title: "Kitchen Sink Draining Slowly", text: "Standing water, gurgling, smells and appliance pipework details.", href: "/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton" },
  { icon: "🚰", title: "Low Pressure From One Tap", text: "Hot, cold or both? One tap or several?", href: "/plumbing-advice/low-water-pressure-one-tap-wolverhampton" },
  { icon: "💧", title: "Water Leaking Under a Sink", text: "Tap base, waste pipe, supply pipe or cabinet water.", href: "/plumbing-advice/water-leaking-under-sink-wolverhampton" },
  { icon: "🚿", title: "Shower Drain Smells", text: "Slow water, gurgling and bathroom drain smell details.", href: "/plumbing-advice/shower-drain-smells-wolverhampton" },
  { icon: "▶️", title: "Short Plumbing Videos", text: "Step-by-step videos for the main Wolverhampton plumbing issues.", href: "/videos" },
  { icon: "🔩", title: "Internal Stop Tap Leaking", text: "Stop tap location, leak pattern and water isolation details.", href: "/plumbing-advice/internal-stop-tap-leaking-wolverhampton" },
  { icon: "❄️", title: "Frozen & Burst Pipes", text: "Cold weather pipe safety and burst pipe enquiry details.", href: "/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton" },
  { icon: "⚠️", title: "Smell Gas Guidance", text: "Safety-first gas smell guidance. Gas work requires Gas Safe handling.", href: "/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton" },
];

export default function PlumbingAdvicePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.badge}>Wolverhampton plumbing advice</div>
              <h1>Plumbing advice <span>built around real symptoms.</span></h1>
              <p>Choose the closest guide before sending a plumbing enquiry. Each page explains what details matter first: area, fixture, symptom and urgency.</p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryBtn}>Build Enquiry</Link>
                <Link href="/videos" className={styles.secondaryBtn}>Watch Videos</Link>
              </div>
            </div>
            <aside className={styles.visualCard}>
              <div className={styles.visualHeader}><span>Advice hub</span><strong>WV plumbing</strong></div>
              <div className={styles.requestCard}>
                <div className={styles.requestIcon}>🧰</div>
                <p>Use this page</p>
                <h2>Find the closest problem</h2>
                <div className={styles.requestRows}>
                  <div><span>1</span><strong>Choose the guide</strong></div>
                  <div><span>2</span><strong>Check the details</strong></div>
                  <div><span>3</span><strong>Send a clearer enquiry</strong></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div className={styles.badge}>All guides</div><h2>Choose the closest <span>plumbing issue.</span></h2><p>The cards below link to the article, video hub, or safety guide.</p></div>
          <div className={styles.cardsGrid}>{guides.map((guide) => <article className={styles.serviceCard} key={guide.href}><div className={styles.serviceIcon}>{guide.icon}</div><h3>{guide.title}</h3><p>{guide.text}</p><Link href={guide.href} className={styles.cardLink}>Open guide</Link></article>)}</div>
        </div>
      </section>
      <section className={styles.finalCta}>
        <div className={styles.container}><div className={styles.finalBox}><h2>Need to send a plumbing enquiry?</h2><p>Send the Wolverhampton area, the affected fixture, what changed and how urgent it feels.</p><div className={styles.heroActionsCenter}><Link href="/contact" className={styles.primaryBtn}>Build Enquiry</Link><Link href="/videos" className={styles.secondaryBtn}>Watch Videos</Link></div></div></div>
      </section>
    </main>
  );
}
