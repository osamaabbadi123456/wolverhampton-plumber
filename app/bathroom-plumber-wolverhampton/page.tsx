import type { Metadata } from "next";
import ServiceLandingPage from "../_components/ServiceLandingPage";

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
  "WV1",
  "WV2",
  "WV3",
  "WV4",
  "WV6",
  "WV10",
  "WV11",
  "WV14",
];

const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20bathroom%20plumbing%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Bathroom Plumber Wolverhampton | Bathroom Plumbing Enquiries",
  description:
    "Bathroom plumber Wolverhampton enquiries by WhatsApp. Send details for toilet issues, basin leaks, shower plumbing, bath plumbing, bathroom pipework and leaks.",
  alternates: { canonical: "/bathroom-plumber-wolverhampton" },
};

export default function Page() {
  return (
    <ServiceLandingPage
      pageUrl="https://wolverhamptonplumber.co.uk/bathroom-plumber-wolverhampton"
      schemaName="Bathroom Plumber Wolverhampton Enquiries"
      schemaServiceType="Bathroom plumbing enquiries"
      schemaDescription="Bathroom plumber Wolverhampton enquiry page for toilet issues, basin leaks, shower plumbing, bath plumbing, bathroom pipework and leaks."
      badge="Bathroom plumbing enquiries in Wolverhampton"
      h1Main="Bathroom Plumber"
      h1Highlight="Wolverhampton"
      intro="Need help with bathroom plumbing in Wolverhampton? Send a WhatsApp enquiry for toilet issues, basin leaks, shower plumbing, bath plumbing, bathroom pipework and water leaks."
      whatsappLink={whatsappLink}
      whatsappLabel="WhatsApp Bathroom Enquiry"
      microTrust={[
        "Bathroom plumbing enquiries",
        "WV postcode focused",
        "Clear WhatsApp message",
      ]}
      smallNote="This website helps collect clear plumbing enquiry details before any next step. Response depends on availability, timing and the details of the enquiry."
      visualBadge="Bathroom enquiry"
      visualSubtitle="WhatsApp bathroom enquiry"
      visualTitle="Send the bathroom issue clearly"
      visualRows={[
        { label: "Area", value: "Bilston / WV1 / Wednesfield" },
        { label: "Issue", value: "Toilet, basin, shower or bath" },
        { label: "Urgency", value: "Today / 24–48 hours / flexible" },
      ]}
      visualBottom={[
        { label: "Message format", value: "Area + Bathroom Issue" },
        { label: "Sent by", value: "WhatsApp" },
      ]}
      stats={[
        { title: "Toilets", text: "blockages & leaks" },
        { title: "Showers", text: "leaks & drainage" },
        { title: "Basins", text: "taps & pipework" },
        { title: "Wolverhampton", text: "WV area focused" },
      ]}
      servicesBadge="Bathroom search intent"
      servicesTitle="Bathroom plumbing enquiries,"
      servicesHighlight="clearly organised."
      servicesIntro="This page targets Wolverhampton users searching for bathroom plumber help, toilet issues, shower plumbing, basin leaks and bath plumbing concerns."
      services={[
        {
          title: "Toilet Plumbing",
          text: "For blocked toilets, leaking toilets, flushing issues, water around the toilet or bathroom waste concerns.",
          points: ["Blocked toilet", "Leaking toilet", "Flush concerns"],
        },
        {
          title: "Basin Leaks",
          text: "For leaks under bathroom basins, dripping taps, waste pipe leaks and water around fittings.",
          points: ["Basin leak", "Waste pipe concern", "Bathroom tap issue"],
        },
        {
          title: "Shower Plumbing",
          text: "For leaking showers, slow draining showers, shower waste issues and visible pipework concerns.",
          points: ["Shower leak", "Slow drainage", "Pipework concern"],
        },
        {
          title: "Bath Plumbing",
          text: "For bath leaks, bath taps, waste pipe concerns, slow draining baths and water around bath panels.",
          points: ["Bath leak", "Bath taps", "Slow drainage"],
        },
        {
          title: "Bathroom Pipework",
          text: "For visible bathroom pipework leaks, water marks, pipe concerns and bathroom fixture issues.",
          points: ["Visible pipework", "Water marks", "Fixture concern"],
        },
        {
          title: "Urgent Bathroom Enquiries",
          text: "If the issue feels urgent, send the area, affected fixture, visible signs and urgency.",
          points: ["Urgent today", "Affected fixture", "Clear message"],
        },
      ]}
      trustBadge="Clear local enquiry process"
      trustTitle="A Wolverhampton bathroom plumber enquiry page."
      trustHighlight="Built for fast WhatsApp contact."
      trustIntro="The enquiry flow helps the visitor send the key details: Wolverhampton area, affected bathroom fixture, what is happening and how urgent the issue feels."
      trustItems={[
        {
          title: "Clear fixture detail",
          text: "Toilet, basin, shower, bath, tap or visible pipework.",
        },
        {
          title: "Useful symptom detail",
          text: "Leak, blockage, slow drainage, dripping or water around fittings.",
        },
        {
          title: "Local area detail",
          text: "Focused on Wolverhampton, WV postcodes and nearby areas.",
        },
        {
          title: "Simple WhatsApp route",
          text: "The message opens ready to edit before sending.",
        },
      ]}
      areasTitle="Bathroom plumber enquiries across"
      areasHighlight="Wolverhampton."
      areasIntro="The page includes Wolverhampton areas and WV postcode signals to support local relevance for bathroom plumber searches."
      areas={areas}
      faqTitle="Bathroom plumber"
      faqHighlight="Wolverhampton FAQs."
      faqs={[
        {
          q: "Can I send a bathroom plumber enquiry in Wolverhampton?",
          a: "Yes. You can send a WhatsApp enquiry with your area, affected bathroom fixture, issue and urgency.",
        },
        {
          q: "What bathroom plumbing problems can I send?",
          a: "Common enquiries include toilet issues, basin leaks, shower leaks, bath drainage, bathroom taps and visible bathroom pipework concerns.",
        },
        {
          q: "What details should I include?",
          a: "Include the affected fixture, whether there is a leak or blockage, your Wolverhampton area and how urgent it feels.",
        },
      ]}
      finalTitle="Need bathroom plumbing help in Wolverhampton?"
      finalText="Start with a WhatsApp enquiry. Add your area, bathroom issue and urgency, then send the pre-filled message."
    />
  );
}
