

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/Admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  Loader2,
  Plus,
  Trash2,
  AlertCircle,
  Save
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { llpContent } from "@/data/serviceContent";

const LLPContentEditor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = sessionStorage.getItem("isAdminLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/admin/login");
      return;
    }

    // Load content
    setFormData({ ...llpContent });
    setLoading(false);
  }, [router]);

  const handleInputChange = (e: any, field: string) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleArrayChange = (index: number, value: string, field: string) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({
      ...formData,
      [field]: updatedArray
    });
  };

  const addArrayItem = (field: string, defaultValue: string = "") => {
    setFormData({
      ...formData,
      [field]: [...formData[field], defaultValue]
    });
  };

  const removeArrayItem = (index: number, field: string) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({
      ...formData,
      [field]: updatedArray
    });
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    const updatedSteps = [...formData.steps];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setFormData({
      ...formData,
      steps: updatedSteps
    });
  };

  const addStep = () => {
    if (!formData.steps) {
      setFormData({
        ...formData,
        steps: [{ title: "", description: "" }]
      });
    } else {
      setFormData({
        ...formData,
        steps: [...formData.steps, { title: "", description: "" }]
      });
    }
  };

  const removeStep = (index: number) => {
    const updatedSteps = [...formData.steps];
    updatedSteps.splice(index, 1);
    setFormData({
      ...formData,
      steps: updatedSteps
    });
  };

  const addRelatedService = () => {
    if (!formData.relatedServices) {
      setFormData({
        ...formData,
        relatedServices: [{ name: "", path: "" }]
      });
    } else {
      setFormData({
        ...formData,
        relatedServices: [...formData.relatedServices, { name: "", path: "" }]
      });
    }
  };

  const removeRelatedService = (index: number) => {
    const updatedServices = [...formData.relatedServices];
    updatedServices.splice(index, 1);
    setFormData({
      ...formData,
      relatedServices: updatedServices
    });
  };

  const handleRelatedServiceChange = (index: number, field: string, value: string) => {
    const updatedServices = [...formData.relatedServices];
    updatedServices[index] = { ...updatedServices[index], [field]: value };
    setFormData({
      ...formData,
      relatedServices: updatedServices
    });
  };

  const handleSave = () => {
    setSaving(true);

    // Simulate saving data to backend
    setTimeout(() => {
      // In a real implementation, this would save to a database
      // For now, we'll just store in localStorage as a demonstration
      localStorage.setItem('llp-content', JSON.stringify(formData));

      toast({
        title: "Changes saved",
        description: "Your changes have been saved successfully",
      });

      setSaving(false);
    }, 1500);
  };

  if (loading) {
    return (
      <AdminLayout title="Loading...">
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-8 w-8 animate-spin text-dbiz-teal" />
          <span className="ml-2 text-lg">Loading content...</span>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Edit LLP Content">
      <Alert className="mb-6 bg-amber-50 border-amber-200">
        <AlertCircle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Content Editor</AlertTitle>
        <AlertDescription className="text-amber-700">
          Changes made in this editor will be saved to localStorage temporarily.
          In a production environment, these would be saved to a database.
        </AlertDescription>
      </Alert>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Limited Liability Partnership Content
        </h2>
        <Button
          onClick={handleSave}
          className="bg-dbiz-teal hover:bg-dbiz-teal/90"
          disabled={saving}
        >
          {saving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="bg-muted grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="importance">Benefits</TabsTrigger>
          <TabsTrigger value="steps">Process Steps</TabsTrigger>
          <TabsTrigger value="services">Related Services</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service Title
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) => handleInputChange(e, "title")}
                  className="max-w-2xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange(e, "description")}
                  rows={5}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Benefits Tab */}
        <TabsContent value="importance" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Key Benefits</CardTitle>
              <Button
                onClick={() => addArrayItem("importance", "")}
                variant="outline"
                size="sm"
                className="h-8"
              >
                <Plus className="h-3.5 w-3.5 mr-1" />
                Add Benefit
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.importance.map((item: string, index: number) => (
                <div key={index} className="flex gap-3">
                  <Textarea
                    value={item}
                    onChange={(e) => handleArrayChange(index, e.target.value, "importance")}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeArrayItem(index, "importance")}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 shrink-0 self-start mt-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Steps Tab */}
        <TabsContent value="steps" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Process Steps</CardTitle>
              <Button
                onClick={addStep}
                variant="outline"
                size="sm"
                className="h-8"
              >
                <Plus className="h-3.5 w-3.5 mr-1" />
                Add Step
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {formData.steps?.map((step: any, index: number) => (
                <div key={index} className="border p-4 rounded-lg relative">
                  <div className="absolute top-3 right-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeStep(index)}
                      className="h-7 w-7 text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mb-4 flex items-center">
                    <span className="inline-flex items-center justify-center bg-dbiz-navy text-white rounded-full h-6 w-6 text-sm mr-2">
                      {index + 1}
                    </span>
                    <h3 className="font-medium">Step {index + 1}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Title
                      </label>
                      <Input
                        value={step.title}
                        onChange={(e) => handleStepChange(index, "title", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Description
                      </label>
                      <Textarea
                        value={step.description}
                        onChange={(e) => handleStepChange(index, "description", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {(!formData.steps || formData.steps.length === 0) && (
                <div className="text-center py-6 text-gray-500">
                  No steps added yet. Click "Add Step" to create a new process step.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Related Services Tab */}
        <TabsContent value="services" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Related Services</CardTitle>
              <Button
                onClick={addRelatedService}
                variant="outline"
                size="sm"
                className="h-8"
              >
                <Plus className="h-3.5 w-3.5 mr-1" />
                Add Service
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {formData.relatedServices?.map((service: any, index: number) => (
                <div key={index} className="border p-4 rounded-lg relative">
                  <div className="absolute top-3 right-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeRelatedService(index)}
                      className="h-7 w-7 text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-medium">Related Service {index + 1}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Service Name
                      </label>
                      <Input
                        value={service.name}
                        onChange={(e) => handleRelatedServiceChange(index, "name", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Service Path
                      </label>
                      <Input
                        value={service.path}
                        onChange={(e) => handleRelatedServiceChange(index, "path", e.target.value)}
                        placeholder="/service-name"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {(!formData.relatedServices || formData.relatedServices.length === 0) && (
                <div className="text-center py-6 text-gray-500">
                  No related services added yet. Click "Add Service" to add a new related service.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQs Tab */}
        <TabsContent value="faqs" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Frequently Asked Questions</CardTitle>
              <Button
                onClick={() => toast({
                  title: "Feature coming soon",
                  description: "FAQ editing will be available in the next update"
                })}
                variant="outline"
                size="sm"
                className="h-8"
              >
                <Plus className="h-3.5 w-3.5 mr-1" />
                Add FAQ
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-gray-500">
                FAQs editing will be available in the next update. This is a preview interface.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default LLPContentEditor;
