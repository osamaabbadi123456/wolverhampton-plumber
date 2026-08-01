import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Bushbury.";

export const metadata: Metadata = {
  title: "Plumber Bushbury | Blocked Toilets, Drains, Taps & Leaks",
  description:
    "Bushbury plumbing enquiries for blocked toilets, outside drains, blocked sinks, tap repairs, leaks, water pressure issues and urgent plumbing problems.",
  keywords: [
    "plumber Bushbury",
    "Bushbury plumber",
    "blocked toilet Bushbury",
    "blocked drains Bushbury",
    "emergency plumber Bushbury",
    "tap repair Bushbury",
    "leak repair Bushbury",
    "water pressure plumber Bushbury",
    "plumber near Bushbury",
  ],
  alternates: {
    canonical: "/plumber-bushbury",
  },
  openGraph: {
    title: "Plumber Bushbury | Blocked Toilets, Drains, Taps & Leaks",
    description:
      "Send a clear WhatsApp plumbing enquiry in Bushbury for blocked toilets, outside drains, taps, leaks and water pressure problems.",
    url: "https://wolverhamptonplumber.co.uk/plumber-bushbury",
    type: "website",
    locale: "en_GB",
  },
};

const bushburyProblems = [
  {
    title: "Blocked toilet",
    text: "For toilet water rising, toilets not clearing, repeated flushing issues and urgent bathroom waste problems.",
    href: "/blocked-toilet-wolverhampton",
  },
  {
    title: "Outside drain concern",
    text: "For slow drains, smells, gurgling, water backing up or outside drain concerns around the property.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Tap problem",
    text: "For dripping taps, leaking tap bases, stiff handles, taps not closing and weak flow from one tap.",
    href: "/tap-repair-wolverhampton",
  },
  {
    title: "Water pressure problem",
    text: "For weak tap flow, shower pressure problems, sudden drops and hot or cold water flow issues.",
    href: "/water-pressure-plumber-wolverhampton",
  },
];

const bushburyChecklist = [
  "Start with Bushbury or the closest WV area",
  "Say whether the issue is toilet, drain, tap, leak or pressure",
  "Mention if water is rising, backing up, leaking or weak",
  "Say whether one fixture or several fixtures are affected",
  "Mention outside drains if smells, rainwater or overflow are involved",
  "Add urgency and photos only if safe and useful",
];

const bushburyExamples = [
  {
    label: "Blocked toilet",
    value:
      "Bushbury toilet blocked, water rises after flushing and is slow to go down.",
  },
  {
    label: "Outside drain",
    value:
      "Bushbury outside drain smells and water seems to be backing up near the kitchen.",
  },
  {
    label: "Tap/pressure",
    value:
      "Bushbury bathroom tap has very weak cold water flow. Other taps seem normal.",
  },
];

const nearbyAreas = [
  "Bushbury",
  "Low Hill",
  "Oxley",
  "Fordhouses",
  "Wednesfield",
  "Wolverhampton",
  "WV10",
  "WV11",
  "WV9",
];

const faqs = [
  {
    q: "Can I send a Bushbury plumbing enquiry?",
    a: "Yes. Start with Bushbury, then add the issue, fixture, room and urgency.",
  },
  {
    q: "What Bushbury issues fit this page best?",
    a: "This page is useful for blocked toilets, outside drains, blocked sinks, tap repairs, leaks, pressure issues and urgent plumbing problems.",
  },
  {
    q: "What if I think it is an outside drain problem?",
    a: "Mention smells, gurgling, water backing up, outside drain location and whether other fixtures are draining slowly.",
  },
  {
    q: "What if only one tap is weak?",
    a: "Say that only one tap is affected and mention whether it is hot, cold or both. That helps separate tap issues from wider pressure problems.",
  },
];

export default function PlumberBushburyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumber Bushbury Enquiries",
    serviceType: "Bushbury plumbing enquiry routing",
    areaServed: {
      "@type": "Place",
      name: "Bushbury",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/plumber-bushbury",
    description:
      "Bushbury plumbing enquiry page for blocked toilets, outside drains, blocked sinks, tap repairs, leaks, water pressure issues and urgent plumbing problems.",
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
        name: "Plumber Bushbury",
        item: "https://wolverhamptonplumber.co.uk/plumber-bushbury",
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
                <div className={styles.badge}>Bushbury plumbing enquiries</div>

                <h1>
                  Plumber
                  <span> Bushbury</span>
                </h1>

                <p>
                  Bushbury plumbing enquiries often involve toilets, outside
                  drains, taps, leaks or weak water flow. Start the message with
                  Bushbury, then say what is affected and whether water is
                  rising, backing up, leaking or weak.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Send Bushbury Enquiry
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Bushbury Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Blocked toilets</span>
                  <span>Outside drains</span>
                  <span>Taps and pressure</span>
                </div>

                <small>
                  If water is near electrics or sewage is backing up, keep safe
                  first and include the risk clearly in the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Area enquiry</span>
                  <strong>Bushbury</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>
                  <p>Bushbury message</p>
                  <h2>Say what is backing up</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Issue</span>
                      <strong>Toilet, drain, tap, leak or pressure</strong>
                    </div>
                    <div>
                      <span>Water</span>
                      <strong>Rising, backing up, leaking or weak?</strong>
                    </div>
                    <div>
                      <span>Area</span>
                      <strong>Bushbury / WV10 / nearby WV area</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>inside or outside?</strong>
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

        <section className={styles.bushburyProblemSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Bushbury issue routes</div>
              <h2>
                Bushbury enquiries should mention
                <span> inside or outside.</span>
              </h2>
              <p>
                A toilet blockage, outside drain concern and weak tap flow need
                different first details.
              </p>
            </div>

            <div className={styles.bushburyProblemGrid}>
              {bushburyProblems.map((item) => (
                <Link
                  href={item.href}
                  className={styles.bushburyProblemCard}
                  key={item.href}
                >
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                  <span>Open service page →</span>
                </Link>
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
                  Bushbury plumbing message
                  <span> checklist.</span>
                </h2>
                <p>
                  Say whether the issue is inside, outside, one fixture or
                  several fixtures.
                </p>
              </div>

              <ul>
                {bushburyChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.exampleMessageSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Example Bushbury messages</div>
              <h2>
                Good messages explain
                <span> the location and symptom.</span>
              </h2>
            </div>

            <div className={styles.exampleGrid}>
              {bushburyExamples.map((example) => (
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
                Bushbury and nearby
                <span> Wolverhampton areas.</span>
              </h2>
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
              <div className={styles.badge}>Bushbury questions</div>
              <h2>
                Plumber Bushbury
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
              <h2>Need plumbing help in Bushbury?</h2>
              <p>
                Send Bushbury, the issue, whether it is inside or outside, and
                whether water is rising, backing up, leaking or weak.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Send Bushbury Enquiry
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Bushbury Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
