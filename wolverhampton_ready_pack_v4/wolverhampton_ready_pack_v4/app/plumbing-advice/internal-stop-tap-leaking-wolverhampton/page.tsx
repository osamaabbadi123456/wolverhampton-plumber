import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Internal Stop Tap Leaking Wolverhampton | What to Check First",
  description: "Internal stop tap leaking in Wolverhampton? Learn what to check first, where stop taps are often found, what details to send and when the issue may be urgent.",
  alternates: {
    canonical: "/plumbing-advice/internal-stop-tap-leaking-wolverhampton",
  },
  openGraph: {
    title: "Internal Stop Tap Leaking Wolverhampton | What to Check First",
    description: "Internal stop tap leaking in Wolverhampton? Learn what to check first, where stop taps are often found, what details to send and when the issue may be urgent.",
    url: `https://wolverhamptonplumber.co.uk/plumbing-advice/internal-stop-tap-leaking-wolverhampton`,
    type: "article",
    locale: "en_GB",
  },
};

const firstChecks = [
  { icon: "📍", title: "Find the location", text: "Common places include under the kitchen sink, a utility cupboard, garage, cellar or under the stairs." },
  { icon: "💧", title: "Describe the leak", text: "Say whether it is a slow drip, damp patch, steady leak or water spreading into the area." },
  { icon: "🔧", title: "Do not force it", text: "If the valve is stiff or stuck, forcing it can make the problem worse." },
  { icon: "⚠️", title: "Check nearby risk", text: "Mention if water is near sockets, appliances, electrics or stored items." }
];

const whatToSend = [
  "Your Wolverhampton area or WV postcode",
  "Where the stop tap is located",
  "Whether the water is dripping, weeping or flowing",
  "Whether the valve turns or feels stuck",
  "Whether water is near electrics or appliances",
  "A safe wider photo if useful"
];

const relatedPages = [
  { icon: "💧", title: "Leak Repair Wolverhampton", text: "For visible water, dripping pipework or water spreading from a stop tap or pipe connection.", href: "/leak-repair-wolverhampton" },
  { icon: "⚠️", title: "Emergency Plumber Wolverhampton", text: "For urgent water leaks, spreading water or risk around electrics.", href: "/emergency-plumber-wolverhampton" },
  { icon: "🍽️", title: "Kitchen Plumber Wolverhampton", text: "For under-sink pipework, kitchen sink leaks and stop tap issues under kitchen units.", href: "/kitchen-plumber-wolverhampton" },
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
  { q: "Should I force a stiff stop tap?", a: "No. If it feels stuck or stiff, mention that clearly and avoid forcing it." },
  { q: "What should I include in the enquiry?", a: "Include your area, where the stop tap is, whether it is dripping or flowing, and whether it turns." },
  { q: "Is a leaking stop tap urgent?", a: "It depends on how much water is leaking, whether it is spreading, and whether it is near electrics or appliances." },
  { q: "Should I send a photo?", a: "Yes, if safe. A wider photo of the stop tap and surrounding pipework can be useful." }
];

export default function InternalStopTapLeakingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Internal Stop Tap Leaking Wolverhampton | What to Check First",
    description: "Internal stop tap leaking in Wolverhampton? Learn what to check first, where stop taps are often found, what details to send and when the issue may be urgent.",
    mainEntityOfPage: `https://wolverhamptonplumber.co.uk/plumbing-advice/internal-stop-tap-leaking-wolverhampton`,
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
                <div className={styles.badge}>Plumbing advice</div>
                <h1>Internal Stop Tap<span> Leaking?</span></h1>
                <p>If your internal stop tap is leaking, stiff, damaged or not shutting the water off properly, describe what you can see before sending a Wolverhampton plumbing enquiry.</p>
                <div className={styles.heroActions}>
                  <Link href="/leak-repair-wolverhampton" className={styles.primaryBtn}>Leak Repair Help</Link>
                  <a href={whatsappLink} className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp Enquiry</a>
                </div>
                <div className={styles.microTrust}><span>Stop tap leak</span>
                  <span>Water isolation</span>
                  <span>Safe details</span></div>
                <small>If water is spreading or near electrics, keep away from the risk area and mention the urgency clearly.</small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick advice</span>
                  <strong>Stop tap issue</strong>
                </div>
                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>🔩</div>
                  <p>First question</p>
                  <h2>Where is the stop tap?</h2>
                  <div className={styles.requestRows}>
                    <div>
                      <span>Place</span>
                      <strong>Under sink, cupboard, garage or cellar?</strong>
                    </div>
                    <div>
                      <span>Water</span>
                      <strong>Dripping, weeping or flowing?</strong>
                    </div>
                    <div>
                      <span>Use</span>
                      <strong>Can it turn or is it stuck?</strong>
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
                  <p>If an internal stop tap is leaking, say where it is located, whether it is dripping or flowing, and whether the valve can turn. Do not force a stiff stop tap.</p>
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

                <h2>What details help most?</h2>
                <p>The most useful details are simple: where the stop tap is, what the water is doing, whether the valve turns, and whether water is spreading. A wider safe photo can also help show the surrounding pipework.</p>
                <h2>When it may be urgent</h2>
                <p>Treat the enquiry as more urgent if water is spreading, the valve will not shut off water, or there is electrical risk nearby.</p>

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
                  <p>Hi, I’m in Wolverhampton. The internal stop tap under the kitchen sink is leaking slowly around the valve. It feels stiff so I have not forced it. There is no water near electrics.</p>
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
