"use client";

import { FormEvent, useState, useTransition } from "react";

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
    setState(initialState);

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
            message: result.error ?? "Something went wrong. Please try again."
          });
          return;
        }

        setState({
          status: "success",
          message: result.success ?? "Message sent."
        });
        form.reset();
      } catch {
        setState({
          status: "error",
          message: "Network error. Please try again in a moment."
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Message
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about your idea, role, or collaboration."
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </label>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Sending..." : "Send Message"}
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
