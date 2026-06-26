"use client";

import { Tarot01TheMagician, WitchHat, BookAura } from "../icons";

const ACADEMIES = [
  {
    name: "The Interamerican Tower (UNID)",
    degree: "Master's Degree in Information Technology",
    lore: "Where she perfected the high magics of systems management.",
  },
  {
    name: "The Polytechnic Bastion of San Luis Potosí (UPSLP)",
    degree: "Bachelor's Degree in Information Technology Engineering",
    lore: "The grand academy where her first logical seals and core spells were forged.",
  },
];

function PortraitCard() {
  return (
    <div className="border-2 border-amber-700/60 bg-stone-950/70 p-3 shadow-inner shadow-black/40">
      <div className="relative aspect-square w-full sm:w-48 md:w-56 border-2 border-dashed border-amber-600/50 bg-gradient-to-br from-stone-900 via-amber-950/30 to-stone-900 flex items-center justify-center overflow-hidden">
        <Tarot01TheMagician className="w-28 h-28 text-amber-300/90 drop-shadow-[0_0_18px_rgba(252,211,77,0.4)]" />
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          <WitchHat className="w-4 h-4 text-amber-500/70" />
          <span className="font-gothic text-[0.55rem] uppercase tracking-[0.3em] text-amber-500/70">
            Portrait
          </span>
        </div>
      </div>
    </div>
  );
}

function IdentityCard() {
  return (
    <div className="flex flex-col gap-3 border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
      <div>
        <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
          Character Name
        </p>
        <h2 className="font-gothic text-2xl sm:text-3xl uppercase tracking-[0.2em] text-amber-200 mt-1">
          Fer Pichardo
        </h2>
      </div>
      <div>
        <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
          Class / Title
        </p>
        <p className="font-medieval text-lg text-amber-100/90 mt-0.5">
          Level 8 Frontend Sorceress
        </p>
      </div>
      <div>
        <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80 mb-1.5">
          Alignment
        </p>
        <span className="inline-block font-gothic text-[0.7rem] uppercase tracking-[0.25em] px-3 py-1 border border-emerald-700/60 text-emerald-300/90 bg-emerald-950/30">
          Neutral Good · Chaos Magic Devotee
        </span>
      </div>
    </div>
  );
}

export default function Lore() {
  return (
    <div className="flex flex-col gap-5">
      <section className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-5 items-stretch">
        <PortraitCard />
        <IdentityCard />
      </section>

      <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
        <header className="flex items-center gap-3 border-b border-amber-900/30 pb-3 mb-4">
          <BookAura className="w-6 h-6 text-amber-300" />
          <h3 className="font-gothic text-lg uppercase tracking-[0.25em] text-amber-200">
            Biography
          </h3>
        </header>
        <p className="font-medieval italic text-amber-100/90 leading-relaxed text-base sm:text-lg">
          Born beneath the celestial alignment of ancient logic and creative
          sparks, this Sorceress hath spent eight long years refining the arcane
          arts of the web. Known across the digital realms as a witch who twists
          reality through a glowing screen, she weaves complex responsive
          interfaces with the speed of thought. Beware her gaze, for she can
          debug an entire repository just by squinting at the console. She
          transmutes high-quality coffee and pure passion into flawless,
          pixel-perfect incantations.
        </p>
      </section>

      <section className="border-2 border-amber-900/40 bg-stone-950/60 p-5 shadow-inner shadow-black/40">
        <header className="border-b border-amber-900/30 pb-3 mb-4">
          <p className="font-gothic text-[0.65rem] uppercase tracking-[0.3em] text-amber-500/80">
            Formal Studies
          </p>
          <h3 className="font-gothic text-lg uppercase tracking-[0.25em] text-amber-200">
            Arcane Training
          </h3>
        </header>
        <ul className="flex flex-col gap-4">
          {ACADEMIES.map((a) => (
            <li
              key={a.name}
              className="border border-amber-900/30 bg-stone-900/60 p-4"
            >
              <h4 className="font-gothic text-base uppercase tracking-[0.2em] text-amber-200">
                {a.name}
              </h4>
              <p className="font-medieval text-amber-100/90 mt-1">
                {a.degree}
              </p>
              <p className="font-medieval italic text-sm text-amber-100/70 mt-1">
                {a.lore}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
