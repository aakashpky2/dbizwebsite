"use client";

import React from "react";
import {
  Briefcase,
  FileText,
  ClipboardList,
  BarChart,
  Star,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import Link from "next/link";

interface ServiceItem {
  name: string;
  path: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  items,
  id
}: {
  icon: React.ElementType;
  title: string;
  items: ServiceItem[];
  id?: string;
}) => {
  return (
    <div
      id={id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
      className="group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-dbiz-teal/10 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
    >
      {/* Background Accent Decoration */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-dbiz-teal/5 rounded-full blur-3xl transition-all duration-500 group-hover:bg-dbiz-teal/10 group-hover:scale-150"></div>

      {/* Icon and Header */}
      <div className="relative mb-6">
        <div className="inline-flex items-center justify-center p-4 rounded-xl bg-dbiz-teal/10 text-dbiz-teal mb-5 group-hover:bg-dbiz-teal group-hover:text-white transition-all duration-500 ease-out transform group-hover:rotate-6">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-2xl font-bold text-dbiz-navy tracking-tight">{title}</h3>
      </div>

      {/* Services List - Premium Slide-Up Effect */}
      <div className="flex-grow">
        <ul className="space-y-3 relative z-10 transition-all duration-300">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="flex items-center group/link text-gray-600 hover:text-dbiz-teal transition-all duration-300 py-1 cursor-pointer"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-dbiz-teal/40 group-hover/link:bg-dbiz-teal group-hover/link:w-3 transition-all duration-300 mr-3"></div>
                <span className="text-sm font-medium tracking-wide leading-relaxed uppercase opacity-85 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300">{item.name}</span>
                <ArrowRight className="h-3 w-3 ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>



      {/* Hover Gradient Border (Subtle) */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-dbiz-teal to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Start a Business",
      items: [
        { name: "PRIVATE LIMITED COMPANY", path: "/private-limited" },
        { name: "PUBLIC COMPANY", path: "/public-company" },
        { name: "ONE PERSON COMPANY (OPC)", path: "/one-person-company" },
        { name: "LIMITED LIABILITY PARTNERSHIP (LLP)", path: "/llp" },
        { name: "PARTNERSHIP", path: "/partnership" },
        { name: "SOLE PROPRIETORSHIP", path: "/sole-proprietorship" }
      ]
    },
    {
      icon: FileText,
      title: "Registration",
      items: [
        { name: "GST Registration", path: "/gst-registration" },
        { name: "12A AND 80G", path: "/12a-80g-registration" },
        { name: "ISO REGISTRATION", path: "/iso-certification" },
        { name: "FSSAI REGISTRATION", path: "/fssai-registration" },
        { name: "STARTUP REGISTRATION", path: "/startup-registration" }
      ]
    },
    {
      icon: ClipboardList,
      title: "Compliance",
      items: [
        { name: "INCOME TAX RETURNS (ITR)", path: "/income-tax-filing" },
        { name: "ANNUAL MCA COMPLIANCE", path: "/mca-compliance" },
        { name: "GST MONTHLY FILINGS", path: "/gst-filings" },
        { name: "NIDHI COMPANY COMPLIANCES", path: "/nidhi-company-compliance" },
        { name: "TDS FILINGS", path: "/tds-filings" }
      ]
    },
    {
      icon: BarChart,
      title: "Audit",
      items: [
        { name: "INTERNAL AUDIT", path: "/annual-compliance" },
        { name: "STOCK AUDIT", path: "/annual-compliance" },
        { name: "GST AUDIT", path: "/gst-filings" },
        { name: "COMPANY AUDIT", path: "/annual-compliance" },
        { name: "OPERATIONAL AUDIT", path: "/annual-compliance" }
      ]
    },
    {
      icon: Star,
      title: "Intellectual Property (IP)",
      items: [
        { name: "TRADEMARK", path: "/trademark-registration" },
        { name: "PATENT", path: "/patent-registration" },
        { name: "COPYRIGHT", path: "/copyright-registration" }
      ]
    },
    {
      icon: TrendingUp,
      title: "Fund Raising",
      items: [
        { name: "Investor Pitch", path: "/funding-assistance" },
        { name: "Investor Networking", path: "/funding-assistance" },
        { name: "Compliance Support", path: "/funding-assistance" },
        { name: "Financing Support", path: "/funding-assistance" }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#FAFAFB]">
      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dbiz-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-dbiz-teal"></span>
            </span>
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dbiz-navy tracking-tight mb-6">
            Professional Business <span className="text-dbiz-teal">Solutions</span>
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed font-normal max-w-3xl mx-auto">
            Comprehensive services designed to support your business at every stage of growth, from incorporation to global compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
