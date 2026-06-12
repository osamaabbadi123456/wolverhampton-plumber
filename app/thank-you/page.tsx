import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry Sent | Wolverhampton Plumber",
  description: "Thank you for sending your Wolverhampton plumbing enquiry.",
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container">
          <p className="eyebrow">Enquiry Sent</p>

          <h1>Thank You</h1>

          <p className="heroText">
            Your plumbing enquiry has been submitted. The details can now be
            reviewed and handled where possible.
          </p>

          <p className="safeNote">
            This website does not guarantee emergency attendance or response
            times. For serious emergencies or suspected gas leaks, contact the
            appropriate emergency service immediately.
          </p>

          <div className="heroButtons">
            <Link href="/" className="btn primary">
              Back to Home
            </Link>

            <Link href="/plumbing-advice" className="btn secondary">
              View Plumbing Advice
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
