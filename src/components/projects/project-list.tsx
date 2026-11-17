"use client";

import { useState } from "react";

import { categories, projects, type Category } from "@/data/projects";
import ProjectRow from "./project-row";

type Filter = "All" | Category;

export default function ProjectList() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const filters: Filter[] = ["All", ...categories];

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-7 gap-y-3">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`relative pb-1 text-sm tracking-wide transition-colors ${
                active ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {f}
              <sup className="ml-1 text-[10px] tabular-nums text-muted">{count}</sup>
              <span
                className={`absolute inset-x-0 -bottom-px h-px origin-left bg-ink transition-transform duration-300 ${
                  active ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <ul className="mt-10">
          {visible.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </ul>
      ) : (
        <p className="mt-10 border-t border-line pt-8 text-muted">Nothing in this category yet.</p>
      )}
    </div>
  );
}
