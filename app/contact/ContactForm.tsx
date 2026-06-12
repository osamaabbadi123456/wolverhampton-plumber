"use client";

import { FormEvent, useState } from "react";

function encodeFormData(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, string> = {
      "form-name": "plumbing-enquiry",
      "bot-field": String(formData.get("bot-field") || ""),
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      area: String(formData.get("area") || ""),
      issue: String(formData.get("issue") || ""),
      urgency: String(formData.get("urgency") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      window.location.href = "/thank-you";
    } catch {
      setError(
        "Sorry, your enquiry could not be sent. Please try WhatsApp instead.",
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="contactForm"
      name="plumbing-enquiry"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="plumbing-enquiry" />

      <p className="hiddenField">
        <label>
          Do not fill this out if you are human:
          <input name="bot-field" />
        </label>
      </p>

      <label>
        Your name
        <input type="text" name="name" placeholder="Your name" required />
      </label>

      <label>
        Phone number
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          required
        />
      </label>

      <label>
        Email address
        <input type="email" name="email" placeholder="Your email address" />
      </label>

      <label>
        Wolverhampton area
        <input
          type="text"
          name="area"
          placeholder="e.g. Bilston, Wednesfield, Tettenhall"
          required
        />
      </label>

      <label>
        Type of plumbing issue
        <select name="issue" required defaultValue="">
          <option value="" disabled>
            Select an issue
          </option>
          <option value="Leak or burst pipe concern">
            Leak or burst pipe concern
          </option>
          <option value="Blocked toilet">Blocked toilet</option>
          <option value="Blocked sink or drain">Blocked sink or drain</option>
          <option value="Tap repair">Tap repair</option>
          <option value="Shower or bathroom plumbing">
            Shower or bathroom plumbing
          </option>
          <option value="Kitchen plumbing">Kitchen plumbing</option>
          <option value="Radiator or heating plumbing">
            Radiator or heating plumbing
          </option>
          <option value="Water pressure problem">Water pressure problem</option>
          <option value="Other plumbing issue">Other plumbing issue</option>
        </select>
      </label>

      <label>
        Urgency
        <select name="urgency" required defaultValue="">
          <option value="" disabled>
            Select urgency
          </option>
          <option value="Urgent today">Urgent today</option>
          <option value="Within 24-48 hours">Within 24-48 hours</option>
          <option value="This week">This week</option>
          <option value="Flexible">Flexible</option>
        </select>
      </label>

      <label className="full">
        Describe the problem
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us what happened, where the issue is, and any useful details."
          required
        />
      </label>

      <button
        type="submit"
        className="btn primary formButton"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Plumbing Enquiry"}
      </button>

      {error && <p className="formError">{error}</p>}

      <p className="formNote">
        By sending this enquiry, you understand this website helps organise
        local plumbing enquiries and does not guarantee that a plumber will
        attend.
      </p>
    </form>
  );
}
