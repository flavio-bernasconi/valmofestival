"use client";

import { useMemo } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const sponsorsList = [
  // Group 1
  {
    src: "Chiacchiere da Caffè - Maddalena Solbiate.jpg",
    alt: "Chiacchiere da Caffè",
  },
  { src: "Comabikes&s.png", alt: "Comabikes" },
  { src: "Studio Bianco.jpg", alt: "Studio Bianco" },
  { src: "EURO MED.jpeg", alt: "EURO MED" },
  { src: "Cantoni Tours.jpg", alt: "Cantoni Tours" },
  { src: "Kame House_page-0001.jpg", alt: "Kame House" },
  // Group 2
  { src: "plaza.jpg", alt: "Bar Plaza" },
  { src: "La Vecchia Filanda.png", alt: "La Vecchia Filanda" },
  { src: "Lucia Galli Fisioterapista Valmofestival.jpg", alt: "Lucia Galli" },
  { src: "Farmacia S Agata_page-0001.jpg", alt: "Farmacia S Agata" },
  { src: "Grotte del sale.png", alt: "Grotte del Sale" },
  { src: "VANITY.jpg", alt: "VANITY" },
  { src: "Andrelab.jpg", alt: "Andrelab" },
  // Group 3
  { src: "Osteria del gatto_page-0001.jpg", alt: "Osteria del Gatto" },
  { src: "PROFUMO DI EVA.jpg", alt: "Profumo di Eva" },
  { src: "RF GARDEN.jpg", alt: "RF Garden" },
  { src: "Serramenti milani.png", alt: "Serramenti Milan" },
  { src: "Formica Garage.jpeg", alt: "Formica Garage" },
  { src: "Enoteca Gusto Uggiate.jpg", alt: "Enoteca Gusto" },
  // Group 4
  { src: "Ottica Marilin-120.jpg", alt: "Ottica Marilin" },
  { src: "QUADRANTI_2026.webp", alt: "Quadranti" },
  { src: "Studio Postural.png", alt: "Studio Postural" },
  { src: "AMICA NATURA farmacia valmofestival (1).jpg", alt: "Amica Natura" },
  { src: "OtticaZago.jpg", alt: "Ottica Zago" },
  { src: "Tabaccheria_Dany.jpg", alt: "Tabaccheria Dany" },
  // New Additions
  { src: "7s giò.webp", alt: "7s giò" },
  { src: "BASIGLIOTTI.jpg", alt: "Basigliotti" },
  { src: "BONNE VIE.webp", alt: "Bonne Vie" },
  { src: "Bar Polisportiva.jpg", alt: "Bar Polisportiva" },
  { src: "CAD_2026.jpg", alt: "CAD" },
  { src: "DENTISTA FERRARI LUCA.jpeg", alt: "Dentista Ferrari Luca" },
  { src: "Mickynoirtattoo.webp", alt: "Mickynoirtattoo" },
  { src: "bar la vela.webp", alt: "Bar La Vela" },
  { src: "Michieletto.webp", alt: "Michieletto" },
  { src: "ayoubi.jpg", alt: "Ayoubi" },
  { src: "Stefanetti.webp", alt: "Stefanetti" },
  { src: "Fattoria-delle-emozioni.webp", alt: "Fattoria delle emozioni " },
  { src: "LA FABBRICA DEL PANE.webp", alt: "LA FABBRICA DEL PANE" },
  { src: "Kimeru.webp", alt: "Kimeru" },
  { src: "kama.png", alt: "Kamaleonte" },
];

console.log(Object.values(sponsorsList).map((sponsor) => sponsor.alt));

const shuffleArray = (array) => {
  const shuffled = [...array];
  // for (let i = shuffled.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  // }
  return shuffled;
};

export function SponsorGrid() {
  const allSponsors = useMemo(() => shuffleArray(sponsorsList), []);

  const sponsorGroups = useMemo(() => {
    const size = Math.ceil(allSponsors.length / 4);
    return [
      allSponsors.slice(0, size),
      allSponsors.slice(size, size * 2),
      allSponsors.slice(size * 2, size * 3),
      allSponsors.slice(size * 3),
    ];
  }, [allSponsors]);

  return (
    <div className="mx-auto p-3">
      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-[repeat(auto-fill,minmax(250px,4fr))] gap-4">
        {allSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white p-4 relative aspect-square overflow-hidden rounded-xl border-2 group hover:border-slate-700 transition-colors"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
              <Image
                src={`/sponsor/${sponsor.src}`}
                alt={sponsor.alt}
                fill
                sizes="(max-width: 1024px) 30vw, 250px"
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Marquee */}
      <div className="lg:hidden flex flex-col gap-6">
        {sponsorGroups.map((group, groupIndex) => (
          <Marquee
            key={groupIndex}
            speed={20 + groupIndex * 10}
            direction={groupIndex % 2 === 0 ? "left" : "right"}
            autoFill={true}
            className="overflow-hidden"
          >
            {group.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white p-4 relative h-40 w-40 shrink-0 overflow-hidden rounded-xl border-2 mx-2"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
                  <Image
                    src={`/sponsor/${sponsor.src}`}
                    alt={sponsor.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
