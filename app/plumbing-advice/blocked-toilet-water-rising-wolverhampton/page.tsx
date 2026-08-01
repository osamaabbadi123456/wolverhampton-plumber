import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20my%20toilet%20water%20is%20rising%20after%20flushing%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Toilet Water Rising After Flushing Wolverhampton | What to Do First",
  description:
    "Toilet water rising after flushing in Wolverhampton? Learn what to do first, what not to do, what details to send, and when it may be a blocked toilet or wider drain issue.",
  keywords: [
    "toilet water rising Wolverhampton",
    "blocked toilet Wolverhampton",
    "toilet water rises after flushing",
    "toilet not clearing Wolverhampton",
    "blocked toilet plumber Wolverhampton",
    "emergency plumber Wolverhampton",
    "blocked drains Wolverhampton",
  ],
  alternates: {
    canonical: "/plumbing-advice/blocked-toilet-water-rising-wolverhampton",
  },
  openGraph: {
    title:
      "Toilet Water Rising After Flushing in Wolverhampton? What to Do First",
    description:
      "Simple first steps if toilet water rises after flushing, including what not to do and what details to send in a Wolverhampton plumbing enquiry.",
    url: "https://wolverhamptonplumber.co.uk/plumbing-advice/blocked-toilet-water-rising-wolverhampton",
    type: "article",
    locale: "en_GB",
  },
};

const firstSteps = [
  {
    icon: "🚽",
    title: "Stop flushing",
    text: "If the water level rises after flushing, do not keep flushing. Repeated flushing can make the toilet overflow.",
  },
  {
    icon: "🧻",
    title: "Do not add more paper",
    text: "Avoid putting more toilet paper or wipes into the toilet while it is not clearing properly.",
  },
  {
    icon: "💧",
    title: "Watch the water level",
    text: "Notice whether the water is rising, slowly dropping, staying high, or close to overflowing.",
  },
  {
    icon: "🛁",
    title: "Check nearby fixtures",
    text: "If the bath, shower or basin is also slow to drain, mention that because it may point to a wider waste or drain issue.",
  },
];

const whatToSend = [
  "Your Wolverhampton area or WV postcode",
  "Whether the toilet water rises after every flush",
  "Whether the toilet is the only affected fixture",
  "Whether the bath, shower or basin drains slowly too",
  "Whether water is close to overflowing",
  "When the problem started",
  "A photo only if safe and useful",
];

const warningSigns = [
  {
    icon: "⚠️",
    title: "Water close to overflowing",
    text: "Treat this as more urgent and avoid flushing again.",
  },
  {
    icon: "🧼",
    title: "Bad smell or gurgling",
    text: "Smells or gurgling from nearby waste pipes can be useful details.",
  },
  {
    icon: "🚿",
    title: "Shower or bath also slow",
    text: "More than one slow fixture may suggest the issue is not only the toilet.",
  },
  {
    icon: "📍",
    title: "Only one toilet affected",
    text: "Say this clearly if the rest of the bathroom seems normal.",
  },
];

const relatedPages = [
  {
    icon: "🚽",
    title: "Blocked Toilet Wolverhampton",
    text: "Use this page if the main issue is toilet water rising, toilet not clearing or an overflowing toilet concern.",
    href: "/blocked-toilet-wolverhampton",
  },
  {
    icon: "⚠️",
    title: "Emergency Plumber Wolverhampton",
    text: "Use this page if water is overflowing, spreading or the situation feels urgent today.",
    href: "/emergency-plumber-wolverhampton",
  },
  {
    icon: "🧼",
    title: "Blocked Drains Wolverhampton",
    text: "Use this page if other fixtures are also slow, gurgling or backing up.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    icon: "📱",
    title: "Send a WhatsApp Enquiry",
    text: "Use the enquiry wizard to build a clear message with area, issue and urgency included.",
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
    label: "Bushbury",
    href: "/plumber-bushbury",
  },
  {
    label: "Penn",
    href: "/plumber-penn",
  },
  {
    label: "Tettenhall",
    href: "/plumber-tettenhall",
  },
];

const faqs = [
  {
    q: "Should I flush again if toilet water is rising?",
    a: "No. If the toilet water rises after flushing, avoid flushing again because the bowl may overflow.",
  },
  {
    q: "What does it mean if toilet water rises then slowly drops?",
    a: "It can suggest the toilet is partly blocked or draining slowly. Mention whether it happens every time and whether other bathroom fixtures are affected.",
  },
  {
    q: "What if the bath or shower is also draining slowly?",
    a: "If the bath, shower or basin is also slow, include that in the message because the issue may be wider than the toilet itself.",
  },
  {
    q: "What should I send in a Wolverhampton blocked toilet enquiry?",
    a: "Send your area, whether water rises after flushing, whether the toilet is fully blocked, whether other fixtures are affected, and how urgent it feels.",
  },
];

export default function ToiletWaterRisingArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Toilet Water Rising After Flushing in Wolverhampton? What to Do First",
    description:
      "Simple first steps if toilet water rises after flushing, including what not to do and what details to send in a Wolverhampton plumbing enquiry.",
    mainEntityOfPage:
      "https://wolverhamptonplumber.co.uk/plumbing-advice/blocked-toilet-water-rising-wolverhampton",
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
        name: "Toilet Water Rising After Flushing",
        item: "https://wolverhamptonplumber.co.uk/plumbing-advice/blocked-toilet-water-rising-wolverhampton",
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
                  Toilet Water Rising
                  <span> After Flushing?</span>
                </h1>

                <p>
                  If toilet water rises after flushing, the first thing is not
                  to panic and not to keep flushing. The water level, nearby
                  fixtures and how quickly the toilet clears are useful details
                  to include in a Wolverhampton plumbing enquiry.
                </p>

                <div className={styles.heroActions}>
                  <Link
                    href="/blocked-toilet-wolverhampton"
                    className={styles.primaryBtn}
                  >
                    Blocked Toilet Help
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
                  <span>Do not keep flushing</span>
                  <span>Check nearby fixtures</span>
                  <span>Send clear details</span>
                </div>

                <small>
                  This guide is for general plumbing enquiry information. If
                  water is overflowing, near electrics, or creating a safety
                  risk, keep safe first.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick advice</span>
                  <strong>Blocked toilet</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>🚽</div>

                  <p>First action</p>
                  <h2>Do not flush again</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Watch</span>
                      <strong>Is the water rising or dropping?</strong>
                    </div>
                    <div>
                      <span>Check</span>
                      <strong>Are bath, shower or basin slow too?</strong>
                    </div>
                    <div>
                      <span>Send</span>
                      <strong>Area, issue and urgency</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>water level after flush</strong>
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
                    If toilet water rises after flushing, stop flushing, wait to
                    see whether the level drops, keep the area clear, and check
                    whether nearby bathroom fixtures are also draining slowly.
                  </p>
                </div>

                <h2>What to do first</h2>

                <div className={styles.articleIconGrid}>
                  {firstSteps.map((item) => (
                    <div className={styles.articleIconCard} key={item.title}>
                      <span>{item.icon}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>

                <h2>Why repeated flushing can make it worse</h2>

                <p>
                  When a toilet is not clearing properly, another flush can add
                  more water into the bowl before the existing water has
                  dropped. If the blockage is still restricting the waste pipe,
                  the water level can rise closer to the rim.
                </p>

                <p>
                  This is why the first message should say whether the water is
                  rising, slowly dropping, staying high or close to overflowing.
                  That detail is more useful than just saying “toilet problem”.
                </p>

                <div className={styles.articleWarningBox}>
                  <span>⚠️</span>
                  <div>
                    <strong>
                      Do not keep flushing if the bowl is filling.
                    </strong>
                    <p>
                      If the water is close to overflowing, keep the area safe
                      and describe the urgency clearly in your enquiry.
                    </p>
                  </div>
                </div>

                <h2>Check whether it is only the toilet</h2>

                <p>
                  A blocked toilet can be isolated to one toilet, but sometimes
                  other fixtures give clues. Before sending a message, it helps
                  to notice whether the bath, shower or basin is also draining
                  slowly.
                </p>

                <div className={styles.articleIconGrid}>
                  {warningSigns.map((item) => (
                    <div className={styles.articleIconCard} key={item.title}>
                      <span>{item.icon}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>

                <h2>What to include in your WhatsApp message</h2>

                <p>
                  A good Wolverhampton blocked toilet enquiry is short, local
                  and specific. It does not need technical words.
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
                    Hi, I’m in Bilston. The toilet water rises after flushing
                    and then drops very slowly. The basin seems normal. It feels
                    urgent today if possible.
                  </p>
                </div>

                <h2>When it may be a wider drain issue</h2>

                <p>
                  If the toilet is blocked and the bath, shower, basin or
                  outside drain is also affected, mention all of them. More than
                  one slow or blocked fixture can be a useful clue that the
                  issue may not be only the toilet.
                </p>

                <div className={styles.articleRelatedInline}>
                  <Link href="/blocked-drains-wolverhampton">
                    🧼 Read about blocked drains
                  </Link>
                  <Link href="/emergency-plumber-wolverhampton">
                    ⚠️ Urgent plumbing enquiry
                  </Link>
                </div>
              </article>

              <aside className={styles.articleAside}>
                <div className={styles.articleAsideCard}>
                  <span>Quick links</span>
                  <Link href="/blocked-toilet-wolverhampton">
                    🚽 Blocked toilet
                  </Link>
                  <Link href="/blocked-drains-wolverhampton">
                    🧼 Blocked drains
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
                <span> plumbing route.</span>
              </h2>
              <p>
                A rising toilet water issue can connect to blocked toilets,
                urgent plumbing or wider drainage.
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
                Toilet water rising
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
              <h2>Toilet water rising in Wolverhampton?</h2>
              <p>
                Send your area, whether the water rises after flushing, whether
                other fixtures are affected, and how urgent it feels.
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
