import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Areas Covered | Wolverhampton Plumbing Enquiries",
  description:
    "Wolverhampton plumbing enquiry areas including Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton, Whitmore Reans and nearby WV postcodes.",
  keywords: [
    "plumber Wolverhampton",
    "plumber Bilston",
    "plumber Wednesfield",
    "plumber Tettenhall",
    "plumber Penn",
    "plumber Bushbury",
    "plumber Compton Wolverhampton",
    "plumber Whitmore Reans",
    "Wolverhampton plumbing areas",
    "WV plumber",
  ],
  alternates: {
    canonical: "/areas-covered",
  },
  openGraph: {
    title: "Areas Covered | Wolverhampton Plumbing Enquiries",
    description:
      "Area hub for Wolverhampton plumbing enquiries including Bilston, Wednesfield, Tettenhall, Penn, Bushbury and nearby WV postcodes.",
    url: "https://wolverhamptonplumber.co.uk/areas-covered",
    type: "website",
    locale: "en_GB",
  },
};

const priorityAreas = [
  {
    area: "Bilston",
    slug: "/plumber-bilston",
    text: "Bilston plumbing enquiries for blocked toilets, blocked drains, leaks, tap repairs and kitchen or bathroom plumbing issues.",
    services: ["Blocked toilets", "Leaks", "Kitchen plumbing"],
  },
  {
    area: "Wednesfield",
    slug: "/plumber-wednesfield",
    text: "Wednesfield plumbing enquiries for urgent water issues, slow drains, leaking pipework, weak water flow and bathroom problems.",
    services: ["Emergency enquiries", "Blocked drains", "Water pressure"],
  },
  {
    area: "Tettenhall",
    slug: "/plumber-tettenhall",
    text: "Tettenhall plumbing enquiries for bathroom plumbing, tap problems, under-sink leaks, blocked toilets and general water issues.",
    services: ["Bathroom plumbing", "Tap repairs", "Leak repair"],
  },
  {
    area: "Penn",
    slug: "/plumber-penn",
    text: "Penn plumbing enquiries for leaks, blocked sinks, shower drainage, kitchen pipework, bathroom pipework and urgent plumbing concerns.",
    services: ["Leak repair", "Blocked sinks", "Bathroom plumbing"],
  },
  {
    area: "Bushbury",
    slug: "/plumber-bushbury",
    text: "Bushbury plumbing enquiries for blocked toilets, outside drain concerns, tap repairs, kitchen plumbing and water pressure issues.",
    services: ["Blocked toilets", "Outside drains", "Tap repairs"],
  },
];

const otherAreas = [
  "Wolverhampton",
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

const localServiceGroups = [
  {
    title: "Urgent plumbing enquiries",
    text: "For leaks, burst pipe concerns, blocked toilets, sudden water issues and plumbing problems that feel time-sensitive.",
    href: "/emergency-plumber-wolverhampton",
  },
  {
    title: "Blocked drains and toilets",
    text: "For slow drainage, blocked sinks, blocked toilets, rising water, smells, gurgling and outside drain concerns.",
    href: "/blocked-drains-wolverhampton",
  },
  {
    title: "Leaks and pipework",
    text: "For visible water, under-sink leaks, bathroom leaks, kitchen leaks, tap leaks and pipework concerns.",
    href: "/leak-repair-wolverhampton",
  },
  {
    title: "Taps, kitchens and bathrooms",
    text: "For dripping taps, kitchen sinks, waste pipes, basins, baths, showers, toilets and bathroom pipework.",
    href: "/tap-repair-wolverhampton",
  },
];

const postcodeNotes = [
  {
    title: "WV postcode signals",
    text: "Adding a WV postcode or nearby area helps make the enquiry clearer and more local.",
  },
  {
    title: "Problem-first wording",
    text: "The message should start with the issue: leak, blockage, toilet, tap, sink, shower or pressure problem.",
  },
  {
    title: "Area before details",
    text: "A useful enquiry says where it is happening before going into the longer description.",
  },
  {
    title: "Local pages next",
    text: "Bilston, Wednesfield, Tettenhall, Penn and Bushbury are the first area pages to build.",
  },
];

const faqs = [
  {
    q: "Which Wolverhampton areas can send plumbing enquiries?",
    a: "The site is focused on Wolverhampton and nearby WV areas including Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton and Whitmore Reans.",
  },
  {
    q: "Should I include my area in the WhatsApp message?",
    a: "Yes. Include your Wolverhampton area or WV postcode so the enquiry is clearly local and easier to understand.",
  },
  {
    q: "Are area pages being built for Bilston and Wednesfield?",
    a: "Yes. The first area pages planned are Bilston, Wednesfield, Tettenhall, Penn and Bushbury, with unique wording for each area.",
  },
  {
    q: "What should an area-based enquiry include?",
    a: "Include the area, the plumbing issue, whether it is urgent, and any useful details such as water rising, visible leaks or slow drainage.",
  },
];

export default function AreasCoveredPage() {
  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wolverhampton Plumbing Enquiry Areas",
    url: "https://wolverhamptonplumber.co.uk/areas-covered",
    description:
      "Area hub for Wolverhampton plumbing enquiries including Bilston, Wednesfield, Tettenhall, Penn, Bushbury and nearby WV postcodes.",
    inLanguage: "en-GB",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Priority Wolverhampton plumbing areas",
    itemListElement: priorityAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${area.area} plumbing enquiries`,
      url: `https://wolverhamptonplumber.co.uk${area.slug}`,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
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

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <div className={styles.badge}>
                  Wolverhampton plumbing enquiry areas
                </div>

                <h1>
                  Areas Covered
                  <span> Wolverhampton</span>
                </h1>

                <p>
                  This area hub helps Wolverhampton visitors choose the right
                  local plumbing enquiry route. Start with your area, then add
                  the issue: blocked toilet, blocked drain, leak, tap repair,
                  kitchen plumbing, bathroom plumbing or water pressure problem.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Send Area Enquiry
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
                  <span>Bilston</span>
                  <span>Wednesfield</span>
                  <span>Tettenhall</span>
                  <span>Penn</span>
                  <span>Bushbury</span>
                </div>

                <small>
                  Add your Wolverhampton area or WV postcode in the message so
                  the enquiry is clear from the first line.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Local enquiry</span>
                  <strong>WV areas</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>Area-first message</p>
                  <h2>Area, issue and urgency</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston, Wednesfield, Penn or WV postcode</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Leak, drain, toilet, tap or pressure</strong>
                    </div>
                    <div>
                      <span>Urgency</span>
                      <strong>Today / 24–48 hours / flexible</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Local areas</span>
                    <strong>area enquiry routes</strong>
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
                <strong>Bilston</strong>
                <span>local enquiries</span>
              </div>
              <div>
                <strong>Wednesfield</strong>
                <span>urgent and drain issues</span>
              </div>
              <div>
                <strong>Tettenhall</strong>
                <span>bathroom and tap issues</span>
              </div>
              <div>
                <strong>Penn & Bushbury</strong>
                <span>nearby WV areas</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.areaHubSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Priority suburb pages</div>
              <h2>
                First Wolverhampton areas
                <span> to build properly.</span>
              </h2>
              <p>
                These are not random suburb names. They are the first area pages
                we will build with unique wording, different service angles and
                strong internal links.
              </p>
            </div>

            <div className={styles.areaHubGrid}>
              {priorityAreas.map((area) => (
                <article className={styles.areaHubCard} key={area.area}>
                  <span>{area.area}</span>
                  <h3>{area.area} plumbing enquiries</h3>
                  <p>{area.text}</p>

                  <ul>
                    {area.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>

                  <Link href={area.slug} className={styles.cardLink}>
                    Open {area.area} page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.areaServiceSection}>
          <div className={styles.container}>
            <div className={styles.areaServicePanel}>
              <div>
                <div className={styles.badge}>Service + area structure</div>
                <h2>
                  The goal is not “near me” spam.
                  <span> It is useful local routing.</span>
                </h2>
                <p>
                  Each area page should explain the most common enquiry types
                  for that area and link back to the strongest service pages:
                  emergency plumbing, drains, blocked toilets, leaks, taps,
                  kitchens, bathrooms and water pressure.
                </p>
              </div>

              <div className={styles.areaServiceList}>
                {localServiceGroups.map((service) => (
                  <Link href={service.href} key={service.href}>
                    <strong>{service.title}</strong>
                    <p>{service.text}</p>
                    <span>View service page →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Other WV area signals</div>
              <h2>
                Wolverhampton, nearby areas
                <span> and WV postcodes.</span>
              </h2>
              <p>
                These area terms support local relevance without needing to make
                a thin page for every single location immediately.
              </p>
            </div>

            <div className={styles.areaPills}>
              {otherAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.areaNotesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>How to write the message</div>
              <h2>
                Add the local area
                <span> before the plumbing details.</span>
              </h2>
              <p>
                A simple, local message is easier to understand than a vague
                message saying only “need plumber”.
              </p>
            </div>

            <div className={styles.areaNotesGrid}>
              {postcodeNotes.map((note) => (
                <article className={styles.areaNoteCard} key={note.title}>
                  <strong>{note.title}</strong>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Area questions</div>
              <h2>
                Wolverhampton plumbing areas
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
              <h2>Need plumbing help in a Wolverhampton area?</h2>
              <p>
                Send the area first, then the issue and urgency. Example:
                “Bilston blocked toilet, water rising after flushing, urgent
                today.”
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Build Area Enquiry
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
