
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, TrendingUp, Percent, IndianRupee, BarChart3 } from "lucide-react";
import GSTRateComparison from "@/components/GSTRateComparison";
import ROICalculator from "@/components/ROICalculator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ToolsPage = () => {
  const tools = [
    {
      id: "gst-comparison",
      title: "GST Rate Comparison",
      description: "Compare old vs new GST rates across different categories",
      icon: <Percent className="h-6 w-6" />,
      badge: "Featured",
      active: true
    },
    {
      id: "gst-calculator",
      title: "GST Calculator",
      description: "Calculate GST amount and final price for your products",
      icon: <Calculator className="h-6 w-6" />,
      badge: "Coming Soon",
      active: false
    },
    {
      id: "income-tax-calculator",
      title: "Income Tax Calculator",
      description: "Calculate your income tax liability for different financial years",
      icon: <IndianRupee className="h-6 w-6" />,
      badge: "Coming Soon",
      active: false
    },
    {
      id: "business-compliance-tracker",
      title: "Compliance Tracker",
      description: "Track important business compliance deadlines and requirements",
      icon: <FileText className="h-6 w-6" />,
      badge: "Coming Soon",
      active: false
    },
    {
      id: "roi-calculator",
      title: "ROI Calculator",
      description: "Calculate return on investment for your business decisions",
      icon: <TrendingUp className="h-6 w-6" />,
      badge: "Featured",
      active: true
    },
    {
      id: "financial-ratios",
      title: "Financial Ratio Analyzer",
      description: "Analyze your business financial health with key ratios",
      icon: <BarChart3 className="h-6 w-6" />,
      badge: "Coming Soon",
      active: false
    }
  ];

  const [activeTool, setActiveTool] = React.useState("gst-comparison");

  const renderToolContent = () => {
    switch (activeTool) {
      case "gst-comparison":
        return <GSTRateComparison />;
      case "roi-calculator":
        return <ROICalculator />;
      default:
        return (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Calculator className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tool Coming Soon</h3>
              <p className="text-gray-500">This tool is currently under development and will be available soon.</p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Tools & Calculators</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Free online tools to help you make informed business decisions, calculate taxes, 
              and stay compliant with regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Tool Navigation Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Available Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tax Tools */}
                  <div>
                    <h4 className="font-medium text-sm text-gray-900 mb-2 flex items-center gap-2">
                      <Percent className="h-4 w-4" />
                      Tax Tools
                    </h4>
                    <div className="space-y-1 ml-6">
                      {tools.filter(tool => ['gst-comparison', 'gst-calculator', 'income-tax-calculator'].includes(tool.id)).map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => tool.active && setActiveTool(tool.id)}
                          disabled={!tool.active}
                          className={`w-full p-2 rounded-md text-left transition-all duration-200 text-sm ${
                            activeTool === tool.id 
                              ? 'bg-dbiz-navy text-white' 
                              : tool.active 
                                ? 'hover:bg-gray-100 text-gray-700' 
                                : 'text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              {tool.icon}
                              <span className="font-medium">{tool.title}</span>
                            </div>
                            <Badge 
                              variant={tool.badge === "Featured" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {tool.badge}
                            </Badge>
                          </div>
                          <p className="text-xs opacity-80 line-clamp-2">{tool.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Business Analysis */}
                  <div>
                    <h4 className="font-medium text-sm text-gray-900 mb-2 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Business Analysis
                    </h4>
                    <div className="space-y-1 ml-6">
                      {tools.filter(tool => ['roi-calculator', 'financial-ratios'].includes(tool.id)).map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => tool.active && setActiveTool(tool.id)}
                          disabled={!tool.active}
                          className={`w-full p-2 rounded-md text-left transition-all duration-200 text-sm ${
                            activeTool === tool.id 
                              ? 'bg-dbiz-navy text-white' 
                              : tool.active 
                                ? 'hover:bg-gray-100 text-gray-700' 
                                : 'text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              {tool.icon}
                              <span className="font-medium">{tool.title}</span>
                            </div>
                            <Badge 
                              variant={tool.badge === "Featured" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {tool.badge}
                            </Badge>
                          </div>
                          <p className="text-xs opacity-80 line-clamp-2">{tool.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Compliance */}
                  <div>
                    <h4 className="font-medium text-sm text-gray-900 mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Compliance
                    </h4>
                    <div className="space-y-1 ml-6">
                      {tools.filter(tool => ['business-compliance-tracker'].includes(tool.id)).map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => tool.active && setActiveTool(tool.id)}
                          disabled={!tool.active}
                          className={`w-full p-2 rounded-md text-left transition-all duration-200 text-sm ${
                            activeTool === tool.id 
                              ? 'bg-dbiz-navy text-white' 
                              : tool.active 
                                ? 'hover:bg-gray-100 text-gray-700' 
                                : 'text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              {tool.icon}
                              <span className="font-medium">{tool.title}</span>
                            </div>
                            <Badge 
                              variant={tool.badge === "Featured" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {tool.badge}
                            </Badge>
                          </div>
                          <p className="text-xs opacity-80 line-clamp-2">{tool.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tool Content Area */}
            <div className="lg:col-span-3">
              {renderToolContent()}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsPage;