import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Wolverhampton Plumber | Send a Plumbing Enquiry",
  description:
    "Send a Wolverhampton plumbing enquiry for leaks, blocked toilets, tap repairs, bathroom plumbing, heating plumbing and general plumbing help.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Send an Enquiry</p>

            <h1>Send Your Wolverhampton Plumbing Enquiry</h1>

            <p className="heroText">
              Tell us what plumbing help you need in Wolverhampton. Include your
              area, the type of problem, how urgent it is and the best way to
              contact you.
            </p>

            <p className="safeNote">
              We are a local plumbing enquiry website. Your enquiry may be used
              to help connect you with available local plumbing help where
              possible, but attendance and response times are not guaranteed.
            </p>
          </div>

          <div className="heroCard">
            <h2>Good Details to Send</h2>

            <ul>
              <li>Your Wolverhampton area</li>
              <li>The plumbing issue</li>
              <li>How urgent it is</li>
              <li>Photos if useful</li>
              <li>Your phone number or email</li>
              <li>Best time to contact you</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contactGrid">
          <div>
            <p className="eyebrow">Plumbing Enquiry Form</p>
            <h2>Send Your Plumbing Details</h2>

            <p>
              Use the form below to send your plumbing enquiry. Your details
              will be submitted through the website so the enquiry can be
              reviewed and handled more clearly.
            </p>

            <ContactForm />
          </div>

          <aside className="contactSide">
            <div className="infoPanel">
              <h3>WhatsApp Enquiry</h3>
              <p>
                You can also send your enquiry on WhatsApp. Include your area,
                issue, urgency and contact details.
              </p>

              <a
                className="sideEmail"
                href="https://wa.me/447448632279?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton."
                target="_blank"
                rel="noopener noreferrer"
              >
                Send WhatsApp Enquiry
              </a>
            </div>

            <div className="sideCard">
              <h3>Emergency Safety</h3>
              <p>
                If water is leaking badly, turn off the mains water supply if
                safe to do so. For suspected gas leaks, contact the National Gas
                Emergency Service immediately.
              </p>
            </div>

            <div className="sideCard">
              <h3>Popular Enquiries</h3>
              <ul>
                <li>Emergency plumbing enquiries</li>
                <li>Blocked toilets and drains</li>
                <li>Leaks and pipe problems</li>
                <li>Tap and shower repairs</li>
                <li>Heating plumbing concerns</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
