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

        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-[434px] gap-8">
          <div className="flex-1 max-w-full lg:max-w-[507px]">
            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="h-16 md:h-20 bg-transparent p-0 border-b border-[#d9d9d9] rounded-none w-full justify-start flex-wrap md:flex-nowrap">
                <TabsTrigger
                  value="materials"
                  className="h-16 md:h-20 px-1.5 [font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-2xl leading-[60px] md:leading-[80px] bg-transparent border-b-2 border-[#00000040] data-[state=active]:border-[#00000040] rounded-none"
                >
                  Materials
                </TabsTrigger>
                <TabsTrigger
                  value="technology"
                  className="h-16 md:h-20 px-4 md:px-[25px] [font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-2xl leading-[60px] md:leading-[80px] bg-transparent border-b-2 border-transparent rounded-none"
                >
                  Technology
                </TabsTrigger>
                <TabsTrigger
                  value="approved"
                  className="h-16 md:h-20 px-4 md:px-[25px] [font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-2xl leading-[60px] md:leading-[80px] bg-transparent border-b-2 border-transparent rounded-none"
                >
                  Approved
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="mt-8 md:mt-[68px] space-y-4 md:space-y-[35px]">
              {materials.map((material, index) => (
                <div key={index} className="flex items-center gap-4 md:gap-[30px]">
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

          <div className="w-full lg:w-[565px] h-[300px] md:h-[462px] rounded-[20px] bg-[url(/rectangle-13.png)] bg-cover bg-[50%_50%] relative flex items-center justify-center">
            <img className="w-[68px] h-[68px]" alt="Frame" src="/frame-1.svg" />
          </div>
        </div>

        <div className="relative mb-8 md:mb-[308px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="relative text-center">
                <img
                  className="w-full max-w-[338px] h-[100px] md:h-[145px] mb-4 md:mb-[22px] mx-auto"
                  alt="Rectangle"
                  src="/rectangle-19.svg"
                />
                <div className="absolute -top-4 md:-top-[22px] left-1/2 transform -translate-x-1/2 w-11 h-11 bg-[#dbebf6] rounded-[22px] border-2 border-[#d9d9d9] flex items-center justify-center">
                  <div className="w-[21px] h-[21px] rounded-[10.5px] border border-[#8a7952] flex items-center justify-center">
                    <img
                      className="w-[17px] h-[13px]"
                      alt="Vector"
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
                <div className="w-full text-center">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-2xl">
                    {feature.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="w-full h-auto md:h-[261px] rounded-[25px] overflow-hidden bg-[linear-gradient(90deg,rgba(205,216,227,1)_0%,rgba(198,213,224,1)_50%,rgba(181,200,212,1)_100%)] border-0">
          <CardContent className="relative w-full h-full p-8 md:p-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:relative md:w-[1623px] md:h-[672px] md:top-[-198px] md:left-[-179px] md:bg-[url(/d0aa474a60ca27782b4fed56654c74bc-1.png)] md:bg-cover md:bg-[50%_50%]">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center md:absolute">
                  <div
                    className={`md:absolute md:top-[296px] ${stat.leftNumber} [font-family:'Inter',Helvetica] font-semibold text-black text-2xl md:text-[50px] tracking-[0] leading-[normal]`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`md:absolute md:top-[369px] ${stat.leftLabel} [font-family:'Inter',Helvetica] font-medium text-black text-sm md:text-[28px] tracking-[0] leading-[normal] mt-2 md:mt-0`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
