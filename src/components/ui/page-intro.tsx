import Container from "./container";
import SectionLabel from "./section-label";

export default function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Container className="pt-14 pb-12 sm:pt-20 sm:pb-16">
      <div className="fade-up">
        <SectionLabel>{label}</SectionLabel>
      </div>
      <h1
        style={{ animationDelay: "80ms" }}
        className="fade-up mt-6 font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] tracking-tight"
      >
        {title}
      </h1>
      {description && (
        <p
          style={{ animationDelay: "160ms" }}
          className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {description}
        </p>
      )}
    </Container>
  );
}
