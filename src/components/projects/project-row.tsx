import { FaGithub } from "react-icons/fa";
import { PiArrowUpRight } from "react-icons/pi";

import type { Project } from "@/data/projects";

export default function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <li className="group border-t border-line last:border-b">
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 py-7 transition-colors duration-300 sm:grid-cols-[3rem_1fr_auto] md:grid-cols-[3rem_1fr_9rem_4rem_auto] md:items-baseline md:gap-x-6">
        <span className="pt-1.5 text-sm tabular-nums text-muted">{String(index + 1).padStart(2, "0")}</span>

        <div>
          <h3 className="font-display text-2xl leading-tight transition-colors duration-300 group-hover:text-cocoa sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">{project.summary}</p>
          <p className="mt-3 text-xs tracking-wide text-muted">
            {project.tags.join("  ·  ")}
            <span className="md:hidden">  ·  {project.category}  ·  {project.year}</span>
          </p>
        </div>

        <span className="hidden text-sm text-muted md:block">{project.category}</span>
        <span className="hidden text-sm tabular-nums text-muted md:block">{project.year}</span>

        <div className="col-start-2 flex gap-2 sm:col-start-auto sm:justify-end">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              <FaGithub size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              <PiArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
