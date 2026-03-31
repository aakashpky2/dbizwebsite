
import React, { useEffect, useState, useRef } from "react";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const stats = [
    { value: "500+", label: "Clients" },
    { value: "5,000+", label: "Works Completed" }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-12 lg:py-16 bg-dbiz-navy overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75"
          alt="About Background"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:2000ms] ease-out z-0",
            isVisible ? "scale-105" : "scale-100"
          )}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-dbiz-navy/50 bg-gradient-to-r from-dbiz-navy/95 via-dbiz-navy/70 to-dbiz-navy/20 z-10"></div>
      </div>

      <div className="container-custom relative z-30">
        {/* Header - slide in from top */}
        <div className={cn(
          "mb-8 lg:mb-10 transition-all duration-700 delay-100 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        )}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 border border-dbiz-teal/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-dbiz-teal shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
            <span>About Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbiz-teal to-blue-400">Corporate Advisors</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column Text - slide in from left */}
          <div className={cn(
            "space-y-4 text-gray-300 font-light text-sm md:text-base leading-relaxed transition-all duration-700 delay-300 ease-out transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <p>
              <strong className="font-semibold text-white">D BIZ CONSULTANCY PVT. LTD.</strong> is a professional business consultancy and corporate advisory firm headquartered in Thiruvananthapuram, Kerala, with a branch office in Kochi, providing comprehensive consultancy and compliance services to startups, entrepreneurs, and established businesses across India.
            </p>
            <p>
              Our team comprises experienced Chartered Accountants, Company Secretaries, Cost Accountants, and other skilled professionals with over 10 years of professional experience in corporate advisory, statutory compliance, taxation, accounting, and financial consulting.
            </p>
            <p>
              With strong domain expertise and in-depth knowledge of the Indian regulatory framework, we assist businesses in navigating complex compliance requirements, improving financial management, and achieving sustainable growth.
            </p>
            <p className="pt-2">
              With a strong commitment to professionalism, integrity, and client satisfaction, D BIZ CONSULTANCY PVT. LTD. continues to support businesses with reliable advisory services and long-term strategic guidance.
            </p>
          </div>

          {/* Right Column - slide in from right */}
          <div className={cn(
            "flex flex-col gap-6 transition-all duration-700 delay-500 ease-out transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>

            {/* Vision Box */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors shadow-2xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-dbiz-teal to-blue-500"></div>

              {/* Decorative glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-dbiz-teal/20 rounded-full blur-3xl group-hover:bg-dbiz-teal/30 transition-all duration-500"></div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="bg-dbiz-teal/10 p-3 rounded-xl text-dbiz-teal shrink-0 group-hover:scale-110 group-hover:bg-dbiz-teal group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(45,212,191,0.1)]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Our Vision</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    Our vision is to become a trusted and leading business consultancy firm, delivering innovative and reliable advisory solutions that enable businesses to grow, remain compliant, and succeed in a dynamic business environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="flex gap-4 sm:gap-6 mt-2">
              {stats.map((stat, index) => (
                <div key={index} className="flex-1 bg-dbiz-navy/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 md:p-6 transition-transform duration-500 hover:-translate-y-1">
                  <div className="text-3xl font-extrabold text-white mb-1.5">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-semibold text-dbiz-teal uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
