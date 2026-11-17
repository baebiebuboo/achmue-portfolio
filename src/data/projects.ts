// ─────────────────────────────────────────────────────────────
// YOUR PROJECTS
// These entries are PLACEHOLDERS — replace them with your real work.
//
// - image:    put a screenshot in /public/images/projects/ and set e.g.
//             "/images/projects/my-app.png". Leave it out to show a
//             coloured placeholder instead.
// - github / demo: leave out any link you don't have.
// - featured: true → also shown on the homepage (pick 2–3).
// ─────────────────────────────────────────────────────────────

export const categories = ["Full-Stack", "AI / ML", "GIS & Data", "Forensics"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: Category;
  tags: string[];
  year: string;
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Achmuefolio",
    summary:
      "This site — a personal portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    category: "Full-Stack",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    github: "https://github.com/baebiebuboo",
    featured: true,
  },
  {
    slug: "placeholder-ai",
    title: "Your AI project",
    summary:
      "One sentence on the problem it solves and how. Replace this in src/data/projects.ts.",
    category: "AI / ML",
    tags: ["Python", "PyTorch"],
    year: "2025",
    featured: true,
  },
  {
    slug: "placeholder-gis",
    title: "Your GIS / data project",
    summary:
      "One sentence on the problem it solves and how. Replace this in src/data/projects.ts.",
    category: "GIS & Data",
    tags: ["QGIS", "Python"],
    year: "2025",
    featured: true,
  },
  {
    slug: "placeholder-forensics",
    title: "Your forensics project",
    summary:
      "One sentence on the problem it solves and how. Replace this in src/data/projects.ts.",
    category: "Forensics",
    tags: ["Research"],
    year: "2026",
  },
];
