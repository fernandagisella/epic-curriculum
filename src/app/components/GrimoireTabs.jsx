"use client";

import { useState } from "react";
import {
  WitchHat,
  Tarot01TheMagician,
  SpellBook,
  ScrollUnfurled,
  FireGem,
  Talk,
} from "./icons";
import TabContent from "./TabContent";
import Spells from "./tabs/Spells";
import Missions from "./tabs/Missions";
import Loot from "./tabs/Loot";

const TABS = [
  { id: "spells", label: "Spells", Icon: SpellBook, Panel: Spells },
  { id: "missions", label: "Missions", Icon: ScrollUnfurled, Panel: Missions },
  { id: "loot", label: "Loot & Triumphs", Icon: FireGem, Panel: Loot },
];

const STATS = [
  { label: "Level", value: "X — Senior Adept" },
  { label: "Class", value: "Code Weaver / Frontend Sorceress" },
  { label: "Alignment", value: "Chaotic Curious" },
  { label: "Experience", value: "12,400 / 15,000 XP" },
];

const LANGUAGES = [
  { name: "Español", mastery: "Native Tongue", level: 100 },
  { name: "English", mastery: "Fluent Incantation", level: 95 },
  { name: "Português", mastery: "Conversational", level: 60 },
  { name: "TypeScript-ese", mastery: "Daily Dialect", level: 90 },
];

function StatRow({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-amber-900/30 last:border-b-0 py-2">
      <span className="font-gothic text-[0.6rem] uppercase tracking-[0.3em] text-amber-500/80">
        {label}
      </span>
      <span className="font-medieval text-amber-100/90">{value}</span>
    </div>
  );
}

function LanguageBar({ language }) {
  return (
    <li className="flex flex-col gap-1">
      <div className="flex items-baseline justify-between">
        <span className="font-gothic text-sm uppercase tracking-[0.2em] text-amber-200">
          {language.name}
        </span>
        <span className="font-medieval text-xs italic text-amber-100/70">
          {language.mastery}
        </span>
      </div>
      <div className="h-1.5 border border-amber-900/40 bg-stone-950/80">
        <div
          className="h-full bg-amber-500/60"
          style={{ width: `${language.level}%` }}
        />
      </div>
    </li>
  );
}

function CharacterPanel() {
  return (
    <aside className="flex flex-col gap-5">
      <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
        <div className="relative aspect-square w-full border-2 border-dashed border-amber-700/40 bg-stone-900/80 flex items-center justify-center overflow-hidden">
          <Tarot01TheMagician className="w-24 h-24 text-amber-300/80" />
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <WitchHat className="w-4 h-4 text-amber-500/70" />
            <span className="font-gothic text-[0.55rem] uppercase tracking-[0.3em] text-amber-500/70">
              Portrait
            </span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="font-gothic text-[0.6rem] uppercase tracking-[0.3em] text-amber-500/80">
            Adventurer
          </p>
          <h2 className="font-gothic text-xl uppercase tracking-[0.2em] text-amber-200">
            Fernanda Pichardo
          </h2>
          <p className="font-medieval italic text-amber-100/70 text-sm mt-1">
            The Code Weaver Witch
          </p>
        </div>
      </section>

      <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
        <h3 className="font-gothic text-sm uppercase tracking-[0.3em] text-amber-200 border-b border-amber-900/30 pb-2 mb-3">
          Core Stats
        </h3>
        <div className="flex flex-col">
          {STATS.map((s) => (
            <StatRow key={s.label} {...s} />
          ))}
        </div>
      </section>

      <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
        <header className="flex items-center gap-2 border-b border-amber-900/30 pb-2 mb-4">
          <Talk className="w-5 h-5 text-amber-300" />
          <h3 className="font-gothic text-sm uppercase tracking-[0.3em] text-amber-200">
            Language Proficiencies
          </h3>
        </header>
        <ul className="flex flex-col gap-4">
          {LANGUAGES.map((l) => (
            <LanguageBar key={l.name} language={l} />
          ))}
        </ul>
      </section>
    </aside>
  );
}

function TabNav({ active, onChange }) {
  return (
    <nav
      role="tablist"
      aria-label="Grimoire sections"
      className="grid grid-cols-1 sm:grid-cols-3 border-2 border-amber-900/40 bg-stone-950/60 shadow-inner shadow-black/40"
    >
      {TABS.map((tab) => {
        const isActive = tab.id === active;
        const { Icon } = tab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`flex items-center justify-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0 border-amber-900/40 font-gothic text-xs sm:text-sm uppercase tracking-[0.25em] transition-colors duration-200 ${
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
  const [active, setActive] = useState("spells");
  const ActivePanel = TABS.find((t) => t.id === active).Panel;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <header className="text-center mb-8">
        <p className="font-gothic text-xs uppercase tracking-[0.4em] text-amber-500/80">
          Character Sheet — Bound in Living Parchment
        </p>
        <h1 className="font-gothic text-3xl sm:text-4xl uppercase tracking-[0.25em] text-amber-200 mt-2">
          The Grimoire of Fernanda
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CharacterPanel />

        <section className="lg:col-span-2 flex flex-col gap-5">
          <TabNav active={active} onChange={setActive} />
          <div className="border-2 border-amber-900/40 bg-stone-950/40 p-5 sm:p-6 shadow-inner shadow-black/40 min-h-[24rem]">
            <TabContent tabKey={active}>
              <ActivePanel />
            </TabContent>
          </div>
        </section>
      </div>
    </div>
  );
}
