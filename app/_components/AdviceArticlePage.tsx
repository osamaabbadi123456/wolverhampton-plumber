import Link from "next/link";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";
import { ArticlePage, services, whatsappLink, siteUrl } from "../_data/siteContent";
import { ServiceIcon } from "./ServiceIcon";
import { MotionReveal, MotionCard } from "./MotionReveal";

type AdviceGuide = {
  doFirst: string[];
  check: string[];
  avoid: string[];
  photoTips: string[];
  whenSerious: string[];
};

const defaultGuide: AdviceGuide = {
  doFirst: [
    "Name the exact fixture first: tap, toilet, shower, bath, basin, kitchen sink, appliance hose, radiator or visible pipework.",
    "Describe the symptom in plain words: dripping, slow to drain, backing up, losing pressure, smelling, gurgling or water spreading.",
    "Check whether it affects one fixture only or appears in more than one room.",
    "Keep water away from electrics and do not take risks to get a photo.",
  ],
  check: [
    "Look for where the water first appears, not only where it ends up.",
    "Notice whether the symptom happens only while water is running, after water drains away or even when everything is off.",
    "Check nearby valves, waste pipes and floor areas only where it is safe and accessible.",
  ],
  avoid: [
    "Do not keep flushing, running taps or using appliances if water is backing up or spreading.",
    "Do not force stiff valves or overtighten plastic fittings.",
    "Do not mix several different problems into one message without naming the main symptom first.",
  ],
  photoTips: [
    "Take one wider photo showing the room, cupboard or floor area.",
    "Take one close photo of the fitting, waste pipe, valve, drain or tap base.",
    "Take a photo of the water path only if it is safe and away from electrics.",
  ],
  whenSerious: [
    "Water is spreading quickly or reaching electrics.",
    "A toilet or drain is backing up and cannot be left unused.",
    "A leak cannot be isolated or is affecting another room below.",
  ],
};

const guides: Record<string, AdviceGuide> = {
  "blocked-toilet-water-rising-wolverhampton": {
    doFirst: [
      "Stop flushing. A second flush can push the water higher and make the bathroom harder to use.",
      "Wait a few minutes and notice whether the level drops, stays high or rises again.",
      "Check whether the basin, bath or shower in the same room is also slow or gurgling.",
      "Keep the floor clear and move towels, mats or items away from any overflow water.",
    ],
    check: [
      "If the water drops slowly, mention how long it takes to clear.",
      "If other drains are slow, it may not be only the toilet pan.",
      "If this is the only toilet in the property, note that clearly because the urgency is different.",
    ],
    avoid: [
      "Do not add drain chemicals into a toilet already full of water.",
      "Do not keep flushing to test it.",
      "Do not use nearby fixtures if water appears to back up into the toilet.",
    ],
    photoTips: [
      "A wider bathroom photo showing access around the toilet.",
      "A safe close photo showing the water level if useful.",
      "A photo of any water around the toilet base or floor.",
    ],
    whenSerious: [
      "Water reaches the rim or spills onto the floor.",
      "The toilet is the only one in the home.",
      "Other drains are backing up at the same time.",
    ],
  },
  "kitchen-sink-draining-slowly-wolverhampton": {
    doFirst: [
      "Stop filling the sink and give standing water time to drop.",
      "Notice whether the sink clears eventually, drains very slowly or does not move at all.",
      "Listen for gurgling after the plug is pulled or after an appliance drains.",
      "Check if a washing machine or dishwasher waste hose connects under the sink.",
    ],
    check: [
      "If only the kitchen sink is slow, say that rather than calling it a full drain blockage.",
      "If the washing machine makes the sink fill, mention the appliance connection.",
      "Look under the sink for visible leaks around the trap or waste route.",
    ],
    avoid: [
      "Do not pour repeated chemicals if water is already backing up.",
      "Do not dismantle the trap unless you are prepared for water inside it.",
      "Do not keep using the appliance if water comes back into the sink.",
    ],
    photoTips: [
      "Photo of standing water in the sink if present.",
      "Under-sink photo showing the trap and waste pipe route.",
      "Photo of appliance waste hose connection if relevant.",
    ],
    whenSerious: [
      "Water backs up into the sink from an appliance.",
      "Water leaks inside the cupboard while draining.",
      "More than one drain in the property is slow or gurgling.",
    ],
  },
  "low-water-pressure-one-tap-wolverhampton": {
    doFirst: [
      "Check whether the weak flow is on hot, cold or both.",
      "Compare the affected tap with another tap in the property.",
      "Notice whether the pressure dropped suddenly or became weaker over time.",
      "Look for recent work, visible leaks or valves moved near the affected fixture.",
    ],
    check: [
      "One weak tap is different from weak pressure across the whole home.",
      "A mixer tap can behave differently on hot and cold, so describe each side.",
      "If a shower is affected too, mention whether it shares the same bathroom.",
    ],
    avoid: [
      "Do not force stiff isolation valves.",
      "Do not describe the whole property as low pressure unless more than one fixture is weak.",
      "Do not ignore a pressure drop if water is also appearing somewhere.",
    ],
    photoTips: [
      "Photo of the affected tap running weakly.",
      "Close photo of tap base and visible isolating valves if accessible.",
      "Wider photo of the sink or room if access is awkward.",
    ],
    whenSerious: [
      "Pressure drops suddenly after a leak starts.",
      "Hot water pressure changes at several fixtures.",
      "The issue affects the whole property, not one tap.",
    ],
  },
  "water-leaking-under-sink-wolverhampton": {
    doFirst: [
      "Stop using the sink while you check where the water appears.",
      "Dry the cupboard base if safe, then see whether water returns from the trap, tap tails or waste connection.",
      "Check whether it leaks only when water drains away or even when the tap is off.",
      "Move stored items away so the pipework and water path can be seen.",
    ],
    check: [
      "Water after draining often points to waste pipe or trap area.",
      "Water while the tap is running can come from tap connections or pipework.",
      "Water at the back of the unit may need a wider photo to show access.",
    ],
    avoid: [
      "Do not keep filling the sink to test it repeatedly.",
      "Do not overtighten plastic waste fittings until they crack.",
      "Do not send a photo blocked by cleaning bottles or stored items.",
    ],
    photoTips: [
      "One photo of the whole cupboard.",
      "One close photo of the wet joint or pipe route.",
      "One photo showing the water path on the cupboard base.",
    ],
    whenSerious: [
      "Water keeps returning when the sink is not being used.",
      "Water reaches electrical items or sockets.",
      "The cupboard base or nearby floor is soaking.",
    ],
  },
  "shower-drain-smells-wolverhampton": {
    doFirst: [
      "Notice whether the smell appears after shower use or when the shower has not been used for a while.",
      "Check whether water drains slowly from the tray or bath.",
      "Listen for gurgling from nearby basin, bath or shower waste.",
      "Keep the description focused on smell, timing and drainage speed.",
    ],
    check: [
      "Smell plus slow water is more useful to mention than smell alone.",
      "Gurgling after another fixture is used can be an important clue.",
      "Standing water around the drain should be photographed if safe.",
    ],
    avoid: [
      "Do not only cover the smell with air freshener and skip the drain symptoms.",
      "Do not remove drain covers or traps unsafely.",
      "Do not assume it is only cleaning if water also drains slowly.",
    ],
    photoTips: [
      "Photo of the shower drain area.",
      "Wider photo showing tray or bath position.",
      "Photo of standing water after use, if present.",
    ],
    whenSerious: [
      "Smell appears with water backing up.",
      "Several drains smell or gurgle together.",
      "Water sits for a long time after showering.",
    ],
  },
  "bathroom-sink-draining-slowly-wolverhampton": {
    doFirst: [
      "Run only a small amount of water and see whether it clears or sits in the basin.",
      "Check whether the plug, pop-up waste or visible waste area is blocked by hair or debris.",
      "Notice whether the basin gurgles after draining.",
      "Check if the bath or shower in the same bathroom is also slow.",
    ],
    check: ["One slow basin is different from a full bathroom drainage issue.", "A smell from the basin trap is useful to mention.", "Water marks under the basin can point to a leak as well as slow drainage."],
    avoid: ["Do not keep using harsh chemicals repeatedly.", "Do not dismantle a trap if you cannot catch the water safely.", "Do not ignore water under the basin just because the basin is slow."],
    photoTips: ["Photo of the basin with water sitting if present.", "Photo of the waste/plug area.", "Under-basin photo of the trap and pipe route if visible."],
    whenSerious: ["Water backs up into the basin.", "Other bathroom drains are slow too.", "Water appears underneath while the basin drains."],
  },
  "tap-dripping-at-night-wolverhampton": {
    doFirst: ["Check whether the drip comes from the spout, base, handle or pipe below.", "Notice if the drip is constant or worse after using hot water.", "Check whether the tap handle is stiff, loose or hard to shut fully.", "Place a bowl only if safe so you can describe the drip rate."],
    check: ["Spout drip, base leak and stiff handle are different tap symptoms.", "A mixer tap can leak from several places, so the exact point matters.", "If water appears below the sink, mention that separately from the drip."],
    avoid: ["Do not overtighten the handle with force.", "Do not ignore water around the tap base.", "Do not describe it only as noise if water is escaping."],
    photoTips: ["Close photo of the tap spout or base.", "Photo of any water around the tap.", "Under-sink photo if water appears below."],
    whenSerious: ["Water is leaking from the base into the unit.", "The tap will not shut off.", "The handle is stiff or loose and getting worse."],
  },
  "outside-drain-smells-wolverhampton": {
    doFirst: ["Check whether the smell comes from one gully/drain or several outside points.", "Notice whether water is standing, backing up or draining slowly.", "Mention whether indoor sinks, baths or toilets are also affected.", "Keep children and pets away from standing wastewater."],
    check: ["Outside smell plus indoor slow drainage is important to mention.", "Standing water around a gully should be described clearly.", "Smell after rain or after appliance use can be a useful timing clue."],
    avoid: ["Do not remove heavy covers if unsafe.", "Do not keep pouring water into a drain that is already backing up.", "Do not use photos that only show the garden but not the drain."],
    photoTips: ["Wider photo of the drain area.", "Close photo of standing water or blocked gully if safe.", "Photo showing where water travels."],
    whenSerious: ["Water backs up outside or inside.", "Several drains smell together.", "The drain is close to an entrance or living area."],
  },
  "bath-draining-slowly-wolverhampton": {
    doFirst: ["Stop adding water and watch whether the bath clears slowly or stays full.", "Check whether the basin or shower in the same bathroom is also slow.", "Notice if gurgling appears after the bath drains.", "Look for water marks around the bath panel or nearby floor."],
    check: ["Slow bath drainage can be local to the bath waste or connected with a wider bathroom drain issue.", "Smell from the bath waste is useful to mention.", "Water below or around the bath changes the issue from drainage only to possible leak too."],
    avoid: ["Do not keep running water to test it.", "Do not remove panels if you cannot put them back safely.", "Do not use strong chemicals repeatedly in standing water."],
    photoTips: ["Photo of the bath water level or drain area.", "Wider bathroom photo showing access to bath panel.", "Photo of any floor water around the bath."],
    whenSerious: ["Water backs up into another fixture.", "Water appears through the ceiling below.", "The bath will not drain at all."],
  },
  "washing-machine-waste-pipe-backing-up-wolverhampton": {
    doFirst: ["Stop the appliance if water is backing up or overflowing.", "Check whether water comes from the standpipe, under-sink waste or hose connection.", "Mention whether the kitchen sink also drains slowly.", "Move items away from water if safe."],
    check: ["Back-up during appliance drain cycle is an important timing clue.", "A shared sink waste connection should be photographed if accessible.", "Water on the floor may need a wider photo showing the machine and pipe route."],
    avoid: ["Do not keep restarting the cycle to test it.", "Do not push hoses deeper without knowing where the water is going.", "Do not ignore water near electrics or appliance plugs."],
    photoTips: ["Photo of the hose or standpipe area.", "Photo under the sink if the appliance connects there.", "Wider photo showing appliance position and water spread."],
    whenSerious: ["Water reaches sockets or appliance electrics.", "Water floods from the standpipe.", "The kitchen sink also backs up."],
  },
  "water-around-toilet-base-wolverhampton": {
    doFirst: ["Stop using the toilet until you know whether water returns after flushing.", "Dry the floor if safe and see where water first appears.", "Check whether the water is clean-looking or appears after a flush.", "Mention if the toilet pan moves, rocks or has visible gaps at the base."],
    check: ["Water after flushing is different from condensation or cleaning water.", "A loose toilet base is important to mention.", "Smell or slow drainage changes the enquiry from simple floor water."],
    avoid: ["Do not keep flushing repeatedly.", "Do not seal around the base to hide water without knowing the source.", "Do not ignore water spreading under flooring."],
    photoTips: ["Wider photo of the toilet and floor.", "Close photo of the base where water appears.", "Photo after drying if water returns."],
    whenSerious: ["Water returns every flush.", "There is smell, backing up or slow drainage.", "Water reaches nearby flooring or another room."],
  },
  "shower-pressure-suddenly-dropped-wolverhampton": {
    doFirst: ["Check whether hot, cold or both sides changed.", "Compare the shower with a nearby basin tap.", "Notice whether the flow is weak, uneven or only weak at certain settings.", "Look for visible leaks, recent work or a blocked shower head."],
    check: ["One shower problem is different from whole-home low pressure.", "Hot-only pressure issues should be described separately from cold-only issues.", "Limescale or blocked holes can affect the shower head."],
    avoid: ["Do not force shower controls.", "Do not describe it only as a boiler issue unless hot water is also failing elsewhere.", "Do not ignore a pressure drop if water appears behind or below the shower."],
    photoTips: ["Photo of the shower running if useful.", "Close photo of shower head and controls.", "Wider shower area photo if access is important."],
    whenSerious: ["Pressure dropped suddenly with visible leaking.", "Several fixtures are weak too.", "Water appears outside the shower area."],
  },
  "ceiling-leak-below-bathroom-wolverhampton": {
    doFirst: ["Stop using the bathroom fixtures above the leak if safe to do so.", "Note whether the mark appears after bath, shower, basin or toilet use.", "Keep away from electrics and light fittings near the wet area.", "Place a container only where safe if water is actively dripping."],
    check: ["Timing matters: after shower use, after bath draining or after toilet flushing.", "A spreading stain is more urgent than an old dry mark.", "The room directly above should be mentioned if known."],
    avoid: ["Do not keep testing fixtures above the stain.", "Do not touch wet electrics or light fittings.", "Do not send only a ceiling close-up without the bathroom context if available."],
    photoTips: ["Photo of the ceiling mark from a safe distance.", "Photo of the bathroom fixture above if known.", "Photo showing whether water is actively dripping."],
    whenSerious: ["Water is dripping actively.", "The mark spreads quickly.", "Water is near electrics, lights or sockets."],
  },
  "boiler-losing-pressure-wolverhampton": {
    doFirst: ["Read the pressure gauge only if accessible and safe.", "Note whether pressure drops after heating runs or even when heating is off.", "Look for visible water near radiators, valves, pipework or boiler area.", "Mention whether radiators are cold, noisy or need frequent topping up."],
    check: ["Visible radiator or pipe leaks are important clues.", "Frequent pressure drops are different from one accidental low-pressure reading.", "Heating symptoms and plumbing leak symptoms should both be mentioned."],
    avoid: ["Do not remove boiler casing.", "Do not repeatedly top up pressure without noting how fast it drops.", "Do not ignore water around radiators or pipework."],
    photoTips: ["Photo of the pressure gauge if safe.", "Photo of any visible leak near radiator valves or pipework.", "Wider photo of the boiler or heating area without opening covers."],
    whenSerious: ["Pressure drops quickly after topping up.", "Water appears near boiler or heating pipework.", "Heating stops working or radiators stay cold."],
  },
  "details-to-send-before-plumbing-enquiry-wolverhampton": defaultGuide,
};

function guideFor(slug: string): AdviceGuide {
  return guides[slug] || defaultGuide;
}

export default function AdviceArticlePage({ article }: { article: ArticlePage }) {
  const service = services.find((item) => item.href === article.serviceHref);
  const guide = guideFor(article.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: `${siteUrl}${article.href}`,
    author: { "@type": "Organization", name: "Wolverhampton Plumber" },
    publisher: { "@type": "Organization", name: "Wolverhampton Plumber" },
    inLanguage: "en-GB",
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className={styles.page}>
        <section className={`${styles.hero} ${styles.v15AdviceHero}`}>
          <div className={styles.container}>
            <div className={styles.v15AdviceHeroGrid}>
              <div className={styles.heroText}>
                <div className={styles.badge}>Practical plumbing advice</div>
                <h1>{article.title}<span> {article.highlight}</span></h1>
                <p>Use this guide to understand the symptom first, avoid making the problem messier, and prepare useful details only at the end if you still need help.</p>
                <div className={styles.microTrust}><span>Do first</span><span>Check safely</span><span>Avoid damage</span></div>
              </div>
              <aside className={styles.v4PhotoHero} style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 20, 39, .82), rgba(3, 20, 39, .20)), url('/images/real/${article.image}')` }}>
                <div className={styles.v4HeroPanel}>
                  <div className={styles.v4Icon}><ServiceIcon name={service?.icon || "check"} /></div>
                  <strong>Advice first</strong>
                  <span>Start with safe checks, not with the enquiry form.</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <MotionReveal className={`${styles.servicesSection} ${styles.v23RelatedSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Start here</div>
              <h2>Do these checks <span>first.</span></h2>
              <p>Simple checks can help you understand whether the issue is a leak, blockage, pressure change, tap fault or fixture-specific problem.</p>
            </div>
            <div className={styles.v15AdviceSteps}>
              {guide.doFirst.map((item, index) => (
                <MotionCard key={item} delay={index * 0.04} className={styles.v15AdviceStep}>
                  <strong>{index + 1}</strong>
                  <p>{item}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.v15AdviceSplit}>
              <div>
                <div className={styles.badge}>Useful clues</div>
                <h2>Check these details <span>without guessing.</span></h2>
                <p>The aim is not to diagnose the plumbing fault from the sofa. It is to describe the visible pattern clearly and safely.</p>
              </div>
              <div className={styles.v15Checklist}>
                {guide.check.map((item) => <p key={item}><span>✓</span>{item}</p>)}
              </div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className={`${styles.servicesSection} ${styles.v23RelatedSection}`}>
          <div className={styles.container}>
            <div className={styles.v15AdviceSplitReverse}>
              <div className={styles.v15WarningBox}>
                <div className={styles.badge}>Avoid this</div>
                <h2>Do not make the issue <span>harder to inspect.</span></h2>
                {guide.avoid.map((item) => <p key={item}><span>!</span>{item}</p>)}
              </div>
              <div className={styles.v15WarningBoxSoft}>
                <div className={styles.badge}>More urgent signs</div>
                <h2>Take the problem more seriously when:</h2>
                {guide.whenSerious.map((item) => <p key={item}><span>→</span>{item}</p>)}
              </div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>Photo tips</div>
              <h2>Useful photos <span>if it is safe.</span></h2>
              <p>Good photos show the fixture and access, not just a dark close-up of water.</p>
            </div>
            <div className={styles.v15PhotoTips}>
              {guide.photoTips.map((item, index) => (
                <article className={styles.v4InfoCard} key={item}>
                  <div className={styles.v4Icon}><ServiceIcon name={index === 0 ? "camera" : index === 1 ? "pipe" : "leak"} /></div>
                  <h3>{index === 0 ? "Wider view" : index === 1 ? "Close detail" : "Water path"}</h3>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </MotionReveal>

        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalBox}>
              <h2>Still need help after checking?</h2>
              <p>Now send your Wolverhampton area, room, fixture, symptom, urgency and safe photos. Keep the message short but specific.</p>
              <div className={styles.heroActionsCenter}>
                <Link href={article.serviceHref} className={styles.primaryBtn}>Related service page</Link>
                <a href={whatsappLink} className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
