import type { Metadata } from "next";
import Link from "next/link";
import styles from "./emergency-plumber-wolverhampton/EmergencyPage.module.css";
import { featuredServices, extraServices, areas, articles, whatsappLink, siteUrl } from "./_data/siteContent";
import { ServiceIcon } from "./_components/ServiceIcon";
import { MotionReveal, MotionCard } from "./_components/MotionReveal";
import { HomeVideoFrame } from "./_components/HomeVideoFrame";

export const metadata: Metadata = {
  title: "Wolverhampton Plumber | Local Plumbing Enquiry Website",
  description: "Wolverhampton plumbing enquiry website for blocked toilets, drains, leaks, taps, kitchens, bathrooms, water pressure and clear WhatsApp enquiry support.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Wolverhampton Plumber | Local Plumbing Enquiry Website",
    description: "Send clearer Wolverhampton plumbing enquiries with service pages, advice, photos and structured WhatsApp details.",
    url: siteUrl,
    type: "website",
    locale: "en_GB",
  },
};

const steps = [
  "Choose the closest plumbing issue or local area page.",
  "Add the room, fixture, symptom and Wolverhampton area.",
  "Attach a safe photo if it helps explain the issue.",
  "Send the WhatsApp enquiry so it can be routed based on availability.",
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.hero} ${styles.v4Hero} ${styles.v16HomeHero} ${styles.v17HomeHero} ${styles.v21HomeHero}`}>
        <div className={styles.container}>
          <div className={styles.v16HeroGrid}>
            <MotionReveal className={`${styles.v16HeroCopy} ${styles.v21HeroCopy}`}>
              <div className={styles.badge}>Wolverhampton plumbing enquiry website</div>
              <h1>Plumbing enquiries <span>made clearer.</span></h1>
              <p>
                Use focused Wolverhampton pages for leaks, blocked toilets, slow drains, taps,
                kitchen plumbing, bathroom plumbing and water pressure problems.
              </p>
              <div className={styles.heroActions}>
                <a href={whatsappLink} className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">Send details on WhatsApp</a>
                <Link href="/plumbing-advice" className={styles.secondaryBtn}>Explore advice</Link>
              </div>
              <div className={styles.microTrust}>
                <span>Service pages</span>
                <span>Area pages</span>
                <span>Advice hub</span>
                <span>Photo guidance</span>
              </div>
            </MotionReveal>

            <MotionReveal className={styles.v16HeroVideo}>
              <HomeVideoFrame />
            </MotionReveal>
          </div>
        </div>
      </section>

      <MotionReveal className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Core services</div>
            <h2>Most requested <span>plumbing pages.</span></h2>
            <p>Each service page focuses on the real symptom, the room affected, useful photos and the details that make an enquiry clearer.</p>
          </div>
          <div className={styles.v16FeaturedServiceGrid}>
            {featuredServices.map((service, index) => (
              <MotionCard className={styles.v16CardWrap} delay={index * 0.04} key={service.slug}>
                <Link href={service.href} className={styles.v4ServiceTile}>
                  <div className={styles.v4TileImage} style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 33, 58, .35), rgba(20, 184, 166, .12)), url('/images/real/${service.image}')` }} />
                  <div>
                    <span>{service.category}</span>
                    <h3>{service.label}</h3>
                    <p>{service.intro}</p>
                  </div>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.v4SplitGrid}>
            <div>
              <div className={styles.badge}>How it works</div>
              <h2>Simple steps before <span>you send the message.</span></h2>
              <div className={styles.v4Steps}>
                {steps.map((step, index) => (
                  <MotionCard className={styles.v16StepWrap} delay={index * 0.05} key={step}>
                    <div className={styles.v4Step}>
                      <strong>{index + 1}</strong>
                      <span>{step}</span>
                    </div>
                  </MotionCard>
                ))}
              </div>
            </div>
            <aside className={`${styles.v4TipBox} ${styles.v16FloatingPanel}`}>
              <div className={styles.badge}>Good enquiry format</div>
              <h3>Copy this structure</h3>
              <ul>
                <li>Area: Bilston / Wednesfield / Tettenhall / WV postcode</li>
                <li>Room: kitchen, bathroom, utility, outside</li>
                <li>Issue: leak, slow drain, blocked toilet, tap, pressure</li>
                <li>Urgency: today, 24-48 hours, flexible</li>
              </ul>
            </aside>
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>More plumbing help</div>
            <h2>Additional service pages <span>for specific jobs.</span></h2>
            <p>Use these when the enquiry is about a shower, sink, pipe, radiator, washing machine, stop tap or outside tap rather than a general plumbing problem.</p>
          </div>
          <div className={`${styles.v16FeaturedServiceGrid} ${styles.v21ExtraServiceGrid}`}>
            {extraServices.map((service, index) => (
              <MotionCard className={styles.v16CardWrap} delay={index * 0.035} key={service.slug}>
                <Link href={service.href} className={styles.v4ServiceTile}>
                  <div className={styles.v4TileImage} style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 33, 58, .34), rgba(20, 184, 166, .12)), url('/images/real/${service.image}')` }} />
                  <div>
                    <span>{service.category}</span>
                    <h3>{service.label}</h3>
                    <p>{service.intro}</p>
                  </div>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={styles.areaSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Areas covered</div>
            <h2>More Wolverhampton area <span>landing pages.</span></h2>
            <p>Area pages help users start with their neighbourhood and then move to the right service page.</p>
          </div>
          <div className={styles.areaPills}>
            {areas.map((area) => <Link href={area.href} key={area.slug}>{area.name}</Link>)}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Advice hub</div>
            <h2>Advice topics <span>for real home symptoms.</span></h2>
            <p>These guides focus on what people notice first: water rising, drains smelling, taps dripping, pressure changing or leaks appearing.</p>
          </div>
          <div className={styles.v4CardsGrid}>
            {articles.slice(0, 12).map((article, index) => (
              <MotionCard className={styles.v16CardWrap} delay={index * 0.035} key={article.slug}>
                <Link href={article.href} className={styles.v4InfoCard}>
                  <div className={styles.v4Icon}><ServiceIcon name="check" /></div>
                  <h3>{article.title}</h3>
                  <p>{article.highlight}</p>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={styles.finalSection}>
        <div className={styles.container}>
          <div className={styles.finalBox}>
            <h2>Ready to send a clearer plumbing enquiry?</h2>
            <p>Start with your Wolverhampton area, the room affected, the exact symptom and how urgent the issue feels.</p>
            <div className={styles.heroActionsCenter}>
              <Link href="/contact" className={styles.primaryBtn}>Open contact page</Link>
              <Link href="/areas-covered" className={styles.secondaryBtn}>See area pages</Link>
            </div>
          </div>
        </div>
      </MotionReveal>
    </main>
  );
}
