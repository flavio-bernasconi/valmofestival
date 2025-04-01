import { BandCard } from "@/components/BandCard";
import { Hero } from "@/components/Hero";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
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
          className="p-8 mb-38 grid grid-cols-1 lg:grid-cols-2 min-xl:grid-cols-3 gap-18 mx-auto container min-h-[40vh] items-center"
        >
          <BandCard
            cardBackground="bg-orange-200 -rotate-1"
            darkColor="text-orange-950"
            darkBorder="border-orange-950"
            chipBackground="bg-orange-300"
            main={{ name: "Di Maggio Connection", genre: "Post rock" }}
            second={{ name: "There will be blood", genre: "Rockabilly" }}
            date={{ weekDay: "Ven", number: 23, month: "Maggio" }}
          />
          <BandCard
            cardBackground="bg-emerald-200 rotate-2"
            darkColor="text-emerald-950"
            darkBorder="border-emerald-950"
            chipBackground="bg-emerald-400"
            main={{ name: "Zero talents", genre: "Ska" }}
            second={{ name: "The collywobbles", genre: "skapunk" }}
            date={{ weekDay: "Sab", number: 24, month: "Maggio" }}
          />
          <BandCard
            cardBackground="bg-indigo-200 -rotate-4"
            darkColor="text-indigo-950"
            darkBorder="border-indigo-950"
            chipBackground="bg-indigo-400"
            main={{ name: "Vintage violence", genre: "Synth rok trio" }}
            second={{ name: "Pod pod talks", genre: "punk" }}
            date={{ weekDay: "Dom", number: 25, month: "Maggio" }}
          />
        </section>{" "}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-slate-200 py-10 rotate-4 mt-20">
          <VelocityScroll className={"text-slate-800 uppercase max-md:tet-4xl"}>
            Tanta Birra - Tanta Musica -{" "}
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
        <div className="container mx-auto p-8 text-center  mt-20">
          <p className="text-8xl font-light text-slate-100">Cucina</p>
          <p className="text-xl font-medium text-slate-100">
            dalle 19 alle 22:30
          </p>
          <p className="text-xl mb-6 font-medium text-slate-600">
            Domenica anche pranzo 12 - 14
          </p>
        </div>
        <section aria-labelledby="cucina" className="p-8 container mx-auto">
          <div className="flex gap-6 justify-center flex-col items-center ">
            <div className="p-12 rounded-2xl max-w-md ">
              <ul className="flex gap-4 flex-wrap items-center text-white">
                <li className="text-6xl text-center w-full">Gnocchi</li>
                <li className="text-6xl text-center w-full">Pizzoccheri</li>
                <li className="text-6xl text-center w-full">Patatine</li>
                <li className="text-6xl text-center w-full">Falafel</li>
              </ul>
            </div>
            <div className="p-12 rounded-2xl max-w-md ">
              <ul className="flex gap-4 flex-wrap items-center text-white">
                <li className="text-6xl text-center w-full">Birra</li>
                <li className="text-6xl text-center w-full">Birra</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="p-8 container mt-20 mx-auto">
          <p className="text-center text-4xl font-black">Sponsor</p>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
