import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#4A3F35]">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Side */}
          <div>
            <p className="text-[#D4A373] font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Acharawan Muenpilomthong
            </h1>

            <h2 className="text-2xl md:text-3xl mt-6 font-medium leading-relaxed">
              Software Developer
              <br />
              & Forensic Science Student
            </h2>

            <p className="mt-8 text-lg text-[#6B7280] max-w-xl leading-8">
              Passionate about building modern web applications,
              integrating AI-powered solutions, and exploring
              digital forensic technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-[#D4A373] text-white font-medium hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href="https://www.linkedin.com/in/achmue"
                target="_blank"
                className="px-6 py-3 rounded-full border border-[#D4A373] hover:bg-[#FFF8E7] transition"
              >
                LinkedIn
              </a>

              <a
                href="https://www.github.com/baebiebuboo"
                target="_blank"
                className="px-6 py-3 rounded-full border border-[#D4A373] hover:bg-[#FFF8E7] transition"
              >
                GitHub
              </a>
            </div>

            <div className="flex gap-3 mt-10 flex-wrap">
              <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                Next.js
              </span>

              <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                TypeScript
              </span>

              <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                AI
              </span>

              <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                Digital Forensics
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">
              
              <div className="absolute inset-0 bg-[#F4C2C2] rounded-full blur-3xl opacity-50 scale-110" />

              <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-8 border-white shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Bonus"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}