import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20leak%20or%20pipework%20issue%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Leak Repair Wolverhampton | Plumbing Leak Enquiries",
  description:
    "Leak repair Wolverhampton enquiries by WhatsApp. Send details for leaking pipes, under-sink leaks, bathroom leaks, kitchen leaks, tap leaks and urgent water leak concerns.",
  keywords: [
    "leak repair Wolverhampton",
    "plumbing leak Wolverhampton",
    "leaking pipe Wolverhampton",
    "pipe leak repair Wolverhampton",
    "water leak plumber Wolverhampton",
    "emergency leak plumber Wolverhampton",
    "under sink leak Wolverhampton",
    "bathroom leak Wolverhampton",
    "kitchen leak Wolverhampton",
    "Wolverhampton plumber",
  ],
  alternates: {
    canonical: "/leak-repair-wolverhampton",
  },
  openGraph: {
    title: "Leak Repair Wolverhampton | Plumbing Leak Enquiries",
    description:
      "Send a WhatsApp enquiry for leaking pipes, under-sink leaks, bathroom leaks, kitchen leaks, tap leaks and urgent water leak concerns in Wolverhampton.",
    url: "https://wolverhamptonplumber.co.uk/leak-repair-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const services = [
  {
    title: "Leaking Pipes",
    text: "Send a clear enquiry for visible pipe leaks, dripping pipework, water marks or sudden water problems around the property.",
    points: ["Visible pipe leak", "Dripping pipework", "Water marks"],
  },
  {
    title: "Under-Sink Leaks",
    text: "For leaks below kitchen or bathroom sinks, waste pipe concerns, loose fittings or water collecting inside cabinets.",
    points: ["Kitchen sink leak", "Bathroom sink leak", "Waste pipe concern"],
  },
  {
    title: "Bathroom Leaks",
    text: "For water around toilets, basins, baths, showers, tiles or visible bathroom pipework.",
    points: ["Toilet area leaks", "Shower leaks", "Basin pipework"],
  },
  {
    title: "Kitchen Leaks",
    text: "For leaking kitchen taps, sink waste, appliance pipework, isolation valves or pipework under worktops.",
    points: ["Kitchen tap leak", "Appliance pipework", "Sink waste leaks"],
  },
  {
    title: "Tap Leaks",
    text: "For dripping taps, leaking tap bases, loose fittings, poor shut-off or water escaping around fixtures.",
    points: ["Dripping taps", "Leaking tap base", "Loose fittings"],
  },
  {
    title: "Urgent Water Leak Enquiries",
    text: "If water is actively leaking, include the area, where the leak is coming from and how urgent it is.",
    points: ["Active leak", "Urgent today", "Clear WhatsApp message"],
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
    q: "Can I send a leak repair enquiry in Wolverhampton?",
    a: "Yes. You can send a WhatsApp enquiry with your Wolverhampton area, where the leak is, how urgent it is and any useful details.",
  },
  {
    q: "What leak problems can I send?",
    a: "Common enquiries include leaking pipes, under-sink leaks, bathroom leaks, kitchen leaks, tap leaks and visible pipework concerns.",
  },
  {
    q: "What should I do if water is actively leaking?",
    a: "If safe, turn off the internal stop tap and keep away from electrical danger. Then send clear details and photos if useful.",
  },
  {
    q: "What details help with a leak enquiry?",
    a: "Include your area, the affected room, where the water appears to be coming from, whether it is dripping or flowing, and how urgent it feels.",
  },
];

export default function LeakRepairWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Leak Repair Wolverhampton Enquiries",
    serviceType: "Plumbing leak enquiries",
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
      "Leak repair Wolverhampton enquiry page for leaking pipes, under-sink leaks, bathroom leaks, kitchen leaks, tap leaks and urgent water leak concerns.",
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
                  Leak repair enquiries in Wolverhampton
                </div>

                <h1>
                  Leak Repair
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Need help with a leaking pipe, under-sink leak, bathroom leak,
                  kitchen leak or tap leak in Wolverhampton? Send a WhatsApp
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
                    WhatsApp Leak Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Leak enquiry flow</span>
                  <span>WV postcode focused</span>
                  <span>Clear safety guidance</span>
                </div>

                <small>
                  This website helps collect clear plumbing enquiry details
                  before any next step. Response depends on availability, timing
                  and the details of the enquiry.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Leak enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>WhatsApp leak enquiry</p>
                  <h2>Send the leak details clearly</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston / WV1 / Wednesfield</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Pipe, sink, bathroom or tap leak</strong>
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
                    <strong>Area + Leak + Urgency</strong>
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
                <strong>Leaking pipes</strong>
                <span>visible pipework</span>
              </div>
              <div>
                <strong>Under-sink leaks</strong>
                <span>kitchen & bathroom</span>
              </div>
              <div>
                <strong>Tap leaks</strong>
                <span>drips and fittings</span>
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
              <div className={styles.badge}>Leak search intent</div>
              <h2>
                Leak repair enquiries,
                <span> clearly organised.</span>
              </h2>
              <p>
                This page targets Wolverhampton users searching for leaking
                pipes, water leaks, under-sink leaks, bathroom leaks and urgent
                leak help.
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
                  A Wolverhampton leak repair enquiry page.
                  <span> Built for fast WhatsApp contact.</span>
                </h2>

                <p>
                  The enquiry flow helps the visitor send the key details:
                  Wolverhampton area, where the leak is, how urgent it feels and
                  any visible signs such as dripping, water marks or pooling
                  water.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Clear leak type</strong>
                    <span>
                      Pipe leak, sink leak, bathroom leak, kitchen leak or tap
                      leak.
                    </span>
                  </div>
                  <div>
                    <strong>Useful location detail</strong>
                    <span>
                      Room, fixture, Wolverhampton area and WV postcode if
                      available.
                    </span>
                  </div>
                  <div>
                    <strong>Simple WhatsApp route</strong>
                    <span>The message opens ready to edit before sending.</span>
                  </div>
                  <div>
                    <strong>Safety-first guidance</strong>
                    <span>
                      If safe, turn off the internal stop tap and avoid
                      electrical danger.
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
                    <strong>Leaking pipe / sink / tap</strong>
                  </div>
                  <div>
                    <span>Urgency</span>
                    <strong>Today / 24–48 hours / flexible</strong>
                  </div>
                  <div>
                    <span>Details</span>
                    <strong>Photos if useful</strong>
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
                Leak repair enquiries across
                <span> Wolverhampton.</span>
              </h2>
              <p>
                The page includes Wolverhampton areas and WV postcode signals to
                support local relevance for leak repair and plumber searches.
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
                Leak repair
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
              <h2>Need help with a leak in Wolverhampton?</h2>
              <p>
                Start with a WhatsApp enquiry. Add your area, leak type and
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
