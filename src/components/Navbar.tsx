import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const LOGO_SRC = "/dbiz-uploads/main-logo.png";

const mainNavMenus = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Contact", path: "/#contact" },
];

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

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, path: string) => {
    const targetHash = path.includes("#") ? path.substring(path.indexOf("#")) : "";
    const isHomePage = pathname === "/";

    if (isHomePage) {
      if (path === "/" || targetHash === "#home") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else if (targetHash) {
        e.preventDefault();
        const element = document.querySelector(targetHash);
        if (element) {
          const offset = 80; // Adjust for fixed header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }
  };

  const isActiveLink = (path: string) => {
    if (path === "/" || path === "#home" || path === "/#home") return pathname === "/";
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        "bg-white/90 backdrop-blur-lg shadow-md py-0"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <img
            src={LOGO_SRC}
            alt="DBIZ CONSULTANCY"
            className={cn(
              "transition-all duration-300 origin-left",
              "h-[70px] lg:h-[90px] scale-[1.6] translate-x-4"
            )}
            loading="eager"
            decoding="sync"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {mainNavMenus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              onClick={(e) => handleLinkClick(e, menu.path)}
              className={cn(
                "menu-item",
                isActiveLink(menu.path) && "active"
              )}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-dbiz-navy hover:bg-dbiz-teal/10 hover:text-dbiz-teal transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 bg-white border-l border-gray-100">
              <div className="flex flex-col h-full bg-dbiz-navy">
                <SheetHeader className="p-6 border-b border-white/10 bg-dbiz-navy">
                  <SheetTitle className="text-left">
                    <img src={LOGO_SRC} alt="DBIZ" className="h-16 brightness-0 invert" />
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-1 py-8 px-4 space-y-2">
                  {mainNavMenus.map((menu, index) => (
                    <SheetClose asChild key={index}>
                      <Link
                        to={menu.path}
                        onClick={(e) => handleLinkClick(e, menu.path)}
                        className={cn(
                          "flex items-center w-full px-6 py-4 text-white hover:text-dbiz-teal text-xl font-medium rounded-lg transition-all hover:bg-white/5",
                          isActiveLink(menu.path) && "text-dbiz-teal bg-white/5"
                        )}
                      >
                        {menu.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="p-8 border-t border-white/10 text-center">
                  <p className="text-white/40 text-xs">© 2026 DBIZ CONSULTANCY</p>
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
