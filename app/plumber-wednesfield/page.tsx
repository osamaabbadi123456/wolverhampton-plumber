import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wednesfield.";

export const metadata: Metadata = {
  title: "Plumber Wednesfield | Urgent Plumbing, Drains, Leaks & Pressure",
  description:
    "Wednesfield plumbing enquiries for emergency plumbing, blocked drains, blocked toilets, leaks, water pressure problems, taps and bathroom plumbing.",
  keywords: [
    "plumber Wednesfield",
    "Wednesfield plumber",
    "emergency plumber Wednesfield",
    "blocked drains Wednesfield",
    "blocked toilet Wednesfield",
    "leak repair Wednesfield",
    "water pressure plumber Wednesfield",
    "tap repair Wednesfield",
    "plumber near Wednesfield",
  ],
  alternates: {
    canonical: "/plumber-wednesfield",
  },
  openGraph: {
    title: "Plumber Wednesfield | Urgent Plumbing, Drains, Leaks & Pressure",
    description:
      "Send a clear WhatsApp plumbing enquiry in Wednesfield for urgent issues, blocked drains, leaks, water pressure problems and blocked toilets.",
    url: "https://wolverhamptonplumber.co.uk/plumber-wednesfield",
    type: "website",
    locale: "en_GB",
  },
};

const urgentRoutes = [
  {
    title: "Urgent water issue",
    text: "For water leaking, spreading, overflowing or causing immediate concern in a Wednesfield property.",
    href: "/emergency-plumber-wolverhampton",
  },
  {
    title: "Blocked drains or slow drainage",
    text: "For outside drains, blocked sinks, slow showers, bath drainage, smells and gurgling waste pipes.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Blocked toilet",
    text: "For toilet water rising, toilets not clearing, repeated flushing problems and urgent bathroom waste issues.",
    href: "/blocked-toilet-wolverhampton",
  },
  {
    title: "Water pressure problem",
    text: "For weak tap flow, low shower pressure, sudden pressure drops and hot or cold flow problems.",
    href: "/water-pressure-plumber-wolverhampton",
  },
];

const wednesfieldSignals = [
  {
    title: "Water is spreading",
    text: "Say where the water is coming from and whether it is spreading across a floor, wall, cabinet or ceiling.",
  },
  {
    title: "Drain smell or gurgling",
    text: "Mention smells, gurgling and whether more than one fixture is draining slowly.",
  },
  {
    title: "Toilet water rising",
    text: "Avoid repeated flushing and mention whether the bath, shower or basin is also affected.",
  },
  {
    title: "Weak flow",
    text: "Say whether one tap, one shower or the whole home has weak water flow.",
  },
];

const messageBuilder = [
  "Wednesfield or closest WV area",
  "Problem type: leak, drain, toilet, tap, pressure, kitchen or bathroom",
  "What changed: water rising, slow drainage, weak flow or visible leak",
  "Where it is: kitchen, bathroom, toilet, outside drain, under sink or ceiling",
  "Urgency: today, 24–48 hours, this week or flexible",
];

const wednesfieldExamples = [
  {
    label: "Urgent leak",
    value:
      "Wednesfield bathroom leak. Water appears on the floor after using the shower and is spreading slowly.",
  },
  {
    label: "Drain issue",
    value:
      "Wednesfield kitchen sink draining slowly with gurgling. Outside drain also smells.",
  },
  {
    label: "Pressure issue",
    value:
      "Wednesfield low water pressure. Shower and bathroom tap are weak, kitchen tap seems normal.",
  },
];

const nearbyAreas = [
  "Wednesfield",
  "Wolverhampton",
  "Ashmore Park",
  "Heath Town",
  "Bushbury",
  "Willenhall",
  "Essington",
  "WV11",
  "WV10",
  "WV12",
];

const faqs = [
  {
    q: "Can I send an urgent plumbing enquiry from Wednesfield?",
    a: "Yes. Add Wednesfield at the start of the WhatsApp message, then describe the issue, where it is happening and how urgent it feels.",
  },
  {
    q: "What if I am not sure whether it is a drain or toilet problem?",
    a: "Say exactly what is affected. If the toilet, sink, bath or shower are also slow or blocked, include that detail.",
  },
  {
    q: "What if the issue is low water pressure?",
    a: "Mention whether one tap, one shower or the whole home is affected, and whether hot water, cold water or both are weak.",
  },
  {
    q: "Should I send photos?",
    a: "Photos can help if safe, especially for visible leaks, under-sink pipework, blocked outside drains or water around fixtures.",
  },
];

export default function PlumberWednesfieldPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumber Wednesfield Enquiries",
    serviceType: "Wednesfield plumbing enquiry routing",
    areaServed: {
      "@type": "Place",
      name: "Wednesfield",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/plumber-wednesfield",
    description:
      "Wednesfield plumbing enquiry page for emergency plumbing, blocked drains, blocked toilets, leaks, water pressure problems, taps and bathroom plumbing.",
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
        name: "Areas Covered",
        item: "https://wolverhamptonplumber.co.uk/areas-covered",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Plumber Wednesfield",
        item: "https://wolverhamptonplumber.co.uk/plumber-wednesfield",
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
                  Wednesfield plumbing enquiries
                </div>

                <h1>
                  Plumber
                  <span> Wednesfield</span>
                </h1>

                <p>
                  For Wednesfield plumbing problems, the first message should
                  explain what is happening now: water leaking, drains slowing,
                  toilet water rising, weak water flow, or a tap or fixture
                  failing. Add the area, issue and urgency before sending.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Send Wednesfield Enquiry
                  </Link>

                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Wednesfield Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Urgent issues</span>
                  <span>Drains and toilets</span>
                  <span>Water pressure</span>
                </div>

                <small>
                  If water is near electrics or you smell gas, follow safety
                  guidance first. Gas work must be handled by a Gas Safe
                  registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Area enquiry</span>
                  <strong>Wednesfield</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Wednesfield message</p>
                  <h2>Say what changed</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Wednesfield / Ashmore Park / WV11</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, drain, toilet or low pressure</strong>
                    </div>
                    <div>
                      <span>Pattern</span>
                      <strong>Sudden, slow, rising or spreading?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>one fixture or several?</strong>
                  </div>
                  <div>
                    <span>Channel</span>
                    <strong>WhatsApp</strong>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.wednesfieldRouteSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Wednesfield issue routes</div>
              <h2>
                Start with the problem,
                <span> not just the word plumber.</span>
              </h2>
              <p>
                These are the strongest Wednesfield routes because they match
                higher-intent plumbing situations.
              </p>
            </div>

            <div className={styles.wednesfieldRouteGrid}>
              {urgentRoutes.map((route) => (
                <Link
                  href={route.href}
                  className={styles.wednesfieldRouteCard}
                  key={route.href}
                >
                  <strong>{route.title}</strong>
                  <p>{route.text}</p>
                  <span>Open service page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.wednesfieldSignalSection}>
          <div className={styles.container}>
            <div className={styles.wednesfieldSignalPanel}>
              <div>
                <div className={styles.badge}>Useful local detail</div>
                <h2>
                  A Wednesfield enquiry should
                  <span> explain the symptom clearly.</span>
                </h2>
                <p>
                  The message does not need to sound technical. It just needs to
                  explain what changed and where.
                </p>
              </div>

              <div className={styles.wednesfieldSignalGrid}>
                {wednesfieldSignals.map((signal) => (
                  <div key={signal.title}>
                    <strong>{signal.title}</strong>
                    <p>{signal.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.messageChecklistSection}>
          <div className={styles.container}>
            <div className={styles.checklistPanel}>
              <div>
                <div className={styles.badge}>Before you send</div>
                <h2>
                  Wednesfield plumbing message
                  <span> checklist.</span>
                </h2>
                <p>
                  Put Wednesfield or the nearest WV area first, then describe
                  the symptom in plain English.
                </p>
              </div>

              <ul>
                {messageBuilder.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.exampleMessageSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Example Wednesfield messages</div>
              <h2>
                Good messages explain
                <span> what changed.</span>
              </h2>
              <p>
                These examples are short, local and specific enough to make the
                enquiry easier to understand.
              </p>
            </div>

            <div className={styles.exampleGrid}>
              {wednesfieldExamples.map((example) => (
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
              <div className={styles.badge}>Nearby area signals</div>
              <h2>
                Wednesfield and nearby
                <span> Wolverhampton areas.</span>
              </h2>
              <p>
                Add the closest area or WV postcode so the WhatsApp enquiry
                starts clearly.
              </p>
            </div>

            <div className={styles.areaPills}>
              {nearbyAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Wednesfield questions</div>
              <h2>
                Plumber Wednesfield
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
              <h2>Need plumbing help in Wednesfield?</h2>
              <p>
                Send the area, what changed, where it is happening and how
                urgent it feels.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Send Wednesfield Enquiry
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Wednesfield Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
