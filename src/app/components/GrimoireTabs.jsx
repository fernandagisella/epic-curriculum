"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  WitchHat,
  Tarot01TheMagician,
  SpellBook,
  ScrollUnfurled,
  DiceTwentyFacesTwenty,
} from "./icons";
import TabContent from "./TabContent";
import Lore from "./tabs/Lore";
import Stats from "./tabs/Stats";
import Spells from "./tabs/Spells";
import Missions from "./tabs/Missions";

const TABS = [
  { id: "lore", label: "Lore", Icon: WitchHat, Panel: Lore },
  { id: "stats", label: "Stats", Icon: Tarot01TheMagician, Panel: Stats },
  { id: "spells", label: "Spells", Icon: SpellBook, Panel: Spells },
  { id: "missions", label: "Missions", Icon: ScrollUnfurled, Panel: Missions },
];

const TITLE_RUNE_GLOW = [
  "drop-shadow(0 0 8px rgba(245, 158, 11, 0.35)) drop-shadow(0 2px 8px rgba(0,0,0,0.8))",
  "drop-shadow(0 0 18px rgba(245, 158, 11, 0.6)) drop-shadow(0 2px 8px rgba(0,0,0,0.8))",
  "drop-shadow(0 0 8px rgba(245, 158, 11, 0.35)) drop-shadow(0 2px 8px rgba(0,0,0,0.8))",
];

const ACTIVE_TAB_GLOW = [
  "drop-shadow(0 0 4px rgba(245, 158, 11, 0.35))",
  "drop-shadow(0 0 12px rgba(245, 158, 11, 0.6))",
  "drop-shadow(0 0 4px rgba(245, 158, 11, 0.35))",
];

function TabButton({ tab, isActive, isLast, onClick, position }) {
  const { Icon } = tab;
  const borderClasses = `${!isLast ? "border-r" : ""} ${position < 2 ? "border-b sm:border-b-0" : ""}`;

  return (
    <motion.button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      animate={
        isActive
          ? { filter: ACTIVE_TAB_GLOW }
          : { filter: "drop-shadow(0 0 0px rgba(245, 158, 11, 0))" }
      }
      transition={
        isActive
          ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.3, ease: "easeOut" }
      }
      className={`flex items-center justify-center gap-2 px-4 py-3 border-amber-900/40 font-gothic text-xs sm:text-sm uppercase tracking-[0.25em] transition-all duration-300 ${borderClasses} ${
        isActive
          ? "text-amber-200 bg-amber-900/20"
          : "text-amber-500/60 hover:text-amber-200 hover:bg-amber-900/10 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{tab.label}</span>
    </motion.button>
  );
}

function TabNav({ active, onChange }) {
  return (
    <nav
      role="tablist"
      aria-label="Grimoire sections"
      className="grid grid-cols-2 sm:grid-cols-4 border border-amber-700/40 bg-stone-950/80 shadow-[0_0_20px_rgba(146,64,14,0.12),inset_0_0_15px_rgba(245,158,11,0.04)]"
    >
      {TABS.map((tab, idx) => (
        <TabButton
          key={tab.id}
          tab={tab}
          isActive={tab.id === active}
          isLast={idx === TABS.length - 1}
          position={idx}
          onClick={() => onChange(tab.id)}
        />
      ))}
    </nav>
  );
}

function InitiativeChip({ rollResult }) {
  if (!rollResult) return null;
  const isCrit = rollResult === 20;
  const isFumble = rollResult === 1;
  const tone = isCrit
    ? "border-amber-300 text-amber-200 bg-amber-950/40 shadow-[0_0_18px_rgba(252,211,77,0.5)]"
    : isFumble
      ? "border-rose-700/60 text-rose-300/90 bg-rose-950/40"
      : "border-amber-700/60 text-amber-300/90 bg-amber-950/30";
  return (
    <div
      className={`inline-flex items-center gap-2 mt-3 px-3 py-1 border font-gothic text-[0.65rem] uppercase tracking-[0.3em] ${tone}`}
    >
      <DiceTwentyFacesTwenty className="w-4 h-4" />
      <span>Initiative Roll · {rollResult}</span>
      {isCrit && <span className="text-amber-300">— Critical!</span>}
      {isFumble && <span className="text-rose-300">— Fumble</span>}
    </div>
  );
}

export default function GrimoireTabs({ rollResult }) {
  const [active, setActive] = useState("lore");
  const ActivePanel = TABS.find((t) => t.id === active).Panel;
  const panelProps = active === "stats" ? { rollResult } : {};

  return (
    <div className="relative w-full max-w-5xl mx-auto my-4 border border-amber-700/40 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7),0_0_40px_rgba(146,64,14,0.22),inset_0_0_25px_rgba(245,158,11,0.06)] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/assets/grunge-background.jpg')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/70 mix-blend-multiply"
      />

      <div className="relative px-4 sm:px-6 py-8">
        <header className="text-center mb-8">
          <motion.h1
            className="font-gothic text-3xl sm:text-4xl uppercase tracking-[0.25em] text-amber-200"
            animate={{ filter: TITLE_RUNE_GLOW }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            The Grimoire of Fer
          </motion.h1>
          <InitiativeChip rollResult={rollResult} />
        </header>

        <div className="flex flex-col gap-5">
          <TabNav active={active} onChange={setActive} />
          <div className="border border-amber-700/40 bg-stone-950/85 p-5 sm:p-6 shadow-[0_0_25px_rgba(146,64,14,0.15),inset_0_0_15px_rgba(245,158,11,0.05)] min-h-[24rem]">
            <TabContent tabKey={active}>
              <ActivePanel {...panelProps} />
            </TabContent>
          </div>
        </div>
      </div>
    </div>
  );
}
