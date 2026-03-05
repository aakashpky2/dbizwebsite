"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { privateLimitedContent, llpContent } from "@/data/serviceContent";

// Capitalize first letter of each word
const capitalizeWords = (str: string) => {
  return str
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const ServiceEditor = () => {
  const params = useParams();
  const service = params?.service as string;
  const router = useRouter();
  const [formData, setFormData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [showAddFaqDialog, setShowAddFaqDialog] = useState(false);
  const [newFaq, setNewFaq] = useState({ title: "", content: "" });

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = sessionStorage.getItem("isAdminLoggedIn") === "true";
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }

    // Load content based on service
    if (service === "private-limited") {
      setFormData({ ...privateLimitedContent });
      setLoading(false);
    } else if (service === "limited-liability-partnership") {
      setFormData({ ...llpContent });
      setLoading(false);
    } else {
      // Handle unknown service
      toast({
        title: "Service not found",
        description: "The requested service does not exist",
        variant: "destructive",
      });
      router.push("/admin/dashboard");
    }
  }, [service, router]);

  const handleInputChange = (e: any, field: string) => {
    setFormData({
      ...formData,
      [field]: e.target.value
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

  const handleImportanceChange = (index: number, value: string) => {
    const updatedImportance = [...formData.importance];
    updatedImportance[index] = value;
    setFormData({
      ...formData,
      importance: updatedImportance
    });
  };

  const addImportanceItem = () => {
    setFormData({
      ...formData,
      importance: [...formData.importance, ""]
    });
  };

  const removeImportanceItem = (index: number) => {
    const updatedImportance = [...formData.importance];
    updatedImportance.splice(index, 1);
    setFormData({
      ...formData,
      importance: updatedImportance
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

  const handleAddFaq = () => {
    // Add logic to add a new FAQ to your data
    if (newFaq.title.trim() && newFaq.content.trim()) {
      // In a real implementation, you would update your database

      toast({
        title: "FAQ Added",
        description: "The new FAQ has been added successfully",
      });

      setNewFaq({ title: "", content: "" });
      setShowAddFaqDialog(false);
    }
  };

  const handleSave = () => {
    setSaving(true);

    // Simulate saving data to backend
    setTimeout(() => {
      // Update storage or make API call here
      // In a real implementation, this would save to a database

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
    <AdminLayout title={`Edit ${capitalizeWords(service || '')}`}>
      <Alert className="mb-6 bg-amber-50 border-amber-200">
        <AlertCircle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Content Editor</AlertTitle>
        <AlertDescription className="text-amber-700">
          Changes made in this editor will be saved in your browser temporarily.
          In a production environment, these would be saved to a database.
        </AlertDescription>
      </Alert>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          {formData.title} Content
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
        defaultValue="general"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="bg-muted grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="importance">Key Benefits</TabsTrigger>
          <TabsTrigger value="steps">Process Steps</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>

        {/* General Information Tab */}
        <TabsContent value="general" className="space-y-6">
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

        {/* Importance Tab */}
        <TabsContent value="importance" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Key Benefits</CardTitle>
              <Button
                onClick={addImportanceItem}
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
                    onChange={(e) => handleImportanceChange(index, e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeImportanceItem(index)}
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

        {/* FAQs Tab */}
        <TabsContent value="faqs" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Frequently Asked Questions</CardTitle>
              <Button
                onClick={() => setShowAddFaqDialog(true)}
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
                FAQs will be editable in a production version. This is a demo interface.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add FAQ Dialog */}
      <Dialog open={showAddFaqDialog} onOpenChange={setShowAddFaqDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New FAQ</DialogTitle>
            <DialogDescription>
              Create a new frequently asked question for this service page.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Question</label>
              <Input
                value={newFaq.title}
                onChange={(e) => setNewFaq({ ...newFaq, title: e.target.value })}
                placeholder="Enter the question"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Answer</label>
              <Textarea
                value={newFaq.content}
                onChange={(e) => setNewFaq({ ...newFaq, content: e.target.value })}
                placeholder="Enter the answer"
                rows={4}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddFaqDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddFaq} className="bg-dbiz-teal hover:bg-dbiz-teal/90">
              <Check className="h-4 w-4 mr-1" />
              Add FAQ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default ServiceEditor;
