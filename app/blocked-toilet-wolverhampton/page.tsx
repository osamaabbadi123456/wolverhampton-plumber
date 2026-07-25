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
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20blocked%20toilet%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Blocked Toilet Wolverhampton | Toilet Blockage Enquiries",
  description:
    "Blocked toilet Wolverhampton enquiries by WhatsApp. Send details for toilet blockages, rising water, bathroom waste issues and urgent toilet plumbing concerns.",
  alternates: { canonical: "/blocked-toilet-wolverhampton" },
};

export default function Page() {
  return (
    <ServiceLandingPage
      pageUrl="https://wolverhamptonplumber.co.uk/blocked-toilet-wolverhampton"
      schemaName="Blocked Toilet Wolverhampton Enquiries"
      schemaServiceType="Blocked toilet and toilet plumbing enquiries"
      schemaDescription="Blocked toilet Wolverhampton enquiry page for toilet blockages, rising water, bathroom waste issues and urgent toilet plumbing concerns."
      badge="Blocked toilet enquiries in Wolverhampton"
      h1Main="Blocked Toilet"
      h1Highlight="Wolverhampton"
      intro="Need help with a blocked toilet in Wolverhampton? Send a WhatsApp enquiry for toilet blockages, rising water, repeated flushing issues, bathroom waste problems and urgent toilet plumbing concerns."
      whatsappLink={whatsappLink}
      whatsappLabel="WhatsApp Toilet Enquiry"
      microTrust={[
        "Blocked toilet enquiries",
        "WV postcode focused",
        "Clear WhatsApp message",
      ]}
      smallNote="This website helps collect clear plumbing enquiry details before any next step. Response depends on availability, timing and the details of the enquiry."
      visualBadge="Toilet enquiry"
      visualSubtitle="WhatsApp toilet enquiry"
      visualTitle="Send the blockage clearly"
      visualRows={[
        { label: "Area", value: "Bilston / WV1 / Wednesfield" },
        { label: "Issue", value: "Blocked toilet or rising water" },
        { label: "Urgency", value: "Today / 24–48 hours / flexible" },
      ]}
      visualBottom={[
        { label: "Message format", value: "Area + Toilet Issue + Urgency" },
        { label: "Sent by", value: "WhatsApp" },
      ]}
      stats={[
        { title: "Blocked toilets", text: "urgent bathroom issues" },
        { title: "Rising water", text: "clear urgency details" },
        { title: "Bathroom waste", text: "toilet plumbing concerns" },
        { title: "Wolverhampton", text: "WV area focused" },
      ]}
      servicesBadge="Toilet blockage search intent"
      servicesTitle="Blocked toilet enquiries,"
      servicesHighlight="clearly organised."
      servicesIntro="This page targets Wolverhampton users searching for blocked toilet help, toilet blockages, rising toilet water and urgent bathroom plumbing support."
      services={[
        {
          title: "Blocked Toilets",
          text: "Send enquiries for toilet blockages, repeated flushing problems, slow clearing toilets and bathroom waste issues.",
          points: [
            "Toilet blockage",
            "Repeated flushing issue",
            "Bathroom waste concern",
          ],
        },
        {
          title: "Rising Toilet Water",
          text: "If water is rising, avoid repeated flushing and describe the issue clearly in the WhatsApp enquiry.",
          points: ["Rising water", "Urgent concern", "Avoid repeat flushing"],
        },
        {
          title: "Toilet Not Draining",
          text: "For toilets that drain slowly, do not clear properly or keep returning to the same problem.",
          points: ["Slow drainage", "Repeated blockage", "Toilet waste issue"],
        },
        {
          title: "Bathroom Plumbing",
          text: "For toilet, basin, bath, shower and nearby bathroom pipework concerns.",
          points: ["Bathroom issue", "Nearby pipework", "Water around toilet"],
        },
        {
          title: "Urgent Toilet Enquiries",
          text: "If the issue feels urgent, send the area, what happened and whether water is rising or leaking.",
          points: ["Urgent today", "Clear details", "WhatsApp route"],
        },
        {
          title: "Useful Photos",
          text: "Photos can help explain the type of toilet issue, visible water and where the problem appears.",
          points: ["Photo if useful", "Visible issue", "Area details"],
        },
      ]}
      trustBadge="Clear local enquiry process"
      trustTitle="A Wolverhampton blocked toilet enquiry page."
      trustHighlight="Built for fast WhatsApp contact."
      trustIntro="The enquiry flow helps the visitor send the key details: Wolverhampton area, what happened, whether water is rising, and how urgent the issue feels."
      trustItems={[
        {
          title: "Clear toilet issue",
          text: "Blocked toilet, rising water, slow drainage or bathroom waste concern.",
        },
        {
          title: "Useful urgency detail",
          text: "Today, 24–48 hours, this week or flexible.",
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
      areasTitle="Blocked toilet enquiries across"
      areasHighlight="Wolverhampton."
      areasIntro="The page includes Wolverhampton areas and WV postcode signals to support local relevance for blocked toilet and plumber searches."
      areas={areas}
      faqTitle="Blocked toilet"
      faqHighlight="Wolverhampton FAQs."
      faqs={[
        {
          q: "Can I send a blocked toilet enquiry in Wolverhampton?",
          a: "Yes. You can send a WhatsApp enquiry with your Wolverhampton area, what happened, whether water is rising and how urgent the problem feels.",
        },
        {
          q: "Should I keep flushing a blocked toilet?",
          a: "No. If the water is rising or not clearing, avoid repeated flushing because it may make the situation worse.",
        },
        {
          q: "What details should I include?",
          a: "Include your area, whether the toilet is fully blocked or slow draining, whether water is rising, and any useful photos.",
        },
      ]}
      finalTitle="Need help with a blocked toilet in Wolverhampton?"
      finalText="Start with a WhatsApp enquiry. Add your area, toilet issue and urgency, then send the pre-filled message."
    />
  );
}
