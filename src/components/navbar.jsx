"use client";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { name: "Line up", href: "#line-up" },
    { name: "Menù", href: "#menù" },
    { name: "Sponsor", href: "#sponsor" },
    { name: "Info", href: "#info" },
  ];

  useEffect(() => {
    // 1. Gestione Progress Bar
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };

    // 2. Gestione Active Link (Intersection Observer)
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Attiva quando la sezione è nella parte alta/centrale
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Osserva tutte le sezioni che hanno un ID corrispondente ai link
    menuItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="sticky top-0 z-[99] bg-white font-lore">
      {/* Progress Bar Container */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-100">
        <div
          className="h-full bg-[#ff5678] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Menu Links */}
      <div className="flex justify-between py-2">
        {menuItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={`text-md w-1/4 text-center transition-colors duration-300 ${
              index !== menuItems.length - 1 ? "border-r border-[#ff5678]" : ""
            } ${
              activeSection === item.href.replace("#", "")
                ? "text-[#ff5678] font-bold"
                : "text-black"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
