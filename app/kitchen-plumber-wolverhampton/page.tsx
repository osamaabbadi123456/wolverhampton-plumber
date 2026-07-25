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
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20kitchen%20plumbing%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Kitchen Plumber Wolverhampton | Sink & Kitchen Plumbing Enquiries",
  description:
    "Kitchen plumber Wolverhampton enquiries by WhatsApp. Send details for kitchen sink leaks, blocked sinks, waste pipes, kitchen taps, appliance pipework and water leaks.",
  alternates: { canonical: "/kitchen-plumber-wolverhampton" },
};

export default function Page() {
  return (
    <ServiceLandingPage
      pageUrl="https://wolverhamptonplumber.co.uk/kitchen-plumber-wolverhampton"
      schemaName="Kitchen Plumber Wolverhampton Enquiries"
      schemaServiceType="Kitchen plumbing enquiries"
      schemaDescription="Kitchen plumber Wolverhampton enquiry page for kitchen sink leaks, blocked sinks, waste pipes, kitchen taps, appliance pipework and water leaks."
      badge="Kitchen plumbing enquiries in Wolverhampton"
      h1Main="Kitchen Plumber"
      h1Highlight="Wolverhampton"
      intro="Need help with kitchen plumbing in Wolverhampton? Send a WhatsApp enquiry for kitchen sink leaks, blocked sinks, waste pipes, kitchen taps, appliance pipework and water leaks."
      whatsappLink={whatsappLink}
      whatsappLabel="WhatsApp Kitchen Enquiry"
      microTrust={[
        "Kitchen plumbing enquiries",
        "WV postcode focused",
        "Clear WhatsApp message",
      ]}
      smallNote="This website helps collect clear plumbing enquiry details before any next step. Response depends on availability, timing and the details of the enquiry."
      visualBadge="Kitchen enquiry"
      visualSubtitle="WhatsApp kitchen enquiry"
      visualTitle="Send the kitchen issue clearly"
      visualRows={[
        { label: "Area", value: "Bilston / WV1 / Wednesfield" },
        { label: "Issue", value: "Sink, tap, waste or pipework" },
        { label: "Urgency", value: "Today / 24–48 hours / flexible" },
      ]}
      visualBottom={[
        { label: "Message format", value: "Area + Kitchen Issue" },
        { label: "Sent by", value: "WhatsApp" },
      ]}
      stats={[
        { title: "Kitchen sinks", text: "leaks & blockages" },
        { title: "Waste pipes", text: "drainage concerns" },
        { title: "Kitchen taps", text: "drips & leaks" },
        { title: "Wolverhampton", text: "WV area focused" },
      ]}
      servicesBadge="Kitchen search intent"
      servicesTitle="Kitchen plumbing enquiries,"
      servicesHighlight="clearly organised."
      servicesIntro="This page targets Wolverhampton users searching for kitchen plumber help, blocked sinks, kitchen leaks, waste pipe issues and kitchen tap repairs."
      services={[
        {
          title: "Kitchen Sink Leaks",
          text: "For leaks under kitchen sinks, water in cabinets, loose fittings and pipework around the sink.",
          points: ["Under-sink leak", "Water in cabinet", "Loose fitting"],
        },
        {
          title: "Blocked Kitchen Sinks",
          text: "For slow draining sinks, fully blocked sinks, waste pipe concerns and kitchen drainage problems.",
          points: ["Blocked sink", "Slow draining water", "Waste pipe concern"],
        },
        {
          title: "Kitchen Waste Pipes",
          text: "For waste pipe leaks, trap issues, smells, poor drainage and under-sink waste concerns.",
          points: ["Waste pipe leak", "Trap issue", "Drainage smell"],
        },
        {
          title: "Kitchen Tap Repairs",
          text: "For leaking kitchen taps, dripping taps, loose tap bases and poor water flow.",
          points: ["Leaking tap", "Dripping tap", "Low water flow"],
        },
        {
          title: "Appliance Pipework",
          text: "For plumbing pipework concerns around washing machines, dishwashers and kitchen appliances.",
          points: [
            "Washing machine pipework",
            "Dishwasher pipework",
            "Water connection",
          ],
        },
        {
          title: "Urgent Kitchen Enquiries",
          text: "If water is leaking or the kitchen sink is unusable, send the area, issue and urgency clearly.",
          points: ["Urgent today", "Kitchen leak", "Clear WhatsApp message"],
        },
      ]}
      trustBadge="Clear local enquiry process"
      trustTitle="A Wolverhampton kitchen plumber enquiry page."
      trustHighlight="Built for fast WhatsApp contact."
      trustIntro="The enquiry flow helps the visitor send the key details: Wolverhampton area, affected kitchen fixture, what is happening and how urgent the issue feels."
      trustItems={[
        {
          title: "Clear kitchen issue",
          text: "Sink leak, blocked sink, waste pipe, kitchen tap or appliance pipework.",
        },
        {
          title: "Useful symptom detail",
          text: "Leak, blockage, slow drainage, smell, loose fitting or low water flow.",
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
      areasTitle="Kitchen plumber enquiries across"
      areasHighlight="Wolverhampton."
      areasIntro="The page includes Wolverhampton areas and WV postcode signals to support local relevance for kitchen plumber searches."
      areas={areas}
      faqTitle="Kitchen plumber"
      faqHighlight="Wolverhampton FAQs."
      faqs={[
        {
          q: "Can I send a kitchen plumber enquiry in Wolverhampton?",
          a: "Yes. You can send a WhatsApp enquiry with your area, affected kitchen fixture, issue and urgency.",
        },
        {
          q: "What kitchen plumbing issues can I send?",
          a: "Common enquiries include kitchen sink leaks, blocked sinks, waste pipe issues, kitchen taps, appliance pipework and water leaks.",
        },
        {
          q: "What details should I include?",
          a: "Include whether it is a sink, tap, waste pipe or appliance pipework issue, whether water is leaking, and how urgent it feels.",
        },
      ]}
      finalTitle="Need kitchen plumbing help in Wolverhampton?"
      finalText="Start with a WhatsApp enquiry. Add your area, kitchen issue and urgency, then send the pre-filled message."
    />
  );
}
