"use client";

import { useEffect, useState } from "react";
import { PiCodeBold } from "react-icons/pi";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || "#about");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 text-[#4A3F35]">
      <a
        href="/"
        className="flex items-center gap-2 transition hover:text-[#6B3F2D]"
      >
        <PiCodeBold size={28} className="text-[#6B3F2D]" />

        <span className="text-2xl font-bold tracking-tight">
          Achmuefolio
        </span>
      </a>

      <nav className="hidden items-center gap-10 md:flex">
        {links.map((link) => {
          const isActive = active === link.href;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-lg transition ${
                isActive
                  ? "font-bold text-[#6B3F2D]"
                  : "font-medium text-[#4A3F35] hover:text-[#6B3F2D]"
              }`}
            >
              {link.label}

              {isActive && (
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#6B3F2D]" />
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
}