"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rerth } from "./icons";

const HOLD_MS = 2500;

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="animate-spin-slow">
            <Rerth className="w-24 h-24 sm:w-28 sm:h-28 text-amber-300 animate-pulse-glow" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
