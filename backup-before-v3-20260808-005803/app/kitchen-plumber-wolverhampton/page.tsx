import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20kitchen%20plumbing%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Kitchen Plumber Wolverhampton | Sinks, Taps, Leaks & Waste Pipes",
  description:
    "Kitchen plumber Wolverhampton enquiries for kitchen sink leaks, blocked sinks, waste pipes, kitchen taps, dishwasher pipework and washing machine connections.",
  keywords: [
    "kitchen plumber Wolverhampton",
    "kitchen sink plumber Wolverhampton",
    "blocked kitchen sink Wolverhampton",
    "kitchen sink leak Wolverhampton",
    "kitchen tap repair Wolverhampton",
    "waste pipe plumber Wolverhampton",
    "washing machine plumber Wolverhampton",
    "dishwasher plumbing Wolverhampton",
    "plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/kitchen-plumber-wolverhampton",
  },
  openGraph: {
    title: "Kitchen Plumber Wolverhampton | Sinks, Taps, Leaks & Waste Pipes",
    description:
      "Send a clear WhatsApp enquiry for kitchen sink leaks, blocked sinks, waste pipes, kitchen taps and appliance pipework in Wolverhampton.",
    url: "https://wolverhamptonplumber.co.uk/kitchen-plumber-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const kitchenProblems = [
  {
    title: "Kitchen sink leaking",
    text: "Water under the sink, around the tap base, near the waste pipe or inside the cabinet should be described clearly.",
  },
  {
    title: "Blocked kitchen sink",
    text: "Mention whether water is standing in the sink, draining slowly, gurgling or coming back up.",
  },
  {
    title: "Kitchen waste pipe issue",
    text: "Waste pipes can be connected to sinks, dishwashers and washing machines. Say which appliance or fitting is nearby.",
  },
  {
    title: "Kitchen tap problem",
    text: "Dripping taps, stiff mixer taps, poor flow and leaking tap bases all need slightly different details.",
  },
  {
    title: "Dishwasher pipework",
    text: "Mention whether the issue is water supply, waste pipe, leak behind the unit or water under the appliance.",
  },
  {
    title: "Washing machine connection",
    text: "Say whether the issue is the supply hose, waste hose, under-sink connection, leak or drainage problem.",
  },
];

const underSinkChecklist = [
  "Is water visible inside the cabinet?",
  "Is the leak near the tap base, waste pipe, trap or appliance hose?",
  "Does water appear only when the tap runs?",
  "Is the sink draining slowly or not at all?",
  "Is a dishwasher or washing machine connected nearby?",
  "Is there any smell, gurgling or water coming back up?",
];

const relatedPages = [
  {
    title: "Blocked drains",
    text: "For slow drainage, blocked kitchen sinks, gurgling waste pipes and water not clearing from the sink.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Leak repair",
    text: "For visible water under the sink, pipework leaks, tap base leaks and water spreading into cabinets.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Tap repair",
    text: "For kitchen taps that drip, leak from the base, turn stiffly, run weakly or will not shut off properly.",
    href: "/tap-repair-wolverhampton",
  },
  {
    title: "Water pressure",
    text: "For weak water flow from the kitchen tap, sudden pressure drops or hot/cold flow differences.",
    href: "/water-pressure-plumber-wolverhampton",
  },
];

const applianceNotes = [
  {
    title: "Dishwasher nearby",
    text: "Mention if the dishwasher shares the sink waste pipe or if water appears after the dishwasher runs.",
  },
  {
    title: "Washing machine nearby",
    text: "Say whether the washing machine waste hose or supply hose is connected under the sink.",
  },
  {
    title: "Sink cabinet wet",
    text: "A wet cabinet can come from a tap, pipe, trap, appliance hose or waste connection, so location matters.",
  },
  {
    title: "Bad smell from sink",
    text: "Smells can be useful to mention when the issue involves waste pipes, slow drainage or gurgling.",
  },
];

const messageExamples = [
  {
    label: "Sink leak",
    value:
      "Kitchen sink in WV10 leaking inside the cupboard. Water appears when the tap is running.",
  },
  {
    label: "Blocked sink",
    value:
      "Blocked kitchen sink in Wednesfield. Water drains very slowly and there is some gurgling.",
  },
  {
    label: "Appliance pipework",
    value:
      "Dishwasher pipework under kitchen sink in Bilston seems to leak after the dishwasher runs.",
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
    q: "What kitchen plumbing issues can I send?",
    a: "You can send enquiries for kitchen sink leaks, blocked kitchen sinks, kitchen waste pipes, kitchen taps, dishwasher pipework and washing machine connections.",
  },
  {
    q: "What details help with a kitchen sink leak?",
    a: "Say where the water appears, whether it happens when the tap runs, whether the cabinet is wet, and whether appliances are connected nearby.",
  },
  {
    q: "Is a blocked kitchen sink a drain problem?",
    a: "It can be. If water drains slowly, gurgles or comes back up, include those details. The blocked drains page may also be relevant.",
  },
  {
    q: "Should I mention the dishwasher or washing machine?",
    a: "Yes. If either appliance connects under the sink or water appears after using it, include that in the enquiry.",
  },
  {
    q: "Can I send photos of under-sink pipework?",
    a: "Yes, if safe. A wider photo of the under-sink area can help explain pipework, hoses and where water appears.",
  },
];

export default function KitchenPlumberWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kitchen Plumber Wolverhampton Enquiries",
    serviceType: "Kitchen plumbing, sink, tap and waste pipe enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/kitchen-plumber-wolverhampton",
    description:
      "Wolverhampton kitchen plumbing enquiry page covering kitchen sink leaks, blocked sinks, waste pipes, kitchen taps, dishwasher pipework and washing machine connections.",
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
        name: "Kitchen Plumber Wolverhampton",
        item: "https://wolverhamptonplumber.co.uk/kitchen-plumber-wolverhampton",
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
                  Kitchen sink, tap and waste pipe enquiries
                </div>

                <h1>
                  Kitchen Plumber
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Kitchen plumbing problems usually happen around the sink, tap,
                  waste pipe, dishwasher or washing machine connection. Send
                  your Wolverhampton area, what is affected, whether water is
                  leaking or draining slowly, and whether an appliance is
                  connected nearby.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Describe Kitchen Issue
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Kitchen Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Kitchen sinks</span>
                  <span>Waste pipes</span>
                  <span>Appliance pipework</span>
                </div>

                <small>
                  If water is near electrics or appliances, keep safe first and
                  include that detail clearly in the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Kitchen enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Useful kitchen message</p>
                  <h2>Say what is under the sink</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, blockage, tap or waste pipe</strong>
                    </div>
                    <div>
                      <span>Nearby</span>
                      <strong>Dishwasher or washing machine?</strong>
                    </div>
                    <div>
                      <span>Water</span>
                      <strong>Dripping, standing or draining slowly?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful photo</span>
                    <strong>inside sink cabinet</strong>
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
                <strong>Kitchen sink</strong>
                <span>leaks and blockages</span>
              </div>
              <div>
                <strong>Waste pipe</strong>
                <span>slow drainage and smells</span>
              </div>
              <div>
                <strong>Appliances</strong>
                <span>dishwasher and washer pipes</span>
              </div>
              <div>
                <strong>Wolverhampton</strong>
                <span>WV area focus</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.kitchenProblemSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>What kitchen issue is it?</div>
              <h2>
                Most kitchen plumbing problems
                <span> start around the sink.</span>
              </h2>
              <p>
                The first enquiry should explain whether the problem is water
                leaking, water not draining, a tap issue or appliance pipework.
              </p>
            </div>

            <div className={styles.kitchenGrid}>
              {kitchenProblems.map((item) => (
                <article className={styles.kitchenCard} key={item.title}>
                  <span>Kitchen</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.kitchenCabinetSection}>
          <div className={styles.container}>
            <div className={styles.kitchenCabinetPanel}>
              <div>
                <div className={styles.badge}>Under the sink</div>
                <h2>
                  The sink cabinet tells
                  <span> a lot of the story.</span>
                </h2>
                <p>
                  If it is safe to look, a quick check under the sink can help
                  you describe the issue clearly without needing technical
                  wording.
                </p>
              </div>

              <ul>
                {underSinkChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.kitchenApplianceSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Appliance pipework</div>
              <h2>
                Dishwashers and washing machines
                <span> can change the enquiry.</span>
              </h2>
              <p>
                Kitchen plumbing is often shared between the sink, waste pipe
                and nearby appliances. Mention what is connected nearby.
              </p>
            </div>

            <div className={styles.kitchenApplianceGrid}>
              {applianceNotes.map((item) => (
                <article
                  className={styles.kitchenApplianceCard}
                  key={item.title}
                >
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Related enquiry pages</div>
              <h2>
                Kitchen plumbing connects to
                <span> drains, leaks, taps and pressure.</span>
              </h2>
              <p>
                Choose the closest related page if the issue is mainly a
                blockage, leak, tap or water-flow problem.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {relatedPages.map((item) => (
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
                Kitchen enquiries should mention
                <span> the sink, tap or appliance.</span>
              </h2>
              <p>
                A simple message with the room, issue and appliance context is
                usually enough.
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
                Kitchen plumbing enquiries across
                <span> Wolverhampton and WV areas.</span>
              </h2>
              <p>
                Add your Wolverhampton area or WV postcode so the enquiry is
                clearly local.
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
              <div className={styles.badge}>Kitchen plumbing questions</div>
              <h2>
                Wolverhampton kitchen plumber
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
              <h2>Kitchen sink, tap or waste pipe problem?</h2>
              <p>
                Send what is affected, whether water is leaking or draining
                slowly, and whether a dishwasher or washing machine is connected
                nearby.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Describe Kitchen Issue
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Kitchen Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
