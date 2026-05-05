import { BandCard } from "@/components/BandCard";
import { ComingSoonHero } from "@/components/ComingSoon";
import { cn } from "@/lib/utils";
import { Nunito } from "next/font/google";
import Head from "next/head";
import { LineUpItem } from "@/components/LineUpItem";
import Image from "next/image";
import { SponsorGrid } from "@/components/SponsorGrid";
import { Navbar } from "@/components/navbar";
import { SpinningText } from "@/components/magicui/spinning-text";
import Marquee from "react-fast-marquee";
import PdfGallery from "@/components/PdfGallery";

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
      <div
        className={cn("bg-[#ecf6fd] notranslate relative", nunito.className)}
      >
        <img
          src="/texture.jpg"
          alt=""
          className="w-full h-[100svh] fixed top-0 left-0 object-cover scale-150 md:scale-100 mix-blend-overlay z-10 opacity-15 pointer-events-none"
        />
        <img
          src="/texture.jpg"
          alt=""
          className="w-full h-[100svh] fixed top-0 left-0 object-cover scale-150 md:scale-100 z-10 opacity-5 pointer-events-none"
        />
        <ComingSoonHero />
        <SpinningText
          className={"text-xl font-big-custom  w-80 fixed bottom-22 -right-20"}
        >
          gruppo giovani valmorea
        </SpinningText>
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
          className="p-6 mb-12 grid grid-cols-1 lg:grid-cols-2 min-xl:grid-cols-3 mx-auto container min-h-[40vh] items-start font-lore"
        >
          <LineUpItem
            imageSrc="/doodle-2.png"
            alt="Line up"
            width={300}
            height={300}
          >
            <BandCard
              cardBackground="bg-[#222] shadow-slate-300 border-2 border-[#ff5678]"
              darkColor="text-[#ff5678] lore-bold"
              darkBorder="border-[#ff5678]"
              loaderClass="fill-[#ff5678]"
              chipBackground="bg-[#222]"
              main={{
                name: "Tacobellas",
                genre: "Garage punk",
                src: "https://open.spotify.com/embed/artist/7JMqm47MdjGg4TFbsvO8jt?utm_source=generator",
              }}
              second={{
                name: "SuperFatGingerCat",
                genre: "Psych fat rock",
                src: "https://open.spotify.com/embed/artist/3KcFG0eH5vwSUCJUKwqU8s?utm_source=generator",
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
          >
            <BandCard
              cardBackground="bg-white shadow-slate-300 border-2 border-[#ff5678]"
              darkColor="text-[#ff5678] lore-bold"
              darkBorder="border-[#ff5678]"
              loaderClass="fill-[#ff5678]"
              chipBackground="bg-white"
              main={{
                name: "RFC",
                genre: "Ska punk",
                src: "https://open.spotify.com/embed/artist/1bEYD8NIjfrWGAbCNuYfIp?utm_source=generator",
              }}
              second={{
                name: "Dick complainers",
                genre: "Punk n' roll",
                src: "https://open.spotify.com/embed/artist/18uvxK9tceBRDn8aa2uD72?utm_source=generator",
              }}
              third={{
                name: "Diplomatics",
                genre: "Punk,wave, funk",
                src: "https://open.spotify.com/embed/artist/7u737F7bJAIPesy0V4u5gA?utm_source=generator",
              }}
              last={{ name: "Dj Ghibli + Sandro", genre: "DJ set" }}
              date={{ weekDay: "Sab", number: 23, month: "Maggio" }}
            />
          </LineUpItem>
          <LineUpItem
            imageSrc="/doodle-5.png"
            alt="Line up"
            width={250}
            height={200}
            className="mx-auto"
          >
            <BandCard
              cardBackground="bg-[#F3EC6B] shadow-slate-300 border-2 border-[#ff5678]"
              darkColor="text-[#ff5678] lore-bold"
              darkBorder="border-[#ff5678]"
              loaderClass="fill-[#ff5678]"
              chipBackground="bg-[#F3EC6B]"
              main={{
                name: "Juda’s kiss",
                genre: "Ska punk",
                src: "https://open.spotify.com/embed/artist/3Rw34UfxOFFDlfO4yzW1Kt?utm_source=generator",
              }}
              second={{
                name: "Dalyrium Bay",
                genre: "Folk, Punk rock",
                src: "https://open.spotify.com/embed/artist/2Zz92P95DfuurxjcOMPcCE?utm_source=generator",
              }}
              date={{ weekDay: "Dom", number: 24, month: "Maggio" }}
            />
          </LineUpItem>
        </section>
        <div className="bg-white" id="menù">
          <p className="p-6  text-8xl font-light text-black font-big-custom text-center">
            Menù
          </p>
          <PdfGallery />
        </div>
        {/* Mobile Marquee */}
        <div className=" mt-16">
          <Marquee speed={90} autoFill={true}>
            <div className="relative h-[400px] w-[300px] ml-4">
              <Image
                src="/foto-1.jpg"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[400px] w-[300px] ml-4">
              <Image
                src="/foto-3.jpg"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[400px] w-[300px] ml-4">
              <Image
                src="/foto-4.jpg"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[400px] w-[300px] ml-4">
              <Image
                src="/foto-5.jpg"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[400px] w-[300px] ml-4">
              <Image
                src="/foto-6.jpg"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[400px] w-[300px] ml-4">
              <Image
                src="/foto-7.jpg"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </Marquee>
        </div>
        <section className="" id="sponsor">
          <div className="container mx-auto p-8 text-center">
            <p className="text-8xl font-light text-[#222] font-big-custom">
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
            <p className="text-8xl font-light text-black font-big-custom">
              Dove trovarci
            </p>{" "}
            <p className="mt-4 text-4xl">
              Piazza G. da Caversaccio, 22070 Valmorea CO
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-1">
            <p className="mb-6 font-bold">Info utili</p>
            <p>
              Cucine aperte tutte le sere dalle 19:00 circa, la domenica anche a
              pranzo su prenotazione
            </p>
            <hr />
            <p>I concerti inizieranno intorno alle 21:00</p>
            <hr />
          </div>
        </footer>
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1111.2928128553654!2d8.928802529828724!3d45.812466797219756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ4JzQ1LjAiTiA4wrA1NSc0NS40IkU!5e0!3m2!1sit!2sit!4v1745061689635!5m2!1sit!2sit"
            width="100%"
            height="500px"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="py-2 text-xs px-3 text-[#6b6b6b] bg-[#ececec] absolute bottom-0 right-0  rounded-tl-xl">
            <p>Grafiche e sito by Flavio Bernasconi</p>
            <p>
              Illustrazioni{" "}
              <a
                className="underline"
                href="https://www.opendoodles.com/"
                target="_blank"
              >
                opendoodles
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
