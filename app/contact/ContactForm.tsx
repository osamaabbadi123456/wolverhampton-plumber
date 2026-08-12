"use client";

import { useMemo, useState } from "react";
import styles from "./ContactPage.module.css";

const whatsappNumber = "447405955956";

const issueCategories = [
  {
    id: "emergency",
    title: "An emergency",
    note: "Burst pipe concern, water leak, blocked toilet or urgent issue",
    issues: [
      "Water leaking now",
      "Burst pipe concern",
      "Blocked toilet with rising water",
      "Overflowing fixture",
      "Urgent plumbing issue",
    ],
  },
  {
    id: "blockages",
    title: "Blockages & flushing",
    note: "Blocked toilet, blocked sink, slow drainage or drain smell",
    issues: [
      "Blocked toilet",
      "Blocked kitchen sink",
      "Slow shower or bath drain",
      "Outside drain concern",
      "Gurgling or bad smell",
    ],
  },
  {
    id: "leaks",
    title: "Leaks, pipework & water pumps",
    note: "Leaking pipe, under-sink leak, bathroom leak or stop tap issue",
    issues: [
      "Under-sink leak",
      "Pipework leak",
      "Bathroom leak",
      "Kitchen leak",
      "Stop tap concern",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom appliances & fixtures",
    note: "Toilets, showers, baths, basins and bathroom pipework",
    issues: [
      "Toilet problem",
      "Shower issue",
      "Bath waste issue",
      "Bathroom basin leak",
      "Bathroom tap problem",
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen appliances & fixtures",
    note: "Sinks, taps, waste pipes, dishwashers and washing machines",
    issues: [
      "Kitchen sink leak",
      "Blocked kitchen sink",
      "Kitchen tap issue",
      "Dishwasher pipework",
      "Washing machine connection",
    ],
  },
  {
    id: "heating",
    title: "Boilers, heating & radiators",
    note: "Heating pipework, radiators, pressure concerns or boiler note",
    issues: [
      "Radiator pipework issue",
      "Heating pipe leak",
      "Boiler pressure concern",
      "No heating note",
      "Hot water concern",
    ],
  },
  {
    id: "outside",
    title: "Outside taps",
    note: "Outside tap leak, weak flow or replacement enquiry",
    issues: [
      "Outside tap leaking",
      "Outside tap not working",
      "Outside tap weak flow",
      "Outside pipework concern",
    ],
  },
  {
    id: "other",
    title: "Other / not sure",
    note: "Use this if the issue does not fit the options above",
    issues: [
      "Not sure what the issue is",
      "General plumbing enquiry",
      "Need to describe the problem",
    ],
  },
];

const areas = [
  "Wolverhampton",
  "Bilston",
  "Wednesfield",
  "Tettenhall",
  "Penn",
  "Bushbury",
  "Compton",
  "Whitmore Reans",
  "Oxley",
  "Finchfield",
  "Merry Hill",
  "Willenhall",
  "Sedgley",
  "Codsall",
  "Other nearby WV area",
];

const urgencies = [
  "Emergency / urgent today",
  "Within 24–48 hours",
  "This week",
  "Flexible",
];

export default function ContactForm() {
  const [showIssues, setShowIssues] = useState(true);
  const [categoryId, setCategoryId] = useState("");
  const [specificIssue, setSpecificIssue] = useState("");
  const [area, setArea] = useState("");
  const [urgency, setUrgency] = useState("");
  const [details, setDetails] = useState("");

  const selectedCategory = issueCategories.find(
    (item) => item.id === categoryId,
  );

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hi, I need plumbing help in Wolverhampton.",
      "",
      `Area: ${area || "Not selected"}`,
      `Issue category: ${selectedCategory?.title || "Not selected"}`,
      `Specific issue: ${specificIssue || "Not selected"}`,
      `Urgency: ${urgency || "Not selected"}`,
      "",
      `Details: ${details || "No extra details added yet."}`,
    ];

    return lines.join("\n");
  }, [area, selectedCategory, specificIssue, urgency, details]);

  const canSend = Boolean(categoryId && specificIssue && area && urgency);

  const handleCategoryClick = (id: string) => {
    setCategoryId(id);
    setSpecificIssue("");
    setShowIssues(false);
  };

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className={styles.formShell}>
      <div className={styles.formIntro}>
        <span>WhatsApp enquiry wizard</span>
        <h2>Build a clear plumbing message</h2>
        <p>
          Choose the issue, area and urgency. Your WhatsApp message opens before
          sending so you can review and edit it.
        </p>
      </div>

      <section className={styles.stepCard}>
        <div className={styles.stepTitle}>
          <span>Step 1</span>
          <h3>What do you need help with?</h3>
        </div>

        {selectedCategory && !showIssues ? (
          <div className={styles.selectedSummary}>
            <div>
              <strong>{selectedCategory.title}</strong>
              <p>{selectedCategory.note}</p>
            </div>
            <button type="button" onClick={() => setShowIssues(true)}>
              Change
            </button>
          </div>
        ) : (
          <div className={styles.issueGrid}>
            {issueCategories.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`${styles.issueButton} ${
                  categoryId === item.id ? styles.activeIssue : ""
                }`}
                onClick={() => handleCategoryClick(item.id)}
              >
                <strong>{item.title}</strong>
                <span>{item.note}</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {selectedCategory && (
        <section className={styles.stepCard}>
          <div className={styles.stepTitle}>
            <span>Step 2</span>
            <h3>Choose the closest issue</h3>
          </div>

          <div className={styles.chipGrid}>
            {selectedCategory.issues.map((issue) => (
              <button
                type="button"
                key={issue}
                className={`${styles.chipButton} ${
                  specificIssue === issue ? styles.activeChip : ""
                }`}
                onClick={() => setSpecificIssue(issue)}
              >
                {issue}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className={styles.stepCard}>
        <div className={styles.stepTitle}>
          <span>Step 3</span>
          <h3>Area and urgency</h3>
        </div>

        <div className={styles.fieldGrid}>
          <label>
            Area
            <select value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Select area</option>
              {areas.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Urgency
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            >
              <option value="">Select urgency</option>
              {urgencies.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className={styles.stepCard}>
        <div className={styles.stepTitle}>
          <span>Step 4</span>
          <h3>Add useful details</h3>
        </div>

        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Example: toilet water rises after flushing, kitchen sink drains slowly, water appears under the sink, tap is dripping..."
          rows={5}
        />
      </section>

      <section className={styles.previewCard}>
        <div>
          <span>Preview</span>
          <h3>WhatsApp message</h3>
        </div>

        <pre>{whatsappMessage}</pre>

        <a
          href={canSend ? whatsappHref : undefined}
          className={`${styles.submitButton} ${!canSend ? styles.disabled : ""}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!canSend}
          onClick={(e) => {
            if (!canSend) e.preventDefault();
          }}
        >
          Open WhatsApp Message
        </a>

        {!canSend && (
          <small>
            Choose issue category, specific issue, area and urgency first.
          </small>
        )}
      </section>
    </div>
  );
}



