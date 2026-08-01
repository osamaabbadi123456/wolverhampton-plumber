import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Penn.";

export const metadata: Metadata = {
  title: "Plumber Penn | Leaks, Showers, Kitchen & Drain Enquiries",
  description:
    "Penn plumbing enquiries for leaks, shower drainage, kitchen sinks, blocked drains, bathroom plumbing, tap repairs and urgent water problems.",
  keywords: [
    "plumber Penn",
    "Penn plumber",
    "leak repair Penn",
    "bathroom plumber Penn",
    "kitchen plumber Penn",
    "blocked drains Penn",
    "tap repair Penn",
    "emergency plumber Penn",
    "plumber near Penn",
  ],
  alternates: {
    canonical: "/plumber-penn",
  },
  openGraph: {
    title: "Plumber Penn | Leaks, Showers, Kitchen & Drain Enquiries",
    description:
      "Send a clear WhatsApp plumbing enquiry in Penn for leaks, shower drainage, kitchen sinks, bathroom plumbing and urgent water problems.",
    url: "https://wolverhamptonplumber.co.uk/plumber-penn",
    type: "website",
    locale: "en_GB",
  },
};

const pennRoutes = [
  {
    title: "Leak after using a fixture",
    text: "For water appearing after using a shower, bath, basin, tap, washing machine or kitchen sink.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Shower or bath draining slowly",
    text: "For water sitting in the shower tray, bath draining slowly, smells, gurgling or bathroom waste concerns.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Kitchen sink or appliance pipework",
    text: "For kitchen sink leaks, blocked sinks, waste pipes, dishwasher pipework and washing machine connections.",
    href: "/kitchen-plumber-wolverhampton",
  },
  {
    title: "Bathroom plumbing",
    text: "For toilets, showers, baths, basins, bathroom taps, bathroom leaks and bathroom pipework.",
    href: "/bathroom-plumber-wolverhampton",
  },
];

const pennChecklist = [
  "Start with Penn or the closest WV area",
  "Say whether the problem happens after using a fixture",
  "Name the fixture: shower, bath, basin, toilet, sink, tap or appliance",
  "Mention whether water is leaking, draining slowly or backing up",
  "Say whether it is getting worse or staying the same",
  "Include urgency and a safe photo if useful",
];

const pennExamples = [
  {
    label: "Shower drainage",
    value:
      "Penn shower drains very slowly and water sits in the tray after use.",
  },
  {
    label: "Kitchen sink",
    value: "Penn kitchen sink leaking under the cupboard, near the waste pipe.",
  },
  {
    label: "Bathroom leak",
    value:
      "Penn bathroom floor gets wet after using the bath. Not sure where it starts.",
  },
];

const nearbyAreas = [
  "Penn",
  "Merry Hill",
  "Finchfield",
  "Tettenhall",
  "Compton",
  "Wolverhampton",
  "Sedgley",
  "WV3",
  "WV4",
];

const faqs = [
  {
    q: "Can I send a Penn plumbing enquiry by WhatsApp?",
    a: "Yes. Start with Penn, then add the fixture, symptom, room and urgency.",
  },
  {
    q: "What Penn issues fit this page best?",
    a: "This page is best for Penn enquiries involving leaks, showers, baths, kitchen sinks, drainage and bathroom plumbing.",
  },
  {
    q: "What if water only appears after using the shower or bath?",
    a: "Say that clearly. Mention whether it appears on the floor, ceiling, wall, under a basin or around the bath or shower.",
  },
  {
    q: "What if the kitchen sink drains slowly?",
    a: "Mention slow drainage, gurgling, smells, standing water and whether appliances are connected nearby.",
  },
];

export default function PlumberPennPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumber Penn Enquiries",
    serviceType: "Penn plumbing enquiry routing",
    areaServed: {
      "@type": "Place",
      name: "Penn",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/plumber-penn",
    description:
      "Penn plumbing enquiry page for leaks, shower drainage, kitchen sinks, blocked drains, bathroom plumbing, tap repairs and urgent water problems.",
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
        name: "Plumber Penn",
        item: "https://wolverhamptonplumber.co.uk/plumber-penn",
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
                <div className={styles.badge}>Penn plumbing enquiries</div>

                <h1>
                  Plumber
                  <span> Penn</span>
                </h1>

                <p>
                  Penn plumbing enquiries often need one simple detail: does the
                  problem happen after using something? Send whether it is a
                  shower, bath, kitchen sink, tap, appliance or bathroom
                  fixture, then add what changes and how urgent it feels.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Send Penn Enquiry
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Penn Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Leaks after use</span>
                  <span>Showers and baths</span>
                  <span>Kitchen drainage</span>
                </div>

                <small>
                  If water is near electrics or spreading quickly, keep safe
                  first and include that clearly in the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Area enquiry</span>
                  <strong>Penn</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>
                  <p>Penn message</p>
                  <h2>Say when it happens</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Trigger</span>
                      <strong>After shower, bath, sink or appliance?</strong>
                    </div>
                    <div>
                      <span>Symptom</span>
                      <strong>Leaking, slow drain or backing up?</strong>
                    </div>
                    <div>
                      <span>Area</span>
                      <strong>Penn / WV3 / WV4 / nearby area</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>where water appears</strong>
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

        <section className={styles.pennRouteSection}>
          <div className={styles.container}>
            <div className={styles.pennRoutePanel}>
              <div>
                <div className={styles.badge}>Penn issue routing</div>
                <h2>
                  The clue is often
                  <span> what was used first.</span>
                </h2>
                <p>
                  If water appears after using a shower, bath, basin, sink or
                  appliance, mention that in the first message.
                </p>
              </div>

              <div className={styles.pennRouteList}>
                {pennRoutes.map((route) => (
                  <Link href={route.href} key={route.href}>
                    <strong>{route.title}</strong>
                    <p>{route.text}</p>
                    <span>Open service page →</span>
                  </Link>
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
                  Penn plumbing message
                  <span> checklist.</span>
                </h2>
                <p>
                  The strongest Penn enquiry explains the area, the fixture and
                  what happens after it is used.
                </p>
              </div>

              <ul>
                {pennChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.exampleMessageSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Example Penn messages</div>
              <h2>
                Mention the fixture
                <span> and the pattern.</span>
              </h2>
            </div>

            <div className={styles.exampleGrid}>
              {pennExamples.map((example) => (
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
                Penn and nearby
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
              <div className={styles.badge}>Penn questions</div>
              <h2>
                Plumber Penn
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
              <h2>Need plumbing help in Penn?</h2>
              <p>
                Send the area, fixture, what happens after use, and how urgent
                the problem feels.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Send Penn Enquiry
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Penn Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
