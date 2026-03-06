
import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const phoneNumber = "+918075273408";

const FloatingContact = () => {
    return (
        <div className="fixed bottom-8 left-8 z-[100] flex flex-col gap-3">
            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center bg-green-500 text-white h-12 w-12 hover:w-40 rounded-full shadow-lg transition-all duration-300 overflow-hidden"
                aria-label="Contact via WhatsApp"
            >
                <div className="flex items-center w-full px-3">
                    <MessageCircle className="h-6 w-6 shrink-0" />
                    <span className="ml-3 font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">WhatsApp</span>
                </div>
            </a>

            {/* Call Button */}
            <a
                href={`tel:${phoneNumber}`}
                className="group flex items-center bg-dbiz-teal text-white h-12 w-12 hover:w-40 rounded-full shadow-lg transition-all duration-300 overflow-hidden"
                aria-label="Call Us"
            >
                <div className="flex items-center w-full px-3">
                    <Phone className="h-6 w-6 shrink-0" />
                    <span className="ml-3 font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Call Now</span>
                </div>
            </a>
        </div>
    );
};

export default FloatingContact;
