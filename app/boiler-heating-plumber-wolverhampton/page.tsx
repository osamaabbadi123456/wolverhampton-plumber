import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boiler & Heating Plumber Wolverhampton | Heating Plumbing Enquiries",
  description:
    "Submit a boiler or heating plumbing enquiry in Wolverhampton for radiator issues, heating leaks, water pressure problems and general heating plumbing help.",
};

export default function BoilerHeatingPlumberWolverhamptonPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Heating Plumbing Enquiries</p>

            <h1>Boiler & Heating Plumber Wolverhampton</h1>

            <p className="heroText">
              Need help with a heating or boiler-related plumbing issue in
              Wolverhampton? Submit your enquiry for radiator problems, heating
              leaks, water pressure issues, pipework concerns or general heating
              plumbing support.
            </p>

            <div className="heroButtons">
              <Link href="/contact" className="btn primary">
                Request Heating Help
              </Link>

              <a
                href="mailto:info@wolverhamptonplumber.co.uk"
                className="btn secondary"
              >
                Email Your Enquiry
              </a>
            </div>

            <p className="safeNote">
              Gas work must only be carried out by a Gas Safe registered
              engineer. This site accepts enquiries and does not claim to carry
              out gas work directly.
            </p>
          </div>

          <div className="heroCard">
            <h2>Heating Enquiries</h2>

            <ul>
              <li>Radiator leaks</li>
              <li>Heating pipework issues</li>
              <li>Water pressure problems</li>
              <li>Cold radiator concerns</li>
              <li>Boiler-related plumbing questions</li>
              <li>General heating plumbing help</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Safe Heating Help</p>
            <h2>Heating and Boiler Plumbing Enquiries in Wolverhampton</h2>

            <p>
              Heating problems can be frustrating, especially when they affect
              hot water, radiators or water pressure. This page is designed for
              Wolverhampton residents who need help finding local support for
              heating-related plumbing issues.
            </p>

            <p>
              Common enquiries include radiator leaks, pipework concerns, low
              pressure, noisy heating systems, cold radiators and other plumbing
              issues connected to the heating system.
            </p>
          </div>

          <div className="infoPanel">
            <h3>Important Gas Safety Note</h3>
            <ul>
              <li>Do not attempt gas work yourself.</li>
              <li>Use a Gas Safe registered engineer for gas appliances.</li>
              <li>If you smell gas, treat it as an emergency.</li>
              <li>
                For suspected gas leaks, contact the emergency gas service.
              </li>
              <li>Include clear details when submitting your enquiry.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <p className="eyebrow">Common Heating Issues</p>
          <h2>Boiler and Heating Plumbing Help Requests</h2>

          <div className="cards">
            <div className="card">
              <h3>Radiator Leaks</h3>
              <p>
                Enquiries for leaking radiators, radiator valve issues, dripping
                pipework and heating water leaks around the home.
              </p>
            </div>

            <div className="card">
              <h3>Water Pressure Problems</h3>
              <p>
                Help requests for low pressure, pressure drops, heating system
                concerns and water pressure problems affecting the property.
              </p>
            </div>

            <div className="card">
              <h3>Heating Pipework</h3>
              <p>
                Enquiries about heating pipes, visible leaks, pipe noises,
                possible pipe damage and general heating plumbing concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Areas</p>
          <h2>Heating Plumbing Enquiries Across Wolverhampton</h2>

          <p>
            This page focuses on boiler and heating plumbing enquiries across
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
              Submit a Heating Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container faq">
          <p className="eyebrow">FAQ</p>
          <h2>Boiler & Heating Plumber Wolverhampton FAQs</h2>

          <div className="faqItem">
            <h3>Can I submit a boiler enquiry through this site?</h3>
            <p>
              Yes. You can submit boiler-related plumbing enquiries, but any gas
              work must be carried out by a Gas Safe registered engineer.
            </p>
          </div>

          <div className="faqItem">
            <h3>Do you cover radiator leaks?</h3>
            <p>
              This site accepts enquiries for radiator leaks, heating pipework
              concerns, radiator valve issues and water leaks around heating
              systems.
            </p>
          </div>

          <div className="faqItem">
            <h3>What if I smell gas?</h3>
            <p>
              If you smell gas or suspect a gas leak, do not use this website as
              your first step. Treat it as an emergency and contact the National
              Gas Emergency Service immediately.
            </p>
          </div>

          <div className="faqItem">
            <h3>Which Wolverhampton areas are covered?</h3>
            <p>
              Enquiries can be submitted from Wolverhampton and nearby areas
              including Bilston, Wednesfield, Tettenhall, Penn, Bushbury,
              Compton, Willenhall and Sedgley.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
