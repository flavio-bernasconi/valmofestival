"use client";
import { motion } from "motion/react";
import { TextAnimate } from "./magicui/text-animate";
import Image from "next/image";

export const ComingSoonHero = () => {
  return (
    <motion.div className="pt-16 w-full relative flex flex-col gap-4 mx-auto overflow-hidden">
      <div className=" text-center flex flex-col max-md:gap-4">
        <div className="text-6xl max-md:text-4xl font-light relative z-10 flex flex-wrap gap-3 items-center justify-center">
          <div className="flex gap-3">
            <p className="font-bold font-big-custom grid place-content-center">
              22
              <span className="h-1 w-full bg-[#9f9b2e] rounded-3xl" />
            </p>
            <span className="text-slate-700">|</span>
            <p className="font-bold font-big-custom grid place-content-center">
              23
              <span className="h-1 w-full bg-[#9f9b2e] rounded-3xl" />
            </p>
            <span className="text-slate-700">|</span>
            <p className="font-bold font-big-custom grid place-content-center">
              24
              <span className="h-1 w-full bg-[#9f9b2e] rounded-3xl" />
            </p>
          </div>
          <p className="font-light ml-3">Maggio 2026</p>
        </div>
        <h1 className="sr-only">Valmofestival</h1>
        <p className="text-xl mt-6">Gruppo Giovani Valmorea organizza</p>
        <div className="flex flex-wrap justify-center -mt-6">
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h1"
            className="font-big-custom tracking-[8px] text-[8rem] max-lg:text-8xl max-md:text-7xl relative z-10 font-black  uppercase"
          >
            Valmo
          </TextAnimate>
          <TextAnimate
            delay={0.4}
            animation="slideUp"
            by="line"
            as="h1"
            className="font-big-custom tracking-[8px] text-[8rem] max-lg:text-8xl max-md:text-7xl relative z-10 font-black  uppercase"
          >
            festival
          </TextAnimate>
        </div>
        <TextAnimate
          delay={0.4}
          animation="slideUp"
          by="line"
          as="h3"
          className="font-big-custom text-[4rem] tracking-[4px] max-lg:text-8xl max-md:text-7xl relative z-10 font-black text-[#9f9b2e] uppercase"
        >
          Coming soon
        </TextAnimate>
        <Image
          src="/doodle-1.png"
          alt="Valmofestival"
          width={400}
          height={400}
          className="mt-6 mx-auto"
        />
        {/* <SpinningText
          className={
            "text-2xl font-big-custom  w-full max-md:w-auto"
          }
        >
          gruppo giovani valmorea
        </SpinningText> */}
        {/* <a href="/archive/2024" className="text-xl mt-6 block underline">Scopri cosa ti sei perso l'anno scorso</a> */}
      </div>
    </motion.div>
  );
};
