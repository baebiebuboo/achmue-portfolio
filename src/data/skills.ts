// ─────────────────────────────────────────────────────────────
// YOUR SKILLS
// Starter list — the Frontend group matches what this site is built
// with; the other groups are common tools for each area. Edit freely:
// add, remove, or move items. `core: true` highlights a skill.
// ─────────────────────────────────────────────────────────────

export type Skill = { name: string; core?: boolean };
export type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel good to use.",
    skills: [
      { name: "React", core: true },
      { name: "Next.js", core: true },
      { name: "TypeScript", core: true },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML & CSS" },
    ],
  },
  {
    title: "Backend",
    description: "APIs, databases and the logic behind them.",
    skills: [
      { name: "Node.js", core: true },
      { name: "Python", core: true },
      { name: "REST APIs" },
      { name: "SQL" },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Turning data into predictions and tools.",
    skills: [
      { name: "Python", core: true },
      { name: "scikit-learn" },
      { name: "PyTorch" },
      { name: "Pandas & NumPy" },
    ],
  },
  {
    title: "GIS & Data",
    description: "Mapping and making sense of spatial data.",
    skills: [{ name: "QGIS" }, { name: "GeoPandas" }, { name: "Data visualisation" }],
  },
  {
    title: "Forensic Science",
    description: "Current M.Sc. focus at Thammasat University.",
    skills: [{ name: "Digital forensics" }, { name: "Evidence analysis" }, { name: "Research methods" }],
  },
  {
    title: "Tools",
    description: "What I use every day.",
    skills: [{ name: "Git & GitHub", core: true }, { name: "VS Code" }, { name: "Figma" }],
  },
];
