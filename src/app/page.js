"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiceTwentyFacesTwenty } from "./components/icons";
import GrimoireTabs from "./components/GrimoireTabs";
import D20Dice from "./components/D20Dice";
import AmbientParticles from "./components/AmbientParticles";
import CursorTrail from "./components/CursorTrail";

const PROSE =
  "Hail, brave Traveler! Thou hast stumbled upon the Great Rift of Hackathon 2026. The path ahead is perilous, dark, and plagued with legacy code. Servers crash, databases wither, and bugs lurk deep within the shadows... It is dangerous to go alone! Take them with thee:";

const PROSE_WORDS = PROSE.split(" ");

const STAGGER = 0.045;
const PROSE_DELAY = 0.15;
const NAME_DELAY = PROSE_DELAY + PROSE_WORDS.length * STAGGER + 0.25;
const NAME_DURATION = 0.9;
const BUTTON_DELAY = NAME_DELAY + NAME_DURATION + 0.35;

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
  "0 0 20px rgba(252, 211, 77, 1), 0 0 48px rgba(245, 158, 11, 0.95), 0 0 90px rgba(217, 119, 6, 0.75), 0 0 150px rgba(180, 83, 9, 0.5)",
  "0 0 34px rgba(254, 240, 138, 1), 0 0 76px rgba(252, 211, 77, 1), 0 0 130px rgba(245, 158, 11, 1), 0 0 200px rgba(217, 119, 6, 0.85)",
  "0 0 16px rgba(252, 211, 77, 0.95), 0 0 40px rgba(245, 158, 11, 0.85), 0 0 78px rgba(217, 119, 6, 0.6)",
  "0 0 44px rgba(254, 252, 232, 1), 0 0 92px rgba(252, 211, 77, 1), 0 0 160px rgba(245, 158, 11, 1), 0 0 240px rgba(217, 119, 6, 0.9)",
  "0 0 22px rgba(252, 211, 77, 1), 0 0 52px rgba(245, 158, 11, 0.9), 0 0 100px rgba(217, 119, 6, 0.7)",
  "0 0 30px rgba(254, 240, 138, 1), 0 0 70px rgba(245, 158, 11, 1), 0 0 120px rgba(217, 119, 6, 0.85)",
  "0 0 20px rgba(252, 211, 77, 1), 0 0 48px rgba(245, 158, 11, 0.95), 0 0 90px rgba(217, 119, 6, 0.75), 0 0 150px rgba(180, 83, 9, 0.5)",
];

const viewTransitions = {
  initial: { opacity: 0, scale: 1.04, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(10px)",
    transition: { duration: 0.55, ease: "easeIn" },
  },
};

const INTRO_DELAY_MS = 2500;

export default function Home() {
  const [view, setView] = useState("welcome");
  const [rollResult, setRollResult] = useState(null);
  const [introReady, setIntroReady] = useState(false);
  const rollSoundRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIntroReady(true), INTRO_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const startRoll = () => {
    if (!rollSoundRef.current) {
      rollSoundRef.current = new Audio("/assets/roll.mp3");
      rollSoundRef.current.volume = 0.6;
    }
    rollSoundRef.current.currentTime = 0;
    rollSoundRef.current.play().catch((err) => {
      console.warn("Roll sound playback failed:", err);
    });
    // Let the sound "announce" the roll before the view transitions.
    setTimeout(() => setView("rolling"), 300);
  };

  const stopRollSound = () => {
    const audio = rollSoundRef.current;
    if (!audio || audio.paused) return;
    const startVolume = audio.volume;
    const start = performance.now();
    const fadeMs = 220;
    const fade = () => {
      const t = Math.min((performance.now() - start) / fadeMs, 1);
      audio.volume = startVolume * (1 - t);
      if (t < 1) {
        requestAnimationFrame(fade);
      } else {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = startVolume;
      }
    };
    requestAnimationFrame(fade);
  };

  return (
    <>
      <AmbientParticles />
      <CursorTrail />
      <AnimatePresence mode="wait">
        {view === "rolling" && (
          <motion.main
            key="rolling"
            initial={viewTransitions.initial}
            animate={viewTransitions.animate}
            exit={viewTransitions.exit}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-8 p-8"
          >
            <D20Dice
              onRollEnd={stopRollSound}
              onComplete={(value) => {
                setRollResult(value);
                setView("grimoire");
              }}
            />
          </motion.main>
        )}

        {view === "grimoire" && (
          <motion.main
            key="grimoire"
            initial={{ opacity: 0, scale: 1.06, filter: "blur(14px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              transition: { duration: 0.9, ease: "easeOut" },
            }}
            exit={viewTransitions.exit}
            className="relative z-10 min-h-screen flex flex-col items-center gap-6 p-4 sm:p-8"
          >
            <button
              onClick={() => setView("welcome")}
              className="self-start font-gothic text-xs uppercase tracking-[0.3em] text-amber-500/80 hover:text-amber-200 border-2 border-amber-900/40 hover:border-amber-700/60 bg-stone-950/60 px-4 py-2 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
            >
              ← Return to the Rift
            </button>
            <GrimoireTabs rollResult={rollResult} />
          </motion.main>
        )}

        {view === "welcome" && introReady && (
          <motion.main
            key="welcome"
            initial={viewTransitions.initial}
            animate={viewTransitions.animate}
            exit={viewTransitions.exit}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-12 p-8"
          >
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
              <span className="relative inline-block mt-4">
                <motion.span
                  className="relative inline-block text-amber-100"
                  initial={{ opacity: 0, filter: "blur(14px)", y: 10 }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                    textShadow: NAME_GLOW_KEYFRAMES,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.9,
                      delay: NAME_DELAY,
                      ease: "easeOut",
                    },
                    filter: {
                      duration: 0.9,
                      delay: NAME_DELAY,
                      ease: "easeOut",
                    },
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
              </span>
            </motion.h2>

            <motion.button
              onClick={startRoll}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: BUTTON_DELAY,
                },
              }}
              className="inline-flex items-center gap-3 font-gothic text-sm sm:text-base uppercase tracking-[0.35em] text-amber-200 border-2 border-amber-700/60 hover:border-amber-500/80 bg-stone-950/70 hover:bg-amber-900/20 px-8 py-4 shadow-inner shadow-black/40 transition-[border-color,background-color,box-shadow,filter,transform] duration-300 hover:scale-105 active:scale-95 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
            >
              <DiceTwentyFacesTwenty className="w-6 h-6 text-amber-300" />
              Roll Dice for Initiative
            </motion.button>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
