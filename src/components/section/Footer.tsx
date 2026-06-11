import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe, Share2 } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  const productLinks = [
    { label: 'Product Teams', href: '/product-teams' },
    { label: 'Finance Teams', href: '/finance-teams' },
    { label: 'Data Teams', href: '/data-teams' },
  ];

  const companyLinks = [
    { label: 'Sign up', href: '/signup' },
    { label: 'Login', href: '/login' },
    { label: 'More Templates', href: '/templates' },
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:hello@shazsync.com', label: 'Email' },
    { icon: Globe, href: 'https://shazsync.com', label: 'Website' },
    { icon: Share2, href: 'https://twitter.com', label: 'Share' },
  ];

  return (
    <footer className="bg-[#F6F6F6]  text-black  ">
      <div className="mx-auto max-w-[95%] px-6 py-16 md:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/shazsynclogo.svg"
                alt="Shazsync"
                width={120}
                height={40}
                priority
              />
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
              Manage it all with a fully customizable, no code platform
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-span-1">
            <h3 className="mb-6 text-md font-medium text-black">
              Useful Link
            </h3>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 text-sm hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h3 className="mb-6 text-md font-medium text-black">
              Product
            </h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 text-sm hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="mb-6 text-md font-medium text-black">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 text-sm hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="mb-6 text-md font-medium text-black">
              Follow
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-black transition-colors"
                  >
                    <Icon size={20} strokeWidth={2} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-600 text-sm">
            Copyright © {currentYear} Shazsync. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/terms"
              className="text-neutral-600 text-sm hover:text-black transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="text-neutral-600 text-sm hover:text-black transition-colors"
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