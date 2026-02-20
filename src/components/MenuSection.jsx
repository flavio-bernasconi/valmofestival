"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export const MenuSection = ({ images, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Individual "wavy" transforms for each image
  const wave1 = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 20, -40]);
  const wave2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 60, 20]);
  const wave3 = useTransform(scrollYProgress, [0, 0.5, 1], [10, 30, 40]);

  const waves = [wave1, wave2, wave3];

  return (
    <motion.div
      ref={containerRef}
      className="mx-auto cursor-pointer relative overflow-x-hidden"
      initial="initial"
      // whileHover="hover"
      animate="initial"
    >
      <div className="flex relative z-0 max-md:h-[160px] items-center justify-center">
        {images.map((img, index) => (
          <motion.div
            key={index}
            style={{
              y: waves[index % waves.length],
            }}
            // variants={{
            //   initial: { y: img.initialY },
            //   hover: { y: "0%" },
            // }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: index * 0.05,
            }}
            className={`
              lg:relative lg:w-[400px] lg:h-[400px]
              max-md:absolute max-md:w-60 max-md:h-60
              ${index === 0 ? "max-md:z-30 max-md:-translate-x-32" : ""}
              ${index === 1 ? "max-md:z-20 max-md:translate-x-0" : ""}
              ${index === 2 ? "max-md:z-10 max-md:translate-x-32" : ""}
              ${index > 0 ? "hidden lg:block max-md:block" : "block"}
            `}
          >
            <Image
              src={img.src}
              alt=""
              width={400}
              height={400}
              className="object-contain w-full h-full drop-shadow-xl"
            />
          </motion.div>
        ))}
      </div>
      <div className=" bg-[#222] z-10 relative rounded-2xl max-w-2xl m-8 lg:mx-auto">
        {children}
      </div>
    </motion.div>
  );
};
