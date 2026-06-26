"use client";

import { FireGem, Rupee, GemChain, MagicPotion } from "../icons";

const LOOT = [
  {
    name: "The Grimoire CV",
    type: "Legendary Artifact",
    Icon: FireGem,
    accent: "text-rose-300",
    rarity: "Mythic",
    lore: "An animated parchment that recites a sorceress's deeds — forged in Next.js, bound in Tailwind, and animated by Framer.",
  },
  {
    name: "Design System Citadel",
    type: "Architectural Triumph",
    Icon: GemChain,
    accent: "text-sky-300",
    rarity: "Epic",
    lore: "A reusable component fortress adopted by sibling crews. Tokens, primitives, and accessibility runes baked in.",
  },
  {
    name: "Performance Elixir",
    type: "Consumable Win",
    Icon: MagicPotion,
    accent: "text-emerald-300",
    rarity: "Rare",
    lore: "Trimmed a legacy bundle by 42% in a single moon — Lighthouse scores ascended into the high nineties.",
  },
  {
    name: "Mentor's Medallion",
    type: "Achievement Badge",
    Icon: Rupee,
    accent: "text-amber-300",
    rarity: "Honored",
    lore: "Awarded for guiding four apprentices from first commit to first production deploy without losing a single one.",
  },
];

function RarityChip({ rarity }) {
  const tone =
    rarity === "Mythic"
      ? "border-rose-700/60 text-rose-300/90 bg-rose-950/30"
      : rarity === "Epic"
        ? "border-sky-700/60 text-sky-300/90 bg-sky-950/30"
        : rarity === "Rare"
          ? "border-emerald-700/60 text-emerald-300/90 bg-emerald-950/30"
          : "border-amber-800/60 text-amber-300/90 bg-amber-950/30";
  return (
    <span
      className={`font-gothic text-[0.6rem] uppercase tracking-[0.25em] px-2 py-0.5 border ${tone}`}
    >
      {rarity}
    </span>
  );
}

function LootCard({ item }) {
  const { Icon } = item;
  return (
    <article className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40 flex flex-col gap-3 transition-colors duration-200 hover:border-amber-700/60">
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon className={`w-8 h-8 ${item.accent}`} />
          <div>
            <p className="font-gothic text-[0.6rem] uppercase tracking-[0.3em] text-amber-500/80">
              {item.type}
            </p>
            <h3 className="font-gothic text-base uppercase tracking-[0.2em] text-amber-200">
              {item.name}
            </h3>
          </div>
        </div>
        <RarityChip rarity={item.rarity} />
      </header>
      <p className="font-medieval italic text-amber-100/80 leading-relaxed">
        {item.lore}
      </p>
    </article>
  );
}

export default function Loot() {
  return (
    <div className="flex flex-col gap-5">
      <header className="flex items-center gap-3 pb-2">
        <FireGem className="w-6 h-6 text-rose-300" />
        <p className="font-gothic text-xs uppercase tracking-[0.3em] text-amber-500/80">
          Treasures, Trophies & Triumphs
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {LOOT.map((item) => (
          <LootCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
