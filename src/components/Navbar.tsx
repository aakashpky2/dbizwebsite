import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ArrowLeft,
  ChevronUp,
  Building,
  Globe,
  FileText,
  ShieldCheck,
  BarChart3,
  Home,
  Info,
  Briefcase,
  ClipboardCheck,
  FileCheck,
  LineChart,
  Palette,
  Wrench,
  Phone,
  User,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";


const LOGO_SRC = "/dbiz-uploads/5811ce1b-59a5-4195-9ade-c745a34d0dbd.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the main navigation menus with sentence case for better readability
const mainNavMenus = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/#about" },
  { name: "Services", path: "/#services", hasMegaMenu: true, hidden: true },
  { name: "Startups", path: "/#services", hasMegaMenu: true, hidden: true },
  { name: "IP Services", path: "/#services", hasMegaMenu: true, hidden: true },
  { name: "Tools", path: "/tools", hidden: true },
  { name: "Contact", path: "/#contact" },
];

// Reorganized Start Business menu with company registration and other business types
const startBusinessMenu = [
  {
    title: "Company Registration",
    icon: <Building size={18} />,
    items: [
      { name: "Private Limited", path: "/private-limited" },
    ]
  }
];

// Combined Registrations and Compliance menu
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

// Define the startup submenu
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

// Define the Intellectual Property (IP) submenu
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

interface MenuItem {
  name: string;
  path: string;
}

interface MenuSection {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

// Map main menus to their submenus
const megaMenuMap: Record<string, MenuSection[]> = {
  "Services": registrationsComplianceMenu,
  "Startups": startupMenu,
  "IP Services": ipMenu,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => {
    setOpen(false);
  };



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if the current path matches or is part of a menu item's path
  const isActiveLink = (path: string) => {
    if (!pathname) return false;

    if (path === "/") {
      return pathname === "/";
    }

    // For submenu items, check if the current path starts with the item path
    // This allows for both /service and /service/location to be highlighted
    if (!path.startsWith("/#")) {
      return pathname.startsWith(path);
    }

    return false;
  };

  // Render desktop menu with hover-based expansion
  const renderDesktopMenu = () => {
    return (
      <nav className="hidden lg:flex items-center justify-center space-x-2 relative">
        {mainNavMenus.filter(menu => !(menu as any).hidden).map((menu, index) => (
          <div key={index} className="relative group">
            {menu.hasMegaMenu ? (
              <div className="menu-container">
                <button
                  className={cn(
                    "menu-item group",
                    isActiveLink(menu.path) && "active"
                  )}
                >
                  {menu.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <div className="mega-menu">
                  <div className="mega-menu-content">
                    {megaMenuMap[menu.name as keyof typeof megaMenuMap]?.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mega-menu-section min-w-[180px]">
                        <h3 className="mega-menu-title">
                          <span className="mega-menu-title-icon">{section.icon}</span>
                          {section.title}
                        </h3>
                        <div className="mega-menu-items">
                          {section.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.path}
                              className={cn(
                                "mega-menu-item",
                                isActiveLink(item.path) && "active"
                              )}
                              onClick={closeMenu}
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
      </nav>
    );
  };

  const renderMobileContent = () => {
    return (
      <div className="py-4 px-2">
        <Accordion type="single" collapsible className="w-full">
          {mainNavMenus.filter(menu => !(menu as any).hidden).map((menu, index) => (
            menu.hasMegaMenu ? (
              <AccordionItem key={index} value={`menu-${index}`} className="border-none">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-dbiz-teal text-lg font-medium border-b border-white/5 no-underline hover:no-underline">
                  {menu.name}
                </AccordionTrigger>
                <AccordionContent className="bg-white/5 rounded-lg mt-2 mx-4">
                  <div className="py-2">
                    {megaMenuMap[menu.name as keyof typeof megaMenuMap]?.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-6 last:mb-2">
                        <h3 className="px-6 py-2 text-dbiz-teal font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                          {section.icon}
                          {section.title}
                        </h3>
                        <div className="mt-2 grid gap-1">
                          {section.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.path}
                              className={cn(
                                "flex items-center px-8 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all text-sm",
                                isActiveLink(item.path) && "text-dbiz-teal bg-white/5 font-medium"
                              )}
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div key={index} className="border-b border-white/5">
                <Link
                  to={menu.path}
                  className={cn(
                    "flex items-center w-full px-6 py-4 text-white hover:text-dbiz-teal text-lg font-medium transition-colors",
                    isActiveLink(menu.path) && "text-dbiz-teal"
                  )}
                  onClick={closeMenu}
                >
                  {menu.name}
                </Link>
              </div>
            )
          ))}
        </Accordion>
      </div>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white/95 backdrop-blur-md shadow-lg py-1"
          : "bg-white py-1"
      )}
      style={{ position: 'fixed' }}
    >

      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <img
            src={LOGO_SRC}
            alt="D BIZ CONSULTANCY"
            className={cn(
              "transition-all duration-300",
              "h-[80px] lg:h-[120px] -my-[18px] lg:-my-[28px]"
            )}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          {renderDesktopMenu()}

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-dbiz-navy hover:bg-dbiz-teal/10 hover:text-dbiz-teal transition-colors"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-dbiz-navy lg:hidden z-40 transition-transform duration-300 ease-in-out overflow-auto",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-dbiz-navy sticky top-0 z-50">
            <Link to="/" onClick={closeMenu}>
              <img
                src={LOGO_SRC}
                alt="D BIZ CONSULTANCY"
                className="h-16 brightness-0 invert"
                loading="eager"
                decoding="sync"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="pt-2">
            {renderMobileContent()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
