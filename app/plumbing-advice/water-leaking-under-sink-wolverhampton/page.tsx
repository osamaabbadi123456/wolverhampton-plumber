import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20have%20water%20leaking%20under%20a%20sink%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Water Leaking Under Sink Wolverhampton | What to Check First",
  description:
    "Water leaking under a sink in Wolverhampton? Learn what details to check first, including tap base leaks, waste pipes, cabinet water and when to send a plumbing enquiry.",
  keywords: [
    "water leaking under sink Wolverhampton",
    "under sink leak Wolverhampton",
    "kitchen sink leak Wolverhampton",
    "bathroom basin leak Wolverhampton",
    "leak repair Wolverhampton",
    "tap leak Wolverhampton",
    "sink pipe leak Wolverhampton",
    "plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/plumbing-advice/water-leaking-under-sink-wolverhampton",
  },
  openGraph: {
    title: "Water Leaking Under a Sink in Wolverhampton? What to Check First",
    description:
      "Simple first checks when water appears under a kitchen sink or bathroom basin, including what details to send in a Wolverhampton plumbing enquiry.",
    url: "https://wolverhamptonplumber.co.uk/plumbing-advice/water-leaking-under-sink-wolverhampton",
    type: "article",
    locale: "en_GB",
  },
};

const firstChecks = [
  {
    icon: "📦",
    title: "Check the cabinet",
    text: "Say whether the inside of the cupboard or vanity unit is wet, damp, dripping or holding standing water.",
  },
  {
    icon: "🚰",
    title: "Run the tap briefly only if safe",
    text: "If water appears only when the tap runs, mention that. Do not keep running water if the leak is spreading.",
  },
  {
    icon: "🧼",
    title: "Look near the waste pipe",
    text: "Water near the trap or waste pipe is different from water around the tap base or supply pipes.",
  },
  {
    icon: "💧",
    title: "Watch the leak speed",
    text: "Mention whether it is a slow drip, steady leak, running water or water spreading into the cabinet.",
  },
];

const leakLocations = [
  {
    icon: "🔧",
    title: "Tap base",
    text: "Water around the base of the tap may appear when the tap is used. Say if the top of the sink is wet too.",
  },
  {
    icon: "🪠",
    title: "Waste pipe or trap",
    text: "Water near the sink waste or trap can appear when the sink drains.",
  },
  {
    icon: "🚿",
    title: "Supply pipe",
    text: "A leak from pipework feeding the tap may drip even when the sink is not being used.",
  },
  {
    icon: "🍽️",
    title: "Appliance connection",
    text: "In kitchens, dishwashers or washing machines can share pipework under the sink.",
  },
];

const whatToSend = [
  "Your Wolverhampton area or WV postcode",
  "Whether it is a kitchen sink or bathroom basin",
  "Where the water appears: tap base, waste pipe, supply pipe or cabinet floor",
  "Whether the leak happens when the tap runs or all the time",
  "Whether the sink drains normally or slowly",
  "Whether a dishwasher or washing machine is connected nearby",
  "Whether water is near electrics or appliances",
  "A safe photo of the wider under-sink area if useful",
];

const relatedPages = [
  {
    icon: "💧",
    title: "Leak Repair Wolverhampton",
    text: "Use this page if the main issue is visible water, damp, dripping pipework or water spreading under a sink.",
    href: "/leak-repair-wolverhampton",
  },
  {
    icon: "🍽️",
    title: "Kitchen Plumber Wolverhampton",
    text: "Use this page if the leak is under a kitchen sink, near appliance pipework, waste pipes or kitchen taps.",
    href: "/kitchen-plumber-wolverhampton",
  },
  {
    icon: "🛁",
    title: "Bathroom Plumber Wolverhampton",
    text: "Use this page if the leak is under a bathroom basin, vanity unit, bath, shower or toilet area.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    icon: "🔧",
    title: "Tap Repair Wolverhampton",
    text: "Use this page if the water seems to come from the tap base, tap body or a dripping tap.",
    href: "/tap-repair-wolverhampton",
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
    q: "What should I do first if water is leaking under a sink?",
    a: "If safe, check where the water appears and whether it happens when the tap runs or all the time. Keep away from electrical risk and avoid making the leak worse.",
  },
  {
    q: "What details should I send for an under-sink leak?",
    a: "Send your area, whether it is kitchen or bathroom, where the water appears, whether it happens when the tap runs, and whether the sink drains normally.",
  },
  {
    q: "Is water under a sink always a pipe leak?",
    a: "Not always. It can come from the tap base, waste pipe, trap, supply pipe, appliance connection or nearby fitting.",
  },
  {
    q: "Should I send a photo?",
    a: "Yes, if safe. A wider photo of the under-sink area can be more useful than a close-up only.",
  },
];

export default function WaterLeakingUnderSinkArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Water Leaking Under a Sink in Wolverhampton? What to Check First",
    description:
      "Simple first checks when water appears under a kitchen sink or bathroom basin, including what details to send in a Wolverhampton plumbing enquiry.",
    mainEntityOfPage:
      "https://wolverhamptonplumber.co.uk/plumbing-advice/water-leaking-under-sink-wolverhampton",
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
        name: "Water Leaking Under Sink",
        item: "https://wolverhamptonplumber.co.uk/plumbing-advice/water-leaking-under-sink-wolverhampton",
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
                  Water Leaking
                  <span> Under a Sink?</span>
                </h1>

                <p>
                  Water under a kitchen sink or bathroom basin can come from the
                  tap, waste pipe, trap, supply pipe or appliance connection.
                  The most useful first details are where the water appears,
                  whether it happens when the tap runs, and whether the cabinet
                  is wet.
                </p>

                <div className={styles.heroActions}>
                  <Link
                    href="/leak-repair-wolverhampton"
                    className={styles.primaryBtn}
                  >
                    Leak Repair Help
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
                  <span>Under-sink leaks</span>
                  <span>Kitchen or bathroom</span>
                  <span>Safe photo details</span>
                </div>

                <small>
                  If water is near electrics, sockets or appliances, keep away
                  from the risk area and mention it clearly in the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick advice</span>
                  <strong>Under-sink leak</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>💧</div>

                  <p>First question</p>
                  <h2>Where is the water?</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Kitchen sink or bathroom basin?</strong>
                    </div>
                    <div>
                      <span>When</span>
                      <strong>Only when the tap runs or all the time?</strong>
                    </div>
                    <div>
                      <span>Place</span>
                      <strong>Tap base, waste pipe or cabinet floor?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>wider photo if safe</strong>
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
                    If water is leaking under a sink, first describe where the
                    water appears, whether it happens when the tap runs, and
                    whether the cabinet is wet. A safe wider photo can help
                    explain the issue.
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

                <h2>Do not guess the leak source</h2>

                <p>
                  Water under a sink can be misleading. A wet cabinet floor does
                  not automatically mean one specific pipe is leaking. Water can
                  travel from the tap base, waste pipe, supply pipe or appliance
                  connection before collecting at the bottom of the cupboard.
                </p>

                <p>
                  A better first message says what is visible: where the water
                  appears, when it appears, how fast it leaks and whether the
                  sink is draining normally.
                </p>

                <div className={styles.articleWarningBox}>
                  <span>⚠️</span>
                  <div>
                    <strong>Water near electrics needs caution.</strong>
                    <p>
                      If water is near sockets, appliances, extension leads or
                      electrical items, keep away from the risk area and include
                      that detail clearly.
                    </p>
                  </div>
                </div>

                <h2>Common under-sink leak locations</h2>

                <p>
                  These are useful ways to describe the leak without trying to
                  diagnose it.
                </p>

                <div className={styles.articleIconGrid}>
                  {leakLocations.map((item) => (
                    <div className={styles.articleIconCard} key={item.title}>
                      <span>{item.icon}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>

                <h2>What to include in your WhatsApp message</h2>

                <p>
                  A clear Wolverhampton under-sink leak enquiry should mention
                  the room, leak location and whether the leak appears during
                  use or all the time.
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
                    Hi, I’m in Bilston. There is water under the kitchen sink
                    inside the cupboard. It seems to appear when the tap is
                    running. The sink drains normally and there is a dishwasher
                    pipe nearby.
                  </p>
                </div>

                <h2>When it may be urgent</h2>

                <p>
                  If the leak is steady, water is spreading, the cabinet is full
                  of water, or water is near electrics or appliances, describe
                  it as urgent. If it is a slow drip and contained, still
                  explain clearly when it happens and where the water appears.
                </p>

                <div className={styles.articleRelatedInline}>
                  <Link href="/leak-repair-wolverhampton">
                    💧 Leak repair page
                  </Link>
                  <Link href="/emergency-plumber-wolverhampton">
                    ⚠️ Urgent plumbing enquiry
                  </Link>
                </div>
              </article>

              <aside className={styles.articleAside}>
                <div className={styles.articleAsideCard}>
                  <span>Quick links</span>
                  <Link href="/leak-repair-wolverhampton">💧 Leak repair</Link>
                  <Link href="/kitchen-plumber-wolverhampton">
                    🍽️ Kitchen plumbing
                  </Link>
                  <Link href="/bathroom-plumber-wolverhampton">
                    🛁 Bathroom plumbing
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
                <span> leak route.</span>
              </h2>
              <p>
                An under-sink leak can connect to leak repair, kitchen plumbing,
                bathroom plumbing or tap repair depending on where the water
                appears.
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
                Under-sink leak
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
              <h2>Water leaking under a sink in Wolverhampton?</h2>
              <p>
                Send whether it is kitchen or bathroom, where the water appears,
                when it leaks, and whether water is near electrics or
                appliances.
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
