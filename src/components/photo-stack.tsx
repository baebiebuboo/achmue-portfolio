import Image from "next/image";

export default function PhotoStack() {
  return (
    <div className="relative flex h-[390px] w-[390px] items-center justify-center">
      {/* Background Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-[#FFF3C4]/70 blur-3xl" />
      <div className="absolute right-8 top-10 h-40 w-40 rounded-full bg-[#D4A373]/30 blur-3xl" />

      {/* Photo */}
      <div className="animate-photo group relative rounded-[32px] bg-white p-3 shadow-[0_24px_70px_rgba(90,54,40,0.20)] transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_32px_80px_rgba(90,54,40,0.28)]">
        <div className="relative h-[330px] w-[250px] overflow-hidden rounded-[24px]">
          <Image
            src="/images/photo1.jpg"
            alt="Acharawan Muenpilomthong"
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}