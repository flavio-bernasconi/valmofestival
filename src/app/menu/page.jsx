"use client";

import { useState, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { Nunito } from "next/font/google";
import {
  Search,
  Plus,
  Minus,
  ShoppingBasket,
  Trash2,
  ChevronDown,
  LeafyGreenIcon,
} from "lucide-react";

const nunito = Nunito({ subsets: ["latin"] });

const menu = [
  {
    section: "Primi",
    items: [
      {
        name: "Gnocchi al ragù",
        tag: "veg",
      },
      { name: "Gnocchi al pomodoro" },
      { name: "Gnocchi burro & salvia" },
      { name: "Gnocchi con radicchio & zola" },
      {
        name: "Zuppa di cipolle",
        tag: "veg",
      },
    ],
  },
  {
    section: "Secondi",
    items: [
      {
        name: "Costine",
      },
      {
        name: "Pollo marinato",
      },
      {
        name: "Grigliata mista",
      },
      {
        name: "Salamella",
      },
      {
        name: "Tomino",
        tag: "veg",
      },
    ],
  },
  {
    section: "Contorni",
    items: [
      {
        name: "Patatine fritte",
        tag: "veg",
      },
      {
        name: "Fantainsalata",
        tag: "veg",
      },
      {
        name: "Cavolo rosso",
        tag: "veg",
      },
      {
        name: "Fagioli",
        tag: "veg",
      },
      {
        name: "Fagioli & cipolle",
        tag: "veg",
      },
    ],
  },
];

export default function Menu() {
  const [cart, setCart] = useState({});
  const recapRef = useRef(null);

  const updateQuantity = (key, delta) => {
    setCart((prev) => {
      const current = prev[key] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: next };
    });
  };

  const clearCart = () => setCart({});

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .filter(([_, qty]) => qty > 0)
      .map(([name, qty]) => ({ name, qty }));
  }, [cart]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.qty, 0);
  }, [cartItems]);

  const scrollToRecap = () => {
    recapRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "Tutti") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const sections = ["Primi", "Secondi", "Contorni"];

  return (
    <div
      className={cn("min-h-screen bg-[#ecf6fd] py-12 px-4", nunito.className)}
    >
      <div className="container mx-auto max-w-4xl pb-12">
        <h1 className="text-6xl md:text-8xl font-light text-black font-big-custom text-center mb-12">
          Il Menù
        </h1>

        {/* Filters */}
        <div className="flex flex-col gap-6 mb-12 sticky top-4 z-40 bg-[#ecf6fd]/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="px-3 py-2 rounded-full text-md font-medium transition-all bg-white text-slate-700 hover:bg-[#ff5678] hover:text-white hover:shadow-md active:scale-95"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="space-y-12 font-lore">
          {menu.length > 0 ? (
            menu.map((section) => (
              <div
                key={section.section}
                id={section.section}
                className="bg-[#222] rounded-3xl p-6 md:p-8 shadow-sm scroll-mt-24 border-2 border-[#ff5678]"
              >
                <h2 className="text-4xl md:text-5xl font-big-custom text-[#ff5678] mb-6 border-b border-[#ff5678]  pb-2">
                  {section.section}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-4 p-2 rounded-2xl hover:bg-slate-50/50  transition-all"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-[#ff5678] pb-2">
                        <div className="w-full">
                          <h3 className="text-2xl font-bold text-white relative ">
                            {item.tag === "veg" && (
                              <span className="h-3 w-3  rounded-full inline-block mr-2">
                                <LeafyGreenIcon className="h-3 w-3 text-[#8BC34A]" />
                              </span>
                            )}
                            {item.name}
                          </h3>
                        </div>

                        {!item.options && (
                          <div className="flex items-center gap-3 bg-slate-100 p-1 rounded-full">
                            <button
                              onClick={() => updateQuantity(item.name, -1)}
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-600 hover:bg-[#ff5678] hover:text-white transition-colors shadow-sm"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-lg font-bold w-4 text-center text-slate-700">
                              {cart[item.name] || 0}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.name, 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-600 hover:bg-[#8BC34A] hover:text-white transition-colors shadow-sm"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>

                      {item.options && (
                        <div className="space-y-3 pl-4">
                          {item.options.map((opt, i) => {
                            const key = `${item.name} - ${opt}`;
                            return (
                              <div
                                key={i}
                                className="flex items-center justify-between gap-4"
                              >
                                <span className="text-slate-600 font-medium italic">
                                  {opt}
                                </span>
                                <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-full border border-slate-100">
                                  <button
                                    onClick={() => updateQuantity(key, -1)}
                                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-slate-400 hover:bg-[#ff5678] hover:text-white transition-colors shadow-sm"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </button>
                                  <span className="text-md font-bold w-3 text-center text-slate-700">
                                    {cart[key] || 0}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(key, 1)}
                                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-slate-400 hover:bg-[#8BC34A] hover:text-white transition-colors shadow-sm"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-500 text-xl">
              Nessun piatto trovato con i filtri selezionati.
            </div>
          )}
        </div>

        {/* Bottom Recap Section */}
        <div ref={recapRef} className="mt-20 scroll-mt-32">
          {totalItems > 0 ? (
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-white p-8 md:p-12 animate-in fade-in zoom-in duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b-2 border-slate-50 pb-8">
                <div className="flex items-center gap-5 flex-col">
                  <h2 className="text-3xl font-bold text-slate-800">
                    Riepilogo Ordine
                  </h2>
                  <p className="text-lg text-slate-500">
                    {totalItems} {totalItems === 1 ? "piatto" : "piatti"} in
                    totale
                  </p>
                </div>
                <button
                  onClick={clearCart}
                  className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors px-6 py-3 rounded-xl hover:bg-red-50"
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="font-bold">Svuota Ordine</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {cartItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center bg-[#ecf6fd]/50 p-4 rounded-2xl border border-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-white px-4 py-1 rounded-full shadow-sm border border-slate-100">
                        <span className="font-black text-[#ff5678] text-xl">
                          {item.qty}
                        </span>
                      </div>
                      <span className="text-slate-800 font-bold text-lg">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center p-12 border-4 border-dashed border-slate-200 rounded-[2.5rem]">
              <p className="text-2xl text-slate-300 font-bold italic">
                Aggiungi qualcosa per vedere il riepilogo qui!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Scroll-to-Recap Button */}
      {totalItems > 0 && (
        <button
          onClick={scrollToRecap}
          className="fixed bottom-8 right-8 z-50 bg-[#ff5678] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-in slide-in-from-right-20 hover:bg-[#ff4569]"
        >
          <div className="relative">
            <ShoppingBasket className="h-8 w-8" />
            <span className="absolute -top-2 -right-2 bg-slate-800 text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#ff5678] font-black">
              {totalItems}
            </span>
            <ChevronDown className="h-4 w-4 absolute -bottom-5 left-1/2 -translate-x-1/2 animate-bounce" />
          </div>
        </button>
      )}
    </div>
  );
}
