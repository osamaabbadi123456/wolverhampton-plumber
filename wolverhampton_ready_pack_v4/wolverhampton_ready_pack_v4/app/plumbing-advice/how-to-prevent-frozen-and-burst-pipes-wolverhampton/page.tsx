import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Frozen and Burst Pipes Wolverhampton | What to Know",
  description: "Frozen or burst pipe concern in Wolverhampton? Learn what to check first, what details to send and how to describe water leaks, no water and cold weather pipe issues.",
  alternates: {
    canonical: "/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton",
  },
  openGraph: {
    title: "Frozen and Burst Pipes Wolverhampton | What to Know",
    description: "Frozen or burst pipe concern in Wolverhampton? Learn what to check first, what details to send and how to describe water leaks, no water and cold weather pipe issues.",
    url: `https://wolverhamptonplumber.co.uk/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton`,
    type: "article",
    locale: "en_GB",
  },
};

const firstChecks = [
  { icon: "🚰", title: "Check the symptom", text: "Say whether there is no water, weak water flow, dripping, running water or water marks." },
  { icon: "📍", title: "Locate the area", text: "Mention whether the issue is in the kitchen, bathroom, loft, garage, outside wall or under a sink." },
  { icon: "💧", title: "Watch for spreading water", text: "If water is spreading, describe where it is going and whether ceilings, cupboards or flooring are affected." },
  { icon: "⚠️", title: "Stay away from risk", text: "Keep away from water near electrics, sockets, appliances or unsafe areas." }
];

const whatToSend = [
  "Your Wolverhampton area or WV postcode",
  "Whether there is no water, weak flow or visible leak",
  "Which room or pipe area seems affected",
  "Whether water is spreading or contained",
  "Whether ceilings, cupboards or flooring are wet",
  "Whether water is near electrics or appliances"
];

const relatedPages = [
  { icon: "⚠️", title: "Emergency Plumber Wolverhampton", text: "For active leaks, burst pipe concerns, water spreading or urgent water problems.", href: "/emergency-plumber-wolverhampton" },
  { icon: "💧", title: "Leak Repair Wolverhampton", text: "For visible water, damp, dripping pipework or under-sink leaks.", href: "/leak-repair-wolverhampton" },
  { icon: "🚿", title: "Water Pressure Wolverhampton", text: "For weak flow or water pressure issues after cold weather.", href: "/water-pressure-plumber-wolverhampton" },
  { icon: "📱", title: "Send a WhatsApp Enquiry", text: "Build a clear message with area, issue and urgency included.", href: "/contact" }
];

const areaLinks = [
  { label: "Bilston", href: "/plumber-bilston" },
  { label: "Wednesfield", href: "/plumber-wednesfield" },
  { label: "Tettenhall", href: "/plumber-tettenhall" },
  { label: "Penn", href: "/plumber-penn" },
  { label: "Bushbury", href: "/plumber-bushbury" }
];

const faqs = [
  { q: "What should I do if I think a pipe has burst?", a: "Keep safe, avoid electrical risk and describe where the water is coming from and whether it is spreading." },
  { q: "What details matter most?", a: "Your area, the affected room, whether water is leaking, and whether there is electrical or ceiling risk." },
  { q: "Is no water always a burst pipe?", a: "Not always. Describe whether it is no water, weak flow or visible leaking water rather than guessing the cause." },
  { q: "Should I use the emergency page?", a: "Use the emergency route if water is actively leaking, spreading or creating a safety risk." }
];

export default function FrozenBurstPipesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Frozen and Burst Pipes Wolverhampton | What to Know",
    description: "Frozen or burst pipe concern in Wolverhampton? Learn what to check first, what details to send and how to describe water leaks, no water and cold weather pipe issues.",
    mainEntityOfPage: `https://wolverhamptonplumber.co.uk/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton`,
    author: { "@type": "Organization", name: "Wolverhampton Plumber" },
    publisher: { "@type": "Organization", name: "Wolverhampton Plumber" },
    inLanguage: "en-GB",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <div className={styles.badge}>Cold weather advice</div>
                <h1>Frozen or Burst<span> Pipe Concern?</span></h1>
                <p>Cold weather can make pipe problems more stressful. The useful first details are whether you have no water, a visible leak, a frozen pipe concern or water spreading from pipework.</p>
                <div className={styles.heroActions}>
                  <Link href="/emergency-plumber-wolverhampton" className={styles.primaryBtn}>Emergency Plumbing Help</Link>
                  <a href={whatsappLink} className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp Enquiry</a>
                </div>
                <div className={styles.microTrust}><span>Cold weather pipes</span>
                  <span>Leaks and water loss</span>
                  <span>Urgent details</span></div>
                <small>If water is spreading or near electrics, keep safe first and describe the risk clearly.</small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick advice</span>
                  <strong>Cold weather pipes</strong>
                </div>
                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>❄️</div>
                  <p>First question</p>
                  <h2>No water or leaking water?</h2>
                  <div className={styles.requestRows}>
                    <div>
                      <span>Symptom</span>
                      <strong>No water, slow flow or visible leak?</strong>
                    </div>
                    <div>
                      <span>Place</span>
                      <strong>Kitchen, bathroom, loft, garage or outside?</strong>
                    </div>
                    <div>
                      <span>Risk</span>
                      <strong>Water near electrics or ceiling damage?</strong>
                    </div>
                  </div>
                </div>
                <div className={styles.visualBottom}>
                  <div><span>Area</span><strong>Wolverhampton / WV</strong></div>
                  <div><span>Message</span><strong>clear details first</strong></div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.articleBodySection}>
          <div className={styles.container}>
            <div className={styles.articleLayout}>
              <article className={styles.articleMain}>
                <div className={styles.articleLeadBox}>
                  <span>Short answer</span>
                  <p>For frozen or burst pipe concerns, describe what changed: no water, weak flow, visible leak, water marks, or water spreading from a pipe area.</p>
                </div>

                <h2>What to check first</h2>
                <div className={styles.articleIconGrid}>
                  {firstChecks.map((item) => (
                    <div className={styles.articleIconCard} key={item.title}>
                      <span>{item.icon}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>

                <h2>Why the wording matters</h2>
                <p>A frozen pipe concern is different from an active burst pipe. A clear message should say what you can see: no water, low flow, water marks, dripping or running water.</p>
                <h2>When it may be urgent</h2>
                <p>Treat the enquiry as urgent if water is actively leaking, spreading through ceilings, affecting electrics or causing damage to rooms.</p>

                <div className={styles.articleWarningBox}>
                  <span>⚠️</span>
                  <div>
                    <strong>Safety first.</strong>
                    <p>Keep away from electrical risk, wastewater backing up, gas concerns or any unsafe area.</p>
                  </div>
                </div>

                <h2>What to include in your message</h2>
                <div className={styles.articleChecklistBox}>
                  <div><span>📱</span><h3>Message checklist</h3></div>
                  <ul>{whatToSend.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>

                <h2>Example message</h2>
                <div className={styles.articleExampleMessage}>
                  <span>Example</span>
                  <p>Hi, I’m in Tettenhall. After cold weather, there is water dripping from pipework under the sink and the cupboard is wet. The leak is slow but I’m worried it may get worse.</p>
                </div>
              </article>

              <aside className={styles.articleAside}>
                <div className={styles.articleAsideCard}>
                  <span>Quick links</span>
                  {relatedPages.slice(0, 4).map((item) => (
                    item.href.startsWith("http") ? (
                      <a href={item.href} key={item.href} target="_blank" rel="noopener noreferrer">{item.icon} {item.title}</a>
                    ) : (
                      <Link href={item.href} key={item.href}>{item.icon} {item.title}</Link>
                    )
                  ))}
                </div>
                <div className={styles.articleAsideCard}>
                  <span>Local pages</span>
                  {areaLinks.map((item) => <Link href={item.href} key={item.href}>📍 {item.label}</Link>)}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Related pages</div>
              <h2>Choose the closest <span>enquiry route.</span></h2>
              <p>Use the page that matches the symptom, location and urgency of the issue.</p>
            </div>
            <div className={styles.cardsGrid}>
              {relatedPages.map((item) => (
                <article className={styles.serviceCard} key={item.href}>
                  <div className={styles.serviceIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.href.startsWith("http") ? (
                    <a href={item.href} className={styles.cardLink} target="_blank" rel="noopener noreferrer">Open guidance</a>
                  ) : (
                    <Link href={item.href} className={styles.cardLink}>Open page</Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>FAQs</div>
              <h2>Common <span>questions.</span></h2>
            </div>
            <div className={styles.faqGrid}>
              {faqs.map((item) => (
                <details className={styles.faqItem} key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
