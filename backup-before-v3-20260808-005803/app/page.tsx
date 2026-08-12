import type { Metadata } from "next";
import Link from "next/link";
import styles from "./emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Wolverhampton Plumber | Clear Plumbing Enquiries in Wolverhampton",
  description:
    "Wolverhampton plumbing enquiry website for blocked toilets, blocked drains, leaks, tap issues, kitchen plumbing, bathroom plumbing and water pressure problems.",
  keywords: [
    "Wolverhampton plumber",
    "plumber Wolverhampton",
    "emergency plumber Wolverhampton",
    "blocked drains Wolverhampton",
    "blocked toilet Wolverhampton",
    "leak repair Wolverhampton",
    "tap repair Wolverhampton",
    "kitchen plumber Wolverhampton",
    "bathroom plumber Wolverhampton",
    "water pressure plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wolverhampton Plumber | Clear Plumbing Enquiries",
    description:
      "Choose the closest plumbing issue, add your Wolverhampton area and send a clear WhatsApp enquiry.",
    url: "https://wolverhamptonplumber.co.uk",
    type: "website",
    locale: "en_GB",
  },
};

const serviceCards = [
  {
    title: "Blocked toilets",
    href: "/blocked-toilet-wolverhampton",
    image: "/images/real/blocked-toilet-wolverhampton.jpg",
    eyebrow: "Bathroom issue",
    text: "For toilet water rising, repeated flushing problems, overflowing toilets and urgent waste issues.",
    bullets: ["Water rising", "Only toilet affected?", "Other drains checked"],
  },
  {
    title: "Blocked drains",
    href: "/blocked-drains-wolverhampton",
    image: "/images/real/blocked-drains-wolverhampton.jpg",
    eyebrow: "Drainage",
    text: "For slow sinks, shower drains, bath drainage, outside drain smells and blocked waste pipe concerns.",
    bullets: ["Slow drainage", "Gurgling sounds", "Bad smells"],
  },
  {
    title: "Leak repair enquiries",
    href: "/leak-repair-wolverhampton",
    image: "/images/real/leak-repair-wolverhampton.jpg",
    eyebrow: "Visible water",
    text: "For under-sink leaks, bathroom leaks, pipe leaks, ceiling marks and water appearing around fittings.",
    bullets: ["Where water appears", "When it leaks", "Photo helps"],
  },
  {
    title: "Tap issues",
    href: "/tap-repair-wolverhampton",
    image: "/images/real/tap-repair-wolverhampton.jpg",
    eyebrow: "Taps",
    text: "For dripping taps, stiff taps, leaking tap bases, loose tap fittings and weak flow from one tap.",
    bullets: ["Hot or cold", "Constant drip", "Loose fitting"],
  },
  {
    title: "Kitchen plumbing",
    href: "/kitchen-plumber-wolverhampton",
    image: "/images/real/kitchen-plumbing-wolverhampton.jpg",
    eyebrow: "Kitchen",
    text: "For kitchen sink leaks, waste pipes, washing machine pipework, dishwasher pipework and sink blockages.",
    bullets: ["Sink waste", "Appliance pipework", "Cabinet leak"],
  },
  {
    title: "Bathroom plumbing",
    href: "/bathroom-plumber-wolverhampton",
    image: "/images/real/bathroom-plumbing-wolverhampton.jpg",
    eyebrow: "Bathroom",
    text: "For basins, baths, showers, toilets, bathroom taps and pipework problems inside the bathroom.",
    bullets: ["Shower or bath", "Basin issue", "Toilet area"],
  },
  {
    title: "Water pressure",
    href: "/water-pressure-plumber-wolverhampton",
    image: "/images/real/water-pressure-wolverhampton.jpg",
    eyebrow: "Flow issue",
    text: "For low pressure from one tap, weak shower flow or pressure concerns affecting more than one outlet.",
    bullets: ["One tap or all?", "Hot or cold?", "Sudden or gradual"],
  },
  {
    title: "Boiler & heating enquiries",
    href: "/boiler-heating-plumber-wolverhampton",
    image: "/images/real/boiler-heating-wolverhampton.jpg",
    eyebrow: "Heating pipework",
    text: "For heating pipework, radiator flow, boiler-related plumbing enquiries and safe routing to the right help.",
    bullets: ["Radiator issue", "Pipework details", "Safe enquiry"],
  },
];

const steps = [
  {
    title: "Pick the closest problem",
    text: "Start with the page that matches the issue: blocked toilet, drain, leak, tap, kitchen, bathroom or pressure.",
  },
  {
    title: "Add the Wolverhampton area",
    text: "Mention Wolverhampton, Bilston, Wednesfield, Tettenhall, Penn, Bushbury or the closest WV postcode.",
  },
  {
    title: "Explain what is happening",
    text: "Say whether water is rising, leaking, dripping, draining slowly, smelling, gurgling or affecting more than one fixture.",
  },
  {
    title: "Send photos if useful",
    text: "A quick photo or short video can help explain the job faster, especially for leaks, taps and drainage problems.",
  },
];

const comparison = [
  {
    title: "A clear enquiry helps",
    items: [
      "Area and postcode are clear",
      "Room and fixture are named",
      "Urgency is explained",
      "Photos can be added before sending",
    ],
  },
  {
    title: "A vague message slows things down",
    items: [
      "Only says ‘need a plumber’",
      "No area or room mentioned",
      "No detail about water rising or leaking",
      "More back-and-forth before anyone understands the issue",
    ],
  },
];

const areas = [
  { name: "Bilston", href: "/plumber-bilston" },
  { name: "Wednesfield", href: "/plumber-wednesfield" },
  { name: "Tettenhall", href: "/plumber-tettenhall" },
  { name: "Penn", href: "/plumber-penn" },
  { name: "Bushbury", href: "/plumber-bushbury" },
  { name: "Areas covered", href: "/areas-covered" },
];

const adviceCards = [
  {
    title: "Toilet water rising after flushing",
    href: "/plumbing-advice/blocked-toilet-water-rising-wolverhampton",
    text: "What to check before flushing again, and what details make a blocked toilet enquiry clearer.",
  },
  {
    title: "Kitchen sink draining slowly",
    href: "/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton",
    text: "Helpful checks for slow kitchen sink drainage, smells, gurgling and appliance waste pipework.",
  },
  {
    title: "Low water pressure from one tap",
    href: "/plumbing-advice/low-water-pressure-one-tap-wolverhampton",
    text: "How to describe whether the issue affects hot, cold, one tap or the whole property.",
  },
];

const faqs = [
  {
    q: "What is Wolverhampton Plumber?",
    a: "It is a Wolverhampton-focused plumbing enquiry website designed to help people send clearer details for common home plumbing problems.",
  },
  {
    q: "Can I send photos with my enquiry?",
    a: "Yes. Photos or a short video can be useful for leaks, tap issues, drainage problems and anything visible under a sink or around a bathroom fixture.",
  },
  {
    q: "Which areas are these pages focused on?",
    a: "The site focuses on Wolverhampton and nearby WV areas including Bilston, Wednesfield, Tettenhall, Penn and Bushbury.",
  },
  {
    q: "What details should I include first?",
    a: "Start with your area, the affected room or fixture, what is happening, how urgent it feels and whether you can add a photo.",
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

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wolverhampton plumbing enquiry pages",
    itemListElement: serviceCards.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `https://wolverhamptonplumber.co.uk${item.href}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className={styles.homeV2Page}>
        <section className={styles.homeV2Hero}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2HeroGrid}>
              <div className={styles.homeV2HeroText}>
                <div className={styles.homeV2Badge}>Wolverhampton plumbing enquiry website</div>

                <h1>
                  Send a clearer plumbing enquiry in <span>Wolverhampton.</span>
                </h1>

                <p>
                  Choose the closest issue, add your WV area, explain what is happening and open a ready WhatsApp message for common home plumbing problems.
                </p>

                <div className={styles.homeV2HeroActions}>
                  <Link href="/contact" className={styles.homeV2PrimaryBtn}>
                    Start an enquiry
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.homeV2SecondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp directly
                  </a>
                </div>

                <div className={styles.homeV2TrustRow}>
                  <span>Photo-friendly enquiries</span>
                  <span>Problem-led pages</span>
                  <span>WV area focus</span>
                </div>
              </div>

              <aside className={styles.homeV2HeroVisual}>
                <div
                  className={styles.homeV2HeroPhoto}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(4, 22, 39, 0.10), rgba(4, 22, 39, 0.52)), url('/images/real/wolverhampton-plumbing-hero.jpg')",
                  }}
                >
                  <div className={styles.homeV2PhotoLabel}>Real work photos can sit here</div>
                </div>

                <div className={styles.homeV2MessageCard}>
                  <span>Example enquiry</span>
                  <strong>“WV area, kitchen sink leaking under cabinet, water appears when tap runs. Photo attached.”</strong>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.homeV2Services}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2SectionHead}>
              <span>Service pages</span>
              <h2>Make each plumbing problem feel specific, not generic.</h2>
              <p>
                These cards are ready for real images later. Upload real photos into <code>public/images/real</code> using the filenames shown in the image README and the page will pick them up.
              </p>
            </div>

            <div className={styles.homeV2ServiceGrid}>
              {serviceCards.map((card) => (
                <article className={styles.homeV2ServiceCard} key={card.href}>
                  <div
                    className={styles.homeV2CardPhoto}
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(4, 22, 39, 0.10), rgba(4, 22, 39, 0.62)), url('${card.image}')`,
                    }}
                  >
                    <span>{card.eyebrow}</span>
                  </div>

                  <div className={styles.homeV2CardBody}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <ul>
                      {card.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <Link href={card.href}>Open enquiry page</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.homeV2StepsSection}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2SplitPanel}>
              <div>
                <span className={styles.homeV2Badge}>How it works</span>
                <h2>Four simple steps before sending the message.</h2>
                <p>
                  This is the part that makes the website feel useful. Instead of only saying “contact us”, the page helps the visitor organise the job details before sending.
                </p>
              </div>

              <div className={styles.homeV2StepsList}>
                {steps.map((step, index) => (
                  <div className={styles.homeV2StepItem} key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.homeV2CompareSection}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2SectionHead}>
              <span>Pros and cons</span>
              <h2>Why a clearer first message can convert better.</h2>
              <p>
                A realistic local-service page should educate the visitor and improve enquiry quality, not only repeat keywords.
              </p>
            </div>

            <div className={styles.homeV2CompareGrid}>
              {comparison.map((box, index) => (
                <article
                  className={`${styles.homeV2CompareCard} ${
                    index === 1 ? styles.homeV2CompareCardMuted : ""
                  }`}
                  key={box.title}
                >
                  <h3>{box.title}</h3>
                  <ul>
                    {box.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.homeV2ProofSection}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2ProofGrid}>
              <div>
                <span className={styles.homeV2Badge}>Trust section ready</span>
                <h2>Prepared for real work photos, reviews and local profiles.</h2>
                <p>
                  When a plumbing partner provides genuine job photos, customer feedback, Facebook work updates or a real Google Business Profile, this section can become stronger without inventing anything.
                </p>
              </div>

              <div className={styles.homeV2ProofCards}>
                <div>
                  <strong>Real photos</strong>
                  <span>Before/after, under-sink pipework, tap work, drains and bathroom fixtures.</span>
                </div>
                <div>
                  <strong>Real feedback</strong>
                  <span>Only from completed customer jobs, added later when available.</span>
                </div>
                <div>
                  <strong>Local profiles</strong>
                  <span>Google Business Profile, Facebook and local citations for a real business.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.homeV2AreasSection}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2SectionHead}>
              <span>Local area pages</span>
              <h2>Wolverhampton plus focused WV area pages.</h2>
            </div>

            <div className={styles.homeV2AreaGrid}>
              {areas.map((area) => (
                <Link href={area.href} className={styles.homeV2AreaPill} key={area.href}>
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.homeV2AdviceSection}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2SectionHead}>
              <span>Advice content</span>
              <h2>Problem-led guides that support service pages.</h2>
            </div>

            <div className={styles.homeV2AdviceGrid}>
              {adviceCards.map((article) => (
                <article className={styles.homeV2AdviceCard} key={article.href}>
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
                  <Link href={article.href}>Read guide</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.homeV2FaqSection}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2SectionHead}>
              <span>FAQs</span>
              <h2>Questions visitors may ask before sending an enquiry.</h2>
            </div>

            <div className={styles.homeV2FaqGrid}>
              {faqs.map((item) => (
                <details className={styles.homeV2FaqItem} key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.homeV2FinalCta}>
          <div className={styles.homeV2Container}>
            <div className={styles.homeV2FinalBox}>
              <h2>Ready to send a clearer Wolverhampton plumbing enquiry?</h2>
              <p>Choose the closest issue, add your area and open the WhatsApp message.</p>
              <div className={styles.homeV2HeroActions}>
                <Link href="/contact" className={styles.homeV2PrimaryBtn}>
                  Start an enquiry
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.homeV2SecondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp directly
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
