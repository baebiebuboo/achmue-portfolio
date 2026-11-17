import { PiArrowUpRight } from "react-icons/pi";

import ContactForm, { CopyEmail } from "@/components/contact/contact-form";
import Container from "@/components/ui/container";
import PageIntro from "@/components/ui/page-intro";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/ui/section-label";

export const metadata = { title: "Contact · Achmuefolio" };

const elsewhere = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/achmue" },
  { label: "GitHub", href: "https://github.com/baebiebuboo" },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title={
          <>
            Let&apos;s <em className="text-cocoa">talk.</em>
          </>
        }
        description="Have a role, a project or a question? I'd love to hear from you."
      />

      <Container className="grid gap-20 md:grid-cols-[1fr_1fr] md:gap-24">
        <Reveal>
          <div className="space-y-14">
            <section>
              <SectionLabel index="01">Email</SectionLabel>
              <div className="mt-6">
                <CopyEmail />
              </div>
            </section>

            <section>
              <SectionLabel index="02">Elsewhere</SectionLabel>
              <ul className="mt-6 border-t border-line">
                {elsewhere.map((s) => (
                  <li key={s.label} className="border-b border-line">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-5 font-display text-2xl transition-colors hover:text-cocoa"
                    >
                      {s.label}
                      <PiArrowUpRight
                        size={18}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionLabel index="03">Availability</SectionLabel>
              <p className="mt-6 flex items-start gap-3 leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7FA87E]" />
                Open to full-time roles in software engineering, backend, AI-powered applications and
                digital forensics. Based in Thailand.
              </p>
            </section>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-line bg-paper/70 p-7 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">Send a message</h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
