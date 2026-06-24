import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Shazsync",
  description:
    "Start your project with Shazsync. Tell us what you need and we'll come back with a simple, focused next step.",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-[95%] pb-24 pt-24 md:pb-32 md:pt-28">
        <h1 className="max-w-4xl text-[clamp(3.25rem,5vw,4.9rem)] leading-[0.9] tracking-0 text-neutral-950">
          Get in Touch
        </h1>

        <div className="mt-20 grid gap-10 md:grid-cols-[0.75fr_1fr_1fr] md:gap-12 lg:gap-16">
          <p className="pl-10 text-sm leading-7 text-neutral-600 md:pt-1">
            ↳ Let&apos;s collaborate
          </p>

          <p className="max-w-md text-sm leading-7 text-neutral-600">
            Have a project in mind? We&apos;d love to hear about it. Tell us
            what you need and we&apos;ll come back with a simple, focused next
            step.
          </p>

          <p className="max-w-md text-sm leading-7 text-neutral-600">
            From initial concept to final delivery, we make the process easy.
            Every message gets a reply within 24 hours.
          </p>
        </div>

        <div className="ml-auto mt-28 max-w-3xl lg:mt-36">
          <ContactForm />
        </div>

        <div className="mx-auto mt-20 max-w-5xl lg:mt-24">
          <div className="grid gap-10 border-t border-neutral-200 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs font-medium text-neutral-950">Email us</p>
              <a
                href="mailto:shazsync@gmail.com"
                className="mt-2 block text-sm text-neutral-500 transition-colors hover:text-neutral-950"
              >
                shazsync@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-medium text-neutral-950">
                Response time
              </p>
              <p className="mt-2 text-sm text-neutral-500">Within 24 hours</p>
            </div>

            <div>
              <p className="text-xs font-medium text-neutral-950">
                Availability
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Mon – Fri, 9am – 6pm
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-neutral-950">Location</p>
              <p className="mt-2 text-sm text-neutral-500">Remote worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
