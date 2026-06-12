import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wolverhampton Plumber",
    url: "https://wolverhamptonplumber.co.uk",
    email: "info@wolverhamptonplumber.co.uk",
    areaServed: [
      "Wolverhampton",
      "Bilston",
      "Wednesfield",
      "Tettenhall",
      "Penn",
      "Bushbury",
      "Compton",
      "Whitmore Reans",
      "Willenhall",
      "Sedgley",
      "Codsall",
    ],
    description:
      "A Wolverhampton-focused plumbing enquiry website helping local residents submit plumbing enquiries for leaks, blocked toilets, tap repairs, bathroom plumbing, heating plumbing and general plumbing help.",
    sameAs: [],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plumbing Enquiries Wolverhampton",
          serviceType: "Plumbing enquiry service",
          areaServed: "Wolverhampton",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Plumbing Enquiries Wolverhampton",
          serviceType: "Emergency plumbing enquiries",
          areaServed: "Wolverhampton",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Blocked Drains Wolverhampton",
          serviceType: "Blocked drain and toilet enquiries",
          areaServed: "Wolverhampton",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I request plumbing help in Wolverhampton through this site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can submit a plumbing enquiry for Wolverhampton and nearby areas. The site helps organise local plumbing enquiries and may connect them with available local help where possible.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wolverhampton Plumber a plumbing company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wolverhampton Plumber is a local plumbing enquiry website. It does not claim to directly carry out plumbing work or guarantee attendance.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing issues can I submit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can submit enquiries for leaks, blocked toilets, blocked sinks, tap repairs, shower issues, bathroom plumbing, kitchen plumbing, water pressure problems and heating plumbing concerns.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas are covered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The site focuses on Wolverhampton and nearby areas including Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton, Whitmore Reans, Willenhall, Sedgley and Codsall.",
        },
      },
      {
        "@type": "Question",
        name: "Do you guarantee emergency response times?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This is an enquiry website and cannot guarantee emergency attendance or response times.",
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Wolverhampton Plumbing Enquiries</p>

            <h1>Find Local Plumbing Help in Wolverhampton</h1>

            <p className="heroText">
              Need help with a leak, blocked toilet, tap repair, shower issue,
              bathroom plumbing or another plumbing problem in Wolverhampton?
              Submit your enquiry and we’ll try to connect you with available
              local plumbing help.
            </p>

            <div className="heroButtons">
              <Link href="/contact" className="btn primary">
                Send Plumbing Enquiry
              </Link>

              <a
                href="https://wa.me/447448632279?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton."
                className="btn secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Enquiry
              </a>

              <a
                href="mailto:info@wolverhamptonplumber.co.uk"
                className="btn secondary"
              >
                Email Your Enquiry
              </a>
            </div>
            <p className="safeNote">
              We are a local plumbing enquiry website, not an emergency service.
              For dangerous gas issues, contact a Gas Safe registered engineer.
            </p>
          </div>

          <div className="heroCard">
            <h2>Common Plumbing Enquiries</h2>

            <ul>
              <li>Leaking pipes</li>
              <li>Blocked toilets and sinks</li>
              <li>Tap repairs and replacements</li>
              <li>Shower and bathroom plumbing</li>
              <li>Kitchen plumbing issues</li>
              <li>Water pressure problems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2>Plumbing Help Across Wolverhampton</h2>

          <div className="cards">
            <div className="card">
              <h3>Emergency Plumbing Enquiries</h3>
              <p>
                For urgent leaks, burst pipe concerns, overflowing toilets and
                plumbing issues that need attention quickly.
              </p>
              <Link href="/emergency-plumber-wolverhampton">Learn more</Link>
            </div>

            <div className="card">
              <h3>Blocked Drains & Toilets</h3>
              <p>
                Help with blocked toilets, slow draining sinks, bad smells,
                outside drains and general drainage problems.
              </p>
              <Link href="/blocked-drains-wolverhampton">Learn more</Link>
            </div>

            <div className="card">
              <h3>Boiler & Heating Plumbing Help</h3>
              <p>
                Get guidance for heating and boiler-related plumbing issues. Gas
                work should always be handled by a Gas Safe registered engineer.
              </p>
              <Link href="/boiler-heating-plumber-wolverhampton">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container split">
          <div>
            <p className="eyebrow">Areas Covered</p>
            <h2>Local Wolverhampton Areas</h2>

            <p>
              This site focuses on plumbing enquiries across Wolverhampton and
              nearby areas including Bilston, Wednesfield, Tettenhall, Penn,
              Bushbury, Compton, Whitmore Reans, Codsall, Willenhall and
              Sedgley.
            </p>

            <Link href="/areas-covered" className="textLink">
              View all areas covered
            </Link>
          </div>

          <div className="areaBox">
            <span>Bilston</span>
            <span>Wednesfield</span>
            <span>Tettenhall</span>
            <span>Penn</span>
            <span>Bushbury</span>
            <span>Compton</span>
            <span>Willenhall</span>
            <span>Sedgley</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Local Plumbing Help</p>

            <h2>
              Plumber Wolverhampton Enquiries for Common Home Plumbing Issues
            </h2>

            <p>
              Wolverhampton homes can experience a wide range of plumbing
              problems, from leaking pipes and blocked toilets to tap repairs,
              shower faults, bathroom plumbing issues, kitchen plumbing concerns
              and heating-related pipework problems.
            </p>

            <p>
              This website is designed to make plumbing enquiries clearer for
              local Wolverhampton residents. Instead of only sending a short
              message, you can include your area, the issue, urgency, photos if
              useful and your preferred contact method.
            </p>

            <Link href="/contact" className="textLink">
              Submit a Wolverhampton plumbing enquiry
            </Link>
          </div>

          <div className="localSeoBox">
            <h3>Popular Wolverhampton Enquiries</h3>

            <div className="seoPills">
              <span>Plumber Wolverhampton</span>
              <span>Emergency plumbing enquiries</span>
              <span>Blocked toilets</span>
              <span>Blocked drains</span>
              <span>Leaking pipes</span>
              <span>Tap repairs</span>
              <span>Bathroom plumbing</span>
              <span>Heating plumbing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">How It Works</p>
          <h2>Send Your Plumbing Enquiry</h2>

          <div className="steps">
            <div>
              <strong>1</strong>
              <h3>Tell us the issue</h3>
              <p>
                Leak, blocked toilet, tap repair, shower problem or another
                plumbing job.
              </p>
            </div>

            <div>
              <strong>2</strong>
              <h3>Share your area</h3>
              <p>Let us know where you are in or around Wolverhampton.</p>
            </div>

            <div>
              <strong>3</strong>
              <h3>We try to connect you</h3>
              <p>
                We’ll try to connect your enquiry with available local plumbing
                help.
              </p>
            </div>
          </div>

          <div className="center">
            <Link href="/contact" className="btn primary">
              Submit an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container faq">
          <p className="eyebrow">FAQ</p>
          <h2>Wolverhampton Plumber FAQs</h2>

          <div className="faqItem">
            <h3>
              Can I request plumbing help in Wolverhampton through this site?
            </h3>
            <p>
              Yes. You can submit a plumbing enquiry for Wolverhampton and
              nearby areas. The site helps organise local plumbing enquiries and
              may connect them with available local help where possible.
            </p>
          </div>

          <div className="faqItem">
            <h3>Is Wolverhampton Plumber a plumbing company?</h3>
            <p>
              Wolverhampton Plumber is a local plumbing enquiry website. It does
              not claim to directly carry out plumbing work or guarantee
              attendance.
            </p>
          </div>

          <div className="faqItem">
            <h3>What plumbing issues can I submit?</h3>
            <p>
              You can submit enquiries for leaks, blocked toilets, blocked
              sinks, tap repairs, shower issues, bathroom plumbing, kitchen
              plumbing, water pressure problems and heating plumbing concerns.
            </p>
          </div>

          <div className="faqItem">
            <h3>Which areas are covered?</h3>
            <p>
              The site focuses on Wolverhampton and nearby areas including
              Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton,
              Whitmore Reans, Willenhall, Sedgley and Codsall.
            </p>
          </div>

          <div className="faqItem">
            <h3>Do you guarantee emergency response times?</h3>
            <p>
              No. This is an enquiry website and cannot guarantee emergency
              attendance or response times.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
