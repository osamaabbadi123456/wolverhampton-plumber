import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

export const metadata: Metadata = {
  title: "Marketing Assets | Wolverhampton Plumber",
  description: "Private marketing asset previews for Wolverhampton Plumber pins and short video links.",
  robots: { index: false, follow: false },
};

const pins = [
  {
    title: "Toilet Water Rising",
    src: "/pins/toilet-water-rising-pin.png",
    article: "/plumbing-advice/blocked-toilet-water-rising-wolverhampton",
    svg: "/marketing-assets/svg-sources/toilet-water-rising-pin.svg",
  },
  {
    title: "Kitchen Sink Draining Slowly",
    src: "/pins/kitchen-sink-draining-slowly-pin.png",
    article: "/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton",
    svg: "/marketing-assets/svg-sources/kitchen-sink-draining-slowly-pin.svg",
  },
  {
    title: "Low Water Pressure From One Tap",
    src: "/pins/low-water-pressure-one-tap-pin.png",
    article: "/plumbing-advice/low-water-pressure-one-tap-wolverhampton",
    svg: "/marketing-assets/svg-sources/low-water-pressure-one-tap-pin.svg",
  },
  {
    title: "Water Leaking Under Sink",
    src: "/pins/water-leaking-under-sink-pin.png",
    article: "/plumbing-advice/water-leaking-under-sink-wolverhampton",
    svg: "/marketing-assets/svg-sources/water-leaking-under-sink-pin.svg",
  },
  {
    title: "Shower Drain Smells",
    src: "/pins/shower-drain-smells-pin.png",
    article: "/plumbing-advice/shower-drain-smells-wolverhampton",
    svg: "/marketing-assets/svg-sources/shower-drain-smells-pin.svg",
  },
];

const videos = [
  { title: "Toilet Water Rising", href: "/videos/toilet-water-rising.mp4" },
  { title: "Kitchen Sink Draining Slowly", href: "/videos/kitchen-sink-draining-slowly.mp4" },
  { title: "Low Water Pressure From One Tap", href: "/videos/low-water-pressure-one-tap.mp4" },
  { title: "Water Leaking Under Sink", href: "/videos/water-leaking-under-sink.mp4" },
  { title: "Shower Drain Smells", href: "/videos/shower-drain-smells.mp4" },
];

export default function MarketingAssetsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.badge}>Private asset page</div>
              <h1>
                Wolverhampton marketing
                <span> assets.</span>
              </h1>
              <p>
                Preview and open the Pinterest pin graphics, Canva SVG sources,
                upload metadata and short videos from the website itself.
              </p>
              <div className={styles.heroActions}>
                <Link href="/videos" className={styles.primaryBtn}>
                  Open Video Page
                </Link>
                <Link href="/plumbing-advice" className={styles.secondaryBtn}>
                  Advice Hub
                </Link>
              </div>
              <small>
                This page is marked noindex and is intended for your own asset
                access, not as a visitor sales page.
              </small>
            </div>

            <aside className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <span>Asset access</span>
                <strong>Pins + videos</strong>
              </div>
              <div className={styles.requestCard}>
                <div className={styles.requestIcon}>WV</div>
                <p>Use this page to</p>
                <h2>Open, download and reuse assets</h2>
                <div className={styles.requestRows}>
                  <div><span>Pins</span><strong>PNG graphics</strong></div>
                  <div><span>Canva</span><strong>SVG editable sources</strong></div>
                  <div><span>Videos</span><strong>MP4 short videos</strong></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.assetHubSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Pinterest pins</div>
            <h2>
              Pin graphics
              <span> ready to upload.</span>
            </h2>
            <p>
              Open each PNG, save it, then upload it to Pinterest, Canva or
              another social platform.
            </p>
          </div>

          <div className={styles.assetGrid}>
            {pins.map((pin) => (
              <article className={styles.assetCard} key={pin.src}>
                <img src={pin.src} alt={`${pin.title} pin design`} />
                <div>
                  <h2>{pin.title}</h2>
                  <div className={styles.assetActions}>
                    <a href={pin.src} target="_blank" rel="noopener noreferrer">Open PNG</a>
                    <a href={pin.svg} target="_blank" rel="noopener noreferrer">Open SVG</a>
                    <Link href={pin.article}>Target article</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.assetFilesSection}>
        <div className={styles.container}>
          <div className={styles.assetFilesBox}>
            <div>
              <div className={styles.badge}>Files</div>
              <h2>Canva, Pinterest and video files</h2>
              <p>
                These are direct website file links. Use them to copy upload
                titles, edit designs or open the videos directly.
              </p>
            </div>

            <div className={styles.assetFileLinks}>
              <a href="/marketing-assets/canva-design-blueprint.md" target="_blank" rel="noopener noreferrer">Canva design blueprint</a>
              <a href="/marketing-assets/pinterest-upload-metadata.csv" target="_blank" rel="noopener noreferrer">Pinterest upload metadata CSV</a>
              <a href="/marketing-assets/citation-profile-copy.md" target="_blank" rel="noopener noreferrer">Business citation copy</a>
              <Link href="/videos">Public video hub</Link>
            </div>
          </div>

          <div className={styles.assetVideoLinks}>
            {videos.map((video) => (
              <a href={video.href} target="_blank" rel="noopener noreferrer" key={video.href}>
                {video.title} MP4
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
