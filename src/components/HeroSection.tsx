import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CachedImage from "@/components/CachedImage";
const phoneNumber = "+918075273408";
const ContactOptions = () => {
  return <div className="grid grid-cols-2 gap-3 p-2">
    <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-dbiz-teal text-white px-4 py-2 rounded-md hover:bg-dbiz-teal/90 transition-colors">
      <Phone size={16} />
      <span>Call</span>
    </a>
    <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
      <MessageCircle size={16} />
      <span>WhatsApp</span>
    </a>
  </div>;
};
const HeroSection = () => {
  const keyFeatures = ["Expert Business Solutions", "Fast Turnaround Time", "Trusted by 500+ Clients", "Dedicated Support Team"];

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white overflow-hidden">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <CachedImage
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=70"
          alt="Background"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Content Column */}
        <div className="lg:w-1/2 space-y-6 lg:pr-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-2">
            The Business Consultancy
          </div>


          <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold leading-tight uppercase tracking-tight">
            Best Business Consultancy in <br />
            <span className="text-5xl md:text-6xl lg:text-7xl text-dbiz-teal block mt-2">Trivandrum & Kochi</span>
          </h1>


          <div className="text-lg text-white/90 max-w-lg space-y-4">
            <p>
              Your trusted partner for business registration, GST compliance, and corporate advisory services across **Kerala**, specifically focusing on the growth of startups and SMEs in **Thiruvananthapuram and Kochi**.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                <span className="text-white/90 font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-6 py-4 h-auto text-sm font-medium group border-0">
                  Start Your Business
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-0 border-white/20">
                <ContactOptions />
              </PopoverContent>
            </Popover>
          </div>

          <div className="pt-8 flex items-center">
            <a href="#services" className="flex items-center text-dbiz-teal hover:text-dbiz-teal/80 font-medium transition-colors">
              Explore Our Services
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
          <div className="relative w-full max-w-lg">
            {/* Decorative Elements replacing bubbles with gradients matching the theme */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>

            <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/20">
              <AspectRatio ratio={4 / 3} className="bg-gray-900/50 rounded-lg overflow-hidden">
                <CachedImage
                  src="/dbiz-uploads/80e6af29-5d04-498a-bd8c-a3a5594b6eea.png"
                  alt="Business Technology Solutions"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
              </AspectRatio>

              {/* Optional: Floating Stats like the example, using static content for now or removed if not requested. 
                  Keeping it clean as per "content same" request, but the container style is changed.
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;