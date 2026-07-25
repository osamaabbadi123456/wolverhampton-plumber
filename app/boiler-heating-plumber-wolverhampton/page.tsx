import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20boiler%20or%20heating%20plumbing%20issue%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Boiler & Heating Plumber Wolverhampton | Heating Enquiries",
  description:
    "Boiler and heating plumber Wolverhampton enquiries by WhatsApp. Send details for radiator leaks, heating pipework, water pressure, no hot water concerns and plumbing issues. Gas work must be handled by a Gas Safe engineer.",
  keywords: [
    "boiler plumber Wolverhampton",
    "heating plumber Wolverhampton",
    "boiler repair Wolverhampton",
    "emergency boiler repair Wolverhampton",
    "central heating Wolverhampton",
    "radiator plumber Wolverhampton",
    "heating pipework Wolverhampton",
    "plumber Wolverhampton",
    "emergency plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/boiler-heating-plumber-wolverhampton",
  },
  openGraph: {
    title: "Boiler & Heating Plumber Wolverhampton | Heating Enquiries",
    description:
      "Send a WhatsApp enquiry for boiler and heating plumbing issues in Wolverhampton, including radiator leaks, heating pipework and water pressure concerns.",
    url: "https://wolverhamptonplumber.co.uk/boiler-heating-plumber-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const services = [
  {
    title: "Boiler & Heating Enquiries",
    text: "Send a clear WhatsApp enquiry for boiler or heating-related plumbing concerns in Wolverhampton.",
    points: ["Boiler concern", "Heating issue", "WhatsApp enquiry"],
  },
  {
    title: "Radiator Leaks",
    text: "For leaking radiators, dripping valves, visible pipework leaks or water around radiator fittings.",
    points: ["Radiator leak", "Valve concern", "Pipework leak"],
  },
  {
    title: "Central Heating Pipework",
    text: "For heating pipework concerns, visible leaks, noisy pipes, pressure issues or radiator pipe problems.",
    points: ["Heating pipework", "Noisy pipes", "Pressure concern"],
  },
  {
    title: "No Hot Water Concerns",
    text: "If you have no hot water, send the details clearly so the issue can be understood before any next step.",
    points: ["No hot water", "Urgency details", "Property area"],
  },
  {
    title: "Water Pressure Problems",
    text: "For low water pressure, sudden pressure changes, heating pressure concerns or related plumbing symptoms.",
    points: ["Low pressure", "Pressure change", "System concern"],
  },
  {
    title: "Safe Gas Work Guidance",
    text: "Gas boiler work must be handled by a Gas Safe registered engineer. Do not rely on unqualified gas work.",
    points: ["Gas Safe required", "Safety first", "No unsafe claims"],
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
    q: "Can I send a boiler or heating plumber enquiry in Wolverhampton?",
    a: "Yes. You can send a WhatsApp enquiry with your Wolverhampton area, the issue, urgency and any useful details.",
  },
  {
    q: "What heating issues can I send?",
    a: "Common enquiries include radiator leaks, heating pipework concerns, water pressure problems, no hot water concerns and visible pipework leaks.",
  },
  {
    q: "Can this website carry out gas boiler repairs?",
    a: "This website helps organise local plumbing enquiries only. Gas boiler work must be handled by a Gas Safe registered engineer.",
  },
  {
    q: "What should I include in the WhatsApp message?",
    a: "Include your area, what heating or boiler issue you have, whether it is urgent, and any visible signs such as leaks, low pressure or no hot water.",
  },
];

export default function BoilerHeatingPlumberWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Boiler and Heating Plumber Wolverhampton Enquiries",
    serviceType: "Boiler and heating plumbing enquiries",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/boiler-heating-plumber-wolverhampton",
    description:
      "Boiler and heating plumber Wolverhampton enquiry page for radiator leaks, heating pipework, water pressure, no hot water concerns and heating-related plumbing issues.",
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
                  Boiler & heating enquiries in Wolverhampton
                </div>

                <h1>
                  Boiler & Heating Plumber
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Need help with a boiler or heating plumbing issue in
                  Wolverhampton? Send a WhatsApp enquiry for radiator leaks,
                  heating pipework, water pressure concerns, no hot water issues
                  and related plumbing problems.
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
                    WhatsApp Heating Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Heating enquiry flow</span>
                  <span>WV postcode focused</span>
                  <span>Gas Safe safety note</span>
                </div>

                <small>
                  This website helps organise local plumbing enquiries. Response
                  depends on availability, timing and the details of the
                  enquiry. Gas work and gas boiler work must be handled by a Gas
                  Safe registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Heating enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>WhatsApp heating enquiry</p>
                  <h2>Send the issue clearly</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston / WV1 / Wednesfield</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Radiator, pressure or hot water</strong>
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
                    <strong>Area + Heating Issue + Urgency</strong>
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
                <strong>Boiler concerns</strong>
                <span>safe enquiry wording</span>
              </div>
              <div>
                <strong>Radiator leaks</strong>
                <span>valves & pipework</span>
              </div>
              <div>
                <strong>Water pressure</strong>
                <span>heating concerns</span>
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
              <div className={styles.badge}>Heating search intent</div>
              <h2>
                Boiler and heating plumbing enquiries,
                <span> clearly organised.</span>
              </h2>
              <p>
                This page targets Wolverhampton users searching for boiler,
                heating, radiator, pressure and hot water-related plumbing
                support.
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
                  A Wolverhampton boiler and heating enquiry page.
                  <span> Built for fast WhatsApp contact.</span>
                </h2>
                <p>
                  The enquiry flow helps the visitor send the essential details:
                  the Wolverhampton area, the heating issue, how urgent it is
                  and any useful signs such as leaks, low pressure or no hot
                  water.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Clear issue type</strong>
                    <span>
                      Boiler concern, radiator leak, heating pipework or
                      pressure problem.
                    </span>
                  </div>
                  <div>
                    <strong>Local area detail</strong>
                    <span>
                      Focused on Wolverhampton, WV postcodes and nearby areas.
                    </span>
                  </div>
                  <div>
                    <strong>Safety-first wording</strong>
                    <span>
                      Gas work must be handled by a Gas Safe registered
                      engineer.
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
                    <strong>Boiler / radiator / heating</strong>
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
                Boiler and heating enquiries across
                <span> Wolverhampton.</span>
              </h2>
              <p>
                The page includes Wolverhampton areas and WV postcode signals to
                support local relevance for heating and plumber searches.
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
                Boiler & heating plumber
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
              <h2>Need boiler or heating plumbing help in Wolverhampton?</h2>
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
                  WhatsApp Heating Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
