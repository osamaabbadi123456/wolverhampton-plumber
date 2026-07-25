"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "./ContactPage.module.css";

const WHATSAPP_NUMBER = "447405955956";

const issueOptions = [
  "Emergency plumbing enquiry",
  "Leak or burst pipe concern",
  "Blocked toilet",
  "Blocked sink or drain",
  "Tap repair",
  "Shower or bathroom plumbing",
  "Kitchen plumbing",
  "Radiator or heating pipework",
  "Water pressure problem",
  "Boiler or heating concern",
  "Other plumbing issue",
];

const urgencyOptions = [
  "Urgent today",
  "Within 24-48 hours",
  "This week",
  "Flexible",
];

const areaOptions = [
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
  "Other Wolverhampton area",
];

export default function ContactForm() {
  const [issue, setIssue] = useState("");
  const [urgency, setUrgency] = useState("");
  const [area, setArea] = useState("");
  const [details, setDetails] = useState("");

  const whatsappMessage = useMemo(() => {
    return [
      "Hi, I need plumbing help in Wolverhampton.",
      "",
      `Area: ${area || "Not selected"}`,
      `Issue: ${issue || "Not selected"}`,
      `Urgency: ${urgency || "Not selected"}`,
      `Details: ${details || "Not provided yet"}`,
      "",
      "Sent from wolverhamptonplumber.co.uk",
    ].join("\n");
  }, [area, issue, urgency, details]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formTop}>
        <div className={styles.checkIcon}>✓</div>
        <div>
          <p>Enquiry builder</p>
          <h2>Build your WhatsApp message</h2>
        </div>
      </div>

      <label className={styles.field}>
        <span>Type of plumbing issue</span>
        <select
          required
          value={issue}
          onChange={(event) => setIssue(event.target.value)}
        >
          <option value="" disabled>
            Select an issue
          </option>
          {issueOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Urgency</span>
        <select
          required
          value={urgency}
          onChange={(event) => setUrgency(event.target.value)}
        >
          <option value="" disabled>
            Select urgency
          </option>
          {urgencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Wolverhampton area</span>
        <select
          required
          value={area}
          onChange={(event) => setArea(event.target.value)}
        >
          <option value="" disabled>
            Select area
          </option>
          {areaOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Extra details</span>
        <textarea
          rows={5}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Example: blocked toilet upstairs, leaking pipe under kitchen sink, slow draining shower, no hot water, etc."
        />
      </label>

      <div className={styles.previewBox}>
        <span>WhatsApp preview</span>
        <pre>{whatsappMessage}</pre>
      </div>

      <button type="submit" className={styles.submitButton}>
        Send WhatsApp Plumbing Enquiry
      </button>

      <p className={styles.note}>
        The message opens in WhatsApp first, so you can review and edit it
        before sending.
      </p>
    </form>
  );
}
