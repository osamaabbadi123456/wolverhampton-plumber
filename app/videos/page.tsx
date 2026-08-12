import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";
import { featuredServices, extraServices, articles } from "../_data/siteContent";
import { ServiceIcon } from "../_components/ServiceIcon";
import { MotionReveal, MotionCard } from "../_components/MotionReveal";

export const metadata: Metadata = {
  title: "Plumbing Videos | Wolverhampton Plumbing Enquiry Help",
  description:
    "Wolverhampton plumbing video and visual guide page for leaks, blocked drains, toilets, taps, pressure, kitchen and bathroom plumbing enquiries.",
  alternates: { canonical: "/videos" },
  robots: {
    index: false,
    follow: false,
  },
};

const visualSteps = [
  {
    title: "Show the issue",
    text: "A short visual guide should show the actual fixture: sink, toilet, shower, tap, drain, pipe or appliance connection.",
    icon: "camera" as const,
  },
  {
    title: "Explain the symptom",
    text: "The useful part is the visible symptom: water rising, dripping, slow draining, weak flow, smell, gurgling or spreading water.",
    icon: "check" as const,
  },
  {
    title: "Move to the right page",
    text: "After the visual step, the user should open the matching service or advice page instead of sending a vague message.",
    icon: "message" as const,
  },
];

const videoTopics = [...featuredServices, ...extraServices].slice(0, 16);

export default function VideosPage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.hero} ${styles.v26VideoHero}`}>
        <div className={styles.container}>
          <div className={styles.v26VideoHeroGrid}>
            <MotionReveal className={styles.v26VideoHeroText}>
              <div className={styles.badge}>Visual plumbing guides</div>
              <h1>
                Short visual guides <span>before the enquiry.</span>
              </h1>
              <p>
                This page is prepared for replacing weak videos with simple
                silent visual explainers: photo steps, animated cards and
                service links that help visitors choose the right page.
              </p>
              <div className={styles.microTrust}>
                <span>Silent visual steps</span>
                <span>Service routing</span>
                <span>Advice support</span>
              </div>
            </MotionReveal>
            <MotionReveal className={styles.v26VideoPreview}>
              <div className={styles.v26VideoStage}>
                <div className={styles.v26VideoFrameOne} />
                <div className={styles.v26VideoFrameTwo} />
                <div className={styles.v26VideoControls}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <MotionReveal className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Video plan</div>
            <h2>
              Use visual steps <span>instead of weak videos.</span>
            </h2>
            <p>
              Each future clip can be made from simple image steps: problem
              photo, what to check, what to avoid, then the related service
              page.
            </p>
          </div>
          <div className={styles.v26VideoStepGrid}>
            {visualSteps.map((item, index) => (
              <MotionCard className={styles.v26VideoStepCard} delay={index * 0.05} key={item.title}>
                <div className={styles.v4Icon}>
                  <ServiceIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={styles.areaSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Service video cards</div>
            <h2>
              Video topics linked to <span>service pages.</span>
            </h2>
            <p>
              These cards can later be replaced with real short videos or silent
              image-step clips.
            </p>
          </div>
          <div className={styles.v26VideoCardGrid}>
            {videoTopics.map((service, index) => (
              <MotionCard className={styles.v16CardWrap} delay={index * 0.025} key={service.slug}>
                <Link href={service.href} className={styles.v26VideoCard}>
                  <div
                    className={styles.v26VideoThumb}
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(8, 33, 58, .42), rgba(20, 184, 166, .13)), url('/images/real/${service.image}')`,
                    }}
                  >
                    <span className={styles.v26PlayIcon}>▶</span>
                  </div>
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
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Advice clips later</div>
            <h2>
              Advice pages can become <span>silent step videos.</span>
            </h2>
            <p>
              The advice articles already contain the structure needed for silent
              clips: do first, check safely, avoid, useful photos and final
              enquiry step.
            </p>
          </div>
          <div className={styles.v4CardsGrid}>
            {articles.slice(0, 9).map((article, index) => (
              <MotionCard className={styles.v16CardWrap} delay={index * 0.035} key={article.slug}>
                <Link href={article.href} className={styles.v4InfoCard}>
                  <div className={styles.v4Icon}>
                    <ServiceIcon name="check" />
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.highlight}</p>
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </MotionReveal>
    </main>
  );
}
