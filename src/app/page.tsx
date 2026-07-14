import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF7F2] text-[#4A3F35]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        {/* Hero */}
        <section className="flex flex-1 items-center">
          <HeroSection />
        </section>

        {/* Footer */}
        <footer className="mx-auto mb-6 mt-6 w-full max-w-7xl px-6">
          <div className="flex items-center justify-between rounded-[26px] border border-[#F1E4D6] bg-[#FFF3D4]/90 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,.05)] backdrop-blur-sm">
            <div className="flex items-center gap-5 text-[#6B3F2D]">
              <a
                href="https://github.com/baebiebuboo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition duration-200 hover:-translate-y-0.5 hover:text-[#8B5E4B]"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/achmue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition duration-200 hover:-translate-y-0.5 hover:text-[#8B5E4B]"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:bonusacharawan@gmail.com"
                aria-label="Email"
                className="transition duration-200 hover:-translate-y-0.5 hover:text-[#8B5E4B]"
              >
                <MdEmail size={24} />
              </a>
            </div>

            <p className="text-sm font-medium text-[#6B3F2D]">
              © 2026 Acharawan Muenpilomthong
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}