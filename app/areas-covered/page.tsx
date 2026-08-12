import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";
import { areas, whatsappLink } from "../_data/siteContent";
import { MotionReveal, MotionCard } from "../_components/MotionReveal";
import { ServiceIcon } from "../_components/ServiceIcon";

export const metadata: Metadata = {
  title: "Areas Covered | Wolverhampton Plumbing Enquiry Pages",
  description:
    "Wolverhampton plumbing enquiry coverage pages for Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Oxley, Compton, Finchfield and nearby areas.",
  alternates: { canonical: "/areas-covered" },
};

const coverageNotes = [
  {
    title: "Start with the area",
    text: "Choose the closest Wolverhampton area page first, then narrow the enquiry by room, fixture and symptom.",
    icon: "mapPin" as const,
  },
  {
    title: "Match area to service",
    text: "A Bilston blocked drain enquiry is different from an Oxley outside tap issue or a Penn bathroom leak.",
    icon: "check" as const,
  },
  {
    title: "Use useful photos",
    text: "Area pages explain which photos help: outside context, kitchen waste route, bathroom fixture, pipework or drain clue.",
    icon: "camera" as const,
  },
];

const commonServiceCards = [
  {
    label: "Emergency Plumber",
    href: "/emergency-plumber-wolverhampton",
    intro: "Urgent water problems, active leaks and sudden plumbing issues.",
    image: "emergency-plumber-wolverhampton-detail.jpg",
    category: "Urgent plumbing",
  },
  {
    label: "Blocked Drains",
    href: "/blocked-drains-wolverhampton",
    intro: "Drainage issues, outside drains, smells and water backing up.",
    image: "blocked-drains-wolverhampton-detail.jpg",
    category: "Drainage",
  },
  {
    label: "Blocked Toilet",
    href: "/blocked-toilet-wolverhampton",
    intro: "Toilet water rising, flushing issues or repeated blockage signs.",
    image: "blocked-toilet-wolverhampton-detail.jpg",
    category: "Toilet plumbing",
  },
  {
    label: "Leak Repair",
    href: "/leak-repair-wolverhampton",
    intro: "Visible leaks under sinks, from pipework or around fixtures.",
    image: "leak-repair-wolverhampton-detail.jpg",
    category: "Leak enquiries",
  },
  {
    label: "Tap Repair",
    href: "/tap-repair-wolverhampton",
    intro: "Dripping taps, stiff handles and tap faults in kitchens or bathrooms.",
    image: "tap-repair-wolverhampton-detail.jpg",
    category: "Taps and fixtures",
  },
  {
    label: "Kitchen Plumbing",
    href: "/kitchen-plumber-wolverhampton",
    intro: "Kitchen sinks, waste pipes, appliance connections and under-sink issues.",
    image: "kitchen-plumber-wolverhampton-detail.jpg",
    category: "Kitchen plumbing",
  },
  {
    label: "Bathroom Plumbing",
    href: "/bathroom-plumber-wolverhampton",
    intro: "Toilets, basins, baths, showers and bathroom leaks or drainage.",
    image: "bathroom-plumber-wolverhampton-detail.jpg",
    category: "Bathroom plumbing",
  },
  {
    label: "Water Pressure",
    href: "/water-pressure-plumber-wolverhampton",
    intro: "Weak flow from one fixture or wider hot and cold pressure issues.",
    image: "water-pressure-plumber-wolverhampton-detail.jpg",
    category: "Water pressure",
  },
];

export default function AreasCoveredPage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.hero} ${styles.v27AreaCoverageHero}`}>
        <div className={styles.v27CoverageBackdrop} />
        <div className={styles.container}>
          <div className={styles.v27CoverageHeroGrid}>
            <MotionReveal className={styles.v27CoverageHeroText}>
              <div className={styles.badge}>Wolverhampton area coverage</div>
              <h1>
                Start with the <span>closest area</span>, then the service.
              </h1>
              <p>
                Use the Wolverhampton area pages to begin with location first,
                then narrow the enquiry into the exact issue: blocked drains,
                leaks, toilets, taps, kitchen plumbing, bathroom plumbing,
                pressure or pipework.
              </p>
              <div className={styles.heroActions}>
                <a
                  href={whatsappLink}
                  className={styles.primaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send WhatsApp enquiry
                </a>
                <Link href="/plumbing-advice" className={styles.secondaryBtn}>
                  Read advice first
                </Link>
              </div>
              <div className={styles.microTrust}>
                <span>WV area pages</span>
                <span>Photo-led guidance</span>
                <span>Service shortcuts</span>
              </div>
            </MotionReveal>

            <MotionReveal className={styles.v27CoverageShowcase}>
              <div className={styles.v27CoverageStage}>
                <div className={styles.v27CoverageStageImage} />
                <div className={styles.v27CoverageFloatingCardOne}>
                  <strong>Bilston</strong>
                  <span>blocked drain + outside photo</span>
                </div>
                <div className={styles.v27CoverageFloatingCardTwo}>
                  <strong>Penn</strong>
                  <span>bathroom leak + fixture detail</span>
                </div>
                <div className={styles.v27CoverageFloatingCardThree}>
                  <strong>Wednesfield</strong>
                  <span>outside tap + visible spread</span>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <MotionReveal className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Coverage logic</div>
            <h2>
              How the area pages <span>help the enquiry.</span>
            </h2>
            <p>
              Each area page is written to avoid repeating the same generic city
              copy. The wording changes by local area, fixture type and useful
              photo examples.
            </p>
          </div>
          <div className={styles.v27CoverageNotesGrid}>
            {coverageNotes.map((item, index) => (
              <MotionCard
                className={styles.v27CoverageNote}
                delay={index * 0.05}
                key={item.title}
              >
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
            <div className={styles.badge}>Choose an area</div>
            <h2>
              Wolverhampton area pages <span>with local wording.</span>
            </h2>
            <p>
              Open the area closest to the property, then use the service or
              advice links inside that page.
            </p>
          </div>
          <div className={styles.v27AreaImageGrid}>
            {areas.map((area, index) => {
              const locationImage =
                area.slug === "wolverhampton"
                  ? "location-wolverhampton-city-centre.jpg"
                  : `location-${area.slug}.jpg`;
              return (
                <MotionCard
                  className={styles.v16CardWrap}
                  delay={index * 0.025}
                  key={area.slug}
                >
                  <Link href={area.href} className={styles.v27AreaImageCard}>
                    <div
                      className={styles.v27AreaImage}
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(8, 33, 58, .06), rgba(8, 33, 58, .62)), url('/images/real/${locationImage}'), url('/images/real/${area.image}')`,
                      }}
                    />
                    <div className={styles.v27AreaImageBody}>
                      <span>{area.postcode}</span>
                      <h3>{area.name}</h3>
                      <p>{area.nearby}</p>
                    </div>
                  </Link>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Service shortcuts</div>
            <h2>
              Common service pages <span>for local enquiries.</span>
            </h2>
            <p>
              Jump from an area page into the closest service page when the
              problem is already clear.
            </p>
          </div>
          <div className={styles.v27CoverageServiceGrid}>
            {commonServiceCards.map((service, index) => (
              <MotionCard
                className={styles.v16CardWrap}
                delay={index * 0.03}
                key={service.href}
              >
                <Link href={service.href} className={styles.v27CoverageServiceCard}>
                  <div
                    className={styles.v27CoverageServiceImage}
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8, 33, 58, .06), rgba(8, 33, 58, .56)), url('/images/real/${service.image}')`,
                    }}
                  />
                  <div className={styles.v27CoverageServiceBody}>
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
    </main>
  );
}
