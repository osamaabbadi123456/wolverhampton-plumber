import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20bathroom%20plumbing%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Bathroom Plumber Wolverhampton | Toilets, Showers, Baths & Basins",
  description:
    "Bathroom plumber Wolverhampton enquiries for toilets, showers, baths, basins, bathroom leaks, bathroom taps, slow drainage and bathroom pipework issues.",
  keywords: [
    "bathroom plumber Wolverhampton",
    "toilet plumber Wolverhampton",
    "shower plumber Wolverhampton",
    "bath plumber Wolverhampton",
    "basin plumber Wolverhampton",
    "bathroom leak Wolverhampton",
    "bathroom tap repair Wolverhampton",
    "blocked toilet Wolverhampton",
    "plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/bathroom-plumber-wolverhampton",
  },
  openGraph: {
    title: "Bathroom Plumber Wolverhampton | Toilets, Showers, Baths & Basins",
    description:
      "Send a clear WhatsApp enquiry for bathroom plumbing issues in Wolverhampton including toilets, showers, baths, basins, leaks and slow drainage.",
    url: "https://wolverhamptonplumber.co.uk/bathroom-plumber-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const bathroomProblems = [
  {
    title: "Toilet problem",
    text: "Blocked toilets, slow-clearing toilets, water around the toilet base or flush problems should be described clearly.",
  },
  {
    title: "Shower plumbing issue",
    text: "Mention whether the shower has weak flow, slow drainage, leaking pipework, temperature concerns or visible water.",
  },
  {
    title: "Bath waste or drainage",
    text: "Slow bath drainage, gurgling, smells or water not clearing can be explained as a bath waste or drainage issue.",
  },
  {
    title: "Bathroom basin leak",
    text: "Water under the basin, around the tap, near the waste pipe or inside a vanity unit is useful to mention.",
  },
  {
    title: "Bathroom tap problem",
    text: "Dripping taps, loose taps, leaking tap bases or poor flow from basin or bath taps can be sent as tap repair enquiries.",
  },
  {
    title: "Water on bathroom floor",
    text: "Say whether water appears near the toilet, shower, bath, basin, wall, floor edge or pipework.",
  },
];

const bathroomZones = [
  {
    title: "Toilet area",
    text: "Useful details include whether water rises after flushing, appears at the base, or the toilet does not clear properly.",
    href: "/blocked-toilet-wolverhampton",
  },
  {
    title: "Shower and bath",
    text: "Mention slow drainage, weak flow, leaking screens, bath waste, shower waste or water appearing after use.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Basin and vanity",
    text: "If water appears inside a vanity unit or under a basin, say whether it happens when the tap runs.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Bathroom taps",
    text: "For dripping taps, stiff taps, loose taps, poor shut-off and leaks around the tap base.",
    href: "/tap-repair-wolverhampton",
  },
];

const messageChecklist = [
  "Which bathroom fixture is affected: toilet, shower, bath, basin or tap",
  "Whether the issue is a leak, blockage, slow drainage or weak water flow",
  "Whether water appears on the floor, inside a cabinet or around pipework",
  "Whether the problem happens all the time or only after using the fixture",
  "Whether any other bathroom fixtures are affected",
  "Your Wolverhampton area or WV postcode",
];

const bathroomSignals = [
  {
    title: "Only one fixture affected",
    text: "A single basin, shower or toilet issue can often be described by naming that fixture and the symptom.",
  },
  {
    title: "Several fixtures affected",
    text: "If the toilet, bath, shower and basin are all slow or blocked, mention that because it may be wider drainage.",
  },
  {
    title: "Water after using shower or bath",
    text: "Say if water appears only after bathing or showering, and where it appears.",
  },
  {
    title: "Water around toilet base",
    text: "Mention if water appears after flushing, all the time, or only when the toilet is used.",
  },
];

const relatedPages = [
  {
    title: "Blocked toilet",
    text: "For toilet water rising, toilet not clearing, repeated flushing issues and urgent bathroom waste problems.",
    href: "/blocked-toilet-wolverhampton",
  },
  {
    title: "Blocked drains",
    text: "For slow bath drainage, shower drainage, gurgling, smells, blocked sinks or multiple affected fixtures.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Leak repair",
    text: "For water on the floor, basin leaks, shower leaks, bath leaks, toilet leaks and visible pipework leaks.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Water pressure",
    text: "For weak shower flow, low tap pressure, hot/cold flow differences or sudden pressure drops.",
    href: "/water-pressure-plumber-wolverhampton",
  },
];

const messageExamples = [
  {
    label: "Toilet",
    value:
      "Toilet in WV1 is slow to clear and water rises after flushing. Basin and shower seem normal.",
  },
  {
    label: "Shower",
    value:
      "Shower in Tettenhall drains very slowly and water sits in the tray after use.",
  },
  {
    label: "Basin leak",
    value:
      "Bathroom basin in Penn leaking inside the vanity unit when the tap is running.",
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
    q: "What bathroom plumbing issues can I send?",
    a: "You can send enquiries for toilets, showers, baths, basins, bathroom leaks, bathroom taps, slow drainage, weak water flow and bathroom pipework concerns.",
  },
  {
    q: "What details help with a bathroom leak enquiry?",
    a: "Say where the water appears, which fixture is nearby, whether it happens after using the toilet, shower, bath or basin, and your Wolverhampton area.",
  },
  {
    q: "What if my shower drains slowly?",
    a: "Mention whether water stays in the shower tray, whether there is a smell or gurgling, and whether the bath or basin is also draining slowly.",
  },
  {
    q: "What if water is around the toilet?",
    a: "Say whether water appears after flushing, around the base, from pipework, or on the floor nearby. If the toilet is also blocked, mention that clearly.",
  },
  {
    q: "Should I use the bathroom page or another page?",
    a: "Use this page for general bathroom plumbing. Use blocked toilet, blocked drains, leak repair or water pressure pages if one of those describes the issue more closely.",
  },
];

export default function BathroomPlumberWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bathroom Plumber Wolverhampton Enquiries",
    serviceType: "Bathroom plumbing, toilet, shower, bath and basin enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/bathroom-plumber-wolverhampton",
    description:
      "Wolverhampton bathroom plumbing enquiry page covering toilets, showers, baths, basins, bathroom leaks, bathroom taps, slow drainage and bathroom pipework issues.",
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
        name: "Bathroom Plumber Wolverhampton",
        item: "https://wolverhamptonplumber.co.uk/bathroom-plumber-wolverhampton",
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
                  Toilet, shower, bath and basin enquiries
                </div>

                <h1>
                  Bathroom Plumber
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Bathroom plumbing problems can involve toilets, showers,
                  baths, basins, taps, waste pipes or visible water on the
                  floor. Send your Wolverhampton area, which bathroom fixture is
                  affected, what is happening, and whether the problem appears
                  after use.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Describe Bathroom Issue
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Bathroom Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Toilets and basins</span>
                  <span>Showers and baths</span>
                  <span>Bathroom leaks</span>
                </div>

                <small>
                  If water is near electrics, spreading through a ceiling, or
                  creating a safety risk, keep safe first and include that
                  clearly in the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Bathroom enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Useful bathroom message</p>
                  <h2>Name the fixture first</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Fixture</span>
                      <strong>Toilet, shower, bath, basin or tap</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, blockage, slow drain or weak flow</strong>
                    </div>
                    <div>
                      <span>When</span>
                      <strong>All the time or after use?</strong>
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

            <div className={styles.heroStats}>
              <div>
                <strong>Bathroom</strong>
                <span>toilets, showers, baths</span>
              </div>
              <div>
                <strong>Leaks</strong>
                <span>floor, basin, pipework</span>
              </div>
              <div>
                <strong>Drainage</strong>
                <span>bath and shower waste</span>
              </div>
              <div>
                <strong>Wolverhampton</strong>
                <span>WV area focus</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bathroomProblemSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>What bathroom issue is it?</div>
              <h2>
                Bathroom plumbing enquiries work best
                <span> when the fixture is named.</span>
              </h2>
              <p>
                Say whether the problem is with the toilet, shower, bath, basin,
                tap or pipework. That makes the first message much clearer.
              </p>
            </div>

            <div className={styles.bathroomGrid}>
              {bathroomProblems.map((item) => (
                <article className={styles.bathroomCard} key={item.title}>
                  <span>Bathroom</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.bathroomZoneSection}>
          <div className={styles.container}>
            <div className={styles.bathroomZonePanel}>
              <div>
                <div className={styles.badge}>Bathroom zones</div>
                <h2>
                  Toilet, shower, bath or basin?
                  <span> Start there.</span>
                </h2>
                <p>
                  A bathroom has several possible plumbing points close
                  together. The best first message names the area before
                  describing the problem.
                </p>
              </div>

              <div className={styles.bathroomZoneGrid}>
                {bathroomZones.map((zone) => (
                  <Link
                    href={zone.href}
                    className={styles.bathroomZoneCard}
                    key={zone.href}
                  >
                    <strong>{zone.title}</strong>
                    <p>{zone.text}</p>
                    <span>Open page →</span>
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
                  Bathroom plumbing message
                  <span> checklist.</span>
                </h2>
                <p>
                  These details help separate toilet, shower, bath, basin, leak
                  and drainage enquiries.
                </p>
              </div>

              <ul>
                {messageChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.bathroomSignalsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Plain-English clues</div>
              <h2>
                Describe what happens
                <span> when the bathroom is used.</span>
              </h2>
              <p>
                You do not need to diagnose the fault. The pattern is often the
                most useful information.
              </p>
            </div>

            <div className={styles.bathroomSignalsGrid}>
              {bathroomSignals.map((item) => (
                <article className={styles.bathroomSignalCard} key={item.title}>
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
                Bathroom issues often connect to
                <span> toilets, drains, leaks or pressure.</span>
              </h2>
              <p>
                Choose the closest page if the bathroom issue is mainly a
                blockage, leak, slow drain or weak water flow.
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
                Good bathroom messages
                <span> are specific.</span>
              </h2>
              <p>
                Name the fixture, the symptom, the area and whether it happens
                after using it.
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
                Bathroom plumbing enquiries across
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
              <div className={styles.badge}>Bathroom plumbing questions</div>
              <h2>
                Wolverhampton bathroom plumber
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
              <h2>Bathroom plumbing problem in Wolverhampton?</h2>
              <p>
                Send which fixture is affected, what is happening, whether water
                appears after use, and your Wolverhampton area.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Describe Bathroom Issue
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Bathroom Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
