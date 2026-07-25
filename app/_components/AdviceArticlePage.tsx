import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

type Section = {
  heading: string;
  body: string[];
  list?: string[];
};

type Faq = {
  q: string;
  a: string;
};

type Props = {
  pageUrl: string;
  title: string;
  highlight: string;
  description: string;
  sourceNote: string;
  sections: Section[];
  faqs: Faq[];
  sources: string[];
};

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export default function AdviceArticlePage(props: Props) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${props.title} ${props.highlight}`,
    description: props.description,
    mainEntityOfPage: props.pageUrl,
    author: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
    },
    publisher: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
    },
    inLanguage: "en-GB",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className={styles.page}>
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Plumbing advice</div>
              <h1>
                {props.title}
                <span> {props.highlight}</span>
              </h1>
              <p>{props.description}</p>
            </div>

            <article className={styles.legalContent}>
              <p className={styles.articleSourceNote}>{props.sourceNote}</p>

              {props.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>

                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.list ? (
                    <ul className={styles.articleList}>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <h2>Sources used</h2>
              <ul className={styles.articleList}>
                {props.sources.map((source) => (
                  <li key={source}>{source}</li>
                ))}
              </ul>

              <p className={styles.articleSourceNote}>
                This article is general guidance only. For urgent danger,
                serious flooding, electrical risk or suspected gas issues,
                follow official emergency guidance.
              </p>

              <div className={styles.legalActions}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Send Plumbing Enquiry
                </Link>

                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
