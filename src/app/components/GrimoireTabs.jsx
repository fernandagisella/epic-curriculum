"use client";

import { useState } from "react";
import {
  WitchHat,
  Tarot01TheMagician,
  SpellBook,
  ScrollUnfurled,
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

export default function GrimoireTabs() {
  const [active, setActive] = useState("lore");
  const ActivePanel = TABS.find((t) => t.id === active).Panel;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <header className="text-center mb-8">
        <h1 className="font-gothic text-3xl sm:text-4xl uppercase tracking-[0.25em] text-amber-200">
          The Grimoire of Fernanda
        </h1>
      </header>

      <div className="flex flex-col gap-5">
        <TabNav active={active} onChange={setActive} />
        <div className="border-2 border-amber-900/40 bg-stone-950/40 p-5 sm:p-6 shadow-inner shadow-black/40 min-h-[24rem]">
          <TabContent tabKey={active}>
            <ActivePanel />
          </TabContent>
        </div>
      </div>
    </div>
  );
}
