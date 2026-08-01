import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Tettenhall.";

export const metadata: Metadata = {
  title: "Plumber Tettenhall | Bathroom, Tap, Leak & Plumbing Enquiries",
  description:
    "Tettenhall plumbing enquiries for bathroom plumbing, tap repairs, leaks, blocked toilets, slow drainage, kitchen sinks and urgent water problems.",
  keywords: [
    "plumber Tettenhall",
    "Tettenhall plumber",
    "emergency plumber Tettenhall",
    "bathroom plumber Tettenhall",
    "tap repair Tettenhall",
    "leak repair Tettenhall",
    "blocked toilet Tettenhall",
    "blocked drains Tettenhall",
    "plumber near Tettenhall",
  ],
  alternates: {
    canonical: "/plumber-tettenhall",
  },
  openGraph: {
    title: "Plumber Tettenhall | Bathroom, Tap, Leak & Plumbing Enquiries",
    description:
      "Send a clear WhatsApp plumbing enquiry in Tettenhall for bathroom plumbing, taps, leaks, blocked toilets and slow drainage.",
    url: "https://wolverhamptonplumber.co.uk/plumber-tettenhall",
    type: "website",
    locale: "en_GB",
  },
};

const tettenhallFocus = [
  {
    title: "Bathroom plumbing",
    text: "For toilets, showers, baths, basins, bathroom taps, bathroom leaks and slow bathroom drainage.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    title: "Tap repair",
    text: "For dripping taps, stiff taps, loose taps, tap base leaks and weak flow from one tap.",
    href: "/tap-repair-wolverhampton",
  },
  {
    title: "Leak repair",
    text: "For water under sinks, around bathroom fixtures, on floors, ceilings or near visible pipework.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Blocked toilet",
    text: "For toilet water rising, toilets not clearing, repeated flushing issues and urgent bathroom waste concerns.",
    href: "/blocked-toilet-wolverhampton",
  },
];

const detailPrompts = [
  "Which fixture is affected: toilet, shower, bath, basin, tap or sink?",
  "Does water appear only after the fixture is used?",
  "Is the issue dripping, leaking, slow-draining, blocked or weak flow?",
  "Is only one room affected or are several fixtures affected?",
  "Is the problem urgent today, within 24–48 hours, or flexible?",
  "Add Tettenhall or the closest WV area in the first line.",
];

const examples = [
  {
    label: "Bathroom leak",
    value:
      "Tettenhall bathroom leak. Water appears on the floor after using the shower.",
  },
  {
    label: "Tap problem",
    value:
      "Tettenhall basin tap is dripping constantly and the handle feels stiff.",
  },
  {
    label: "Toilet issue",
    value: "Tettenhall toilet is slow to clear and water rises after flushing.",
  },
];

const nearbyAreas = [
  "Tettenhall",
  "Tettenhall Wood",
  "Compton",
  "Finchfield",
  "Merry Hill",
  "Wolverhampton",
  "Penn",
  "Codsall",
  "WV6",
  "WV3",
];

const faqs = [
  {
    q: "Can I send a plumbing enquiry from Tettenhall?",
    a: "Yes. Start with Tettenhall or the closest WV area, then describe the plumbing issue, fixture, room and urgency.",
  },
  {
    q: "What Tettenhall plumbing issues can I send?",
    a: "Common enquiries include bathroom plumbing, tap repairs, leaks, blocked toilets, slow drains, kitchen sinks and water pressure problems.",
  },
  {
    q: "What if I only know the symptom, not the cause?",
    a: "That is fine. Say what you can see: dripping tap, water under basin, slow shower drain, toilet water rising or weak flow.",
  },
  {
    q: "Should I use the Tettenhall page or a service page?",
    a: "Use this page if the area is the main detail. Use a service page if the problem is clearly a blocked toilet, leak, tap or drain issue.",
  },
];

export default function PlumberTettenhallPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumber Tettenhall Enquiries",
    serviceType: "Tettenhall plumbing enquiry routing",
    areaServed: {
      "@type": "Place",
      name: "Tettenhall",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/plumber-tettenhall",
    description:
      "Tettenhall plumbing enquiry page for bathroom plumbing, tap repairs, leaks, blocked toilets, slow drainage and urgent water problems.",
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
        name: "Plumber Tettenhall",
        item: "https://wolverhamptonplumber.co.uk/plumber-tettenhall",
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
                  Tettenhall plumbing enquiries
                </div>

                <h1>
                  Plumber
                  <span> Tettenhall</span>
                </h1>

                <p>
                  For plumbing help in Tettenhall, a useful first message starts
                  with the fixture: toilet, shower, bath, basin, tap, sink or
                  pipework. Then add what is happening, whether water is
                  visible, and how urgent it feels.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Send Tettenhall Enquiry
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Tettenhall Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Bathroom fixtures</span>
                  <span>Taps and leaks</span>
                  <span>Clear local message</span>
                </div>

                <small>
                  Gas work must be handled by a Gas Safe registered engineer. If
                  water is near electrics, keep safe first.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Area enquiry</span>
                  <strong>Tettenhall</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>
                  <p>Tettenhall message</p>
                  <h2>Name the fixture first</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Fixture</span>
                      <strong>Toilet, shower, basin, tap or bath</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, drip, blockage or weak flow</strong>
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
          </div>
        </section>

        <section className={styles.tettenhallFocusSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Tettenhall service routes</div>
              <h2>
                Tettenhall enquiries often start
                <span> in bathrooms, taps or leaks.</span>
              </h2>
              <p>
                Use the closest service route so the message is clear and not
                just a generic plumber request.
              </p>
            </div>

            <div className={styles.tettenhallFocusGrid}>
              {tettenhallFocus.map((item) => (
                <Link
                  href={item.href}
                  className={styles.tettenhallFocusCard}
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
                  Tettenhall plumbing message
                  <span> checklist.</span>
                </h2>
                <p>
                  The clearer the first message, the easier it is to understand
                  the plumbing problem.
                </p>
              </div>

              <ul>
                {detailPrompts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.exampleMessageSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Example Tettenhall messages</div>
              <h2>
                Make the first line
                <span> local and specific.</span>
              </h2>
            </div>

            <div className={styles.exampleGrid}>
              {examples.map((example) => (
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
                Tettenhall and nearby
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
              <div className={styles.badge}>Tettenhall questions</div>
              <h2>
                Plumber Tettenhall
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
              <h2>Need plumbing help in Tettenhall?</h2>
              <p>
                Send the fixture, symptom, area and urgency in one clear
                WhatsApp message.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Send Tettenhall Enquiry
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Tettenhall Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
