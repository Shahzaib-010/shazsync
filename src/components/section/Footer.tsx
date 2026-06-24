import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "./socialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "Studio", href: "/studio" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Design", href: "/services/design" },
    { label: "Development", href: "/services/development" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "SEO", href: "/services/seo" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ];

  return (
    <footer className="bg-[#F6F6F6] text-black">
      <div className="mx-auto w-[95%] py-16 md:py-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 inline-flex">
              <Image
                src="/shazsynclogo.svg"
                alt="Shazsync"
                width={120}
                height={40}
                priority
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-600">
              A full-service creative agency combining design, development,
              marketing, and SEO — everything working together, in sync.
            </p>
          </div>

          {/* Explore */}
          <div className="col-span-1">
            <h3 className="mb-6 text-sm font-semibold text-black">Explore</h3>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="mb-6 text-sm font-semibold text-black">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="mb-6 text-sm font-semibold text-black">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="col-span-1">
            <h3 className="mb-6 text-sm font-semibold text-black">Follow</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 transition-colors hover:text-black"
                  >
                    <Icon size={20} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-neutral-200" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-neutral-600">
            © {currentYear} Shazsync. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/terms"
              className="text-sm text-neutral-600 transition-colors hover:text-black"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-neutral-600 transition-colors hover:text-black"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
