import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";
import { AreaPage, areas, services, whatsappLink, siteUrl } from "../_data/siteContent";
import { ServiceIcon } from "./ServiceIcon";
import { MotionReveal } from "./MotionReveal";

type AreaDetail = {
  intro: string;
  propertyNotes: string[];
  examples: string[];
  serviceSlugs: string[];
  nearbySlugs: string[];
  photoCards: { title: string; text: string; icon: "home" | "sink" | "bath" | "leak" | "drain" | "toilet" }[];
};

const areaDetails: Record<string, AreaDetail> = {
  wolverhampton: {
    intro: "For city-wide Wolverhampton enquiries, start with the closest WV area, then narrow the issue by room and fixture. This helps separate a general plumbing message from a clearer service request.",
    propertyNotes: ["City-centre flats and terraced homes often need the exact room and floor level included.", "Older pipework, shared access and small cupboards can make photos especially useful.", "Mention nearby Wolverhampton area names when the postcode alone is not enough."],
    examples: ["Wolverhampton city centre leak under kitchen sink.", "WV1 toilet water rising after flushing.", "Wolverhampton flat low water pressure from bathroom tap."],
    serviceSlugs: ["emergency-plumber-wolverhampton", "leak-repair-wolverhampton", "blocked-toilet-wolverhampton", "blocked-drains-wolverhampton", "tap-repair-wolverhampton", "kitchen-plumber-wolverhampton", "bathroom-plumber-wolverhampton", "water-pressure-plumber-wolverhampton"],
    nearbySlugs: ["whitmore-reans", "bilston", "wednesfield", "tettenhall", "penn", "bushbury"],
    photoCards: [
      { title: "City property context", text: "A wider room photo can help explain access, flooring and where water is appearing.", icon: "home" },
      { title: "Kitchen and utility details", text: "Under-sink pipework, appliance waste and valve photos are useful for many Wolverhampton enquiries.", icon: "sink" },
      { title: "Bathroom symptoms", text: "A photo of the affected toilet, basin, shower or bath helps separate leak, drain and pressure issues.", icon: "bath" },
    ],
  },
  bilston: {
    intro: "Bilston enquiries are clearer when the message starts with WV14 or the nearest Bilston area, then gives the fixture and visible symptom. This is useful for terrace homes, family houses and shop-front style properties where access can vary.",
    propertyNotes: ["Say if the issue is inside the property, rear kitchen, bathroom, yard or outside drain.", "For WV14, mention whether more than one fixture is affected before calling it a drain problem.", "Photos under sinks and around toilets can make Bilston leak enquiries easier to understand."],
    examples: ["Bilston kitchen sink slow and gurgling.", "WV14 leak under bathroom basin.", "Bilston toilet water rising and only toilet available."],
    serviceSlugs: ["blocked-drains-wolverhampton", "blocked-toilet-wolverhampton", "leak-repair-wolverhampton", "kitchen-plumber-wolverhampton", "sink-plumber-wolverhampton", "tap-repair-wolverhampton", "pipe-repair-wolverhampton", "washing-machine-plumbing-wolverhampton"],
    nearbySlugs: ["wolverhampton", "penn", "merry-hill", "darlaston", "sedgley", "wednesfield"],
    photoCards: [
      { title: "WV14 kitchen issue", text: "Show the sink, waste route or appliance connection if that is where water appears.", icon: "sink" },
      { title: "Toilet or basin problem", text: "A wider bathroom photo helps explain fixture position and visible water.", icon: "toilet" },
      { title: "Outside drain context", text: "If safe, show the outside gully or drain area plus where water backs up inside.", icon: "drain" },
    ],
  },
  wednesfield: {
    intro: "Wednesfield plumbing enquiries work best when the message includes WV11, the closest area, and whether the issue is isolated to one room or affecting several fixtures.",
    propertyNotes: ["Mention kitchen sink, bathroom, toilet, shower or outside drain before describing the urgency.", "If the issue is near New Cross or Ashmore Park areas, add that detail naturally.", "Say whether the problem is sudden or has slowly become worse."],
    examples: ["Wednesfield blocked drain smell from shower.", "WV11 kitchen tap will not turn off.", "Wednesfield bathroom leak appearing on floor."],
    serviceSlugs: ["emergency-plumber-wolverhampton", "blocked-drains-wolverhampton", "tap-repair-wolverhampton", "bathroom-plumber-wolverhampton", "shower-plumber-wolverhampton", "water-pressure-plumber-wolverhampton", "leak-repair-wolverhampton", "outside-tap-plumber-wolverhampton"],
    nearbySlugs: ["bushbury", "oxley", "willenhall", "wolverhampton", "bilston", "darlaston"],
    photoCards: [
      { title: "Bathroom or shower clue", text: "Show the drain, tray, basin or toilet area where the symptom appears.", icon: "bath" },
      { title: "Tap and pressure issue", text: "Show the affected tap or shower head and mention hot, cold or both.", icon: "sink" },
      { title: "Leak spread", text: "A wider image of floor or cupboard water helps explain urgency.", icon: "leak" },
    ],
  },
  tettenhall: {
    intro: "Tettenhall enquiries should mention WV6, whether the property is nearer Tettenhall village, Tettenhall Wood or Compton edge, and the exact fixture involved.",
    propertyNotes: ["For larger homes, say which floor and which bathroom or kitchen area is affected.", "A wider photo is useful when pipework is boxed in or the fixture is built into furniture.", "Mention if a leak is near finished floors, ceilings or fitted units."],
    examples: ["Tettenhall bathroom sink draining slowly.", "WV6 ceiling mark below bathroom.", "Tettenhall tap dripping at night in ensuite."],
    serviceSlugs: ["bathroom-plumber-wolverhampton", "leak-repair-wolverhampton", "tap-repair-wolverhampton", "water-pressure-plumber-wolverhampton", "boiler-heating-plumber-wolverhampton", "radiator-plumber-wolverhampton", "sink-plumber-wolverhampton", "shower-plumber-wolverhampton"],
    nearbySlugs: ["compton", "finchfield", "penn", "whitmore-reans", "wolverhampton", "codsall"],
    photoCards: [
      { title: "Bathroom fixture detail", text: "A photo of the basin, bath, shower or toilet gives useful context for WV6 enquiries.", icon: "bath" },
      { title: "Visible leak path", text: "Show where water starts and where it appears on floor, ceiling or wall.", icon: "leak" },
      { title: "Tap or pressure symptom", text: "Mention the exact tap or shower and whether hot or cold is affected.", icon: "sink" },
    ],
  },
  penn: {
    intro: "Penn enquiries are clearer when the message includes WV4, the room affected and whether the problem is a leak, blockage, tap issue or pressure concern.",
    propertyNotes: ["Say if the issue is in a bathroom, kitchen, utility room or outside tap area.", "For leaks, mention whether water is spreading or sitting under a unit.", "For pressure changes, say whether one fixture or the whole home is affected."],
    examples: ["Penn leak under kitchen unit.", "WV4 low pressure from one bathroom tap.", "Penn bath draining slowly with gurgling."],
    serviceSlugs: ["leak-repair-wolverhampton", "water-pressure-plumber-wolverhampton", "bathroom-plumber-wolverhampton", "kitchen-plumber-wolverhampton", "tap-repair-wolverhampton", "blocked-drains-wolverhampton", "outside-tap-plumber-wolverhampton", "stop-tap-plumber-wolverhampton"],
    nearbySlugs: ["merry-hill", "finchfield", "tettenhall", "bilston", "sedgley", "wolverhampton"],
    photoCards: [
      { title: "Kitchen cupboard water", text: "Under-sink and surrounding floor photos are useful for Penn leak enquiries.", icon: "sink" },
      { title: "Bathroom drainage clue", text: "Show the bath, basin or shower drain if water clears slowly.", icon: "bath" },
      { title: "Pressure symptom", text: "Show the exact affected fixture and state hot, cold or both.", icon: "home" },
    ],
  },
  bushbury: {
    intro: "Bushbury enquiries should include WV10 or the nearest area, then explain whether the issue is internal plumbing, toilet, drain, leak or appliance related.",
    propertyNotes: ["Mention if the problem is near an outside drain, kitchen waste or utility appliance.", "For toilet issues, say whether sinks and baths are also slow.", "If water is spreading, say whether it is on floor, wall, ceiling or cupboard base."],
    examples: ["Bushbury washing machine waste pipe backing up.", "WV10 blocked toilet and bath slow too.", "Bushbury pipe dripping under sink."],
    serviceSlugs: ["washing-machine-plumbing-wolverhampton", "blocked-toilet-wolverhampton", "blocked-drains-wolverhampton", "pipe-repair-wolverhampton", "leak-repair-wolverhampton", "kitchen-plumber-wolverhampton", "sink-plumber-wolverhampton", "emergency-plumber-wolverhampton"],
    nearbySlugs: ["oxley", "wednesfield", "wolverhampton", "willenhall", "codsall", "bilston"],
    photoCards: [
      { title: "Utility or appliance issue", text: "Show appliance waste, hose area or nearby sink if safe.", icon: "sink" },
      { title: "Toilet and drain link", text: "A wider bathroom photo plus note of other slow drains helps routing.", icon: "toilet" },
      { title: "Pipework close-up", text: "A clear photo of the leaking joint or visible pipe reduces guesswork.", icon: "leak" },
    ],
  },
  compton: {
    intro: "Compton enquiries are strongest when WV6, the closest nearby area and the exact plumbing symptom are included before photos.",
    propertyNotes: ["Mention whether the issue is in a kitchen extension, bathroom, ensuite or utility area.", "For leaks, add whether the water is visible, hidden behind units or showing below a bathroom.", "For pressure issues, explain whether one tap or more than one room is affected."],
    examples: ["Compton ensuite tap dripping at night.", "WV6 shower pressure suddenly dropped.", "Compton ceiling leak below bathroom."],
    serviceSlugs: ["tap-repair-wolverhampton", "shower-plumber-wolverhampton", "leak-repair-wolverhampton", "water-pressure-plumber-wolverhampton", "bathroom-plumber-wolverhampton", "radiator-plumber-wolverhampton", "boiler-heating-plumber-wolverhampton", "sink-plumber-wolverhampton"],
    nearbySlugs: ["tettenhall", "finchfield", "penn", "codsall", "merry-hill", "wolverhampton"],
    photoCards: [
      { title: "Fixture and room context", text: "Show the affected fixture and surrounding room so access is clear.", icon: "home" },
      { title: "Shower or tap symptom", text: "A close photo plus hot/cold detail helps with pressure or drip messages.", icon: "bath" },
      { title: "Ceiling or wall mark", text: "Show the mark and mention what room is directly above if known.", icon: "leak" },
    ],
  },
  finchfield: {
    intro: "Finchfield enquiries should mention WV3 and whether the issue is closer to Finchfield, Bradmore or Merry Hill, then give the fixture and symptom.",
    propertyNotes: ["Bathroom and kitchen details are especially useful when there are multiple fixtures nearby.", "For leaks, say if water appears after using a shower, bath, basin or kitchen sink.", "For drainage, mention slow water, smell and gurgling separately."],
    examples: ["Finchfield shower drain smells after use.", "WV3 water under sink when tap runs.", "Finchfield bath draining slowly."],
    serviceSlugs: ["bathroom-plumber-wolverhampton", "shower-plumber-wolverhampton", "sink-plumber-wolverhampton", "leak-repair-wolverhampton", "blocked-drains-wolverhampton", "tap-repair-wolverhampton", "water-pressure-plumber-wolverhampton", "kitchen-plumber-wolverhampton"],
    nearbySlugs: ["penn", "merry-hill", "compton", "tettenhall", "whitmore-reans", "wolverhampton"],
    photoCards: [
      { title: "Bathroom drain clue", text: "Show the shower, bath or basin drain and whether water is sitting there.", icon: "bath" },
      { title: "Sink leak context", text: "One close and one wide photo can show how the pipework sits in the unit.", icon: "sink" },
      { title: "Smell or gurgling symptom", text: "Mention the fixture and when the smell or noise appears.", icon: "drain" },
    ],
  },
  "whitmore-reans": {
    intro: "Whitmore Reans enquiries are clearer when the message mentions city-edge location, the building type if useful, and whether the issue affects one flat/room or more than one fixture.",
    propertyNotes: ["For flats or shared buildings, state the floor or room affected without guessing the wider system.", "Small bathrooms and kitchens benefit from one wider photo and one close-up.", "Mention if water is entering a neighbour, hallway or shared space."],
    examples: ["Whitmore Reans leak under bathroom basin.", "WV1 toilet water rising in flat.", "Whitmore Reans kitchen sink draining slowly."],
    serviceSlugs: ["emergency-plumber-wolverhampton", "leak-repair-wolverhampton", "blocked-toilet-wolverhampton", "kitchen-plumber-wolverhampton", "sink-plumber-wolverhampton", "bathroom-plumber-wolverhampton", "tap-repair-wolverhampton", "blocked-drains-wolverhampton"],
    nearbySlugs: ["wolverhampton", "tettenhall", "finchfield", "compton", "penn", "bushbury"],
    photoCards: [
      { title: "Flat or shared-building context", text: "Show the room and affected fixture clearly without unsafe access.", icon: "home" },
      { title: "Small bathroom issue", text: "A wider bathroom angle can make a toilet, basin or shower issue clearer.", icon: "bath" },
      { title: "Kitchen leak or drainage", text: "Under-sink photos help if the problem is inside a cupboard.", icon: "sink" },
    ],
  },
  oxley: {
    intro: "Oxley enquiries should include WV10, the closest nearby area, and whether the issue is inside, outside, bathroom, kitchen or appliance related.",
    propertyNotes: ["Mention outside drains, kitchen waste or utility appliances separately when relevant.", "For leaks, say if the water is visible at pipework or only appearing on floors/walls.", "For pressure issues, say if showers, taps or the whole home are affected."],
    examples: ["Oxley outside tap leaking after winter.", "WV10 kitchen waste backing up.", "Oxley shower pressure suddenly dropped."],
    serviceSlugs: ["outside-tap-plumber-wolverhampton", "kitchen-plumber-wolverhampton", "washing-machine-plumbing-wolverhampton", "water-pressure-plumber-wolverhampton", "blocked-drains-wolverhampton", "leak-repair-wolverhampton", "pipe-repair-wolverhampton", "bathroom-plumber-wolverhampton"],
    nearbySlugs: ["bushbury", "codsall", "wolverhampton", "wednesfield", "willenhall", "tettenhall"],
    photoCards: [
      { title: "Outside or utility context", text: "Show the tap, pipe or appliance area and whether water is spreading.", icon: "home" },
      { title: "Kitchen waste route", text: "Under-sink and appliance waste photos are useful if safe.", icon: "sink" },
      { title: "Pressure or shower issue", text: "Name the fixture and say whether hot, cold or both changed.", icon: "bath" },
    ],
  },
  "merry-hill": {
    intro: "Merry Hill enquiries work best when WV4 and the exact plumbing symptom come first, especially for bathroom, kitchen and leak-related messages.",
    propertyNotes: ["Mention whether water appears after using a bath, shower, basin, sink or appliance.", "For low pressure, say if one room or the whole home is affected.", "For leaks, one wider room photo helps show where the water is travelling."],
    examples: ["Merry Hill ceiling leak below bathroom.", "WV4 low water pressure from kitchen tap.", "Merry Hill bath draining slowly."],
    serviceSlugs: ["leak-repair-wolverhampton", "bathroom-plumber-wolverhampton", "water-pressure-plumber-wolverhampton", "tap-repair-wolverhampton", "blocked-drains-wolverhampton", "sink-plumber-wolverhampton", "shower-plumber-wolverhampton", "kitchen-plumber-wolverhampton"],
    nearbySlugs: ["penn", "finchfield", "sedgley", "bilston", "compton", "wolverhampton"],
    photoCards: [
      { title: "Ceiling or bathroom leak", text: "Show the ceiling mark and the bathroom fixture above if known.", icon: "leak" },
      { title: "Kitchen or tap pressure", text: "A close photo of the exact tap helps distinguish tap and pressure issues.", icon: "sink" },
      { title: "Bath or shower drainage", text: "Show the drain area and describe whether water sits or clears slowly.", icon: "bath" },
    ],
  },
  willenhall: {
    intro: "Willenhall enquiries should include WV12/WV13 where relevant and focus on the room, fixture and visible symptom rather than a broad ‘need a plumber’ message.",
    propertyNotes: ["For drains, say whether the toilet, sink, shower or outside drain is affected.", "For kitchen appliance issues, mention washing machine or dishwasher early.", "For leaks, say if water is under a unit, on a floor or near pipework."],
    examples: ["Willenhall blocked toilet and sink slow.", "WV13 washing machine waste backing up.", "Willenhall leak at visible pipe joint."],
    serviceSlugs: ["blocked-toilet-wolverhampton", "blocked-drains-wolverhampton", "washing-machine-plumbing-wolverhampton", "pipe-repair-wolverhampton", "leak-repair-wolverhampton", "kitchen-plumber-wolverhampton", "tap-repair-wolverhampton", "emergency-plumber-wolverhampton"],
    nearbySlugs: ["wednesfield", "darlaston", "bushbury", "oxley", "bilston", "wolverhampton"],
    photoCards: [
      { title: "Toilet or drain symptom", text: "Show the affected fixture and mention if other drains are slow too.", icon: "toilet" },
      { title: "Appliance waste issue", text: "If safe, show the standpipe, hose or under-sink waste route.", icon: "sink" },
      { title: "Visible pipe leak", text: "A clear close-up helps explain joint, valve or pipe issues.", icon: "leak" },
    ],
  },
  sedgley: {
    intro: "Sedgley enquiries should mention DY3 or nearby Wolverhampton/Dudley edge wording, then describe whether the issue is leak, drain, tap, bathroom or heating related.",
    propertyNotes: ["For bathroom leaks, say if water appears below the bathroom or around fixtures.", "For outside taps or winter leaks, mention timing and visible pipework.", "For heating and radiators, state whether one room or several rooms are affected."],
    examples: ["Sedgley radiator valve leaking.", "DY3 outside tap dripping after cold weather.", "Sedgley bathroom sink slow and smelling."],
    serviceSlugs: ["radiator-plumber-wolverhampton", "outside-tap-plumber-wolverhampton", "bathroom-plumber-wolverhampton", "blocked-drains-wolverhampton", "leak-repair-wolverhampton", "tap-repair-wolverhampton", "boiler-heating-plumber-wolverhampton", "sink-plumber-wolverhampton"],
    nearbySlugs: ["merry-hill", "penn", "bilston", "darlaston", "wolverhampton", "finchfield"],
    photoCards: [
      { title: "Radiator or valve photo", text: "Show the valve, pipe route and any visible water near the floor.", icon: "leak" },
      { title: "Outside tap context", text: "Show the wall, tap and any visible external pipework.", icon: "home" },
      { title: "Bathroom drain or basin", text: "Show the fixture and describe smell, slow water or leak separately.", icon: "bath" },
    ],
  },
  codsall: {
    intro: "Codsall enquiries should mention WV8 and whether the issue is inside the home, outside tap, heating, radiator or bathroom/kitchen plumbing.",
    propertyNotes: ["For larger homes, say which room and floor are affected.", "For outside plumbing, photos of the wall, pipe route and tap area can help.", "For boiler/radiator wording, mention pressure changes or visible leaks only where safe."],
    examples: ["Codsall outside tap leaking.", "WV8 radiator cold in one room.", "Codsall kitchen sink slow after washing machine drains."],
    serviceSlugs: ["outside-tap-plumber-wolverhampton", "radiator-plumber-wolverhampton", "boiler-heating-plumber-wolverhampton", "kitchen-plumber-wolverhampton", "washing-machine-plumbing-wolverhampton", "water-pressure-plumber-wolverhampton", "leak-repair-wolverhampton", "tap-repair-wolverhampton"],
    nearbySlugs: ["oxley", "bushbury", "tettenhall", "compton", "wolverhampton", "finchfield"],
    photoCards: [
      { title: "Outside tap or pipework", text: "A wide wall photo plus close-up helps explain outdoor plumbing.", icon: "home" },
      { title: "Heating or radiator issue", text: "Show the radiator valve, pressure gauge or visible leak only if safe.", icon: "leak" },
      { title: "Kitchen appliance waste", text: "Show the sink waste and appliance connection if accessible.", icon: "sink" },
    ],
  },
  darlaston: {
    intro: "Darlaston enquiries should mention WS10 where relevant and describe whether the issue is a blocked toilet, drain, kitchen leak, pipe repair or tap problem.",
    propertyNotes: ["For drainage, mention if the issue affects more than one fixture.", "For pipe leaks, say whether it is a drip, spray or steady flow.", "For kitchen issues, mention sink, waste, appliance or tap separately."],
    examples: ["Darlaston blocked drain and toilet slow.", "WS10 pipe spraying under sink.", "Darlaston kitchen tap leaking at base."],
    serviceSlugs: ["blocked-drains-wolverhampton", "blocked-toilet-wolverhampton", "pipe-repair-wolverhampton", "leak-repair-wolverhampton", "tap-repair-wolverhampton", "kitchen-plumber-wolverhampton", "sink-plumber-wolverhampton", "emergency-plumber-wolverhampton"],
    nearbySlugs: ["willenhall", "bilston", "wednesfield", "sedgley", "wolverhampton", "bushbury"],
    photoCards: [
      { title: "Drain or toilet problem", text: "Show the fixture and mention whether other drains are affected too.", icon: "drain" },
      { title: "Pipe leak close-up", text: "Show the joint, valve or pipe area without getting too close to water.", icon: "leak" },
      { title: "Kitchen tap or sink issue", text: "Photos of the tap base and under-sink area help explain the issue.", icon: "sink" },
    ],
  },
};

function detailFor(area: AreaPage): AreaDetail {
  return areaDetails[area.slug] || areaDetails.wolverhampton;
}

function pickServices(slugs: string[]) {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean) as typeof services;
}

function pickAreas(slugs: string[]) {
  return slugs
    .map((slug) => areas.find((area) => area.slug === slug))
    .filter(Boolean) as typeof areas;
}

function locationImage(area: AreaPage) {
  if (area.slug === "wolverhampton") return "location-wolverhampton-city-centre.jpg";
  return `location-${area.slug}.jpg`;
}

export default function AreaLandingPage({ area }: { area: AreaPage }) {
  const detail = detailFor(area);
  const chosenServices = pickServices(detail.serviceSlugs);
  const nearbyAreas = pickAreas(detail.nearbySlugs);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Plumber ${area.name}`,
    url: `${siteUrl}${area.href}`,
    about: `Plumbing enquiry support for ${area.name} and nearby areas.`,
    inLanguage: "en-GB",
  };

  const steps = [
    `Start with ${area.name} or the closest ${area.postcode} postcode area.`,
    "Name the exact fixture: kitchen sink, toilet, shower, basin, radiator, pipework or outside tap.",
    "Describe what is visibly happening: leaking, rising, draining slowly, backing up, dripping, spraying or low pressure.",
    "Add urgency and a safe close photo plus a wider photo if it helps explain access.",
  ];

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className={styles.page}>
        <section
          className={styles.v14AreaHero}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(3, 20, 39, .88), rgba(3, 20, 39, .52), rgba(3, 20, 39, .08)), url('/images/real/${locationImage(area)}'), url('/images/real/${area.image}')`,
          }}
        >
          <div className={styles.container}>
            <div className={styles.v14HeroText}>
              <div className={styles.badge}>Area plumbing enquiries</div>
              <h1>Plumber enquiries in <span>{area.name}</span></h1>
              <p>{detail.intro}</p>
              <div className={styles.v14HeroFacts}>
                <span>{area.postcode}</span>
                <span>{area.nearby}</span>
                <span>Local fixture and symptom wording</span>
              </div>
              <div className={styles.heroActions}>
                <a href={whatsappLink} className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a>
                <Link href="/areas-covered" className={styles.secondaryBtn}>See nearby areas</Link>
              </div>
            </div>
          </div>
        </section>

        <MotionReveal className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.v14LocalSplit}>
              <div>
                <div className={styles.badge}>Local context</div>
                <h2>Useful details for <span>{area.name} enquiries.</span></h2>
                <p>
                  The best first message is not just “I need a plumber”. It names the room,
                  the fixture and the visible symptom so the enquiry can be understood quickly.
                </p>
              </div>
              <div className={styles.v14InfoList}>
                {detail.propertyNotes.map((note, index) => (
                  <article className={styles.v14InfoRow} key={note}>
                    <div className={styles.v4Icon}>
                      <ServiceIcon name={index === 0 ? "home" : index === 1 ? "check" : "water"} />
                    </div>
                    <p>{note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.v4SplitGrid}>
              <div>
                <div className={styles.badge}>Clear first message</div>
                <h2>How to describe the issue <span>without guessing.</span></h2>
                <div className={styles.v4Steps}>
                  {steps.map((step, index) => (
                    <div className={styles.v4Step} key={step}>
                      <strong>{index + 1}</strong>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <aside className={styles.v4TipBox}>
                <div className={styles.badge}>Examples</div>
                <h3>Better {area.name} wording</h3>
                <ul>
                  {detail.examples.map((example) => (
                    <li key={example}>“{example}”</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Common issues in {area.name}</div>
              <h2>Pick the closest service <span>before sending.</span></h2>
              <p>
                Each service page gives a more focused route for leaks, drains, toilets, taps,
                bathroom plumbing, kitchen plumbing, appliance waste, pressure and pipework.
              </p>
            </div>
            <div className={styles.v14ServiceMosaic}>
              {chosenServices.map((service, index) => (
                <Link
                  href={service.href}
                  key={service.slug}
                  className={`${styles.v4InfoCard} ${index === 0 || index === 5 ? styles.v14WideService : ""}`}
                >
                  <div className={styles.v4Icon}><ServiceIcon name={service.icon} /></div>
                  <h3>{service.label}</h3>
                  <p>{service.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Photo guidance</div>
              <h2>Photos that make a {area.name} enquiry <span>clearer.</span></h2>
              <p>
                These are example image types only. They show the kind of photo detail that helps explain a plumbing issue.
              </p>
            </div>
            <div className={styles.v14PhotoFlow}>
              {detail.photoCards.map((card, index) => {
                const img = index === 0 ? `area-${area.slug}-plumbing.jpg` : index === 1 ? `area-${area.slug}-kitchen-leak.jpg` : `area-${area.slug}-bathroom-plumbing.jpg`;
                return (
                  <article className={`${styles.v14PhotoRow} ${index % 2 === 1 ? styles.v14PhotoReverse : ""}`} key={card.title}>
                    <div
                      className={styles.v14PhotoImage}
                      style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 33, 58, .20), rgba(20, 184, 166, .06)), url('/images/real/${img}')` }}
                    />
                    <div className={styles.v14PhotoCopy}>
                      <div className={styles.v4Icon}><ServiceIcon name={card.icon} /></div>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Nearby areas</div>
              <h2>Related local pages <span>near {area.name}.</span></h2>
              <p>Use these if the enquiry is closer to a neighbouring Wolverhampton area.</p>
            </div>
            <div className={styles.areaPills}>
              {nearbyAreas.map((nearby) => (
                <Link href={nearby.href} key={nearby.slug}>{nearby.name}</Link>
              ))}
            </div>
          </div>
        </MotionReveal>

        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalBox}>
              <h2>Send a clearer plumbing enquiry from {area.name}</h2>
              <p>Include area, room, fixture, symptom, urgency and safe photos if useful.</p>
              <div className={styles.heroActionsCenter}>
                <a href={whatsappLink} className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a>
                <Link href="/areas-covered" className={styles.secondaryBtn}>See all areas</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
