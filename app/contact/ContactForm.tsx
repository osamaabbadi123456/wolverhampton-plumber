"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const router = useRouter();
  const [state, handleSubmit] = useForm("mwvjwlwj");

  useEffect(() => {
    if (state.succeeded) {
      router.push("/thank-you");
    }
  }, [state.succeeded, router]);

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label>
        Your name
        <input type="text" name="name" placeholder="Your name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </label>

      <label>
        Phone number
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </label>

      <label>
        Email address
        <input type="email" name="email" placeholder="Your email address" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      <label>
        Wolverhampton area
        <input
          type="text"
          name="area"
          placeholder="e.g. Bilston, Wednesfield, Tettenhall"
          required
        />
        <ValidationError prefix="Area" field="area" errors={state.errors} />
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
        <ValidationError prefix="Issue" field="issue" errors={state.errors} />
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
        <ValidationError
          prefix="Urgency"
          field="urgency"
          errors={state.errors}
        />
      </label>

      <label className="full">
        Describe the problem
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us what happened, where the issue is, and any useful details."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>

      <input type="hidden" name="website" value="wolverhamptonplumber.co.uk" />

      <button
        type="submit"
        className="btn primary formButton"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Send Plumbing Enquiry"}
      </button>

      <ValidationError errors={state.errors} />

      <p className="formNote">
        By sending this enquiry, you understand this website helps organise
        local plumbing enquiries and does not guarantee that a plumber will
        attend.
      </p>
    </form>
  );
}
