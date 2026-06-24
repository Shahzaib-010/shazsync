"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    __hideCursorFollower?: (hide: boolean) => void;
  }
}

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });
  const hidden = useRef(false);

  useEffect(() => {
    window.__hideCursorFollower = (hide: boolean) => {
      hidden.current = hide;
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      const dot = dotRef.current;
      if (dot) {
        if (hidden.current) {
          dot.style.opacity = "0";
        } else {
          // lerp factor 0.22 — follows tightly with a subtle trail
          pos.current.x += (mouse.current.x - pos.current.x) * 0.22;
          pos.current.y += (mouse.current.y - pos.current.y) * 0.22;
          dot.style.opacity = "1";
          dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-9999 size-3 rounded-full bg-black"
      style={{ opacity: 0, willChange: "transform" }}
    />
  );
}
