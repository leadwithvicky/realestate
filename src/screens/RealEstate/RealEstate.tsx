import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { BlogSection } from "./sections/BlogSection/BlogSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";

export const RealEstate = (): JSX.Element => {
  return (
    <main className="bg-white w-full min-h-screen">
      <div className="w-full flex flex-col">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <BlogSection />
      </div>
    </main>
  );
};
