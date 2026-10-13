import { useEffect, useState } from "react";
import logoIspm from "../assets/logo_Ispm.jpeg";
import logoFoko from "../assets/logo.jpg";

const LINKS = [
  { href: "#top", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#hebergements", label: "Hébergements" },
  { href: "#activites", label: "Activités" },
  { href: "#menu", label: "Menu" },
  { href: "#resto", label: "Restaurant & Bar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-clay-dark/95 backdrop-blur shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo projet — gauche */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="hidden sm:flex flex-col items-center justify-center w-20 h-20"
          >
            <img src={logoFoko} alt="" className="rounded-full"/>
          </div>
        </div>

        {/* Liens de navigation */}
        <nav
          className={`fixed sm:static top-0 right-0 h-screen sm:h-auto w-72 sm:w-auto
          bg-clay-dark sm:bg-transparent flex flex-col sm:flex-row items-start sm:items-center
          gap-8 sm:gap-6 px-8 sm:px-0 pt-24 sm:pt-0 transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full sm:translate-x-0"}`}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-extrabold text-white hover:text-terracotta transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Logo ISPM — droite */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="hidden sm:flex flex-col items-center justify-center w-20 h-20 
            text-clay-dark font-mono text-[10px] font-semibold leading-tight text-center"
          >
            <img src={logoIspm} alt="" className="rounded-full"/>
          </div>
        </div>
      </div>
    </header>
  );
}
