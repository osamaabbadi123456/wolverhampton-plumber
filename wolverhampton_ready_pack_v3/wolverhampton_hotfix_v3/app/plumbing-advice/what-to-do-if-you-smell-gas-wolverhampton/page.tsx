import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Smell Gas Wolverhampton | Safety Guidance First",
  description: "Smell gas in Wolverhampton? Safety-first guidance: follow official emergency advice immediately. Gas work and gas boiler work must be handled by a Gas Safe registered engineer.",
  alternates: {
    canonical: "/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton",
  },
  openGraph: {
    title: "Smell Gas Wolverhampton | Safety Guidance First",
    description: "Smell gas in Wolverhampton? Safety-first guidance: follow official emergency advice immediately. Gas work and gas boiler work must be handled by a Gas Safe registered engineer.",
    url: `https://wolverhamptonplumber.co.uk/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton`,
    type: "article",
    locale: "en_GB",
  },
};

const firstChecks = [
  { icon: "⚠️", title: "Treat as emergency guidance", text: "Use official gas emergency advice first, not a normal enquiry form." },
  { icon: "🔥", title: "No DIY gas work", text: "Do not attempt to repair, inspect or test gas appliances yourself." },
  { icon: "📞", title: "Use official channels", text: "Use official emergency contact routes and Gas Safe guidance." },
  { icon: "✅", title: "Gas Safe only", text: "Gas appliances and gas boiler work must be handled by a Gas Safe registered engineer." }
];

const whatToSend = [
  "Do not treat gas smell as a normal enquiry",
  "Follow official gas emergency guidance immediately",
  "Gas work must be handled by a Gas Safe registered engineer",
  "Use normal plumbing enquiry only for non-gas water issues"
];

const relatedPages = [
  { icon: "⚠️", title: "Emergency Plumber Wolverhampton", text: "For urgent water issues only. Gas emergencies need official gas emergency guidance.", href: "/emergency-plumber-wolverhampton" },
  { icon: "🔥", title: "Boiler & Heating Wolverhampton", text: "For boiler and heating enquiries with clear Gas Safe wording.", href: "/boiler-heating-plumber-wolverhampton" },
  { icon: "💧", title: "Leak Repair Wolverhampton", text: "For non-gas water leaks, dripping pipework and visible water issues.", href: "/leak-repair-wolverhampton" },
  { icon: "📱", title: "Contact Page", text: "For ordinary non-gas plumbing enquiries.", href: "/contact" }
];

const areaLinks = [
  { label: "Bilston", href: "/plumber-bilston" },
  { label: "Wednesfield", href: "/plumber-wednesfield" },
  { label: "Tettenhall", href: "/plumber-tettenhall" },
  { label: "Penn", href: "/plumber-penn" },
  { label: "Bushbury", href: "/plumber-bushbury" }
];

const faqs = [
  { q: "What should I do if I smell gas?", a: "Follow official emergency guidance immediately. Do not treat it as a normal plumbing enquiry." },
  { q: "Can normal plumbers do gas work?", a: "Gas work must be handled by a Gas Safe registered engineer." },
  { q: "Should I send a WhatsApp message for gas smell?", a: "No. Follow official gas emergency guidance first." },
  { q: "Can I use this website for boiler water leaks?", a: "For non-gas water leaks around heating or plumbing, send clear details. Gas work still requires a Gas Safe registered engineer." }
];

export default function SmellGasGuidancePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Smell Gas Wolverhampton | Safety Guidance First",
    description: "Smell gas in Wolverhampton? Safety-first guidance: follow official emergency advice immediately. Gas work and gas boiler work must be handled by a Gas Safe registered engineer.",
    mainEntityOfPage: `https://wolverhamptonplumber.co.uk/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton`,
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
                <div className={styles.badge}>Safety guidance</div>
                <h1>Smell Gas<span> in Wolverhampton?</span></h1>
                <p>If you smell gas or suspect a gas leak, treat it as a safety issue first. Follow official emergency guidance immediately. Gas work must be handled by a Gas Safe registered engineer.</p>
                <div className={styles.heroActions}>
                  <Link href="https://www.gassaferegister.co.uk/help-and-advice/gas-emergencies/what-to-do-in-a-gas-emergency/" className={styles.primaryBtn}>Gas Safe Register</Link>
                  <a href={whatsappLink} className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp Enquiry</a>
                </div>
                <div className={styles.microTrust}><span>Official guidance first</span>
                  <span>Gas Safe required</span>
                  <span>Do not delay</span></div>
                <small>This website is not a gas emergency service. Follow official gas emergency guidance immediately.</small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick advice</span>
                  <strong>Gas safety</strong>
                </div>
                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>⚠️</div>
                  <p>First question</p>
                  <h2>Safety first</h2>
                  <div className={styles.requestRows}>
                    <div>
                      <span>Do</span>
                      <strong>Follow official emergency guidance</strong>
                    </div>
                    <div>
                      <span>Do not</span>
                      <strong>Do not treat it as normal plumbing</strong>
                    </div>
                    <div>
                      <span>Work</span>
                      <strong>Gas Safe engineer required</strong>
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
                  <p>If you smell gas, do not use a normal plumbing enquiry as the first step. Follow official emergency guidance immediately. Gas work must be handled by a Gas Safe registered engineer.</p>
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

                <h2>Important wording</h2>
                <p>Gas smell guidance must stay safety-first. The page should not promise attendance, diagnosis or repair. The right action is official emergency guidance and Gas Safe registered engineers.</p>
                <h2>After the emergency is handled</h2>
                <p>After the safety issue is handled by the proper emergency/Gas Safe route, non-gas plumbing enquiries can still be sent for ordinary water leaks, taps, toilets, drains and bathroom or kitchen plumbing.</p>

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
                  <p>If you smell gas, follow official emergency guidance immediately. Do not use a WhatsApp plumbing enquiry as the first safety step.</p>
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
