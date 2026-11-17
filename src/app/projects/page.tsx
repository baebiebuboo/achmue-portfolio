import Container from "@/components/ui/container";
import PageIntro from "@/components/ui/page-intro";
import ProjectList from "@/components/projects/project-list";

export const metadata = { title: "Projects · Achmuefolio" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        label="Projects"
        title={
          <>
            Selected <em className="text-cocoa">work</em>
          </>
        }
        description="Software, AI, GIS and forensics — from coursework to side projects."
      />
      <Container>
        <ProjectList />
      </Container>
    </>
  );
}
