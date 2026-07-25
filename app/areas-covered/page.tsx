import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Areas Covered | Wolverhampton Plumber & Plumbing Enquiries",
  description:
    "Wolverhampton plumber enquiries across Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton, Whitmore Reans, Willenhall, Sedgley, Codsall and WV postcodes.",
  keywords: [
    "Wolverhampton plumber areas",
    "plumber Bilston",
    "plumber Wednesfield",
    "plumber Tettenhall",
    "plumber Penn Wolverhampton",
    "plumber Bushbury",
    "plumber Compton Wolverhampton",
    "plumber Whitmore Reans",
    "plumber Willenhall",
    "plumber Sedgley",
    "plumber Codsall",
    "WV plumber",
    "local plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/areas-covered",
  },
};

const areas = [
  {
    title: "Wolverhampton City Centre",
    text: "Plumbing enquiries for central Wolverhampton, including leaks, blocked toilets, tap repairs and urgent plumbing issues.",
    points: ["WV1 focus", "City centre enquiries", "General plumbing issues"],
  },
  {
    title: "Bilston",
    text: "Send plumbing enquiries from Bilston for blocked drains, leaking pipes, blocked toilets and bathroom plumbing concerns.",
    points: ["Bilston plumber enquiries", "Blocked toilets", "Leaks & drains"],
  },
  {
    title: "Wednesfield",
    text: "WhatsApp plumbing enquiries from Wednesfield for sinks, toilets, taps, drains and urgent household plumbing issues.",
    points: ["Wednesfield enquiries", "Tap repairs", "Drain concerns"],
  },
  {
    title: "Tettenhall",
    text: "Local plumbing enquiry support for Tettenhall homes, including leaks, bathrooms, kitchens and heating pipework concerns.",
    points: ["Tettenhall area", "Bathroom plumbing", "Heating pipework"],
  },
  {
    title: "Penn",
    text: "Plumbing enquiries around Penn for blocked sinks, pipework leaks, water pressure problems and general plumbing issues.",
    points: ["Penn Wolverhampton", "Water pressure", "Blocked sinks"],
  },
  {
    title: "Bushbury",
    text: "Send Bushbury plumbing enquiries by WhatsApp for blocked toilets, drains, leaking taps and urgent plumbing problems.",
    points: ["Bushbury enquiries", "Blocked drains", "Urgent plumbing"],
  },
  {
    title: "Compton",
    text: "Plumbing enquiry coverage for Compton, including leaks, tap repairs, bathroom plumbing and blocked drainage concerns.",
    points: ["Compton area", "Leak concerns", "Tap repairs"],
  },
  {
    title: "Whitmore Reans",
    text: "WhatsApp plumbing enquiries from Whitmore Reans for leaks, blocked toilets, drains and general plumbing issues.",
    points: ["Whitmore Reans", "Blocked toilets", "Pipework leaks"],
  },
  {
    title: "Willenhall",
    text: "Plumbing enquiries around Willenhall for blocked drains, toilet problems, kitchen plumbing and bathroom issues.",
    points: ["Willenhall enquiries", "Kitchen plumbing", "Drainage concerns"],
  },
];

const postcodes = [
  "WV1",
  "WV2",
  "WV3",
  "WV4",
  "WV5",
  "WV6",
  "WV10",
  "WV11",
  "WV14",
  "Bilston",
  "Wednesfield",
  "Tettenhall",
  "Penn",
  "Bushbury",
  "Compton",
  "Whitmore Reans",
  "Willenhall",
  "Sedgley",
  "Codsall",
];

const faqs = [
  {
    q: "What areas does Wolverhampton Plumber cover?",
    a: "This website is focused on Wolverhampton plumbing enquiries, including Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton, Whitmore Reans, Willenhall, Sedgley, Codsall and nearby WV postcodes.",
  },
  {
    q: "Can I send a plumbing enquiry from a nearby Wolverhampton area?",
    a: "Yes. Use the WhatsApp enquiry page and choose your area. If your exact area is not listed, choose Other Wolverhampton area and add the details in the message.",
  },
  {
    q: "What plumbing issues can I send from these areas?",
    a: "Common enquiries include leaks, blocked toilets, blocked drains, blocked sinks, tap repairs, bathroom plumbing, kitchen plumbing and heating pipework concerns.",
  },
  {
    q: "Is attendance guaranteed in every area?",
    a: "No. This website helps organise local plumbing enquiries in Wolverhampton. Response depends on availability, timing and the details of the enquiry.",
  },
];

export default function AreasCoveredPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wolverhampton Plumber Areas Covered",
    serviceType: "Local plumbing enquiries",
    areaServed: postcodes,
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/areas-covered",
    description:
      "Areas covered page for Wolverhampton plumbing enquiries across WV postcodes and nearby local areas.",
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

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <div className={styles.badge}>Wolverhampton area coverage</div>

                <h1>
                  Wolverhampton Plumber
                  <span> Areas Covered</span>
                </h1>

                <p>
                  Send plumbing enquiries across Wolverhampton and nearby WV
                  areas, including Bilston, Wednesfield, Tettenhall, Penn,
                  Bushbury, Compton, Whitmore Reans, Willenhall, Sedgley and
                  Codsall.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Start WhatsApp Enquiry
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Plumbing Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Wolverhampton focused</span>
                  <span>WV postcode signals</span>
                  <span>WhatsApp enquiry flow</span>
                </div>

                <small>
                  This website helps organise local plumbing enquiries in
                  Wolverhampton. Response depends on availability, timing and
                  the details of the enquiry. Gas work must be handled by a Gas
                  Safe registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Area enquiry</span>
                  <strong>WV postcodes</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Local area signal</p>
                  <h2>Tell us where the issue is</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston / Wednesfield / WV1</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, blocked toilet or drain</strong>
                    </div>
                    <div>
                      <span>Route</span>
                      <strong>WhatsApp enquiry</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Local intent</span>
                    <strong>Wolverhampton + Area</strong>
                  </div>
                  <div>
                    <span>Message</span>
                    <strong>Area + Issue</strong>
                  </div>
                </div>
              </aside>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>WV1–WV14</strong>
                <span>postcode relevance</span>
              </div>
              <div>
                <strong>Bilston</strong>
                <span>local area search</span>
              </div>
              <div>
                <strong>Wednesfield</strong>
                <span>nearby enquiry area</span>
              </div>
              <div>
                <strong>Tettenhall</strong>
                <span>local plumbing intent</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Local area pages</div>
              <h2>
                Plumbing enquiries across
                <span> Wolverhampton areas.</span>
              </h2>
              <p>
                These area mentions help Google understand that the site is not
                generic. It is built around Wolverhampton plumbing searches and
                nearby local communities.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {areas.map((area) => (
                <article className={styles.serviceCard} key={area.title}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <ul>
                    {area.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>WV postcode relevance</div>
              <h2>
                Wolverhampton plumber enquiries by
                <span> postcode and area.</span>
              </h2>
              <p>
                Use the WhatsApp enquiry page and include your area or postcode
                so the plumbing issue is clear from the first message.
              </p>
            </div>

            <div className={styles.areaPills}>
              {postcodes.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.trustGrid}>
              <div>
                <div className={styles.badge}>Internal linking hub</div>
                <h2>
                  Choose the closest plumbing issue.
                  <span> Then send your enquiry.</span>
                </h2>

                <p>
                  Area pages are useful, but the strongest enquiry path is still
                  issue first: emergency plumbing, blocked drains, heating
                  concerns, leaks or tap repairs.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Emergency plumbing</strong>
                    <span>
                      For urgent leaks, blocked toilets and sudden water issues.
                    </span>
                  </div>
                  <div>
                    <strong>Blocked drains</strong>
                    <span>
                      For blocked toilets, sinks, slow drainage and outside
                      drains.
                    </span>
                  </div>
                  <div>
                    <strong>Heating plumbing</strong>
                    <span>
                      For radiator leaks, pressure concerns and heating
                      pipework.
                    </span>
                  </div>
                  <div>
                    <strong>Contact page</strong>
                    <span>
                      Builds a WhatsApp message with area, issue and urgency.
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.enquiryBox}>
                <div className={styles.checkCircle}>✓</div>
                <h3>Start by issue</h3>

                <div className={styles.enquiryRows}>
                  <div>
                    <span>Urgent</span>
                    <strong>Emergency plumber</strong>
                  </div>
                  <div>
                    <span>Drainage</span>
                    <strong>Blocked drains</strong>
                  </div>
                  <div>
                    <span>Heating</span>
                    <strong>Boiler & heating</strong>
                  </div>
                  <div>
                    <span>Send</span>
                    <strong>WhatsApp enquiry</strong>
                  </div>
                </div>

                <Link href="/contact" className={styles.fullBtn}>
                  Open Enquiry Page
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Questions</div>
              <h2>
                Wolverhampton plumber areas
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
              <h2>Need plumbing help in a Wolverhampton area?</h2>
              <p>Send a WhatsApp enquiry with your area, issue and urgency.</p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Start WhatsApp Enquiry
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Plumbing Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
