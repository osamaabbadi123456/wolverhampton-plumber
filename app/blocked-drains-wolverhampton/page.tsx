import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20blocked%20drain%20or%20blocked%20toilet%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Blocked Drains Wolverhampton | Drain & Toilet Enquiries",
  description:
    "Blocked drains Wolverhampton enquiries by WhatsApp. Send details for blocked toilets, blocked sinks, slow draining water, bathroom waste and outside drain concerns.",
  keywords: [
    "blocked drains Wolverhampton",
    "blocked drain Wolverhampton",
    "blocked toilet Wolverhampton",
    "blocked sink Wolverhampton",
    "drain plumber Wolverhampton",
    "drainage Wolverhampton",
    "plumber Wolverhampton",
    "emergency plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/blocked-drains-wolverhampton",
  },
  openGraph: {
    title: "Blocked Drains Wolverhampton | Drain & Toilet Enquiries",
    description:
      "Send a WhatsApp enquiry for blocked drains, blocked toilets, blocked sinks, slow draining water and drainage concerns in Wolverhampton.",
    url: "https://wolverhamptonplumber.co.uk/blocked-drains-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const services = [
  {
    title: "Blocked Drains",
    text: "Send an enquiry for blocked drains, outside drain concerns, slow draining water and drainage problems around Wolverhampton homes.",
    points: [
      "Outside drain concerns",
      "Slow draining water",
      "Drainage enquiries",
    ],
  },
  {
    title: "Blocked Toilets",
    text: "For urgent toilet blockages, rising water, repeated flushing issues and bathroom waste problems.",
    points: ["Toilet blockage", "Rising water", "Bathroom waste issues"],
  },
  {
    title: "Blocked Sinks",
    text: "For blocked kitchen sinks, bathroom basins, slow draining plugholes and waste pipe concerns.",
    points: [
      "Kitchen sink blockage",
      "Bathroom basin blockage",
      "Waste pipe concern",
    ],
  },
  {
    title: "Shower & Bath Drainage",
    text: "For slow draining showers, bath drainage problems, smells from waste pipes or repeated bathroom blockages.",
    points: ["Shower drainage", "Bath drainage", "Bathroom smells"],
  },
  {
    title: "Kitchen Waste Pipes",
    text: "For kitchen waste pipe concerns, sink drainage problems, appliance waste issues and under-sink pipework.",
    points: ["Kitchen waste", "Under-sink pipework", "Appliance waste"],
  },
  {
    title: "Urgent Drain Enquiries",
    text: "If the issue feels urgent, use the WhatsApp enquiry page to send the area, problem and urgency clearly.",
    points: ["Urgent today", "24–48 hours", "Clear WhatsApp message"],
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
    q: "Can I send a blocked drain enquiry in Wolverhampton?",
    a: "Yes. You can send a WhatsApp enquiry with your Wolverhampton area, the type of blockage, how urgent it is and any useful details.",
  },
  {
    q: "What blocked drain problems can I send?",
    a: "Common enquiries include blocked drains, blocked toilets, blocked sinks, slow draining water, shower drainage, bath drainage and kitchen waste pipe concerns.",
  },
  {
    q: "Should I include photos or details?",
    a: "Yes. If possible, include the area, what is blocked, whether water is rising or draining slowly, and any photos that help explain the issue.",
  },
  {
    q: "Is attendance guaranteed?",
    a: "No. This website helps organise local plumbing enquiries in Wolverhampton. Response depends on availability, timing and the details of the enquiry.",
  },
];

export default function BlockedDrainsWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Blocked Drains Wolverhampton Enquiries",
    serviceType: "Blocked drain and blocked toilet enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/blocked-drains-wolverhampton",
    description:
      "Blocked drains Wolverhampton enquiry page for blocked toilets, blocked sinks, slow draining water, bathroom drainage and outside drain concerns.",
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
                <div className={styles.badge}>
                  Blocked drain enquiries in Wolverhampton
                </div>

                <h1>
                  Blocked Drains
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Need help with a blocked drain, blocked toilet, blocked sink
                  or slow draining water in Wolverhampton? Send a WhatsApp
                  enquiry with your area, issue and urgency.
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
                    WhatsApp Drain Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Blocked drain enquiries</span>
                  <span>WV postcode focused</span>
                  <span>Clear WhatsApp message</span>
                </div>

                <small>
                  This website helps organise local plumbing and drainage
                  enquiries. Response depends on availability, timing and the
                  details of the enquiry. Serious flooding, sewage issues or
                  safety risks may need urgent specialist help.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Drain enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>WhatsApp drain enquiry</p>
                  <h2>Send the blockage clearly</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston / WV1 / Wednesfield</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Blocked drain, toilet or sink</strong>
                    </div>
                    <div>
                      <span>Urgency</span>
                      <strong>Today / 24–48 hours / flexible</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Message format</span>
                    <strong>Area + Blockage + Urgency</strong>
                  </div>
                  <div>
                    <span>Sent by</span>
                    <strong>WhatsApp</strong>
                  </div>
                </div>
              </aside>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>Blocked drains</strong>
                <span>outside drain concerns</span>
              </div>
              <div>
                <strong>Blocked toilets</strong>
                <span>urgent bathroom issues</span>
              </div>
              <div>
                <strong>Blocked sinks</strong>
                <span>kitchen & bathroom waste</span>
              </div>
              <div>
                <strong>Wolverhampton</strong>
                <span>WV area focused</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Drainage search intent</div>
              <h2>
                Blocked drain and toilet enquiries,
                <span> clearly organised.</span>
              </h2>
              <p>
                This page targets Wolverhampton users searching for blocked
                drains, blocked toilets, blocked sinks and slow drainage help.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {services.map((service) => (
                <article className={styles.serviceCard} key={service.title}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.trustGrid}>
              <div>
                <div className={styles.badge}>Clear local enquiry process</div>
                <h2>
                  A Wolverhampton blocked drain enquiry page.
                  <span> Built for fast WhatsApp contact.</span>
                </h2>
                <p>
                  Instead of a long form, the enquiry flow helps the visitor
                  send the essential details: the Wolverhampton area, what is
                  blocked, how urgent the problem is and any extra notes.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Clear issue type</strong>
                    <span>
                      Blocked drain, blocked toilet, blocked sink or slow
                      drainage.
                    </span>
                  </div>
                  <div>
                    <strong>Local area detail</strong>
                    <span>
                      Focused on Wolverhampton, WV postcodes and nearby areas.
                    </span>
                  </div>
                  <div>
                    <strong>Useful urgency context</strong>
                    <span>
                      The enquiry can say today, 24–48 hours or flexible.
                    </span>
                  </div>
                  <div>
                    <strong>Simple WhatsApp route</strong>
                    <span>The message opens ready to edit before sending.</span>
                  </div>
                </div>
              </div>

              <div className={styles.enquiryBox}>
                <div className={styles.checkCircle}>✓</div>
                <h3>What the visitor sends</h3>

                <div className={styles.enquiryRows}>
                  <div>
                    <span>Area</span>
                    <strong>Bilston / WV1 / Wednesfield</strong>
                  </div>
                  <div>
                    <span>Issue</span>
                    <strong>Blocked drain / toilet / sink</strong>
                  </div>
                  <div>
                    <span>Urgency</span>
                    <strong>Today / 24–48 hours / flexible</strong>
                  </div>
                  <div>
                    <span>Channel</span>
                    <strong>WhatsApp message</strong>
                  </div>
                </div>

                <Link href="/contact" className={styles.fullBtn}>
                  Open Enquiry Page
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Local relevance</div>
              <h2>
                Blocked drain enquiries across
                <span> Wolverhampton.</span>
              </h2>
              <p>
                The page includes Wolverhampton areas and WV postcode signals to
                support local relevance for drain and toilet blockage searches.
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
              <div className={styles.badge}>Questions</div>
              <h2>
                Blocked drains
                <span> Wolverhampton FAQs.</span>
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
              <h2>Need help with blocked drains in Wolverhampton?</h2>
              <p>
                Start with a WhatsApp enquiry. Choose your issue, area and
                urgency, then send the pre-filled message.
              </p>

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
                  WhatsApp Drain Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
