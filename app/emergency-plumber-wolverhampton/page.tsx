import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Plumber Wolverhampton | Urgent Plumbing Enquiries",
  description:
    "Submit an urgent plumbing enquiry in Wolverhampton for leaks, burst pipe concerns, blocked toilets, overflowing water and other plumbing issues.",
};

export default function EmergencyPlumberWolverhamptonPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Urgent Plumbing Enquiries</p>

            <h1>Emergency Plumber Wolverhampton</h1>

            <p className="heroText">
              If you have an urgent plumbing issue in Wolverhampton, such as a
              leak, burst pipe concern, overflowing toilet, blocked sink or
              sudden water problem, send your enquiry and we’ll try to connect
              you with available local plumbing help.
            </p>

            <div className="heroButtons">
              <Link href="/contact" className="btn primary">
                Request Urgent Help
              </Link>

              <a
                href="mailto:info@wolverhamptonplumber.co.uk"
                className="btn secondary"
              >
                Email Your Enquiry
              </a>
            </div>

            <p className="safeNote">
              We are a local enquiry website and cannot guarantee emergency
              attendance. For gas leaks or dangerous gas concerns, contact the
              National Gas Emergency Service immediately.
            </p>
          </div>

          <div className="heroCard">
            <h2>Urgent Issues People Ask About</h2>

            <ul>
              <li>Leaking or burst pipe concerns</li>
              <li>Overflowing toilets</li>
              <li>Blocked sinks and toilets</li>
              <li>Water coming through ceilings</li>
              <li>Sudden loss of water pressure</li>
              <li>Bathroom or kitchen plumbing faults</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Wolverhampton Help</p>
            <h2>Urgent Plumbing Problems Can Get Worse Quickly</h2>

            <p>
              Plumbing issues such as leaks, overflowing toilets and burst pipe
              concerns can cause damage if they are ignored. This page helps
              Wolverhampton residents submit urgent plumbing enquiries for
              common household problems.
            </p>

            <p>
              Share the type of problem, your Wolverhampton area, how urgent it
              is and the best way to contact you. Where possible, your enquiry
              can then be matched with available local plumbing support.
            </p>
          </div>

          <div className="infoPanel">
            <h3>Before You Submit</h3>
            <ul>
              <li>Turn off the water supply if safe to do so.</li>
              <li>Move valuables away from leaking water.</li>
              <li>Take photos of the issue if possible.</li>
              <li>Do not attempt gas work yourself.</li>
              <li>Use a Gas Safe registered engineer for gas appliances.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <p className="eyebrow">Common Emergency Enquiries</p>
          <h2>Plumbing Issues Covered</h2>

          <div className="cards">
            <div className="card">
              <h3>Leaks & Burst Pipe Concerns</h3>
              <p>
                Enquiries for visible leaks, dripping pipework, water stains,
                ceiling leaks and possible burst pipes in Wolverhampton homes.
              </p>
            </div>

            <div className="card">
              <h3>Blocked Toilets</h3>
              <p>
                Help requests for blocked toilets, overflowing toilets, slow
                flushing toilets and urgent bathroom plumbing problems.
              </p>
            </div>

            <div className="card">
              <h3>Kitchen & Bathroom Faults</h3>
              <p>
                Enquiries for taps, sinks, showers, waste pipes, water pressure
                issues and general urgent plumbing faults.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Areas</p>
          <h2>Emergency Plumbing Enquiries Across Wolverhampton</h2>

          <p>
            This page focuses on urgent plumbing enquiries across Wolverhampton
            and nearby areas including Bilston, Wednesfield, Tettenhall, Penn,
            Bushbury, Compton, Whitmore Reans, Willenhall, Codsall and Sedgley.
          </p>

          <div className="areaBox mt">
            <span>Wolverhampton</span>
            <span>Bilston</span>
            <span>Wednesfield</span>
            <span>Tettenhall</span>
            <span>Penn</span>
            <span>Bushbury</span>
            <span>Compton</span>
            <span>Willenhall</span>
            <span>Sedgley</span>
            <span>Codsall</span>
          </div>

          <div className="center">
            <Link href="/contact" className="btn primary">
              Submit an Emergency Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container faq">
          <p className="eyebrow">FAQ</p>
          <h2>Emergency Plumber Wolverhampton FAQs</h2>

          <div className="faqItem">
            <h3>
              Can I get an emergency plumber in Wolverhampton through this site?
            </h3>
            <p>
              You can submit an urgent plumbing enquiry through this site. We’ll
              try to connect your enquiry with available local plumbing help,
              but attendance cannot be guaranteed.
            </p>
          </div>

          <div className="faqItem">
            <h3>What should I do if water is leaking badly?</h3>
            <p>
              If safe, turn off the mains water supply and move items away from
              the leak. Then submit your enquiry with details and photos if
              possible.
            </p>
          </div>

          <div className="faqItem">
            <h3>Do you handle gas leaks?</h3>
            <p>
              No. For suspected gas leaks or dangerous gas issues, contact the
              National Gas Emergency Service immediately and use a Gas Safe
              registered engineer for gas work.
            </p>
          </div>

          <div className="faqItem">
            <h3>Which areas are covered?</h3>
            <p>
              The site focuses on Wolverhampton and nearby areas including
              Bilston, Wednesfield, Tettenhall, Penn, Bushbury and Compton.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
