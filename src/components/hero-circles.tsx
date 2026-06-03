"use client";

import { motion } from "framer-motion";

export default function HeroCircles() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      className="relative flex h-[310px] w-[310px] items-center justify-center"
    >
      {[
        ["h-[300px] w-[300px] bg-[#FFF3C4]", 0],
        ["h-[225px] w-[225px] bg-[#F4C2C2]", 0.2],
        ["h-[165px] w-[165px] bg-[#D4A373]", 0.4],
        ["h-[105px] w-[105px] bg-[#A76F4D]", 0.6],
        ["h-[58px] w-[58px] bg-[#FFE1E1]", 0.8],
      ].map(([style, delay], index) => (
        <motion.div
          key={index}
          animate={{ scale: [1, 1.16, 1] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Number(delay),
          }}
          className={`absolute rounded-full ${style}`}
        />
      ))}
    </motion.div>
  );
}