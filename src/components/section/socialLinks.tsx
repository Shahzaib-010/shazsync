import { AtSign, type LucideIcon, X } from "lucide-react";
import type { ComponentType } from "react";

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

function InstagramIcon({ size = 20, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 20, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path
        d="M13.5 7.5h1.8V5.8h-2c-2.2 0-3.6 1.4-3.6 3.8V11H8v2.4h1.7V18h2.5v-4.6h2l.3-2.4h-2.3V9.8c0-1 .4-2.3 1.3-2.3Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function ThreadsIcon({ size = 20, strokeWidth = 2 }: IconProps) {
  return <AtSign size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<IconProps> | LucideIcon;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/shazsync?igsh=MXRkNWExcHhzMWNsdg==",
    icon: InstagramIcon,
  },
  {
    label: "X",
    href: "https://x.com/ShazSync",
    icon: X,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/shazsync",
    icon: FacebookIcon,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@shazsync",
    icon: ThreadsIcon,
  },
];
