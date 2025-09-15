"use client";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const servicesData = [
  {
    id: "01",
    title: "Residential Construction",
    description:
      "We design and build durable, elegant homes tailored to your lifestyle and future needs.",
    image: "/rectangle-28.png",
  },
  {
    id: "02",
    title: "Commerical Projects",
    description:
      "Specialized in high-performance office buildings, retails spaces and corporate infrastructures.",
    image: "/rectangle-30.png",
  },
  {
    id: "03",
    title: "Renovation & Remodeling",
    description:
      "Give your old spaces a fresh new look with our expert renovation and interior upgrade services.",
    image: "/rectangle-21.png",
  },
];

export const ServicesSection = (): JSX.Element => {
  const handleExploreAll = () => {
    console.log("Explore All Services clicked");
  };

  const handleViewDetails = (serviceTitle: string) => {
    console.log(`View Details clicked for: ${serviceTitle}`);
  };

  return (
    <section
      id="services"
      className="w-full bg-[#f7fbfe] py-8 md:py-[72px] px-4 md:px-[80px]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 md:mb-[60px] gap-8">
          <div className="flex flex-col gap-2">
            <Badge
              variant="outline"
              className="w-fit rounded-[5px] border-[#0000004c] bg-transparent mb-2"
            >
              <span className="font-medium text-[#000000cc] text-base">
                Our Services
              </span>
            </Badge>
            <h2 className="w-full md:w-[539px] font-semibold text-black text-3xl md:text-5xl leading-[40px] md:leading-[60px]">
              What We Provide <br /> In Our Services
            </h2>
          </div>
          <Button
            onClick={handleExploreAll}
            className="h-[40px] w-[120px] bg-[#e7ecf7] hover:bg-[#d2d8e6] rounded-[8px] font-medium text-[#222] text-sm md:text-base flex items-center gap-2"
          >
            Explore All
            <img
              className="w-[18px] h-[18px] ml-1"
              alt="Vector"
              src="/vector-4.svg"
            />
          </Button>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-12">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-stretch gap-8`}
            >
              {/* Image */}
              <div className="flex-1">
                <img
                  className="w-full h-[200px] md:h-[240px] rounded-[16px] object-cover"
                  alt={service.title}
                  src={service.image}
                />
              </div>

              {/* Text */}
              <div
                className={`flex-1 flex flex-col justify-center ${
                  index % 2 === 0
                    ? "border-l border-[#d3d3d3] pl-8 text-left items-start"
                    : "border-r border-[#d3d3d3] pr-8 text-right items-end"
                }`}
              >
                {/* Number */}
                <span className="font-bold text-gray-400 text-3xl md:text-4xl mb-2">
                  {service.id}
                </span>

                {/* Title + Desc */}
                <h3 className="font-semibold text-black text-xl md:text-2xl mb-2">
                  {service.title}
                </h3>
                <p className="font-normal text-black text-base md:text-lg mb-4 max-w-[400px]">
                  {service.description}
                </p>

                <Button
                  onClick={() => handleViewDetails(service.title)}
                  variant="outline"
                  className="h-[38px] w-[140px] rounded-[5px] border-[#0000004c] bg-transparent font-medium text-[#000000cc] text-sm md:text-base flex items-center gap-2"
                >
                  VIEW DETAILS
                  <img
                    className="w-[18px] h-[18px] ml-1"
                    alt="Arrow"
                    src="/vector-4.svg"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
