import type { Metadata } from "next";
import AdviceArticlePage from "../../_components/AdviceArticlePage";

export const metadata: Metadata = {
  title: "Internal Stop Tap Leaking Wolverhampton | What To Check",
  description:
    "Advice for Wolverhampton homes on what to check if an internal stop tap is leaking, stiff, broken or no longer shuts the water off properly.",
  alternates: {
    canonical: "/plumbing-advice/internal-stop-tap-leaking-wolverhampton",
  },
};

export default function Page() {
  return (
    <AdviceArticlePage
      pageUrl="https://wolverhamptonplumber.co.uk/plumbing-advice/internal-stop-tap-leaking-wolverhampton"
      title="Internal Stop Tap Leaking"
      highlight="Wolverhampton"
      description="If your internal stop tap is leaking, stiff, damaged or not shutting the water off properly, here are the practical checks Wolverhampton homeowners can understand before sending a plumbing enquiry."
      sourceNote="This article is based on WaterSafe guidance about internal stop taps, stopcocks, leaks, safe operation and when to use an approved plumber."
      sections={[
        {
          heading: "What is an internal stop tap?",
          body: [
            "An internal stop tap, sometimes called a stopcock or stop valve, controls the flow of water into a home or property.",
            "Knowing where it is and checking that it works can make a big difference during a leak, burst pipe or plumbing emergency.",
          ],
        },
        {
          heading: "Where is the stop tap usually found?",
          body: [
            "In many homes, the internal stop tap is under the kitchen sink. It may also be in a kitchen cupboard, downstairs toilet, garage, utility room, cellar or under the stairs.",
            "Turning the valve clockwise should reduce or stop the water flow. Turning it anti-clockwise should open it again. It should be turned slowly and should not be forced.",
          ],
          list: [
            "Under the kitchen sink",
            "Kitchen cupboard",
            "Downstairs bathroom or toilet",
            "Garage or utility room",
            "Cellar",
            "Under the stairs",
          ],
        },
        {
          heading: "Common stop tap problems",
          body: [
            "Water around the joints may point to a loose or worn compression nut, seal or fitting.",
            "Water coming from the spindle area may point to the gland nut or packing around the spindle.",
            "If the tap turns but does not stop the flow of water, the internal washer or mechanism may need attention.",
          ],
        },
        {
          heading: "When not to force it",
          body: [
            "Do not force seized parts, fragile pipework or corroded fittings. Excess force can damage the stop tap or pipework and make the leak worse.",
            "If the valve is cracked, rounded off, badly corroded or cannot isolate the water properly, it is safer to send a clear plumbing enquiry or use an approved plumber.",
          ],
        },
        {
          heading: "What details help in a Wolverhampton enquiry?",
          body: [
            "A useful enquiry should say where the stop tap is, whether it is leaking from a joint or spindle, whether it turns, and whether it can shut the water off.",
            "Photos can also help explain the condition of the valve and nearby pipework.",
          ],
          list: [
            "Your Wolverhampton area or WV postcode",
            "Where the stop tap is located",
            "Whether water is dripping, seeping or flowing",
            "Whether the valve turns",
            "Whether it shuts the water off",
            "Any photos of the stop tap and pipework",
          ],
        },
      ]}
      faqs={[
        {
          q: "What should I do if my internal stop tap is leaking?",
          a: "If it is safe, identify where the leak is coming from and avoid forcing the valve. If the stop tap is corroded, cracked or no longer shuts the water off, send a clear plumbing enquiry or contact an approved plumber.",
        },
        {
          q: "Where is my internal stop tap likely to be?",
          a: "It is commonly under the kitchen sink, but it may also be in a kitchen cupboard, downstairs toilet, garage, utility room, cellar or under the stairs.",
        },
        {
          q: "Can I force a stiff stop tap?",
          a: "No. Forcing a stiff or seized stop tap can damage the valve or pipework. Turn it slowly and stop if it does not move safely.",
        },
      ]}
      sources={[
        "WaterSafe Register guidance on internal stop taps and stopcocks",
        "WaterSafe Register guidance on leaking or broken internal stop taps",
      ]}
    />
  );
}
