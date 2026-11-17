"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiList, PiX } from "react-icons/pi";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line/70 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="font-display text-2xl tracking-tight">
          Achmue<span className="italic text-cocoa">folio</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm tracking-wide transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cocoa" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`rounded-full border px-5 py-2 text-sm tracking-wide transition-colors ${
              pathname === "/contact"
                ? "border-ink bg-ink text-cream"
                : "border-ink/80 text-ink hover:bg-ink hover:text-cream"
            }`}
          >
            Let&apos;s talk
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <PiX size={22} /> : <PiList size={22} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line/70 px-5 pb-8 pt-4 md:hidden">
          {[...links, { label: "Contact", href: "/contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`block border-b border-line/70 py-4 font-display text-3xl ${
                pathname === link.href ? "italic text-cocoa" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
