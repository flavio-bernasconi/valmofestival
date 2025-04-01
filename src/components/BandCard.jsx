"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BandCard = ({
  cardBackground,
  darkColor,
  darkBorder,
  chipBackground,
  main,
  second,
  date,
}) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-3xl p-4 pt-12 shadow-xl shadow-slate-800",
        cardBackground
      )}
      whileHover={{
        rotate: 5,
        transition: { duration: 0.3 },
      }}
      initial={{ rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <div
        className={cn(
          "absolute -top-5 left-1/2 transform bg-orange-300 -translate-x-1/2 py-1 px-4 rounded-full",
          chipBackground
        )}
      >
        <p className={cn("text-2xl whitespace-nowrap ", darkColor)}>
          {date.weekDay}{" "}
          <span className="font-bold text-3xl">{date.number}</span> {date.month}
        </p>
      </div>
      <div className={cn("space-y-4 ", darkColor)}>
        <div>
          <p className="text-6xl font-semibold leading-14">{main.name}</p>
          <p
            className={cn(
              "text-lg mt-2 border-[1px]   bg-orange-50 w-fit py-0 px-4 rounded-full",
              darkColor,
              darkBorder
            )}
          >
            {main.genre}
          </p>
        </div>
        <div>
          <p className="text-4xl font-medium">{second.name}</p>
          <p
            className={cn(
              "text-lg mt-2 border-[1px]   bg-orange-50 w-fit py-0 px-4 rounded-full",
              darkColor,
              darkBorder
            )}
          >
            {second.genre}
          </p>
        </div>
        <div
          className={cn(
            "absolute -bottom-5 left-1/2 transform bg-orange-300 -translate-x-1/2 py-1 px-4 rounded-full",
            chipBackground
          )}
        >
          <button className={cn("text-lg whitespace-nowrap ", darkColor)}>
            Ascolta
          </button>
        </div>
      </div>
    </motion.div>
  );
};
