

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Phone, MessageCircle } from "lucide-react";

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

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup");
    
    if (!hasSeenPopup) {
      // Show popup after a slight delay to ensure page is loaded
      const timer = setTimeout(() => {
        setOpen(true);
        
        // Auto close after 30 seconds
        const closeTimer = setTimeout(() => {
          setOpen(false);
          localStorage.setItem("hasSeenWelcomePopup", "true");
        }, 30000);
        
        return () => clearTimeout(closeTimer);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("hasSeenWelcomePopup", "true");
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-gradient-to-b from-white to-gray-50 border-t-4 border-dbiz-teal">
        <div className="absolute right-4 top-4">
          <button 
            onClick={handleClose}
            className="rounded-full w-8 h-8 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        
        <DialogHeader className="px-6 pt-6 pb-0">
          <div className="mb-2">
            <img 
              src="/dbiz-uploads/5811ce1b-59a5-4195-9ade-c745a34d0dbd.png" 
              alt="DBIZ Consultancy" 
              className="h-12 mb-2"
            />
          </div>
          <DialogTitle className="text-xl text-dbiz-navy">
            At DBIZ Consultancy Private Limited, we strongly believe that your success is our business.
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6 py-5">
          <p className="text-gray-700 mb-4">
            We don't just see ourselves as a consulting partner — we aim to build a strategic relationship with every client to support and accelerate their business success, especially in the areas of Statutory Compliances and Intellectual Property.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-dbiz-teal text-white hover:bg-dbiz-teal/90">
                  Contact Us Today
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-0">
                <ContactOptions />
              </PopoverContent>
            </Popover>
            
            <Button 
              variant="outline" 
              className="border-dbiz-navy text-dbiz-navy"
              onClick={handleClose}
            >
              Continue Browsing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
