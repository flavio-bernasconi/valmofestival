"use client";

import { useMemo } from "react";

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
  { src: "Kasanova.png", alt: "Kasanova" },
  { src: "Studio Postural.png", alt: "Studio Postural" },
  { src: "AMICA NATURA farmacia valmofestival (1).jpg", alt: "Amica Natura" },
  { src: "OtticaZago.jpg", alt: "Ottica Zago" },
  { src: "Tabaccheria_Dany.jpg", alt: "Tabaccheria Dany" },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function SponsorGrid() {
  const allSponsors = useMemo(() => shuffleArray(sponsorsList), []);

  return (
    <div className=" mx-auto p-3">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(250px,4fr))] gap-4">
        {allSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-slate-200 p-4 relative aspect-square overflow-hidden rounded-xl border-2 group hover:border-slate-700 transition-colors"
          >
            <img
              src={`/sponsor/${sponsor.src}`}
              alt={sponsor.alt}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
