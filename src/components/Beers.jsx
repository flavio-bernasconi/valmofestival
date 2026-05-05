"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export const Beers = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "center",
    dragFree: true,
  });

  const images = ["/birre_2.jpg", "/birre_3.jpg", "/birre_4.jpg"];

  return (
    <div className="w-full">
      {/* Mobile / Tablet Carousel */}
      <div className="overflow-hidden md:hidden py-4" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div className="flex-[0_0_80%] min-w-0 shrink-0 pl-4 py-2" key={i}>
              <div className="relative aspect-square w-full shadow-lg rounded-2xl overflow-hidden border-2 border-white">
                <Image
                  src={src}
                  alt="Menu Valmofestival"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
          {/* Spacing for the right side of the last slide */}
          <div className="flex-[0_0_1rem] min-w-0 shrink-0" />
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-col gap-4 px-4 py-8">
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/birre_2.jpg"
            alt="Menu"
            width={500}
            height={500}
            className="rounded-2xl"
          />
          <Image
            src="/birre_3.jpg"
            alt="Menu"
            width={500}
            height={500}
            className="rounded-2xl"
          />
          <Image
            src="/birre_4.jpg"
            alt="Menu"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
