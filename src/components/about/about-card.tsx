export default function AboutCard() {
  return (
    <section className="overflow-hidden rounded-[30px] bg-white/75 p-8 shadow-[0_12px_35px_rgba(0,0,0,.06)] backdrop-blur-md">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7A67]">
        About
      </p>

      <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight text-[#3F2D23]">
        Building technology that solves real-world problems.
      </h2>

      <div className="my-8 h-px bg-[#E8DDD5]" />

      <div className="space-y-6 text-[17px] leading-8 text-[#5A4A42]">
        <p>
          I graduated with a Bachelor of Engineering in Digital Engineering
          from Sirindhorn International Institute of Technology (SIIT),
          Thammasat University.
        </p>

        <p>
          I am currently pursuing a Master of Science in Forensic Science at
          the Faculty of Allied Health Sciences, Thammasat University.
        </p>

        <p>
          My interests span full-stack software development, artificial
          intelligence, machine learning, GIS, and digital forensics. I enjoy
          transforming complex ideas into intuitive and practical digital
          products that create meaningful impact.
        </p>
      </div>
    </section>
  );
}