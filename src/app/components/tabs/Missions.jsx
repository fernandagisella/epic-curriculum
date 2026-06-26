"use client";

import {
  ScrollUnfurled,
  ShepherdsCrook,
  ThunderBlade,
  TreasureChest,
  Figurehead,
  Cultist,
  MagicWand,
} from "../icons";

const MISSIONS = [
  {
    name: "The Mohara Voyage",
    role: "Fullstack Sorceress",
    guildType: "Tech Venture Studio",
    timeline: "January 2025 — Present",
    active: true,
    Icon: Figurehead,
    objective:
      "Architect and power a massive resource-management ecosystem for a fleet of cutting-edge electric-motor maritime vessels.",
    loot: [
      "Forged an ultra-fast, type-safe architecture combining Next.js, tRPC, and Drizzle ORM into a powerful monorepo.",
      "Synchronized live data streams to monitor electric-vessel metrics, saving the fleet's guild hours of manual tracking.",
    ],
  },
  {
    name: "The Perficient Chronicles",
    role: "Arcane Developer",
    guildType: "Global IT Consultancy",
    timeline: "June 2022 — October 2024",
    active: false,
    Icon: Cultist,
    objective:
      "Analyze, develop, and maintain a massive large-scale CRM project alongside a multinational party across various time zones.",
    loot: [
      "Enhanced CRM functionality, adding massive business value that earned team-wide recognition from the client's CEO.",
      "Shared profound lore across company-wide events as a speaker in Agile Guild sessions.",
      "Safeguarded the realm by managing multiple environments (Local, Dev, QA, Prod) and casting critical hotfixes under pressure.",
    ],
  },
  {
    name: "The Jalisco Mobile Imagery Quest",
    role: "Full Stack Sorceress · Tester · Business Analyst",
    guildType: "Advertising & Creative Agency",
    timeline: "October 2020 — June 2022",
    active: false,
    Icon: MagicWand,
    objective:
      "Acted as a versatile multi-class hero within an agile team to gather requirements, design interfaces, and build scalable systems.",
    loot: [
      "Gathered and analyzed requirements from stakeholders to forge crystal-clear development tasks.",
      "Developed robust applications using React, TypeScript, and PostgreSQL, ensuring maintainable codebases.",
      "Conducted manual and functional testing rites to guarantee bug-free, seamless user experiences before production deployment.",
    ],
  },
];

function Mission({ mission }) {
  const { Icon } = mission;
  return (
    <article className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-amber-900/30 pb-3 mb-3">
        <div className="flex items-center gap-3">
          <Icon className="w-8 h-8 text-amber-300 shrink-0" />
          <div>
            <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
              Campaign
            </p>
            <h3 className="font-gothic text-xl uppercase tracking-[0.2em] text-amber-200">
              {mission.name}
            </h3>
          </div>
        </div>
        <div className="flex flex-col sm:items-end gap-1.5">
          <span className="font-medieval text-sm italic text-amber-100/80">
            {mission.timeline}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 font-gothic text-[0.6rem] uppercase tracking-[0.25em] px-2 py-0.5 border ${
              mission.active
                ? "border-emerald-700/60 text-emerald-300/90 bg-emerald-950/30"
                : "border-amber-700/60 text-amber-300/90 bg-amber-950/30"
            }`}
          >
            {mission.active ? (
              <ThunderBlade className="w-3.5 h-3.5" />
            ) : (
              <TreasureChest className="w-3.5 h-3.5" />
            )}
            {mission.active ? "Active Campaign" : "Mission Complete"}
          </span>
        </div>
      </header>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <dt className="font-gothic text-[0.6rem] uppercase tracking-[0.3em] text-amber-500/80">
            Role
          </dt>
          <dd className="font-medieval text-amber-100/90">{mission.role}</dd>
        </div>
        <div>
          <dt className="font-gothic text-[0.6rem] uppercase tracking-[0.3em] text-amber-500/80">
            Guild Type
          </dt>
          <dd className="font-medieval text-amber-100/90">
            {mission.guildType}
          </dd>
        </div>
      </dl>

      <div className="mb-4">
        <p className="font-gothic text-[0.6rem] uppercase tracking-[0.3em] text-amber-500/80 mb-1">
          Quest Objective
        </p>
        <p className="font-medieval italic text-amber-100/90 leading-relaxed">
          {mission.objective}
        </p>
      </div>

      <div>
        <p className="font-gothic text-[0.6rem] uppercase tracking-[0.3em] text-amber-500/80 mb-2">
          Loot & Triumphs Secured
        </p>
        <ul className="flex flex-col gap-2">
          {mission.loot.map((item) => (
            <li
              key={item}
              className="font-medieval text-amber-100/90 flex items-start gap-2"
            >
              <ShepherdsCrook className="w-4 h-4 text-amber-500/70 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Missions() {
  return (
    <div className="flex flex-col gap-5">
      <header className="flex items-center gap-3 pb-2">
        <ScrollUnfurled className="w-6 h-6 text-amber-300" />
        <p className="font-gothic text-xs uppercase tracking-[0.3em] text-amber-500/80">
          Quest Log — Chronological Order (Newest First)
        </p>
      </header>
      {MISSIONS.map((mission) => (
        <Mission key={mission.name} mission={mission} />
      ))}
    </div>
  );
}
