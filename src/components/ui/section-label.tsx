export default function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
      {index && <span className="tabular-nums text-cocoa">{index}</span>}
      {index && <span className="h-px w-8 bg-line" />}
      {children}
    </p>
  );
}
