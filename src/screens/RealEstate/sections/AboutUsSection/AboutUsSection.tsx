import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const AboutUsSection = (): JSX.Element => {
  const materials = [
    "Premium grade cement & concrete",
    "Reinforcement steel & rebar",
    "Eco-friendly bricks & blocks",
    "Weather-resistant finishes",
  ];

  const features = [
    {
      title: "Quality control system",
      leftPosition: "left-[79px]",
    },
    {
      title: "100% statisfaction guarantee",
      leftPosition: "left-[373px]",
    },
    {
      title: "Highly professional team",
      leftPosition: "left-[680px]",
    },
    {
      title: "Accurate testing process",
      leftPosition: "left-[1022px]",
    },
  ];

  const statistics = [
    {
      number: "8k+",
      label: "Project completed",
      leftNumber: "left-[331px]",
      leftLabel: "left-[255px]",
    },
    {
      number: "5k+",
      label: "Global customers",
      leftNumber: "left-[627px]",
      leftLabel: "left-[556px]",
    },
    {
      number: "12",
      label: "Year of experiences",
      leftNumber: "left-[933px]",
      leftLabel: "left-[847px]",
    },
    {
      number: "92",
      label: "Team engineer",
      leftNumber: "left-[1237px]",
      leftLabel: "left-[1169px]",
    },
  ];

  return (
    <section id="about" className="w-full bg-[#f7fbfe] py-8 md:py-[71px] relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[113px] relative">
        <Badge
          variant="outline"
          className="mb-4 md:mb-[17px] h-[38px] px-2 py-2 rounded-[5px] border-[#0000004c] bg-transparent"
        >
          <span className="[font-family:'Poppins',Helvetica] font-medium text-[#000000cc] text-base">
            About Our Company
          </span>
        </Badge>

        <h2 className="w-full md:w-[606px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[32px] md:text-[55px] leading-[40px] md:leading-[80px] mb-8 md:mb-[127px]">
          Building with trust, driven by experience
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-[80px] gap-8">
          {/* Left: Tabs and materials list */}
          <div className="flex-1 max-w-full lg:max-w-[507px]">
            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="h-14 md:h-20 bg-transparent p-0 border-b border-[#d9d9d9] rounded-none w-full justify-start flex-wrap md:flex-nowrap">
                <TabsTrigger
                  value="materials"
                  className="h-14 md:h-20 px-1.5 [font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-2xl leading-[48px] md:leading-[80px] bg-transparent border-b-2 border-[#00000040] data-[state=active]:border-[#00000040] rounded-none"
                >
                  Materials
                </TabsTrigger>
                <TabsTrigger
                  value="technology"
                  className="h-14 md:h-20 px-4 md:px-[25px] [font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-2xl leading-[48px] md:leading-[80px] bg-transparent border-b-2 border-transparent rounded-none"
                >
                  Technology
                </TabsTrigger>
                <TabsTrigger
                  value="approved"
                  className="h-14 md:h-20 px-4 md:px-[25px] [font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-2xl leading-[48px] md:leading-[80px] bg-transparent border-b-2 border-transparent rounded-none"
                >
                  Approved
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="mt-6 md:mt-[48px] space-y-3 md:space-y-[24px]">
              {materials.map((material, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-[18px]">
                  <div className="w-[21px] h-3.5 relative flex-shrink-0">
                    <img
                      className="absolute w-4 h-3.5 top-0 left-[5px]"
                      alt="Vector"
                      src="/vector.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[11px] top-0.5 left-0"
                      alt="Vector"
                      src="/vector-12.svg"
                    />
                  </div>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm md:text-[15px]">
                    {material}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Angled image container with play button, responsive aspect */}
          <div className="w-full max-w-full lg:w-[420px] aspect-[16/10] md:aspect-auto md:h-[340px] relative flex items-center justify-center">
            <div className="w-full h-full bg-[url(/rectangle-13.png)] bg-cover bg-center rounded-[24px] overflow-hidden" /*style={{clipPath:'polygon(5% 5%, 90% 5%, 100% 185%, 100% 100%, 10% 100%)'}}*/>
              <div className="w-full h-full flex items-center justify-center">
                <img className="w-[48px] h-[48px] md:w-[68px] md:h-[68px]" alt="Frame" src="/frame-1.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* Features in white boxes */}
        <div className="relative mb-8 md:mb-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-[16px] shadow-md flex flex-col items-center py-8 px-4 min-h-[160px]">
                <div className="w-12 h-12 bg-[#dbebf6] rounded-full border-2 border-[#d9d9d9] flex items-center justify-center mb-4">
                  <div className="w-[21px] h-[21px] rounded-[10.5px] border border-[#8a7952] flex items-center justify-center">
                    <img
                      className="w-[17px] h-[13px]"
                      alt="Vector"
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
                <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-2xl text-center">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics bar */}
        <div className="w-full rounded-[25px] overflow-hidden bg-gradient-to-r from-[#cdd8e3] via-[#c6d5e0] to-[#b5c8d4] border-0 py-8 md:py-12 px-4 md:px-0 flex flex-col items-center relative">
          <img src="/d0aa474a60ca27782b4fed56654c74bc-1.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none" />
          <div className="relative w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 z-10">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-4">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-black text-3xl md:text-[50px] tracking-[0] leading-[normal]">
                  {stat.number}
                </span>
                <span className="[font-family:'Inter',Helvetica] font-medium text-black text-base md:text-[22px] tracking-[0] leading-[normal] mt-2 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
