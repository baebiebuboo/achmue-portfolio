import PhotoStack from "./photo-stack";

const interests = [
  "Full-Stack Development",
  "AI Applications",
  "Forensics Science",
  "GIS & Data",
  "Machine Learning",
  "Business Strategy",
];

export default function HeroSection() {
  return (
    <section className="mx-auto mt-1 w-full max-w-7xl px-6">
      <div className="grid min-h-[560px] items-center gap-10 overflow-hidden rounded-[28px] bg-[#F8C8D4] px-14 py-12 shadow-sm md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 max-w-[620px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A5A44]">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-[#3F2D23]">
            Acharawan
            <br />
            Muenpilomthong
          </h1>

          <h2 className="mt-8 text-2xl leading-snug text-[#4A3329]">
            Digital Engineering Graduate
            <br />
            Exploring Software Development, AI, ML
            <br />
            and Digital Forensics
          </h2>

          <div className="mt-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8A5A44]">
              Interests
            </p>

            <div className="flex max-w-xl flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-[#FFF3D4] px-4 py-2 text-sm font-medium text-[#5B4338] shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 flex gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-[#6B3F2D] px-7 py-3.5 text-white shadow-sm transition hover:-translate-y-1 hover:bg-[#7A4A38]"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-2xl border border-[#6B3F2D] bg-white px-7 py-3.5 text-[#6B3F2D] shadow-sm transition hover:-translate-y-1 hover:bg-[#FFF8E7]"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <PhotoStack />
        </div>
      </div>
    </section>
  );
}