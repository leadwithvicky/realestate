"use client";
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
    },
    {
      name: "ISABELL GARCIA",
      title: "Senior Project Manager",
      image: "/rectangle-47.png",
    },
    {
      name: "LIAM CHEN",
      title: "Lead Site Supervisor",
      image: "/rectangle-49.png",
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

  return (
    <section id="team" className="w-full bg-[#f7fbfe] py-16 px-4">
      <div className="max-w-[1266px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-[5px] border-[#0000004c] text-[#000000cc] font-medium"
            >
              Our Team
            </Badge>
            <h1 className="text-3xl md:text-6xl font-semibold font-poppins text-black leading-[40px] md:leading-[70px]">
              Meet Our Team
            </h1>
          </div>

          <Button
            variant="outline"
            className="rounded-[5px] border-[#0000004c] text-[#000000cc] px-3 py-2 flex items-center gap-2"
          >
            VIEW ALL
            <img src="/vector-4.svg" alt="Arrow" className="w-5 h-5" />
          </Button>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {teamMembers.map((member, i) => (
            <div key={i} className="relative group w-full max-w-[361px] mx-auto">
              {/* Background Frame */}
              <div className="absolute inset-0 scale-105 translate-x-2 translate-y-2 border border-[#ccc] rounded-md 
                [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] pointer-events-none"></div>

              {/* Foreground Image Card */}
              <div className="relative w-full h-[340px] overflow-hidden 
                [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                  <h3 className="text-white font-medium text-lg">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-sm">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="flex justify-center items-center gap-6 mb-16">
          <img src="/vector-9.svg" alt="Left" className="w-3 h-3" />
          <img src="/vector-6.svg" alt="Right" className="w-3 h-3" />
        </div>

        {/* Testimonial Section */}
        <Card className="w-full bg-[#d7eaf3] rounded-[20px] border-0 shadow-none overflow-hidden">
  <CardContent className="p-8 md:p-12 relative">
    {/* Left Title */}
    <div className="font-semibold text-black text-3xl md:text-5xl leading-snug mb-6 md:mb-0">
      Hear From Our Clients
    </div>

    {/* View All button */}
    <Button className="bg-[#5984c8] rounded-[10px] text-white font-medium mt-4 md:mt-8 px-6 py-4 flex items-center gap-2">
      VIEW ALL
      <img src="/vector-4.svg" alt="Arrow" className="w-5 h-5" />
    </Button>

    {/* Testimonials Wrapper */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
      {[
        {
          name: "John Thompson",
          role: "Homeowner, GreenVista Eco Homes",
          feedback:
            "Working with Structon was an exceptional experience. Their professionalism, timely delivery, and attention to detail truly set them apart.",
          img: clientImages[0],
        },
        {
          name: "Sophia Martinez",
          role: "CEO, BrightBuild Interiors",
          feedback:
            "The Structon team exceeded our expectations with their creative solutions. The final outcome was beyond what we imagined.",
          img: clientImages[1],
        },
        {
          name: "Michael Lee",
          role: "Founder, EcoTech Solutions",
          feedback:
            "From concept to execution, Structon handled everything seamlessly. Their dedication and commitment are unmatched.",
          img: clientImages[2],
        },
      ].map((client, idx) => (
        <div key={idx} className="relative bg-white rounded-[20px] p-6 shadow-md">
          {/* Client Image with Frame */}
          <div className="relative w-[120px] h-[100px] mb-6 mx-auto">
            {/* Background Frame */}
            <div
              className="absolute inset-0 border border-[#ccc] 
              [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] scale-105 translate-x-1 translate-y-1"
            ></div>

            {/* Foreground Image */}
            <div className="[clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] shadow-md w-full h-full">
              <img
                src={client.img}
                alt={client.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Client Testimonial */}
          <h3 className="text-xl md:text-2xl font-semibold text-black text-center">
            {client.name}
          </h3>
          <p className="text-black/80 text-sm md:text-base text-center mb-4">
            {client.role}
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed text-center mb-6">
            "{client.feedback}"
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-2">
            {starImages.map((star, idx) => (
              <img key={idx} src={star} alt="star" className="w-5 h-5" />
            ))}
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
