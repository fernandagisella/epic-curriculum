"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 3 + (i % 5),
  delay: (i * 0.85) % 10,
  duration: 14 + ((i * 7) % 10),
  tone: i % 3 === 0 ? "bg-amber-300/15" : i % 3 === 1 ? "bg-amber-500/15" : "bg-amber-600/10",
}));

export default function AmbientParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
    >
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          className={`absolute bottom-[-2vh] rounded-full blur-sm shadow-[0_0_8px_2px_rgba(252,211,77,0.25)] ${p.tone}`}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: "-110vh",
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
            times: [0, 0.12, 0.88, 1],
          }}
        />
      ))}
    </div>
  );
}
