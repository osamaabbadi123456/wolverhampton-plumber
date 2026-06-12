import type { Metadata } from "next";

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

            <form
              className="contactForm"
              name="plumbing-enquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="plumbing-enquiry" />

              <p className="hiddenField">
                <label>
                  Do not fill this out if you are human:
                  <input name="bot-field" />
                </label>
              </p>

              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                />
              </label>

              <label>
                Wolverhampton area
                <input
                  type="text"
                  name="area"
                  placeholder="e.g. Bilston, Wednesfield, Tettenhall"
                  required
                />
              </label>

              <label>
                Type of plumbing issue
                <select name="issue" required defaultValue="">
                  <option value="" disabled>
                    Select an issue
                  </option>
                  <option value="Leak or burst pipe concern">
                    Leak or burst pipe concern
                  </option>
                  <option value="Blocked toilet">Blocked toilet</option>
                  <option value="Blocked sink or drain">
                    Blocked sink or drain
                  </option>
                  <option value="Tap repair">Tap repair</option>
                  <option value="Shower or bathroom plumbing">
                    Shower or bathroom plumbing
                  </option>
                  <option value="Kitchen plumbing">Kitchen plumbing</option>
                  <option value="Radiator or heating plumbing">
                    Radiator or heating plumbing
                  </option>
                  <option value="Water pressure problem">
                    Water pressure problem
                  </option>
                  <option value="Other plumbing issue">
                    Other plumbing issue
                  </option>
                </select>
              </label>

              <label>
                Urgency
                <select name="urgency" required defaultValue="">
                  <option value="" disabled>
                    Select urgency
                  </option>
                  <option value="Urgent today">Urgent today</option>
                  <option value="Within 24-48 hours">Within 24-48 hours</option>
                  <option value="This week">This week</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </label>

              <label className="full">
                Describe the problem
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us what happened, where the issue is, and any useful details."
                  required
                />
              </label>

              <button type="submit" className="btn primary formButton">
                Send Plumbing Enquiry
              </button>

              <p className="formNote">
                By sending this enquiry, you understand this website helps
                organise local plumbing enquiries and does not guarantee that a
                plumber will attend.
              </p>
            </form>
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
