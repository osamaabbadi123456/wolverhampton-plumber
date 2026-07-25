import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

type Card = {
  title: string;
  text: string;
  points: string[];
};

type Faq = {
  q: string;
  a: string;
};

type Stat = {
  title: string;
  text: string;
};

type Trust = {
  title: string;
  text: string;
};

type Props = {
  pageUrl: string;
  schemaName: string;
  schemaServiceType: string;
  schemaDescription: string;

  badge: string;
  h1Main: string;
  h1Highlight: string;
  intro: string;
  whatsappLink: string;
  whatsappLabel: string;
  microTrust: string[];
  smallNote: string;

  visualBadge: string;
  visualTitle: string;
  visualSubtitle: string;
  visualRows: { label: string; value: string }[];
  visualBottom: { label: string; value: string }[];

  stats: Stat[];

  servicesBadge: string;
  servicesTitle: string;
  servicesHighlight: string;
  servicesIntro: string;
  services: Card[];

  trustBadge: string;
  trustTitle: string;
  trustHighlight: string;
  trustIntro: string;
  trustItems: Trust[];

  areasTitle: string;
  areasHighlight: string;
  areasIntro: string;
  areas: string[];

  faqTitle: string;
  faqHighlight: string;
  faqs: Faq[];

  finalTitle: string;
  finalText: string;
};

export default function ServiceLandingPage(props: Props) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.schemaName,
    serviceType: props.schemaServiceType,
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: props.pageUrl,
    description: props.schemaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map((item) => ({
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
                <div className={styles.badge}>{props.badge}</div>

                <h1>
                  {props.h1Main}
                  <span> {props.h1Highlight}</span>
                </h1>

                <p>{props.intro}</p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Start WhatsApp Enquiry
                  </Link>

                  <a
                    href={props.whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.whatsappLabel}
                  </a>
                </div>

                <div className={styles.microTrust}>
                  {props.microTrust.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <small>{props.smallNote}</small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>{props.visualBadge}</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>{props.visualSubtitle}</p>
                  <h2>{props.visualTitle}</h2>

                  <div className={styles.requestRows}>
                    {props.visualRows.map((row) => (
                      <div key={row.label}>
                        <span>{row.label}</span>
                        <strong>{row.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  {props.visualBottom.map((row) => (
                    <div key={row.label}>
                      <span>{row.label}</span>
                      <strong>{row.value}</strong>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className={styles.heroStats}>
              {props.stats.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>{props.servicesBadge}</div>
              <h2>
                {props.servicesTitle}
                <span> {props.servicesHighlight}</span>
              </h2>
              <p>{props.servicesIntro}</p>
            </div>

            <div className={styles.cardsGrid}>
              {props.services.map((service) => (
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
                <div className={styles.badge}>{props.trustBadge}</div>
                <h2>
                  {props.trustTitle}
                  <span> {props.trustHighlight}</span>
                </h2>
                <p>{props.trustIntro}</p>

                <div className={styles.trustList}>
                  {props.trustItems.map((item) => (
                    <div key={item.title}>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  ))}
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
                    <strong>{props.h1Main}</strong>
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
                {props.areasTitle}
                <span> {props.areasHighlight}</span>
              </h2>
              <p>{props.areasIntro}</p>
            </div>

            <div className={styles.areaPills}>
              {props.areas.map((area) => (
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
                {props.faqTitle}
                <span> {props.faqHighlight}</span>
              </h2>
            </div>

            <div className={styles.faqGrid}>
              {props.faqs.map((item) => (
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
              <h2>{props.finalTitle}</h2>
              <p>{props.finalText}</p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Start WhatsApp Enquiry
                </Link>

                <a
                  href={props.whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.whatsappLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
