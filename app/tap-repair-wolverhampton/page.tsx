import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20tap%20repair%20or%20tap%20leak%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Tap Repair Wolverhampton | Leaking Tap Plumbing Enquiries",
  description:
    "Tap repair Wolverhampton enquiries by WhatsApp. Send details for leaking taps, dripping taps, broken taps, loose tap fittings, low water flow and kitchen or bathroom tap issues.",
  keywords: [
    "tap repair Wolverhampton",
    "leaking tap Wolverhampton",
    "dripping tap Wolverhampton",
    "broken tap Wolverhampton",
    "tap plumber Wolverhampton",
    "kitchen tap repair Wolverhampton",
    "bathroom tap repair Wolverhampton",
    "Wolverhampton plumber",
    "plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/tap-repair-wolverhampton",
  },
  openGraph: {
    title: "Tap Repair Wolverhampton | Leaking Tap Plumbing Enquiries",
    description:
      "Send a WhatsApp enquiry for leaking taps, dripping taps, broken taps, loose tap fittings, low water flow and kitchen or bathroom tap issues in Wolverhampton.",
    url: "https://wolverhamptonplumber.co.uk/tap-repair-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const services = [
  {
    title: "Leaking Taps",
    text: "Send an enquiry for water leaking from kitchen taps, bathroom taps, tap bases or fittings.",
    points: ["Kitchen tap leak", "Bathroom tap leak", "Leaking tap base"],
  },
  {
    title: "Dripping Taps",
    text: "For taps that keep dripping, do not shut off properly or waste water after use.",
    points: ["Constant drip", "Poor shut-off", "Water waste"],
  },
  {
    title: "Broken Taps",
    text: "For stiff taps, loose handles, damaged fittings, broken tap heads or taps that are difficult to use.",
    points: ["Loose handle", "Stiff tap", "Damaged fitting"],
  },
  {
    title: "Low Tap Water Flow",
    text: "For poor water flow from one tap, a bathroom basin, kitchen sink or multiple fixtures.",
    points: ["Low water flow", "One tap affected", "Hot or cold water"],
  },
  {
    title: "Kitchen Tap Issues",
    text: "For kitchen sink tap leaks, loose fittings, under-sink water, isolation valve concerns or pipework near the tap.",
    points: ["Kitchen sink tap", "Under-sink water", "Pipework near tap"],
  },
  {
    title: "Bathroom Tap Issues",
    text: "For basin taps, bath taps, mixer taps, leaking fittings and bathroom water flow concerns.",
    points: ["Basin taps", "Bath taps", "Mixer taps"],
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
    q: "Can I send a tap repair enquiry in Wolverhampton?",
    a: "Yes. You can send a WhatsApp enquiry with your Wolverhampton area, the tap issue, urgency and any useful details.",
  },
  {
    q: "What tap problems can I send?",
    a: "Common enquiries include leaking taps, dripping taps, broken taps, loose tap fittings, low water flow and kitchen or bathroom tap issues.",
  },
  {
    q: "What details help with a tap repair enquiry?",
    a: "Include whether it is a kitchen, bathroom, basin or bath tap, whether it is leaking or dripping, and whether the hot or cold side is affected.",
  },
  {
    q: "Should I include a photo?",
    a: "A photo can help explain the type of tap, the visible leak and where the water appears to be coming from.",
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
      "Tap repair Wolverhampton enquiry page for leaking taps, dripping taps, broken taps, loose fittings, low water flow and kitchen or bathroom tap issues.",
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
                  Tap repair enquiries in Wolverhampton
                </div>

                <h1>
                  Tap Repair
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Need help with a leaking tap, dripping tap, broken tap, loose
                  fitting or low water flow in Wolverhampton? Send a WhatsApp
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
                    WhatsApp Tap Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Tap repair enquiries</span>
                  <span>WV postcode focused</span>
                  <span>Clear WhatsApp message</span>
                </div>

                <small>
                  This website helps collect clear plumbing enquiry details
                  before any next step. Response depends on availability, timing
                  and the details of the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Tap enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>WhatsApp tap enquiry</p>
                  <h2>Send the tap issue clearly</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston / WV1 / Wednesfield</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Leaking, dripping or broken tap</strong>
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
                    <strong>Area + Tap Issue + Urgency</strong>
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
                <strong>Leaking taps</strong>
                <span>kitchen & bathroom</span>
              </div>
              <div>
                <strong>Dripping taps</strong>
                <span>constant water drip</span>
              </div>
              <div>
                <strong>Broken taps</strong>
                <span>handles & fittings</span>
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
              <div className={styles.badge}>Tap repair search intent</div>
              <h2>
                Tap repair and leaking tap enquiries,
                <span> clearly organised.</span>
              </h2>
              <p>
                This page targets Wolverhampton users searching for tap repair,
                leaking taps, dripping taps, broken taps and kitchen or bathroom
                tap issues.
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
                  A Wolverhampton tap repair enquiry page.
                  <span> Built for fast WhatsApp contact.</span>
                </h2>

                <p>
                  The enquiry flow helps the visitor send the key details:
                  Wolverhampton area, what type of tap is affected, whether it
                  is leaking, dripping or broken, and how urgent it feels.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Clear tap issue</strong>
                    <span>
                      Leaking tap, dripping tap, broken tap, loose fitting or
                      low water flow.
                    </span>
                  </div>
                  <div>
                    <strong>Useful fixture detail</strong>
                    <span>
                      Kitchen sink, bathroom basin, bath tap or mixer tap.
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
                    <strong>Leaking / dripping / broken tap</strong>
                  </div>
                  <div>
                    <span>Urgency</span>
                    <strong>Today / 24–48 hours / flexible</strong>
                  </div>
                  <div>
                    <span>Fixture</span>
                    <strong>Kitchen / bathroom / bath</strong>
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
                Tap repair enquiries across
                <span> Wolverhampton.</span>
              </h2>
              <p>
                The page includes Wolverhampton areas and WV postcode signals to
                support local relevance for tap repair and plumber searches.
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
                Tap repair
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
              <h2>Need help with a tap issue in Wolverhampton?</h2>
              <p>
                Start with a WhatsApp enquiry. Add your area, tap issue and
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
