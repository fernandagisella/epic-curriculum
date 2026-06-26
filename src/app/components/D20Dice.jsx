"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLL_DURATION = 1200;
const FLICKER_INTERVAL = 70;

const OUTCOMES = {
  criticalSuccess: {
    label: "Critical Success",
    copy: "Critical Hit! The Code Witch casts 'Clean Architecture' while downing a perfect espresso. All bugs in a 50-mile radius instantly vanish, and her Mana (Coffee Supply) is automatically refilled. You gain +5 to Sanity.",
    color: "text-amber-300",
  },
  greatSuccess: {
    label: "Great Success",
    copy: "A masterful roll! Fueled by a fresh-pulled espresso, the Code Witch glides through the seal with practiced ease — variables align, types behave, and the linter holds its tongue. The grimoire opens at thy command.",
    color: "text-amber-200",
  },
  success: {
    label: "Initiative Passed",
    copy: "Initiative passed! The chaos magic flows smoothly (thanks to a fresh cup of coffee). The seals break and the grimoire opens...",
    color: "text-amber-100",
  },
  slimMargin: {
    label: "Slim Margin",
    copy: "By the skin of thy teeth! The chaos magic sputters, the coffee runs cold, but the Witch jury-rigs a passing spell with duct-tape syntax and stubborn willpower. The grimoire creaks open — suspicious of thy fortune.",
    color: "text-amber-500",
  },
  criticalFail: {
    label: "Critical Failure",
    copy: "Alas, a Critical Fail! Thou hast spilled cold brew over the production server. Fear not! The Witch is already casting 'Hot Refactor' to dry the motherboards. Enter at thine own risk!",
    color: "text-rose-400",
  },
};

function classify(roll) {
  if (roll === 20) return "criticalSuccess";
  if (roll >= 15) return "greatSuccess";
  if (roll >= 8) return "success";
  if (roll >= 2) return "slimMargin";
  return "criticalFail";
}

const CRIT_GLOW_KEYFRAMES = [
  "drop-shadow(0 0 6px rgba(252, 211, 77, 0.35)) drop-shadow(0 0 14px rgba(245, 158, 11, 0.25))",
  "drop-shadow(0 0 14px rgba(254, 240, 138, 0.6)) drop-shadow(0 0 28px rgba(245, 158, 11, 0.45)) drop-shadow(0 0 48px rgba(217, 119, 6, 0.3))",
  "drop-shadow(0 0 6px rgba(252, 211, 77, 0.35)) drop-shadow(0 0 14px rgba(245, 158, 11, 0.25))",
];

const LABEL_RUNE_GLOW = [
  "drop-shadow(0 0 6px rgba(245, 158, 11, 0.3))",
  "drop-shadow(0 0 14px rgba(245, 158, 11, 0.55))",
  "drop-shadow(0 0 6px rgba(245, 158, 11, 0.3))",
];

function D20Svg({ value }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="100,12 180,56 180,144 100,188 20,144 20,56"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <polygon
        points="100,56 156,144 44,144"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
        strokeLinejoin="round"
      />
      <line
        x1="100"
        y1="12"
        x2="100"
        y2="56"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="180"
        y1="56"
        x2="156"
        y2="144"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="20"
        y1="56"
        x2="44"
        y2="144"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="100"
        y1="188"
        x2="100"
        y2="144"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <text
        x="100"
        y="115"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        className="font-gothic"
        style={{ fontSize: "58px", fontWeight: 900 }}
      >
        {value}
      </text>
    </svg>
  );
}

export default function D20Dice({ onComplete }) {
  const [phase, setPhase] = useState("rolling");
  const [displayValue, setDisplayValue] = useState(
    () => Math.floor(Math.random() * 20) + 1,
  );
  const [finalValue, setFinalValue] = useState(null);

  useEffect(() => {
    if (phase !== "rolling") return;
    const interval = setInterval(() => {
      setDisplayValue(Math.floor(Math.random() * 20) + 1);
    }, FLICKER_INTERVAL);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      const result = Math.floor(Math.random() * 20) + 1;
      setFinalValue(result);
      setDisplayValue(result);
      setPhase("result");
    }, ROLL_DURATION);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [phase]);

  const outcome = finalValue != null ? classify(finalValue) : null;
  const diceColor =
    outcome === "criticalSuccess"
      ? "text-amber-300"
      : outcome === "greatSuccess"
        ? "text-amber-200"
        : outcome === "success"
          ? "text-amber-100"
          : outcome === "slimMargin"
            ? "text-amber-500"
            : outcome === "criticalFail"
              ? "text-rose-400"
              : "text-amber-200";

  const diceAnimate =
    phase === "rolling"
      ? {
          x: [0, -180, 220, -150, 170, -90, 110, 0],
          y: [0, -130, 80, 150, -90, 110, -40, 0],
          rotate: [0, 220, 540, 820, 1100, 1280, 1400, 1440],
          scale: [1, 0.85, 0.92, 0.88, 0.95, 0.9, 1.05, 1],
        }
      : outcome === "criticalFail"
        ? { x: [0, -16, 16, -12, 12, -6, 6, 0] }
        : outcome === "criticalSuccess"
          ? { scale: [1, 1.08, 1, 1.08, 1], filter: CRIT_GLOW_KEYFRAMES }
          : outcome === "greatSuccess"
            ? {
                scale: [1, 1.06, 1],
                filter: [
                  "drop-shadow(0 0 0 transparent)",
                  "drop-shadow(0 0 16px rgba(252, 211, 77, 0.7))",
                  "drop-shadow(0 0 4px rgba(252, 211, 77, 0.25))",
                ],
              }
            : outcome === "slimMargin"
              ? { x: [0, -6, 6, -4, 4, 0], scale: [1, 1.02, 1] }
              : { scale: [1, 1.04, 1] };

  const diceTransition =
    phase === "rolling"
      ? { duration: ROLL_DURATION / 1000, ease: "easeInOut" }
      : outcome === "criticalFail"
        ? { duration: 0.7, ease: "easeInOut" }
        : outcome === "criticalSuccess"
          ? {
              scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            }
          : outcome === "greatSuccess"
            ? { duration: 1.1, ease: "easeOut" }
            : outcome === "slimMargin"
              ? { duration: 0.8, ease: "easeOut" }
              : { duration: 0.6, ease: "easeOut" };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl">
      <motion.div
        className={`w-44 h-44 sm:w-56 sm:h-56 ${diceColor}`}
        animate={diceAnimate}
        transition={diceTransition}
      >
        <D20Svg value={displayValue} />
      </motion.div>

      <AnimatePresence mode="wait">
        {phase === "result" && outcome && (
          <motion.div
            key={outcome}
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-center flex flex-col items-center gap-5"
          >
            <motion.p
              className={`font-gothic text-xs sm:text-sm uppercase tracking-[0.4em] ${OUTCOMES[outcome].color}`}
              animate={{ filter: LABEL_RUNE_GLOW }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {OUTCOMES[outcome].label} · {finalValue}
            </motion.p>
            <p className="font-medieval italic text-lg sm:text-xl leading-relaxed text-amber-100/90">
              {OUTCOMES[outcome].copy}
            </p>
            <motion.button
              type="button"
              onClick={() => onComplete?.(finalValue)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { duration: 0.6, ease: "easeOut", delay: 0.9 },
              }}
              className="mt-2 inline-flex items-center gap-3 font-gothic text-sm sm:text-base uppercase tracking-[0.35em] text-amber-200 border-2 border-amber-700/60 hover:border-amber-500/80 bg-stone-950/70 hover:bg-amber-900/20 px-8 py-4 shadow-inner shadow-black/40 transition-[border-color,background-color,box-shadow,filter,transform] duration-300 hover:scale-105 active:scale-95 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
            >
              Meet your adventure partner →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
