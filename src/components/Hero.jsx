"use client";
import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "motion/react";
import { SpinningText } from "./magicui/spinning-text";
import Image from "next/image";

export const Hero = () => {
  return (
    <motion.div className="h-[62vh] w-full relative flex flex-col gap-4 px-18 max-md:px-8 pt-32 max-md:pt-16 mb-24 mx-auto overflow-hidden">
      <Image
        src="/tavolo.svg"
        alt="Beer illustration"
        width={1300}
        height={1300}
        className="absolute -bottom-0 -right-1/4 z-0 opacity-30"
      />
      <SpinningText className={"text-white absolute bottom-18 left-18"}>
        gruppo giovani valmorea
      </SpinningText>
      <div className="text-white text-left flex flex-col max-md:gap-4">
        <p className="text-6xl max-md:text-2xl font-light relative z-10 flex flex-wrap gap-3 items-center">
          <span className="font-medium border-b-4 border-b-orange-300 grid place-content-center">
            23
          </span>
          -
          <span className="font-medium border-b-4 border-b-emerald-300 grid place-content-center">
            24
          </span>
          -
          <span className="font-medium border-b-4 border-b-indigo-300 grid place-content-center">
            25
          </span>
          Maggio 2025
        </p>
        <div className="flex flex-wrap">
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h1"
            className="text-[8rem] max-lg:text-8xl max-md:text-6xl leading-tight relative z-10 font-black text-white uppercase"
          >
            Valmo
          </TextAnimate>
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h1"
            className="text-[8rem] max-lg:text-8xl max-md:text-6xl leading-tight relative z-10 font-black text-white uppercase"
          >
            festival
          </TextAnimate>
        </div>
        <TextAnimate
          delay={0.6}
          animation="slideUp"
          by="line"
          as="h3"
          className="text-2xl max-md:text-xl font-light relative z-10"
        >
          Piazza G. da Caversaccio, Valmorea
        </TextAnimate>
      </div>
    </motion.div>
  );
};
