"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  text?: string;
  bgColor?: string;
  textColor?: string;
  dotColor?: string;
  variant?: "dot" | "arrow";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  text = "Start Project",
  bgColor = "bg-[#111111]",
  textColor = "text-white",
  dotColor = "bg-orange-400",
  variant = "dot",
  href,
  onClick,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const className = `
        relative
        group
        inline-flex
        items-center
        gap-4
        px-5
        py-3
        rounded-full
        ${bgColor}
        ${textColor}
        text-sm
        font-light
        tracking-wide
        overflow-hidden
        transition-all
        duration-300
      `;

  const content = (
    <>
      {/* Text */}
      <span className="relative z-10">{text}</span>

      {variant === "arrow" ? (
        <span className="grid size-9 place-items-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={18} strokeWidth={2} />
        </span>
      ) : (
        <span className="relative flex h-3 w-3 items-center justify-center">
          {isHovered && (
            <span
              className={`
                absolute
                h-3
                w-3
                rounded-full
                ${dotColor}
                animate-ping
                opacity-75
              `}
            />
          )}

          <span
            className={`
              relative
              h-1.5
              w-1.5
              rounded-full
              ${dotColor}
            `}
          />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {content}
    </button>
  );
};

export default Button;
