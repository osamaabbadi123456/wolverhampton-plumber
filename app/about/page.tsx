import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wolverhampton Plumber | Local Plumbing Enquiry Website",
  description:
    "Learn about Wolverhampton Plumber, a local plumbing enquiry website helping residents submit plumbing enquiries across Wolverhampton.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">About This Website</p>

            <h1>About Wolverhampton Plumber</h1>

            <p className="heroText">
              Wolverhampton Plumber is a local plumbing enquiry website built to
              help people in Wolverhampton submit clear plumbing enquiries for
              common household issues such as leaks, blocked toilets, tap
              repairs, bathroom plumbing and heating-related plumbing concerns.
            </p>

            <div className="heroButtons">
              <Link href="/contact" className="btn primary">
                Submit an Enquiry
              </Link>

              <a
                href="https://wa.me/447448632279?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton."
                className="btn secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Enquiry
              </a>
            </div>

            <p className="safeNote">
              This website is not a plumbing company and does not guarantee
              attendance. It helps organise local plumbing enquiries.
            </p>
          </div>

          <div className="heroCard">
            <h2>What This Site Helps With</h2>

            <ul>
              <li>Plumbing enquiry collection</li>
              <li>Wolverhampton-focused service pages</li>
              <li>Common home plumbing issues</li>
              <li>Area-based enquiry details</li>
              <li>Safe information before submitting</li>
              <li>Clear contact and callback requests</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Local Focus</p>
            <h2>Built for Wolverhampton Plumbing Enquiries</h2>

            <p>
              Many plumbing problems are local and time-sensitive. When someone
              has a leak, blocked toilet, shower issue or water pressure problem,
              they often need a simple way to describe the problem and request
              help.
            </p>

            <p>
              This website is designed around Wolverhampton and nearby areas, so
              enquiries can include useful details such as the local area, type
              of plumbing issue, urgency and contact preference.
            </p>
          </div>

          <div className="infoPanel">
            <h3>Important Note</h3>
            <ul>
              <li>This is a plumbing enquiry website.</li>
              <li>It does not directly carry out plumbing work.</li>
              <li>It does not guarantee response times.</li>
              <li>Gas work must be handled by Gas Safe engineers.</li>
              <li>Emergency safety issues should be treated seriously.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <p className="eyebrow">How It Works</p>
          <h2>Simple Plumbing Enquiry Process</h2>

          <div className="steps">
            <div>
              <strong>1</strong>
              <h3>Describe the problem</h3>
              <p>
                Tell us if it is a leak, blockage, tap issue, bathroom plumbing
                problem, heating concern or another plumbing job.
              </p>
            </div>

            <div>
              <strong>2</strong>
              <h3>Add your area</h3>
              <p>
                Include your Wolverhampton area such as Bilston, Wednesfield,
                Tettenhall, Penn, Bushbury or another nearby location.
              </p>
            </div>

            <div>
              <strong>3</strong>
              <h3>Submit your details</h3>
              <p>
                Send your enquiry by form, email or WhatsApp so the details are
                clear and easier to handle.
              </p>
            </div>
          </div>

          <div className="center">
            <Link href="/contact" className="btn primary">
              Contact Wolverhampton Plumber
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}