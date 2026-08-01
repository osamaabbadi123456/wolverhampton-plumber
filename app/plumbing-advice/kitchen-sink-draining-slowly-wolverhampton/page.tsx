import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20my%20kitchen%20sink%20is%20draining%20slowly%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Kitchen Sink Draining Slowly Wolverhampton | What to Check First",
  description:
    "Kitchen sink draining slowly in Wolverhampton? Learn what to check first, what details to send, and when it may be a blocked sink, waste pipe or wider drain issue.",
  keywords: [
    "kitchen sink draining slowly Wolverhampton",
    "blocked kitchen sink Wolverhampton",
    "kitchen sink blockage Wolverhampton",
    "slow draining sink Wolverhampton",
    "kitchen plumber Wolverhampton",
    "blocked drains Wolverhampton",
    "sink waste pipe Wolverhampton",
  ],
  alternates: {
    canonical: "/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton",
  },
  openGraph: {
    title: "Kitchen Sink Draining Slowly in Wolverhampton? What to Check First",
    description:
      "Simple first checks for a slow-draining kitchen sink, including what to mention in a Wolverhampton plumbing enquiry.",
    url: "https://wolverhamptonplumber.co.uk/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton",
    type: "article",
    locale: "en_GB",
  },
};

const firstChecks = [
  {
    icon: "🍽️",
    title: "Check standing water",
    text: "Mention whether water stays in the sink, drains slowly, or only becomes slow when the tap runs for a while.",
  },
  {
    icon: "🧼",
    title: "Listen for gurgling",
    text: "Gurgling from the sink or waste pipe can be useful to mention in the enquiry.",
  },
  {
    icon: "👃",
    title: "Notice bad smells",
    text: "A smell from the sink or waste pipe can help explain whether the issue feels like a waste pipe or drain concern.",
  },
  {
    icon: "🧺",
    title: "Check nearby appliances",
    text: "Say whether a dishwasher or washing machine is connected under the sink or nearby.",
  },
];

const whatToSend = [
  "Your Wolverhampton area or WV postcode",
  "Whether the sink is fully blocked or draining slowly",
  "Whether water is standing in the sink",
  "Whether there is gurgling or a bad smell",
  "Whether the dishwasher or washing machine is connected nearby",
  "Whether water appears under the sink cabinet",
  "When the slow drainage started",
];

const problemPatterns = [
  {
    icon: "💧",
    title: "Water drains slowly but clears",
    text: "This is different from a fully blocked sink. Mention how long it takes to clear.",
  },
  {
    icon: "🚫",
    title: "Water does not clear",
    text: "If water stays in the sink, say that clearly and avoid adding more water.",
  },
  {
    icon: "🔁",
    title: "Water comes back up",
    text: "Water backing up can be important, especially if appliances are connected nearby.",
  },
  {
    icon: "📦",
    title: "Cupboard is wet",
    text: "If the under-sink cabinet is wet, the issue may also involve a leak, not just drainage.",
  },
];

const relatedPages = [
  {
    icon: "🍽️",
    title: "Kitchen Plumber Wolverhampton",
    text: "Use this page for kitchen sink leaks, blocked sinks, waste pipes, kitchen taps and appliance pipework.",
    href: "/kitchen-plumber-wolverhampton",
  },
  {
    icon: "🧼",
    title: "Blocked Drains Wolverhampton",
    text: "Use this page if the sink is gurgling, smells, backing up or connected to wider drainage symptoms.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    icon: "💧",
    title: "Leak Repair Wolverhampton",
    text: "Use this page if water is visible under the sink, inside the cabinet or around pipework.",
    href: "/leak-repair-wolverhampton",
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
    label: "Penn",
    href: "/plumber-penn",
  },
  {
    label: "Tettenhall",
    href: "/plumber-tettenhall",
  },
  {
    label: "Wednesfield",
    href: "/plumber-wednesfield",
  },
  {
    label: "Bushbury",
    href: "/plumber-bushbury",
  },
];

const faqs = [
  {
    q: "What should I do if my kitchen sink is draining slowly?",
    a: "Avoid adding more water if the sink is close to full. Notice whether the water drains slowly, gurgles, smells or comes back up, then include those details in the enquiry.",
  },
  {
    q: "Is a slow kitchen sink a blocked drain?",
    a: "It can be a sink waste issue or a wider drain issue. If other fixtures are also slow or there is gurgling or smell, mention that clearly.",
  },
  {
    q: "Should I mention my dishwasher or washing machine?",
    a: "Yes. If either appliance is connected under the sink or water backs up after using it, include that in your message.",
  },
  {
    q: "What if water is leaking under the kitchen sink too?",
    a: "Mention the visible water and where it appears. A slow drain plus water under the cabinet may need to be described as both a drainage and leak concern.",
  },
];

export default function KitchenSinkDrainingSlowlyArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Kitchen Sink Draining Slowly in Wolverhampton? What to Check First",
    description:
      "Simple first checks for a slow-draining kitchen sink, including what to mention in a Wolverhampton plumbing enquiry.",
    mainEntityOfPage:
      "https://wolverhamptonplumber.co.uk/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton",
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
        name: "Kitchen Sink Draining Slowly",
        item: "https://wolverhamptonplumber.co.uk/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton",
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
                  Kitchen Sink
                  <span> Draining Slowly?</span>
                </h1>

                <p>
                  A slow-draining kitchen sink can be a simple sink waste issue,
                  an appliance connection problem, or part of a wider drainage
                  concern. The useful details are whether water stands in the
                  sink, whether there is gurgling or smell, and whether water
                  appears under the cabinet.
                </p>

                <div className={styles.heroActions}>
                  <Link
                    href="/kitchen-plumber-wolverhampton"
                    className={styles.primaryBtn}
                  >
                    Kitchen Plumbing Help
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
                  <span>Slow drainage</span>
                  <span>Waste pipe clues</span>
                  <span>Appliance connections</span>
                </div>

                <small>
                  If water is leaking near electrics or appliances, keep safe
                  first and include the risk clearly in the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick advice</span>
                  <strong>Kitchen sink</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>🍽️</div>

                  <p>First check</p>
                  <h2>Is water standing?</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Drain</span>
                      <strong>Slow, blocked or backing up?</strong>
                    </div>
                    <div>
                      <span>Sound</span>
                      <strong>Any gurgling from the waste pipe?</strong>
                    </div>
                    <div>
                      <span>Cabinet</span>
                      <strong>Any water under the sink?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>dishwasher nearby?</strong>
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
                    If your kitchen sink is draining slowly, check whether water
                    stands in the sink, whether there is gurgling or smell, and
                    whether the under-sink cabinet is dry. Those details make
                    the first enquiry much clearer.
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

                <h2>Do not just say “blocked sink”</h2>

                <p>
                  A kitchen sink that drains slowly is not always fully blocked.
                  Sometimes water clears after a few minutes. Sometimes it
                  gurgles. Sometimes water comes back up after a dishwasher or
                  washing machine has run. These patterns are useful to mention.
                </p>

                <p>
                  A better first message says what happens when the tap runs,
                  whether the sink eventually clears, and whether any appliance
                  is connected under the sink.
                </p>

                <div className={styles.articleWarningBox}>
                  <span>⚠️</span>
                  <div>
                    <strong>
                      Do not keep adding water if the sink is full.
                    </strong>
                    <p>
                      If water is standing high in the sink, avoid making it
                      worse. Describe whether it is clearing slowly or not
                      clearing at all.
                    </p>
                  </div>
                </div>

                <h2>Different slow-drain patterns</h2>

                <p>
                  The pattern is often more helpful than a guess about the
                  cause. Use plain English and describe what you can see.
                </p>

                <div className={styles.articleIconGrid}>
                  {problemPatterns.map((item) => (
                    <div className={styles.articleIconCard} key={item.title}>
                      <span>{item.icon}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>

                <h2>What to include in your WhatsApp message</h2>

                <p>
                  A clear Wolverhampton kitchen sink enquiry should mention the
                  area, the drainage pattern and whether anything else is
                  affected.
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
                    Hi, I’m in Penn. My kitchen sink is draining very slowly and
                    there is some gurgling from the waste pipe. The cupboard
                    under the sink looks dry. It started this morning.
                  </p>
                </div>

                <h2>When it may be more than the kitchen sink</h2>

                <p>
                  If the kitchen sink is slow and another fixture is also slow,
                  or there is a smell from outside drains, mention that. A wider
                  drainage enquiry needs different wording from a single sink
                  problem.
                </p>

                <div className={styles.articleRelatedInline}>
                  <Link href="/blocked-drains-wolverhampton">
                    🧼 Read about blocked drains
                  </Link>
                  <Link href="/leak-repair-wolverhampton">
                    💧 Read about leaks
                  </Link>
                </div>
              </article>

              <aside className={styles.articleAside}>
                <div className={styles.articleAsideCard}>
                  <span>Quick links</span>
                  <Link href="/kitchen-plumber-wolverhampton">
                    🍽️ Kitchen plumbing
                  </Link>
                  <Link href="/blocked-drains-wolverhampton">
                    🧼 Blocked drains
                  </Link>
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
                <span> kitchen plumbing route.</span>
              </h2>
              <p>
                A slow kitchen sink can connect to kitchen plumbing, drainage or
                leaks depending on what else is happening.
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
                Slow kitchen sink
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
              <h2>Kitchen sink draining slowly in Wolverhampton?</h2>
              <p>
                Send your area, whether the sink clears slowly or stays full,
                whether there is gurgling or smell, and whether the cupboard is
                dry.
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
