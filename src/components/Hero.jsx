"use client";
import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "motion/react";
import { SpinningText } from "./magicui/spinning-text";
import Image from "next/image";

export const Hero = () => {
  return (
    <motion.div className="h-[62vh] max-md:h-[67vh] w-full relative flex flex-col gap-4 px-18 max-md:px-8 pt-32 max-md:pt-16 mb-24 mx-auto overflow-hidden">
      <Image
        src="/tavolo.svg"
        alt="Beer illustration"
        width={1300}
        height={1300}
        className="absolute -bottom-0 -right-1/4 z-0 opacity-30"
      />
      <SpinningText
        className={
          "text-white absolute bottom-18 left-1/2 -translate-x-1/2 w-full max-md:w-auto"
        }
      >
        gruppo giovani valmorea
      </SpinningText>
      <div className="text-white text-left flex flex-col max-md:gap-4">
        <div className="text-6xl max-md:text-4xl font-light relative z-10 flex flex-wrap gap-3 items-center">
          <div className="flex gap-3">
            <p className="font-bold grid place-content-center">
              23
              <span className="h-1 w-full bg-orange-300 rounded-3xl" />
            </p>
            <span className="text-slate-700">|</span>
            <p className="font-bold grid place-content-center">
              24
              <span className="h-1 w-full bg-emerald-300 rounded-3xl" />
            </p>
            <span className="text-slate-700">|</span>
            <p className="font-bold grid place-content-center">
              25
              <span className="h-1 w-full bg-indigo-300 rounded-3xl" />
            </p>
          </div>
          <p className="font-light">Maggio 2025</p>
        </div>
        <h1 className="sr-only">Valmofestival</h1>
        <div className="flex flex-wrap max-md:mt-6">
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h1"
            className="text-[8rem] max-lg:text-8xl max-md:text-7xl relative z-10 font-black text-white uppercase"
          >
            Valmo
          </TextAnimate>
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h1"
            className="text-[8rem] max-lg:text-8xl max-md:text-7xl relative z-10 font-black text-white uppercase"
          >
            festival
          </TextAnimate>
        </div>
        <TextAnimate
          delay={0.6}
          animation="slideUp"
          by="line"
          as="h3"
          className="text-2xl max-md:text-xl font-medium relative z-10"
        >
          Piazza G. da Caversaccio, Valmorea
        </TextAnimate>
      </div>
    </motion.div>
  );
};
