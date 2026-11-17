import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

import Hero from "@/components/home/hero";
import ProjectRow from "@/components/projects/project-row";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/ui/section-label";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Hero />

      {/* Selected work */}
      {featured.length > 0 && (
        <Container className="mt-20 sm:mt-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel index="01">Selected work</SectionLabel>
                <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
                  Recent <em className="text-cocoa">projects</em>
                </h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm tracking-wide text-ink underline decoration-line underline-offset-4 hover:decoration-cocoa"
              >
                All projects
                <PiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-12">
              {featured.map((project, i) => (
                <ProjectRow key={project.slug} project={project} index={i} />
              ))}
            </ul>
          </Reveal>
        </Container>
      )}

      {/* Contact CTA */}
      <Container className="mt-28 sm:mt-36">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-blush-soft px-6 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-butter/80 blur-3xl" />
            <div className="relative">
              <SectionLabel>
                <span className="mx-auto">Get in touch</span>
              </SectionLabel>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
                Have something <em className="text-cocoa">in mind?</em>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-muted">
                A role, a project, or just a chat — I&apos;d love to hear from you.
              </p>
              <div className="mt-9 flex justify-center">
                <Button href="/contact" arrow>
                  Let&apos;s talk
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
