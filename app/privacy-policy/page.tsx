import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wolverhampton Plumber",
  description:
    "Privacy policy for Wolverhampton Plumber, explaining how plumbing enquiry information may be collected and used.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy Policy</h1>

          <p className="heroText">
            This privacy policy explains how Wolverhampton Plumber handles
            information submitted through this website.
          </p>

          <p className="safeNote">
            This website is a local plumbing enquiry website for Wolverhampton.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container policyContent">
          <h2>Information We Collect</h2>
          <p>
            When you submit an enquiry through this website, we may collect
            information such as your name, phone number, email address, local
            area, type of plumbing issue, urgency and message details.
          </p>

          <h2>How Your Information Is Used</h2>
          <p>
            Your information is used to understand your plumbing enquiry and,
            where possible, help connect your enquiry with available local
            plumbing support in or around Wolverhampton.
          </p>

          <h2>Sharing Your Information</h2>
          <p>
            If your enquiry is suitable, your details may be shared with a local
            plumbing provider so they can contact you about the issue. Your
            information is not sold as a mailing list.
          </p>

          <h2>No Guaranteed Attendance</h2>
          <p>
            Submitting an enquiry does not guarantee that a plumber will attend
            or that a response will be available within a specific time.
          </p>

          <h2>Email Communication</h2>
          <p>
            If you contact us by email or submit an enquiry, we may reply using
            the contact details you provide.
          </p>

          <h2>Data Retention</h2>
          <p>
            Enquiry details may be kept for a reasonable period so that we can
            manage the enquiry, respond to questions and improve the service.
          </p>

          <h2>Gas and Emergency Safety</h2>
          <p>
            This website does not provide emergency services. For suspected gas
            leaks or dangerous gas issues, contact the appropriate emergency
            service immediately and use a Gas Safe registered engineer for gas
            work.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact:
            <br />
            <strong>info@wolverhamptonplumber.co.uk</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
