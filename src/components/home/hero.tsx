import ArchPhoto from "@/components/ui/arch-photo";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

const focus = ["Full-Stack Development", "AI Applications", "Machine Learning", "GIS & Data", "Forensic Science"];

export default function Hero() {
  return (
    <section>
      <Container className="grid items-center gap-16 pt-14 pb-20 sm:pt-20 md:grid-cols-[1.25fr_0.75fr] md:pb-28">
        <div>
          <p className="fade-up inline-flex items-center gap-2 rounded-full border border-line bg-paper/70 px-3.5 py-1.5 text-xs tracking-wide text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7FA87E]" />
            Open to opportunities · Thailand
          </p>

          <h1
            style={{ animationDelay: "80ms" }}
            className="fade-up mt-8 font-display text-[clamp(2.9rem,8.5vw,6.5rem)] leading-[0.9] tracking-tight"
          >
            Acharawan
            <br />
            <em className="text-cocoa">Muenpilomthong</em>
          </h1>

          <p
            style={{ animationDelay: "160ms" }}
            className="fade-up mt-8 max-w-md text-lg leading-relaxed text-muted"
          >
            Full-stack developer and Digital Engineering graduate, now studying Forensic Science.
            I build thoughtful software where AI, data and investigation meet.
          </p>

          <div style={{ animationDelay: "240ms" }} className="fade-up mt-10 flex flex-wrap items-center gap-3">
            <Button href="/projects" arrow>
              View work
            </Button>
            <Button href="/resume.pdf" variant="outline" external>
              Download CV
            </Button>
          </div>
        </div>

        <div style={{ animationDelay: "200ms" }} className="fade-up">
          <ArchPhoto caption="B.Eng. · M.Sc." priority />
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:gap-8">
          <span className="text-xs uppercase tracking-[0.25em] text-muted">Focus</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
            {focus.map((f, i) => (
              <li key={f} className="flex items-center gap-6">
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-blush" />}
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
