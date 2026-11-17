import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

const styles = {
  primary:
    "bg-ink text-cream hover:bg-cocoa",
  outline:
    "border border-ink/80 text-ink hover:bg-ink hover:text-cream",
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
  arrow?: boolean;
  external?: boolean;
}) {
  const className = `group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${styles[variant]}`;
  const content = (
    <>
      {children}
      {arrow && <PiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
