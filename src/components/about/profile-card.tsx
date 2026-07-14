import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const focusAreas = [
  "Full-Stack Development",
  "AI Applications",
  "GIS & Data",
  "Digital Forensics",
];

export default function ProfileCard() {
  return (
    <aside className="space-y-6">
      <div className="overflow-hidden rounded-[30px] bg-[#FFF3D4] shadow-[0_18px_45px_rgba(0,0,0,.08)]">
        {/* Photo */}
        <div className="p-6 pb-0">
          <div className="group relative overflow-hidden rounded-[24px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent z-10" />

            <Image
              src="/images/photo1.jpg"
              alt="Acharawan Muenpilomthong"
              width={700}
              height={900}
              priority
              className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Info */}
        <div className="p-7">
          <h1 className="text-[2rem] font-black leading-tight text-[#3F2D23]">
            Acharawan
            <br />
            Muenpilomthong
          </h1>

          <div className="mt-4 space-y-1">
            <p className="text-[#6D5B50]">
              B.Eng. Digital Engineering
            </p>

            <p className="text-[#6D5B50]">
              M.Sc. Forensic Science Candidate
            </p>
          </div>

          {/* Social */}
          <div className="mt-6 flex gap-5 text-[#6B3F2D]">
            <a
              href="https://github.com/baebiebuboo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:-translate-y-1"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/achmue"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:-translate-y-1"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:bonusacharawan@gmail.com"
              className="transition hover:-translate-y-1"
            >
              <MdEmail size={24} />
            </a>
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-[#E6D6C9]" />

          {/* Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-[#6B3F2D] px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7B4C39]"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Focus */}
      <div className="rounded-[30px] bg-white/70 p-7 shadow-[0_10px_35px_rgba(0,0,0,.05)] backdrop-blur-md">
        <h2 className="text-lg font-bold text-[#3F2D23]">
          Focus Areas
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {focusAreas.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#F8C8D4] px-4 py-2 text-sm font-medium text-[#5A3628] transition hover:-translate-y-0.5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}