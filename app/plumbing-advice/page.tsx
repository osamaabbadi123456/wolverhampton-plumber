import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";
import { articles, featuredServices } from "../_data/siteContent";
import { ServiceIcon } from "../_components/ServiceIcon";
import { MotionReveal, MotionCard } from "../_components/MotionReveal";

export const metadata: Metadata = {
  title: "Wolverhampton Plumbing Advice | Practical Home Plumbing Guides",
  description: "Practical Wolverhampton plumbing advice for blocked toilets, slow drains, leaks, taps, sinks, showers, pressure issues and safe first checks.",
  alternates: { canonical: "/plumbing-advice" },
};

const quickChecks = [
  { title: "Water rising or backing up", text: "Stop using the fixture, check whether other drains are affected, and avoid repeated flushing or running water.", icon: "backup" as const },
  { title: "Visible leak or spreading water", text: "Move items away, keep clear of electrics, and notice whether water appears only while the fixture is used.", icon: "leak" as const },
  { title: "Low pressure or weak flow", text: "Compare hot and cold, then check whether one tap, one room or the whole home is affected.", icon: "gauge" as const },
  { title: "Smell or gurgling", text: "Mention when the smell appears and whether water drains slowly or makes noise after another fixture is used.", icon: "smell" as const },
];

export default function PlumbingAdviceHubPage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.hero} ${styles.v15AdviceHubHero}`}>
        <div className={styles.container}>
          <div className={styles.v15AdviceHeroGrid}>
            <div className={styles.heroText}>
              <div className={styles.badge}>Advice hub</div>
              <h1>Plumbing advice <span>before the enquiry.</span></h1>
              <p>Start with the symptom, not the form. These Wolverhampton guides explain what to check, what to avoid, and what photos help if the problem still needs to be sent as an enquiry.</p>
              <div className={styles.microTrust}><span>Safe checks</span><span>Real symptoms</span><span>Clear next step</span></div>
            </div>
            <aside className={styles.v4PhotoHero} style={{ backgroundImage: "linear-gradient(90deg, rgba(3, 20, 39, .82), rgba(3, 20, 39, .20)), url('/images/real/plumbing-advice-hub-wolverhampton.jpg')" }}>
              <div className={styles.v4HeroPanel}><div className={styles.v4Icon}><ServiceIcon name="check" /></div><strong>Practical advice</strong><span>Use the guide first. Send an enquiry only if the problem still needs help.</span></div>
            </aside>
          </div>
        </div>
      </section>

      <MotionReveal className={`${styles.servicesSection} ${styles.v23RelatedSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Start by symptom</div>
            <h2>Quick checks for <span>common plumbing issues.</span></h2>
            <p>These checks keep the advice useful and practical before any WhatsApp message is needed.</p>
          </div>
          <div className={styles.v15QuickCheckGrid}>
            {quickChecks.map((item, index) => (
              <MotionCard key={item.title} delay={index * 0.04} className={styles.v15QuickCheckCard}>
                <div className={styles.v4Icon}><ServiceIcon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Advice articles</div>
            <h2>Guides that explain <span>what to do first.</span></h2>
            <p>Each article is built around a real household symptom: rising toilet water, slow sinks, leaks, smells, pressure drops, appliance waste and ceiling marks.</p>
          </div>
          <div className={styles.v15ArticleGrid}>
            {articles.map((article, index) => (
              <MotionCard key={article.slug} delay={(index % 6) * 0.035}>
                <Link href={article.href} className={styles.v15ArticleCard}>
                  <span>Guide {String(index + 1).padStart(2, "0")}</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={`${styles.servicesSection} ${styles.v23RelatedSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Related services</div>
            <h2>Choose a Wolverhampton service page <span>after the advice.</span></h2>
            <p>These Wolverhampton service pages help turn the advice into a clearer enquiry once the issue is understood well enough to describe.</p>
          </div>
          <div className={styles.v24RelatedImageGrid}>
            {featuredServices.map((service) => (
              <Link href={service.href} key={service.slug} className={`${styles.v4ServiceTile} ${styles.v24RelatedImageCard}`}>
                <div className={styles.v4TileImage} style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 33, 58, .34), rgba(20, 184, 166, .12)), url('/images/real/${service.image}')` }} />
                <div>
                  <span>{service.category}</span>
                  <h3>{service.label}</h3>
                  <p>Wolverhampton service page to use after checking the relevant advice.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MotionReveal>
    </main>
  );
}
