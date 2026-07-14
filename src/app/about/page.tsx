import Navbar from "@/components/navbar";

import ProfileCard from "@/components/about/profile-card";
import AboutCard from "@/components/about/about-card";
import QuickFacts from "@/components/about/quick-facts";
import Timeline from "@/components/about/timeline";
import CtaCard from "@/components/about/cta-card";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section>
        <ProfileCard />

        <div>
          <AboutCard />
          <QuickFacts />
          <Timeline />
          <CtaCard />
        </div>
      </section>

      <footer>...</footer>
    </main>
  );
}