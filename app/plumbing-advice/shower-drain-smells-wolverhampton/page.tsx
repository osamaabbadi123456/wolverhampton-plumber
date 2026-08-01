import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20have%20a%20smell%20from%20a%20shower%20drain%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Shower Drain Smells Wolverhampton | What to Check First",
  description:
    "Shower drain smells in Wolverhampton? Learn what details to check first, including slow drainage, gurgling, bathroom waste smells and when to send a plumbing enquiry.",
  keywords: [
    "shower drain smells Wolverhampton",
    "smelly shower drain Wolverhampton",
    "bathroom drain smell Wolverhampton",
    "blocked shower drain Wolverhampton",
    "blocked drains Wolverhampton",
    "bathroom plumber Wolverhampton",
    "shower draining slowly Wolverhampton",
    "plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/plumbing-advice/shower-drain-smells-wolverhampton",
  },
  openGraph: {
    title: "Shower Drain Smells in Wolverhampton? What to Check First",
    description:
      "Simple first checks when a shower drain smells, including slow drainage, gurgling and what details to send in a Wolverhampton plumbing enquiry.",
    url: "https://wolverhamptonplumber.co.uk/plumbing-advice/shower-drain-smells-wolverhampton",
    type: "article",
    locale: "en_GB",
  },
};

const firstChecks = [
  {
    icon: "🚿",
    title: "Check shower drainage",
    text: "Mention whether water drains normally, slowly, or stays in the shower tray after use.",
  },
  {
    icon: "👃",
    title: "Describe the smell",
    text: "Say whether the smell is mild, strong, constant, or only appears after the shower is used.",
  },
  {
    icon: "🧼",
    title: "Listen for gurgling",
    text: "Gurgling from the shower, basin, bath or toilet can be useful to mention.",
  },
  {
    icon: "🛁",
    title: "Check nearby fixtures",
    text: "If the bath, basin or toilet is also slow, smells or gurgles, include that in the enquiry.",
  },
];

const smellPatterns = [
  {
    icon: "⏱️",
    title: "Smell only after use",
    text: "If the smell appears after showering, mention how soon it starts and how long it lasts.",
  },
  {
    icon: "🔁",
    title: "Smell comes and goes",
    text: "Intermittent smells are worth describing, especially if they happen at certain times.",
  },
  {
    icon: "💧",
    title: "Slow water plus smell",
    text: "Slow drainage with smell is more useful to mention than smell alone.",
  },
  {
    icon: "⚠️",
    title: "Wastewater backing up",
    text: "If dirty water backs up into the shower tray, treat the enquiry as more urgent.",
  },
];

const whatToSend = [
  "Your Wolverhampton area or WV postcode",
  "Whether the smell is from the shower drain, bath, basin or toilet",
  "Whether the shower drains slowly or normally",
  "Whether there is gurgling from nearby fixtures",
  "Whether water ever backs up into the shower tray",
  "Whether the smell appears after use or all the time",
  "Whether other bathroom fixtures are also affected",
  "A safe photo only if it helps explain the shower or drain area",
];

const relatedPages = [
  {
    icon: "🧼",
    title: "Blocked Drains Wolverhampton",
    text: "Use this page if there are smells, gurgling, slow drainage or water backing up from shower, bath, basin or outside drains.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    icon: "🛁",
    title: "Bathroom Plumber Wolverhampton",
    text: "Use this page if the issue is mainly around the shower, bath, basin, toilet or bathroom pipework.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    icon: "⚠️",
    title: "Emergency Plumber Wolverhampton",
    text: "Use this page if wastewater is backing up, water is spreading, or the situation feels urgent.",
    href: "/emergency-plumber-wolverhampton",
  },
  {
    icon: "📱",
    title: "Send a WhatsApp Enquiry",
    text: "Build a clear message with area, issue, urgency and useful details included.",
    href: "/contact",
  },
];

const areaLinks = [
  {
    label: "Bilston",
    href: "/plumber-bilston",
  },
  {
    label: "Wednesfield",
    href: "/plumber-wednesfield",
  },
  {
    label: "Tettenhall",
    href: "/plumber-tettenhall",
  },
  {
    label: "Penn",
    href: "/plumber-penn",
  },
  {
    label: "Bushbury",
    href: "/plumber-bushbury",
  },
];

const faqs = [
  {
    q: "Why does my shower drain smell?",
    a: "A shower drain smell can happen with slow drainage, trapped debris, gurgling or bathroom waste pipe issues. The useful first step is to describe the smell and whether the shower drains slowly.",
  },
  {
    q: "What should I include in a shower drain smell enquiry?",
    a: "Include your area, whether the shower drains slowly, whether there is gurgling, whether nearby fixtures are affected, and whether the smell appears after use or all the time.",
  },
  {
    q: "Is a smelly shower drain a blocked drain?",
    a: "It can be related to a drainage issue, especially if the shower is slow to drain, gurgles, or water backs up. Mention those details clearly.",
  },
  {
    q: "What if dirty water comes back into the shower?",
    a: "If wastewater backs up into the shower tray, describe it as urgent and avoid using the fixture until the situation is clearer.",
  },
];

export default function ShowerDrainSmellsArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Shower Drain Smells in Wolverhampton? What to Check First",
    description:
      "Simple first checks when a shower drain smells, including slow drainage, gurgling and what details to send in a Wolverhampton plumbing enquiry.",
    mainEntityOfPage:
      "https://wolverhamptonplumber.co.uk/plumbing-advice/shower-drain-smells-wolverhampton",
    author: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
    },
    publisher: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
    },
    inLanguage: "en-GB",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://wolverhamptonplumber.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plumbing Advice",
        item: "https://wolverhamptonplumber.co.uk/plumbing-advice",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Shower Drain Smells",
        item: "https://wolverhamptonplumber.co.uk/plumbing-advice/shower-drain-smells-wolverhampton",
      },
    ],
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
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <div className={styles.badge}>Plumbing advice</div>

                <h1>
                  Shower Drain
                  <span> Smells?</span>
                </h1>

                <p>
                  A smell from a shower drain can be easier to explain when you
                  describe the pattern: whether the shower drains slowly,
                  whether there is gurgling, whether nearby fixtures are
                  affected, and whether the smell appears after use or all the
                  time.
                </p>

                <div className={styles.heroActions}>
                  <Link
                    href="/blocked-drains-wolverhampton"
                    className={styles.primaryBtn}
                  >
                    Blocked Drain Help
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Shower smells</span>
                  <span>Slow drainage</span>
                  <span>Bathroom waste clues</span>
                </div>

                <small>
                  If wastewater is backing up, water is spreading, or the smell
                  seems unsafe, keep away from the affected area and describe
                  the situation clearly.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick advice</span>
                  <strong>Shower drain</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>🚿</div>

                  <p>First question</p>
                  <h2>Slow drain or smell only?</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Drain</span>
                      <strong>Does water clear slowly?</strong>
                    </div>
                    <div>
                      <span>Sound</span>
                      <strong>Any gurgling nearby?</strong>
                    </div>
                    <div>
                      <span>Other</span>
                      <strong>Bath, basin or toilet affected?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>after use or all the time?</strong>
                  </div>
                  <div>
                    <span>Area</span>
                    <strong>Wolverhampton / WV</strong>
                  </div>
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
                  <p>
                    If a shower drain smells, check whether the shower drains
                    slowly, whether there is gurgling, and whether the smell
                    appears after use or all the time. These details are more
                    useful than simply saying “bathroom smell”.
                  </p>
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

                <h2>Describe the smell pattern</h2>

                <p>
                  A shower drain smell can be constant, occasional, stronger
                  after use, or linked with slow water clearing from the shower
                  tray. The pattern matters because it helps separate a simple
                  bathroom smell enquiry from a drainage enquiry.
                </p>

                <p>
                  Instead of guessing the cause, send what you can see, smell
                  and hear. Say whether the shower drains slowly, whether the
                  bath or basin is also slow, and whether any water backs up.
                </p>

                <div className={styles.articleWarningBox}>
                  <span>⚠️</span>
                  <div>
                    <strong>Wastewater backing up is more urgent.</strong>
                    <p>
                      If dirty water comes back into the shower tray, avoid
                      using the fixture and describe the issue clearly as
                      urgent.
                    </p>
                  </div>
                </div>

                <h2>Useful smell and drainage patterns</h2>

                <p>
                  These details make a Wolverhampton shower drain enquiry easier
                  to understand.
                </p>

                <div className={styles.articleIconGrid}>
                  {smellPatterns.map((item) => (
                    <div className={styles.articleIconCard} key={item.title}>
                      <span>{item.icon}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>

                <h2>What to include in your WhatsApp message</h2>

                <p>
                  A clear message should mention the area, the shower drain
                  symptom, nearby fixtures and urgency.
                </p>

                <div className={styles.articleChecklistBox}>
                  <div>
                    <span>📱</span>
                    <h3>Message checklist</h3>
                  </div>

                  <ul>
                    {whatToSend.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <h2>Example message</h2>

                <div className={styles.articleExampleMessage}>
                  <span>Example</span>
                  <p>
                    Hi, I’m in Bushbury. The shower drain smells after use and
                    the water clears slowly from the tray. The basin seems
                    normal but there is some gurgling from the shower waste.
                  </p>
                </div>

                <h2>When it may be a wider drain issue</h2>

                <p>
                  If the shower smells and the bath, basin, toilet or outside
                  drain also has slow drainage, smell or gurgling, mention all
                  affected fixtures. More than one symptom can make the enquiry
                  clearer.
                </p>

                <div className={styles.articleRelatedInline}>
                  <Link href="/blocked-drains-wolverhampton">
                    🧼 Blocked drains page
                  </Link>
                  <Link href="/bathroom-plumber-wolverhampton">
                    🛁 Bathroom plumbing page
                  </Link>
                </div>
              </article>

              <aside className={styles.articleAside}>
                <div className={styles.articleAsideCard}>
                  <span>Quick links</span>
                  <Link href="/blocked-drains-wolverhampton">
                    🧼 Blocked drains
                  </Link>
                  <Link href="/bathroom-plumber-wolverhampton">
                    🛁 Bathroom plumbing
                  </Link>
                  <Link href="/emergency-plumber-wolverhampton">
                    ⚠️ Emergency plumbing
                  </Link>
                  <Link href="/contact">📱 Contact form</Link>
                </div>

                <div className={styles.articleAsideCard}>
                  <span>Local pages</span>
                  {areaLinks.map((item) => (
                    <Link href={item.href} key={item.href}>
                      📍 {item.label}
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Related pages</div>
              <h2>
                Choose the closest
                <span> bathroom drainage route.</span>
              </h2>
              <p>
                Shower drain smells can connect to blocked drains, bathroom
                plumbing or urgent drainage concerns depending on the symptoms.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {relatedPages.map((item) => (
                <article className={styles.serviceCard} key={item.href}>
                  <div className={styles.serviceIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href} className={styles.cardLink}>
                    Open page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>FAQs</div>
              <h2>
                Shower drain smell
                <span> questions.</span>
              </h2>
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

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalBox}>
              <h2>Shower drain smell in Wolverhampton?</h2>
              <p>
                Send your area, whether the shower drains slowly, whether there
                is gurgling, and whether other bathroom fixtures are affected.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Build Enquiry
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
