
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ClientsSection = () => {
  const clientLogos = [
    {
      name: "Swayamvara Silks",
      logo: "/dbiz-uploads/a75a8440-5707-4bf5-9cd2-8590206fd2ed.png",
    },
    {
      name: "Trivantra",
      logo: "/dbiz-uploads/32069ace-e979-4eee-8ed4-c4bbbb796b3c.png",
    },
    {
      name: "iHub Robotics",
      logo: "/dbiz-uploads/afd683e8-0e3d-4fd4-9ba8-58e64040d98c.png",
    },
    {
      name: "U-TEK",
      logo: "/dbiz-uploads/47281a91-32ee-4185-82b7-d4f2a2fbea26.png",
    },
  ];

  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h6 className="text-dbiz-teal font-medium mb-3">TRUSTED PARTNERS</h6>
          <h2 className="section-title">Our Clients</h2>
          <div className="w-20 h-1 bg-dbiz-teal mx-auto mt-4 mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've built strong relationships with businesses across industries. Here are some of the companies that trust our expertise.
          </p>
        </div>

        <Card className="p-6 sm:p-10 bg-white shadow-sm">
          <Carousel
            className="w-full"
            opts={{
              loop: true,
              align: "start",
              autoplay: true,
              interval: 3000
            }}
          >
            <CarouselContent>
              {clientLogos.map((client, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4">
                  <div className="h-32 flex items-center justify-center p-4">
                    <img
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="max-h-24 max-w-full transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-4" />
              <CarouselNext className="relative static translate-y-0 ml-4" />
            </div>
          </Carousel>
        </Card>
      </div>
    </section>
  );
};

export default ClientsSection;
