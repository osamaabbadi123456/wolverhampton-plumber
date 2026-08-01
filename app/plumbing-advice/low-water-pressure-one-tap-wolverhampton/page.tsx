import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20have%20low%20water%20pressure%20from%20one%20tap%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Low Water Pressure From One Tap Wolverhampton | What It Means",
  description:
    "Low water pressure from one tap in Wolverhampton? Learn what details to check first, including hot or cold flow, kitchen or bathroom tap, and when to send a plumbing enquiry.",
  keywords: [
    "low water pressure one tap Wolverhampton",
    "weak water flow one tap Wolverhampton",
    "tap low pressure Wolverhampton",
    "water pressure plumber Wolverhampton",
    "tap repair Wolverhampton",
    "bathroom tap low pressure Wolverhampton",
    "kitchen tap low pressure Wolverhampton",
  ],
  alternates: {
    canonical: "/plumbing-advice/low-water-pressure-one-tap-wolverhampton",
  },
  openGraph: {
    title: "Low Water Pressure From One Tap in Wolverhampton? What to Check",
    description:
      "Simple first checks when only one tap has weak flow, including whether hot, cold or both sides are affected.",
    url: "https://wolverhamptonplumber.co.uk/plumbing-advice/low-water-pressure-one-tap-wolverhampton",
    type: "article",
    locale: "en_GB",
  },
};

const firstChecks = [
  {
    icon: "🚰",
    title: "Check one tap or several",
    text: "Say clearly whether only one tap is weak or whether other taps and showers are affected too.",
  },
  {
    icon: "🔥",
    title: "Hot, cold or both?",
    text: "A hot-only problem is different from cold-only or both hot and cold being weak.",
  },
  {
    icon: "🍽️",
    title: "Kitchen or bathroom?",
    text: "Mention whether the weak tap is in the kitchen, bathroom, bath, basin, utility area or outside.",
  },
  {
    icon: "⏱️",
    title: "Sudden or gradual?",
    text: "Say whether the weak flow started suddenly or has slowly become worse over time.",
  },
];

const flowPatterns = [
  {
    icon: "💧",
    title: "Starts strong then fades",
    text: "This pattern is useful to mention because it is different from a tap that is always weak.",
  },
  {
    icon: "🔧",
    title: "Handle feels stiff or loose",
    text: "If the tap handle is stiff, loose or does not fully open, include that in the enquiry.",
  },
  {
    icon: "🫧",
    title: "Spluttering or uneven flow",
    text: "Say if the water splutters, pulses, or comes out unevenly from the tap.",
  },
  {
    icon: "💦",
    title: "Leak appears nearby",
    text: "If weak flow comes with visible water under the sink or around pipework, mention the leak too.",
  },
];

const whatToSend = [
  "Your Wolverhampton area or WV postcode",
  "Which tap is affected",
  "Whether hot water, cold water or both are weak",
  "Whether other taps and showers are normal",
  "Whether the weak flow started suddenly or gradually",
  "Whether the tap handle feels stiff, loose or normal",
  "Whether any leak, damp or water under the sink is visible",
];

const relatedPages = [
  {
    icon: "🚿",
    title: "Water Pressure Plumber Wolverhampton",
    text: "Use this page if several taps, showers or the whole home have weak water flow.",
    href: "/water-pressure-plumber-wolverhampton",
  },
  {
    icon: "🔧",
    title: "Tap Repair Wolverhampton",
    text: "Use this page if the issue seems local to one tap, tap handle, tap base or mixer tap.",
    href: "/tap-repair-wolverhampton",
  },
  {
    icon: "🍽️",
    title: "Kitchen Plumber Wolverhampton",
    text: "Use this page if the weak tap is in the kitchen or connected with under-sink pipework.",
    href: "/kitchen-plumber-wolverhampton",
  },
  {
    icon: "🛁",
    title: "Bathroom Plumber Wolverhampton",
    text: "Use this page if the weak flow is from a basin tap, bath tap, shower or bathroom fitting.",
    href: "/bathroom-plumber-wolverhampton",
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
    q: "What does it mean if only one tap has low pressure?",
    a: "If only one tap has weak flow and the rest of the property seems normal, the issue may be local to that tap, fitting or nearby pipework.",
  },
  {
    q: "Should I mention whether hot or cold water is weak?",
    a: "Yes. This is one of the most useful details. Hot-only, cold-only and both hot and cold being weak can point to different enquiry routes.",
  },
  {
    q: "What if the whole house has low pressure?",
    a: "If several taps or showers are affected, say that clearly and use the water pressure page rather than treating it as a single tap issue.",
  },
  {
    q: "What if low pressure comes with a leak?",
    a: "Mention the visible water, where it appears, and whether it is under the sink, around the tap base or near pipework.",
  },
];

export default function LowWaterPressureOneTapArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Low Water Pressure From One Tap in Wolverhampton? What to Check First",
    description:
      "Simple first checks when only one tap has weak flow, including whether hot, cold or both sides are affected.",
    mainEntityOfPage:
      "https://wolverhamptonplumber.co.uk/plumbing-advice/low-water-pressure-one-tap-wolverhampton",
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
        name: "Low Water Pressure From One Tap",
        item: "https://wolverhamptonplumber.co.uk/plumbing-advice/low-water-pressure-one-tap-wolverhampton",
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
                  Low Water Pressure
                  <span> From One Tap?</span>
                </h1>

                <p>
                  If only one tap has weak water flow, the issue may be local to
                  that tap rather than the whole property. The most useful first
                  details are which tap is affected, whether hot or cold water
                  is weak, and whether other taps or showers are normal.
                </p>

                <div className={styles.heroActions}>
                  <Link
                    href="/water-pressure-plumber-wolverhampton"
                    className={styles.primaryBtn}
                  >
                    Water Pressure Help
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
                  <span>One tap or several?</span>
                  <span>Hot, cold or both?</span>
                  <span>Kitchen or bathroom?</span>
                </div>

                <small>
                  If weak flow appears with visible water, damp, or electrical
                  risk nearby, keep safe first and include that detail clearly
                  in the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick advice</span>
                  <strong>Water flow</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>🚰</div>

                  <p>First question</p>
                  <h2>One tap or whole home?</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Tap</span>
                      <strong>Kitchen, bathroom, bath or basin?</strong>
                    </div>
                    <div>
                      <span>Water</span>
                      <strong>Hot, cold or both weak?</strong>
                    </div>
                    <div>
                      <span>Other</span>
                      <strong>Are other taps normal?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>sudden or gradual?</strong>
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
                    If only one tap has low pressure, say which tap it is,
                    whether hot or cold water is affected, and whether other
                    taps and showers are normal. This separates a single tap
                    issue from a wider water pressure problem.
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

                <h2>Why “one tap” matters</h2>

                <p>
                  Low water pressure across a whole home is different from weak
                  flow at one tap. If the kitchen tap is weak but the bathroom
                  taps and shower are normal, that is useful information. If
                  every outlet is weak, the enquiry should be described as a
                  wider pressure issue.
                </p>

                <p>
                  The first message should not guess the cause. It should simply
                  explain the pattern: one tap, several taps, shower only, hot
                  water only, cold water only, or the whole property.
                </p>

                <div className={styles.articleWarningBox}>
                  <span>💧</span>
                  <div>
                    <strong>Weak flow plus visible water is important.</strong>
                    <p>
                      If low flow appears with water under the sink, damp, or a
                      pipework leak, mention the leak as well as the pressure
                      problem.
                    </p>
                  </div>
                </div>

                <h2>Useful flow patterns to mention</h2>

                <p>
                  A weak tap can behave in different ways. These small details
                  make a Wolverhampton plumbing enquiry much clearer.
                </p>

                <div className={styles.articleIconGrid}>
                  {flowPatterns.map((item) => (
                    <div className={styles.articleIconCard} key={item.title}>
                      <span>{item.icon}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>

                <h2>What to include in your WhatsApp message</h2>

                <p>
                  Keep the message short and factual. The aim is to describe the
                  tap, the water flow and the local area.
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
                    Hi, I’m in Wednesfield. The cold water from one bathroom
                    basin tap is very weak. Hot water seems normal and the
                    kitchen tap seems normal. It started yesterday.
                  </p>
                </div>

                <h2>When it is not just one tap</h2>

                <p>
                  If several taps, showers or the whole property have weak water
                  flow, use the water pressure route rather than describing it
                  as a single tap issue. If the problem is only one stiff,
                  dripping or loose tap, the tap repair route may fit better.
                </p>

                <div className={styles.articleRelatedInline}>
                  <Link href="/water-pressure-plumber-wolverhampton">
                    🚿 Water pressure page
                  </Link>
                  <Link href="/tap-repair-wolverhampton">
                    🔧 Tap repair page
                  </Link>
                </div>
              </article>

              <aside className={styles.articleAside}>
                <div className={styles.articleAsideCard}>
                  <span>Quick links</span>
                  <Link href="/water-pressure-plumber-wolverhampton">
                    🚿 Water pressure
                  </Link>
                  <Link href="/tap-repair-wolverhampton">🔧 Tap repair</Link>
                  <Link href="/leak-repair-wolverhampton">💧 Leak repair</Link>
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
                <span> water-flow route.</span>
              </h2>
              <p>
                A weak tap can be a tap issue, a pressure issue, a room-specific
                problem or a leak-related enquiry.
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
                One weak tap
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
              <h2>Low water pressure from one tap?</h2>
              <p>
                Send which tap is affected, whether hot or cold water is weak,
                whether other taps are normal, and your Wolverhampton area.
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
