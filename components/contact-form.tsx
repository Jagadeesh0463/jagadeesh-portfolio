"use client";

import { FormEvent, useState, useTransition } from "react";
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
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");
    setState(initialState);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState({
        status: "error",
        message: site.contact.messages.invalidEmail
      });
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
          })
        });

        const result = (await response.json()) as { success?: string; error?: string };

        if (!response.ok) {
          setState({
            status: "error",
            message: result.error ?? site.contact.messages.genericError
          });
          return;
        }

        setState({
          status: "success",
          message: result.success ?? site.contact.messages.success
        });
        form.reset();
      } catch {
        setState({
          status: "error",
          message: site.contact.messages.networkError
        });
      }
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
          disabled={isPending}
          className="rounded-md bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? site.contact.form.pendingLabel : site.contact.form.submitLabel}
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
