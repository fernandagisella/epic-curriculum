"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  DiceTwentyFacesOne,
  DiceTwentyFacesTwenty,
  SpellBook,
  Wizard,
  WitchHat,
  MagicWand,
  FireGem,
  ScrollUnfurled,
  ThunderBlade,
} from "./components/icons";
import GrimoireTabs from "./components/GrimoireTabs";

export default function Home() {
  const [view, setView] = useState("welcome");

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
      <h2 className="font-gothic text-xl md:text-2xl font-black tracking-wider text-amber-200 text-center max-w-2xl leading-relaxed">
        Hail, brave Traveler! Thou hast stumbled upon the Great Rift of
        Hackathon 2026. The path ahead is perilous, dark, and plagued with
        legacy code. Servers crash, databases wither, and bugs lurk deep within
        the shadows... It is dangerous to go alone! Take her with thee:
        <br />
        <motion.span
          className="block mt-4 text-amber-100"
          animate={{
            textShadow: [
              "0 0 12px rgba(252, 211, 77, 0.9), 0 0 28px rgba(245, 158, 11, 0.7), 0 0 50px rgba(217, 119, 6, 0.5)",
              "0 0 22px rgba(254, 240, 138, 1), 0 0 48px rgba(245, 158, 11, 0.95), 0 0 80px rgba(217, 119, 6, 0.75)",
              "0 0 10px rgba(252, 211, 77, 0.85), 0 0 24px rgba(245, 158, 11, 0.65), 0 0 46px rgba(217, 119, 6, 0.45)",
              "0 0 28px rgba(254, 240, 138, 1), 0 0 60px rgba(252, 211, 77, 1), 0 0 96px rgba(245, 158, 11, 0.9)",
              "0 0 14px rgba(252, 211, 77, 0.95), 0 0 30px rgba(245, 158, 11, 0.75), 0 0 52px rgba(217, 119, 6, 0.55)",
              "0 0 20px rgba(254, 240, 138, 1), 0 0 44px rgba(245, 158, 11, 0.9), 0 0 74px rgba(217, 119, 6, 0.7)",
              "0 0 12px rgba(252, 211, 77, 0.9), 0 0 28px rgba(245, 158, 11, 0.7), 0 0 50px rgba(217, 119, 6, 0.5)",
            ],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.18, 0.32, 0.5, 0.68, 0.84, 1],
          }}
        >
          FER PICHARDO: THE CODE WEAVER WITCH
        </motion.span>
      </h2>

      <button
        onClick={() => setView("grimoire")}
        className="font-gothic text-sm sm:text-base uppercase tracking-[0.35em] text-amber-200 border-2 border-amber-700/60 hover:border-amber-500/80 bg-stone-950/70 hover:bg-amber-900/20 px-8 py-4 shadow-inner shadow-black/40 transition-colors duration-200"
      >
        🎲 Roll Dice for Initiative
      </button>

      <section className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
        <DiceTwentyFacesOne className="w-20 h-20 text-amber-400" />
        <DiceTwentyFacesTwenty className="w-20 h-20 text-emerald-400" />
        <FireGem className="w-20 h-20 text-rose-400" />
        <ScrollUnfurled className="w-20 h-20 text-amber-200" />
        <ThunderBlade className="w-20 h-20 text-sky-300" />

        <SpellBook className="w-20 h-20 text-amber-300" />
        <Wizard className="w-20 h-20 text-purple-300" />
        <WitchHat className="w-20 h-20 text-fuchsia-400" />
        <MagicWand className="w-20 h-20 text-yellow-200" />
      </section>
    </main>
  );
}
