import { useState } from "react";
import {
  PHONE, PHONE_DISPLAY, EMAIL, WHATSAPP_LINK,
  ADDRESS_LINE_1, ADDRESS_LINE_2, HOURS, MAP_QUERY, FORM_ENDPOINT,
} from "../data/business.js";

const DEVICE_TYPES = ["Laptop", "Desktop", "MacBook", "All-in-One", "Other"];

const EMPTY_FORM = { name: "", email: "", phone: "", device: "Laptop", issue: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Please enter a phone number.";
    else if (!/^[0-9+\s-]{6,}$/.test(form.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!form.issue.trim()) e.issue = "Tell us briefly what's wrong.";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    if (!FORM_ENDPOINT || FORM_ENDPOINT.includes("PASTE_YOUR")) {
      // Endpoint not configured yet — see APPS_SCRIPT_SETUP.md
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      // Sent as text/plain to avoid a CORS preflight, which Apps Script
      // web apps don't handle. The script parses it as JSON on its end.
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          device: form.device,
          issue: form.issue.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="border-b border-ink/10 bg-teal-900/[0.03]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <p className="section-eyebrow mb-2">Get in touch</p>
          <h1 className="text-3xl md:text-4xl font-semibold max-w-2xl">
            Tell us what's wrong. We'll tell you what it'll take to fix it.
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="bg-card border border-ink/10 rounded-sm p-6 md:p-8">
            {status === "success" && (
              <div className="mb-6 border border-teal-400/40 bg-teal-50 text-teal-700 text-sm rounded-sm px-4 py-3">
                Thanks — your request has been received. A confirmation email is on its way,
                and our team will contact you shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 border border-amber-400/40 bg-amber-50 text-amber-700 text-sm rounded-sm px-4 py-3">
                Something went wrong sending your request. Please call or WhatsApp us directly —
                see the contact details on the right.
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full border border-ink/15 rounded-sm px-3.5 py-2.5 bg-white focus:border-teal-500 outline-none text-sm"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-amber-600 mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full border border-ink/15 rounded-sm px-3.5 py-2.5 bg-white focus:border-teal-500 outline-none text-sm"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-amber-600 mt-1.5">{errors.email}</p>}
                <p className="text-xs text-ink/40 mt-1.5">We'll send your confirmation here.</p>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full border border-ink/15 rounded-sm px-3.5 py-2.5 bg-white focus:border-teal-500 outline-none text-sm"
                  placeholder="+675 ..."
                />
                {errors.phone && <p className="text-xs text-amber-600 mt-1.5">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="device" className="block text-sm font-medium mb-1.5">Device type</label>
                <select
                  id="device"
                  value={form.device}
                  onChange={(e) => update("device", e.target.value)}
                  className="w-full border border-ink/15 rounded-sm px-3.5 py-2.5 bg-white focus:border-teal-500 outline-none text-sm"
                >
                  {DEVICE_TYPES.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium mb-1.5">What's the issue?</label>
                <textarea
                  id="issue"
                  rows={4}
                  value={form.issue}
                  onChange={(e) => update("issue", e.target.value)}
                  className="w-full border border-ink/15 rounded-sm px-3.5 py-2.5 bg-white focus:border-teal-500 outline-none text-sm resize-none"
                  placeholder="e.g. Laptop won't turn on, no display, cracked screen..."
                />
                {errors.issue && <p className="text-xs text-amber-600 mt-1.5">{errors.issue}</p>}
              </div>

              <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "sending" ? "Sending..." : "Request Free Diagnosis"}
              </button>
            </form>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-ink/10 rounded-sm p-6">
            <p className="font-mono text-xs tracking-[0.16em] uppercase text-teal-600 mb-4">Direct contact</p>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-teal-600">
                  <span className="w-9 h-9 rounded-sm bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0122 16.92z" /></svg>
                  </span>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-teal-600">
                  <span className="w-9 h-9 rounded-sm bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.7 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.5-3.9-4.6-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.4.2.4.3.1.2.1.7-.1 1.3z"/></svg>
                  </span>
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-teal-600 break-all">
                  <span className="w-9 h-9 rounded-sm bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6" /></svg>
                  </span>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-ink/10 rounded-sm p-6">
            <p className="font-mono text-xs tracking-[0.16em] uppercase text-teal-600 mb-4">Shop details</p>
            <p className="text-sm text-ink/70 leading-relaxed">{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
            <p className="text-sm text-ink/70 mt-3">{HOURS}</p>
          </div>

          <div className="rounded-sm overflow-hidden border border-ink/10 aspect-video">
            <iframe
              title="Divine IT Solution location"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
