import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Building,
  ClipboardCheck,
  FileCheck,
  ShieldCheck,
  Rocket,
  LineChart,
  Palette,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LOGO_SRC = "/dbiz-uploads/5811ce1b-59a5-4195-9ade-c745a34d0dbd.png";

const mainNavMenus = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/#about" },
  { name: "Services", path: "/#services", hasMegaMenu: true },
  { name: "Startups", path: "/#services", hasMegaMenu: true },
  { name: "IP Services", path: "/#services", hasMegaMenu: true },
  { name: "Tools", path: "/tools" },
  { name: "Contact", path: "/#contact" },
];

const registrationsComplianceMenu = [
  {
    title: "Business Registrations",
    icon: <ClipboardCheck size={18} />,
    items: [
      { name: "GST Registration", path: "/gst-registration" },
      { name: "Startup Registration", path: "/startup-registration" },
      { name: "12A & 80G Registration", path: "/12a-80g-registration" },
      { name: "Digital Signature", path: "/digital-signature" },
      { name: "IEC Registration", path: "/iec-registration" },
      { name: "ISO Certification", path: "/iso-certification" },
      { name: "FSSAI Registration", path: "/fssai-registration" },
      { name: "UDYAM / MSME", path: "/udyam-msme-registration" },
    ]
  },
  {
    title: "Licenses",
    icon: <ShieldCheck size={18} />,
    items: [
      { name: "Trade License", path: "/trade-license" },
      { name: "Drug License", path: "/drug-license" },
      { name: "Shop & Establishment", path: "/shop-establishment" },
    ]
  },
  {
    title: "Tax Compliance",
    icon: <FileCheck size={18} />,
    items: [
      { name: "TDS Filings", path: "/tds-filings" },
      { name: "GST Filings", path: "/gst-filings" },
      { name: "Income Tax Filing (ITR)", path: "/income-tax-filing" },
    ]
  },
  {
    title: "Business Compliance",
    icon: <ShieldCheck size={18} />,
    items: [
      { name: "MCA Compliance", path: "/mca-compliance" },
      { name: "Nidhi Company Compliance", path: "/nidhi-company-compliance" },
      { name: "Annual Compliance", path: "/annual-compliance" },
    ]
  }
];

const startupMenu = [
  {
    title: "Startup Services",
    icon: <Rocket size={18} />,
    items: [
      { name: "Startup Registration", path: "/startup-registration" },
      { name: "Startup India Recognition", path: "/startup-india-recognition" },
      { name: "Business Plan", path: "/business-plan" },
      { name: "Pitch Deck", path: "/pitch-deck" },
      { name: "Funding Assistance", path: "/funding-assistance" },
      { name: "Incubation Support", path: "/incubation-support" },
    ]
  },
  {
    title: "Growth & Scaling",
    icon: <LineChart size={18} />,
    items: [
      { name: "Market Research", path: "/market-research" },
      { name: "Growth Strategy", path: "/growth-strategy" },
      { name: "Legal Advisory", path: "/legal-advisory" },
    ]
  }
];

const ipMenu = [
  {
    title: "IP Registration",
    icon: <Palette size={18} />,
    items: [
      { name: "Trademark Registration", path: "/trademark-registration" },
      { name: "Patent Registration", path: "/patent-registration" },
      { name: "Copyright Registration", path: "/copyright-registration" },
    ]
  }
];

interface MenuSection {
  title: string;
  icon: React.ReactNode;
  items: { name: string; path: string }[];
}

const megaMenuMap: Record<string, MenuSection[]> = {
  "Services": registrationsComplianceMenu,
  "Startups": startupMenu,
  "IP Services": ipMenu,
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    if (path === "/") return pathname === "/";
    if (!path.startsWith("/#")) return pathname.startsWith(path);
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-2 border-b border-gray-100"
          : "bg-white py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <img
            src={LOGO_SRC}
            alt="D BIZ CONSULTANCY"
            className={cn(
              "transition-all duration-500 h-[60px] lg:h-[90px]",
              scrolled ? "lg:h-[70px]" : "lg:h-[90px]"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {mainNavMenus.map((menu, index) => (
            <div key={index} className="relative group">
              {menu.hasMegaMenu ? (
                <div className="menu-container">
                  <button
                    className={cn(
                      "menu-item",
                      isActiveLink(menu.path) && "active"
                    )}
                  >
                    {menu.name}
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>

                  <div className="mega-menu">
                    <div className="mega-menu-content grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                      {megaMenuMap[menu.name as keyof typeof megaMenuMap]?.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-3">
                          <h3 className="mega-menu-title">
                            <span className="text-dbiz-teal">{section.icon}</span>
                            {section.title}
                          </h3>
                          <div className="flex flex-col gap-1">
                            {section.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={item.path}
                                className={cn(
                                  "mega-menu-item",
                                  isActiveLink(item.path) && "active"
                                )}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={menu.path}
                  className={cn(
                    "menu-item",
                    isActiveLink(menu.path) && "active"
                  )}
                >
                  {menu.name}
                </Link>
              )}
            </div>
          ))}
          <Button asChild className="ml-4 bg-dbiz-teal hover:bg-dbiz-teal/90 text-white rounded-full px-6 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-dbiz-teal/20">
            <Link to="/#contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-dbiz-navy hover:bg-dbiz-teal/10 hover:text-dbiz-teal transition-all duration-300 active:scale-90"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px] p-0 border-l border-gray-100 bg-white">
              <div className="flex flex-col h-full">
                {/* Header */}
                <SheetHeader className="p-6 border-b border-gray-50 flex items-center justify-between">
                  <SheetTitle className="text-left">
                    <img src={LOGO_SRC} alt="D BIZ" className="h-12" />
                  </SheetTitle>
                </SheetHeader>

                {/* Content */}
                <div className="flex-1 overflow-y-auto py-4 px-2">
                  <Accordion type="single" collapsible className="w-full space-y-1">
                    {mainNavMenus.map((menu, index) => (
                      menu.hasMegaMenu ? (
                        <AccordionItem key={index} value={`menu-${index}`} className="border-none">
                          <AccordionTrigger className="px-4 py-3 text-dbiz-navy hover:text-dbiz-teal hover:bg-dbiz-teal/5 rounded-lg transition-all text-base font-medium no-underline hover:no-underline [&[data-state=open]]:text-dbiz-teal [&[data-state=open]]:bg-dbiz-teal/5">
                            <span className="flex items-center gap-3">
                              {menu.name === "Services" && <Building className="h-5 w-5" />}
                              {menu.name === "Startups" && <Rocket className="h-5 w-5" />}
                              {menu.name === "IP Services" && <ShieldCheck className="h-5 w-5" />}
                              {menu.name}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-1">
                            {megaMenuMap[menu.name as keyof typeof megaMenuMap]?.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="mb-4 last:mb-0">
                                <h3 className="px-10 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                  {section.title}
                                </h3>
                                <div className="mt-1 flex flex-col gap-1">
                                  {section.items.map((item, itemIndex) => (
                                    <SheetClose asChild key={itemIndex}>
                                      <Link
                                        to={item.path}
                                        className={cn(
                                          "flex items-center px-10 py-2.5 text-gray-600 hover:text-dbiz-teal hover:bg-dbiz-teal/5 rounded-lg transition-all text-sm",
                                          isActiveLink(item.path) && "text-dbiz-teal bg-dbiz-teal/5 font-medium"
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={index}>
                          <SheetClose asChild>
                            <Link
                              to={menu.path}
                              className={cn(
                                "flex items-center px-4 py-3 text-dbiz-navy hover:text-dbiz-teal hover:bg-dbiz-teal/5 rounded-lg transition-all text-base font-medium",
                                isActiveLink(menu.path) && "text-dbiz-teal bg-dbiz-teal/5"
                              )}
                            >
                              <span className="flex items-center gap-3">
                                {menu.name === "Home" && <Building className="h-5 w-5 opacity-0 group-hover:opacity-100" />}
                                {menu.name}
                              </span>
                            </Link>
                          </SheetClose>
                        </div>
                      )
                    ))}
                  </Accordion>
                </div>

                {/* Footer Info */}
                <div className="p-6 border-t border-gray-50 bg-gray-50/50 space-y-4">
                  <div className="space-y-3">
                    <a href="tel:+918075273408" className="flex items-center gap-3 text-sm text-gray-600 hover:text-dbiz-teal transition-colors">
                      <div className="w-8 h-8 rounded-full bg-dbiz-teal/10 flex items-center justify-center text-dbiz-teal">
                        <Phone size={14} />
                      </div>
                      +91 80752 73408
                    </a>
                    <a href="mailto:info@dbiz.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-dbiz-teal transition-colors">
                      <div className="w-8 h-8 rounded-full bg-dbiz-teal/10 flex items-center justify-center text-dbiz-teal">
                        <Mail size={14} />
                      </div>
                      info@dbizconsultancy.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-dbiz-teal hover:border-dbiz-teal transition-all">
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
