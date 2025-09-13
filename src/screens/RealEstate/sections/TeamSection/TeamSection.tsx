import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = (): JSX.Element => {
  const teamMembers = [
    {
      name: "ETHAN MILLER",
      title: "Chief Structural Engineer",
      image: "/rectangle-44.png",
      backgroundImage: "/rectangle-45.svg",
    },
    {
      name: "ISABELL GARCIA",
      title: "Senior Project Manager",
      image: "/rectangle-47.png",
      backgroundImage: "/rectangle-45.svg",
    },
    {
      name: "LIAM CHEN",
      title: "Lead Site Supervisor",
      image: "/rectangle-49.png",
      backgroundImage: "/rectangle-45.svg",
    },
  ];

  const clientImages = [
    "/rectangle-44-1.png",
    "/rectangle-47-1.png",
    "/rectangle-49-1.png",
  ];

  const starImages = [
    "/star-1.svg",
    "/star-2.svg",
    "/star-3.svg",
    "/star-4.svg",
    "/star-5.svg",
  ];

  const handleViewAllTeam = () => {
    console.log("View All Team clicked");
  };

  const handleViewAllTestimonials = () => {
    console.log("View All Testimonials clicked");
  };

  return (
    <section id="team" className="w-full bg-[#f7fbfe] py-8 md:py-6 px-4">
      <div className="max-w-[1266px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-[5px] border-[#0000004c] text-[#000000cc] [font-family:'Poppins',Helvetica] font-medium"
            >
              Our Team
            </Badge>
            <h1 className="text-3xl md:text-6xl font-semibold [font-family:'Poppins',Helvetica] text-black leading-[40px] md:leading-[70px] max-w-full md:max-w-[478px]">
              Meet Our Team
            </h1>
          </div>

          <Button
            onClick={handleViewAllTeam}
            variant="outline"
            className="h-auto rounded-[5px] border-[#0000004c] text-[#000000cc] [font-family:'Poppins',Helvetica] font-medium px-2 py-2 flex items-center gap-2 w-full md:w-auto"
          >
            VIEW ALL
            <img
              src="/vector-4.svg"
              alt="Arrow"
              className="w-[26px] h-[26px]"
            />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="relative w-full max-w-[361px] mx-auto h-80 bg-transparent border-0 shadow-none"
            >
              <CardContent className="p-0 relative">
                <img
                  className="absolute w-full h-[271px] top-[17px] left-0"
                  alt="Background"
                  src={member.backgroundImage}
                />
                <img
                  className="absolute w-[calc(100%-30px)] h-[306px] top-0 left-[15px] rounded-[5px] object-cover"
                  alt={member.name}
                  src={member.image}
                />
                <div className="absolute w-[calc(100%-60px)] h-[38px] top-[254px] left-[29px] bg-[#00000080] blur-[20px]" />
                <div className="absolute top-[229px] left-[52px] [font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[70px]">
                  {member.name}
                </div>
                <div className="absolute top-[250px] left-[52px] [font-family:'Poppins',Helvetica] font-normal text-white text-[10px] md:text-[11px] tracking-[0] leading-[70px]">
                  {member.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src="/vector-9.svg"
            alt="Left arrow"
            className="w-3 h-2.5 mr-4"
          />
          <img src="/vector-6.svg" alt="Right arrow" className="w-3 h-2.5" />
        </div>

        <Card className="w-full bg-[#d7eaf3] rounded-[20px] border-0 shadow-none mt-12 overflow-hidden">
          <CardContent className="p-4 md:p-0 relative h-auto md:h-[471px]">
            <div className="md:absolute w-full md:w-[271px] md:top-[72px] md:left-[71px] [font-family:'Poppins',Helvetica] font-semibold text-black text-2xl md:text-5xl tracking-[0] leading-[35px] md:leading-[60px] mb-8 md:mb-0">
              Here From Our Clients
            </div>

            <Button 
              onClick={handleViewAllTestimonials}
              className="md:absolute md:top-[343px] md:left-[71px] w-full md:w-[142px] h-[50px] md:h-[70px] bg-[#5984c8] rounded-[10px] [font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base h-auto mb-8 md:mb-0"
            >
              <span className="mr-2">VIEW ALL</span>
              <img
                src="/vector-4.svg"
                alt="Arrow"
                className="w-[26px] h-[26px]"
              />
            </Button>

            <div className="hidden md:block md:absolute space-y-4 top-16 left-[584px]">
              {clientImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    className="absolute w-[120px] h-[90px] top-1.5 left-0"
                    alt="Background"
                    src="/rectangle-45.svg"
                  />
                  <img
                    className={`absolute rounded-[5px] object-cover ${
                      index === 0
                        ? "w-[110px] h-[102px] top-0 left-[5px]"
                        : index === 1
                          ? "w-[106px] h-[98px] top-[133px] left-[14px]"
                          : "w-[93px] h-[86px] top-[263px] left-[27px]"
                    }`}
                    alt="Client"
                    src={image}
                  />
                </div>
              ))}
            </div>

            <div className="md:absolute w-full md:w-[328px] md:h-[109px] md:top-[79px] md:left-[753px] mb-4 md:mb-0">
              <div className="md:top-0 md:left-0 font-semibold text-black text-xl md:text-[32px] md:absolute [font-family:'Poppins',Helvetica] tracking-[0] leading-[30px] md:leading-[70px]">
                John Thompson
              </div>
              <div className="md:absolute md:top-[39px] md:left-1 [font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-lg tracking-[0] leading-[25px] md:leading-[70px] mt-2 md:mt-0">
                Homeowner, GreenVista Eco Homes
              </div>
            </div>

            <div className="md:absolute w-full md:w-[371px] md:top-[206px] md:left-[757px] [font-family:'Poppins',Helvetica] font-normal text-black text-sm md:text-[15px] tracking-[0] leading-[25px] md:leading-[30px] mb-4 md:mb-0">
              "Working with structon was an exceptional experience. Their
              professionalism, timely delivery, and attention to detail truly
              set them apart. I couldn't be happier with the final result!"
            </div>

            <div className="md:absolute flex gap-4 md:gap-[27px] md:top-[358px] md:left-[762px] justify-center md:justify-start">
              {starImages.map((star, index) => (
                <img
                  key={index}
                  className="w-[20px] h-[20px] md:w-[27px] md:h-[27px]"
                  alt="Star"
                  src={star}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
