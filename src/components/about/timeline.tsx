import {
  PiGraduationCapBold,
  PiBookOpenBold,
} from "react-icons/pi";

const timeline = [
  {
    year: "2021 – 2025",
    title: "B.Eng. Digital Engineering",
    school:
      "Sirindhorn International Institute of Technology (SIIT), Thammasat University",
    icon: <PiGraduationCapBold size={22} />,
  },
  {
    year: "2026 – Present",
    title: "M.Sc. Forensic Science",
    school:
      "Faculty of Allied Health Sciences, Thammasat University",
    icon: <PiBookOpenBold size={22} />,
  },
];

export default function Timeline() {
  return (
    <section className="rounded-[30px] bg-white/75 p-8 shadow-[0_12px_35px_rgba(0,0,0,.06)] backdrop-blur-md">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7A67]">
        Education Journey
      </p>

      <div className="relative mt-8 ml-3 border-l-2 border-[#E7D7CC]">
        {timeline.map((item, index) => (
          <div
            key={item.title}
            className={`relative pl-10 ${
              index !== timeline.length - 1 ? "pb-12" : ""
            }`}
          >
            {/* circle */}

            <div className="absolute -left-[22px] flex h-10 w-10 items-center justify-center rounded-full bg-[#F8C8D4] shadow-sm">
              {item.icon}
            </div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#9A7A67]">
              {item.year}
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#3F2D23]">
              {item.title}
            </h3>

            <p className="mt-2 leading-7 text-[#6D5B50]">
              {item.school}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}