import Image from "next/image";

export default function PhotoStack() {
  return (
    <div className="relative flex h-[390px] w-[390px] items-center justify-center">
      <div className="absolute h-72 w-72 rounded-full bg-[#FFF3C4]/70 blur-3xl" />
      <div className="absolute right-8 top-10 h-40 w-40 rounded-full bg-[#D4A373]/30 blur-3xl" />

      <div className="animate-photo relative rounded-[32px] bg-white p-3 shadow-[0_24px_70px_rgba(90,54,40,0.22)]">
        <div className="relative h-[330px] w-[250px] overflow-hidden rounded-[24px]">
          <Image
            src="/images/photo1.jpg"
            alt="Acharawan Muenpilomthong"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}