import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Advice Wolverhampton | Helpful Plumbing Tips",
  description:
    "Helpful plumbing advice for Wolverhampton residents, including what to do with leaks, blocked toilets, low water pressure and heating plumbing issues.",
};

const adviceItems = [
  {
    title: "What to do if a pipe is leaking",
    text: "If safe, turn off the mains water supply, move valuables away from the leak and take photos of the problem before submitting an enquiry.",
  },
  {
    title: "How to deal with a blocked toilet",
    text: "Avoid repeated flushing if the water level is rising. Stop using the toilet and describe whether water is backing up, draining slowly or overflowing.",
  },
  {
    title: "When to mention urgency",
    text: "If water is spreading, a toilet is unusable, or the issue affects the whole home, clearly mark the enquiry as urgent.",
  },
  {
    title: "Heating and boiler safety",
    text: "For gas appliances or suspected gas problems, use a Gas Safe registered engineer. Do not attempt gas work yourself.",
  },
  {
    title: "Low water pressure details",
    text: "Mention whether low pressure affects one tap, one room or the whole property. This can help make the enquiry clearer.",
  },
  {
    title: "Photos can help",
    text: "Clear photos of taps, leaks, pipework, drains or water stains can make the problem easier to understand before anyone contacts you.",
  },
];

export default function PlumbingAdvicePage() {
  return (
    <main>
      <section className="hero innerHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Helpful Plumbing Notes</p>

            <h1>Plumbing Advice for Wolverhampton Residents</h1>

            <p className="heroText">
              Simple plumbing notes and safety reminders for common home issues
              such as leaks, blocked toilets, slow drains, water pressure
              problems, tap repairs and heating-related plumbing concerns.
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
              This advice is general information only. It is not professional
              plumbing, legal, emergency or gas safety advice.
            </p>
          </div>

          <div className="heroCard">
            <h2>Quick Topics</h2>

            <ul>
              <li>Leaking pipes</li>
              <li>Blocked toilets</li>
              <li>Blocked sinks and drains</li>
              <li>Water pressure issues</li>
              <li>Heating plumbing concerns</li>
              <li>Gas safety reminders</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Advice Topics</p>
          <h2>Common Plumbing Tips Before You Submit an Enquiry</h2>

          <div className="cards adviceCards">
            {adviceItems.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container split">
          <div>
            <p className="eyebrow">Better Enquiries</p>
            <h2>What Details Should You Include?</h2>

            <p>
              A clear plumbing enquiry is easier to understand. Before sending
              your message, include your Wolverhampton area, the issue, how long
              it has been happening, whether it is urgent and how you prefer to
              be contacted.
            </p>

            <p>
              For example, instead of only writing “blocked toilet”, include
              whether the toilet is overflowing, draining slowly, completely
              blocked or affecting more than one bathroom.
            </p>

            <Link href="/contact" className="textLink">
              Send your plumbing enquiry
            </Link>
          </div>

          <div className="infoPanel">
            <h3>Useful Details</h3>
            <ul>
              <li>Area or postcode area</li>
              <li>Type of plumbing issue</li>
              <li>How urgent it is</li>
              <li>Photos if useful</li>
              <li>Best contact number</li>
              <li>Best time to be contacted</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq">
          <p className="eyebrow">Safety</p>
          <h2>Important Plumbing Safety Notes</h2>

          <div className="faqItem">
            <h3>What should I do if water is leaking badly?</h3>
            <p>
              If safe, turn off the mains water supply and move items away from
              the leaking area. Avoid electrical risks and seek urgent help if
              there is serious water damage.
            </p>
          </div>

          <div className="faqItem">
            <h3>Should I try to fix gas-related problems myself?</h3>
            <p>
              No. Gas work should only be carried out by a Gas Safe registered
              engineer. If you smell gas or suspect a leak, contact the National
              Gas Emergency Service immediately.
            </p>
          </div>

          <div className="faqItem">
            <h3>Can photos help with a plumbing enquiry?</h3>
            <p>
              Yes. Photos can help explain leaks, pipework, water stains, blocked
              drains, taps, showers and visible plumbing problems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}