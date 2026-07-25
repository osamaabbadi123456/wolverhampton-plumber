import type { Metadata } from "next";
import AdviceArticlePage from "../../_components/AdviceArticlePage";

export const metadata: Metadata = {
  title: "Frozen & Burst Pipes Wolverhampton | Prevention & First Steps",
  description:
    "Practical advice for Wolverhampton homes on frozen pipes, burst pipes, stop taps, outside taps, insulation and what to do if water starts leaking.",
  alternates: {
    canonical:
      "/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton",
  },
};

export default function Page() {
  return (
    <AdviceArticlePage
      pageUrl="https://wolverhamptonplumber.co.uk/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton"
      title="Frozen & Burst Pipes"
      highlight="Wolverhampton"
      description="Simple Wolverhampton plumbing advice on reducing the risk of frozen pipes, knowing your stop tap location and what to do if a pipe freezes or bursts."
      sourceNote="This article is based on WaterSafe guidance about freezing weather, burst pipes, stop taps, outside taps, insulation and frozen condensate pipes."
      sections={[
        {
          heading: "Know where your stop tap is",
          body: [
            "One of the most useful things you can do before cold weather is find your internal stop tap and understand how to use it.",
            "If a pipe bursts or water starts escaping, turning off the water quickly can help reduce damage before any next step.",
          ],
        },
        {
          heading: "Simple prevention steps",
          body: [
            "Cold weather can freeze exposed or poorly insulated pipework. Outside taps, pipework in unheated areas and boiler condensate pipes can be more vulnerable.",
            "Keeping the home warm enough, insulating exposed pipes and fixing dripping taps can all help reduce risk.",
          ],
          list: [
            "Know where the stop tap is and check it works",
            "Fix dripping taps inside and outside",
            "Isolate and drain outside taps where possible",
            "Insulate outside taps and pipes in unheated areas",
            "Keep heating on at a safe background temperature in cold weather",
          ],
        },
        {
          heading: "What to do if a pipe freezes",
          body: [
            "If a pipe freezes, avoid using direct flame or unsafe heat. Gentle thawing is safer.",
            "WaterSafe guidance mentions using hot water bottles and starting from the tap, then working back along the pipe.",
          ],
        },
        {
          heading: "What to do if a pipe bursts",
          body: [
            "If water is pouring from a pipe, turn off the water using the stop tap if it is safe to do so.",
            "Opening taps can help drain the system. Towels and buckets may help reduce water damage while the issue is being dealt with.",
          ],
          list: [
            "Turn off water at the stop tap if safe",
            "Open taps to drain the system",
            "Use buckets or towels to limit damage",
            "Keep away from electrical danger",
            "Send clear details and photos if useful",
          ],
        },
        {
          heading: "Frozen condensate pipes",
          body: [
            "Modern boilers can have condensate pipes. In cold weather, these pipes can freeze and may cause boiler faults or heating and hot water issues.",
            "Gas work and gas boiler work must be handled by a Gas Safe registered engineer. If the issue is only an external frozen condensate pipe, follow official manufacturer or safety guidance and avoid unsafe methods.",
          ],
        },
      ]}
      faqs={[
        {
          q: "What should I do first if a pipe bursts?",
          a: "If safe, turn off the internal stop tap, open taps to drain the system and keep away from electrical danger.",
        },
        {
          q: "How can I reduce the risk of frozen pipes?",
          a: "Know where your stop tap is, fix dripping taps, insulate exposed pipework and keep the property warm enough during cold weather.",
        },
        {
          q: "Can I thaw frozen pipes with flame?",
          a: "No. Avoid direct flame or unsafe heat. Use safer gentle methods and seek help if unsure.",
        },
      ]}
      sources={[
        "WaterSafe Register guidance on preventing freezing and burst pipes",
        "WaterSafe Register guidance on stop taps and emergency water isolation",
        "WaterSafe Register guidance on frozen condensate pipes",
      ]}
    />
  );
}
