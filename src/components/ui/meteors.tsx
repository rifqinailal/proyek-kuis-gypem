"use client";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = ({ number = 20, className }) => {
  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_, idx) => {
        // Gunakan 100vw agar meteor tersebar di seluruh layar
        const leftPercent = Math.random() * 100; // 0–100% dari lebar layar
        const topStart = -50; // mulai di luar layar (atas)

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "absolute animate-meteor-effect h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: `${topStart}px`,
              left: `${leftPercent}vw`, // posisi horizontal acak di seluruh layar
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
