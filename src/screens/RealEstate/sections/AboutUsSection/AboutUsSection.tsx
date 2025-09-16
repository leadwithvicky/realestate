import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const AboutUsSection = (): JSX.Element => {
  const materials = [
    "Premium grade cement and high-strength concrete mix for durable foundations and structures",
    "Reinforcement steel bars, rebar, and structural meshes designed for maximum load-bearing capacity",
    "Eco-friendly, energy-efficient bricks and blocks crafted from sustainable raw materials",
    "Weather-resistant exterior finishes and protective coatings that ensure long-lasting durability"
  ];

  const technology = [
    "Advanced construction robotics for precision and efficiency",
    "Smart sensors and IoT for real-time site monitoring",
    "BIM (Building Information Modeling) for collaborative planning",
    "Green energy solutions integrated into building design"
  ];

  const approved = [
    "ISO 9001:2015 certified quality management system",
    "Government-approved safety protocols and standards",
    "Eco-certifications for sustainable building practices",
    "Industry awards for innovation and excellence"
  ];

  const [tabValue, setTabValue] = React.useState('materials');


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
    <section id="about" className="w-full bg-[#f7fbfe] py-6 md:py-12 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative">
        <Badge
          variant="outline"
          className="mb-2 md:mb-4 h-[32px] px-2 py-1 rounded-[5px] border-[#0000004c] bg-transparent"
        >
          <span className="[font-family:'Poppins',Helvetica] font-medium text-[#000000cc] text-base">
            About Our Company
          </span>
        </Badge>

        <h2 className="w-full md:w-[606px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] mb-4 md:mb-8">
          Building with trust, driven by experience
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start mb-4 md:mb-8 gap-6">
          {/* Left: Tabs and materials list (mobile: stacked above image) */}
          <div className="w-full lg:flex-1 min-w-0 flex flex-col justify-start">
            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="h-14 md:h-20 bg-transparent p-0 border-b border-[#d9d9d9] rounded-none w-full justify-start flex-wrap md:flex-nowrap">
                <TabsTrigger
                  value="materials"
                  className="h-14 md:h-20 px-1.5 [font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-2xl leading-[48px] md:leading-[80px] bg-transparent border-b-2 border-[#00000040] data-[state=active]:border-[#00000040] rounded-none"
                  onClick={() => setTabValue('materials')}
                >
                  Materials
                </TabsTrigger>
                <TabsTrigger
                  value="technology"
                  className="h-14 md:h-20 px-4 md:px-[25px] [font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-2xl leading-[48px] md:leading-[80px] bg-transparent border-b-2 border-transparent rounded-none"
                  onClick={() => setTabValue('technology')}
                >
                  Technology
                </TabsTrigger>
                <TabsTrigger
                  value="approved"
                  className="h-14 md:h-20 px-4 md:px-[25px] [font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-2xl leading-[48px] md:leading-[80px] bg-transparent border-b-2 border-transparent rounded-none"
                  onClick={() => setTabValue('approved')}
                >
                  Approved
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              {(tabValue === 'materials' ? materials : tabValue === 'technology' ? technology : approved).map((item, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4">
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
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Parallelogram image container with play button, occupies half space (mobile: full width, normal rectangle) */}
          <div className="w-full lg:flex-1 flex items-center justify-center h-[180px] md:h-[340px] mt-4 lg:mt-0">
            <div
              className="w-full h-full bg-[url(/rectangle-13.png)] bg-cover bg-center overflow-hidden flex items-center justify-center"
              style={{
                clipPath: window.innerWidth < 1024 ? 'none' : 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
              }}
            >
              <img className="w-[40px] h-[40px] md:w-[68px] md:h-[68px] z-10" alt="Frame" src="/frame-1.svg" />
            </div>
          </div>
        </div>

        {/* Features in white boxes */}
        <div className="relative mb-4 md:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
  <div className="w-full rounded-[25px] overflow-hidden bg-gradient-to-r from-[#cdd8e3] via-[#c6d5e0] to-[#b5c8d4] border-0 py-6 md:py-8 px-2 md:px-0 flex flex-col items-center relative">
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
