import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Bilston.";

export const metadata: Metadata = {
  title: "Plumber Bilston | Local Plumbing Enquiries Near Wolverhampton",
  description:
    "Bilston plumbing enquiries for blocked toilets, leaks, blocked drains, kitchen sinks, tap repairs, bathroom plumbing and urgent water problems.",
  keywords: [
    "plumber Bilston",
    "Bilston plumber",
    "emergency plumber Bilston",
    "blocked toilet Bilston",
    "blocked drains Bilston",
    "leak repair Bilston",
    "tap repair Bilston",
    "kitchen plumber Bilston",
    "bathroom plumber Bilston",
    "plumber near Bilston",
  ],
  alternates: {
    canonical: "/plumber-bilston",
  },
  openGraph: {
    title: "Plumber Bilston | Local Plumbing Enquiries Near Wolverhampton",
    description:
      "Send a clear WhatsApp plumbing enquiry in Bilston for blocked toilets, leaks, blocked drains, taps, sinks and bathroom plumbing.",
    url: "https://wolverhamptonplumber.co.uk/plumber-bilston",
    type: "website",
    locale: "en_GB",
  },
};

const commonBilstonIssues = [
  {
    title: "Blocked toilet in Bilston",
    text: "Useful for toilet water rising, toilets not clearing, repeated flushing issues and urgent bathroom waste problems.",
    href: "/blocked-toilet-wolverhampton",
  },
  {
    title: "Leak under sink or around pipework",
    text: "For visible water, under-sink leaks, bathroom leaks, kitchen leaks, tap leaks and water spreading into cabinets.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Kitchen sink or waste pipe problem",
    text: "For blocked kitchen sinks, slow drainage, waste pipe smells, appliance pipework and under-sink plumbing.",
    href: "/kitchen-plumber-wolverhampton",
  },
  {
    title: "Blocked drain or outside drain concern",
    text: "For slow drains, gurgling, bad smells, water not clearing and outside drain concerns around the property.",
    href: "/blocked-drains-wolverhampton",
  },
];

const bilstonMessageChecklist = [
  "Start the message with Bilston or your nearby WV area",
  "Name the issue: blocked toilet, leak, drain, tap, sink or bathroom problem",
  "Say whether water is rising, leaking, overflowing or draining slowly",
  "Mention the room: kitchen, bathroom, toilet, utility area or outside",
  "Say how urgent it feels: today, 24–48 hours, this week or flexible",
  "Add a photo only if it is safe and useful",
];

const bilstonExamples = [
  {
    label: "Blocked toilet",
    value:
      "Bilston blocked toilet. Water rises after flushing and does not clear properly. Urgent today if possible.",
  },
  {
    label: "Kitchen leak",
    value:
      "Bilston kitchen sink leak. Water appears inside the cupboard when the tap runs.",
  },
  {
    label: "Drain issue",
    value:
      "Bilston outside drain smells bad and water is draining slowly from the kitchen sink.",
  },
];

const nearbyAreas = [
  "Bilston",
  "Wolverhampton",
  "Coseley",
  "Willenhall",
  "Darlaston",
  "Ettingshall",
  "Bradley",
  "Parkfields",
  "WV14",
  "WV2",
  "WV4",
];

const faqs = [
  {
    q: "Can I send a plumbing enquiry from Bilston?",
    a: "Yes. Start the WhatsApp message with Bilston, then add the plumbing issue, urgency and any useful details.",
  },
  {
    q: "What Bilston plumbing issues can I send?",
    a: "Common enquiries include blocked toilets, leaks, blocked drains, kitchen sink problems, bathroom plumbing, tap repairs and water pressure concerns.",
  },
  {
    q: "Should I use the Bilston page or a service page?",
    a: "Use this Bilston page if area is the main thing. Use a service page like blocked toilet, blocked drains or leak repair if the issue is very specific.",
  },
  {
    q: "What is the best first message?",
    a: "A good message says the area, issue, room, urgency and whether water is leaking, rising or draining slowly.",
  },
];

export default function PlumberBilstonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumber Bilston Enquiries",
    serviceType: "Bilston plumbing enquiry routing",
    areaServed: {
      "@type": "Place",
      name: "Bilston",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/plumber-bilston",
    description:
      "Bilston plumbing enquiry page for blocked toilets, leaks, blocked drains, kitchen sinks, tap repairs, bathroom plumbing and urgent water problems.",
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
        name: "Plumber Bilston",
        item: "https://wolverhamptonplumber.co.uk/plumber-bilston",
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
                <div className={styles.badge}>Bilston plumbing enquiries</div>

                <h1>
                  Plumber
                  <span> Bilston</span>
                </h1>

                <p>
                  Need plumbing help in Bilston? Send a clear WhatsApp enquiry
                  for blocked toilets, leaks, blocked drains, kitchen sink
                  problems, tap repairs, bathroom plumbing and urgent water
                  issues. Start with the area, then explain what is happening.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Send Bilston Enquiry
                  </Link>

                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Bilston Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Bilston area focus</span>
                  <span>Blocked toilets and leaks</span>
                  <span>Kitchen and bathroom plumbing</span>
                </div>

                <small>
                  This page helps turn a Bilston plumbing problem into a clear
                  WhatsApp message. Gas work must be handled by a Gas Safe
                  registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Area enquiry</span>
                  <strong>Bilston</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Bilston message</p>
                  <h2>Area first, issue second</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston / WV14 / nearby WV area</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Toilet, leak, sink, drain or tap</strong>
                    </div>
                    <div>
                      <span>Detail</span>
                      <strong>Water rising, leaking or draining slowly?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>room + urgency</strong>
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

        <section className={styles.areaLocalSection}>
          <div className={styles.container}>
            <div className={styles.areaLocalPanel}>
              <div>
                <div className={styles.badge}>Bilston problem routing</div>
                <h2>
                  Pick the closest Bilston
                  <span> plumbing problem.</span>
                </h2>
                <p>
                  Bilston enquiries should not all go through the same generic
                  wording. Choose the closest issue so the message is useful
                  from the first line.
                </p>
              </div>

              <div className={styles.areaLocalList}>
                {commonBilstonIssues.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
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
                  Bilston plumbing message
                  <span> checklist.</span>
                </h2>
                <p>
                  The first message should explain the local area and the actual
                  plumbing symptom, not just “need plumber”.
                </p>
              </div>

              <ul>
                {bilstonMessageChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.exampleMessageSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Example Bilston messages</div>
              <h2>
                Better enquiries are
                <span> short and specific.</span>
              </h2>
              <p>
                These examples show the level of detail that makes a first
                WhatsApp message easier to understand.
              </p>
            </div>

            <div className={styles.exampleGrid}>
              {bilstonExamples.map((example) => (
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
                Bilston and nearby
                <span> Wolverhampton areas.</span>
              </h2>
              <p>
                Add the closest area or postcode in the message so the enquiry
                is clearly local.
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
              <div className={styles.badge}>Bilston questions</div>
              <h2>
                Plumber Bilston
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
              <h2>Need plumbing help in Bilston?</h2>
              <p>
                Send the area, issue, room and urgency. Example: “Bilston
                kitchen sink leak, water appears under the cupboard when the tap
                runs.”
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Send Bilston Enquiry
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Bilston Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
