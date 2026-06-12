import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blocked Drains Wolverhampton | Blocked Toilets & Sinks",
  description:
    "Submit a blocked drain enquiry in Wolverhampton for blocked toilets, blocked sinks, slow draining water, bad smells and drainage problems.",
};

export default function BlockedDrainsWolverhamptonPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Blocked Drain Enquiries</p>

            <h1>Blocked Drains Wolverhampton</h1>

            <p className="heroText">
              Dealing with a blocked toilet, blocked sink, slow draining water,
              bad smell or outside drain issue in Wolverhampton? Submit your
              enquiry and we’ll try to connect you with available local plumbing
              or drainage help.
            </p>

            <div className="heroButtons">
              <Link href="/contact" className="btn primary">
                Request Drain Help
              </Link>

              <a
                href="mailto:info@wolverhamptonplumber.co.uk"
                className="btn secondary"
              >
                Email Your Enquiry
              </a>
            </div>

            <p className="safeNote">
              We are a local enquiry website. We do not guarantee attendance or
              drainage repair work directly.
            </p>
          </div>

          <div className="heroCard">
            <h2>Blocked Drain Problems</h2>

            <ul>
              <li>Blocked toilets</li>
              <li>Blocked kitchen sinks</li>
              <li>Blocked bathroom sinks</li>
              <li>Slow draining water</li>
              <li>Bad smells from drains</li>
              <li>Outside drain issues</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Drainage Problems</p>
            <h2>Blocked Toilets, Sinks and Drains in Wolverhampton</h2>

            <p>
              Blocked drains can quickly become stressful, especially when water
              starts backing up or a toilet becomes unusable. This page is for
              Wolverhampton residents looking for help with blocked toilets,
              sinks, baths, showers and general drain problems.
            </p>

            <p>
              Send the details of the blockage, your Wolverhampton area, how
              urgent the issue is and whether the problem is inside or outside
              the property.
            </p>
          </div>

          <div className="infoPanel">
            <h3>Helpful Details to Include</h3>
            <ul>
              <li>Is it a toilet, sink, bath, shower or outside drain?</li>
              <li>Is water backing up or draining slowly?</li>
              <li>Is there a bad smell?</li>
              <li>When did the problem start?</li>
              <li>Can you send photos if safe and useful?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <p className="eyebrow">Common Enquiries</p>
          <h2>Drain and Blockage Help Requests</h2>

          <div className="cards">
            <div className="card">
              <h3>Blocked Toilets</h3>
              <p>
                Enquiries for toilets that will not flush properly, overflowing
                toilets, recurring blockages and urgent bathroom drainage
                issues.
              </p>
            </div>

            <div className="card">
              <h3>Blocked Sinks</h3>
              <p>
                Help requests for kitchen sinks, bathroom sinks, slow drainage,
                standing water and waste pipe problems.
              </p>
            </div>

            <div className="card">
              <h3>Outside Drains</h3>
              <p>
                Enquiries for external drain blockages, bad smells, water
                pooling outside and drainage problems around the property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Areas</p>
          <h2>Blocked Drain Enquiries Across Wolverhampton</h2>

          <p>
            This page focuses on blocked drain and plumbing enquiries across
            Wolverhampton and nearby areas including Bilston, Wednesfield,
            Tettenhall, Penn, Bushbury, Compton, Whitmore Reans, Willenhall,
            Codsall and Sedgley.
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
              Submit a Blocked Drain Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container faq">
          <p className="eyebrow">FAQ</p>
          <h2>Blocked Drains Wolverhampton FAQs</h2>

          <div className="faqItem">
            <h3>Can I request help for a blocked toilet in Wolverhampton?</h3>
            <p>
              Yes. You can submit an enquiry for blocked toilets, overflowing
              toilets, slow flushing toilets and other bathroom drainage issues.
            </p>
          </div>

          <div className="faqItem">
            <h3>Do you cover blocked sinks?</h3>
            <p>
              This site accepts enquiries for blocked kitchen sinks, bathroom
              sinks, bath waste problems, shower drainage issues and slow
              draining water.
            </p>
          </div>

          <div className="faqItem">
            <h3>What should I do before submitting an enquiry?</h3>
            <p>
              Avoid using the affected toilet, sink or drain if water is backing
              up. Take photos if useful and include your area, urgency and the
              type of blockage in your enquiry.
            </p>
          </div>

          <div className="faqItem">
            <h3>Is this a drainage company?</h3>
            <p>
              This is a local enquiry website focused on Wolverhampton plumbing
              and drainage enquiries. We try to connect enquiries with available
              local help where possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
