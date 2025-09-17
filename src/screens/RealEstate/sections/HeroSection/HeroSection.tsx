import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navSections = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT US", href: "#contact" },
  ];
  const [activeNav, setActiveNav] = React.useState("HOME");

  const featureCards = [
    {
      image: "/rectangle-12.png",
      title: "Smart methods",
      description:
        "Smart techniques that reduce cost, save time, and enhance project quality.",
    },
    {
      image: "/rectangle-10.png",
      title: "Experienced team",
      description:
        "Led by seasoned professionals committed to precision and safety.",
    },
    {
      image: "/rectangle-11.png",
      title: "Modern equipment",
      description:
        "From automated tools to heavy duty machinery we're powered by innovation.",
    },
  ];

  const handleNavClick = (href: string, label: string) => {
    setActiveNav(label);
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleGetQuote = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#f7fbfe] relative">
      <div className="relative w-full max-w-[1357px] mx-auto pt-4 px-2 md:pt-6 md:px-6">
        {/* Hero Container */}
        <div className="w-full rounded-[18px] overflow-hidden relative">
          {/* Hero Image */}
        
          <img
            className="w-full h-[500px] md:h-[600px] lg:h-[650px] object-cover object-center"
            alt="Hero"
            src="https://res.cloudinary.com/denikmblr/image/upload/v1758114497/Rectangle_1_bonwpv.png"
          />

          {/* Overlay Heading & Button */}
          <div className="absolute top-[15%] md:top-[20%] left-[5%] z-20 flex flex-col items-start">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-3xl md:text-5xl lg:text-[56px] leading-snug md:leading-[70px] mb-6">
              Building Your Vision
              <br />
              with Strength & Precision
            </h2>
            <Button
              onClick={handleViewProjects}
              className="bg-white hover:bg-[#dbebf6] text-black rounded-[10px] px-6 py-4 h-[60px] md:h-[70px] w-auto shadow-md border border-[#b5d3e7] flex items-center gap-2"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-base">
                VIEW OUR PROJECTS
              </span>
              <img className="w-[22px] h-5" alt="Vector" src="/vector-1.svg" />
            </Button>
          </div>
        </div>

        {/* ✅ Floating Feature Cards overlapping bottom of Hero Image */}
        <div className="w-full flex justify-center -mt-20 z-30 px-4 md:px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-[18px] shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6 max-w-[1200px] w-full mb-2">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="flex-1 bg-white rounded-[15px] border-0 shadow-md flex flex-row items-center gap-4 p-4 "
              >
                <img
                  className="w-[100px] h-[80px] md:w-[110px] md:h-[90px] rounded-[8px] object-cover flex-shrink-0"
                  alt={card.title}
                  src={card.image}
                />
                <div className="flex flex-col">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg md:text-xl mb-2">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] text-black text-sm md:text-[13px] leading-5">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Header */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between pt-4 md:pt-8 px-4 md:px-8 z-40">
          <h1 className="[font-family:'Poppins',Helvetica] font-bold text-black text-[28px] md:text-[32px]">
            STRUCTON
          </h1>
          <nav className="hidden fixed top-5 md:flex items-center justify-center  bg-white rounded-[12px] border-2 border-[#00000026] px-4 py-2 mx-auto w-[45%] left-[27%] ">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6 w-full">
                {navSections.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.label);
                      }}
                      className={`[font-family:'Poppins',Helvetica] text-base  ${
                        activeNav === item.label
                          ? "font-semibold"
                          : "font-medium"
                      } text-black hover:text-gray-600`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <Button
            onClick={handleGetQuote}
            className="hidden md:flex bg-[#dbebf6] hover:bg-[#c5ddf0] text-black rounded-[10px] px-6 py-3 h-[44px] items-center gap-2 shadow-md border border-[#b5d3e7]"
            style={{ minWidth: 181, minHeight: 44 }}
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-base">
              Get A QUOTE
            </span>
            <img className="w-[22px] h-5" alt="Vector" src="/vector-1.svg" />
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto mr-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </header>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-white rounded-[15px] border-2 border-[#0000004c] p-4 z-50 md:hidden">
            <div className="flex flex-col gap-4">
              {navSections.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={`[font-family:'Poppins',Helvetica] text-left text-base p-2 rounded ${
                    activeNav === item.label
                      ? "font-semibold bg-gray-100"
                      : "font-medium"
                  } text-black hover:bg-gray-50`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={handleGetQuote}
                className="bg-[#dbebf6] hover:bg-[#c5ddf0] text-black rounded-[10px] px-4 py-2 h-auto mt-2"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-base mr-2">
                  Get A QUOTE
                </span>
                <img className="w-[26px] h-6" alt="Vector" src="/vector-1.svg" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
