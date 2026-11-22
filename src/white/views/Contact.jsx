"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { photos, professionalProfiles, profile } from "../data";
import { Reveal } from "../editorial/motion";
import { Intro, LINE, PageHeader, TertiaryLink } from "../editorial/ui";

/*
 * Set this to your Formspree form URL (e.g. "https://formspree.io/f/xabcdefg")
 * to send in-page. Until then the form composes an email instead, which
 * always works and never silently drops a message.
 */
const FORMSPREE_ENDPOINT = "";

const PROJECT_TYPES = [
  "SaaS application",
  "Custom web application",
  "Android mobile app",
  "AI automation system",
  "Technical consulting",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emptyForm = { name: "", email: "", projectType: "", message: "" };

// The WhatsApp link in data.js is still a placeholder number: hide it until
// it is real rather than show visitors a dead link.
const hasWhatsApp = !/X{3,}/.test(profile.whatsapp);

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Enter your name.";
  if (!form.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = "Enter an email like name@company.com.";
  if (form.message.trim().length < 10) errors.message = "Tell me a little about the project (10+ characters).";
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div className="et-field">
      <label htmlFor={id} className="label-lg">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="label-lg et-field__error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    if (errors[e.target.name]) setErrors(validate(next));
  };

  const composeMailto = () => {
    const subject = encodeURIComponent(
      `Project inquiry${form.projectType ? `: ${form.projectType}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    if (!FORMSPREE_ENDPOINT) {
      composeMailto();
      setStatus("sent-mail");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("error");
      composeMailto();
    }
  };

  const field = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <>
      <PageHeader
        trail={[{ name: "Contact", href: "/contact" }]}
        media={{ ...photos.avatar, caption: `${profile.location} · UTC+6` }}
        title="Contact"
        lede="Have a project in mind? Book a free 15-minute discovery call, or send the details and I will reply with an approach and a rough timeline, usually within a day."
      />

      <section className="et-section" aria-labelledby="send-message">
        <div className="et-container et-contact">
          <Reveal>
            <Intro index="01" title="Send a message" id="send-message" />
            <form className="et-form" onSubmit={onSubmit} noValidate>
              <div className="et-form__row">
                <Field id="name" label="Your name" error={errors.name}>
                  <input className="et-input" type="text" autoComplete="name" placeholder="Jane Doe" {...field("name")} />
                </Field>
                <Field id="email" label="Your email" error={errors.email}>
                  <input className="et-input" type="email" autoComplete="email" placeholder="jane@company.com" {...field("email")} />
                </Field>
              </div>
              <Field id="projectType" label="Project type (optional)">
                <div className="et-select">
                  <select className="et-input" {...field("projectType")}>
                    <option value="">Select a project type</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden="true" />
                </div>
              </Field>
              <Field id="message" label="Project details" error={errors.message}>
                <textarea
                  className="et-input"
                  rows={6}
                  placeholder="What are you building, and what does success look like?"
                  {...field("message")}
                />
              </Field>
              <div className="et-btn-row">
                <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>
              <p className="body-sm et-form__status" aria-live="polite">
                {status === "sent" ? "Message sent. Thanks, I will be in touch." : ""}
                {status === "sent-mail" ? "Your email app has opened with the message ready to send." : ""}
                {status === "error" ? "Could not send in-page, so your email app has opened instead." : ""}
              </p>
            </form>
          </Reveal>

          <Reveal className="et-contact__aside" delay={80}>
            <div>
              <Intro index="02" title="Direct" id="direct" />
              <dl className="et-facts">
                <div className="et-facts__row">
                  <dt className="label-lg">Email</dt>
                  <dd className="body-md">
                    <a href={`mailto:${profile.email}`} className="et-link">
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div className="et-facts__row">
                  <dt className="label-lg">Location</dt>
                  <dd className="body-md">{profile.location} · UTC+6</dd>
                </div>
                <div className="et-facts__row">
                  <dt className="label-lg">Call</dt>
                  <dd>
                    <TertiaryLink href={profile.calendly} label="Book a free 15-min call" />
                  </dd>
                </div>
                {hasWhatsApp ? (
                  <div className="et-facts__row">
                    <dt className="label-lg">WhatsApp</dt>
                    <dd>
                      <TertiaryLink href={profile.whatsapp} label="Chat on WhatsApp" />
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
            <div>
              <Intro index="03" title="Elsewhere" id="elsewhere" />
              <ul className="et-cells">
                {professionalProfiles.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="et-cell">
                      <span className="h6">{p.label}</span>
                      <ArrowUpRight {...LINE} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
