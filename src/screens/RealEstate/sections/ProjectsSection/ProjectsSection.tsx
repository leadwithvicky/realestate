"use client";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const projectImages = [
  {
    src: "/rectangle-35.png",
    title: "The Arcadia Rise",
  },
  {
    src: "/rectangle-36.png",
    title: "Metro Link Business Tower",
  },
  {
    src: "/rectangle-37.png",
    title: "Green Vista Eco Home",
  },
];

export const ProjectsSection = (): JSX.Element => {
  const handleExploreAll = () => {
    console.log("Explore All Projects clicked");
  };

  return (
    <section id="projects" className="w-full bg-[#f7fbfe] py-8 md:py-11 px-4">
      <div className="max-w-[1266px] mx-auto bg-[#d7eaf3] rounded-[20px] overflow-hidden relative px-4 md:px-[50px] py-8 md:py-[45px]">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* LEFT SIDE */}
          <div className="flex-1 max-w-full lg:max-w-[428px]">
            <Badge
              variant="outline"
              className="mb-4 md:mb-6 h-[38px] px-2 py-2 rounded-[5px] border-[#0000004c] bg-transparent"
            >
              <span className="font-medium text-[#000000cc] text-base font-[Poppins]">
                Our Projects
              </span>
            </Badge>

            <h2 className="font-bold text-black text-2xl md:text-[40px] leading-[35px] md:leading-[55px] mb-4 md:mb-6 font-[Poppins]">
              Quality that speaks through our work
            </h2>

            <p className="font-normal text-black text-sm mb-6 md:mb-8 max-w-full md:max-w-[398px] font-[Inter]">
              Over the years, we&apos;ve completed a wide range of successful
              residential, commercial and industrial projects.
            </p>

            <Button
              onClick={handleExploreAll}
              className="bg-[#5984c8] hover:bg-[#4a73b5] h-10 px-4 rounded-[10px] font-[Poppins] font-medium text-white text-sm md:text-base w-full md:w-auto"
            >
              EXPLORE ALL
              <ArrowRightIcon className="w-[26px] h-[26px] ml-2" />
            </Button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 relative">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {projectImages.map((project, index) => (
                <div
                  key={index}
                  className="relative w-[260px] h-[300px] bg-gray-200 rounded-xl overflow-hidden shadow-md transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300"
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Title */}
                  <div className="absolute bottom-6 left-4 text-white font-[Poppins] font-medium text-base">
                    {project.title}
                  </div>
                  {/* Arrow */}
                  <div className="absolute bottom-6 right-4">
                    <img
                      src="/vector-4.svg"
                      alt="arrow"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-6 justify-center">
              <span className="w-3 h-[3px] bg-[#d9d9d9] rounded-[15px]" />
              <span className="w-3 h-[3px] bg-[#0000004c] rounded-[15px]" />
              <span className="w-3 h-[3px] bg-[#0000004c] rounded-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
