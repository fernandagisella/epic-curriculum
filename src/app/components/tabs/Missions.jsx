"use client";

import { ScrollUnfurled, ShepherdsCrook } from "../icons";

const MISSIONS = [
  {
    company: "The Mohara Guild",
    role: "Senior Code Weaver",
    timeline: "Anno 2024 — Present",
    sigil: "Active Campaign",
    lore: "Leading frontend rituals across the guild's enterprise grimoires.",
    deeds: [
      "Forged a design-system citadel adopted by three sibling parties.",
      "Choreographed motion systems that lifted engagement metrics by 38%.",
      "Mentored four apprentices through their first deployment trials.",
    ],
  },
  {
    company: "House of Pixelborne",
    role: "Frontend Sorceress",
    timeline: "Anno 2022 — 2024",
    sigil: "Mission Complete",
    lore: "Crafted client-facing portals and dashboards for fintech wayfarers.",
    deeds: [
      "Migrated a legacy React 16 codebase to Next.js with zero downtime.",
      "Cut bundle weight by 42% via code-splitting and dynamic imports.",
      "Established accessibility audits as a release-gate covenant.",
    ],
  },
  {
    company: "Coven of Clockwork",
    role: "Junior Spellsmith",
    timeline: "Anno 2020 — 2022",
    sigil: "Mission Complete",
    lore: "First foray into production realms — components, forms, and forms of components.",
    deeds: [
      "Shipped 40+ reusable UI primitives across product surfaces.",
      "Authored the onboarding tome read by every new recruit since.",
      "Earned the 'Bug Slayer' chevron in three consecutive quarters.",
    ],
  },
];

function Mission({ mission }) {
  const active = mission.sigil === "Active Campaign";
  return (
    <article className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-amber-900/30 pb-3 mb-3">
        <div>
          <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
            {mission.role}
          </p>
          <h3 className="font-gothic text-xl uppercase tracking-[0.2em] text-amber-200">
            {mission.company}
          </h3>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <span className="font-medieval text-sm text-amber-100/80 italic">
            {mission.timeline}
          </span>
          <span
            className={`font-gothic text-[0.6rem] uppercase tracking-[0.25em] px-2 py-0.5 border ${
              active
                ? "border-emerald-700/60 text-emerald-300/90 bg-emerald-950/30"
                : "border-amber-900/40 text-amber-500/70 bg-amber-950/20"
            }`}
          >
            {mission.sigil}
          </span>
        </div>
      </header>
      <p className="font-medieval italic text-amber-100/70 mb-3 leading-relaxed">
        {mission.lore}
      </p>
      <ul className="flex flex-col gap-2">
        {mission.deeds.map((deed) => (
          <li
            key={deed}
            className="font-medieval text-amber-100/90 flex items-start gap-2"
          >
            <ShepherdsCrook className="w-4 h-4 text-amber-500/70 shrink-0 mt-1" />
            <span>{deed}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Missions() {
  return (
    <div className="flex flex-col gap-5">
      <header className="flex items-center gap-3 pb-2">
        <ScrollUnfurled className="w-6 h-6 text-amber-300" />
        <p className="font-gothic text-xs uppercase tracking-[0.3em] text-amber-500/80">
          Quest Log — Chronological Order
        </p>
      </header>
      {MISSIONS.map((mission) => (
        <Mission key={mission.company} mission={mission} />
      ))}
    </div>
  );
}
