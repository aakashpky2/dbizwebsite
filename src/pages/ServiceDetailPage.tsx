

import React from "react";
import { useParams } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getServiceContent } from "@/data/serviceContent";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";

const ServiceDetailPage = () => {
  const params = useParams();
  const service = params?.service as string;
  const location = params?.location as string;
  
  // Get the content for this service
  const serviceContent = getServiceContent(service || "");
  
  // If invalid service path, show 404
  if (!serviceContent) {
    return <NotFound />;
  }
  
  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  
  if (location && !isValidLocation) {
    return <NotFound />;
  }
  
  // If location is provided, we're on a city-specific page
  const cityName = location 
    ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) 
    : "India";
    
  return (
    <ServicePage
      title={serviceContent.title}
      description={serviceContent.description}
      importance={serviceContent.importance}
      steps={serviceContent.steps}
      relatedServices={serviceContent.relatedServices}
      cities={location ? [] : indianCities}
      location={cityName}
    />
  );
};

export default ServiceDetailPage;
