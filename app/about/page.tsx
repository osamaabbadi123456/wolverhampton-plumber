import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "About Wolverhampton Plumber | Local Plumbing Enquiry Website",
  description:
    "About Wolverhampton Plumber, a local plumbing enquiry website helping people send clear WhatsApp enquiries for leaks, blocked toilets, drains, taps and plumbing issues in Wolverhampton.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Wolverhampton focused",
    text: "The site is built around Wolverhampton plumbing searches, WV postcodes and nearby local areas.",
    points: ["Wolverhampton", "WV postcodes", "Nearby local areas"],
  },
  {
    title: "Clear enquiry flow",
    text: "Visitors can choose the issue, area and urgency before sending a clear WhatsApp message.",
    points: ["Area", "Issue", "Urgency"],
  },
  {
    title: "Useful plumbing categories",
    text: "The site covers common plumbing enquiries such as leaks, blocked toilets, drains, taps and bathroom plumbing.",
    points: ["Leaks", "Blocked toilets", "Drains"],
  },
  {
    title: "Safety-first wording",
    text: "Gas work and gas boiler work must be handled by a Gas Safe registered engineer.",
    points: ["Gas Safe note", "No unsafe claims", "Clear guidance"],
  },
  {
    title: "Simple contact route",
    text: "The main contact method is WhatsApp, so the visitor can review and edit the message before sending.",
    points: ["WhatsApp", "Editable message", "Fast route"],
  },
  {
    title: "Built for future local partners",
    text: "As enquiries grow, the site can be connected with suitable local plumbing help where appropriate.",
    points: ["Lead routing", "Local partner potential", "Clear details"],
  },
];

const faqs = [
  {
    q: "What is Wolverhampton Plumber?",
    a: "Wolverhampton Plumber is a local plumbing enquiry website focused on helping visitors send clear plumbing enquiries by WhatsApp.",
  },
  {
    q: "Is this website a plumbing company?",
    a: "The website is built to organise and route plumbing enquiries. It is not presented as a fake local trade business or a fake registered contractor.",
  },
  {
    q: "What plumbing issues can visitors send?",
    a: "Visitors can send enquiries for leaks, blocked toilets, blocked drains, blocked sinks, tap repairs, bathroom plumbing, kitchen plumbing and heating pipework concerns.",
  },
  {
    q: "What about gas work?",
    a: "Gas work and gas boiler work must be handled by a Gas Safe registered engineer. If there is a suspected gas leak, visitors should follow official emergency guidance.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Wolverhampton Plumber",
    url: "https://wolverhamptonplumber.co.uk/about",
    description:
      "About Wolverhampton Plumber, a local plumbing enquiry website focused on Wolverhampton plumbing enquiries.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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
                <div className={styles.badge}>About Wolverhampton Plumber</div>

                <h1>
                  Local Plumbing Enquiries
                  <span> in Wolverhampton</span>
                </h1>

                <p>
                  Wolverhampton Plumber helps people send clear plumbing
                  enquiries by WhatsApp for leaks, blocked toilets, blocked
                  drains, tap repairs, bathroom plumbing, kitchen plumbing and
                  heating pipework concerns.
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
                  <span>WhatsApp enquiry flow</span>
                  <span>Clear safety guidance</span>
                </div>

                <small>
                  The site is designed to collect clear enquiry details before
                  any next step. Gas work must be handled by a Gas Safe
                  registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>About</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Enquiry website</p>
                  <h2>Built around clear local plumbing requests</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Wolverhampton / WV postcodes</strong>
                    </div>
                    <div>
                      <span>Issues</span>
                      <strong>Leaks, toilets, drains, taps</strong>
                    </div>
                    <div>
                      <span>Route</span>
                      <strong>WhatsApp enquiry</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Focus</span>
                    <strong>Local plumbing intent</strong>
                  </div>
                  <div>
                    <span>Contact</span>
                    <strong>WhatsApp first</strong>
                  </div>
                </div>
              </aside>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>Wolverhampton</strong>
                <span>local enquiry focus</span>
              </div>
              <div>
                <strong>Plumbing issues</strong>
                <span>common household problems</span>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <span>simple contact route</span>
              </div>
              <div>
                <strong>Safety notes</strong>
                <span>Gas Safe guidance</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>What this site does</div>
              <h2>
                A clear enquiry route for
                <span> Wolverhampton plumbing searches.</span>
              </h2>
              <p>
                The goal is to make it easier for visitors to explain the
                problem clearly: where they are, what happened, and how urgent
                the issue feels.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {values.map((item) => (
                <article className={styles.serviceCard} key={item.title}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul>
                    {item.points.map((point) => (
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
                <div className={styles.badge}>Clear positioning</div>
                <h2>
                  Honest local wording.
                  <span> Strong SEO structure.</span>
                </h2>

                <p>
                  The site avoids fake address claims, fake reviews and fake
                  trade accreditations. The content is built around real search
                  intent: Wolverhampton plumber, emergency plumber
                  Wolverhampton, blocked drains Wolverhampton and related
                  plumbing enquiries.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Local SEO signals</strong>
                    <span>
                      Wolverhampton areas, WV postcodes and service pages.
                    </span>
                  </div>
                  <div>
                    <strong>Direct response flow</strong>
                    <span>
                      Visitors are guided toward a clear WhatsApp enquiry.
                    </span>
                  </div>
                  <div>
                    <strong>Useful issue pages</strong>
                    <span>
                      Emergency plumbing, blocked drains and heating enquiries.
                    </span>
                  </div>
                  <div>
                    <strong>Safety-first approach</strong>
                    <span>
                      Gas work is clearly referred to Gas Safe engineers.
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.enquiryBox}>
                <div className={styles.checkCircle}>✓</div>
                <h3>Enquiry details</h3>

                <div className={styles.enquiryRows}>
                  <div>
                    <span>Area</span>
                    <strong>WV postcode or local area</strong>
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

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Questions</div>
              <h2>
                About Wolverhampton Plumber
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
      </main>
    </>
  );
}
