import Image from "next/image";

export default function ArchPhoto({ caption, priority = false }: { caption?: string; priority?: boolean }) {
  return (
    <figure className="relative mx-auto w-full max-w-[340px]">
      {/* offset outline */}
      <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full border border-cocoa/25" />

      <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-blush">
        <Image
          src="/images/photo1.jpg"
          alt="Acharawan Muenpilomthong"
          fill
          priority={priority}
          sizes="340px"
          className="object-cover"
        />
      </div>

      {caption && (
        <figcaption className="absolute -bottom-4 -left-4 rounded-full border border-line bg-paper px-4 py-2 font-display text-lg italic text-cocoa shadow-[0_8px_24px_rgba(63,45,35,.08)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
