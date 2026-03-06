
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2, Phone, MessageCircle, Clock, Shield, FileText, Award } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import WelcomePopup from "@/components/WelcomePopup";

const phoneNumber = "+918075273408";

const ContactOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-3 p-2">
      <a 
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center gap-2 bg-dbiz-teal text-white px-4 py-2 rounded-md hover:bg-dbiz-teal/90 transition-colors"
      >
        <Phone size={16} />
        <span>Call</span>
      </a>
      <a 
        href={`https://wa.me/${phoneNumber.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

interface ServicePageProps {
  title: string;
  description: string;
  importance: string[];
  steps?: { title: string; description: string }[];
  cities?: string[];
  relatedServices?: { name: string; path: string }[];
  location?: string;
}

const ServicePage = ({
  title,
  description,
  importance,
  steps = [],
  cities = [],
  relatedServices = [],
  location = "India"
}: ServicePageProps) => {
  const seoTitle = location === "India" 
    ? `${title} Services | Best in India | D BIZ CONSULTANCY` 
    : `${title} Services in ${location} | Best in India | D BIZ CONSULTANCY`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WelcomePopup />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-lg opacity-90 mb-6">{description}</p>
              
              {location !== "India" && (
                <div className="inline-block bg-dbiz-teal/20 px-4 py-2 rounded-md text-sm font-medium mb-6">
                  <Link to={`/${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-dbiz-teal hover:underline">
                    View our services across India
                  </Link>
                </div>
              )}
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                    Contact D BIZ CONSULTANCY Today
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0">
                  <ContactOptions />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">
              Why {title} is Important {location !== "India" ? `in ${location}` : ""}
            </h2>
            <p className="section-subtitle text-center">
              D BIZ CONSULTANCY provides the best {title.toLowerCase()} services {location !== "India" ? `in ${location}` : "across India"}.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {importance.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                  <CheckCircle2 className="text-dbiz-teal h-6 w-6 mt-1 flex-shrink-0" />
                  <p className="ml-4 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section - Only show if steps are provided */}
        {steps.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="section-title">
                  Step-by-Step {title} Registration Process
                </h2>
                <p className="section-subtitle">
                  D BIZ CONSULTANCY makes the process simple and hassle-free for clients in {location}.
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-dbiz-teal to-dbiz-navy rounded"></div>
                
                {/* Steps */}
                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
                    >
                      {/* Timeline point */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-dbiz-teal to-dbiz-navy text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                          <span className="font-bold text-xl">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}></div>
                      
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center mb-4">
                            {index % 2 === 0 && <div className="w-16"></div>}
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                {index === 0 && <FileText className="h-5 w-5 text-dbiz-teal mr-2" />}
                                {index === 1 && <Shield className="h-5 w-5 text-dbiz-teal mr-2" />}
                                {index === 2 && <Clock className="h-5 w-5 text-dbiz-teal mr-2" />}
                                {index === 3 && <Award className="h-5 w-5 text-dbiz-teal mr-2" />}
                                {index >= 4 && <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2" />}
                                <h3 className="text-xl font-semibold text-dbiz-navy">{step.title}</h3>
                              </div>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                            {index % 2 !== 0 && <div className="w-16"></div>}
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1 text-dbiz-teal" />
                              <span>
                                {index === 0 ? "1-2 days" : 
                                 index === 1 ? "2-3 days" : 
                                 index === 2 ? "3-5 days" : 
                                 "1-2 days"}
                              </span>
                              <span className="mx-2">•</span>
                              <div className="bg-dbiz-teal/20 text-dbiz-teal text-xs px-2 py-1 rounded">
                                {index === 0 ? "Documentation" : 
                                 index === 1 ? "Verification" : 
                                 index === 2 ? "Processing" : 
                                 "Completion"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-dbiz-navy/5 to-dbiz-teal/5 p-6 rounded-lg border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-dbiz-navy mb-2">Ready to start your registration?</h3>
                    <p className="text-gray-600">Our experts will guide you through each step of the process.</p>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                        <Phone className="mr-2 h-4 w-4" /> Contact Us Now
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Cities Coverage - Only show on main India page */}
        {location === "India" && cities.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <h2 className="section-title text-center">Our {title} Services Across India</h2>
              <p className="section-subtitle text-center">
                D BIZ CONSULTANCY provides the best {title.toLowerCase()} services in the following cities and towns:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
                {cities.map((city, index) => (
                  <Link 
                    key={index}
                    to={`/${title.toLowerCase().replace(/\s+/g, '-')}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all text-center border border-gray-100 hover:border-dbiz-teal/40"
                  >
                    <span className="text-dbiz-navy font-medium">{city}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16">
            <div className="container-custom">
              <h2 className="section-title text-center">Related Services</h2>
              <p className="section-subtitle text-center">
                Explore other services offered by D BIZ CONSULTANCY in {location}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {relatedServices.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.path}
                    className="bg-gradient-to-br from-dbiz-navy/5 to-dbiz-teal/10 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-dbiz-teal/40 group"
                  >
                    <h3 className="text-xl font-semibold text-dbiz-navy mb-2 group-hover:text-dbiz-teal transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center text-dbiz-teal mt-4">
                      <span className="text-sm font-medium">Learn more</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-dbiz-teal/10">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-4">
              Ready to Start Your {title} Process?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              D BIZ CONSULTANCY is the leading service provider for {title.toLowerCase()} in {location}. 
              Contact us today to get started!
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white text-lg px-8 py-6">
                  Contact Us Now
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-0">
                <ContactOptions />
              </PopoverContent>
            </Popover>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
