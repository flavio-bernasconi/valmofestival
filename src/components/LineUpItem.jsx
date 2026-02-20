"use client";

import { motion } from "motion/react";
import Image from "next/image";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const LineUpItem = ({
  imageSrc,
  alt,
  width,
  height,
  className,
  children,
}) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        animate={{
          y: [0, -10, 0, 10, 0],
          rotate: [-5, 5, 0, -5, 5, 0],
        }}
        transition={{
          duration: randomInteger(2, 4),
          repeat: Infinity,
          repeatDelay: randomInteger(1, 3),
          ease: "easeInOut",
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </motion.div>
      {children}
    </div>
  );
};
