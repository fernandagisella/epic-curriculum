"use client";

import { WitchFace, Talk } from "../icons";

const LANGUAGES = [
  {
    name: "Spanish",
    cert: "Native Mastery · C2",
    level: 100,
    lore: "The mother tongue. Channeled for high-level spellcasting, leadership, and flawless party coordination.",
  },
  {
    name: "English",
    cert: "Advanced Arcane Speech · C1/C2 · Cambridge FCE",
    level: 95,
    lore: "Deciphers ancient documentation, speaks before global guilds, and collaborates across distant time zones.",
  },
  {
    name: "French",
    cert: "Intermediate Incantations · B1",
    level: 55,
    lore: "Scribing new syllables into her spellbook.",
  },
  {
    name: "Italian",
    cert: "Apprentice Level",
    level: 25,
    lore: "Currently channeling mana to unlock this linguistic node.",
  },
];

const SOFT_SKILLS = [
  {
    name: "Team Synergy",
    modifier: "+5 Modifier",
    description:
      "Actively collaborates with diverse guild members and shines as a speaker in technical assemblies, such as the Agile Guild sessions.",
  },
  {
    name: "Empathy",
    modifier: "Mastery",
    description:
      "Gathers requirements from mortals and stakeholders, transforming chaotic demands into beautiful, structured code.",
  },
  {
    name: "Resilience",
    modifier: "Max HP",
    description:
      "Survives long campaigns, tight deadlines, and unexpected hotfixes in production environments without losing her spark.",
  },
];

function LanguageBar({ language }) {
  return (
    <li className="flex flex-col gap-2 border-b border-amber-900/20 last:border-b-0 pb-4 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <span className="font-gothic text-base uppercase tracking-[0.2em] text-amber-200">
          {language.name}
        </span>
        <span className="font-gothic text-[0.65rem] uppercase tracking-[0.25em] text-amber-500/80">
          {language.cert}
        </span>
      </div>
      <div className="h-2 border border-amber-900/40 bg-stone-950/80">
        <div
          className="h-full bg-gradient-to-r from-amber-700/70 to-amber-400/80"
          style={{ width: `${language.level}%` }}
        />
      </div>
      <p className="font-medieval italic text-sm text-amber-100/70 leading-relaxed">
        {language.lore}
      </p>
    </li>
  );
}

function SkillRow({ skill }) {
  return (
    <li className="border border-amber-900/30 bg-stone-900/60 p-4 flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h4 className="font-gothic text-base uppercase tracking-[0.2em] text-amber-200">
          {skill.name}
        </h4>
        <span className="self-start sm:self-auto inline-block font-gothic text-[0.65rem] uppercase tracking-[0.25em] px-2.5 py-1 border border-amber-700/60 text-amber-300/90 bg-amber-950/30">
          {skill.modifier}
        </span>
      </div>
      <p className="font-medieval italic text-amber-100/90 leading-relaxed">
        {skill.description}
      </p>
    </li>
  );
}

export default function Stats() {
  return (
    <div className="flex flex-col gap-5">
      <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
        <header className="flex items-center gap-3 border-b border-amber-900/30 pb-3 mb-4">
          <Talk className="w-6 h-6 text-amber-300" />
          <div>
            <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
              Intelligence
            </p>
            <h3 className="font-gothic text-lg uppercase tracking-[0.25em] text-amber-200">
              Languages Spoken
            </h3>
          </div>
        </header>
        <ul className="flex flex-col gap-4">
          {LANGUAGES.map((l) => (
            <LanguageBar key={l.name} language={l} />
          ))}
        </ul>
      </section>

      <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
        <header className="flex items-center gap-3 border-b border-amber-900/30 pb-3 mb-4">
          <WitchFace className="w-6 h-6 text-amber-300" />
          <div>
            <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
              Charisma
            </p>
            <h3 className="font-gothic text-lg uppercase tracking-[0.25em] text-amber-200">
              Soft Skills
            </h3>
          </div>
        </header>
        <ul className="flex flex-col gap-3">
          {SOFT_SKILLS.map((s) => (
            <SkillRow key={s.name} skill={s} />
          ))}
        </ul>
      </section>
    </div>
  );
}
