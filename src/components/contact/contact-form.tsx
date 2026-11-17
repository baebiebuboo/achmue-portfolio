"use client";

import { useState } from "react";
import { PiArrowRight, PiCheck, PiCopy } from "react-icons/pi";

export const EMAIL = "bonusacharawan@gmail.com";

const field =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-lg text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none focus:ring-0";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the address is still visible to copy by hand */
    }
  }

  return (
    <div>
      <a
        href={`mailto:${EMAIL}`}
        className="break-all font-display text-3xl tracking-tight underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:decoration-cocoa sm:text-4xl"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs tracking-wide text-ink transition-colors hover:border-ink"
      >
        {copied ? <PiCheck /> : <PiCopy />}
        {copied ? "Copied" : "Copy address"}
      </button>
    </div>
  );
}

// No backend needed: submitting opens the visitor's email app with the
// message pre-filled. Swap for Formspree/Resend later if you want
// messages delivered without leaving the site.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("Job opportunity");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${topic} — from ${name}`;
    const body = `${message}\n\n— ${name}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted">
          Your name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={field}
        />
      </div>

      <fieldset>
        <legend className="text-xs uppercase tracking-[0.2em] text-muted">Regarding</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Job opportunity", "Collaboration", "Just saying hi"].map((t) => (
            <label
              key={t}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-1 has-[:focus-visible]:ring-cocoa ${
                topic === t ? "border-ink bg-ink text-cream" : "border-line text-ink hover:border-ink"
              }`}
            >
              <input
                type="radio"
                name="topic"
                value={t}
                checked={topic === t}
                onChange={() => setTopic(t)}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me a little about what you have in mind…"
          className={`${field} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cocoa"
        >
          Send message
          <PiArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-xs text-muted">Opens your email app, ready to send.</p>
      </div>
    </form>
  );
}
