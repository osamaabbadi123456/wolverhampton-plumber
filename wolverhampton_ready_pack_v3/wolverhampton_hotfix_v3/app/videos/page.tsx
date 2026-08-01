import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

export const metadata: Metadata = {
  title: "Short Plumbing Videos Wolverhampton | Step-by-Step Advice",
  description:
    "Short Wolverhampton plumbing advice videos for blocked toilets, slow kitchen sinks, low water pressure, under-sink leaks and shower drain smells.",
  alternates: { canonical: "/videos" },
};

const videos = [
  {
    title: "Toilet Water Rising?",
    text: "Four quick steps before sending a blocked toilet enquiry.",
    src: "/videos/toilet-water-rising.mp4",
    href: "/plumbing-advice/blocked-toilet-water-rising-wolverhampton",
  },
  {
    title: "Kitchen Sink Draining Slowly?",
    text: "Check standing water, gurgling, smell and appliance pipework.",
    src: "/videos/kitchen-sink-draining-slowly.mp4",
    href: "/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton",
  },
  {
    title: "Low Pressure From One Tap?",
    text: "Check hot, cold, one tap or several before sending the enquiry.",
    src: "/videos/low-water-pressure-one-tap.mp4",
    href: "/plumbing-advice/low-water-pressure-one-tap-wolverhampton",
  },
  {
    title: "Water Leaking Under a Sink?",
    text: "Explain where the water appears and whether it leaks when the tap runs.",
    src: "/videos/water-leaking-under-sink.mp4",
    href: "/plumbing-advice/water-leaking-under-sink-wolverhampton",
  },
  {
    title: "Shower Drain Smells?",
    text: "Check slow drainage, gurgling and whether nearby fixtures are affected.",
    src: "/videos/shower-drain-smells.mp4",
    href: "/plumbing-advice/shower-drain-smells-wolverhampton",
  },
];

export default function VideosPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wolverhampton short plumbing advice videos",
    itemListElement: videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: video.title,
      url: `https://wolverhamptonplumber.co.uk${video.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <div className={styles.badge}>Short plumbing videos</div>
                <h1>
                  Step-by-step plumbing
                  <span> videos for Wolverhampton.</span>
                </h1>
                <p>
                  Short visual guides for common plumbing enquiries: rising
                  toilet water, slow kitchen sinks, one weak tap, under-sink
                  leaks and shower drain smells.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/plumbing-advice" className={styles.primaryBtn}>
                    Plumbing Advice Hub
                  </Link>
                  <Link href="/contact" className={styles.secondaryBtn}>
                    Build Enquiry
                  </Link>
                </div>
                <small>
                  These videos help visitors describe issues clearly. Gas work
                  must be handled by a Gas Safe registered engineer.
                </small>
              </div>

              <aside className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span>Video hub</span>
                  <strong>WV advice</strong>
                </div>
                <div className={styles.requestCard}>
                  <div className={styles.requestIcon}>▶️</div>
                  <p>How visitors use this</p>
                  <h2>Watch, then send clearer details</h2>
                  <div className={styles.requestRows}>
                    <div><span>1</span><strong>Find the closest issue</strong></div>
                    <div><span>2</span><strong>Watch the steps</strong></div>
                    <div><span>3</span><strong>Open the full guide</strong></div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.videoHubSection}>
          <div className={styles.container}>
            <div className={styles.videoGrid}>
              {videos.map((video) => (
                <article className={styles.videoCard} key={video.src}>
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                  />
                  <div>
                    <h2>{video.title}</h2>
                    <p>{video.text}</p>
                    <Link href={video.href} className={styles.cardLink}>
                      Open full guide
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
