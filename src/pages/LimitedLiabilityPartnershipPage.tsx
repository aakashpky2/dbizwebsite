

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LLPServicePage from "@/components/LLPServicePage";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";

const LimitedLiabilityPartnershipPage = () => {
  const params = useParams();
  const location = params?.location as string;
  
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
    <LLPServicePage location={cityName} />
  );
};

export default LimitedLiabilityPartnershipPage;
