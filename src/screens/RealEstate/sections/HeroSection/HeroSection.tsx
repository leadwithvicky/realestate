import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { label: "HOME", href: "#", active: true },
    { label: "ABOUT US", href: "#", active: false },
    { label: "SERVICES", href: "#", active: false },
    { label: "PROJECTS", href: "#", active: false },
    { label: "CONTACT US", href: "#", active: false },
  ];

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
        "Let by seasoned professionals commited to precision, safety and quality",
    },
    {
      image: "/rectangle-11.png",
      title: "Modern equipment",
      description:
        "From automated tools to heavy duty machinery we're powered by innovation",
    },
  ];

  const handleNavClick = (href: string, label: string) => {
    console.log(`Navigating to ${label}: ${href}`);
    setIsMobileMenuOpen(false);
  };

  const handleGetQuote = () => {
    console.log("Get Quote clicked");
    // Scroll to contact section or open contact form
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProjects = () => {
    console.log("View Projects clicked");
    // Scroll to projects section
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#f7fbfe] relative">
      <div className="relative w-full max-w-[1357px] mx-auto pt-4 px-4 md:pt-[41px] md:px-[41px]">
        <img
          className="w-full h-[400px] md:h-[737px] object-cover rounded-lg"
          alt="Rectangle"
          src="/rectangle-1.png"
        />

        <header className="absolute top-0 left-0 w-full flex items-center justify-between pt-4 md:pt-8 px-4 md:px-0">
          <h1 className="ml-0 md:ml-[58px] [font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-4xl tracking-[0] leading-[normal]">
            STRUCTON
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 mr-[41px]">
            <div className="flex items-center bg-white rounded-[15px] border-2 border-solid border-[#0000004c] px-6 py-4">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-8">
                  {navigationItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href, item.label);
                        }}
                        className={`[font-family:'Poppins',Helvetica] text-base tracking-[0] leading-[normal] ${
                          item.active ? "font-semibold" : "font-medium"
                        } text-black hover:text-gray-600`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <Button 
              onClick={handleGetQuote}
              className="bg-[#dbebf6] hover:bg-[#c5ddf0] text-black rounded-[10px] px-6 py-4 h-auto"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[normal] mr-2">
                Get A QUOTE
              </span>
              <img className="w-[26px] h-6" alt="Vector" src="/vector-1.svg" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mr-4">
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-white rounded-[15px] border-2 border-solid border-[#0000004c] p-4 z-50 md:hidden">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={`[font-family:'Poppins',Helvetica] text-left text-base tracking-[0] leading-[normal] p-2 rounded ${
                    item.active ? "font-semibold bg-gray-100" : "font-medium"
                  } text-black hover:bg-gray-50`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={handleGetQuote}
                className="bg-[#dbebf6] hover:bg-[#c5ddf0] text-black rounded-[10px] px-4 py-2 h-auto mt-2"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[normal] mr-2">
                  Get A QUOTE
                </span>
                <img className="w-[26px] h-6" alt="Vector" src="/vector-1.svg" />
              </Button>
            </div>
          </div>
        )}

        <div className="absolute top-[120px] md:top-[190px] left-4 md:left-[58px] w-full md:w-[577px] px-4 md:px-0">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-[32px] md:text-[56px] tracking-[0] leading-[40px] md:leading-[70px]">
            Building Your Vision with Strength &amp; Precision
          </h2>
        </div>

        <Button 
          onClick={handleViewProjects}
          className="absolute top-[280px] md:top-[436px] left-4 md:left-[58px] bg-[#dbebf6] hover:bg-[#c5ddf0] text-black rounded-[10px] px-4 py-0 h-[50px] md:h-[70px] w-[200px] md:w-[227px]"
        >
          <span className="[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[70px] mr-2">
            VIEW OUR PROJECTS
          </span>
          <img className="w-[26px] h-6" alt="Vector" src="/vector-1.svg" />
        </Button>

        <div className="absolute top-[420px] md:top-[632px] left-4 md:left-[91px] right-4 md:right-auto md:w-[1174px] h-auto md:h-[226px] bg-[#e8f1fc] rounded-[10px]" />

        <div className="absolute top-[440px] md:top-[653px] left-8 md:left-[120px] right-8 md:right-auto flex flex-col md:flex-row gap-4 md:gap-[29px]">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-full md:w-[353px] h-auto md:h-[183px] bg-white rounded-[10px] border-0 shadow-sm"
            >
              <CardContent className="p-0 h-full">
                <div className="flex flex-col md:flex-row h-full">
                  <img
                    className="w-full md:w-[153px] h-[120px] md:h-[141px] md:mt-[21px] rounded-[5px] object-cover"
                    alt="Rectangle"
                    src={card.image}
                  />
                  <div className="flex-1 p-4 md:p-6 md:pt-[22px]">
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg md:text-xl tracking-[0] leading-[25px] mb-2 md:mb-4">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-[12px] md:text-[13px] tracking-[0] leading-4 md:leading-5">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
