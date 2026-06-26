"use client";

import { SpellBook, FairyWand, OrbWand, SurroundedShield } from "../icons";

const SECTIONS = [
  {
    Icon: SpellBook,
    level: "Cantrips",
    title: "At-Will Spells",
    cost: "Free to cast · Requires no mana",
    lore: "Cast instantly to manipulate the visual fabric of the ether.",
    spells: ["JavaScript", "HTML5 & CSS3", "React Hooks"],
  },
  {
    Icon: FairyWand,
    level: "Level I Spells",
    title: "Core Sorcery",
    cost: "Her daily combat arsenal",
    lore: "Weaves complex, scalable components and links backend realms seamlessly.",
    spells: ["React.js", "Next.js", "TypeScript", "Node.js", "GraphQL"],
  },
  {
    Icon: OrbWand,
    level: "Level II Spells",
    title: "Ancient Scrolls & Emerging Magic",
    cost: "High arcana · Newly unlocked nodes",
    lore: "Mobile pocket-mirrors, AI-accelerated workflows, type-safe data channels, and commands over both modern and legacy data structures.",
    spells: [
      "React Native",
      "AI-Assisted Development",
      "tRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "SQL",
      "MySQL",
      "KnockoutJS",
    ],
  },
  {
    Icon: SurroundedShield,
    level: "Artifacts & Enchantments",
    title: "Tools and Protections",
    cost: "Equipped at all times",
    lore: "The wardings, certifications, and rituals that gird every campaign.",
    spells: [
      "Git & GitHub (Local · Dev · QA · Production)",
      "Agile Methodologies & Scrum Fundamentals Certification",
      "Manual & Functional Testing Enchantments",
    ],
  },
];

function SpellSection({ section }) {
  const { Icon } = section;
  return (
    <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
      <header className="flex items-center gap-3 border-b border-amber-900/30 pb-3 mb-4">
        <Icon className="w-6 h-6 text-amber-300" />
        <div>
          <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
            {section.level} · {section.cost}
          </p>
          <h3 className="font-gothic text-lg uppercase tracking-[0.25em] text-amber-200">
            {section.title}
          </h3>
        </div>
      </header>
      <p className="font-medieval text-sm italic text-amber-100/70 mb-4 leading-relaxed">
        {section.lore}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
        {section.spells.map((spell) => (
          <li
            key={spell}
            className="font-medieval text-amber-100/90 flex items-start gap-2"
          >
            <span className="text-amber-500/70 text-xs leading-relaxed mt-1">
              ✦
            </span>
            <span>{spell}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Spells() {
  return (
    <div className="flex flex-col gap-5">
      {SECTIONS.map((section) => (
        <SpellSection key={section.level} section={section} />
      ))}
    </div>
  );
}
