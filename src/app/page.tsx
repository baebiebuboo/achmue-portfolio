import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[#4A3F35]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <div className="flex flex-1 items-center">
          <HeroSection />
        </div>

        <footer className="mx-auto mb-6 mt-6 w-full max-w-7xl px-6 text-[#5A3628]">
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