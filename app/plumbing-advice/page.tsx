import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Plumbing Advice Wolverhampton | Leaks, Toilets, Drains & Taps",
  description:
    "Simple Wolverhampton plumbing advice for leaks, blocked toilets, blocked drains, tap repairs, water pressure and heating pipework concerns. Send a WhatsApp enquiry if you need help.",
  keywords: [
    "plumbing advice Wolverhampton",
    "what to do with a leak Wolverhampton",
    "blocked toilet advice Wolverhampton",
    "blocked drain advice Wolverhampton",
    "tap repair advice Wolverhampton",
    "water pressure problem Wolverhampton",
    "emergency plumber Wolverhampton",
    "Wolverhampton plumber",
  ],
  alternates: {
    canonical: "/plumbing-advice",
  },
};

const articleLinks = [
  {
    title: "Internal stop tap leaking or broken",
    href: "/plumbing-advice/internal-stop-tap-leaking-wolverhampton",
    text: "Understand where your internal stop tap may be, common stopcock problems, when not to force it and what details help in a plumbing enquiry.",
    points: ["Stop tap location", "Leaking stopcock", "When not to force it"],
  },
  {
    title: "How to prevent frozen and burst pipes",
    href: "/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton",
    text: "Practical guidance for cold weather, stop taps, outside taps, insulation, frozen pipes and what to do if a pipe bursts.",
    points: [
      "Frozen pipes",
      "Burst pipe first steps",
      "Cold weather prevention",
    ],
  },
  {
    title: "What to do if you smell gas",
    href: "/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton",
    text: "Safety guidance based on Gas Safe Register advice for suspected gas leaks, carbon monoxide symptoms and when to contact emergency gas services.",
    points: ["Gas smell", "Carbon monoxide", "Gas Safe guidance"],
  },
];

const adviceCards = [
  {
    title: "What to do if a pipe is leaking",
    text: "If water is leaking, try to identify where it is coming from and turn off the internal stop tap if it is safe to do so.",
    points: [
      "Turn off water if safe",
      "Avoid electrical risk",
      "Send clear photos if possible",
    ],
  },
  {
    title: "What to do with a blocked toilet",
    text: "Avoid repeatedly flushing if the water is rising. Add your area, urgency and what happened in the WhatsApp enquiry.",
    points: ["Do not keep flushing", "Mention rising water", "Add urgency"],
  },
  {
    title: "Slow draining sink or bath",
    text: "Slow drainage can be caused by waste buildup, pipe blockage or drainage problems. Explain which fixture is affected.",
    points: [
      "Kitchen or bathroom",
      "Slow or fully blocked",
      "Any smell or overflow",
    ],
  },
  {
    title: "Dripping or broken tap",
    text: "Tap problems can include dripping, loose fittings, leaks around the base or poor water flow.",
    points: ["Dripping tap", "Leaking base", "Low water flow"],
  },
  {
    title: "Low water pressure",
    text: "Water pressure problems may affect one tap, one room or the whole property. That detail is useful in the enquiry.",
    points: ["One tap or whole home", "Hot or cold water", "Sudden or ongoing"],
  },
  {
    title: "Heating pipework concerns",
    text: "For radiator leaks, pipework leaks or pressure concerns, include visible signs and whether the issue is urgent.",
    points: ["Radiator leak", "Pressure concern", "Gas Safe note"],
  },
];

const faqs = [
  {
    q: "What should I do first if water is leaking?",
    a: "If safe, turn off the internal stop tap and keep away from electrical danger. Then send a clear enquiry with your area, issue and urgency.",
  },
  {
    q: "Should I keep flushing a blocked toilet?",
    a: "No. If water is rising, avoid repeated flushing because it can make the problem worse. Send details by WhatsApp instead.",
  },
  {
    q: "What details should I include in a plumbing enquiry?",
    a: "Include your Wolverhampton area, the issue, how urgent it is, whether water is leaking or rising, and any helpful photos.",
  },
  {
    q: "Can I get advice for gas boiler problems?",
    a: "Gas work and gas boiler work must be handled by a Gas Safe registered engineer. If you smell gas, follow official emergency guidance immediately.",
  },
];

export default function PlumbingAdvicePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Plumbing Advice Wolverhampton",
    author: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
    },
    publisher: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
    },
    mainEntityOfPage: "https://wolverhamptonplumber.co.uk/plumbing-advice",
    inLanguage: "en-GB",
    description:
      "Simple plumbing advice for Wolverhampton users, including leaks, blocked toilets, blocked drains, tap repairs and heating pipework concerns.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
                  Wolverhampton plumbing advice
                </div>

                <h1>
                  Plumbing Advice
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  Simple guidance for common plumbing problems in Wolverhampton,
                  including leaks, blocked toilets, blocked drains, tap repairs,
                  water pressure concerns and heating pipework issues.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Send Plumbing Enquiry
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
                  <span>Useful first steps</span>
                  <span>Wolverhampton focused</span>
                  <span>Safety-first wording</span>
                </div>

                <small>
                  This advice is general information only. For serious flooding,
                  electrical danger, gas smell or immediate risk, follow
                  official emergency guidance. Gas work must be handled by a Gas
                  Safe registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Advice hub</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Common plumbing issues</p>
                  <h2>Know what to send first</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, toilet, drain or tap</strong>
                    </div>
                    <div>
                      <span>Area</span>
                      <strong>Wolverhampton / WV postcode</strong>
                    </div>
                    <div>
                      <span>Next step</span>
                      <strong>Send WhatsApp enquiry</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Intent</span>
                    <strong>Advice + enquiry</strong>
                  </div>
                  <div>
                    <span>Channel</span>
                    <strong>WhatsApp</strong>
                  </div>
                </div>
              </aside>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>Leaks</strong>
                <span>what to do first</span>
              </div>
              <div>
                <strong>Blocked toilets</strong>
                <span>avoid repeat flushing</span>
              </div>
              <div>
                <strong>Blocked drains</strong>
                <span>describe symptoms</span>
              </div>
              <div>
                <strong>Tap repairs</strong>
                <span>drips and leaks</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Common problems</div>
              <h2>
                Plumbing advice for
                <span> Wolverhampton homes.</span>
              </h2>
              <p>
                These sections support informational searches and help visitors
                understand what details to include before sending an enquiry.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {adviceCards.map((card) => (
                <article className={styles.serviceCard} key={card.title}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <ul>
                    {card.points.map((point) => (
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
              <div className={styles.badge}>Practical plumbing guides</div>
              <h2>
                Helpful Wolverhampton plumbing articles,
                <span> based on trusted guidance.</span>
              </h2>
              <p>
                These guides are written from real UK plumbing and safety
                guidance, then adapted for Wolverhampton homeowners looking for
                clear first steps.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {articleLinks.map((article) => (
                <article className={styles.serviceCard} key={article.href}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>

                  <ul>
                    {article.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <Link href={article.href} className={styles.cardLink}>
                    Read guide
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.trustGrid}>
              <div>
                <div className={styles.badge}>How to send a useful message</div>
                <h2>
                  Good plumbing enquiries are clear.
                  <span> Area, issue, urgency.</span>
                </h2>

                <p>
                  A short, clear WhatsApp message is better than a vague
                  request. Include the affected room, what is happening, whether
                  water is leaking or rising, and how urgent the problem is.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Where is the issue?</strong>
                    <span>
                      Kitchen, bathroom, toilet, outside drain or radiator.
                    </span>
                  </div>
                  <div>
                    <strong>What is happening?</strong>
                    <span>
                      Leak, blockage, slow drainage, pressure issue or no hot
                      water.
                    </span>
                  </div>
                  <div>
                    <strong>How urgent is it?</strong>
                    <span>
                      Today, within 24–48 hours, this week or flexible.
                    </span>
                  </div>
                  <div>
                    <strong>Where are you?</strong>
                    <span>
                      Wolverhampton area, WV postcode or nearby community.
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.enquiryBox}>
                <div className={styles.checkCircle}>✓</div>
                <h3>Useful enquiry format</h3>

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
                    <span>Details</span>
                    <strong>Photos if useful</strong>
                  </div>
                </div>

                <Link href="/contact" className={styles.fullBtn}>
                  Build WhatsApp Enquiry
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
                Plumbing advice
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
              <h2>Need plumbing help in Wolverhampton?</h2>
              <p>
                Use the enquiry page to create a clear WhatsApp message with
                your area, issue and urgency.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Send Plumbing Enquiry
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
