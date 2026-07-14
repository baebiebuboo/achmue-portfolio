"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiCodeBold } from "react-icons/pi";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
      <Link
        href="/"
        className="flex items-center gap-2 transition duration-300 hover:opacity-80"
      >
        <PiCodeBold size={28} className="text-[#6B3F2D]" />

        <span className="text-[2rem] font-black tracking-tight text-[#3F2D23]">
          Achmuefolio
        </span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-[17px] transition-all duration-300 ${
                active
                  ? "font-bold text-[#6B3F2D]"
                  : "font-medium text-[#4A3F35] hover:-translate-y-0.5 hover:text-[#6B3F2D]"
              }`}
            >
              {link.label}

              <span
                className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#6B3F2D] transition-all duration-300 ${
                  active
                    ? "w-6 opacity-100"
                    : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}