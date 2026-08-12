import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20leak%20or%20pipe%20problem%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Leak Repair Wolverhampton | Pipes, Sinks, Taps & Water Leaks",
  description:
    "Leak repair Wolverhampton enquiries for leaking pipes, under-sink leaks, bathroom leaks, kitchen leaks, tap leaks and visible water problems.",
  keywords: [
    "leak repair Wolverhampton",
    "leaking pipe Wolverhampton",
    "pipe leak Wolverhampton",
    "water leak Wolverhampton",
    "under sink leak Wolverhampton",
    "bathroom leak Wolverhampton",
    "kitchen leak Wolverhampton",
    "tap leak Wolverhampton",
    "burst pipe Wolverhampton",
    "emergency plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/leak-repair-wolverhampton",
  },
  openGraph: {
    title: "Leak Repair Wolverhampton | Pipes, Sinks, Taps & Water Leaks",
    description:
      "Send a clear WhatsApp enquiry for leaking pipes, under-sink leaks, bathroom leaks, kitchen leaks and visible water problems in Wolverhampton.",
    url: "https://wolverhamptonplumber.co.uk/leak-repair-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const leakTypes = [
  {
    title: "Under-sink leak",
    text: "Water under a kitchen sink or bathroom basin is often easier to explain with a short note about where the water appears.",
  },
  {
    title: "Pipework leak",
    text: "Visible water on pipework, joints or fittings should be described with the room, location and whether it is dripping or flowing.",
  },
  {
    title: "Bathroom leak",
    text: "Mention whether the leak is near the toilet, bath, shower, basin, taps, waste pipe or floor area.",
  },
  {
    title: "Kitchen leak",
    text: "Kitchen leaks can involve taps, sink waste, washing machine pipework, dishwasher connections or under-sink fittings.",
  },
  {
    title: "Tap leak",
    text: "Say whether the tap is dripping from the spout, leaking around the base, or not closing properly.",
  },
  {
    title: "Water appearing from ceiling or wall",
    text: "If water is coming through a ceiling or wall, keep safe and describe what room is above or nearby if known.",
  },
];

const firstSteps = [
  "If safe, check whether you know where the internal stop tap is",
  "Keep away from electrical risk if water is near sockets, lights or appliances",
  "Describe whether the leak is dripping slowly or flowing quickly",
  "Mention the room: kitchen, bathroom, toilet, utility area or ceiling",
  "Say whether the leak started suddenly or has been getting worse",
  "Take photos only if it is safe and useful",
];

const relatedPages = [
  {
    title: "Emergency plumbing",
    text: "Use this if water is spreading, the leak feels urgent, or there is a burst pipe concern.",
    href: "/emergency-plumber-wolverhampton",
  },
  {
    title: "Kitchen plumbing",
    text: "For leaks around kitchen sinks, appliance pipework, waste pipes, taps and under-sink fittings.",
    href: "/kitchen-plumber-wolverhampton",
  },
  {
    title: "Bathroom plumbing",
    text: "For toilet, basin, shower, bath, bathroom tap and bathroom pipework leaks.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    title: "Tap repair",
    text: "For dripping taps, tap base leaks, stiff taps, broken taps and poor shut-off.",
    href: "/tap-repair-wolverhampton",
  },
];

const photoTips = [
  {
    title: "Show the wider area",
    text: "One photo showing the sink, toilet, bath or pipework helps explain where the leak is located.",
  },
  {
    title: "Show the water source",
    text: "If visible, show where the water seems to be coming from without touching unsafe fittings.",
  },
  {
    title: "Show the room context",
    text: "A quick note like kitchen, upstairs bathroom or under the stairs is often more useful than a close-up only.",
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
    q: "What should I do first if water is leaking?",
    a: "If safe, try to identify where the water is coming from and whether the internal stop tap can be used. Keep away from electrical risk.",
  },
  {
    q: "What details should I send for a leak repair enquiry?",
    a: "Send your Wolverhampton area, the room, where the water appears, whether it is dripping or flowing, and when the leak started.",
  },
  {
    q: "Should I send a photo of the leak?",
    a: "Yes, if it is safe. A clear photo of the wider area and the visible water can help explain the issue quickly.",
  },
  {
    q: "Is an under-sink leak urgent?",
    a: "It can be, especially if water is spreading, reaching cabinets, flooring or electrics. Mention how fast the leak is and whether it is getting worse.",
  },
  {
    q: "What if the leak may involve a boiler or gas appliance?",
    a: "Gas work and gas boiler work must be handled by a Gas Safe registered engineer. If you smell gas, follow official emergency guidance immediately.",
  },
];

export default function LeakRepairWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Leak Repair Wolverhampton Enquiries",
    serviceType: "Leak repair and water leak enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/leak-repair-wolverhampton",
    description:
      "Wolverhampton leak repair enquiry page covering leaking pipes, under-sink leaks, bathroom leaks, kitchen leaks, tap leaks and visible water problems.",
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
        name: "Leak Repair Wolverhampton",
        item: "https://wolverhamptonplumber.co.uk/leak-repair-wolverhampton",
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
                  Water leak and pipework enquiries
                </div>

                <h1>
                  Leak Repair
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Water under a sink, a pipe dripping, a bathroom leak or a tap
                  that will not stop can become stressful fast. Send your
                  Wolverhampton area, where the water appears, how quickly it is
                  leaking, and whether the stop tap can be used safely.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Describe the Leak
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Leak Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Under-sink leaks</span>
                  <span>Pipework and taps</span>
                  <span>Stop tap details</span>
                </div>

                <small>
                  If water is near electrics, keep away from the risk area. If a
                  leak involves gas appliances or a gas smell, follow official
                  emergency guidance.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Leak enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Useful leak message</p>
                  <h2>Say where water appears</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Room</span>
                      <strong>Kitchen, bathroom, toilet or ceiling</strong>
                    </div>
                    <div>
                      <span>Speed</span>
                      <strong>Dripping, flowing or spreading?</strong>
                    </div>
                    <div>
                      <span>Stop tap</span>
                      <strong>Can water be turned off safely?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful photo</span>
                    <strong>wider area + leak point</strong>
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
                <strong>Leak repair</strong>
                <span>pipework and fittings</span>
              </div>
              <div>
                <strong>Stop tap</strong>
                <span>important first detail</span>
              </div>
              <div>
                <strong>Kitchen & bath</strong>
                <span>common leak areas</span>
              </div>
              <div>
                <strong>Wolverhampton</strong>
                <span>WV area focus</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.leakMapSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Where is the leak?</div>
              <h2>
                A good leak enquiry starts
                <span> with the location.</span>
              </h2>
              <p>
                Most people do not know the exact plumbing fault. That is fine.
                The important thing is to describe where the water appears and
                what is nearby.
              </p>
            </div>

            <div className={styles.leakMapGrid}>
              {leakTypes.map((item) => (
                <article className={styles.leakMapCard} key={item.title}>
                  <span>Water</span>
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
                  Leak repair message
                  <span> checklist.</span>
                </h2>
                <p>
                  The best first message explains what is happening without
                  trying to diagnose the plumbing fault.
                </p>
              </div>

              <ul>
                {firstSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.photoTipsSection}>
          <div className={styles.container}>
            <div className={styles.photoPanel}>
              <div>
                <div className={styles.badge}>Photos can help</div>
                <h2>
                  Send photos only
                  <span> if safe and useful.</span>
                </h2>
                <p>
                  A photo does not need to be perfect. One clear wider photo and
                  one close-up can often explain the issue better than a long
                  message.
                </p>
              </div>

              <div className={styles.photoTipsGrid}>
                {photoTips.map((tip) => (
                  <div key={tip.title}>
                    <strong>{tip.title}</strong>
                    <p>{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Related enquiry pages</div>
              <h2>
                The leak may fit
                <span> another plumbing page.</span>
              </h2>
              <p>
                These pages help separate leak enquiries by room, fixture and
                urgency, instead of sending every visitor through one generic
                page.
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
                Leak repair enquiries across
                <span> Wolverhampton and WV areas.</span>
              </h2>
              <p>
                Add your Wolverhampton area or WV postcode so the enquiry is
                clearly tied to the local area.
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
              <div className={styles.badge}>Leak repair questions</div>
              <h2>
                Wolverhampton leak repair
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
              <h2>Leaking pipe, sink, tap or bathroom fitting?</h2>
              <p>
                Send the room, where the water appears, how fast it is leaking,
                and whether the stop tap can be used safely.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Describe the Leak
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Leak Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}