import type { Metadata } from "next";
import AdviceArticlePage from "../../_components/AdviceArticlePage";

export const metadata: Metadata = {
  title: "What To Do If You Smell Gas Wolverhampton | Safety Guidance",
  description:
    "Safety guidance for Wolverhampton homes on what to do if you smell gas, suspect a gas leak or carbon monoxide issue. Gas work must be handled by Gas Safe registered engineers.",
  alternates: {
    canonical: "/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton",
  },
};

export default function Page() {
  return (
    <AdviceArticlePage
      pageUrl="https://wolverhamptonplumber.co.uk/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton"
      title="What To Do If You Smell Gas"
      highlight="Wolverhampton"
      description="Important safety guidance for Wolverhampton homes if you smell gas, suspect a gas leak or think there may be a carbon monoxide risk."
      sourceNote="This article is based on Gas Safe Register gas emergency guidance. Before final publishing, quickly verify the emergency number from the current official Gas Safe or National Gas Emergency source."
      sections={[
        {
          heading: "Act quickly if you smell gas",
          body: [
            "A suspected gas leak is a safety issue, not a normal plumbing enquiry.",
            "If you smell gas or suspect carbon monoxide exposure, follow official emergency guidance immediately.",
          ],
        },
        {
          heading: "Immediate safety steps",
          body: [
            "Gas Safe guidance says to get fresh air immediately and ventilate the area by opening doors and windows.",
            "You should also avoid anything that could ignite escaping gas, including smoking, naked flames and operating electrical switches.",
          ],
          list: [
            "Open doors and windows for fresh air",
            "Turn off the gas emergency control valve at the meter if safe and accessible",
            "Do not smoke",
            "Extinguish naked flames",
            "Do not operate electrical switches",
            "Go outside into fresh air if you feel unwell",
          ],
        },
        {
          heading: "Who to call",
          body: [
            "For natural gas emergencies in England, Wales and Scotland, Gas Safe guidance lists the National Gas Emergency Helpline as 0800 111 999.",
            "For LPG, Northern Ireland, Isle of Man or Channel Islands situations, the correct number can differ, so the current official guidance should be checked.",
          ],
        },
        {
          heading: "Carbon monoxide symptoms",
          body: [
            "Carbon monoxide can be especially dangerous because it has no smell. A working CO alarm is important near relevant appliances.",
            "Possible symptoms mentioned in gas emergency guidance include feeling lightheaded, nausea, dizziness and headaches. If you feel unwell, get fresh air and seek medical help.",
          ],
          list: [
            "Feeling lightheaded",
            "Nausea",
            "Dizziness",
            "Headaches",
            "CO alarm sounding",
          ],
        },
        {
          heading: "Gas work needs Gas Safe",
          body: [
            "Any confirmation, repair or gas appliance work must be carried out by a competent Gas Safe registered engineer.",
            "Do not turn the gas supply back on until it has been checked and made safe by the correct professional.",
          ],
        },
        {
          heading: "How this relates to this website",
          body: [
            "This Wolverhampton website can help collect general plumbing enquiries, but gas leaks, suspected carbon monoxide and unsafe gas appliances must follow official emergency guidance.",
            "For boiler or gas appliance work, use a Gas Safe registered engineer.",
          ],
        },
      ]}
      faqs={[
        {
          q: "What should I do if I smell gas in Wolverhampton?",
          a: "Open doors and windows, avoid flames and electrical switches, turn off the gas at the meter if safe, get fresh air and contact the National Gas Emergency service using the current official number.",
        },
        {
          q: "Can a normal plumber fix a gas leak?",
          a: "Gas work must be handled by a competent Gas Safe registered engineer.",
        },
        {
          q: "What are possible carbon monoxide symptoms?",
          a: "Symptoms can include headaches, dizziness, nausea and feeling lightheaded. If you feel unwell, get fresh air and seek medical help.",
        },
      ]}
      sources={[
        "Gas Safe Register guidance: What to do in a gas emergency",
        "Gas Safe Register guidance on gas leaks and carbon monoxide",
        "National Gas Emergency guidance referenced by Gas Safe Register",
      ]}
    />
  );
}
