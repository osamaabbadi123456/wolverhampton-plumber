import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20tap%20repair%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Tap Repair Wolverhampton | Dripping, Leaking & Broken Taps",
  description:
    "Tap repair Wolverhampton enquiries for dripping taps, leaking tap bases, stiff taps, broken taps, kitchen taps, bathroom taps and poor water flow.",
  keywords: [
    "tap repair Wolverhampton",
    "dripping tap Wolverhampton",
    "leaking tap Wolverhampton",
    "broken tap Wolverhampton",
    "kitchen tap repair Wolverhampton",
    "bathroom tap repair Wolverhampton",
    "tap plumber Wolverhampton",
    "plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/tap-repair-wolverhampton",
  },
  openGraph: {
    title: "Tap Repair Wolverhampton | Dripping, Leaking & Broken Taps",
    description:
      "Send a clear WhatsApp enquiry for dripping taps, leaking tap bases, stiff taps, broken taps and tap water flow problems in Wolverhampton.",
    url: "https://wolverhamptonplumber.co.uk/tap-repair-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const tapProblems = [
  {
    title: "Dripping tap",
    text: "A tap that keeps dripping from the spout can waste water and may get worse over time. Say whether it drips constantly or only after use.",
  },
  {
    title: "Leaking tap base",
    text: "Water around the base of the tap can point to a seal, fitting or connection issue. Mention whether it happens when the tap is turned on.",
  },
  {
    title: "Tap will not turn off",
    text: "If the tap will not close properly, describe whether the water is trickling, running, or getting worse.",
  },
  {
    title: "Stiff or loose tap",
    text: "A stiff, loose or spinning tap handle is worth describing clearly, especially if the tap is hard to use.",
  },
  {
    title: "Low flow from one tap",
    text: "If only one tap has weak flow, that is different from low pressure across the whole home.",
  },
  {
    title: "Kitchen or bathroom tap issue",
    text: "Say whether the tap is in the kitchen, bathroom, cloakroom, utility area or outside.",
  },
];

const tapLocations = [
  {
    title: "Kitchen taps",
    text: "Useful for kitchen tap leaks, stiff mixer taps, poor flow, under-sink water and tap base leaks.",
    href: "/kitchen-plumber-wolverhampton",
  },
  {
    title: "Bathroom taps",
    text: "Useful for basin taps, bath taps, mixer taps, loose taps and visible water around bathroom fittings.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    title: "Leaks around taps",
    text: "If the main issue is water spreading under the sink or around pipework, the leak repair page may fit better.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Water pressure problems",
    text: "If the main issue is weak flow from taps or showers, the water pressure page may be more relevant.",
    href: "/water-pressure-plumber-wolverhampton",
  },
];

const messageChecklist = [
  "Which tap is affected: kitchen, bathroom, bath, basin or outside tap",
  "Whether it is dripping, leaking, stiff, loose or not turning off",
  "Whether water is visible under the sink or around the tap base",
  "Whether hot, cold or both sides are affected",
  "Whether the water flow is weak from one tap or several taps",
  "Your Wolverhampton area or WV postcode",
];

const quickExamples = [
  {
    label: "Dripping tap",
    value:
      "Kitchen tap in WV3 keeps dripping from the spout, even when fully turned off.",
  },
  {
    label: "Base leak",
    value:
      "Bathroom basin tap in Bilston leaks around the base when the tap is running.",
  },
  {
    label: "Low flow",
    value:
      "Cold water from one upstairs bathroom tap is very weak. Other taps seem normal.",
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
    q: "What should I include in a tap repair enquiry?",
    a: "Include the room, the tap type if known, whether it is dripping, leaking, stiff or not turning off, and your Wolverhampton area.",
  },
  {
    q: "Is a dripping tap urgent?",
    a: "It depends how much water is escaping and whether it is getting worse. If the tap will not turn off or water is spreading, treat it as more urgent.",
  },
  {
    q: "What if water is leaking under the sink?",
    a: "Mention the visible water and whether it appears around the tap, waste pipe or supply pipe. The leak repair page may also be relevant.",
  },
  {
    q: "What if only one tap has low water flow?",
    a: "Say that only one tap is affected. Low flow from one tap is different from a whole-property water pressure issue.",
  },
  {
    q: "Can I send photos?",
    a: "Yes, if safe. A photo of the tap and the wider sink area can help explain the issue.",
  },
];

export default function TapRepairWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tap Repair Wolverhampton Enquiries",
    serviceType: "Tap repair and leaking tap enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/tap-repair-wolverhampton",
    description:
      "Wolverhampton tap repair enquiry page covering dripping taps, leaking tap bases, stiff taps, broken taps, kitchen taps, bathroom taps and poor water flow.",
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
        name: "Tap Repair Wolverhampton",
        item: "https://wolverhamptonplumber.co.uk/tap-repair-wolverhampton",
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
                  Dripping, leaking and broken tap enquiries
                </div>

                <h1>
                  Tap Repair
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  A dripping tap, leaking tap base, stiff handle or tap that
                  will not turn off can be annoying and waste water. Send your
                  Wolverhampton area, which tap is affected, what it is doing,
                  and whether water is visible around the sink or pipework.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Describe the Tap Problem
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Tap Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Dripping taps</span>
                  <span>Kitchen and bathroom taps</span>
                  <span>One tap or several?</span>
                </div>

                <small>
                  If water is spreading under a sink or near electrics, keep
                  safe first and include that detail clearly in the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Tap enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Useful tap message</p>
                  <h2>Say how the tap is failing</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Tap</span>
                      <strong>Kitchen, bathroom, bath or basin</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Dripping, leaking, stiff or low flow</strong>
                    </div>
                    <div>
                      <span>Water</span>
                      <strong>Visible around tap base or under sink?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>hot, cold or both?</strong>
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
                <strong>Tap repair</strong>
                <span>drips, leaks and fittings</span>
              </div>
              <div>
                <strong>Kitchen taps</strong>
                <span>sink and base leaks</span>
              </div>
              <div>
                <strong>Bathroom taps</strong>
                <span>basin, bath and mixer taps</span>
              </div>
              <div>
                <strong>Wolverhampton</strong>
                <span>WV area focus</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.tapProblemSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>What is wrong with the tap?</div>
              <h2>
                Tap problems are easier to explain
                <span> when you name the symptom.</span>
              </h2>
              <p>
                The first message does not need technical terms. Just describe
                what the tap is doing and where it is.
              </p>
            </div>

            <div className={styles.tapGrid}>
              {tapProblems.map((item) => (
                <article className={styles.tapCard} key={item.title}>
                  <span>Tap</span>
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
                  Tap repair message
                  <span> checklist.</span>
                </h2>
                <p>
                  These details make the enquiry clearer and reduce unnecessary
                  back-and-forth.
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

        <section className={styles.tapCompareSection}>
          <div className={styles.container}>
            <div className={styles.tapComparePanel}>
              <div>
                <div className={styles.badge}>One tap or the whole home?</div>
                <h2>
                  Weak flow from one tap
                  <span> is different from low pressure everywhere.</span>
                </h2>
                <p>
                  If only one tap is affected, say that. If several taps,
                  showers or the whole home have weak water flow, use the water
                  pressure page instead.
                </p>
              </div>

              <div className={styles.tapCompareActions}>
                <Link href="/water-pressure-plumber-wolverhampton">
                  Water Pressure Page
                </Link>
                <Link href="/leak-repair-wolverhampton">Leak Repair Page</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Choose the closest page</div>
              <h2>
                Tap problems often connect to
                <span> nearby plumbing issues.</span>
              </h2>
              <p>
                Use the closest page so the enquiry is specific and easier to
                understand.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {tapLocations.map((item) => (
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
                A clear tap message
                <span> is short and specific.</span>
              </h2>
              <p>
                Use plain English. The key is the tap location, symptom and
                Wolverhampton area.
              </p>
            </div>

            <div className={styles.exampleGrid}>
              {quickExamples.map((example) => (
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
                Tap repair enquiries across
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
              <div className={styles.badge}>Tap repair questions</div>
              <h2>
                Wolverhampton tap repair
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
              <h2>Dripping, leaking or broken tap in Wolverhampton?</h2>
              <p>
                Send which tap is affected, what it is doing, whether water is
                visible, and your Wolverhampton area.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Describe the Tap Problem
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Tap Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
