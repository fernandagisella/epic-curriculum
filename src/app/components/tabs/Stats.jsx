"use client";

import { motion } from "framer-motion";
import { WitchFace, Talk, MagicPotion } from "../icons";

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

function ManaBar({ rollResult }) {
  const isCrit = rollResult === 20;
  const isFumble = rollResult === 1;
  const fillPercent = rollResult ? (rollResult / 20) * 100 : 0;
  const targetWidth = `${fillPercent}%`;
  const fillDuration = isFumble ? 3.5 : isCrit ? 1.8 : 1.5;

  const borderClass = isCrit
    ? "border-amber-300 animate-pulse shadow-[0_0_24px_4px_rgba(252,211,77,0.55)]"
    : isFumble
      ? "border-rose-900/60"
      : "border-amber-900/50";
  const fillClass = isFumble
    ? "bg-gradient-to-r from-rose-950 via-rose-800/80 to-amber-700/60"
    : isCrit
      ? "bg-gradient-to-r from-amber-500 via-amber-300 to-amber-100"
      : "bg-gradient-to-r from-amber-800 via-amber-500 to-amber-300";

  return (
    <section
      className={`relative border-2 bg-stone-950/60 p-5 shadow-inner shadow-black/40 transition-colors duration-500 ${borderClass}`}
    >
      <header className="flex items-center gap-3 mb-3">
        <MagicPotion className="w-6 h-6 text-amber-300" />
        <div className="flex-1">
          <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
            Resource Pool
          </p>
          <h3 className="font-gothic text-base sm:text-lg uppercase tracking-[0.25em] text-amber-200">
            Mana <span className="text-amber-500/70">(Coffee Supply)</span>
          </h3>
        </div>
        {rollResult != null && (
          <span className="font-gothic text-xs sm:text-sm uppercase tracking-[0.25em] text-amber-300/90">
            {Math.round(fillPercent)}%
          </span>
        )}
      </header>
      <div className="h-5 border border-amber-900/60 bg-stone-950/80 overflow-hidden">
        <motion.div
          className={`h-full ${fillClass}`}
          initial={{ width: "0%" }}
          animate={{ width: targetWidth }}
          transition={{ duration: fillDuration, ease: "easeOut" }}
        />
      </div>
      <p className="font-medieval italic text-xs text-amber-100/70 mt-2 min-h-[1.25rem]">
        {isCrit
          ? "Natural 20! Mana overflowing — caffeine surges through every keystroke."
          : isFumble
            ? "Critical fumble! The pool is bone-dry — scarce sips remain."
            : rollResult
              ? `Initiative rolled: ${rollResult} — channel running at ${Math.round(fillPercent)}% capacity.`
              : "Channeling the brew..."}
      </p>
    </section>
  );
}

export default function Stats({ rollResult }) {
  return (
    <div className="flex flex-col gap-5">
      <ManaBar rollResult={rollResult} />

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
