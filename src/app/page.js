"use client";

import {
  DiceTwentyFacesOne,
  DiceTwentyFacesTwenty,
  SpellBook,
  Wizard,
  WitchHat,
  MagicWand,
  FireGem,
  ScrollUnfurled,
  ThunderBlade,
} from "./components/icons";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-12 p-8">
      <h1 className="font-gothic text-5xl md:text-7xl font-black tracking-wider text-amber-200">
        The Grimoire Awaits
      </h1>

      <section className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
        <DiceTwentyFacesOne className="w-20 h-20 text-amber-400" />
        <DiceTwentyFacesTwenty className="w-20 h-20 text-emerald-400" />
        <FireGem className="w-20 h-20 text-rose-400" />
        <ScrollUnfurled className="w-20 h-20 text-amber-200" />
        <ThunderBlade className="w-20 h-20 text-sky-300" />

        <SpellBook className="w-20 h-20 text-amber-300" />
        <Wizard className="w-20 h-20 text-purple-300" />
        <WitchHat className="w-20 h-20 text-fuchsia-400" />
        <MagicWand className="w-20 h-20 text-yellow-200" />
      </section>
    </main>
  );
}
