import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const services = ["Leaks", "Blocked toilets", "Slow drains", "Taps", "Water pressure", "Kitchen plumbing"];

export function HomeVideoFrame() {
  return (
    <div className={styles.v24StaticHeroVisual} aria-label="Common Wolverhampton plumbing enquiry types">
      <div className={styles.v24StaticShade} />
      <div className={styles.v24DiagonalServices}>
        {services.map((service, index) => (
          <span key={service} style={{ marginLeft: `${index * 18}px` }}>{service}</span>
        ))}
      </div>
      <div className={styles.v24StaticCaption}>
        <small>Wolverhampton enquiries</small>
        <strong>Start with the symptom you can see.</strong>
      </div>
    </div>
  );
}
