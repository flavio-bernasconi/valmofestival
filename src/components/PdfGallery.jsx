"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Image from "next/image";

export default function PdfGallery() {
  const [selectedId, setSelectedId] = useState(null);

  const file = {
    id: "menu-2026",
    title: "Menù Valmofestival 2026",
    url: "/menu.pdf",
    thumb: "/preview-menu.jpg",
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 relative">
      {/* 1. MINIATURA */}
      <motion.div
        layoutId={file.id}
        onClick={() => setSelectedId(file.id)}
        className="w-64 cursor-pointer group relative "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white">
          <img
            src={file.thumb}
            alt="Anteprima Menù"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <motion.div className="bg-[#ff5678] z-10 w-fit mx-auto mt-2 text-white px-4 py-2 rounded-full font-bold shadow-lg transition-colors">
          Apri Menù
        </motion.div>
      </motion.div>

      {/* 2. VISUALIZZATORE ESPANSO */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 bg-white border-b border-slate-100">
                <motion.h2 className="text-xl font-big-custom text-black">
                  {file.title}
                </motion.h2>
                <button
                  onClick={() => setSelectedId(null)}
                  className="bg-slate-100 hover:bg-[#ff5678] hover:text-white p-2 rounded-full transition-colors group"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 w-full bg-slate-50 relative">
                <iframe
                  src={file.url}
                  className="w-full h-full border-none"
                  title="PDF Viewer"
                />
              </div>

              <div className="p-4 bg-white border-top border-slate-100 flex justify-center">
                <a
                  href={file.url}
                  download="Menu_Valmofestival_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff5678] text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform"
                >
                  Scarica PDF
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
