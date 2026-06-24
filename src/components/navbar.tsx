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
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 text-[#4A3F35]">
      <Link
        href="/"
        className="flex items-center gap-2 transition hover:text-[#6B3F2D]"
      >
        <PiCodeBold size={28} className="text-[#6B3F2D]" />
        <span className="text-2xl font-bold tracking-tight">Achmuefolio</span>
      </Link>

      <nav className="hidden items-center gap-10 md:flex">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
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
            </Link>
          );
        })}
      </nav>
    </header>
  );
}