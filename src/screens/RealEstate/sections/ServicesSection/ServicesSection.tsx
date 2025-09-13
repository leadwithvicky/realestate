import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const servicesData = [
  {
    id: "01",
    title: "Residential Construction",
    description:
      "We design and build durable, elegant homes tailored to your lifestyle and future needs.",
    image: "/rectangle-28.png",
    position: "top-right",
  },
  {
    id: "02",
    title: "Commerical Projects",
    description:
      "Specialized in high-performance office buildings, retails spaces and corporate infrastructures.",
    image: "/rectangle-30.png",
    position: "bottom-left",
  },
  {
    id: "03",
    title: "Renovation & Remodeling",
    description:
      "Give your old spaces a fresh new look with our expert renovation and interior upgrade services",
    image: null,
    position: "bottom-right",
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
    <section id="services" className="w-full bg-[#f7fbfe] py-8 md:py-[72px] px-4 md:px-[103px]">
      <div className="max-w-[1224px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 md:mb-[215px] gap-8">
          <div className="flex flex-col gap-2">
            <Badge
              variant="outline"
              className="w-fit rounded-[5px] border-[#0000004c] bg-transparent"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#000000cc] text-base">
                Our Services
              </span>
            </Badge>

            <h2 className="w-full md:w-[539px] [font-family:'Poppins',Helvetica] font-semibold text-black text-3xl md:text-6xl leading-[40px] md:leading-[70px]">
              What We Provide In Our Services
            </h2>
          </div>

          <Button 
            onClick={handleExploreAll}
            className="h-[50px] md:h-[70px] w-[150px] md:w-[183px] bg-[#5984c8] hover:bg-[#4a73b5] rounded-[10px] [font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base"
          >
            Explore All
            <img
              className="w-[26px] h-[26px] ml-2"
              alt="Vector"
              src="/vector-4.svg"
            />
          </Button>
        </div>

        <div className="relative">
          <img
            className="w-full md:w-[589px] h-[200px] md:h-[324px] rounded-[20px] object-cover mb-8"
            alt="Rectangle"
            src="/rectangle-21.png"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xl md:text-2xl">
                    01
                  </span>
                  <div className="hidden md:block w-px h-[324px] bg-[#00000080]" />
                  <div className="flex-1">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl md:text-4xl mb-4 md:mb-[18px]">
                      Residential Construction
                    </h3>
                    <p className="w-full md:w-[350px] [font-family:'Inter',Helvetica] font-normal text-black text-base md:text-xl mb-6 md:mb-[194px]">
                      We design and build durable, elegant homes tailored to
                      your lifestyle and future needs.
                    </p>
                    <Button
                      onClick={() => handleViewDetails("Residential Construction")}
                      variant="outline"
                      className="h-[38px] w-full md:w-[151px] rounded-[5px] border-[#0000004c] bg-transparent [font-family:'Poppins',Helvetica] font-medium text-[#000000cc] text-sm md:text-base"
                    >
                      VIEW DETAILS
                      <img
                        className="w-[26px] h-[26px] ml-2"
                        alt="Vector"
                        src="/vector-4.svg"
                      />
                    </Button>
                  </div>
                </div>
                <img
                  className="w-full md:w-[589px] h-[200px] md:h-[324px] md:ml-[26px] rounded-[20px] object-cover"
                  alt="Rectangle"
                  src="/rectangle-28.png"
                />
              </CardContent>
            </Card>

            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xl md:text-2xl">
                    02
                  </span>
                  <div className="hidden md:block w-px h-[324px] bg-[#00000080]" />
                  <div className="flex-1">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl md:text-4xl mb-4 md:mb-[18px]">
                      Commerical Projects
                    </h3>
                    <p className="w-full md:w-[374px] [font-family:'Inter',Helvetica] font-normal text-black text-base md:text-xl mb-6 md:mb-[194px]">
                      Specialized in high-performance office buildings, retails
                      spaces and corporate infrastructures.
                    </p>
                    <Button
                      onClick={() => handleViewDetails("Commercial Projects")}
                      variant="outline"
                      className="h-[38px] w-full md:w-[151px] rounded-[5px] border-[#0000004c] bg-transparent [font-family:'Poppins',Helvetica] font-medium text-[#000000cc] text-sm md:text-base"
                    >
                      VIEW DETAILS
                      <img
                        className="w-[26px] h-[26px] ml-2"
                        alt="Vector"
                        src="/vector-4.svg"
                      />
                    </Button>
                  </div>
                </div>
                <img
                  className="w-full md:w-[589px] h-[200px] md:h-[324px] rounded-[20px] object-cover"
                  alt="Rectangle"
                  src="/rectangle-30.png"
                />
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <div className="hidden md:block w-px h-[324px] bg-[#00000080] mx-auto mb-8" />

            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xl md:text-2xl">
                    03
                  </span>
                  <div className="hidden md:block w-px h-[174px] bg-[#00000080]" />
                  <div className="flex-1">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl md:text-4xl mb-4 md:mb-[18px]">
                      Renovation & Remodeling
                    </h3>
                    <p className="w-full md:w-[381px] [font-family:'Inter',Helvetica] font-normal text-black text-base md:text-xl mb-6">
                      Give your old spaces a fresh new look with our expert
                      renovation and interior upgrade services
                    </p>
                    <Button
                      onClick={() => handleViewDetails("Renovation & Remodeling")}
                      variant="outline"
                      className="h-[38px] w-full md:w-[151px] rounded-[5px] border-[#0000004c] bg-transparent [font-family:'Poppins',Helvetica] font-medium text-[#000000cc] text-sm md:text-base"
                    >
                      VIEW DETAILS
                      <img
                        className="w-[26px] h-[26px] ml-2"
                        alt="Vector"
                        src="/vector-4.svg"
                      />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
