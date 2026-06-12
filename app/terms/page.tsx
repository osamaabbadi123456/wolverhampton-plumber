import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Disclaimer | Wolverhampton Plumber",
  description:
    "Terms and disclaimer for Wolverhampton Plumber, a local plumbing enquiry website for Wolverhampton.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container">
          <p className="eyebrow">Terms</p>
          <h1>Terms & Disclaimer</h1>

          <p className="heroText">
            Please read this page before submitting a plumbing enquiry through
            Wolverhampton Plumber.
          </p>

          <p className="safeNote">
            This website is a local plumbing enquiry website, not an emergency
            service or a Gas Safe registered company.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container policyContent">
          <h2>About This Website</h2>
          <p>
            Wolverhampton Plumber is a local enquiry website designed to help
            people in Wolverhampton submit plumbing-related enquiries. The
            website does not claim to directly carry out plumbing work.
          </p>

          <h2>No Guaranteed Response</h2>
          <p>
            Submitting an enquiry does not guarantee that a plumber will contact
            you, attend your property or complete any work. Availability depends
            on local providers and the details of your enquiry.
          </p>

          <h2>Emergency Situations</h2>
          <p>
            This website should not be used as your only contact method in a
            serious emergency. If there is immediate danger, serious flooding or
            risk to life or property, contact the appropriate emergency
            services.
          </p>

          <h2>Gas Safety</h2>
          <p>
            Gas work must only be carried out by a Gas Safe registered engineer.
            If you smell gas or suspect a gas leak, contact the National Gas
            Emergency Service immediately.
          </p>

          <h2>Third-Party Providers</h2>
          <p>
            If your enquiry is shared with a local plumbing provider, any work,
            pricing, appointment, inspection, guarantee or agreement is between
            you and that provider. Wolverhampton Plumber is not responsible for
            the work carried out by third parties.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We aim to provide useful local plumbing information, but content on
            this website should not be treated as professional plumbing, legal,
            safety or gas advice.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this website, contact:
            <br />
            <strong>info@wolverhamptonplumber.co.uk</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
