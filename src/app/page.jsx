import { BandCard } from "@/components/BandCard";
import { ComingSoonHero } from "@/components/ComingSoon";
import { cn } from "@/lib/utils";
import { Nunito } from "next/font/google";
import Head from "next/head";
import { LineUpItem } from "@/components/LineUpItem";
import { MenuSection } from "@/components/MenuSection";
import Image from "next/image";
import { SponsorGrid } from "@/components/SponsorGrid";
import { Navbar } from "@/components/navbar";
import Button from "@/components/Button";
import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Valmofestival - 22/23/24 Maggio 2026",
  description:
    "Il Valmofestival ritorna il 22/23/24 Maggio 2026, con la sedicesima edizione. Ci vediamo a Valmorea (Como) con tanta musica, cibo e molto altro.",
  keywords: [
    "Valmofestival",
    "valmorea",
    "Festival di musica",
    "eventi Como",
    "eventi Varese",
    "eventi Milano",
    "Sagra di paese",
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google" content="notranslate" />
      </Head>
      <div className={cn("bg-[#ecf6fd] notranslate", nunito.className)}>
        <ComingSoonHero />
        <Navbar />
        <div className="container mx-auto p-8 text-center" id="line-up">
          <p className="text-8xl font-light text-black font-big-custom">
            Line up
          </p>
          <p className="text-xl mb-6 font-medium text-slate-700">
            Inizio concerti 21:00
          </p>
        </div>
        <section
          aria-labelledby="line-up"
          className="p-8 mb-12 grid grid-cols-1 lg:grid-cols-2 min-xl:grid-cols-3 gap-16 mx-auto container min-h-[40vh] items-start font-lore"
        >
          <LineUpItem
            imageSrc="/doodle-2.png"
            alt="Line up"
            width={300}
            height={300}
            className="translate-y-[2%] mx-auto"
          >
            <BandCard
              cardBackground="bg-[#222] shadow-slate-300 border-2 border-[#ff5678]"
              darkColor="text-[#ff5678] lore-bold"
              darkBorder="border-[#ff5678]"
              loaderClass="fill-[#ff5678]"
              chipBackground="bg-[#222]"
              main={{
                name: "Tacobellas",
                genre: "Rockabilly",
                src: "https://open.spotify.com/embed/artist/3LCo398twp9ZnVaV9zd3Zt?utm_source=generator",
              }}
              second={{
                name: "SuperFatGingerCat",
                genre: "Post rock",
                src: "https://open.spotify.com/embed/artist/1ntXPkk7nlvEGNgtHbKmAN?utm_source=generator",
              }}
              last={{ name: "Dj Sofficino", genre: "DJ set" }}
              date={{ weekDay: "Ven", number: 22, month: "Maggio" }}
            />
          </LineUpItem>
          <LineUpItem
            imageSrc="/doodle-3.png"
            alt="Line up"
            width={220}
            height={250}
            className="translate-y-[2%] mx-auto"
          >
            <BandCard
              cardBackground="bg-white shadow-slate-300 border-2 border-[#ff5678]"
              darkColor="text-[#ff5678] lore-bold"
              darkBorder="border-[#ff5678]"
              loaderClass="fill-[#ff5678]"
              chipBackground="bg-white"
              main={{
                name: "RFC",
                genre: "Rockabilly",
                src: "https://open.spotify.com/embed/artist/3LCo398twp9ZnVaV9zd3Zt?utm_source=generator",
              }}
              second={{
                name: "Dicks complainers",
                genre: "Post rock",
                src: "https://open.spotify.com/embed/artist/1ntXPkk7nlvEGNgtHbKmAN?utm_source=generator",
              }}
              third={{ name: "Diplomatics", genre: "DJ set" }}
              last={{ name: "Dj Set", genre: "DJ set" }}
              date={{ weekDay: "Sab", number: 23, month: "Maggio" }}
            />
          </LineUpItem>
          <LineUpItem
            imageSrc="/doodle-5.png"
            alt="Line up"
            width={250}
            height={200}
            className="translate-y-[2%] mx-auto"
          >
            <BandCard
              cardBackground="bg-[#F3EC6B] shadow-slate-300 border-2 border-[#ff5678]"
              darkColor="text-[#ff5678] lore-bold"
              darkBorder="border-[#ff5678]"
              loaderClass="fill-[#ff5678]"
              chipBackground="bg-[#F3EC6B]"
              main={{
                name: "Juda’s kiss",
                genre: "Rockabilly",
                src: "https://open.spotify.com/embed/artist/3LCo398twp9ZnVaV9zd3Zt?utm_source=generator",
              }}
              second={{
                name: "Dalyrium Bay",
                genre: "Post rock",
                src: "https://open.spotify.com/embed/artist/1ntXPkk7nlvEGNgtHbKmAN?utm_source=generator",
              }}
              date={{ weekDay: "Dom", number: 24, month: "Maggio" }}
            />
          </LineUpItem>
        </section>
        <div className="bg-white" id="menù">
          <p className="p-6  text-8xl font-light text-black font-big-custom text-center">
            Menù
          </p>
          <section className="flex flex-col container mx-auto font-lore ">
            <MenuSection
              images={[
                { src: "/gnocchi.png", initialY: "20%" },
                { src: "/gnocchi.png", initialY: "20%" },
                { src: "/gnocchi.png", initialY: "20%" },
              ]}
            >
              <div className="p-8 space-y-6 bg-[#222] z-10 relative rounded-2xl">
                <p className="text-white text-6xl md:text-8xl font-big-custom">
                  Primi
                </p>
                <ul className="flex flex-wrap text-white text-3xl md:text-4xl gap-6 ">
                  <li className="w-full">
                    GNOCCHI con:
                    <ul className="ml-8 space-y-3 mt-3 list-disc">
                      <li>ragù </li>
                      <li>pomodoro </li>
                      <li>burro & salvia </li>
                      <li>radicchio & zola </li>
                    </ul>
                  </li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full flex flex-col items-start gap-4">
                    <span className="text-xl font-bold bg-[#ff5678] text-white px-2 py-1 rounded-md">
                      NOVITÀ
                    </span>{" "}
                    GNOCCHI con ricotta, zucchine e menta
                  </li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Zuppa di cipolle</li>
                </ul>
              </div>
            </MenuSection>
            <MenuSection
              images={[
                { src: "/costine.png", initialY: "20%" },
                { src: "/pollo.png", initialY: "10%" },
                // { src: "/salamella.png", initialY: "15%" },
                { src: "/tomino.png", initialY: "30%" },
              ]}
            >
              <div className="p-8 space-y-6 bg-[#222] z-10 relative rounded-2xl">
                <p className="text-white text-6xl md:text-8xl font-big-custom">
                  Secondi
                </p>
                <ul className="flex flex-wrap text-white text-3xl md:text-4xl gap-4">
                  <li className="w-full">Costine</li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Pollo marinato</li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Grigliata mista</li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Salamella</li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Tomino </li>
                </ul>
              </div>
            </MenuSection>
            <MenuSection
              images={[
                { src: "/patatine.png", initialY: "22%" },
                { src: "/fagioli.png", initialY: "12%" },
                { src: "/cavolo.png", initialY: "40%" },
              ]}
            >
              <div className="p-8 space-y-6 bg-[#222] z-10 relative rounded-2xl">
                <p className="text-white text-6xl md:text-8xl font-big-custom">
                  Contorni
                </p>
                <ul className="flex flex-wrap text-white text-3xl md:text-4xl gap-4">
                  <li className="w-full">Patatine fritte</li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Fantainsalata</li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Cavolo rosso</li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Fagioli</li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full">Fagioli & cipolle</li>
                </ul>
              </div>
            </MenuSection>
            <MenuSection
              images={[
                { src: "/birra-1.png", initialY: "22%" },
                { src: "/vino-2.png", initialY: "12%" },
                { src: "/birra-2.png", initialY: "40%" },
              ]}
            >
              <div className="p-8 space-y-6 bg-[#222] z-10 relative rounded-2xl">
                <p className="text-white text-6xl md:text-8xl font-big-custom">
                  Birre e vini
                </p>
                <ul className="flex flex-wrap text-white text-3xl md:text-4xl gap-4">
                  <li className="w-full flex flex-col gap-2 items-start">
                    <span className="text-xl font-bold bg-[#ff5678] text-white px-2 py-1 rounded-md">
                      Birrificio Italiano
                    </span>{" "}
                    TIPO PILS - BIBOCK
                  </li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full flex flex-col gap-2 items-start">
                    <span className="text-xl font-bold bg-[#ff5678] text-white px-2 py-1 rounded-md">
                      Birrificio Vetra
                    </span>{" "}
                    IPA - Birra chiara
                  </li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full flex flex-col gap-2 items-start">
                    <span className="text-xl font-bold bg-[#ff5678] text-white px-2 py-1 rounded-md">
                      Birrificio Ganter
                    </span>{" "}
                    Badish Hell
                  </li>
                  <hr className="border-[#ff5678] h-1 w-full" />
                  <li className="w-full gap-3 flex flex-col items-start">
                    <span className="text-xl font-bold bg-[#ff5678] text-white px-2 py-1 rounded-md">
                      Speciale Km 0{" "}
                    </span>{" "}
                    Cantina Carbonera (Cavallasca)
                  </li>
                </ul>
              </div>
            </MenuSection>
          </section>
          <section className="bg-[#222] font-lore">
            <div className="container mx-auto p-8">
              <p className="text-xl font-light text-white">
                Ti mandano a prendere il cibo per 10 persone? Segnati l'ordine
                qui e poi dillo in cassa così non dimentichi nulla.
              </p>
              <span className="text-sm text-[#555]">
                Non ti preoccupare, non ti giudichiamo.
              </span>
              <Link
                href="/menu"
                className="mt-3 inline-block bg-white p-2 px-4 rounded-full text-[#222]"
              >
                Segna l'ordine
              </Link>
            </div>
          </section>
        </div>
        <section className="lg:grid lg:grid-cols-3 grid grid-cols-1">
          <div className="relative h-[500px] w-full">
            <Image src="/foto-1.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative h-[500px] w-full">
            <Image src="/foto-3.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative h-[500px] w-full">
            <Image src="/foto-4.jpg" alt="" fill className="object-cover" />
          </div>
        </section>
        <section className="bg-slate-500" id="sponsor">
          <div className="container mx-auto p-8 text-center">
            <p className="text-8xl font-light text-white font-big-custom">
              Sponsor
            </p>
          </div>
          <SponsorGrid />
        </section>

        <footer
          className="text-2xl mt-12 container mx-auto mb-8 p-4 flex flex-col gap-6"
          id="info"
        >
          <div className="flex flex-col gap-1">
            <p className="mb-6 font-bold">Indirizzo</p>
            <p className="">Piazza G. da Caversaccio, 22070 Valmorea CO</p>
          </div>
          <hr />
          <div className="flex flex-col gap-1">
            <p className="mb-6 font-bold">Info utili</p>
            <p>
              Cucine aperte tutte le sere la domenica anche a pranzo su
              prenotazione
            </p>
            <hr />
            <p>I concerti inizieranno dalle 21</p>
            <hr />
            <p>Il menù potrà variare in base alle disponibilità</p>
          </div>
        </footer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1111.2928128553654!2d8.928802529828724!3d45.812466797219756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ4JzQ1LjAiTiA4wrA1NSc0NS40IkU!5e0!3m2!1sit!2sit!4v1745061689635!5m2!1sit!2sit"
          width="100%"
          height="500px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
