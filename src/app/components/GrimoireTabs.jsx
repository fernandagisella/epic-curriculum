"use client";

import { useState } from "react";
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

function TabNav({ active, onChange }) {
  return (
    <nav
      role="tablist"
      aria-label="Grimoire sections"
      className="grid grid-cols-2 sm:grid-cols-4 border-2 border-amber-900/40 bg-stone-950/60 shadow-inner shadow-black/40"
    >
      {TABS.map((tab, idx) => {
        const isActive = tab.id === active;
        const { Icon } = tab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`flex items-center justify-center gap-2 px-4 py-3 border-amber-900/40 font-gothic text-xs sm:text-sm uppercase tracking-[0.25em] transition-colors duration-200 ${
              idx < TABS.length - 1 ? "border-r" : ""
            } ${idx < 2 ? "border-b sm:border-b-0" : ""} ${
              isActive
                ? "text-amber-200 bg-amber-900/20"
                : "text-amber-500/60 hover:text-amber-200 hover:bg-amber-900/10"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        );
      })}
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
    <div className="relative w-full max-w-5xl mx-auto my-4 border-2 border-amber-900/60 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] overflow-hidden">
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
            <h1 className="font-gothic text-3xl sm:text-4xl uppercase tracking-[0.25em] text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              The Grimoire of Fernanda
            </h1>
            <InitiativeChip rollResult={rollResult} />
          </header>

          <div className="flex flex-col gap-5">
            <TabNav active={active} onChange={setActive} />
            <div className="border-2 border-amber-900/40 bg-stone-950/60 p-5 sm:p-6 shadow-inner shadow-black/40 min-h-[24rem]">
              <TabContent tabKey={active}>
                <ActivePanel {...panelProps} />
              </TabContent>
            </div>
          </div>
        </div>
      </div>
  );
}
