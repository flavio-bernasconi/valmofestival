"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "motion/react";
import { SpotifyPlayer } from "./SpotifyPlayer";
import { AudioLinesIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export const BandCard = ({
  cardBackground,
  darkColor,
  darkBorder,
  chipBackground,
  main,
  second,
  date,
  last,
  third,
  loaderClass,
}) => {
  const [openPlayer, setOpenPlayer] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative rounded-3xl p-4 pt-14 shadow-xl shadow-slate-800",
        cardBackground,
      )}
      // whileHover={{
      //   rotate: 5,
      //   transition: { duration: 0.3 },
      // }}
      // initial={{ rotate: 0 }}
      // transition={{
      //   type: "spring",
      //   stiffness: 300,
      //   damping: 15,
      // }}
    >
      <div
        className={cn(
          "absolute border-2 -top-10 left-1/2 transform bg-orange-300 -translate-x-1/2 py-2 px-8 rounded-full",
          chipBackground,
          darkBorder,
        )}
      >
        <p
          className={cn(
            "text-3xl whitespace-nowrap flex items-center gap-2",
            darkColor,
          )}
        >
          {date.weekDay}
          <span className="font-bold text-4xl">{date.number}</span>
          mag
        </p>
      </div>
      <div className={cn("space-y-8", darkColor)}>
        <div>
          <p className="text-3xl lg:text-4xl font-semibold tracking-[-3px]">
            {second.name}
          </p>
          <div className="flex justify-between items-center mb-4">
            <p
              className={cn(
                "text-lg mt-2 border-[1px] bg-orange-50 w-fit py-0 px-4 rounded-full",
                darkColor,
                darkBorder,
              )}
            >
              {second.genre}
            </p>
            {second.src && (
              <>
                <button
                  className={cn(
                    "text-sm border-[1px] font-semibold text-white px-2 py-1 rounded-lg flex gap-2 items-center cursor-pointer",
                    darkColor,
                    darkBorder,
                  )}
                  onClick={() => {
                    setOpenPlayer((prev) => ({
                      ...prev,
                      [second.name]: !prev[second.name],
                    }));
                  }}
                >
                  <AudioLinesIcon size={14} />
                  Ascolta
                  {openPlayer[second.name] ? (
                    <ChevronUpIcon size={16} />
                  ) : (
                    <ChevronDownIcon size={16} />
                  )}
                </button>
              </>
            )}
          </div>
          {openPlayer[second.name] && (
            <SpotifyPlayer src={second.src} loaderClass={loaderClass} />
          )}
        </div>
        <hr className={cn(darkBorder)} />
        {third && (
          <>
            <div>
              <p className="text-4xl font-semibold tracking-[-3px]">
                {third.name}
              </p>
              <div className="flex justify-between items-center mb-4">
                <p
                  className={cn(
                    "text-lg mt-2 border-[1px] bg-orange-50 w-fit py-0 px-4 rounded-full",
                    darkColor,
                    darkBorder,
                  )}
                >
                  {third.genre}
                </p>
                {third.src && (
                  <>
                    <button
                      className={cn(
                        "text-sm border-[1px] font-semibold text-white px-2 py-1 rounded-lg flex gap-2 items-center cursor-pointer",
                        darkColor,
                        darkBorder,
                      )}
                      onClick={() => {
                        setOpenPlayer((prev) => ({
                          ...prev,
                          [third.name]: !prev[third.name],
                        }));
                      }}
                    >
                      <AudioLinesIcon size={14} />
                      Ascolta
                      {openPlayer[third.name] ? (
                        <ChevronUpIcon size={16} />
                      ) : (
                        <ChevronDownIcon size={16} />
                      )}
                    </button>
                  </>
                )}
              </div>
              {openPlayer[third.name] && (
                <SpotifyPlayer src={third.src} loaderClass={loaderClass} />
              )}
            </div>
            <hr className={cn(darkBorder)} />
          </>
        )}
        <div>
          <p className="text-5xl lg:text-6xl font-bold leading-14 tracking-[-4px]">
            {main.name}
          </p>
          <div className="flex justify-between items-center mb-4">
            <p
              className={cn(
                "text-lg mt-2 border-[1px] bg-orange-50 w-fit py-0 px-4 rounded-full",
                darkColor,
                darkBorder,
              )}
            >
              {main.genre}
            </p>
            {main.src && (
              <>
                <button
                  className={cn(
                    "text-sm border-[1px] font-semibold text-white px-2 py-1 rounded-lg flex gap-2 items-center cursor-pointer",
                    darkColor,
                    darkBorder,
                  )}
                  onClick={() => {
                    setOpenPlayer((prev) => ({
                      ...prev,
                      [main.name]: !prev[main.name],
                    }));
                  }}
                >
                  <AudioLinesIcon size={14} />
                  Ascolta
                  {openPlayer[main.name] ? (
                    <ChevronUpIcon size={16} />
                  ) : (
                    <ChevronDownIcon size={16} />
                  )}
                </button>
              </>
            )}
          </div>
          {openPlayer[main.name] && (
            <SpotifyPlayer src={main.src} loaderClass={loaderClass} />
          )}
        </div>
        {last && (
          <>
            <hr className={cn(darkBorder)} />
            <div>
              <p className="text-3xl font-semibold tracking-[-1px]">
                {last.name}
              </p>
              <p
                className={cn(
                  "text-lg mt-2 border-[1px] bg-orange-50 w-fit py-0 px-4 rounded-full",
                  darkColor,
                  darkBorder,
                )}
              >
                {last.genre}
              </p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
