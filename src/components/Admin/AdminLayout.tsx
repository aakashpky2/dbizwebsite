"use client";


import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  FileEdit
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminLoggedIn");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin panel",
    });
    router.push("/admin/login");
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: "/admin/dashboard",
    },
    {
      title: "Private Limited",
      icon: <FileText className="h-5 w-5" />,
      path: "/admin/edit/private-limited",
    },
    {
      title: "LLP Editor",
      icon: <Users className="h-5 w-5" />,
      path: "/admin/llp-editor",
    },
    {
      title: "Content Editor",
      icon: <FileEdit className="h-5 w-5" />,
      path: "/admin/edit/limited-liability-partnership",
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      path: "/admin/settings",
    },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white"
        >
          {sidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setSidebarOpen(false)}
      />

      <div
        className={`fixed md:sticky top-0 left-0 w-64 h-full bg-white border-r z-20 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b text-center">
            <img
              src="/dbiz-uploads/5811ce1b-59a5-4195-9ade-c745a34d0dbd.png"
              alt="D BIZ Consultancy"
              className="h-12 mx-auto"
            />
            <h2 className="text-sm font-medium mt-2 text-dbiz-navy">Admin Portal</h2>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`flex items-center px-4 py-3 rounded-lg ${isActive(item.path)
                      ? "bg-dbiz-teal/10 text-dbiz-teal"
                      : "text-gray-600 hover:bg-gray-100"
                      }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                    {isActive(item.path) && (
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <header className="bg-white shadow-sm border-b sticky top-0 z-10">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-dbiz-navy">{title}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-600">Admin</span>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
