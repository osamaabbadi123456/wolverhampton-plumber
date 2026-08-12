export const siteUrl = "https://wolverhamptonplumber.co.uk";

export const whatsappNumber = "447405955956";

export const whatsappLink =
  "https://wa.me/447405955956?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Wolverhampton.";

export type IconName =
  | "alert"
  | "bath"
  | "boiler"
  | "backup"
  | "camera"
  | "check"
  | "clock"
  | "list"
  | "mapPin"
  | "message"
  | "drain"
  | "droplet"
  | "gauge"
  | "home"
  | "leak"
  | "pipe"
  | "radiator"
  | "shower"
  | "sink"
  | "smell"
  | "tap"
  | "toilet"
  | "valve"
  | "washer"
  | "water"
  | "waves"
  | "wrench";

export type Scenario = { title: string; text: string; icon: IconName };

export type ServicePage = {
  slug: string;
  href: string;
  label: string;
  icon: IconName;
  category: string;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  scenarios: Scenario[];
  steps: string[];
  tips: string[];
  good: string[];
  watch: string[];
  photoSlots: { title: string; text: string; image: string }[];
  faqs: { q: string; a: string }[];
};

export const services: ServicePage[] = [
  {
    slug: "emergency-plumber-wolverhampton",
    href: "/emergency-plumber-wolverhampton",
    label: "Emergency Plumber",
    icon: "alert",
    category: "Urgent plumbing",
    image: "emergency-plumbing-wolverhampton.jpg",
    badge: "Urgent plumbing enquiries",
    title: "Emergency plumbing enquiries",
    highlight: "in Wolverhampton",
    intro: "Use this page for urgent Wolverhampton plumbing enquiries where water is leaking, rising, spreading, backing up or becoming difficult to control.",
    metaTitle: "Emergency Plumber Wolverhampton | Urgent Plumbing Enquiry Support",
    metaDescription: "Emergency plumber Wolverhampton enquiry page for urgent leaks, burst pipe concerns, blocked toilets, blocked drains, stop tap issues and sudden water problems.",
    scenarios: [
      { title: "Water spreading", text: "Say where the water is coming from, which room is affected and whether it is still spreading.", icon: "droplet" },
      { title: "Toilet water rising", text: "Avoid repeat flushing and mention whether the toilet is the only one in the property.", icon: "toilet" },
      { title: "Drain backing up", text: "Say if sinks, baths, showers or outside drains are also affected.", icon: "drain" },
      { title: "Cannot isolate water", text: "Mention whether you know where the stop tap is and whether it turns safely.", icon: "valve" }
    ],
    steps: ["Protect people first and keep away from water near electrics.", "If safe, stop using the affected fixture and check whether water is still rising.", "Send your area, fixture, symptom, urgency and photos if useful.", "Wait for the enquiry to be reviewed and routed based on availability."],
    tips: ["Photos of the affected fixture are useful when safe.", "Mention whether the issue is getting worse or staying the same.", "Say if anyone has already tried plunging, tightening or turning off valves."],
    good: ["Clear urgency helps prioritise the enquiry.", "Photos can reduce back-and-forth questions.", "A structured message is easier to route."],
    watch: ["Hidden leaks can be difficult to assess from photos.", "Severe flooding may need immediate local emergency action.", "Response depends on timing and availability."],
    photoSlots: [
      { title: "Emergency Plumber close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "emergency-plumbing-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "emergency-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "emergency-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for emergency plumber enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for emergency plumber?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "blocked-drains-wolverhampton",
    href: "/blocked-drains-wolverhampton",
    label: "Blocked Drains",
    icon: "drain",
    category: "Drainage",
    image: "blocked-drains-wolverhampton.jpg",
    badge: "Drainage enquiry support",
    title: "Blocked drains, slow water",
    highlight: "and drain smells",
    intro: "For slow sinks, blocked showers, gurgling, bad drain smells, outside drain concerns or water backing up in Wolverhampton.",
    metaTitle: "Blocked Drains Wolverhampton | Slow Drain & Drain Smell Enquiries",
    metaDescription: "Blocked drains Wolverhampton enquiry page for slow sinks, shower drain smells, gurgling drains, outside drains and water backing up.",
    scenarios: [
      { title: "Slow water", text: "Say which fixture drains slowly and whether it clears eventually.", icon: "drain" },
      { title: "Bad smells", text: "Mention whether the smell comes from a sink, shower, toilet or outside drain.", icon: "smell" },
      { title: "Gurgling sounds", text: "Note whether gurgling happens after using another fixture.", icon: "waves" },
      { title: "Water backing up", text: "Say where water returns and whether more than one drain is affected.", icon: "backup" }
    ],
    steps: ["Identify the affected drain or fixture.", "Check whether other drains are also slow or noisy.", "Avoid adding harsh chemicals if you are unsure.", "Send clear details with the Wolverhampton area."],
    tips: ["The key detail is whether one fixture or several fixtures are affected.", "Outside drains, kitchen sinks and bathroom drains need different wording.", "Smell plus gurgling can be important to mention."],
    good: ["Symptom-based enquiries are easy to understand.", "Drain pages target strong local search intent.", "Useful for long-tail keywords around smells and backing up."],
    watch: ["The cause is not always visible from the surface.", "Shared drainage can complicate diagnosis.", "Repeated water use can worsen backing up."],
    photoSlots: [
      { title: "Blocked Drains close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "blocked-drains-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "blocked-drains-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "blocked-drains-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for blocked drains enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for blocked drains?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "blocked-toilet-wolverhampton",
    href: "/blocked-toilet-wolverhampton",
    label: "Blocked Toilet",
    icon: "toilet",
    category: "Toilet plumbing",
    image: "blocked-toilet-wolverhampton.jpg",
    badge: "Blocked toilet enquiries",
    title: "Blocked toilet help",
    highlight: "for Wolverhampton homes",
    intro: "Use this page when a toilet will not flush properly, water rises after flushing, the pan drains slowly or the toilet is close to overflowing.",
    metaTitle: "Blocked Toilet Wolverhampton | Toilet Water Rising Enquiries",
    metaDescription: "Blocked toilet Wolverhampton enquiry page for toilet water rising, toilet not draining, toilet backing up and bathroom drainage clues.",
    scenarios: [
      { title: "Water rises after flushing", text: "Do not keep flushing if the bowl is already high.", icon: "toilet" },
      { title: "Slow to clear", text: "Say how long the water takes to fall after flushing.", icon: "clock" },
      { title: "Only toilet affected", text: "Mention if sinks, baths and showers drain normally.", icon: "check" },
      { title: "Only toilet available", text: "Say if the property has no other usable toilet.", icon: "home" }
    ],
    steps: ["Stop repeat flushing if the bowl level is high.", "Check whether nearby sinks or showers are also slow.", "Mention any wipes, paper build-up or recent blockage signs.", "Send area, urgency and a safe photo if useful."],
    tips: ["Water rising after flushing is stronger wording than just \u201cblocked toilet\u201d.", "Mention whether the water level falls by itself.", "Say if the toilet is the only one in the property."],
    good: ["Clear symptom and urgency make the enquiry stronger.", "Useful page for high-intent searches.", "Easy to link with emergency and bathroom pages."],
    watch: ["Repeated flushing can overflow the pan.", "A blocked toilet may be linked to drainage outside.", "DIY attempts can make the situation messier."],
    photoSlots: [
      { title: "Blocked Toilet close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "blocked-toilet-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "blocked-toilet-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "blocked-toilet-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for blocked toilet enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for blocked toilet?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "leak-repair-wolverhampton",
    href: "/leak-repair-wolverhampton",
    label: "Leak Repair",
    icon: "leak",
    category: "Leak enquiries",
    image: "leak-repair-wolverhampton.jpg",
    badge: "Leak repair enquiries",
    title: "Leak repair enquiries",
    highlight: "in Wolverhampton",
    intro: "For visible leaks, drips becoming steady, water under sinks, ceiling marks, pipework leaks or water appearing in a room.",
    metaTitle: "Leak Repair Wolverhampton | Water Leak & Pipe Leak Enquiries",
    metaDescription: "Leak repair Wolverhampton enquiry page for under-sink leaks, pipe leaks, ceiling leaks below bathrooms, leaking valves and water spreading.",
    scenarios: [
      { title: "Water under sink", text: "Mention whether it happens when the tap runs or constantly.", icon: "sink" },
      { title: "Ceiling mark", text: "Say what room is above and whether water is spreading.", icon: "home" },
      { title: "Pipe drip", text: "Share where the pipe is visible and whether valves are nearby.", icon: "pipe" },
      { title: "Appliance connection", text: "Mention washing machine, dishwasher or waste pipe connections.", icon: "washer" }
    ],
    steps: ["Keep people away from slipping hazards.", "If safe, check whether the leak stops when a tap is off.", "Mention the room, fixture and whether water is spreading.", "Send photos showing the source and wider area."],
    tips: ["A close-up photo plus one wider photo is better than one blurry photo.", "Say whether the leak is constant or linked to using a tap/shower.", "Mention if you can isolate the water safely."],
    good: ["Photos help a lot with visible leaks.", "Leak pages convert well when the CTA is simple.", "Links naturally with ceiling, sink and bathroom articles."],
    watch: ["Hidden leaks may need inspection.", "Water near electrics needs caution.", "Old pipework may need more than a small repair."],
    photoSlots: [
      { title: "Leak Repair close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "leak-repair-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "leak-repair-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "leak-repair-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for leak repair enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for leak repair?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "tap-repair-wolverhampton",
    href: "/tap-repair-wolverhampton",
    label: "Tap Repair",
    icon: "tap",
    category: "Taps and fixtures",
    image: "tap-repair-wolverhampton.jpg",
    badge: "Tap and fitting enquiries",
    title: "Tap repair and fixture",
    highlight: "enquiries",
    intro: "For dripping taps, stiff handles, running taps, loose fixtures, basin taps, kitchen taps and water waste from fittings.",
    metaTitle: "Tap Repair Wolverhampton | Dripping Tap & Tap Leak Enquiries",
    metaDescription: "Tap repair Wolverhampton enquiry page for dripping taps, tap leaks at the base, stiff handles, mixer taps, bathroom taps, kitchen taps and outside taps.",
    scenarios: [
      { title: "Dripping tap", text: "Mention hot, cold or mixer tap and whether it is constant.", icon: "tap" },
      { title: "Tap will not turn off", text: "Say whether water is running heavily or lightly.", icon: "alert" },
      { title: "Loose fitting", text: "Mention whether the tap moves at the base.", icon: "wrench" },
      { title: "Low flow from one tap", text: "Say whether hot, cold or both are affected.", icon: "gauge" }
    ],
    steps: ["Identify kitchen, bathroom, basin, bath or outside tap.", "Say whether the issue is drip, leak, stiffness or low flow.", "Mention when it started and whether it is getting worse.", "Send a photo of the tap and surrounding area."],
    tips: ["\u201cHot side only\u201d or \u201ccold side only\u201d is useful wording.", "A drip at night can still waste water and become annoying.", "For mixer taps, mention whether the handle is stiff or loose."],
    good: ["Tap enquiries are easy to explain with photos.", "Good for simple service pages and long-tail articles.", "Can link with water pressure and bathroom pages."],
    watch: ["Parts may vary by tap type.", "Old fittings can be difficult to remove.", "A tap symptom can sometimes be pressure related."],
    photoSlots: [
      { title: "Tap Repair close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "tap-repair-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "tap-repair-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "tap-repair-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for tap repair enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for tap repair?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "kitchen-plumber-wolverhampton",
    href: "/kitchen-plumber-wolverhampton",
    label: "Kitchen Plumbing",
    icon: "sink",
    category: "Kitchen plumbing",
    image: "kitchen-plumbing-wolverhampton.jpg",
    badge: "Kitchen plumbing enquiries",
    title: "Kitchen plumbing",
    highlight: "for sinks, waste and appliances",
    intro: "For kitchen sink leaks, slow draining sinks, waste pipe problems, tap issues, dishwasher or washing machine plumbing connections.",
    metaTitle: "Kitchen Plumber Wolverhampton | Sink, Waste Pipe & Appliance Enquiries",
    metaDescription: "Kitchen plumber Wolverhampton enquiry page for kitchen sink leaks, waste pipe issues, dishwasher hoses, washing machine waste and under-sink pipework.",
    scenarios: [
      { title: "Sink drains slowly", text: "Say if water stands in the bowl or clears slowly.", icon: "sink" },
      { title: "Leak under sink", text: "Mention whether it happens when the tap or appliance runs.", icon: "leak" },
      { title: "Appliance waste issue", text: "Say washing machine or dishwasher if connected.", icon: "washer" },
      { title: "Tap or trap problem", text: "Send a photo under the sink if safe.", icon: "wrench" }
    ],
    steps: ["Identify whether the issue is sink, tap, trap, waste or appliance.", "Check if it happens during normal sink use or appliance use.", "Mention smells, gurgling, drips or backing up.", "Send under-sink photos if safe and clear."],
    tips: ["Under-sink photos are some of the most useful for kitchen enquiries.", "Mention dishwasher or washing machine connections early.", "Slow kitchen drainage is often searched separately from blocked drains."],
    good: ["Strong conversion because problems are easy to photograph.", "Supports several article topics.", "Good internal links to leaks and blocked drains."],
    watch: ["Cupboards can hide water damage.", "Waste pipe layout can be unclear in photos.", "Appliance connections may need careful wording."],
    photoSlots: [
      { title: "Kitchen Plumbing close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "kitchen-plumbing-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "kitchen-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "kitchen-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for kitchen plumbing enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for kitchen plumbing?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "bathroom-plumber-wolverhampton",
    href: "/bathroom-plumber-wolverhampton",
    label: "Bathroom Plumbing",
    icon: "bath",
    category: "Bathroom plumbing",
    image: "bathroom-plumbing-wolverhampton.jpg",
    badge: "Bathroom plumbing enquiries",
    title: "Bathroom plumbing",
    highlight: "for Wolverhampton homes",
    intro: "For toilets, basins, baths, showers, bathroom leaks, slow bathroom drainage, fixtures, taps and water appearing around bathroom fittings.",
    metaTitle: "Bathroom Plumber Wolverhampton | Toilet, Basin, Bath & Shower Enquiries",
    metaDescription: "Bathroom plumber Wolverhampton enquiry page for bathroom leaks, slow bath drains, basin issues, shower problems, toilet concerns and pressure symptoms.",
    scenarios: [
      { title: "Basin draining slowly", text: "Mention whether water clears slowly or sits in the basin.", icon: "sink" },
      { title: "Shower drain smells", text: "Say if smell appears after shower use or all day.", icon: "shower" },
      { title: "Water around toilet", text: "Mention whether it appears after flushing or constantly.", icon: "toilet" },
      { title: "Bath drainage issue", text: "Say if bath water drains slowly or backs up.", icon: "bath" }
    ],
    steps: ["Identify the exact fixture: toilet, basin, shower, bath or pipework.", "Mention leaks, smells, slow drainage or water pressure changes.", "Check whether other bathroom fixtures are affected.", "Send photos of the fixture and wider area."],
    tips: ["Bathroom enquiries rank better when each fixture has specific wording.", "Mention if the room below has ceiling marks.", "Smell, slow water and gurgling together are important details."],
    good: ["Covers many household plumbing issues.", "Great hub page for bathroom-related articles.", "Visual cards and photo slots work well here."],
    watch: ["Bathroom leaks can be hidden behind panels.", "Tiling or access can affect work time.", "Several fixtures may share the same waste route."],
    photoSlots: [
      { title: "Bathroom Plumbing close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "bathroom-plumbing-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "bathroom-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "bathroom-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for bathroom plumbing enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for bathroom plumbing?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "water-pressure-plumber-wolverhampton",
    href: "/water-pressure-plumber-wolverhampton",
    label: "Water Pressure",
    icon: "gauge",
    category: "Water pressure",
    image: "water-pressure-wolverhampton.jpg",
    badge: "Water pressure enquiries",
    title: "Water pressure issues",
    highlight: "in Wolverhampton",
    intro: "For low water pressure from one tap, poor shower pressure, sudden pressure drops, hot-only pressure concerns or whole-home flow problems.",
    metaTitle: "Water Pressure Plumber Wolverhampton | Low Pressure Enquiries",
    metaDescription: "Water pressure plumber Wolverhampton enquiry page for low water pressure, weak shower pressure, one tap pressure problems and hot or cold supply changes.",
    scenarios: [
      { title: "One tap affected", text: "Mention hot, cold or both and whether other taps are normal.", icon: "tap" },
      { title: "Shower pressure dropped", text: "Say if pressure changed suddenly or gradually.", icon: "shower" },
      { title: "Whole home affected", text: "Mention if every tap has weak flow.", icon: "home" },
      { title: "After recent work", text: "Say if anything changed before pressure dropped.", icon: "clock" }
    ],
    steps: ["Check whether one fixture or the whole home is affected.", "Mention hot water, cold water or both.", "Say if the change was sudden or gradual.", "Send fixture type and area with the enquiry."],
    tips: ["One-tap pressure issues should not be described as whole-house pressure.", "Hot-only low pressure can be different from cold-only.", "Mention recent work, leaks or valve changes."],
    good: ["Good for helpful advice content.", "Captures specific long-tail searches.", "Links well with tap and shower pages."],
    watch: ["Pressure symptoms can have several causes.", "Some checks require seeing the plumbing setup.", "Whole-home pressure may involve supply-side factors."],
    photoSlots: [
      { title: "Water Pressure close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "water-pressure-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "water-pressure-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "water-pressure-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for water pressure enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for water pressure?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "boiler-heating-plumber-wolverhampton",
    href: "/boiler-heating-plumber-wolverhampton",
    label: "Boiler & Heating",
    icon: "boiler",
    category: "Heating enquiries",
    image: "boiler-heating-wolverhampton.jpg",
    badge: "Boiler and heating enquiries",
    title: "Boiler and heating",
    highlight: "enquiry support",
    intro: "For heating-related plumbing enquiries such as radiators, boiler pressure loss, no hot water wording, heating pipework and safe enquiry routing.",
    metaTitle: "Boiler & Heating Wolverhampton | Clear Plumbing Enquiry Support",
    metaDescription: "Boiler and heating plumber Wolverhampton enquiry page for heating plumbing, radiator issues, boiler pressure wording and safe routing.",
    scenarios: [
      { title: "Boiler losing pressure", text: "Mention pressure dropping, how often and whether water appears anywhere.", icon: "gauge" },
      { title: "Radiators not heating", text: "Say whether all radiators or only one room is affected.", icon: "radiator" },
      { title: "No hot water", text: "Mention whether heating still works and when it started.", icon: "water" },
      { title: "Heating pipe leak", text: "Say where the leak appears and whether water is spreading.", icon: "pipe" }
    ],
    steps: ["Describe the heating symptom clearly, not just \u201cboiler issue\u201d.", "Mention pressure, radiators, hot water or visible leaks.", "Say whether the issue is sudden or recurring.", "Send photos of visible pipework or display if safe."],
    tips: ["Use accurate wording: pressure loss, radiator cold, no hot water, visible leak.", "Photos of boiler displays can be useful if safe.", "Gas work must only be handled by suitably registered engineers."],
    good: ["High-value enquiries when handled properly.", "Strong search value in many towns.", "Great for articles about pressure and radiators."],
    watch: ["Gas-related work needs proper registration.", "Not every heating symptom is a plumbing issue.", "Safety and compliance matter more than speed."],
    photoSlots: [
      { title: "Boiler & Heating close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "boiler-heating-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "boiler-heating-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "boiler-heating-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for boiler & heating enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for boiler & heating?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "shower-plumber-wolverhampton",
    href: "/shower-plumber-wolverhampton",
    label: "Shower Plumbing",
    icon: "shower",
    category: "Shower plumbing",
    image: "shower-plumbing-wolverhampton.jpg",
    badge: "Shower plumbing enquiries",
    title: "Shower plumbing",
    highlight: "and drainage problems",
    intro: "For shower leaks, weak shower pressure, shower drain smells, slow shower drainage and visible water around the shower area.",
    metaTitle: "Shower Plumbing Wolverhampton | Clear Plumbing Enquiry Support",
    metaDescription: "Shower plumber Wolverhampton enquiry page for shower leaks, low shower pressure, shower drain smells and slow shower drainage.",
    scenarios: [
      { title: "Weak shower pressure", text: "Mention whether other taps are normal.", icon: "shower" },
      { title: "Shower drain smell", text: "Say when the smell appears and whether water drains slowly.", icon: "smell" },
      { title: "Leak around shower", text: "Mention whether water appears during or after use.", icon: "leak" },
      { title: "Slow shower drain", text: "Say if water pools around your feet.", icon: "drain" }
    ],
    steps: ["Identify pressure, leak, smell or drainage as the main symptom.", "Check whether bathroom sink or bath drains are also affected.", "Mention when it happens: during showering, after use or all day.", "Send a safe photo of the shower area."],
    tips: ["\u201cWater appears after shower use\u201d is more useful than \u201cbathroom leak\u201d.", "Mention if there is staining on the ceiling below.", "Slow shower drainage and smell should be mentioned together."],
    good: ["Very visual problem category.", "Supports bathroom and blocked drain SEO.", "Easy to build good image sections."],
    watch: ["Leaks may be behind tiles or screens.", "Access can affect diagnosis.", "Pressure issues may not be caused by the shower itself."],
    photoSlots: [
      { title: "Shower Plumbing close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "shower-plumbing-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "shower-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "shower-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for shower plumbing enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for shower plumbing?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "sink-plumber-wolverhampton",
    href: "/sink-plumber-wolverhampton",
    label: "Sink Plumbing",
    icon: "sink",
    category: "Sink plumbing",
    image: "sink-plumbing-wolverhampton.jpg",
    badge: "Sink plumbing enquiries",
    title: "Sink plumbing",
    highlight: "for kitchens and bathrooms",
    intro: "For slow sinks, leaking traps, basin leaks, waste pipe issues, tap connections and water appearing inside cupboards.",
    metaTitle: "Sink Plumbing Wolverhampton | Clear Plumbing Enquiry Support",
    metaDescription: "Sink plumber Wolverhampton enquiry page for slow sinks, leaking traps, waste pipes, basin leaks and sink plumbing issues.",
    scenarios: [
      { title: "Water in cupboard", text: "Mention whether it appears when the tap runs.", icon: "leak" },
      { title: "Slow sink drain", text: "Say kitchen or bathroom and whether smell is present.", icon: "drain" },
      { title: "Leaking trap", text: "Send an under-sink photo if safe.", icon: "pipe" },
      { title: "Tap connection issue", text: "Say if hot, cold or both are affected.", icon: "tap" }
    ],
    steps: ["Say kitchen sink or bathroom basin first.", "Mention slow drainage, leak, smell or tap issue.", "Check whether the leak happens only when water runs.", "Send one close photo and one wider photo."],
    tips: ["Under-sink pipework photos are very useful.", "Mention cupboard water or damp marks early.", "Sink content links well with taps, kitchens and bathrooms."],
    good: ["Easy to understand and photograph.", "Targets common household searches.", "Good for both kitchen and bathroom pages."],
    watch: ["Leaks may travel along pipes before dripping.", "Cupboard boards can hide water spread.", "Older traps may need replacement rather than tightening."],
    photoSlots: [
      { title: "Sink Plumbing close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "sink-plumbing-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "sink-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "sink-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for sink plumbing enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for sink plumbing?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "pipe-repair-wolverhampton",
    href: "/pipe-repair-wolverhampton",
    label: "Pipe Repair",
    icon: "pipe",
    category: "Pipework",
    image: "pipe-repair-wolverhampton.jpg",
    badge: "Pipe repair enquiries",
    title: "Pipe repair and visible",
    highlight: "pipework leaks",
    intro: "For visible pipe leaks, pipework drips, suspected burst pipe concerns, joints leaking and pipework around kitchens, bathrooms or utility rooms.",
    metaTitle: "Pipe Repair Wolverhampton | Clear Plumbing Enquiry Support",
    metaDescription: "Pipe repair Wolverhampton enquiry page for visible pipe leaks, dripping joints, burst pipe concerns and pipework repair enquiries.",
    scenarios: [
      { title: "Visible pipe drip", text: "Show where the drip starts and lands.", icon: "pipe" },
      { title: "Joint leaking", text: "Mention whether it is constant or linked to water use.", icon: "wrench" },
      { title: "Burst concern", text: "Say if water flow is heavy or spreading.", icon: "alert" },
      { title: "Hidden route suspected", text: "Mention ceiling marks, wall damp or floor water.", icon: "home" }
    ],
    steps: ["Keep the area safe and avoid electrical risk.", "If safe, identify whether water can be isolated.", "Photograph the pipe from close and wide angles.", "Send room, urgency and whether water is spreading."],
    tips: ["Visible pipework is ideal for photos.", "Mention pipe material if obvious: copper, plastic or flexible hose.", "Say whether the leak is a drip, spray or running flow."],
    good: ["Strong emergency and repair relevance.", "Photos make enquiries clearer.", "Good for long-tail leak keywords."],
    watch: ["Pipework access can be difficult.", "Hidden leaks may need investigation.", "Temporary fixes are not always suitable."],
    photoSlots: [
      { title: "Pipe Repair close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "pipe-repair-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "pipe-repair-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "pipe-repair-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for pipe repair enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for pipe repair?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "radiator-plumber-wolverhampton",
    href: "/radiator-plumber-wolverhampton",
    label: "Radiator Plumbing",
    icon: "radiator",
    category: "Radiators",
    image: "radiator-plumbing-wolverhampton.jpg",
    badge: "Radiator plumbing enquiries",
    title: "Radiator plumbing",
    highlight: "and heating pipework",
    intro: "For radiator leaks, cold radiators, valve concerns, pipework drips around radiators and heating flow issues in Wolverhampton homes.",
    metaTitle: "Radiator Plumbing Wolverhampton | Clear Plumbing Enquiry Support",
    metaDescription: "Radiator plumber Wolverhampton enquiry page for radiator leaks, cold radiators, valve issues and heating pipework enquiries.",
    scenarios: [
      { title: "One radiator cold", text: "Mention whether other radiators heat normally.", icon: "radiator" },
      { title: "Radiator valve leaking", text: "Send a clear photo of the valve area.", icon: "valve" },
      { title: "Pipework drip", text: "Say if water appears near floor or wall.", icon: "pipe" },
      { title: "Heating balance concern", text: "Mention rooms affected and timing.", icon: "gauge" }
    ],
    steps: ["Say if one radiator or several are affected.", "Mention leak, cold spots, valve issue or noise.", "Check whether heating and hot water behave differently.", "Send photos of the radiator and valve area."],
    tips: ["One cold radiator is different from all radiators cold.", "Valve photos are more useful than a full room photo.", "Mention whether pressure drops after radiator issues."],
    good: ["Good companion page to boiler/heating.", "Covers many winter search terms.", "Works well with tips and checklists."],
    watch: ["Heating systems can be complex.", "Some work may need heating/gas qualifications.", "Old valves can be delicate."],
    photoSlots: [
      { title: "Radiator Plumbing close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "radiator-plumbing-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "radiator-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "radiator-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for radiator plumbing enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for radiator plumbing?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "washing-machine-plumbing-wolverhampton",
    href: "/washing-machine-plumbing-wolverhampton",
    label: "Washing Machine Plumbing",
    icon: "washer",
    category: "Appliance plumbing",
    image: "washing-machine-plumbing-wolverhampton.jpg",
    badge: "Appliance plumbing enquiries",
    title: "Washing machine plumbing",
    highlight: "and waste pipe issues",
    intro: "For washing machine leaks, waste pipe backing up, appliance connection concerns, dishwasher plumbing and kitchen appliance water issues.",
    metaTitle: "Washing Machine Plumbing Wolverhampton | Clear Plumbing Enquiry Support",
    metaDescription: "Washing machine plumbing Wolverhampton enquiry page for appliance leaks, waste pipe backing up and washing machine connection issues.",
    scenarios: [
      { title: "Water behind appliance", text: "Mention whether it appears during fill, drain or all the time.", icon: "washer" },
      { title: "Waste pipe backing up", text: "Say if water comes from the standpipe or sink waste.", icon: "backup" },
      { title: "Connection leak", text: "Send a photo if appliance can be safely moved.", icon: "leak" },
      { title: "Dishwasher also affected", text: "Mention if dishwasher shares the waste route.", icon: "sink" }
    ],
    steps: ["Say washing machine or dishwasher first.", "Mention fill, drain, waste pipe, leak or connection.", "Check if kitchen sink also drains slowly.", "Send photos only if moving the appliance is safe."],
    tips: ["\u201cLeaks while draining\u201d is an important phrase.", "Appliance waste issues often connect with kitchen sink drainage.", "Do not pull heavy appliances unsafely just for a photo."],
    good: ["Very specific long-tail page.", "Supports kitchen plumbing SEO.", "Useful for real customer enquiry wording."],
    watch: ["Access behind appliances can be tight.", "Electrical sockets may be nearby.", "Waste pipe layout may need inspection."],
    photoSlots: [
      { title: "Washing Machine Plumbing close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "washing-machine-plumbing-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "washing-machine-plumbing-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "washing-machine-plumbing-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for washing machine plumbing enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for washing machine plumbing?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "stop-tap-plumber-wolverhampton",
    href: "/stop-tap-plumber-wolverhampton",
    label: "Stop Tap Help",
    icon: "valve",
    category: "Stop taps",
    image: "stop-tap-plumber-wolverhampton.jpg",
    badge: "Stop tap enquiries",
    title: "Stop tap and isolation",
    highlight: "help in Wolverhampton",
    intro: "For stuck stop taps, unknown stop tap location, leaks near isolation valves, difficult-to-turn valves and water shut-off concerns.",
    metaTitle: "Stop Tap Help Wolverhampton | Clear Plumbing Enquiry Support",
    metaDescription: "Stop tap plumber Wolverhampton enquiry page for stuck stop taps, isolation valves, water shut-off concerns and leaks near valves.",
    scenarios: [
      { title: "Stop tap stuck", text: "Say whether it moves at all or feels seized.", icon: "valve" },
      { title: "Cannot find stop tap", text: "Mention property type and likely areas checked.", icon: "home" },
      { title: "Leak near valve", text: "Send photos of valve and surrounding pipework.", icon: "leak" },
      { title: "Need isolation advice", text: "Say what fixture or area needs isolating.", icon: "wrench" }
    ],
    steps: ["Do not force a valve if it feels like it may break.", "Mention where you have looked and what you found.", "Send a clear photo of the valve if visible.", "Explain the reason you need isolation."],
    tips: ["A stuck stop tap is worth explaining before an emergency happens.", "Photos of cupboards and pipework can help orientation.", "Mention whether the valve is inside, outside or under a sink."],
    good: ["Great preventative content.", "Strong internal link from emergency leak pages.", "Very practical for customer messages."],
    watch: ["Forcing old valves can worsen leaks.", "Some properties have more than one isolation point.", "External stop taps may involve utility responsibility."],
    photoSlots: [
      { title: "Stop Tap Help close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "stop-tap-plumber-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "stop-tap-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "stop-tap-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for stop tap help enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for stop tap help?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },
  {
    slug: "outside-tap-plumber-wolverhampton",
    href: "/outside-tap-plumber-wolverhampton",
    label: "Outside Tap",
    icon: "tap",
    category: "Outside taps",
    image: "outside-tap-plumber-wolverhampton.jpg",
    badge: "Outside tap enquiries",
    title: "Outside tap plumbing",
    highlight: "and garden water issues",
    intro: "For leaking outside taps, dripping garden taps, outdoor pipework, isolation concerns and external tap enquiries around Wolverhampton.",
    metaTitle: "Outside Tap Wolverhampton | Clear Plumbing Enquiry Support",
    metaDescription: "Outside tap plumber Wolverhampton enquiry page for leaking garden taps, outside tap repair, outdoor pipework and external tap enquiries.",
    scenarios: [
      { title: "Outside tap dripping", text: "Mention constant drip or only when used.", icon: "tap" },
      { title: "Pipework outside", text: "Say if the pipe is visible and insulated.", icon: "pipe" },
      { title: "Winter issue", text: "Mention frost, split pipe or sudden leak.", icon: "alert" },
      { title: "Need outdoor water point", text: "Send location and wall type if known.", icon: "home" }
    ],
    steps: ["Say repair, leak or new water point enquiry.", "Mention whether the tap can be isolated.", "Photograph the outside tap and inside connection if known.", "Send area and access details."],
    tips: ["Outdoor taps often need both outside and inside context.", "Mention frost damage or winter timing.", "A photo of the wall and tap helps a lot."],
    good: ["Adds service breadth.", "Good seasonal search topic.", "Useful local page for garden/outdoor water."],
    watch: ["Winter damage may be hidden.", "External pipework may need insulation.", "New installs need suitable internal connection points."],
    photoSlots: [
      { title: "Outside Tap close-up", text: "A clear close photo of the affected tap, pipe, drain, toilet, radiator or fitting.", image: "outside-tap-plumber-wolverhampton.jpg" },
      { title: "Wider room context", text: "A wider photo showing the surrounding area, floor, cupboard or wall where the issue appears.", image: "outside-tap-plumber-wolverhampton-wide.jpg" },
      { title: "Useful detail angle", text: "A second angle showing valves, waste pipe route, appliance connection or water path if safe.", image: "outside-tap-plumber-wolverhampton-detail.jpg" }
    ],
    faqs: [
      { q: "What details help for outside tap enquiries?", a: "Useful details include your Wolverhampton area, the fixture or room affected, when the problem started, whether water is leaking/rising/draining slowly, and a safe photo where helpful." },
      { q: "Should I send photos for outside tap?", a: "Yes, if it is safe. A close photo and one wider photo usually explain the issue better than a short message alone." },
      { q: "Can this page help if I am not sure of the exact cause?", a: "Yes. The aim is to describe the symptom clearly rather than guess the cause. The enquiry can then be reviewed with the right context." }
    ],
  },

];

export type AreaPage = { slug: string; href: string; name: string; postcode: string; nearby: string; image: string };

export const areas: AreaPage[] = [
  { slug: "wolverhampton", href: "/areas-covered", name: "Wolverhampton", postcode: "WV1 / WV2 / WV3", nearby: "City centre, Chapel Ash, Whitmore Reans, Parkfields", image: "area-wolverhampton-plumbing.jpg" },
  { slug: "bilston", href: "/plumber-bilston", name: "Bilston", postcode: "WV14", nearby: "Bilston town centre, Bradley, Ettingshall, Coseley", image: "area-bilston-plumbing.jpg" },
  { slug: "wednesfield", href: "/plumber-wednesfield", name: "Wednesfield", postcode: "WV11", nearby: "Wednesfield, Ashmore Park, New Cross area", image: "area-wednesfield-plumbing.jpg" },
  { slug: "tettenhall", href: "/plumber-tettenhall", name: "Tettenhall", postcode: "WV6", nearby: "Tettenhall, Tettenhall Wood, Compton edge", image: "area-tettenhall-plumbing.jpg" },
  { slug: "penn", href: "/plumber-penn", name: "Penn", postcode: "WV4", nearby: "Penn, Merry Hill, Goldthorn Park nearby", image: "area-penn-plumbing.jpg" },
  { slug: "bushbury", href: "/plumber-bushbury", name: "Bushbury", postcode: "WV10", nearby: "Bushbury, Oxley, Low Hill, Fordhouses nearby", image: "area-bushbury-plumbing.jpg" },
  { slug: "compton", href: "/plumber-compton", name: "Compton", postcode: "WV6", nearby: "Compton, Finchfield edge, Tettenhall nearby", image: "area-compton-plumbing.jpg" },
  { slug: "finchfield", href: "/plumber-finchfield", name: "Finchfield", postcode: "WV3", nearby: "Finchfield, Bradmore, Merry Hill nearby", image: "area-finchfield-plumbing.jpg" },
  { slug: "whitmore-reans", href: "/plumber-whitmore-reans", name: "Whitmore Reans", postcode: "WV1 / WV6", nearby: "Whitmore Reans, Chapel Ash, city edge", image: "area-whitmore-reans-plumbing.jpg" },
  { slug: "oxley", href: "/plumber-oxley", name: "Oxley", postcode: "WV10", nearby: "Oxley, Bushbury, Fordhouses nearby", image: "area-oxley-plumbing.jpg" },
  { slug: "merry-hill", href: "/plumber-merry-hill", name: "Merry Hill", postcode: "WV4", nearby: "Merry Hill, Penn, Goldthorn Park nearby", image: "area-merry-hill-plumbing.jpg" },
  { slug: "willenhall", href: "/plumber-willenhall", name: "Willenhall", postcode: "WV12 / WV13", nearby: "Willenhall and nearby Wolverhampton service areas", image: "area-willenhall-plumbing.jpg" },
  { slug: "sedgley", href: "/plumber-sedgley", name: "Sedgley", postcode: "DY3", nearby: "Sedgley and nearby Wolverhampton/Dudley edges", image: "area-sedgley-plumbing.jpg" },
  { slug: "codsall", href: "/plumber-codsall", name: "Codsall", postcode: "WV8", nearby: "Codsall, Bilbrook and nearby Wolverhampton edges", image: "area-codsall-plumbing.jpg" },
  { slug: "darlaston", href: "/plumber-darlaston", name: "Darlaston", postcode: "WS10", nearby: "Darlaston and nearby Walsall/Wolverhampton edges", image: "area-darlaston-plumbing.jpg" },

];

export type ArticlePage = { slug: string; href: string; title: string; highlight: string; serviceHref: string; image: string; description: string };

export const articles: ArticlePage[] = [
  { slug: "blocked-toilet-water-rising-wolverhampton", href: "/plumbing-advice/blocked-toilet-water-rising-wolverhampton", title: "Toilet Water Rising After Flushing in Wolverhampton", highlight: "What to check first", serviceHref: "/blocked-toilet-wolverhampton", image: "blocked-toilet-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: toilet water rising after flushing in wolverhampton \u2014 what to check first before sending a clear enquiry." },
  { slug: "kitchen-sink-draining-slowly-wolverhampton", href: "/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton", title: "Kitchen Sink Draining Slowly in Wolverhampton", highlight: "Practical checks before sending an enquiry", serviceHref: "/kitchen-plumber-wolverhampton", image: "kitchen-plumbing-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: kitchen sink draining slowly in wolverhampton \u2014 practical checks before sending an enquiry before sending a clear enquiry." },
  { slug: "low-water-pressure-one-tap-wolverhampton", href: "/plumbing-advice/low-water-pressure-one-tap-wolverhampton", title: "Low Water Pressure From One Tap in Wolverhampton", highlight: "What the first message should include", serviceHref: "/water-pressure-plumber-wolverhampton", image: "water-pressure-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: low water pressure from one tap in wolverhampton \u2014 what the first message should include before sending a clear enquiry." },
  { slug: "water-leaking-under-sink-wolverhampton", href: "/plumbing-advice/water-leaking-under-sink-wolverhampton", title: "Water Leaking Under a Sink in Wolverhampton", highlight: "Details and photos that help", serviceHref: "/leak-repair-wolverhampton", image: "leak-repair-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: water leaking under a sink in wolverhampton \u2014 details and photos that help before sending a clear enquiry." },
  { slug: "shower-drain-smells-wolverhampton", href: "/plumbing-advice/shower-drain-smells-wolverhampton", title: "Shower Drain Smells in Wolverhampton", highlight: "Smell, slow water and gurgling clues", serviceHref: "/blocked-drains-wolverhampton", image: "shower-plumbing-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: shower drain smells in wolverhampton \u2014 smell, slow water and gurgling clues before sending a clear enquiry." },
  { slug: "bathroom-sink-draining-slowly-wolverhampton", href: "/plumbing-advice/bathroom-sink-draining-slowly-wolverhampton", title: "Bathroom Sink Draining Slowly in Wolverhampton", highlight: "What to check before an enquiry", serviceHref: "/bathroom-plumber-wolverhampton", image: "sink-plumbing-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: bathroom sink draining slowly in wolverhampton \u2014 what to check before an enquiry before sending a clear enquiry." },
  { slug: "tap-dripping-at-night-wolverhampton", href: "/plumbing-advice/tap-dripping-at-night-wolverhampton", title: "Tap Dripping at Night in Wolverhampton", highlight: "What the pattern can mean", serviceHref: "/tap-repair-wolverhampton", image: "tap-repair-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: tap dripping at night in wolverhampton \u2014 what the pattern can mean before sending a clear enquiry." },
  { slug: "outside-drain-smells-wolverhampton", href: "/plumbing-advice/outside-drain-smells-wolverhampton", title: "Outside Drain Smells in Wolverhampton", highlight: "Useful signs to mention", serviceHref: "/blocked-drains-wolverhampton", image: "blocked-drains-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: outside drain smells in wolverhampton \u2014 useful signs to mention before sending a clear enquiry." },
  { slug: "bath-draining-slowly-wolverhampton", href: "/plumbing-advice/bath-draining-slowly-wolverhampton", title: "Bath Draining Slowly in Wolverhampton", highlight: "First checks and enquiry tips", serviceHref: "/bathroom-plumber-wolverhampton", image: "bathroom-plumbing-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: bath draining slowly in wolverhampton \u2014 first checks and enquiry tips before sending a clear enquiry." },
  { slug: "washing-machine-waste-pipe-backing-up-wolverhampton", href: "/plumbing-advice/washing-machine-waste-pipe-backing-up-wolverhampton", title: "Washing Machine Waste Pipe Backing Up in Wolverhampton", highlight: "What to include in your message", serviceHref: "/washing-machine-plumbing-wolverhampton", image: "washing-machine-plumbing-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: washing machine waste pipe backing up in wolverhampton \u2014 what to include in your message before sending a clear enquiry." },
  { slug: "water-around-toilet-base-wolverhampton", href: "/plumbing-advice/water-around-toilet-base-wolverhampton", title: "Water Around the Toilet Base in Wolverhampton", highlight: "Leak clues to photograph safely", serviceHref: "/leak-repair-wolverhampton", image: "blocked-toilet-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: water around the toilet base in wolverhampton \u2014 leak clues to photograph safely before sending a clear enquiry." },
  { slug: "shower-pressure-suddenly-dropped-wolverhampton", href: "/plumbing-advice/shower-pressure-suddenly-dropped-wolverhampton", title: "Shower Pressure Suddenly Dropped in Wolverhampton", highlight: "Hot, cold, one fixture or whole home?", serviceHref: "/water-pressure-plumber-wolverhampton", image: "shower-plumbing-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: shower pressure suddenly dropped in wolverhampton \u2014 hot, cold, one fixture or whole home? before sending a clear enquiry." },
  { slug: "ceiling-leak-below-bathroom-wolverhampton", href: "/plumbing-advice/ceiling-leak-below-bathroom-wolverhampton", title: "Ceiling Leak Below Bathroom in Wolverhampton", highlight: "What to do and what to mention", serviceHref: "/leak-repair-wolverhampton", image: "leak-repair-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: ceiling leak below bathroom in wolverhampton \u2014 what to do and what to mention before sending a clear enquiry." },
  { slug: "boiler-losing-pressure-wolverhampton", href: "/plumbing-advice/boiler-losing-pressure-wolverhampton", title: "Boiler Losing Pressure in Wolverhampton", highlight: "Safe wording for a heating enquiry", serviceHref: "/boiler-heating-plumber-wolverhampton", image: "boiler-heating-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice: boiler losing pressure in wolverhampton \u2014 safe wording for a heating enquiry before sending a clear enquiry." },
  { slug: "details-to-send-before-plumbing-enquiry-wolverhampton", href: "/plumbing-advice/details-to-send-before-plumbing-enquiry-wolverhampton", title: "7 Details to Send Before a Plumbing Enquiry in Wolverhampton", highlight: "A clear message checklist", serviceHref: "/contact", image: "wolverhampton-plumbing-hero.jpg", description: "Practical Wolverhampton plumbing advice: 7 details to send before a plumbing enquiry in wolverhampton \u2014 a clear message checklist before sending a clear enquiry." },

  { slug: "internal-stop-tap-leaking-wolverhampton", href: "/plumbing-advice/internal-stop-tap-leaking-wolverhampton", title: "Internal Stop Tap Leaking in Wolverhampton", highlight: "What to mention and photograph safely", serviceHref: "/leak-repair-wolverhampton", image: "stop-tap-plumber-wolverhampton.jpg", description: "Practical Wolverhampton plumbing advice for an internal stop tap leaking, stiff valves, visible drips and the details to include before sending an enquiry." },
  { slug: "how-to-prevent-frozen-and-burst-pipes-wolverhampton", href: "/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton", title: "How to Prevent Frozen and Burst Pipes in Wolverhampton", highlight: "Cold-weather pipe tips and enquiry wording", serviceHref: "/pipe-repair-wolverhampton", image: "pipe-repair-wolverhampton.jpg", description: "Practical Wolverhampton advice for reducing frozen and burst pipe risk, recognising early warning signs and sending useful details if a pipe problem appears." },
  { slug: "what-to-do-if-you-smell-gas-wolverhampton", href: "/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton", title: "What to Do if You Smell Gas in Wolverhampton", highlight: "Safety-first wording for urgent concerns", serviceHref: "/boiler-heating-plumber-wolverhampton", image: "boiler-heating-wolverhampton.jpg", description: "Safety-first Wolverhampton advice for gas smell concerns, what details are useful, and why urgent gas concerns should be handled through the correct emergency route." },

];

export const featuredServices = services.slice(0, 9);
export const extraServices = services.slice(9);

export function getService(slug: string): ServicePage {
  const page = services.find((item) => item.slug === slug);
  if (!page) throw new Error(`Unknown service page: ${slug}`);
  return page;
}

export function getArea(slug: string): AreaPage {
  const page = areas.find((item) => item.slug === slug);
  if (!page) throw new Error(`Unknown area page: ${slug}`);
  return page;
}

export function getArticle(slug: string): ArticlePage {
  const page = articles.find((item) => item.slug === slug);
  if (!page) throw new Error(`Unknown article page: ${slug}`);
  return page;
}

export const coreAreaNames = [
  "Wolverhampton",
  "Bilston",
  "Wednesfield",
  "Tettenhall",
  "Penn",
  "Bushbury",
  "Compton",
  "Finchfield",
  "Whitmore Reans",
  "Oxley",
  "Merry Hill",
  "Willenhall",
];



