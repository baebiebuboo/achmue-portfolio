import Link from "next/link";
import Container from "./ui/container";

const socials = [
  { label: "GitHub", href: "https://github.com/baebiebuboo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/achmue" },
  { label: "Email", href: "mailto:bonusacharawan@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="font-display text-3xl tracking-tight">
            Achmue<span className="italic text-cocoa">folio</span>
          </Link>
          <p className="mt-2 text-sm text-muted">Software · AI · Digital Forensics</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex gap-6 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-cocoa"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted">© {new Date().getFullYear()} Acharawan Muenpilomthong</p>
        </div>
      </Container>
    </footer>
  );
}
