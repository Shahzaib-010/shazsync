"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import {
  sendContactEmail,
  type ContactFormState,
} from "../actions/sendContactEmail";

const projectTypes = [
  "Design",
  "Development",
  "Marketing",
  "SEO",
  "Full package",
];

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex h-12 items-center gap-3 rounded-full bg-neutral-950 pl-7 pr-2 text-[13px] font-semibold text-white transition-all hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
      <span className="flex size-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
        <ArrowRight size={14} strokeWidth={2.5} />
      </span>
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  if (state.status === "success") {
    return (
      <div className="flex min-h-[320px] flex-col items-start justify-center gap-5">
        <CheckCircle2 className="text-green-500" size={38} strokeWidth={1.5} />
        <h3 className="text-xl font-medium text-neutral-950">
          Message received
        </h3>
        <p className="max-w-sm text-sm leading-7 text-neutral-600">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-10">
      <div className="space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-neutral-950">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="mt-3 block w-full border-b border-neutral-300 bg-transparent pb-3 text-sm text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-950"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-950">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="john@company.com"
              className="mt-3 block w-full border-b border-neutral-300 bg-transparent pb-3 text-sm text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-950"
            />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-neutral-950">
              Budget
            </label>
            <select
              name="budget"
              defaultValue=""
              className="mt-3 block w-full appearance-none border-b border-neutral-300 bg-transparent pb-3 text-sm text-neutral-950 outline-none transition-colors focus:border-neutral-950"
            >
              <option value="" disabled>
                Select a range
              </option>
              <option>$1k – $3k</option>
              <option>$3k – $7k</option>
              <option>$7k – $15k</option>
              <option>$15k+</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-950">
              Timeline
            </label>
            <select
              name="timeline"
              defaultValue=""
              className="mt-3 block w-full appearance-none border-b border-neutral-300 bg-transparent pb-3 text-sm text-neutral-950 outline-none transition-colors focus:border-neutral-950"
            >
              <option value="" disabled>
                Select timing
              </option>
              <option>ASAP</option>
              <option>2 to 4 weeks</option>
              <option>1 to 2 months</option>
              <option>Flexible</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-xs font-medium text-neutral-950">
          What do you need?
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <label
              key={type}
              className="flex h-10 cursor-pointer items-center rounded-full border border-neutral-200 bg-white px-5 text-[13px] font-medium text-neutral-700 transition-all hover:border-neutral-950 hover:text-neutral-950 has-[:checked]:border-neutral-950 has-[:checked]:bg-neutral-950 has-[:checked]:text-white"
            >
              <input
                type="checkbox"
                name="projectType"
                value={type}
                className="sr-only"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-neutral-950">
          Project details <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project, goals, and any specific requirements."
          className="mt-3 block w-full resize-none border-b border-neutral-300 bg-transparent pb-3 text-sm leading-7 text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-950"
        />
      </div>

      {state.status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle size={15} strokeWidth={2} />
          {state.message}
        </div>
      )}

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
