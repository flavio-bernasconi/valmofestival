"use client";
import { motion } from "motion/react";
import { TextAnimate } from "./magicui/text-animate";
import Image from "next/image";

export const ComingSoonHero = () => {
  return (
    <>
      <motion.div className="pt-16 w-full relative flex flex-col gap-4 mx-auto overflow-hidden bg-white">
        {/* <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Valmofestival Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div> */}
        <div className="text-center flex flex-col max-md:gap-4">
          <div className="text-7xl font-light relative z-10 flex flex-col items-center justify-center">
            <div className="flex gap-3 text-[#ff5678]">
              <p className="font-bold font-big-custom grid place-content-center">
                22
              </p>
              <span className="text-slate-700">|</span>
              <p className="font-bold font-big-custom grid place-content-center">
                23
              </p>
              <span className="text-slate-700">|</span>
              <p className="font-bold font-big-custom grid place-content-center">
                24
              </p>
            </div>
            <p className="font-medium text-[#4B4B4B] text-7xl leading-[3.6rem] mt-5">
              Maggio <span className="font-bold text-2xl">2026</span>
            </p>
          </div>
          <h1 className="sr-only">Valmofestival</h1>
          <div className="flex flex-wrap justify-center mt-4">
            <TextAnimate
              delay={0.4}
              animation="slideUp"
              by="line"
              as="h1"
              className="text-[#262626] font-big-custom tracking-[8px] text-[8rem] max-lg:text-8xl max-md:text-[7.3rem] relative z-10 font-black"
            >
              Valmo
            </TextAnimate>
            <TextAnimate
              delay={0.4}
              animation="slideUp"
              by="line"
              as="h1"
              className="text-[#262626] font-big-custom tracking-[8px] text-[8rem] max-lg:text-8xl max-md:text-[5.4rem] relative z-10 font-black"
            >
              festival
            </TextAnimate>
          </div>

          <p className="text-xl lg:text-4xl font-light mb-6 -mt-1 lg:-mt-3 text-slate-600">
            Piazza G. da Caversaccio, Valmorea
          </p>
          {/* <div className="relative h-[50vh] w-full">
          <Image
            src="/hero.png"
            alt="Valmofestival"
            fill
            className="object-cover"
          />
        </div> */}
          <div className="relative">
            <Image
              src="/doodle-1.png"
              alt="doodlw"
              width={400}
              height={400}
              className="mt-6 mx-auto"
            />
            <Image
              src="/nuvola.png"
              width={400}
              height={400}
              className="absolute bottom-0"
            />
            <Image
              src="/nuvola.png"
              width={400}
              height={400}
              className="absolute bottom-0 left-[10%]"
            />
            <Image
              src="/nuvola.png"
              width={400}
              height={400}
              className="absolute bottom-0 left-[23%]"
            />
            <Image
              src="/nuvola.png"
              width={400}
              height={400}
              className="absolute bottom-0 left-[40%]"
            />
            <Image
              src="/nuvola.png"
              width={400}
              height={400}
              className="absolute bottom-0 left-[55%]"
            />
            <Image
              src="/nuvola.png"
              width={400}
              height={400}
              className="absolute bottom-0 left-[70%]"
            />
            <Image
              src="/nuvola.png"
              width={400}
              height={400}
              className="absolute bottom-0 left-[80%]"
            />
          </div>
          {/* <a href="/archive/2024" className="text-xl mt-6 block underline">Scopri cosa ti sei perso l'anno scorso</a> */}
        </div>
      </motion.div>
    </>
  );
};
