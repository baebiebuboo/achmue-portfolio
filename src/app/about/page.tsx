import Image from "next/image";
import Navbar from "@/components/navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const facts = [
  "B.Eng. Digital Engineering",
  "M.Sc. Forensic Science Candidate",
  "Full-Stack Development",
  "AI Applications",
  "GIS Projects",
  "Digital Forensics",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[#4A3F35]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="relative z-10">
        <Navbar />

<section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-16 md:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-6">
            <div className="rounded-[28px] bg-[#FFF3D4] p-6 shadow-sm">
              <div className="relative h-[360px] overflow-hidden rounded-[22px]">
                <Image
                  src="/images/photo1.jpg"
                  alt="Acharawan Muenpilomthong"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h1 className="mt-6 text-3xl font-extrabold text-[#3F2D23]">
                Acharawan Muenpilomthong
              </h1>

              <p className="mt-2 text-[#6D5B50]">
                Digital Engineering Graduate
              </p>

              <p className="text-[#6D5B50]">
                Currently pursuing M.Sc. in Forensic Science
              </p>
            </div>

            <div className="rounded-[24px] bg-[#F8C8D4] p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#3F2D23]">
                Focus Areas
              </h2>

              <ul className="mt-4 space-y-2 text-[#5A3628]">
                <li>Full-Stack Development</li>
                <li>AI-Powered Applications</li>
                <li>Digital Forensics</li>
                <li>GIS & Data</li>
              </ul>
            </div>

            <div className="rounded-[24px] bg-white/75 p-6 shadow-sm backdrop-blur-md">
              <a
                href="/resume.pdf"
                target="_blank"
                className="block rounded-2xl bg-[#6B3F2D] px-6 py-3 text-center text-white transition hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>
          </aside>

          <div className="space-y-8">
            <section className="rounded-[28px] bg-white/75 p-8 shadow-sm backdrop-blur-md">
              <h2 className="text-3xl font-extrabold text-[#3F2D23]">
                About
              </h2>

              <p className="mt-5 leading-8 text-[#5A4A42]">
                I am a Digital Engineering graduate from SIIT, Thammasat
                University, currently pursuing an M.Sc. in Forensic Science at
                the Faculty of Allied Health Sciences, Thammasat University.
              </p>

              <p className="mt-4 leading-8 text-[#5A4A42]">
                My interests include full-stack software development,
                AI-powered applications, GIS, and digital forensics. I enjoy
                building practical technology solutions that connect technical
                systems with real-world problems.
              </p>
            </section>

            <section className="rounded-[28px] bg-white/75 p-8 shadow-sm backdrop-blur-md">
              <h2 className="text-2xl font-extrabold text-[#3F2D23]">
                Quick Facts
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {facts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full bg-[#FFF3D4] px-4 py-2 text-sm font-medium text-[#5A3628]"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] bg-white/75 p-8 shadow-sm backdrop-blur-md">
              <h2 className="text-2xl font-extrabold text-[#3F2D23]">
                Timeline
              </h2>

              <div className="mt-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-[140px_1fr]">
                  <p className="font-semibold text-[#8A5A44]">
                    2021 — 2025
                  </p>

                  <div>
                    <h3 className="font-bold text-[#3F2D23]">
                      B.Eng. Digital Engineering
                    </h3>
                    <p className="mt-1 text-[#6D5B50]">
                      Sirindhorn International Institute of Technology (SIIT),
                      Thammasat University
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[140px_1fr]">
                  <p className="font-semibold text-[#8A5A44]">
                    2026 — Present
                  </p>

                  <div>
                    <h3 className="font-bold text-[#3F2D23]">
                      M.Sc. Forensic Science
                    </h3>
                    <p className="mt-1 text-[#6D5B50]">
                      Faculty of Allied Health Sciences, Thammasat University
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-4 rounded-[28px] bg-[#FFF3D4] p-8 shadow-sm md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-[#3F2D23]">
                  Interested in working together?
                </h2>

                <p className="mt-2 text-[#6D5B50]">
                  Open to full-time opportunities in software development,
                  AI applications, and digital forensics-related roles.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="rounded-2xl bg-[#6B3F2D] px-5 py-3 text-white"
                >
                  Contact
                </a>

                <a
                  href="/projects"
                  className="rounded-2xl bg-white px-5 py-3 text-[#6B3F2D]"
                >
                  View Projects
                </a>
              </div>
            </section>
          </div>
        </section>

        <footer className="mx-auto mb-6 w-full max-w-7xl px-6 text-[#5A3628]">
          <div className="flex items-center justify-between rounded-2xl bg-[#FFF3D4] px-6 py-4 shadow-sm">
            <div className="flex gap-5">
              <a href="https://github.com/baebiebuboo" target="_blank">
                <FaGithub size={22} />
              </a>

              <a href="https://www.linkedin.com/in/achmue" target="_blank">
                <FaLinkedin size={22} />
              </a>

              <a href="mailto:bonusacharawan@gmail.com">
                <MdEmail size={24} />
              </a>
            </div>

            <p className="text-sm font-medium">
              © 2026 Acharawan Muenpilomthong
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}