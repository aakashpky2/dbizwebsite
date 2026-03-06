

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/components/Admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileEdit, FileText, Users } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = sessionStorage.getItem("isAdminLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const services = [
    {
      name: "Private Limited Company",
      path: "/admin/edit/private-limited",
      icon: <FileText className="h-12 w-12 text-dbiz-teal" />,
      description: "Edit private limited company registration service page content."
    },
    {
      name: "Limited Liability Partnership",
      path: "/admin/llp-editor",
      icon: <Users className="h-12 w-12 text-dbiz-teal" />,
      description: "Edit LLP registration service page content with enhanced editor."
    },
    {
      name: "Other Services",
      path: "/admin/edit/services",
      icon: <BookOpen className="h-12 w-12 text-dbiz-teal" />,
      description: "Edit other service pages content."
    },
    {
      name: "FAQ Content",
      path: "/admin/edit/faqs",
      icon: <FileEdit className="h-12 w-12 text-dbiz-teal" />,
      description: "Edit frequently asked questions for all service pages."
    }
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm opacity-80 mt-1">Active service pages</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">14</p>
            <p className="text-sm opacity-80 mt-1">Cities covered</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Content Blocks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">36</p>
            <p className="text-sm opacity-80 mt-1">Editable sections</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm opacity-80 mt-1">Questions across pages</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6">Content Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="border border-gray-200 hover:border-dbiz-teal/40 hover:shadow-md transition-all cursor-pointer"
            onClick={() => navigate(service.path)}
          >
            <CardContent className="pt-6">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-dbiz-navy">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
