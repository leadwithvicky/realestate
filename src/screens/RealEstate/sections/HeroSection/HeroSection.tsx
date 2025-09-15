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
      <div className="relative w-full max-w-[1357px] mx-auto pt-4 px-2 md:pt-6 md:px-6">
        {/* Desktop: nav outside image, image with heading/button, floating feature cards */}
        <div className="hidden md:block w-full">
          <div className="relative w-full rounded-[18px] overflow-hidden" style={{height: 737}}>
            <img
              className="w-full h-full object-cover object-center"
              alt="Rectangle"
              src="/rectangle-1.png"
              style={{ minHeight: 400, maxHeight: 737 }}
            />
            {/* Heading and button overlay, left-aligned */}
            <div className="absolute top-[80px] left-[60px] z-10 flex flex-col items-start">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-[56px] leading-[70px] mb-8">
                Building Your Vision<br />with Strength & Precision
              </h2>
              <Button 
                onClick={handleViewProjects}
                className="bg-white hover:bg-[#dbebf6] text-black rounded-[10px] px-6 py-4 h-[70px] w-[227px] shadow-md border border-[#b5d3e7] flex items-center gap-2"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[normal]">
                  VIEW OUR PROJECTS
                </span>
                <img className="w-[22px] h-5" alt="Vector" src="/vector-1.svg" />
              </Button>
            </div>
            {/* Floating feature cards container */}
            <div className="absolute left-0 right-0" style={{bottom: -70}}>
              <div className="mx-auto w-[92%] max-w-[1200px] bg-white rounded-[18px] shadow-xl flex flex-row items-center justify-center gap-8 px-8 py-6">
                {featureCards.map((card, index) => (
                  <Card
                    key={index}
                    className="flex-1 min-w-0 bg-white rounded-[15px] border-0 shadow-md flex flex-row items-stretch justify-start mx-2 min-h-[120px]"
                  >
                    <CardContent className="p-4 flex flex-row items-stretch gap-4 w-full">
                      <img
                        className="w-[110px] h-[90px] rounded-[8px] object-cover flex-shrink-0"
                        alt="Rectangle"
                        src={card.image}
                      />
                      <div className="flex flex-col justify-center flex-1 min-w-0">
                        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[25px] mb-2">
                          {card.title}
                        </h3>
                        <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-[13px] tracking-[0] leading-5 break-words whitespace-pre-line" style={{wordBreak: 'break-word'}}>
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile version remains unchanged */}
        <div className="md:hidden w-full flex flex-col min-h-screen">
          {/* Hero image occupies 50% of viewport height */}
          <div className="w-full rounded-[18px] overflow-hidden bg-[#e5eaf0] relative" style={{height: '50vh', minHeight: 200}}>
            <img
              className="w-full h-full object-cover object-center"
              alt="Rectangle"
              src="/rectangle-1.png"
              style={{ minHeight: 200, maxHeight: '50vh' }}
            />
            {/* Overlay for text and button on mobile */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-5 pt-8">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-[2rem] leading-[2.3rem] mb-4">
                Building Your Vision<br />with Strength & Precision
              </h2>
              <Button 
                onClick={handleViewProjects}
                className="bg-white text-black rounded-[10px] px-4 py-3 h-[48px] w-full max-w-[260px] shadow-md border border-[#b5d3e7] flex items-center gap-2 mb-2"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[normal]">
                  VIEW OUR PROJECTS
                </span>
                <img className="w-[22px] h-5" alt="Vector" src="/vector-1.svg" />
              </Button>
            </div>
          </div>
          {/* Feature cards fill the rest, no gap */}
          <div className="flex-1 w-full bg-[#f3f7fc] rounded-[16px] p-2 flex flex-col gap-4 justify-center">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="w-full bg-white rounded-[12px] border-0 shadow-md flex flex-row items-stretch p-2 gap-3 min-h-[100px]"
              >
                <CardContent className="flex flex-row items-stretch gap-3 p-0 w-full">
                  <img
                    className="w-[100px] h-[80px] rounded-[8px] object-cover flex-shrink-0"
                    alt="Rectangle"
                    src={card.image}
                  />
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base tracking-[0] leading-[22px] mb-1">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-4 break-words whitespace-pre-line" style={{wordBreak: 'break-word'}}>
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Header and nav */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between pt-4 md:pt-8 px-4 md:px-8 z-20">
          {/* Logo at start */}
          <h1 className="[font-family:'Poppins',Helvetica] font-bold text-black text-[28px] md:text-[32px] tracking-[0] leading-[normal]">
            STRUCTON
          </h1>
          {/* Centered nav */}
          <nav className="hidden md:flex items-center bg-white rounded-[12px] border-2 border-solid border-[#00000026] px-4 py-2 mx-auto">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                {navSections.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.label);
                      }}
                      className={`[font-family:'Poppins',Helvetica] text-base tracking-[0] leading-[normal] ${
                        activeNav === item.label ? "font-semibold" : "font-medium"
                      } text-black hover:text-gray-600`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          {/* Get A QUOTE at end */}
          <Button 
            onClick={handleGetQuote}
            className="hidden md:flex bg-[#dbebf6] hover:bg-[#c5ddf0] text-black rounded-[10px] px-6 py-3 h-[44px] items-center gap-2 shadow-md border border-[#b5d3e7]"
            style={{ minWidth: 181, minHeight: 44 }}
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[normal]">
              Get A QUOTE
            </span>
            <img className="w-[22px] h-5" alt="Vector" src="/vector-1.svg" />
          </Button>
          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-white rounded-[15px] border-2 border-solid border-[#0000004c] p-4 z-50 md:hidden">
            <div className="flex flex-col gap-4">
              {navSections.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={`[font-family:'Poppins',Helvetica] text-left text-base tracking-[0] leading-[normal] p-2 rounded ${
                    activeNav === item.label ? "font-semibold bg-gray-100" : "font-medium"
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

        {/* (No longer needed: hero text/button for desktop is now in overlay above) */}

        {/* Feature Cards Background and Cards - desktop only */}
        <div className="w-full flex flex-col items-center mt-4 md:mt-0">
          {/* Desktop feature cards background and cards */}
          <div className="hidden md:block absolute left-0 right-0" style={{top: 600}}>
            <div className="mx-auto w-[92%] max-w-[1200px] bg-[#f7fbfe] rounded-[18px] shadow-xl flex flex-row items-center justify-center gap-8 px-8 py-6">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex-1 min-w-0 bg-white rounded-[15px] border-0 shadow-md flex flex-col items-start justify-between mx-2"
                >
                  <CardContent className="p-4 flex flex-row items-center gap-4">
                    <img
                      className="w-[110px] h-[90px] rounded-[8px] object-cover"
                      alt="Rectangle"
                      src={card.image}
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[25px] mb-2">
                        {card.title}
                      </h3>
                      <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-[13px] tracking-[0] leading-5">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
