import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20blocked%20toilet%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Blocked Toilet Wolverhampton | Rising Water & Toilet Help",
  description:
    "Blocked toilet Wolverhampton enquiries for toilet water rising, toilets not flushing, overflowing toilets, slow-draining toilets and bathroom waste concerns.",
  keywords: [
    "blocked toilet Wolverhampton",
    "blocked toilets Wolverhampton",
    "toilet blocked Wolverhampton",
    "toilet not flushing Wolverhampton",
    "toilet water rising Wolverhampton",
    "blocked toilet plumber Wolverhampton",
    "emergency toilet plumber Wolverhampton",
    "bathroom plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/blocked-toilet-wolverhampton",
  },
  openGraph: {
    title: "Blocked Toilet Wolverhampton | Rising Water & Toilet Help",
    description:
      "Send a clear WhatsApp enquiry for blocked toilets, rising toilet water, toilets not flushing and urgent bathroom waste problems in Wolverhampton.",
    url: "https://wolverhamptonplumber.co.uk/blocked-toilet-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const toiletSituations = [
  {
    title: "Water rises after flushing",
    text: "If the water level rises instead of clearing, stop flushing and mention this clearly in the enquiry.",
  },
  {
    title: "Toilet drains very slowly",
    text: "A slow-clearing toilet may be partly blocked or linked to a waste pipe restriction.",
  },
  {
    title: "Toilet will not flush properly",
    text: "This can be a flush mechanism issue, a blockage, or both. Say whether the toilet flushes but does not clear.",
  },
  {
    title: "Bad smell around the toilet",
    text: "Smells can help explain whether the issue feels like a toilet blockage or a wider bathroom waste problem.",
  },
  {
    title: "Water around the toilet base",
    text: "Mention visible water, where it appears, and whether it happens after flushing or all the time.",
  },
  {
    title: "More than one fixture affected",
    text: "If the bath, shower or basin is also draining slowly, say that because it may point beyond the toilet itself.",
  },
];

const doFirst = [
  "Avoid flushing again if the water is rising",
  "Keep the bathroom area clear if water may overflow",
  "Mention if the toilet is fully blocked or only slow to clear",
  "Say whether sinks, baths or showers are also affected",
  "Add your Wolverhampton area or WV postcode",
  "Include a photo only if it is safe and useful",
];

const relatedIssues = [
  {
    title: "Blocked drains",
    text: "If more than one fixture is affected, or there is an outside drain smell or overflow, the issue may fit the blocked drains page better.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Bathroom plumbing",
    text: "For toilets, basins, baths, showers, bathroom taps or visible bathroom pipework issues.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    title: "Emergency plumbing",
    text: "For urgent water problems, leaks, overflowing fixtures or plumbing issues that feel time-sensitive.",
    href: "/emergency-plumber-wolverhampton",
  },
  {
    title: "Leak repair",
    text: "If the main concern is visible water around the toilet, floor, basin or pipework, use the leak repair page.",
    href: "/leak-repair-wolverhampton",
  },
];

const messageExamples = [
  {
    label: "Good",
    value:
      "Blocked toilet in WV2. Water rises when flushed. Bath and sink seem normal. Urgent today if possible.",
  },
  {
    label: "Good",
    value:
      "Toilet upstairs in Bilston is draining very slowly. No overflow yet. Problem started this morning.",
  },
  {
    label: "Too vague",
    value: "Toilet problem. Need plumber.",
  },
];

const areas = [
  "Wolverhampton",
  "Bilston",
  "Wednesfield",
  "Tettenhall",
  "Penn",
  "Bushbury",
  "Compton",
  "Whitmore Reans",
  "Oxley",
  "Finchfield",
  "Merry Hill",
  "Willenhall",
  "Sedgley",
  "Codsall",
  "WV1",
  "WV2",
  "WV3",
  "WV4",
  "WV6",
  "WV10",
  "WV11",
  "WV14",
];

const faqs = [
  {
    q: "Should I keep flushing a blocked toilet?",
    a: "No. If the toilet water is rising or not clearing, avoid repeated flushing because it can make the situation worse.",
  },
  {
    q: "What should I include in a blocked toilet enquiry?",
    a: "Include your Wolverhampton area, whether water is rising, whether the toilet is fully blocked or slow draining, and whether other fixtures are affected.",
  },
  {
    q: "Is a blocked toilet always a toilet problem?",
    a: "Not always. If sinks, baths, showers or outside drains are also affected, it may suggest a wider waste or drainage issue.",
  },
  {
    q: "Can I send a blocked toilet enquiry by WhatsApp?",
    a: "Yes. Use the enquiry page or WhatsApp link and send the area, issue, urgency and useful details in one clear message.",
  },
  {
    q: "What if water is leaking around the toilet?",
    a: "Mention where the water appears, whether it happens after flushing, and whether it is getting worse. If there is electrical risk or serious flooding, keep safe first.",
  },
];

export default function BlockedToiletWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Blocked Toilet Wolverhampton Enquiries",
    serviceType: "Blocked toilet and toilet plumbing enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/blocked-toilet-wolverhampton",
    description:
      "Wolverhampton blocked toilet enquiry page covering toilet water rising, toilets not flushing, overflowing toilets, slow-draining toilets and bathroom waste concerns.",
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
        name: "Blocked Toilet Wolverhampton",
        item: "https://wolverhamptonplumber.co.uk/blocked-toilet-wolverhampton",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                <div className={styles.badge}>
                  Blocked toilet and bathroom waste issues
                </div>

                <h1>
                  Blocked Toilet
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  If a toilet is blocked, water is rising, or the flush is not
                  clearing properly, the message needs to be clear. Send your
                  Wolverhampton area, what happened, whether water is rising,
                  and whether any other bathroom fixtures are affected.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Describe the Toilet Issue
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Toilet Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Do not keep flushing</span>
                  <span>Rising water details</span>
                  <span>Bathroom waste focus</span>
                </div>

                <small>
                  If water is overflowing, near electrics, or creating a safety
                  risk, keep safe first. This page helps you send clear enquiry
                  details by WhatsApp.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Toilet enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Useful toilet message</p>
                  <h2>Say if water is rising</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Issue</span>
                      <strong>
                        Blocked, slow, overflowing or not flushing
                      </strong>
                    </div>
                    <div>
                      <span>Other?</span>
                      <strong>Are bath, sink or shower affected?</strong>
                    </div>
                    <div>
                      <span>Area</span>
                      <strong>Wolverhampton area or WV postcode</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>water level after flush</strong>
                  </div>
                  <div>
                    <span>Channel</span>
                    <strong>WhatsApp</strong>
                  </div>
                </div>
              </aside>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>Blocked toilets</strong>
                <span>clear issue details</span>
              </div>
              <div>
                <strong>Rising water</strong>
                <span>avoid repeat flushing</span>
              </div>
              <div>
                <strong>Bathroom waste</strong>
                <span>toilet, bath, sink signals</span>
              </div>
              <div>
                <strong>Wolverhampton</strong>
                <span>WV area focus</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.toiletWarningSection}>
          <div className={styles.container}>
            <div className={styles.warningPanel}>
              <div>
                <div className={styles.badge}>First thing to know</div>
                <h2>
                  If the water is rising,
                  <span> do not keep flushing.</span>
                </h2>
                <p>
                  Repeated flushing can make an already blocked toilet worse. A
                  useful message says what happened after the flush, whether the
                  water level is rising or falling, and whether anything else in
                  the bathroom is affected.
                </p>
              </div>

              <Link href="/contact" className={styles.fullBtn}>
                Build Toilet Enquiry
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.drainSignsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Common toilet situations</div>
              <h2>
                What is happening
                <span> with the toilet?</span>
              </h2>
              <p>
                Choose the closest description. These are the details that make
                a blocked toilet enquiry easier to understand.
              </p>
            </div>

            <div className={styles.signsGrid}>
              {toiletSituations.map((item) => (
                <article className={styles.signCard} key={item.title}>
                  <span>•</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.messageChecklistSection}>
          <div className={styles.container}>
            <div className={styles.checklistPanel}>
              <div>
                <div className={styles.badge}>Before you send</div>
                <h2>
                  Blocked toilet message
                  <span> checklist.</span>
                </h2>
                <p>
                  A short message with the right details is more useful than a
                  long message that only says “toilet blocked”.
                </p>
              </div>

              <ul>
                {doFirst.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Related plumbing pages</div>
              <h2>
                Sometimes it is not
                <span> only the toilet.</span>
              </h2>
              <p>
                If other fixtures are also affected, the enquiry may fit a
                related plumbing or drainage page better.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {relatedIssues.map((item) => (
                <article className={styles.serviceCard} key={item.href}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href} className={styles.cardLink}>
                    Open related page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.exampleMessageSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Message examples</div>
              <h2>
                Better messages get
                <span> understood faster.</span>
              </h2>
              <p>
                The goal is not to write a perfect technical diagnosis. Just
                explain what you can see.
              </p>
            </div>

            <div className={styles.exampleGrid}>
              {messageExamples.map((example) => (
                <div className={styles.exampleCard} key={example.value}>
                  <span>{example.label}</span>
                  <p>{example.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Local coverage</div>
              <h2>
                Blocked toilet enquiries across
                <span> Wolverhampton and WV areas.</span>
              </h2>
              <p>
                Add your area or postcode in the message so the enquiry is
                clearly tied to Wolverhampton and nearby WV locations.
              </p>
            </div>

            <div className={styles.areaPills}>
              {areas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Blocked toilet questions</div>
              <h2>
                Wolverhampton toilet blockage
                <span> FAQs.</span>
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
              <h2>Blocked toilet in Wolverhampton?</h2>
              <p>
                Send your area, whether water is rising, whether the toilet is
                fully blocked or slow to clear, and how urgent it feels.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Describe the Toilet Issue
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Toilet Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
