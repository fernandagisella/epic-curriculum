"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const EMIT_INTERVAL = 60;
const PARTICLES_PER_EMIT = 6;
const PARTICLE_LIFE = 0.85;
const MAX_PARTICLES = 60;

let nextId = 0;

export default function CursorTrail() {
  const [particles, setParticles] = useState([]);
  const lastEmit = useRef(0);
  const enabled = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    enabled.current = !isTouch && !mq.matches;

    const onMqChange = (e) => {
      enabled.current = !isTouch && !e.matches;
    };
    mq.addEventListener("change", onMqChange);

    const handleMove = (e) => {
      if (!enabled.current) return;
      const now = performance.now();
      if (now - lastEmit.current < EMIT_INTERVAL) return;
      lastEmit.current = now;

      const burst = [];
      for (let i = 0; i < PARTICLES_PER_EMIT; i++) {
        const size = 3 + Math.random() * 3;
        burst.push({
          id: nextId++,
          x: e.clientX + (Math.random() - 0.5) * 14,
          y: e.clientY + (Math.random() - 0.5) * 14,
          driftX: (Math.random() - 0.5) * 36,
          driftY: -18 - Math.random() * 34,
          size,
        });
      }

      setParticles((prev) => {
        const next =
          prev.length + burst.length > MAX_PARTICLES
            ? [...prev.slice(prev.length + burst.length - MAX_PARTICLES), ...burst]
            : [...prev, ...burst];
        return next;
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      mq.removeEventListener("change", onMqChange);
    };
  }, []);

  const removeParticle = (id) =>
    setParticles((prev) => prev.filter((p) => p.id !== id));

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: p.x - p.size / 2,
            y: p.y - p.size / 2,
            opacity: 0.75,
            scale: 1,
          }}
          animate={{
            x: p.x + p.driftX - p.size / 2,
            y: p.y + p.driftY - p.size / 2,
            opacity: 0,
            scale: 0.4,
          }}
          transition={{ duration: PARTICLE_LIFE, ease: "easeOut" }}
          onAnimationComplete={() => removeParticle(p.id)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: p.size,
            height: p.size,
            willChange: "transform, opacity",
          }}
          className="rounded-full bg-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.7)]"
        />
      ))}
    </div>
  );
}
