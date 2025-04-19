import { BandCard } from "@/components/BandCard";
import { Hero } from "@/components/Hero";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Valmofestival - 23/24/25 Maggio 2025",
  description:
    "Il Valmofestival ritorna il 23/24/25 Maggio 2025, con la quindicesima edizione, ci vediiamo come sempre in piazza G. da Caversaccio",
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
              genre: "Rockabilly",
              src: "https://open.spotify.com/embed/artist/1ntXPkk7nlvEGNgtHbKmAN?utm_source=generator",
            }}
            second={{
              name: "Di Maggio Connection",
              genre: "Post rock",
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
              genre: "skapunk",
              src: "https://open.spotify.com/embed/artist/2lasUiHHJAnevYUJ0TJIxj?utm_source=generator",
            }}
            second={{
              name: "Zero talents",
              genre: "Ska",
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
              genre: "Synth rok trio",
              src: "https://open.spotify.com/embed/artist/0WGMKokl5OoPCHeP8Beydm?utm_source=generator",
            }}
            second={{
              name: "Poo poo talks",
              genre: "punk",
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
          <div className="flex gap-24 flex-col min-md:items-center">
            <div className="min-md:max-w-3xl w-full">
              <p className="w-full uppercase text-3xl font-bold text-orange-400 mb-2">
                primi
              </p>
              <ul className="flex flex-wrap text-white text-4xl gap-4">
                <li className="w-full">
                  GNOCCHI con ragù | pomodoro | burro & salvia | radicchio &
                  zola
                </li>
                <li className="w-full">
                  <span className="text-xl font-bold bg-orange-400 text-white px-2 py-1 rounded-md">
                    NOVITÀ
                  </span>{" "}
                  GNOCCHI con ricotta zucchine e menta
                </li>
                <li className="w-full">Zuppa di cipolle</li>
              </ul>
            </div>
            <div className="min-md:max-w-3xl w-full">
              <p className="w-full uppercase text-3xl font-bold text-orange-400 mb-2">
                griglie
              </p>
              <ul className="flex flex-wrap text-white text-4xl gap-4">
                <li className="w-full">Costine</li>
                <li className="w-full">Pollo marinato</li>
                <li className="w-full">Grigliata mista</li>
                <li className="w-full">Tomino </li>
                <li className="w-full">Panino con salamella</li>
              </ul>
            </div>
            <div className="min-md:max-w-3xl w-full">
              <p className="w-full uppercase text-3xl font-bold text-orange-400 mb-2">
                contorni
              </p>
              <ul className="flex flex-wrap text-white text-4xl gap-4">
                <li className="w-full">
                  Patatine fritte | FANTAINSALATA | Cavolo rosso | Fagioli |
                  Fagioli & cipolle
                </li>
              </ul>
            </div>
            <div className="min-md:max-w-3xl w-full">
              <p className="w-full uppercase text-3xl font-bold text-orange-400 mb-2">
                dolci casalinghi
              </p>
              <ul className="flex flex-wrap text-white text-4xl gap-4">
                <li className="w-full">Salame di cioccolato</li>
                <li className="w-full">
                  <span className="text-xl font-bold bg-orange-400 text-white px-2 py-1 rounded-md">
                    NOVITÀ
                  </span>{" "}
                  crêpes
                </li>
              </ul>
            </div>
            <div className="min-md:max-w-3xl w-full">
              <p className="w-full uppercase text-3xl font-bold text-orange-400 mb-2">
                SPECIALI!
              </p>
              <ul className="flex flex-wrap text-white text-4xl gap-4">
                <li className="w-full">
                  <span className="text-xl font-bold bg-orange-400 text-white px-2 py-1 rounded-md">
                    NOVITÀ VEGAN
                  </span>{" "}
                  Falafel + contorno | panino falafel
                </li>
                <li className="w-full">
                  DOMENICA a PRANZO polenta e ragù napoletano
                </li>
              </ul>
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
          <p className="text-8xl font-light text-slate-100">Sponsor</p>
          <p className="text-xl font-medium text-slate-100 mt-12">
            Coming soon...
          </p>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
