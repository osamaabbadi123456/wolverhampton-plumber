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
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20help%20with%20a%20water%20pressure%20problem%20in%20Wolverhampton.";

export const metadata: Metadata = {
  title: "Water Pressure Plumber Wolverhampton | Pressure Problem Enquiries",
  description:
    "Water pressure plumber Wolverhampton enquiries by WhatsApp. Send details for low water pressure, pressure drops, weak taps, shower pressure and plumbing pressure concerns.",
  alternates: { canonical: "/water-pressure-plumber-wolverhampton" },
};

export default function Page() {
  return (
    <ServiceLandingPage
      pageUrl="https://wolverhamptonplumber.co.uk/water-pressure-plumber-wolverhampton"
      schemaName="Water Pressure Plumber Wolverhampton Enquiries"
      schemaServiceType="Water pressure plumbing enquiries"
      schemaDescription="Water pressure plumber Wolverhampton enquiry page for low water pressure, pressure drops, weak taps, shower pressure and plumbing pressure concerns."
      badge="Water pressure enquiries in Wolverhampton"
      h1Main="Water Pressure Plumber"
      h1Highlight="Wolverhampton"
      intro="Need help with low water pressure in Wolverhampton? Send a WhatsApp enquiry for pressure drops, weak taps, shower pressure problems, hot or cold water pressure issues and related plumbing concerns."
      whatsappLink={whatsappLink}
      whatsappLabel="WhatsApp Pressure Enquiry"
      microTrust={[
        "Water pressure enquiries",
        "WV postcode focused",
        "Clear WhatsApp message",
      ]}
      smallNote="This website helps collect clear plumbing enquiry details before any next step. Response depends on availability, timing and the details of the enquiry."
      visualBadge="Pressure enquiry"
      visualSubtitle="WhatsApp pressure enquiry"
      visualTitle="Send the pressure issue clearly"
      visualRows={[
        { label: "Area", value: "Bilston / WV1 / Wednesfield" },
        { label: "Issue", value: "Low pressure or pressure drop" },
        { label: "Urgency", value: "Today / 24–48 hours / flexible" },
      ]}
      visualBottom={[
        { label: "Message format", value: "Area + Pressure Issue" },
        { label: "Sent by", value: "WhatsApp" },
      ]}
      stats={[
        { title: "Low pressure", text: "taps & showers" },
        { title: "Pressure drops", text: "sudden changes" },
        { title: "Hot or cold", text: "useful detail" },
        { title: "Wolverhampton", text: "WV area focused" },
      ]}
      servicesBadge="Water pressure search intent"
      servicesTitle="Water pressure enquiries,"
      servicesHighlight="clearly organised."
      servicesIntro="This page targets Wolverhampton users searching for low water pressure help, shower pressure issues, weak taps and plumbing pressure concerns."
      services={[
        {
          title: "Low Water Pressure",
          text: "For weak water flow from taps, showers, bathrooms, kitchens or multiple fixtures.",
          points: ["Weak tap flow", "Low shower pressure", "Multiple fixtures"],
        },
        {
          title: "Sudden Pressure Drops",
          text: "For pressure that suddenly changes, drops during use or affects hot and cold water differently.",
          points: ["Sudden change", "Hot or cold side", "Intermittent issue"],
        },
        {
          title: "Shower Pressure Problems",
          text: "For poor shower flow, weak pressure, slow response or bathroom pressure concerns.",
          points: ["Weak shower", "Bathroom pressure", "Poor flow"],
        },
        {
          title: "Tap Pressure Issues",
          text: "For one tap with weak flow, kitchen tap pressure problems or bathroom basin pressure concerns.",
          points: ["One tap affected", "Kitchen tap", "Bathroom tap"],
        },
        {
          title: "Heating Pressure Concerns",
          text: "For heating-related pressure symptoms, radiator issues or system pressure concerns.",
          points: ["Heating pressure", "Radiator concern", "Pressure warning"],
        },
        {
          title: "Useful Enquiry Details",
          text: "Mention whether one fixture or the whole property is affected, and whether the issue is hot, cold or both.",
          points: [
            "One fixture or whole home",
            "Hot or cold",
            "When it started",
          ],
        },
      ]}
      trustBadge="Clear local enquiry process"
      trustTitle="A Wolverhampton water pressure enquiry page."
      trustHighlight="Built for fast WhatsApp contact."
      trustIntro="The enquiry flow helps the visitor send the key details: Wolverhampton area, which fixtures are affected, whether it is hot or cold water, and how urgent the issue feels."
      trustItems={[
        {
          title: "Clear pressure issue",
          text: "Low pressure, weak taps, shower pressure or sudden pressure drops.",
        },
        {
          title: "Useful fixture detail",
          text: "One tap, shower, bathroom, kitchen or the whole property.",
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
      areasTitle="Water pressure enquiries across"
      areasHighlight="Wolverhampton."
      areasIntro="The page includes Wolverhampton areas and WV postcode signals to support local relevance for water pressure and plumber searches."
      areas={areas}
      faqTitle="Water pressure plumber"
      faqHighlight="Wolverhampton FAQs."
      faqs={[
        {
          q: "Can I send a water pressure enquiry in Wolverhampton?",
          a: "Yes. You can send a WhatsApp enquiry with your area, affected fixtures, whether the issue is hot or cold water, and how urgent it feels.",
        },
        {
          q: "What water pressure problems can I send?",
          a: "Common enquiries include low water pressure, sudden pressure drops, weak taps, poor shower pressure and heating pressure concerns.",
        },
        {
          q: "What details help with a pressure enquiry?",
          a: "Mention whether one tap or the whole property is affected, whether it is hot water, cold water or both, and when the issue started.",
        },
      ]}
      finalTitle="Need help with water pressure in Wolverhampton?"
      finalText="Start with a WhatsApp enquiry. Add your area, pressure issue and urgency, then send the pre-filled message."
    />
  );
}
