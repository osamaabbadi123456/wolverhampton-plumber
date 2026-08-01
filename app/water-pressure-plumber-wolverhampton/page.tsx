import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20water%20pressure%20problem%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Water Pressure Plumber Wolverhampton | Low Water Flow",
  description:
    "Water pressure plumber Wolverhampton enquiries for low water pressure, weak tap flow, shower pressure problems, sudden pressure drops and hot or cold water flow issues.",
  keywords: [
    "water pressure plumber Wolverhampton",
    "low water pressure Wolverhampton",
    "low water flow Wolverhampton",
    "shower pressure Wolverhampton",
    "weak tap flow Wolverhampton",
    "plumber Wolverhampton",
    "emergency plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/water-pressure-plumber-wolverhampton",
  },
  openGraph: {
    title: "Water Pressure Plumber Wolverhampton | Low Water Flow",
    description:
      "Send a clear WhatsApp enquiry for low water pressure, weak taps, shower pressure issues and sudden pressure drops in Wolverhampton.",
    url: "https://wolverhamptonplumber.co.uk/water-pressure-plumber-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const pressureProblems = [
  {
    title: "Low pressure from one tap",
    text: "If only one tap is weak, the issue may be local to that tap, fitting or nearby pipework.",
  },
  {
    title: "Low pressure in the whole home",
    text: "If every tap and shower is weak, say that clearly because it is different from a single tap problem.",
  },
  {
    title: "Shower pressure problem",
    text: "Mention whether the shower is electric, mixer, over-bath or part of a bathroom suite if known.",
  },
  {
    title: "Hot water weak, cold water normal",
    text: "Hot-only flow problems are different from low pressure on both hot and cold water.",
  },
  {
    title: "Sudden pressure drop",
    text: "Say when the pressure changed and whether any plumbing work or local water issue happened recently.",
  },
  {
    title: "Water flow starts then fades",
    text: "If the tap starts strongly then weakens, include that detail because it explains the pattern better.",
  },
];

const compareItems = [
  {
    title: "One tap affected",
    text: "Best described as a tap, fitting or local pipework issue. Include the room and whether hot, cold or both are weak.",
    href: "/tap-repair-wolverhampton",
  },
  {
    title: "Several taps affected",
    text: "Mention whether the kitchen, bathroom and shower are all affected, and whether neighbours have the same problem.",
    href: "/contact",
  },
  {
    title: "Shower only affected",
    text: "Say whether it is a shower pressure issue, shower temperature issue, or both flow and temperature.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    title: "Leak or water damage",
    text: "If pressure dropped and water is visible somewhere, the leak repair page may fit better.",
    href: "/leak-repair-wolverhampton",
  },
];

const messageChecklist = [
  "Your Wolverhampton area or WV postcode",
  "Whether one tap, one shower, or the whole home is affected",
  "Whether hot water, cold water, or both are weak",
  "When the pressure problem started",
  "Whether pressure dropped suddenly or slowly over time",
  "Whether any leaks, noises or visible water appeared",
  "Whether neighbours seem affected too, if known",
];

const simpleChecks = [
  {
    title: "Which outlet is weak?",
    text: "Name the exact place: kitchen tap, bathroom basin, shower, bath tap or outside tap.",
  },
  {
    title: "Hot, cold or both?",
    text: "This is one of the most useful details to include because hot-only and cold-only problems can point in different directions.",
  },
  {
    title: "Sudden or gradual?",
    text: "A sudden drop is different from water flow getting weaker over weeks or months.",
  },
  {
    title: "Any visible water?",
    text: "If low pressure comes with water stains, damp, dripping or leaking pipework, include that clearly.",
  },
];

const relatedPages = [
  {
    title: "Tap repair",
    text: "For weak flow from one tap, dripping taps, stiff taps, leaking tap bases and tap fittings.",
    href: "/tap-repair-wolverhampton",
  },
  {
    title: "Bathroom plumbing",
    text: "For shower pressure, bath taps, basin taps, toilets and bathroom pipework issues.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    title: "Kitchen plumbing",
    text: "For kitchen sink flow, under-sink pipework, appliance water supply and kitchen tap concerns.",
    href: "/kitchen-plumber-wolverhampton",
  },
  {
    title: "Leak repair",
    text: "For visible water, pipe leaks, under-sink leaks, bathroom leaks or sudden pressure drop with water damage.",
    href: "/leak-repair-wolverhampton",
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
    q: "What should I include in a water pressure enquiry?",
    a: "Include your Wolverhampton area, whether one tap or the whole home is affected, whether hot or cold water is weak, and when the pressure issue started.",
  },
  {
    q: "Is low pressure from one tap different from the whole house?",
    a: "Yes. One weak tap may be a local tap or fitting issue, while low pressure across the whole home may need a wider explanation.",
  },
  {
    q: "What if only the shower pressure is weak?",
    a: "Mention the shower type if known and whether the problem is only water flow, only temperature, or both.",
  },
  {
    q: "Can a leak cause low water pressure?",
    a: "A leak can sometimes appear alongside a pressure problem. If you see water, damp, dripping or staining, include that in the enquiry.",
  },
  {
    q: "Should I check with neighbours?",
    a: "If safe and practical, knowing whether neighbours are affected can help explain whether the issue seems local to the property or wider.",
  },
];

export default function WaterPressurePlumberWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Pressure Plumber Wolverhampton Enquiries",
    serviceType: "Low water pressure and weak water flow enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/water-pressure-plumber-wolverhampton",
    description:
      "Wolverhampton water pressure enquiry page covering low water pressure, weak tap flow, shower pressure problems, sudden pressure drops and hot or cold water flow issues.",
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
        name: "Water Pressure Plumber Wolverhampton",
        item: "https://wolverhamptonplumber.co.uk/water-pressure-plumber-wolverhampton",
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
                  Low water pressure and weak flow enquiries
                </div>

                <h1>
                  Water Pressure Plumber
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Weak water flow from a tap, poor shower pressure, or a sudden
                  pressure drop can be confusing. Send your Wolverhampton area,
                  whether one outlet or the whole home is affected, and whether
                  hot water, cold water or both are weak.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Describe Pressure Problem
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Pressure Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>One tap or whole home?</span>
                  <span>Hot, cold or both?</span>
                  <span>Shower pressure issues</span>
                </div>

                <small>
                  If a pressure drop appears with visible water, damp, dripping
                  or electrical risk, keep safe first and include that detail in
                  the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Pressure enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Useful pressure message</p>
                  <h2>Say what is weak</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Where</span>
                      <strong>One tap, shower, or whole home?</strong>
                    </div>
                    <div>
                      <span>Water</span>
                      <strong>Hot, cold, or both?</strong>
                    </div>
                    <div>
                      <span>Change</span>
                      <strong>Sudden drop or gradual problem?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>any leaks or noises?</strong>
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
                <strong>Water pressure</strong>
                <span>weak flow enquiries</span>
              </div>
              <div>
                <strong>One tap</strong>
                <span>local fixture issue</span>
              </div>
              <div>
                <strong>Whole home</strong>
                <span>wider pressure context</span>
              </div>
              <div>
                <strong>Wolverhampton</strong>
                <span>WV area focus</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.pressureIssueSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>What type of pressure issue?</div>
              <h2>
                Low water pressure needs
                <span> specific details.</span>
              </h2>
              <p>
                The most useful first detail is whether the weak flow affects
                one tap, one shower, or the whole property.
              </p>
            </div>

            <div className={styles.pressureGrid}>
              {pressureProblems.map((item) => (
                <article className={styles.pressureCard} key={item.title}>
                  <span>Flow</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pressureSplitSection}>
          <div className={styles.container}>
            <div className={styles.pressureSplitPanel}>
              <div>
                <div className={styles.badge}>Important difference</div>
                <h2>
                  One weak tap
                  <span> is not the same as weak flow everywhere.</span>
                </h2>
                <p>
                  This is the main thing to explain. A single weak tap, a weak
                  shower, and whole-property low pressure are different enquiry
                  types.
                </p>
              </div>

              <div className={styles.pressureCompareGrid}>
                {compareItems.map((item) => (
                  <Link
                    href={item.href}
                    className={styles.pressureCompareCard}
                    key={item.title}
                  >
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
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
                  Water pressure message
                  <span> checklist.</span>
                </h2>
                <p>
                  These details make the enquiry easier to understand and help
                  separate a tap problem from a wider pressure problem.
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

        <section className={styles.pressureChecksSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Simple wording</div>
              <h2>
                Do not diagnose it.
                <span> Just describe what changed.</span>
              </h2>
              <p>
                You do not need technical terms. These plain-English details are
                enough for a useful first enquiry.
              </p>
            </div>

            <div className={styles.pressureChecksGrid}>
              {simpleChecks.map((item) => (
                <article className={styles.pressureCheckCard} key={item.title}>
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
                Pressure problems can connect to
                <span> taps, bathrooms, kitchens or leaks.</span>
              </h2>
              <p>
                Choose the closest related page if the pressure problem is tied
                to one room or one fixture.
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

        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Local coverage</div>
              <h2>
                Water pressure enquiries across
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
              <div className={styles.badge}>Water pressure questions</div>
              <h2>
                Wolverhampton water pressure
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
              <h2>Low water pressure in Wolverhampton?</h2>
              <p>
                Send whether one tap, one shower or the whole home is affected,
                plus whether hot water, cold water or both are weak.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Describe Pressure Problem
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Pressure Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
