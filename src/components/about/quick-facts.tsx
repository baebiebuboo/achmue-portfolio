import {
  PiGraduationCapBold,
  PiBrainBold,
  PiGlobeHemisphereWestBold,
  PiCodeBold,
  PiMapPinBold,
  PiLaptopBold,
} from "react-icons/pi";

const facts = [
  {
    icon: <PiGraduationCapBold size={24} />,
    title: "Education",
    subtitle: "B.Eng. Digital Engineering",
  },
  {
    icon: <PiBrainBold size={24} />,
    title: "Research",
    subtitle: "Forensic Science",
  },
  {
    icon: <PiLaptopBold size={24} />,
    title: "Focus",
    subtitle: "Full-Stack Development",
  },
  {
    icon: <PiCodeBold size={24} />,
    title: "Interest",
    subtitle: "AI Applications",
  },
  {
    icon: <PiGlobeHemisphereWestBold size={24} />,
    title: "Projects",
    subtitle: "GIS & Data",
  },
  {
    icon: <PiMapPinBold size={24} />,
    title: "Location",
    subtitle: "Thailand",
  },
];

export default function QuickFacts() {
  return (
    <section className="rounded-[30px] bg-white/75 p-8 shadow-[0_12px_35px_rgba(0,0,0,.06)] backdrop-blur-md">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7A67]">
        Quick Facts
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.title}
            className="rounded-2xl bg-[#FFF8ED] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8C8D4] text-[#5A3628]">
              {fact.icon}
            </div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#9A7A67]">
              {fact.title}
            </p>

            <h3 className="mt-2 text-lg font-bold leading-snug text-[#3F2D23]">
              {fact.subtitle}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}