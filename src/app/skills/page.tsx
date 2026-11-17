import Container from "@/components/ui/container";
import PageIntro from "@/components/ui/page-intro";
import Reveal from "@/components/reveal";
import { skillGroups } from "@/data/skills";

export const metadata = { title: "Skills · Achmuefolio" };

export default function SkillsPage() {
  return (
    <>
      <PageIntro
        label="Skills"
        title={
          <>
            What I <em className="text-cocoa">work</em> with
          </>
        }
        description="From building web apps to training models and analysing evidence."
      />

      <Container>
        <div className="mb-6 flex items-center gap-6 text-xs tracking-wide text-muted">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-ink" /> Core
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full border border-muted" /> Familiar
          </span>
        </div>

        <ol className="border-t border-line">
          {skillGroups.map((group, i) => (
            <li key={group.title} className="border-b border-line">
              <Reveal>
                <div className="grid gap-6 py-10 md:grid-cols-[3rem_0.9fr_1.4fr] md:gap-8">
                  <span className="text-sm tabular-nums text-cocoa">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{group.title}</h2>
                    <p className="mt-2 text-muted">{group.description}</p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className={`rounded-full px-4 py-1.5 text-sm ${
                          skill.core ? "bg-ink text-cream" : "border border-line bg-paper/60 text-ink"
                        }`}
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
