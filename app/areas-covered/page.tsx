import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas Covered | Wolverhampton Plumber Enquiries",
  description:
    "Submit plumbing enquiries across Wolverhampton and nearby areas including Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton, Willenhall and Sedgley.",
};

const areas = [
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
  "Dunstall Hill",
  "Parkfields",
  "Blakenhall",
  "Fallings Park",
  "Oxley",
];

export default function AreasCoveredPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Areas Covered</p>

            <h1>Plumbing Enquiries Across Wolverhampton</h1>

            <p className="heroText">
              This website focuses on plumbing enquiries from Wolverhampton and
              nearby local areas. Whether the issue is a leak, blocked toilet,
              tap repair, shower problem, heating plumbing concern or general
              plumbing job, you can submit your enquiry online.
            </p>

            <div className="heroButtons">
              <Link href="/contact" className="btn primary">
                Submit Your Enquiry
              </Link>

              <a
                href="mailto:info@wolverhamptonplumber.co.uk"
                className="btn secondary"
              >
                Email Your Details
              </a>
            </div>

            <p className="safeNote">
              We are a local enquiry website and try to connect suitable
              enquiries with available local plumbing help where possible.
            </p>
          </div>

          <div className="heroCard">
            <h2>Main Areas</h2>

            <ul>
              <li>Wolverhampton</li>
              <li>Bilston</li>
              <li>Wednesfield</li>
              <li>Tettenhall</li>
              <li>Penn</li>
              <li>Bushbury</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Local Coverage</p>
            <h2>Wolverhampton and Nearby Areas</h2>

            <p>
              Wolverhampton has many nearby neighbourhoods and surrounding areas
              where residents may need help with plumbing problems. This page
              helps organise plumbing enquiries by local area, making it easier
              to understand where the job is based.
            </p>

            <p>
              When submitting an enquiry, include your exact area, the type of
              plumbing problem, how urgent it is and the best way to contact
              you. This helps your enquiry become clearer and easier to pass on.
            </p>
          </div>

          <div className="infoPanel">
            <h3>What to Include</h3>
            <ul>
              <li>Your Wolverhampton area or postcode area.</li>
              <li>The plumbing issue you need help with.</li>
              <li>Whether the job is urgent or flexible.</li>
              <li>Photos of the issue if useful and safe.</li>
              <li>Your preferred contact method.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <p className="eyebrow">Area List</p>
          <h2>Areas You Can Submit Enquiries From</h2>

          <div className="areaBox areaGrid mt">
            {areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Services by Area</p>
          <h2>Common Plumbing Enquiries in Wolverhampton Areas</h2>

          <div className="cards">
            <div className="card">
              <h3>Leaks and Pipe Problems</h3>
              <p>
                Enquiries for leaking pipes, dripping pipework, ceiling leaks,
                water stains, burst pipe concerns and general water leaks across
                Wolverhampton.
              </p>
              <Link href="/emergency-plumber-wolverhampton">
                Emergency enquiries
              </Link>
            </div>

            <div className="card">
              <h3>Blocked Toilets and Drains</h3>
              <p>
                Help requests for blocked toilets, blocked sinks, slow drains,
                bad smells and drainage problems in Wolverhampton homes.
              </p>
              <Link href="/blocked-drains-wolverhampton">
                Blocked drain enquiries
              </Link>
            </div>

            <div className="card">
              <h3>Heating Plumbing Issues</h3>
              <p>
                Enquiries for radiator leaks, heating pipework concerns, water
                pressure issues and boiler-related plumbing questions.
              </p>
              <Link href="/boiler-heating-plumber-wolverhampton">
                Heating enquiries
              </Link>
            </div>
          </div>

          <div className="center">
            <Link href="/contact" className="btn primary">
              Request a Callback
            </Link>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container faq">
          <p className="eyebrow">FAQ</p>
          <h2>Wolverhampton Areas Covered FAQs</h2>

          <div className="faqItem">
            <h3>Which areas can submit plumbing enquiries?</h3>
            <p>
              This site focuses on Wolverhampton and nearby areas including
              Bilston, Wednesfield, Tettenhall, Penn, Bushbury, Compton,
              Willenhall, Sedgley and Codsall.
            </p>
          </div>

          <div className="faqItem">
            <h3>Do I need to be in central Wolverhampton?</h3>
            <p>
              No. You can submit an enquiry from central Wolverhampton or nearby
              local areas. Add your area or postcode area when submitting the
              form.
            </p>
          </div>

          <div className="faqItem">
            <h3>Can I submit an urgent plumbing enquiry?</h3>
            <p>
              Yes. You can submit urgent plumbing enquiries, but this website
              cannot guarantee attendance or response times.
            </p>
          </div>

          <div className="faqItem">
            <h3>Is this a plumbing company?</h3>
            <p>
              This is a local plumbing enquiry website. It helps organise
              Wolverhampton plumbing enquiries and may connect them with
              available local help where possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
