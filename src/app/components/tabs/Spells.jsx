"use client";

import { SpellBook, FairyWand, OrbWand } from "../icons";

const CANTRIPS = [
  "HTML5",
  "CSS3",
  "JavaScript (ES2024)",
  "Git & Version Sorcery",
  "Accessibility Runes",
  "Responsive Glyphs",
];

const LEVEL_ONE = [
  "React 19",
  "Next.js (App Router)",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST Incantations",
];

const LEVEL_TWO = [
  "Framer Motion Choreography",
  "State Management (Zustand / Context)",
  "Server Components & Edge Runtimes",
  "Performance Alchemy (Lighthouse 95+)",
  "Design Systems & Tokens",
  "Testing Rites (Vitest / Playwright)",
];

function SpellSection({ Icon, level, title, lore, spells }) {
  return (
    <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
      <header className="flex items-center gap-3 border-b border-amber-900/30 pb-3 mb-4">
        <Icon className="w-6 h-6 text-amber-300" />
        <div>
          <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
            {level}
          </p>
          <h3 className="font-gothic text-lg uppercase tracking-[0.25em] text-amber-200">
            {title}
          </h3>
        </div>
      </header>
      <p className="font-medieval text-sm italic text-amber-100/70 mb-4 leading-relaxed">
        {lore}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
        {spells.map((spell) => (
          <li
            key={spell}
            className="font-medieval text-amber-100/90 flex items-center gap-2 before:content-['✦'] before:text-amber-500/70 before:text-xs"
          >
            {spell}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Spells() {
  return (
    <div className="flex flex-col gap-5">
      <SpellSection
        Icon={SpellBook}
        level="Cantrips"
        title="Mastered Basics"
        lore="The bedrock incantations — drilled until they crackle from the fingertips without thought."
        spells={CANTRIPS}
      />
      <SpellSection
        Icon={FairyWand}
        level="Level I Spells"
        title="Core Libraries"
        lore="The everyday grimoire pages — summoned reliably in every campaign."
        spells={LEVEL_ONE}
      />
      <SpellSection
        Icon={OrbWand}
        level="Level II Spells"
        title="Advanced Arts"
        lore="The high arcana — performance, architecture, and the choreography of motion."
        spells={LEVEL_TWO}
      />
    </div>
  );
}
