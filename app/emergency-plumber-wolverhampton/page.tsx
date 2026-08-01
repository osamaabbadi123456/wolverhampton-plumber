import type { Metadata } from "next";
import Link from "next/link";
import styles from "./EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20urgent%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Emergency Plumber Wolverhampton | Urgent Plumbing Help",
  description:
    "Emergency plumber Wolverhampton enquiries for leaks, burst pipe concerns, blocked toilets, blocked drains, urgent tap problems and sudden water issues.",
  keywords: [
    "emergency plumber Wolverhampton",
    "emergency plumbers Wolverhampton",
    "urgent plumber Wolverhampton",
    "24 hour plumber Wolverhampton",
    "blocked toilet Wolverhampton",
    "blocked drains Wolverhampton",
    "burst pipe Wolverhampton",
    "leak repair Wolverhampton",
    "plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/emergency-plumber-wolverhampton",
  },
  openGraph: {
    title: "Emergency Plumber Wolverhampton | Urgent Plumbing Help",
    description:
      "Send a clear WhatsApp enquiry for urgent plumbing issues in Wolverhampton including leaks, blocked toilets, blocked drains and burst pipe concerns.",
    url: "https://wolverhamptonplumber.co.uk/emergency-plumber-wolverhampton",
    type: "website",
    locale: "en_GB",
  },
};

const urgentIssues = [
  {
    title: "Water leaking now",
    text: "Visible water from a pipe, fitting, ceiling, wall, toilet, sink or appliance connection.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Toilet blocked with rising water",
    text: "A toilet that will not clear, water rising after flushing, or bathroom waste concerns.",
    href: "/blocked-toilet-wolverhampton",
  },
  {
    title: "Blocked drain or overflow",
    text: "Slow water, outside drain concerns, bad smells, gurgling or water backing up.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Tap or fitting will not stop",
    text: "A tap, valve or fitting leaking, dripping heavily, stuck open or causing water waste.",
    href: "/tap-repair-wolverhampton",
  },
  {
    title: "Bathroom plumbing problem",
    text: "Toilet, basin, shower, bath or bathroom pipework issue that needs clear details sent quickly.",
    href: "/bathroom-plumber-wolverhampton",
  },
  {
    title: "Kitchen plumbing problem",
    text: "Kitchen sink leak, blocked sink, waste pipe issue or appliance pipework concern.",
    href: "/kitchen-plumber-wolverhampton",
  },
];

const emergencySignals = [
  {
    title: "Water is spreading",
    text: "Say where the water is coming from, what room it is in, and whether it is spreading.",
  },
  {
    title: "Toilet water is rising",
    text: "Avoid repeat flushing. Mention whether the toilet is fully blocked or slow to clear.",
  },
  {
    title: "More than one drain is affected",
    text: "If the toilet, sink, bath or shower are all affected, include that detail.",
  },
  {
    title: "You cannot isolate the water",
    text: "Say whether you know where the stop tap is and whether it turns safely.",
  },
  {
    title: "The problem started suddenly",
    text: "Mention when it started and whether anything changed before the issue appeared.",
  },
  {
    title: "There is a safety concern",
    text: "If water is near electrics or there is serious flooding, keep safe first.",
  },
];

const messageChecklist = [
  "Your Wolverhampton area or WV postcode",
  "The exact issue: leak, toilet, drain, tap, kitchen or bathroom",
  "Whether water is leaking, rising, overflowing or draining slowly",
  "Whether you can turn the water off safely",
  "When the problem started",
  "Photos only if safe and useful",
];

const processSteps = [
  {
    title: "Choose the issue",
    text: "Pick the closest category so the enquiry is not vague.",
  },
  {
    title: "Add the area",
    text: "Use Wolverhampton, Bilston, Wednesfield, Tettenhall, WV postcode or nearby area.",
  },
  {
    title: "Explain urgency",
    text: "Say whether it needs attention today, within 24–48 hours, this week or flexible.",
  },
  {
    title: "Review in WhatsApp",
    text: "The message opens first so it can be checked and edited before sending.",
  },
];

const safetyNotes = [
  {
    title: "Suspected gas smell",
    text: "Do not treat this as a normal plumbing enquiry. Follow official gas emergency guidance immediately.",
  },
  {
    title: "Water near electrics",
    text: "Keep away from electrical risk and explain the situation clearly in the enquiry when safe.",
  },
  {
    title: "Burst pipe concern",
    text: "If safe, try to locate the stop tap and mention whether the water can be isolated.",
  },
  {
    title: "Overflowing toilet",
    text: "Avoid repeated flushing and say whether the water level is rising or falling.",
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
  "Oxley",
  "Finchfield",
  "Merry Hill",
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
    q: "What counts as an urgent plumbing enquiry?",
    a: "Common urgent enquiries include active leaks, burst pipe concerns, blocked toilets with rising water, blocked drains, overflowing fixtures and sudden water problems.",
  },
  {
    q: "What should I send first?",
    a: "Send your Wolverhampton area, the issue, whether water is leaking or rising, how urgent it feels, and whether the stop tap can be used safely.",
  },
  {
    q: "Should I call this an emergency if my toilet is blocked?",
    a: "If the toilet water is rising, overflowing, or it is the only toilet available, it is usually worth treating the enquiry as urgent.",
  },
  {
    q: "What if I smell gas?",
    a: "If you smell gas or suspect a gas leak, follow official gas emergency guidance immediately. Gas work must be handled by a Gas Safe registered engineer.",
  },
  {
    q: "Can I send photos?",
    a: "Yes, if it is safe. Photos can help explain visible leaks, pipework, blocked fixtures or where water is appearing.",
  },
];

export default function EmergencyPlumberWolverhamptonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Emergency Plumber Wolverhampton Enquiries",
    serviceType: "Urgent plumbing enquiry routing",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk/emergency-plumber-wolverhampton",
    description:
      "Wolverhampton urgent plumbing enquiry page for leaks, burst pipe concerns, blocked toilets, blocked drains, tap problems and sudden water issues.",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://wolverhamptonplumber.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Emergency Plumber Wolverhampton",
        item: "https://wolverhamptonplumber.co.uk/emergency-plumber-wolverhampton",
      },
    ],
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
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <div className={styles.badge}>
                  Urgent Wolverhampton plumbing enquiries
                </div>

                <h1>
                  Emergency Plumber
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  If water is leaking, a toilet is blocked, a drain is backing
                  up, or a pipe problem feels urgent, send a clear Wolverhampton
                  plumbing enquiry with the issue, area and urgency included.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Describe Urgent Issue
                  </Link>
                  <a
                    href={whatsappLink}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Urgent Enquiry
                  </a>
                </div>

                <div className={styles.microTrust}>
                  <span>Leaks and burst pipe concerns</span>
                  <span>Blocked toilets and drains</span>
                  <span>WV area focused</span>
                </div>

                <small>
                  For gas smells or suspected gas leaks, follow official
                  emergency guidance immediately. Gas work must be handled by a
                  Gas Safe registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Urgent enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Emergency message</p>
                  <h2>Say what is happening now</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, burst pipe, toilet or drain</strong>
                    </div>
                    <div>
                      <span>Area</span>
                      <strong>WV postcode or Wolverhampton area</strong>
                    </div>
                    <div>
                      <span>Risk</span>
                      <strong>Water rising, spreading or overflowing?</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Useful detail</span>
                    <strong>can water be isolated?</strong>
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
                <strong>Urgent leaks</strong>
                <span>clear first message</span>
              </div>
              <div>
                <strong>Blocked toilets</strong>
                <span>water rising details</span>
              </div>
              <div>
                <strong>Blocked drains</strong>
                <span>slow water and smells</span>
              </div>
              <div>
                <strong>Wolverhampton</strong>
                <span>WV area focus</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.emergencyMatrixSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Choose the urgent issue</div>
              <h2>
                Emergency plumbing problems
                <span> are not all the same.</span>
              </h2>
              <p>
                Each situation needs different details. Choose the closest page
                or send a WhatsApp enquiry with what is happening now.
              </p>
            </div>

            <div className={styles.emergencyMatrix}>
              {urgentIssues.map((issue) => (
                <Link
                  href={issue.href}
                  className={styles.emergencyIssueCard}
                  key={issue.href}
                >
                  <strong>{issue.title}</strong>
                  <p>{issue.text}</p>
                  <span>Open related page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.drainSignsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Urgent signs to mention</div>
              <h2>
                What makes the enquiry
                <span> clearer?</span>
              </h2>
              <p>
                The enquiry does not need technical wording. It just needs clear
                facts about what is happening in the property.
              </p>
            </div>

            <div className={styles.signsGrid}>
              {emergencySignals.map((item) => (
                <article className={styles.signCard} key={item.title}>
                  <span>•</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.messageChecklistSection}>
          <div className={styles.container}>
            <div className={styles.checklistPanel}>
              <div>
                <div className={styles.badge}>Before you send</div>
                <h2>
                  Urgent plumbing message
                  <span> checklist.</span>
                </h2>
                <p>
                  A clear first message helps explain the issue without a long
                  back-and-forth. These are the details that matter most.
                </p>
              </div>

              <ul>
                {messageChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.emergencyProcessSection}>
          <div className={styles.container}>
            <div className={styles.processPanel}>
              <div>
                <div className={styles.badge}>How it works</div>
                <h2>
                  Built for people
                  <span> dealing with stress.</span>
                </h2>
                <p>
                  Urgent plumbing searches usually happen on a phone. The goal
                  is to turn the problem into a short message that is easy to
                  read and act on.
                </p>
              </div>

              <div className={styles.processSteps}>
                {processSteps.map((step, index) => (
                  <div key={step.title}>
                    <span>{index + 1}</span>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Safety-first notes</div>
              <h2>
                Some issues need
                <span> extra caution.</span>
              </h2>
              <p>
                This page is for plumbing enquiries, but some situations need
                official emergency guidance or specialist handling.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {safetyNotes.map((note) => (
                <article className={styles.serviceCard} key={note.title}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Local coverage</div>
              <h2>
                Emergency plumbing enquiries across
                <span> Wolverhampton and WV areas.</span>
              </h2>
              <p>
                Add your area or postcode so the enquiry is clearly linked to
                Wolverhampton and nearby WV locations.
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
              <div className={styles.badge}>Emergency questions</div>
              <h2>
                Emergency plumber
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
              <h2>Urgent plumbing issue in Wolverhampton?</h2>
              <p>
                Send the issue, area, urgency and whether water is leaking,
                rising, overflowing or spreading.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Describe Urgent Issue
                </Link>
                <a
                  href={whatsappLink}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Urgent Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
