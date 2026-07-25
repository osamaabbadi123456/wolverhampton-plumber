import type { Metadata } from "next";
import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

export const metadata: Metadata = {
  title: "Thank You | Wolverhampton Plumber",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className={styles.page}>
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalBox}>
            <h1>Thank you</h1>
            <p>
              Your enquiry route has been completed. For the fastest route, use
              the WhatsApp enquiry page.
            </p>

            <div className={styles.heroActionsCenter}>
              <Link href="/contact" className={styles.primaryBtn}>
                Back to Contact
              </Link>

              <Link href="/" className={styles.secondaryBtn}>
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
