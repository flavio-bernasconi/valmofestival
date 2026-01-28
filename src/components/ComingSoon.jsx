"use client";
import { motion } from "motion/react";
import { SpinningText } from "./magicui/spinning-text";
import { TextAnimate } from "./magicui/text-animate";

export const ComingSoonHero = () => {
  return (
    <motion.div className="h-[80vh] max-md:h-[73vh] w-full relative flex flex-col gap-4 px-18 max-md:px-8 pt-32 max-md:pt-16 mb-24 mx-auto overflow-hidden">
      <SpinningText
        className={
          "text-2xl absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-md:w-auto"
        }
      >
        gruppo giovani valmorea
      </SpinningText>
      <div className=" text-center flex flex-col max-md:gap-4">
        <div className="text-6xl max-md:text-4xl font-light relative z-10 flex flex-wrap gap-3 items-center justify-center">
          <div className="flex gap-3">
            <p className="font-bold grid place-content-center">
              22
              <span className="h-1 w-full bg-[#D3402B] rounded-3xl" />
            </p>
            <span className="text-slate-700">|</span>
            <p className="font-bold grid place-content-center">
              23
              <span className="h-1 w-full bg-[#D3402B] rounded-3xl" />
            </p>
            <span className="text-slate-700">|</span>
            <p className="font-bold grid place-content-center">
              24
              <span className="h-1 w-full bg-[#D3402B] rounded-3xl" />
            </p>
          </div>
          <p className="font-light">Maggio 2026</p>
        </div>
        <h1 className="sr-only">Valmofestival</h1>
        <div className="flex flex-wrap justify-center max-md:mt-6">
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h1"
            className="text-[8rem] max-lg:text-8xl max-md:text-7xl relative z-10 font-black  uppercase"
          >
            Valmo
          </TextAnimate>
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h1"
            className="text-[8rem] max-lg:text-8xl max-md:text-7xl relative z-10 font-black  uppercase"
          >
            festival
          </TextAnimate>
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h3"
            className="text-[6rem] max-lg:text-8xl max-md:text-7xl relative z-10 font-black text-[#D3402B] uppercase"
          >
            Coming soon
          </TextAnimate>
        </div>

        <a href="/archive/2024" className="text-xl mt-6 block underline">Scopri cosa ti sei perso l'anno scorso</a>
      </div>
    </motion.div>
  );
};
