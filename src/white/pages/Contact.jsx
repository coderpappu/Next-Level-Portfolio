import { useState } from "react";
import { Helmet } from "react-helmet";
import { GlyphLink, PageTitle, Section } from "../ui";
import { profile } from "../data";

/*
 * Set this to your real Formspree form ID (e.g. "https://formspree.io/f/xabcdefg")
 * to enable in-page submission. Until then the form composes an email instead,
 * which always works and never silently drops a message.
 */
const FORMSPREE_ENDPOINT = "";

const PROJECT_TYPES = [
  "SaaS Application",
  "Custom Web Application",
  "Android Mobile App",
  "AI Automation System",
  "Technical Consulting",
  "Other",
];

const inputClass =
  "w-full rounded-md border border-[color:var(--w-border)] bg-[color:var(--w-elevated)] px-3 py-2 text-sm text-[color:var(--w-heading)] outline-none transition-colors placeholder:text-[color:var(--w-sep)] focus:border-[color:var(--w-heading)]";

const emptyForm = { name: "", email: "", projectType: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const composeMailto = () => {
    const subject = encodeURIComponent(
      `Project inquiry${form.projectType ? `: ${form.projectType}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      composeMailto();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("error");
      composeMailto();
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Pappu Dey</title>
        <meta
          name="description"
          content="Get in touch with Pappu Dey — software engineer and SaaS builder in Chattogram, Bangladesh. Book a free discovery call or send a project brief."
        />
      </Helmet>

      <PageTitle lede="Have a project in mind? Book a free 15-minute discovery call, or send the details and Pappu will reply with an approach and a rough timeline.">
        Contact Pappu Dey
      </PageTitle>

      <Section title="Send a Message">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <label className="flex-1">
              <span className="mb-1 block text-sm">Your name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={inputClass}
              />
            </label>
            <label className="flex-1">
              <span className="mb-1 block text-sm">Your email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={inputClass}
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-1 block text-sm">Project type</span>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select project type</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm">Project details</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What are you building, and what does success look like?"
              className={`${inputClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-chip cursor-pointer !px-4 !py-2 !text-sm disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          <p aria-live="polite" className="text-sm text-[color:var(--w-muted)]">
            {status === "sent" ? "Message sent — thanks, I will be in touch." : ""}
            {status === "error"
              ? "Could not submit in-page; opening your email client instead."
              : ""}
          </p>
        </form>
      </Section>

      <Section title="Direct">
        <ul className="space-y-4 text-sm">
          <li>
            <strong className="text-[color:var(--w-heading)]">Email:</strong>{" "}
            <a
              href={`mailto:${profile.email}`}
              className="hover:underline"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <strong className="text-[color:var(--w-heading)]">Location:</strong>{" "}
            {profile.location}
          </li>
          <li>
            <strong className="text-[color:var(--w-heading)]">
              Book a call:
            </strong>{" "}
            <GlyphLink href={profile.calendly}>
              Free 15-minute discovery call
            </GlyphLink>
          </li>
          <li>
            <strong className="text-[color:var(--w-heading)]">WhatsApp:</strong>{" "}
            <GlyphLink href={profile.whatsapp}>Chat on WhatsApp</GlyphLink>
          </li>
        </ul>
      </Section>

      <Section title="Elsewhere">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <GlyphLink href={profile.github}>GitHub</GlyphLink>
          <GlyphLink href={profile.linkedin}>LinkedIn</GlyphLink>
          <GlyphLink href={profile.facebook}>Facebook</GlyphLink>
          <GlyphLink href={profile.site}>Portfolio</GlyphLink>
        </div>
      </Section>
    </>
  );
};

export default Contact;
