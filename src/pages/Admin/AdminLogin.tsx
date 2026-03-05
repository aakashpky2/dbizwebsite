"use client";


import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple authentication for demo purposes
    // In a real app, this would be handled securely with proper authentication
    if (username === "admin" && password === "dbiz2025") {
      // Store auth state in session storage
      sessionStorage.setItem("isAdminLoggedIn", "true");
      
      // Show success toast
      toast({
        title: "Login successful",
        description: "Welcome to D BIZ Admin Panel",
        variant: "default",
      });
      
      // Navigate to admin dashboard
      router.push("/admin/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-dbiz-navy to-dbiz-navy/70">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <img 
            src="/dbiz-uploads/5811ce1b-59a5-4195-9ade-c745a34d0dbd.png" 
            alt="D BIZ Consultancy" 
            className="mx-auto h-24 mb-6"
          />
          <h1 className="text-3xl font-bold text-white">Admin Portal</h1>
        </div>
        
        <Card className="border-none shadow-xl">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-2">
              <div className="p-2 rounded-full bg-dbiz-teal/10">
                <Lock className="h-6 w-6 text-dbiz-teal" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">Username</label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="border-gray-200"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full mt-6 bg-dbiz-teal hover:bg-dbiz-teal/90"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="border-t py-4 text-center">
            <p className="text-sm text-gray-500">
              For assistance, please contact the system administrator
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
