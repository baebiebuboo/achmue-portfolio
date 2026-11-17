import ArchPhoto from "@/components/ui/arch-photo";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import PageIntro from "@/components/ui/page-intro";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/ui/section-label";

export const metadata = { title: "About · Achmuefolio" };

const education = [
  {
    years: "2026 — Present",
    title: "M.Sc. Forensic Science",
    school: "Faculty of Allied Health Sciences, Thammasat University",
  },
  {
    years: "2021 — 2025",
    title: "B.Eng. Digital Engineering",
    school: "Sirindhorn International Institute of Technology (SIIT), Thammasat University",
  },
];

const roles = ["Software Engineer", "Backend Developer", "Full-Stack Developer", "AI Engineer"];

const socials = [
  { label: "GitHub", href: "https://github.com/baebiebuboo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/achmue" },
  { label: "Email", href: "mailto:bonusacharawan@gmail.com" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About"
        title={
          <>
            Building technology for <em className="text-cocoa">real-world</em> problems.
          </>
        }
      />

      <Container className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        {/* Left — portrait */}
        <aside className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <ArchPhoto caption="Hello!" />
            <div className="mt-12">
              <p className="font-display text-2xl">Acharawan Muenpilomthong</p>
              <ul className="mt-4 flex gap-5 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="underline decoration-line underline-offset-4 hover:decoration-cocoa"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/resume.pdf" variant="outline" external>
                  Download CV
                </Button>
              </div>
            </div>
          </Reveal>
        </aside>

        {/* Right — story */}
        <div className="space-y-24">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-ink/85">
              <p>
                I graduated with a Bachelor of Engineering in Digital Engineering from Sirindhorn
                International Institute of Technology (SIIT), Thammasat University.
              </p>
              <p>
                I&apos;m currently pursuing a Master of Science in Forensic Science at the Faculty of
                Allied Health Sciences, Thammasat University.
              </p>
              <p>
                My interests span full-stack software development, artificial intelligence, machine
                learning, GIS and digital forensics. I enjoy transforming complex ideas into intuitive,
                practical digital products that create meaningful impact.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <section>
              <SectionLabel index="01">Education</SectionLabel>
              <ol className="mt-8 border-t border-line">
                {education.map((e) => (
                  <li key={e.title} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
                    <span className="text-sm tabular-nums text-muted">{e.years}</span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl">{e.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted">{e.school}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionLabel index="02">Open to</SectionLabel>
              <p className="mt-8 font-display text-3xl leading-[1.25] sm:text-4xl">
                {roles.map((r, i) => (
                  <span key={r}>
                    {i > 0 && <span className="text-blush"> / </span>}
                    {i % 2 === 1 ? <em className="text-cocoa">{r}</em> : r}
                  </span>
                ))}
              </p>
              <p className="mt-6 max-w-lg leading-relaxed text-muted">
                Full-time roles in software engineering, backend development, AI-powered applications
                and digital forensics.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" arrow>
                  Contact me
                </Button>
                <Button href="/projects" variant="outline">
                  View work
                </Button>
              </div>
            </section>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
