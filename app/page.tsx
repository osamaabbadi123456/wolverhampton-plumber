import type { Metadata } from "next";
import Link from "next/link";
import styles from "./emergency-plumber-wolverhampton/EmergencyPage.module.css";

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Wolverhampton Plumber | Emergency, Drains, Leaks & Taps",
  description:
    "Wolverhampton plumbing enquiries for blocked toilets, blocked drains, leaks, tap repairs, bathroom plumbing, kitchen plumbing and urgent water problems.",
  keywords: [
    "Wolverhampton plumber",
    "plumber Wolverhampton",
    "emergency plumber Wolverhampton",
    "blocked drains Wolverhampton",
    "blocked toilet Wolverhampton",
    "leak repair Wolverhampton",
    "tap repair Wolverhampton",
    "bathroom plumber Wolverhampton",
    "kitchen plumber Wolverhampton",
    "water pressure plumber Wolverhampton",
    "local plumber Wolverhampton",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wolverhampton Plumber | Emergency, Drains, Leaks & Taps",
    description:
      "Send a clear WhatsApp plumbing enquiry in Wolverhampton for leaks, blocked toilets, blocked drains, tap repairs and urgent water problems.",
    url: "https://wolverhamptonplumber.co.uk",
    type: "website",
    locale: "en_GB",
  },
};

const problemFinder = [
  {
    title: "Toilet blocked or water rising",
    text: "Best for blocked toilets, repeated flushing problems, overflowing toilets and urgent bathroom waste issues.",
    href: "/blocked-toilet-wolverhampton",
    tag: "Blocked toilet",
  },
  {
    title: "Drain, sink or shower draining slowly",
    text: "Use this for blocked drains, blocked sinks, slow baths, slow showers and outside drain concerns.",
    href: "/blocked-drains-wolverhampton",
    tag: "Blocked drains",
  },
  {
    title: "Pipe, tap or sink leaking",
    text: "For visible water, under-sink leaks, bathroom leaks, tap leaks and pipework concerns.",
    href: "/leak-repair-wolverhampton",
    tag: "Leak repair",
  },
  {
    title: "Tap dripping, loose or not closing",
    text: "For dripping taps, stiff taps, leaking tap bases, broken tap fittings and low tap flow.",
    href: "/tap-repair-wolverhampton",
    tag: "Tap repair",
  },
  {
    title: "Kitchen sink or appliance pipework",
    text: "For kitchen sink leaks, waste pipes, washing machine pipework, dishwasher pipework and blocked kitchen sinks.",
    href: "/kitchen-plumber-wolverhampton",
    tag: "Kitchen plumbing",
  },
  {
    title: "Bathroom fixture or shower problem",
    text: "For toilet, basin, bath, shower, bathroom tap and bathroom pipework enquiries.",
    href: "/bathroom-plumber-wolverhampton",
    tag: "Bathroom plumbing",
  },
];

const priorityPages = [
  {
    title: "Emergency Plumber Wolverhampton",
    href: "/emergency-plumber-wolverhampton",
    text: "Urgent plumbing enquiries for leaks, blocked toilets, sudden water issues and problems that need clear details sent quickly.",
  },
  {
    title: "Blocked Drains Wolverhampton",
    href: "/blocked-drains-wolverhampton",
    text: "For blocked outside drains, blocked sinks, slow-draining showers, bath drainage and possible waste pipe concerns.",
  },
  {
    title: "Blocked Toilet Wolverhampton",
    href: "/blocked-toilet-wolverhampton",
    text: "For toilet blockages, rising water, repeated flushing issues and urgent bathroom waste problems.",
  },
  {
    title: "Leak Repair Wolverhampton",
    href: "/leak-repair-wolverhampton",
    text: "For pipe leaks, under-sink leaks, bathroom leaks, kitchen leaks and visible water around fittings.",
  },
  {
    title: "Tap Repair Wolverhampton",
    href: "/tap-repair-wolverhampton",
    text: "For dripping taps, leaking tap bases, stiff taps, broken taps and water flow issues.",
  },
  {
    title: "Water Pressure Plumber Wolverhampton",
    href: "/water-pressure-plumber-wolverhampton",
    text: "For weak water flow, low pressure in one tap, low shower pressure or whole-property pressure concerns.",
  },
];

const adviceLinks = [
  {
    title: "Internal stop tap leaking or broken",
    href: "/plumbing-advice/internal-stop-tap-leaking-wolverhampton",
    text: "A practical guide to stop taps, common stopcock problems and when not to force a stiff valve.",
  },
  {
    title: "How to prevent frozen and burst pipes",
    href: "/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton",
    text: "Cold-weather checks for stop taps, outside taps, insulation and first steps if water starts leaking.",
  },
  {
    title: "What to do if you smell gas",
    href: "/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton",
    text: "Safety-first guidance for suspected gas smell or carbon monoxide concerns, based around official advice.",
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
    q: "What is the fastest way to send a Wolverhampton plumbing enquiry?",
    a: "Use the enquiry page, choose the closest issue, select your Wolverhampton area and urgency, then open the prepared WhatsApp message.",
  },
  {
    q: "What details help most with a plumbing enquiry?",
    a: "The most useful details are the area, the exact issue, whether water is leaking or rising, how urgent it feels, and any short notes or photos.",
  },
  {
    q: "Can I send an enquiry if I am not sure what the problem is?",
    a: "Yes. Choose the closest category or use Other / I’m not sure, then describe what you can see, hear or smell in plain words.",
  },
  {
    q: "What if the issue involves gas or a boiler?",
    a: "Gas work and gas boiler work must be handled by a Gas Safe registered engineer. If you smell gas, follow official emergency guidance immediately.",
  },
  {
    q: "Which Wolverhampton areas are covered by the enquiry pages?",
    a: "The site is focused on Wolverhampton and nearby WV areas including Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton and Whitmore Reans.",
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wolverhampton Plumbing Enquiry Service",
    serviceType: "Plumbing enquiry routing",
    areaServed: {
      "@type": "City",
      name: "Wolverhampton",
    },
    provider: {
      "@type": "Organization",
      name: "Wolverhampton Plumber",
      url: "https://wolverhamptonplumber.co.uk",
    },
    url: "https://wolverhamptonplumber.co.uk",
    description:
      "Wolverhampton-focused plumbing enquiry website for blocked toilets, blocked drains, leaks, tap repairs, bathroom plumbing, kitchen plumbing and urgent water problems.",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Popular Wolverhampton plumbing enquiry pages",
    itemListElement: priorityPages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.title,
      url: `https://wolverhamptonplumber.co.uk${page.href}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                  Wolverhampton plumbing enquiry hub
                </div>

                <h1>
                  Wolverhampton
                  <span> Plumber</span>
                </h1>

                <p>
                  Plumbing problem in Wolverhampton? Choose the issue, add your
                  area and urgency, then send a clear WhatsApp enquiry for
                  blocked toilets, blocked drains, leaks, tap repairs, kitchen
                  plumbing or bathroom plumbing.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Choose Your Plumbing Issue
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

                <div className={styles.microTrust}>
                  <span>Problem-first enquiry flow</span>
                  <span>WV postcode focused</span>
                  <span>Built for mobile users</span>
                </div>

                <small>
                  This website helps turn a plumbing problem into a clear
                  enquiry message. For gas smells or suspected gas leaks, follow
                  official emergency guidance immediately. Gas work must be
                  handled by a Gas Safe registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Quick enquiry</span>
                  <strong>Wolverhampton</strong>
                </div>

                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>✓</div>

                  <p>What visitors send</p>
                  <h2>Area, issue and urgency</h2>

                  <div className={styles.requestRows}>
                    <div>
                      <span>Area</span>
                      <strong>Bilston / Wednesfield / WV postcode</strong>
                    </div>
                    <div>
                      <span>Issue</span>
                      <strong>Blocked toilet, leak, tap or drain</strong>
                    </div>
                    <div>
                      <span>Urgency</span>
                      <strong>Today / 24–48 hours / flexible</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span>Inspired by</span>
                    <strong>quote-flow UX</strong>
                  </div>
                  <div>
                    <span>Opens in</span>
                    <strong>WhatsApp</strong>
                  </div>
                </div>
              </aside>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>2 clicks</strong>
                <span>early GSC signal started</span>
              </div>
              <div>
                <strong>Blocked drains</strong>
                <span>highest impression topic</span>
              </div>
              <div>
                <strong>Emergency plumber</strong>
                <span>strong local intent</span>
              </div>
              <div>
                <strong>Mobile first</strong>
                <span>built for urgent users</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.homeFinder}>
          <div className={styles.container}>
            <div className={styles.finderPanel}>
              <div className={styles.sectionHeader}>
                <div className={styles.badge}>Find the right enquiry page</div>
                <h2>
                  What do you need
                  <span> plumbing help with?</span>
                </h2>
                <p>
                  Choose the closest problem below. Each page is written around
                  one real Wolverhampton search intent instead of sending every
                  visitor to the same generic page.
                </p>
              </div>

              <div className={styles.finderGrid}>
                {problemFinder.map((item) => (
                  <Link
                    href={item.href}
                    className={styles.finderOption}
                    key={item.href}
                  >
                    <span>{item.tag}</span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                    <em>Open page →</em>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Priority SEO pages</div>
              <h2>
                Wolverhampton plumbing pages
                <span> built around buyer intent.</span>
              </h2>
              <p>
                These are the pages we will keep strengthening first because
                they match the Search Console queries already appearing for the
                site.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {priorityPages.map((page) => (
                <article className={styles.serviceCard} key={page.href}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{page.title}</h3>
                  <p>{page.text}</p>
                  <Link href={page.href} className={styles.cardLink}>
                    View enquiry page
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
                <div className={styles.badge}>How the enquiry works</div>

                <h2>
                  Not a confusing form.
                  <span> A clear WhatsApp message.</span>
                </h2>

                <p>
                  People searching for a plumber are usually stressed. The
                  enquiry flow keeps the message simple: what happened, where it
                  happened, how urgent it feels, and any short details that help
                  explain the problem.
                </p>

                <div className={styles.trustList}>
                  <div>
                    <strong>Choose the problem</strong>
                    <span>
                      Blocked toilet, blocked drain, leak, tap, kitchen,
                      bathroom or heating pipework.
                    </span>
                  </div>

                  <div>
                    <strong>Add the Wolverhampton area</strong>
                    <span>
                      Bilston, Wednesfield, Tettenhall, Penn, Bushbury, WV
                      postcode or nearby area.
                    </span>
                  </div>

                  <div>
                    <strong>Set the urgency</strong>
                    <span>
                      Urgent today, within 24–48 hours, this week or flexible.
                    </span>
                  </div>

                  <div>
                    <strong>Review before sending</strong>
                    <span>
                      WhatsApp opens first so the message can be checked and
                      edited before it is sent.
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.enquiryBox}>
                <div className={styles.checkCircle}>✓</div>
                <h3>Message format</h3>

                <div className={styles.enquiryRows}>
                  <div>
                    <span>Category</span>
                    <strong>Blockage / leak / tap / drain</strong>
                  </div>
                  <div>
                    <span>Area</span>
                    <strong>WV1 / Bilston / Wednesfield</strong>
                  </div>
                  <div>
                    <span>Urgency</span>
                    <strong>Today / 24–48 hours / flexible</strong>
                  </div>
                  <div>
                    <span>Details</span>
                    <strong>Short note or photo if useful</strong>
                  </div>
                </div>

                <Link href="/contact" className={styles.fullBtn}>
                  Build WhatsApp Enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Useful plumbing guides</div>
              <h2>
                Advice pages that help
                <span> visitors and search engines.</span>
              </h2>
              <p>
                These guides are based on real UK plumbing and safety guidance,
                then adapted for Wolverhampton homeowners looking for clear
                first steps.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {adviceLinks.map((article) => (
                <article className={styles.serviceCard} key={article.href}>
                  <div className={styles.serviceIcon}>✓</div>
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
                  <Link href={article.href} className={styles.cardLink}>
                    Read guide
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Local area signals</div>

              <h2>
                Wolverhampton and
                <span> nearby WV areas.</span>
              </h2>

              <p>
                The site is focused around Wolverhampton, not generic UK
                plumbing traffic. These local terms help support searches for
                plumbers, blocked drains, blocked toilets and leak repair in WV
                areas.
              </p>
            </div>

            <div className={styles.areaPills}>
              {areas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>

            <div className={styles.areaLinkBox}>
              <h3>Next suburb pages to build</h3>
              <p>
                Bilston, Wednesfield, Tettenhall, Penn and Bushbury will be the
                first suburb-focused pages once the main service pages are fully
                differentiated.
              </p>
              <Link href="/areas-covered" className={styles.cardLink}>
                View areas covered
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Questions</div>

              <h2>
                Wolverhampton plumber
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
              <h2>Send a clear Wolverhampton plumbing enquiry.</h2>

              <p>
                Choose the closest problem, add the area and urgency, then open
                the prepared WhatsApp message.
              </p>

              <div className={styles.heroActionsCenter}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Choose Your Plumbing Issue
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
