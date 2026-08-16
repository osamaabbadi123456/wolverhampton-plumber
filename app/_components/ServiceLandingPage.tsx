import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";
import {
  ServicePage,
  services,
  areas,
  articles,
  whatsappLink,
  siteUrl,
} from "@/app/_data/siteContent";
import { ServiceIcon } from "@/app/_components/ServiceIcon";

type CompareCopy = {
  helpfulTitle: string;
  carefulTitle: string;
  helpful: string[];
  careful: string[];
};

const serviceComparisons: Record<string, CompareCopy> = {
  "emergency-plumber-wolverhampton": {
    helpfulTitle: "Details that help in an urgent enquiry",
    carefulTitle: "Things that can delay the first assessment",
    helpful: [
      "Say whether water is still moving, rising, spraying or spreading across a floor.",
      "Mention the room, the fixture and whether the stop tap can be reached safely.",
      "A clear photo from a safe distance can show the scale of the problem fast.",
      "Explain whether this affects the only toilet, main water supply or a key room.",
    ],
    careful: [
      "Repeated flushing or running taps can make a blockage or leak worse.",
      "Water near electrics should be treated as a safety risk before taking photos.",
      "A message that only says “urgent plumber” gives very little routing detail.",
      "Hidden leaks may still need on-site checking even when photos look small.",
    ],
  },
  "blocked-toilet-wolverhampton": {
    helpfulTitle: "Blocked toilet details that are useful",
    carefulTitle: "Blocked toilet mistakes to avoid",
    helpful: [
      "Say whether the bowl level rises, holds, slowly drops or is already close to overflowing.",
      "Mention whether other toilets, sinks, baths or showers are draining normally.",
      "Say if this is the only usable toilet in the property.",
      "Mention wipes, excess paper or recent repeated blockage signs if known.",
    ],
    careful: [
      "Do not keep flushing when the water level is already high.",
      "Avoid forcing more paper or wipes into the pan while waiting.",
      "A toilet blockage can sometimes be linked to a wider drain issue.",
      "Dark close-up photos are less useful than one clear wider bathroom photo.",
    ],
  },
  "blocked-drains-wolverhampton": {
    helpfulTitle: "Drainage clues worth mentioning",
    carefulTitle: "Drainage details that are easy to miss",
    helpful: [
      "Say whether the issue is one sink, one shower, an outside drain or several fixtures.",
      "Mention gurgling sounds, bad smells, water backing up or water clearing slowly.",
      "Say if the kitchen sink changes when the washing machine or dishwasher drains.",
      "Outside drain photos can help when the cover or gully is safely visible.",
    ],
    careful: [
      "Harsh chemicals can make later work messier and more hazardous.",
      "A bad smell without slow water may need different wording from a full blockage.",
      "Shared or outside drainage can complicate what looks like a simple sink issue.",
      "Running more water can increase backing up if the drain is already restricted.",
    ],
  },
  "leak-repair-wolverhampton": {
    helpfulTitle: "Leak details that make the message clearer",
    carefulTitle: "Leak repair limits to understand",
    helpful: [
      "Say if the leak is constant or only happens when a tap, shower, toilet or appliance is used.",
      "Mention where the water starts and where it ends up: cupboard, floor, wall or ceiling.",
      "Send one close photo of the source and one wider photo showing the surrounding area.",
      "Say whether you have isolated the water or cannot find the stop tap.",
    ],
    careful: [
      "Water can travel along pipes before dripping in a different place.",
      "Ceiling marks below bathrooms may not show the exact source from photos alone.",
      "Old fittings, traps or pipework may need more than tightening.",
      "Leaks near electrics should be treated carefully before entering the area.",
    ],
  },
  "tap-repair-wolverhampton": {
    helpfulTitle: "Tap repair details that help",
    carefulTitle: "Tap details people often forget",
    helpful: [
      "Say whether it is a kitchen tap, basin tap, bath tap, mixer tap or outside tap.",
      "Mention hot side, cold side or both, especially for low flow or stiffness.",
      "Say whether the tap drips, runs, leaks at the base or will not turn off.",
      "A photo of the whole tap and a close-up of the handle/base are useful.",
    ],
    careful: [
      "A drip can be different from a leak at the base or pipe connection.",
      "Older tap parts may vary by model and may not be obvious from one photo.",
      "Low flow from one tap may be a tap issue, not a whole-home pressure issue.",
      "Very tight handles can break if forced repeatedly.",
    ],
  },
  "kitchen-plumber-wolverhampton": {
    helpfulTitle: "Kitchen plumbing details that help",
    carefulTitle: "Kitchen issues that need clearer wording",
    helpful: [
      "Say whether the problem is the sink, tap, trap, waste pipe, dishwasher or washing machine.",
      "Mention if the leak appears only when water runs or when an appliance drains.",
      "Send an under-sink photo if the cupboard can be opened safely.",
      "Say if there is smell, gurgling, slow drainage or water under the unit.",
    ],
    careful: [
      "Kitchen cupboards can hide water spread behind boards or kickboards.",
      "Appliances can share waste routes with the sink, so the symptom may not be isolated.",
      "One blurry photo under a dark sink cupboard may not show the pipe layout.",
      "Pulling appliances out unsafely can damage hoses or flooring.",
    ],
  },
  "bathroom-plumber-wolverhampton": {
    helpfulTitle: "Bathroom details that make the enquiry useful",
    carefulTitle: "Bathroom plumbing points to watch",
    helpful: [
      "Name the exact fixture: toilet, basin, bath, shower, tap, waste or visible pipework.",
      "Mention whether the issue is leak, smell, slow drainage, blockage or pressure change.",
      "Say if the room below has damp patches, marks or dripping.",
      "A wider photo helps show bath panels, shower trays, basins and toilet position.",
    ],
    careful: [
      "Leaks can sit behind panels, tiles or boxing and may not be visible immediately.",
      "Several bathroom fixtures may share the same waste route.",
      "Access can affect how quickly a bathroom issue can be checked.",
      "A bathroom smell is not always the same as a blocked drain.",
    ],
  },
  "water-pressure-plumber-wolverhampton": {
    helpfulTitle: "Pressure details that narrow the issue",
    carefulTitle: "Pressure wording that can mislead",
    helpful: [
      "Say whether low pressure affects one tap, one shower, hot water, cold water or the whole home.",
      "Mention if the drop was sudden, gradual or started after recent work.",
      "Say whether neighbours or other fixtures seem normal if you know.",
      "Photos help most when they show the specific tap/shower and any visible valve area.",
    ],
    careful: [
      "One weak tap is very different from every tap in the property being weak.",
      "Hot-only pressure problems may point to a different route from cold-only problems.",
      "A pressure symptom can come from valves, fixtures, supply or heating setup.",
      "Guessing the cause too early can send the enquiry in the wrong direction.",
    ],
  },
  "boiler-heating-plumber-wolverhampton": {
    helpfulTitle: "Heating details that are useful to include",
    carefulTitle: "Heating enquiry limits to keep clear",
    helpful: [
      "Say whether the issue is no hot water, radiator cold spots, pressure loss or visible pipework.",
      "Mention whether pressure drops once, repeatedly or after heating has been used.",
      "Say if any radiator valves, pipes or visible fittings are leaking.",
      "A photo of the pressure gauge or visible leak can help when safe.",
    ],
    careful: [
      "Some gas boiler work requires an appropriately registered engineer.",
      "Pressure loss can be linked to visible leaks, radiator valves or system issues.",
      "Do not remove boiler covers or attempt unsafe checks for a photo.",
      "Heating symptoms can take more than one message to understand properly.",
    ],
  },
  "shower-plumber-wolverhampton": {
    helpfulTitle: "Shower details that help",
    carefulTitle: "Shower issues to describe carefully",
    helpful: [
      "Say whether the issue is pressure, drainage, leak, smell, mixer control or shower tray water.",
      "Mention whether water drains slowly during use or only smells after use.",
      "Say if water appears outside the screen, around the tray or below the bathroom.",
      "A photo of the shower area and drain can make the first message clearer.",
    ],
    careful: [
      "A shower leak may come from seals, waste, pipework or screen edges.",
      "Pressure problems and drainage problems should not be described as the same issue.",
      "Tiles, panels and trays can hide the real route of water.",
      "Smells may need different checks from a full blockage.",
    ],
  },
  "sink-plumber-wolverhampton": {
    helpfulTitle: "Sink details that help",
    carefulTitle: "Sink details often missed",
    helpful: [
      "Say kitchen sink, bathroom basin, utility sink or cloakroom basin.",
      "Mention slow drainage, leak below, tap issue, smell or gurgling.",
      "Send a photo of the waste trap and pipework if the cupboard is accessible.",
      "Say if the issue happens only when the tap runs or constantly.",
    ],
    careful: [
      "Water under a sink can come from tap tails, waste traps, seals or appliance connections.",
      "A slow sink may be isolated or part of a wider drain issue.",
      "Cupboard clutter can hide the pipework in photos.",
      "A small drip can spread into boards or flooring over time.",
    ],
  },
  "pipe-repair-wolverhampton": {
    helpfulTitle: "Pipe repair details that help",
    carefulTitle: "Pipework issues to be careful with",
    helpful: [
      "Say whether the pipe is copper, plastic or flexible hose if it is obvious.",
      "Mention if it drips, sprays, runs or only leaks when a fixture is used.",
      "A close photo of the pipe and a wider photo of the room both help.",
      "Say whether any valve nearby can isolate the water safely.",
    ],
    careful: [
      "Spraying water can become urgent quickly.",
      "Temporary tape-style fixes are not always reliable.",
      "Hidden pipe routes can make the visible drip misleading.",
      "Pipework near electrics or appliances needs safe distance first.",
    ],
  },
  "radiator-plumber-wolverhampton": {
    helpfulTitle: "Radiator details that help",
    carefulTitle: "Radiator points to watch",
    helpful: [
      "Say whether one radiator, several radiators or all radiators are affected.",
      "Mention leaks from valves, cold spots, noises or pressure drops.",
      "A photo of the radiator valve area is often more useful than a full-room photo.",
      "Say whether heating and hot water behave differently.",
    ],
    careful: [
      "Radiator leaks can affect boiler pressure or heating performance.",
      "Old valves may be delicate and should not be forced.",
      "A cold radiator is different from a leaking radiator.",
      "Some heating work may need a suitably qualified person.",
    ],
  },
  "washing-machine-plumbing-wolverhampton": {
    helpfulTitle: "Appliance plumbing details that help",
    carefulTitle: "Appliance issues to avoid making worse",
    helpful: [
      "Say washing machine, dishwasher or both, and whether the issue happens on fill or drain.",
      "Mention whether water appears behind the appliance, under the sink or from a standpipe.",
      "Say if the kitchen sink drains slowly at the same time.",
      "Only send photos behind appliances if it is safe and easy to access.",
    ],
    careful: [
      "Pulling heavy appliances can damage hoses, floors or connections.",
      "A waste pipe backing up may be linked to the sink waste route.",
      "Water behind an appliance can be hard to see clearly without safe access.",
      "Do not run another cycle if water is already backing up.",
    ],
  },
  "stop-tap-plumber-wolverhampton": {
    helpfulTitle: "Stop tap details that help",
    carefulTitle: "Stop tap issues to treat carefully",
    helpful: [
      "Say whether the stop tap is accessible, stiff, leaking, seized or unknown.",
      "Mention if you tried turning it and whether it moved safely.",
      "A photo of the stop tap area helps explain access and condition.",
      "Say if you need it because of an active leak or as a planned enquiry.",
    ],
    careful: [
      "Forcing a seized valve can make a leak worse.",
      "Some stop taps are boxed in, hidden or difficult to reach.",
      "A stop tap issue is more urgent if water is already spreading.",
      "Do not move stored items if the area is unsafe or wet.",
    ],
  },
  "outside-tap-plumber-wolverhampton": {
    helpfulTitle: "Outside tap details that help",
    carefulTitle: "Outside tap points to watch",
    helpful: [
      "Say whether it is a leak, drip, damaged pipe or new outside tap enquiry.",
      "Mention whether the inside isolation valve is known and accessible.",
      "A photo of the outside wall and tap position gives useful context.",
      "Mention frost damage or winter timing if relevant.",
    ],
    careful: [
      "Outdoor pipework can split after frost and leak when turned back on.",
      "A new outside tap needs a suitable inside water connection.",
      "Wall type and access can affect the job.",
      "Outside leaks may be missed until the tap is used again.",
    ],
  },
};

const relatedServiceSlugs: Record<string, string[]> = {
  "emergency-plumber-wolverhampton": ["leak-repair-wolverhampton", "blocked-toilet-wolverhampton", "blocked-drains-wolverhampton", "pipe-repair-wolverhampton", "stop-tap-plumber-wolverhampton", "water-pressure-plumber-wolverhampton"],
  "blocked-toilet-wolverhampton": ["emergency-plumber-wolverhampton", "blocked-drains-wolverhampton", "bathroom-plumber-wolverhampton", "leak-repair-wolverhampton", "pipe-repair-wolverhampton", "sink-plumber-wolverhampton"],
  "blocked-drains-wolverhampton": ["blocked-toilet-wolverhampton", "kitchen-plumber-wolverhampton", "bathroom-plumber-wolverhampton", "sink-plumber-wolverhampton", "shower-plumber-wolverhampton", "washing-machine-plumbing-wolverhampton"],
  "leak-repair-wolverhampton": ["emergency-plumber-wolverhampton", "pipe-repair-wolverhampton", "kitchen-plumber-wolverhampton", "bathroom-plumber-wolverhampton", "sink-plumber-wolverhampton", "stop-tap-plumber-wolverhampton"],
  "tap-repair-wolverhampton": ["sink-plumber-wolverhampton", "kitchen-plumber-wolverhampton", "bathroom-plumber-wolverhampton", "water-pressure-plumber-wolverhampton", "outside-tap-plumber-wolverhampton", "emergency-plumber-wolverhampton"],
  "kitchen-plumber-wolverhampton": ["sink-plumber-wolverhampton", "tap-repair-wolverhampton", "blocked-drains-wolverhampton", "washing-machine-plumbing-wolverhampton", "leak-repair-wolverhampton", "pipe-repair-wolverhampton"],
  "bathroom-plumber-wolverhampton": ["blocked-toilet-wolverhampton", "shower-plumber-wolverhampton", "sink-plumber-wolverhampton", "tap-repair-wolverhampton", "leak-repair-wolverhampton", "water-pressure-plumber-wolverhampton"],
  "water-pressure-plumber-wolverhampton": ["tap-repair-wolverhampton", "shower-plumber-wolverhampton", "boiler-heating-plumber-wolverhampton", "radiator-plumber-wolverhampton", "pipe-repair-wolverhampton", "emergency-plumber-wolverhampton"],
  "boiler-heating-plumber-wolverhampton": ["radiator-plumber-wolverhampton", "pipe-repair-wolverhampton", "water-pressure-plumber-wolverhampton", "leak-repair-wolverhampton", "emergency-plumber-wolverhampton", "stop-tap-plumber-wolverhampton"],
};


function optimizedImage(name: string) {
  return `/images/optimized/${name.replace(/\.(?:jpe?g|png)$/i, ".webp")}`;
}

function getCompareCopy(service: ServicePage): CompareCopy {
  return serviceComparisons[service.slug] || {
    helpfulTitle: `${service.label} details that help`,
    carefulTitle: `${service.label} points to watch`,
    helpful: service.good,
    careful: service.watch,
  };
}

function bySlugs(slugs: string[], fallback: ServicePage) {
  const picked = slugs
    .map((slug) => services.find((item) => item.slug === slug))
    .filter(Boolean) as ServicePage[];

  if (picked.length) return picked;
  return services.filter((item) => item.slug !== fallback.slug).slice(0, 6);
}

function relatedArticlesFor(service: ServicePage) {
  const direct = articles.filter((item) => item.serviceHref === service.href);
  const fallback = articles.filter((item) => item.serviceHref !== service.href);
  return [...direct, ...fallback].slice(0, 4);
}

export default function ServiceLandingPage({ service }: { service: ServicePage }) {
  const compare = getCompareCopy(service);
  const related = bySlugs(relatedServiceSlugs[service.slug] || [], service).slice(0, 6);
  const relatedArticles = relatedArticlesFor(service);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.label} Wolverhampton`,
    serviceType: service.category,
    areaServed: { "@type": "City", name: "Wolverhampton" },
    provider: { "@type": "Organization", name: "Wolverhampton Plumber", url: siteUrl },
    url: `${siteUrl}${service.href}`,
    description: service.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className={styles.page}>
        <section className={`${styles.hero} ${styles.v4Hero} ${styles.v22ServiceHero}`}>
          <div className={styles.container}>
            <div className={styles.v4HeroGrid}>
              <div className={styles.heroText}>
                <div className={styles.badge}>{service.badge}</div>
                <h1>{service.title}<span> {service.highlight}</span></h1>
                <p>{service.intro}</p>
                <div className={styles.heroActions}>
                  <a href={whatsappLink} className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">Send details on WhatsApp</a>
                  <Link href="/contact" className={styles.secondaryBtn}>Build enquiry message</Link>
                </div>
                <div className={styles.microTrust}>
                  <span>Area first</span>
                  <span>Symptom-led message</span>
                  <span>Safe photos help</span>
                </div>
              </div>

              <aside className={styles.v4PhotoHero}>
                <img
                  className={styles.v4PhotoHeroImage}
                  src={optimizedImage(service.image)}
                  alt={`${service.label} Wolverhampton`}
                  width="1100"
                  height="760"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className={styles.v4HeroPanel}>
                  <div className={styles.v4Icon}><ServiceIcon name={service.icon} /></div>
                  <strong>{service.label}</strong>
                  <span>Send the area, affected room, visible symptom, urgency and a safe photo where it helps.</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={`${styles.servicesSection} ${styles.v23RelatedSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Common situations</div>
              <h2>What type of problem <span>are you seeing?</span></h2>
              <p>These situations help you describe the symptom clearly without guessing the cause.</p>
            </div>
            <div className={styles.v4CardsGrid}>
              {service.scenarios.map((item) => (
                <article className={styles.v4InfoCard} key={item.title}>
                  <div className={styles.v4Icon}><ServiceIcon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.v4SplitGrid}>
              <div>
                <div className={styles.badge}>Step-by-step</div>
                <h2>How to send a stronger <span>{service.label.toLowerCase()} enquiry.</span></h2>
                <p>The aim is not to diagnose the issue online. The aim is to send details that make the first message easier to understand and route.</p>
                <div className={styles.v4Steps}>
                  {service.steps.map((step, index) => (
                    <div className={styles.v4Step} key={step}>
                      <strong>{index + 1}</strong>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <aside className={styles.v4TipBox}>
                <div className={styles.badge}>Practical tips</div>
                <h3>Details that make the first message better</h3>
                <ul>
                  {service.tips.map((tip) => <li key={tip}>{tip}</li>)}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className={`${styles.servicesSection} ${styles.v23RelatedSection}`}>
          <div className={styles.container}>
            <div className={styles.v4CompareGrid}>
              <div className={styles.v4GoodCard}>
                <h2>{compare.helpfulTitle}</h2>
                {compare.helpful.map((item) => <p key={item}><span>✓</span>{item}</p>)}
              </div>
              <div className={styles.v4WatchCard}>
                <h2>{compare.carefulTitle}</h2>
                {compare.careful.map((item) => <p key={item}><span>!</span>{item}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Helpful photo examples</div>
              <h2>Photos that help explain <span>the issue.</span></h2>
              <p>If it is safe, a close photo and a wider photo can reduce confusion and show where the problem appears.</p>
            </div>
            <div className={styles.v4PhotoGrid}>
              {service.photoSlots.map((slot) => (
                <article className={styles.v4PhotoCard} key={slot.image}>
                  <div className={styles.v4PhotoFrame} style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 33, 58, .38), rgba(20, 184, 166, .16)), url('${optimizedImage(slot.image)}')` }}>
                    <span className={styles.v5PhotoBadge}><ServiceIcon name={service.icon} /></span>
                  </div>
                  <div><h3>{slot.title}</h3><p>{slot.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Local coverage</div>
              <h2>Wolverhampton and nearby <span>enquiry areas.</span></h2>
              <p>Choose the closest area page when the search is more local than the city-wide service page.</p>
            </div>
            <div className={styles.areaPills}>
              {areas.slice(0, 12).map((area) => <Link href={area.href} key={area.slug}>{area.name}</Link>)}
            </div>
          </div>
        </section>

        <section className={`${styles.servicesSection} ${styles.v23RelatedSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>More useful pages</div>
              <h2>Related Wolverhampton services and <span>advice.</span></h2>
              <p>Use these Wolverhampton pages to narrow the enquiry by service, area or symptom.</p>
            </div>
            <div className={styles.v24RelatedImageGrid}>
              {related.map((item) => (
                <Link href={item.href} key={item.slug} className={`${styles.v4ServiceTile} ${styles.v24RelatedImageCard}`}>
                  <div className={styles.v4TileImage} style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 33, 58, .34), rgba(20, 184, 166, .12)), url('${optimizedImage(item.image)}')` }} />
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.label}</h3>
                    <p>Useful Wolverhampton service page for narrowing the enquiry by the actual plumbing symptom.</p>
                  </div>
                </Link>
              ))}
              {relatedArticles.map((item) => (
                <Link href={item.href} key={item.slug} className={`${styles.v4ServiceTile} ${styles.v24RelatedImageCard}`}>
                  <div className={styles.v4TileImage} style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 33, 58, .34), rgba(20, 184, 166, .12)), url('${optimizedImage(item.image)}')` }} />
                  <div>
                    <span>{item.highlight}</span>
                    <h3>{item.title}</h3>
                    <p>Practical Wolverhampton advice for checking the issue before sending an enquiry.</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}><div className={styles.badge}>FAQs</div><h2>{service.label} <span>questions.</span></h2></div>
            <div className={styles.faqGrid}>{service.faqs.map((item) => <details className={styles.faqItem} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
          </div>
        </section>

        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalBox}>
              <h2>Ready to send a clear {service.label.toLowerCase()} enquiry?</h2>
              <p>Start with the area, the exact symptom, when it started and whether a photo would help explain the issue.</p>
              <div className={styles.heroActionsCenter}>
                <a href={whatsappLink} className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp the details</a>
                <Link href="/contact" className={styles.secondaryBtn}>Use contact page</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

