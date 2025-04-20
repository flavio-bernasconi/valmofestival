import { BandCard } from "@/components/BandCard";
import { Hero } from "@/components/Hero";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { MenuAccordion } from "@/components/MenuAccordion";
import { cn } from "@/lib/utils";
import { Accordion } from "@radix-ui/react-accordion";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Valmofestival - 23/24/25 Maggio 2025",
  description:
    "Il Valmofestival ritorna il 23/24/25 Maggio 2025, con la sedicesima edizione. Ci vediamo a Valmorea (Como) con tanta musica, cibo e molto altro.",
  keywords: [
    "Valmofestival",
    "valmorea",
    "Festival di musica",
    "eventi Como",
    "eventi Varese",
  ],
};

export default function Home() {
  return (
    // <div className={cn("bg-[#19262c]", nunito.className)}>
    <div className={cn("bg-slate-900", nunito.className)}>
      <main className="overflow-hidden">
        <Hero />
        <div className="container mx-auto p-8 text-center">
          <p className="text-8xl font-light text-white">Line up</p>
          <p className="text-xl mb-6 font-medium text-slate-100">
            inizio concerti 21:00
          </p>
        </div>
        <section
          aria-labelledby="line-up"
          className="p-8 mb-38 grid grid-cols-1 lg:grid-cols-2 min-xl:grid-cols-3 gap-28 mx-auto container min-h-[40vh] items-start"
        >
          <BandCard
            cardBackground="bg-orange-200 -rotate-1"
            darkColor="text-orange-950"
            darkBorder="border-orange-950"
            chipBackground="bg-orange-300"
            main={{
              name: "There will be blood",
              genre: "Post rock",
              src: "https://open.spotify.com/embed/artist/1ntXPkk7nlvEGNgtHbKmAN?utm_source=generator",
            }}
            second={{
              name: "Di Maggio Connection",
              genre: "Rockabilly",
              src: "https://open.spotify.com/embed/artist/3LCo398twp9ZnVaV9zd3Zt?utm_source=generator",
            }}
            third={{ name: "DJ Ghibli", genre: "DJ set" }}
            date={{ weekDay: "Ven", number: 23, month: "Maggio" }}
            loaderClass="fill-orange-900"
          />
          <BandCard
            cardBackground="bg-emerald-100 rotate-2"
            darkColor="text-emerald-950"
            darkBorder="border-emerald-950"
            chipBackground="bg-emerald-300"
            main={{
              name: "The collywobbles",
              genre: "Ska",
              src: "https://open.spotify.com/embed/artist/2lasUiHHJAnevYUJ0TJIxj?utm_source=generator",
            }}
            second={{
              name: "Zero talent",
              genre: "skapunk",
              src: "https://open.spotify.com/embed/artist/0g1bmXETrAwGrSkJ7O4y4C?utm_source=generator",
            }}
            third={{ name: "Djelso ft Lϋ", genre: "DJ set" }}
            date={{ weekDay: "Sab", number: 24, month: "Maggio" }}
            loaderClass="fill-emerald-900"
          />
          <BandCard
            cardBackground="bg-indigo-100 -rotate-3"
            darkColor="text-indigo-950"
            darkBorder="border-indigo-950"
            chipBackground="bg-indigo-300"
            main={{
              name: "Vintage violence",
              genre: "punk",
              src: "https://open.spotify.com/embed/artist/0WGMKokl5OoPCHeP8Beydm?utm_source=generator",
            }}
            second={{
              name: "Poo poo talks",
              genre: "Synth rok trio",
              src: "https://open.spotify.com/embed/artist/761KtkhVLMz8XiDTDk23Qi?utm_source=generator",
            }}
            date={{ weekDay: "Dom", number: 25, month: "Maggio" }}
            loaderClass="fill-indigo-900"
          />
        </section>{" "}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-slate-200 py-10 rotate-2 mt-20">
          <VelocityScroll className={"text-slate-800 uppercase"}>
            Tanta Birra - Tanta Musica -{" "}
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
        <div className="container mx-auto p-8 text-center mt-20">
          <p className="text-8xl font-light text-slate-100">Cucina</p>
          <p className="text-xl font-medium text-slate-100">
            dalle 19 alle 22:30
          </p>
          <p className="text-2xl font-medium text-slate-300">
            Domenica anche pranzo 12 - 14
          </p>
        </div>
        <section aria-labelledby="cucina" className="p-8 container mx-auto">
          <div className="flex gap-18 flex-col min-md:items-center">
            <div className="min-md:max-w-3xl w-full">
              <Accordion type="single" collapsible className="space-y-8">
                <MenuAccordion trigger={"primi"}>
                  <ul className="flex flex-wrap text-white text-4xl gap-6">
                    <li className="w-full">
                      GNOCCHI con ragù | pomodoro | burro & salvia | radicchio &
                      zola
                    </li>
                    <hr className="border-slate-700 h-1 w-full" />
                    <li className="w-full">
                      <span className="text-xl font-bold bg-orange-400 text-white px-2 py-1 rounded-md">
                        NOVITÀ
                      </span>{" "}
                      GNOCCHI con ricotta zucchine e menta
                    </li>
                    <hr className="border-slate-700 h-1 w-full" />
                    <li className="w-full">Zuppa di cipolle</li>
                  </ul>
                </MenuAccordion>
                <MenuAccordion trigger={"griglie"}>
                  <ul className="flex flex-wrap text-white text-4xl gap-4">
                    <li className="w-full">Costine</li>
                    <hr className="border-slate-700 h-1 w-full" />
                    <li className="w-full">Pollo marinato</li>
                    <hr className="border-slate-700 h-1 w-full" />
                    <li className="w-full">Grigliata mista</li>
                    <hr className="border-slate-700 h-1 w-full" />
                    <li className="w-full">Tomino </li>
                    <hr className="border-slate-700 h-1 w-full" />
                    <li className="w-full">Panino con salamella</li>
                  </ul>
                </MenuAccordion>
                <MenuAccordion trigger={"contorni"}>
                  <ul className="flex flex-wrap text-white text-4xl gap-4">
                    <li className="w-full">
                      Patatine fritte | FANTAINSALATA | Cavolo rosso | Fagioli |
                      Fagioli & cipolle
                    </li>
                  </ul>
                </MenuAccordion>
                <MenuAccordion trigger={"dolci casalinghi"}>
                  <ul className="flex flex-wrap text-white text-4xl gap-4">
                    <li className="w-full">Salame di cioccolato</li>
                    <hr className="border-slate-700 h-1 w-full" />
                    <li className="w-full">
                      <span className="text-xl font-bold bg-orange-400 text-white px-2 py-1 rounded-md">
                        NOVITÀ
                      </span>{" "}
                      crêpes
                    </li>
                  </ul>
                </MenuAccordion>
                <MenuAccordion trigger={"SPECIALI!"}>
                  <ul className="flex flex-wrap text-white text-4xl gap-4">
                    <li className="w-full">
                      <span className="text-xl font-bold bg-orange-400 text-white px-2 py-1 rounded-md">
                        NOVITÀ VEGAN
                      </span>{" "}
                      Falafel + contorno | panino falafel
                    </li>
                  </ul>
                </MenuAccordion>
              </Accordion>
            </div>
            <div className="min-md:max-w-3xl w-full">
              <p className="w-full uppercase text-3xl font-bold text-orange-400 mb-2">
                DOMENICA a PRANZO
              </p>
              <ul className="flex flex-wrap text-white text-4xl gap-4">
                <li className="w-full">
                  Polenta e ragù napoletano{" "}
                  <span className="text-xl"> (fino ad esaurimento scorte)</span>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-orange-100 h-1 w-full" />
            <div className="min-md:max-w-3xl w-full">
              <p className="w-full uppercase text-3xl font-bold text-orange-400 mb-2">
                BIRRE & VINO
              </p>
              <ul className="flex flex-wrap text-white text-4xl gap-4">
                <li className="w-full">
                  Birrificio Italiano: TIPO PILS - BIBOK
                </li>
                <li className="w-full">
                  Birrificio Vetra: IPA Birra chiara Ganter
                </li>
                <li className="w-full gap-3 flex flex-wrap">
                  <span className="text-xl font-bold bg-orange-400 text-white px-2 py-1 rounded-md">
                    Specialie Km 0{" "}
                  </span>{" "}
                  Cantina Carbonera (Cavallasca) - Merlot Vino rosso sfuso della
                  casa (calice o bottiglia)
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container mx-auto p-8 text-center mt-20">
          <p className="text-8xl font-light text-slate-100 mb-12">Sponsor</p>
          <p className="text-xl font-medium text-slate-100 flex gap-3 items-center justify-center">
            <svg
              aria-hidden="true"
              className={cn(
                "w-8 h-8 text-gray-100 animate-spin dark:text-gray-600 fill-orange-300"
              )}
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            Coming soon...
          </p>
        </div>
      </main>
      <footer className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1111.2928128553654!2d8.928802529828724!3d45.812466797219756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ4JzQ1LjAiTiA4wrA1NSc0NS40IkU!5e0!3m2!1sit!2sit!4v1745061689635!5m2!1sit!2sit"
          width="100%"
          height="500px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </footer>
    </div>
  );
}
