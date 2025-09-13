import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const BlogSection = (): JSX.Element => {
  const blogPosts = [
    {
      image: "/rectangle-55.png",
      title: "Building Strong Foundations, Why It Matters",
      date: "10 May 2025",
    },
    {
      image: "/rectangle-63.png",
      title: "Top 5 Modern Construction Materials in 2025",
      date: "10 May 2025",
    },
    {
      image: "/rectangle-66.png",
      title: "Technology That's Changing the Game",
      date: "10 May 2025",
    },
  ];

  const partners = [
    {
      logo: "/vector-27.svg",
      name: "Quantum",
    },
    {
      logo: "/vector-11.svg",
      name: "Chroma",
    },
    {
      logo: "/vector-35.svg",
      name: "Spectrum",
    },
    {
      logo: "/vector-34.svg",
      name: "Dynamo",
    },
  ];

  const footerLinks = [
    {
      title: "About Us",
      links: [],
    },
    {
      title: "Discover",
      links: [],
    },
    {
      title: "Explore",
      links: [],
    },
    {
      title: "Address",
      links: [],
    },
  ];

  const socialIcons = ["/vector-28.svg", "/group.png", "/vector-13.svg"];

  const handleViewAllBlogs = () => {
    console.log("View All Blogs clicked");
  };

  const handleGetEstimatedRate = () => {
    console.log("Get Estimated Rate clicked");
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Send Message clicked");
    // Handle form submission
  };

  return (
    <section className="w-full bg-[#f7fbfe] py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-16 gap-4">
          <h2 className="text-3xl md:text-6xl font-semibold [font-family:'Poppins',Helvetica] text-black leading-[40px] md:leading-[80px] max-w-full md:max-w-[731px]">
            Get More Update from Blogs and Articles
          </h2>
          <Button
            onClick={handleViewAllBlogs}
            variant="outline"
            className="h-auto px-4 py-2 rounded-[5px] border-[#0000004c] w-full md:w-auto"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-[#000000cc] text-base mr-2">
              VIEW ALL
            </span>
            <img
              src="/vector-4.svg"
              alt="Arrow"
              className="w-[26px] h-[26px]"
            />
          </Button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-16">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-[15px] border-0 shadow-none"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={post.image}
                    alt="Blog post"
                    className="w-full h-[250px] md:h-[358px] object-cover rounded-[15px]"
                  />
                  <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 md:left-[78px] md:transform-none">
                    <img
                      src="/rectangle-65.svg"
                      alt="Date background"
                      className="w-[133px] h-[35px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm md:text-base">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative mt-[-50px] md:mt-[-59px]">
                  <img
                    src="/rectangle-67.svg"
                    alt="Content background"
                    className="w-full h-[60px] md:h-[73px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-sm md:text-lg max-w-[200px] md:max-w-[251px]">
                      {post.title}
                    </h3>
                    <img src="/vector-18.svg" alt="Arrow" className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners Section */}
        <div className="grid grid-cols-2 md:flex justify-center items-center gap-8 md:gap-16 mb-8 md:mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-[60px] h-[60px] md:w-[95px] md:h-[95px]"
              />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#00000080] text-lg md:text-[32px]">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="relative rounded-[20px] overflow-hidden mb-8 md:mb-16"
          style={{
            backgroundImage: "url(/frame-4.png)",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        >
          <div className="bg-[#2e6b8bcc] py-12 md:py-24 px-4 md:px-8 text-center">
            <h3 className="text-2xl md:text-[50px] font-semibold [font-family:'Poppins',Helvetica] text-white leading-[35px] md:leading-[80px] max-w-full md:max-w-[886px] mx-auto mb-6 md:mb-8">
              Ready to build your dream? Schedule your consultation today!
            </h3>
            <Button
              onClick={handleGetEstimatedRate}
              variant="outline"
              className="h-auto px-4 py-2 rounded-[5px] border-white text-white hover:bg-white hover:text-black w-full md:w-auto"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-base mr-2">
                GET ESTIMATED RATE
              </span>
              <img
                src="/vector-4.svg"
                alt="Arrow"
                className="w-[26px] h-[26px]"
              />
            </Button>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 md:mb-16">
          {/* Left Side - Image with overlay */}
          <div className="relative rounded-[30px] overflow-hidden">
            <img
              src="/rectangle-70.png"
              alt="Contact"
              className="w-full h-[400px] md:h-[635px] object-cover"
            />
            <img
              src="/rectangle-71.svg"
              alt="Overlay"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
              <h4 className="text-2xl md:text-4xl font-semibold [font-family:'Poppins',Helvetica] text-white leading-[35px] md:leading-[60px] max-w-full md:max-w-[328px] mb-4 md:mb-8">
                Give us a call for more information
              </h4>
              <p className="text-sm md:text-base [font-family:'Poppins',Helvetica] text-white leading-[20px] md:leading-[25px] max-w-full md:max-w-[292px]">
                Dedicated to building spaces with strength and soul, trusted by
                clients crafed with care.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#dbebf6b2] rounded-[15px] border border-[#87878766] p-4 md:p-8">
            <form onSubmit={handleSendMessage} className="space-y-4 md:space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  className="h-[50px] md:h-[61px] bg-[#ffffffcc] border-[#87878766] rounded-[5px] [font-family:'Poppins',Helvetica] text-[13px] text-[#00000080]"
                />
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  className="h-[50px] md:h-[61px] bg-[#ffffffcc] border-[#87878766] rounded-[5px] [font-family:'Poppins',Helvetica] text-[13px] text-[#00000080]"
                />
              </div>
              <div>
                <Input
                  placeholder="Phone"
                  type="tel"
                  className="h-[50px] md:h-[61px] bg-[#ffffffcc] border-[#87878766] rounded-[5px] [font-family:'Poppins',Helvetica] text-[13px] text-[#00000080]"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  className="h-[120px] md:h-[159px] bg-[#ffffffcc] border-[#87878766] rounded-[5px] [font-family:'Poppins',Helvetica] text-[13px] text-[#00000080] resize-none"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox className="w-5 h-5 md:w-7 md:h-[26px] bg-[#ffffffcc] border-[#87878766] rounded-sm" />
                <span className="text-[9px] md:text-[10px] [font-family:'Poppins',Helvetica]">
                  <span className="text-[#00000080]">
                    I have read and accept the
                  </span>
                  <span className="text-black"> </span>
                  <span className="text-[#5984c8]">privacy policy</span>
                </span>
              </div>
              <Button 
                type="submit"
                className="w-full md:w-[152px] h-[45px] md:h-[52px] bg-[#5984c8] hover:bg-[#4a73b5] rounded-[5px]"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[11px]">
                  Send message
                </span>
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#00000080] pt-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 mb-8">
            <div>
              <h5 className="text-2xl md:text-[40px] font-bold [font-family:'Poppins',Helvetica] text-black">
                STRUCTON
              </h5>
            </div>
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h6 className="text-lg md:text-2xl [font-family:'Poppins',Helvetica] text-black mb-2 md:mb-4">
                  {section.title}
                </h6>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-[15px] [font-family:'Poppins',Helvetica] font-medium text-black">
              @2025 Struction. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-[22px] shadow-[0px_4px_4px_#00000040] flex items-center justify-center"
                >
                  <img src={icon} alt="Social icon" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
