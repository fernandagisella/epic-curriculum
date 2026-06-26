"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DiceTwentyFacesTwenty } from "./components/icons";
import GrimoireTabs from "./components/GrimoireTabs";
import D20Dice from "./components/D20Dice";

const PROSE =
  "Hail, brave Traveler! Thou hast stumbled upon the Great Rift of Hackathon 2026. The path ahead is perilous, dark, and plagued with legacy code. Servers crash, databases wither, and bugs lurk deep within the shadows... It is dangerous to go alone! Take her with thee:";

const PROSE_WORDS = PROSE.split(" ");

const STAGGER = 0.045;
const PROSE_DELAY = 0.15;
const NAME_DELAY = PROSE_DELAY + PROSE_WORDS.length * STAGGER + 0.25;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER, delayChildren: PROSE_DELAY },
  },
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 6 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const NAME_GLOW_KEYFRAMES = [
  "0 0 12px rgba(252, 211, 77, 0.9), 0 0 28px rgba(245, 158, 11, 0.7), 0 0 50px rgba(217, 119, 6, 0.5)",
  "0 0 22px rgba(254, 240, 138, 1), 0 0 48px rgba(245, 158, 11, 0.95), 0 0 80px rgba(217, 119, 6, 0.75)",
  "0 0 10px rgba(252, 211, 77, 0.85), 0 0 24px rgba(245, 158, 11, 0.65), 0 0 46px rgba(217, 119, 6, 0.45)",
  "0 0 28px rgba(254, 240, 138, 1), 0 0 60px rgba(252, 211, 77, 1), 0 0 96px rgba(245, 158, 11, 0.9)",
  "0 0 14px rgba(252, 211, 77, 0.95), 0 0 30px rgba(245, 158, 11, 0.75), 0 0 52px rgba(217, 119, 6, 0.55)",
  "0 0 20px rgba(254, 240, 138, 1), 0 0 44px rgba(245, 158, 11, 0.9), 0 0 74px rgba(217, 119, 6, 0.7)",
  "0 0 12px rgba(252, 211, 77, 0.9), 0 0 28px rgba(245, 158, 11, 0.7), 0 0 50px rgba(217, 119, 6, 0.5)",
];

export default function Home() {
  const [view, setView] = useState("welcome");

  if (view === "rolling") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
        <D20Dice onComplete={() => setView("grimoire")} />
      </main>
    );
  }

  if (view === "grimoire") {
    return (
      <main className="min-h-screen flex flex-col items-center gap-6 p-4 sm:p-8">
        <button
          onClick={() => setView("welcome")}
          className="self-start font-gothic text-xs uppercase tracking-[0.3em] text-amber-500/80 hover:text-amber-200 border-2 border-amber-900/40 hover:border-amber-700/60 bg-stone-950/60 px-4 py-2 transition-colors duration-200"
        >
          ← Return to the Rift
        </button>
        <GrimoireTabs />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-12 p-8">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="font-gothic text-xl md:text-2xl font-black tracking-wider text-amber-200 text-center max-w-2xl leading-relaxed"
      >
        {PROSE_WORDS.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
        <br />
        <motion.span
          className="block mt-4 text-amber-100"
          initial={{ opacity: 0, filter: "blur(14px)", y: 10 }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            textShadow: NAME_GLOW_KEYFRAMES,
          }}
          transition={{
            opacity: { duration: 0.9, delay: NAME_DELAY, ease: "easeOut" },
            filter: { duration: 0.9, delay: NAME_DELAY, ease: "easeOut" },
            y: { duration: 0.9, delay: NAME_DELAY, ease: "easeOut" },
            textShadow: {
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.18, 0.32, 0.5, 0.68, 0.84, 1],
              delay: NAME_DELAY,
            },
          }}
        >
          FER PICHARDO: THE CODE WEAVER WITCH
        </motion.span>
      </motion.h2>

      <button
        onClick={() => setView("rolling")}
        className="inline-flex items-center gap-3 font-gothic text-sm sm:text-base uppercase tracking-[0.35em] text-amber-200 border-2 border-amber-700/60 hover:border-amber-500/80 bg-stone-950/70 hover:bg-amber-900/20 px-8 py-4 shadow-inner shadow-black/40 transition-colors duration-200"
      >
        <DiceTwentyFacesTwenty className="w-6 h-6 text-amber-300" />
        Roll Dice for Initiative
      </button>
    </main>
  );
}
