import type { Metadata } from "next";
import Link from "next/link";
import styles from "./emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Wolverhampton Plumber | Local Plumbing Enquiries & Help",
  description:
    "Need a plumber in Wolverhampton? Send a WhatsApp enquiry for leaks, blocked toilets, blocked drains, tap repairs, bathroom plumbing, heating pipework and urgent plumbing issues.",
  keywords: [
    "Wolverhampton plumber",
    "plumber Wolverhampton",
    "plumbers in Wolverhampton",
    "local plumber Wolverhampton",
    "emergency plumber Wolverhampton",
    "blocked drains Wolverhampton",
    "blocked toilet Wolverhampton",
    "tap repair Wolverhampton",
    "leak repair Wolverhampton",
    "bathroom plumber Wolverhampton",
    "heating plumber Wolverhampton",
    "plumbing help Wolverhampton",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wolverhampton Plumber | Local Plumbing Enquiries & Help",
    description:
      "Send a WhatsApp plumbing enquiry in Wolverhampton for leaks, blocked toilets, blocked drains, tap repairs, bathroom plumbing and urgent plumbing issues.",
    url: "https://wolverhamptonplumber.co.uk",
    type: "website",
    locale: "en_GB",
  },
};

const services = [
  {
    title: "Emergency Plumbing",
    text: "Send urgent Wolverhampton plumbing enquiries for leaks, burst pipe concerns, blocked toilets and sudden water problems.",
    points: [
      "Urgent plumbing issues",
      "Leaks & pipe concerns",
      "Blocked toilets",
    ],
  },
  {
    title: "Blocked Drains",
    text: "For blocked drains, slow draining water, blocked sinks, bathroom waste and outside drain concerns.",
    points: ["Blocked drains", "Blocked sinks", "Slow draining water"],
  },
  {
    title: "Blocked Toilets",
    text: "Send enquiries for toilet blockages, rising water, repeated flushing problems and urgent bathroom plumbing issues.",
    points: ["Toilet blockage", "Rising water", "Bathroom waste issues"],
  },
  {
    title: "Leaks & Pipework",
    text: "For leaking pipework, under-sink leaks, bathroom leaks, kitchen leaks and visible water problems.",
    points: ["Pipework leaks", "Under-sink leaks", "Bathroom leaks"],
  },
  {
    title: "Tap Repairs",
    text: "For dripping taps, broken taps, leaking taps, low water flow and general tap plumbing concerns.",
    points: ["Dripping taps", "Leaking taps", "Broken taps"],
  },
  {
    title: "Bathroom Plumbing",
    text: "For toilet, basin, bath, shower and bathroom pipework enquiries across Wolverhampton homes.",
    points: ["Toilets", "Showers", "Basins & baths"],
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
    q: "How do I send a Wolverhampton plumber enquiry?",
    a: "Use the WhatsApp enquiry page, choose your plumbing issue, add your Wolverhampton area and urgency, then send the pre-filled message.",
  },
  {
    q: "What plumbing issues can I send?",
    a: "You can send enquiries for leaks, blocked toilets, blocked drains, blocked sinks, tap repairs, bathroom plumbing, kitchen plumbing and heating pipework concerns.",
  },
  {
    q: "Is this a plumbing company?",
    a: "This website helps organise local plumbing enquiries in Wolverhampton. It is designed to help visitors send clear plumbing enquiry details by WhatsApp.",
  },
  {
    q: "Is attendance guaranteed?",
    a: "No. Response depends on availability, timing and the details of the enquiry. The site helps collect and organise enquiries so they can be understood clearly.",
  },
  {
    q: "What about gas or boiler work?",
    a: "Gas work and gas boiler work must be handled by a Gas Safe registered engineer. If you smell gas or suspect a gas leak, follow official emergency guidance immediately.",
  },
];

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wolverhampton Plumber",
    url: "https://wolverhamptonplumber.co.uk",
    inLanguage: "en-GB",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wolverhampton Plumber",
    url: "https://wolverhamptonplumber.co.uk",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "plumbing enquiry",
      telephone: "+447405955956",
      areaServed: "Wolverhampton",
      availableLanguage: "English",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wolverhampton Plumber Enquiries",
    serviceType: "Local plumbing enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk",
    description:
      "Local plumbing enquiry website for Wolverhampton, including leaks, blocked toilets, blocked drains, tap repairs, bathroom plumbing and urgent plumbing issues.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
                  Wolverhampton plumbing enquiries
                </div>

                <h1>
                  Wolverhampton
                  <span> Plumber</span>
                </h1>

                <p>
                  Need plumbing help in Wolverhampton? Send a WhatsApp enquiry
                  for leaks, blocked toilets, blocked drains, tap repairs,
                  bathroom plumbing, kitchen plumbing and urgent plumbing issues
                  across Wolverhampton.
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
                  <span>Local Wolverhampton focus</span>
                  <span>WhatsApp enquiry flow</span>
                  <span>WV postcode signals</span>
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
                  <span>Plumbing enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>WhatsApp plumbing enquiry</p>
                  <h2>Send your plumbing issue clearly</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston / WV1 / Wednesfield</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, blocked toilet or drain</strong>
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
                    <strong>Area + Issue + Urgency</strong>
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
                <strong>Wolverhampton</strong>
                <span>local plumber intent</span>
              </div>
              <div>
                <strong>Emergency</strong>
                <span>urgent enquiries</span>
              </div>
              <div>
                <strong>Blocked drains</strong>
                <span>toilets, sinks, drains</span>
              </div>
              <div>
                <strong>Leaks & taps</strong>
                <span>common plumbing issues</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Popular plumbing enquiries</div>
              <h2>
                Local plumbing help in Wolverhampton,
                <span> organised by issue.</span>
              </h2>
              <p>
                The site is built around the main plumbing searches people make
                when they need help quickly in Wolverhampton and nearby WV
                areas.
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
                  A Wolverhampton plumbing enquiry page.
                  <span> Built for fast WhatsApp contact.</span>
                </h2>

                <p>
                  Instead of a long form, the enquiry flow helps visitors send
                  the key details in one clear WhatsApp message: area, plumbing
                  issue, urgency and extra notes.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Clear issue type</strong>
                    <span>
                      Leaks, blocked toilets, blocked drains, tap repairs and
                      bathroom plumbing.
                    </span>
                  </div>

                  <div>
                    <strong>Local area detail</strong>
                    <span>
                      Focused on Wolverhampton, WV postcodes and nearby areas.
                    </span>
                  </div>

                  <div>
                    <strong>Simple WhatsApp route</strong>
                    <span>
                      The message opens ready to edit before the visitor sends
                      it.
                    </span>
                  </div>

                  <div>
                    <strong>Safety-first wording</strong>
                    <span>
                      Gas work must be handled by a Gas Safe registered
                      engineer.
                    </span>
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
                    <strong>Leak / drain / toilet / tap</strong>
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
              <div className={styles.badge}>Wolverhampton area coverage</div>

              <h2>
                Plumber enquiries across
                <span> Wolverhampton.</span>
              </h2>

              <p>
                Local area and WV postcode wording helps Google understand that
                this site is focused on Wolverhampton plumbing searches.
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
                Wolverhampton plumber
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
              <h2>Need a plumber in Wolverhampton?</h2>

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
