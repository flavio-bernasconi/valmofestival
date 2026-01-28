import { ComingSoonHero } from "@/components/ComingSoon";
import { cn } from "@/lib/utils";
import { Nunito } from "next/font/google";
import Head from "next/head";
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
    "Sagra di paese"
  ],
};

export default function Home() {
  return (<>
    <Head>
      <meta name="google" content="notranslate" />
    </Head>
    <div className={cn("bg-[#F9EBD2] notranslate", nunito.className)}>

      <ComingSoonHero/>

      <footer className="mt-12 container mx-auto  text-center">
        <p className=" text-2xl mb-8 p-4">
          Piazza G. da Caversaccio, 22070 Valmorea CO
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1111.2928128553654!2d8.928802529828724!3d45.812466797219756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ4JzQ1LjAiTiA4wrA1NSc0NS40IkU!5e0!3m2!1sit!2sit!4v1745061689635!5m2!1sit!2sit"
          width="100%"
          height="500px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link href="/archive/2024" className=" my-4 block" target="_blank" >Vai all'archivio</Link>
      </footer>
    </div></>
  )
}
