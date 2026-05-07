"use client";

import { useEffect, useRef } from "react";

// Global variable to track if cursor follower should be hidden
let shouldHideFollower = false;

// Make it available globally
if (typeof window !== 'undefined') {
  (window as any).__hideCursorFollower = (hide: boolean) => {
    shouldHideFollower = hide;
  };
}

export default function CursorFollower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const prevX = useRef(0);
  const prevY = useRef(0);
  const velocityX = useRef(0);
  const velocityY = useRef(0);
  const scaleX = useRef(1);
  const scaleY = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Calculate velocity
      velocityX.current = mouseX.current - prevX.current;
      velocityY.current = mouseY.current - prevY.current;

      prevX.current = mouseX.current;
      prevY.current = mouseY.current;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check if we should hide the cursor follower (when hovering work cards)
      if (shouldHideFollower) {
        requestAnimationFrame(animate);
        return;
      }

      // Easing for follower (delay effect) - reduced for slower following
      const easing = 0.08;
      dotX.current += (mouseX.current - dotX.current) * easing;
      dotY.current += (mouseY.current - dotY.current) * easing;

      // Calculate speed magnitude
      const speed = Math.sqrt(
        velocityX.current ** 2 + velocityY.current ** 2
      );

      // Stretch/compress based on speed - reduced stretch effect
      const maxStretch = 1.4;
      const speedFactor = Math.min(speed / 25, 1);
      const stretch = 1 + speedFactor * (maxStretch - 1);

      // Direction angle for stretching
      const angle =
        Math.atan2(velocityY.current, velocityX.current);

      // Easing for scale
      scaleX.current += (stretch - scaleX.current) * 0.2;
      scaleY.current += (1 / stretch - scaleY.current) * 0.2;

      // Reset velocity gradually
      velocityX.current *= 0.92;
      velocityY.current *= 0.92;

      // Draw dot - w-3 h-3 = 12px size, so radius = 6px
      const dotRadius = 8;

      ctx.save();
      ctx.translate(dotX.current, dotY.current);
      ctx.rotate(angle);
      ctx.scale(scaleX.current, scaleY.current);

      // Solid circle
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.beginPath();
      ctx.arc(0, 0, dotRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
