"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: ""
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "").trim();
    setState(initialState);

    if (!name || !email || !message) {
      setState({
        status: "error",
        message: site.contact.messages.missingFields
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState({
        status: "error",
        message: site.contact.messages.invalidEmail
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${site.owner.email}?subject=${subject}&body=${body}`;

    setState({
      status: "success",
      message: site.contact.messages.success
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-6 sm:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-slate-300">
          {site.contact.form.nameLabel}
          <input
            required
            name="name"
            type="text"
            placeholder={site.contact.form.namePlaceholder}
            className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          {site.contact.form.emailLabel}
          <input
            required
            name="email"
            type="email"
            placeholder={site.contact.form.emailPlaceholder}
            className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          {site.contact.form.messageLabel}
          <textarea
            required
            name="message"
            rows={5}
            placeholder={site.contact.form.messagePlaceholder}
            className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </label>
        <button
          type="submit"
          className="rounded-md bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {site.contact.form.submitLabel}
        </button>
        {state.message ? (
          <p
            className={`text-sm ${
              state.status === "success" ? "text-emerald-300" : "text-rose-300"
            }`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
