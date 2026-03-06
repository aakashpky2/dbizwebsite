

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: ""
  });

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (value: string) => {
    setFormData(prev => ({ ...prev, state: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct email body with form details
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.state}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `State: ${formData.state}\n\n` +
      `Message:\n${formData.message}`
    );

    // Create mailto link
    const mailtoLink = `mailto:info@dbizsolutions.in?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    alert("Thank you for your message! Your email client will now open to send the request.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Get Expert Help For Your Business</h2>
          <p className="section-subtitle">
            Connect with an Expert Now
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-dbiz-navy mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form or contact us directly using the information below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-dbiz-teal/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-dbiz-teal" />
                </div>
                <div>
                  <h4 className="text-dbiz-navy font-medium">Phone</h4>
                  <p className="text-gray-600">+91 8075273408</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-dbiz-teal/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-dbiz-teal" />
                </div>
                <div>
                  <h4 className="text-dbiz-navy font-medium">Email</h4>
                  <p className="text-gray-600">info@dbizsolutions.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-dbiz-teal/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-dbiz-teal" />
                </div>
                <div>
                  <h4 className="text-dbiz-navy font-medium">Offices</h4>
                  <div className="space-y-4 mt-2">
                    <div>
                      <p className="text-sm font-bold text-dbiz-navy">Trivandrum (Head Office):</p>
                      <p className="text-gray-600">TC No 44/913(2), Second Floor, Springs Tower, Edappazhanji, Thiruvananthapuram-695010</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dbiz-navy">Trivandrum (Branch):</p>
                      <p className="text-gray-600">TC 29/4615, Central Plaza, Nandavanam, Vazhuthacaud, Thiruvananthapuram, Kerala 695014</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dbiz-navy">Kochi Office:</p>
                      <p className="text-gray-600">4th Floor, Koprambil Heights, B3, Seaport - Airport Rd, near Chaithram Clothing, Irumpanam, Thrippunithura, Kochi, Ernakulam, Kerala 682309</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="state" className="text-sm font-medium text-gray-700">State</label>
                    <Select value={formData.state} onValueChange={handleStateChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message (optional)</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business needs..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-6 py-4 h-auto text-sm font-medium" type="submit">
                      Connect Now
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0">
                    <ContactOptions />
                  </PopoverContent>
                </Popover>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
