import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";

export default function CtaCard() {
  return (
    <section className="overflow-hidden rounded-[30px] bg-[#FFF3D4] p-8 shadow-[0_18px_45px_rgba(0,0,0,.08)]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A5A44]">
            Open to Opportunities
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#3F2D23]">
            Let's build something
            <br />
            meaningful together.
          </h2>

          <p className="mt-5 leading-8 text-[#6D5B50]">
            I'm currently open to full-time opportunities in software
            engineering, backend development, AI-powered applications,
            and digital forensics-related roles.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Software Engineer",
              "Backend Developer",
              "Full-Stack Developer",
              "AI Engineer",
            ].map((role) => (
              <span
                key={role}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#5A3628]"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-[#6B3F2D] px-7 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7B4C39]"
          >
            Contact Me
            <PiArrowRightBold className="transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/projects"
            className="rounded-2xl border border-[#6B3F2D] bg-white px-7 py-4 text-center font-medium text-[#6B3F2D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF8E7]"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}