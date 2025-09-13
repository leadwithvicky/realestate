import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const projectImages = [
  {
    src: "/rectangle-35.png",
    title: "The Arcadia Rise",
    overlayClass: "w-[258px] h-[47px] top-[229px] left-[7px]",
    overlaySrc: "/rectangle-35-1.svg",
    titleClass: "top-[219px] left-[25px]",
    arrowClass: "top-[242px] left-[225px]",
  },
  {
    src: "/rectangle-36.png",
    title: "Metro Link Business Tower",
    overlayClass: "w-[232px] h-[47px] top-[199px] left-[306px]",
    overlaySrc: "/rectangle-42.svg",
    titleClass: "top-[219px] left-[293px]",
    arrowClass: "top-[243px] left-[512px]",
  },
  {
    src: "/rectangle-37.png",
    title: "Green Vista Eco Home",
    overlayClass: "",
    overlaySrc: "",
    titleClass: "top-[219px] left-[583px]",
    arrowClass: "",
  },
];

const navigationDots = [
  {
    active: true,
    class: "w-3 h-[3px] top-[386px] left-[533px] bg-[#d9d9d9] rounded-[15px]",
  },
  {
    active: false,
    class: "w-3 h-[3px] top-[386px] left-[546px] bg-[#0000004c] rounded-[15px]",
  },
  {
    active: false,
    class: "w-3 h-[3px] top-[386px] left-[559px] bg-[#0000004c] rounded-[15px]",
  },
];

export const ProjectsSection = (): JSX.Element => {
  const handleExploreAll = () => {
    console.log("Explore All Projects clicked");
  };

  return (
    <section id="projects" className="w-full bg-[#f7fbfe] py-8 md:py-11 px-4">
      <div className="max-w-[1266px] mx-auto bg-[#d7eaf3] rounded-[20px] overflow-hidden relative min-h-auto md:min-h-[471px] px-4 md:px-[50px] py-8 md:py-[45px]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 max-w-full lg:max-w-[428px]">
            <Badge
              variant="outline"
              className="mb-4 md:mb-6 h-[38px] px-2 py-2 rounded-[5px] border-[#0000004c] bg-transparent"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#000000cc] text-base">
                Our Projects
              </span>
            </Badge>

            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-[40px] leading-[35px] md:leading-[55px] mb-4 md:mb-6">
              Quality that speaks through our work
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-normal text-black text-sm mb-6 md:mb-8 max-w-full md:max-w-[398px]">
              Over the years, we&apos;ve completed a wide range of successful
              residential, commerical and industrial projects.
            </p>

            <Button 
              onClick={handleExploreAll}
              className="bg-[#5984c8] hover:bg-[#4a73b5] h-10 px-4 rounded-[10px] [font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base w-full md:w-auto"
            >
              EXPLORE ALL
              <ArrowRightIcon className="w-[26px] h-[26px] ml-2" />
            </Button>
          </div>

          <div className="flex-1 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[20px] relative">
              {projectImages.map((project, index) => (
                <div key={index} className="relative">
                  <img
                    className="w-full h-[200px] md:h-[279px] rounded-[5px] object-cover"
                    alt="Project"
                    src={project.src}
                  />

                  {project.overlayClass && (
                    <img
                      className={`absolute bottom-4 left-2 right-2 md:${project.overlayClass} w-auto h-[47px]`}
                      alt="Overlay"
                      src={project.overlaySrc}
                    />
                  )}

                  <div
                    className={`absolute bottom-6 left-4 md:${project.titleClass} [font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-[20px] md:leading-[70px]`}
                  >
                    {project.title}
                  </div>

                  {project.arrowClass && (
                    <img
                      className={`absolute w-[20px] h-[20px] md:w-[26px] md:h-[26px] bottom-6 right-4 md:${project.arrowClass}`}
                      alt="Arrow"
                      src="/vector-4.svg"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-1 mt-6 md:mt-8 justify-center md:justify-start">
              {navigationDots.map((dot, index) => (
                <div
                  key={index}
                  className={`w-3 h-[3px] rounded-[15px] ${dot.active ? "bg-[#d9d9d9]" : "bg-[#0000004c]"}`}
                >
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
