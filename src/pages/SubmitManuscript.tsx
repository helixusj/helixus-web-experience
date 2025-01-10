import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Users, Microscope, Mail } from "lucide-react";

interface Author {
  firstName: string;
  lastName: string;
  email: string;
  affiliation: string;
  isCorresponding: boolean;
  orcidId: string;
}

interface SuggestedReviewer {
  name: string;
  email: string;
  affiliation: string;
  reason: string;
}

interface FormData {
  title: string;
  abstract: string;
  keywords: string;
  manuscriptType: string;
  wordCount: string;
  authors: Author[];
  manuscript: File | null;
  figures: File[];
  supplementaryMaterials: File[];
  fundingInfo: string;
  ethicsStatement: string;
  conflictOfInterest: string;
  coverLetter: string;
  suggestedReviewers: SuggestedReviewer[];
}

const SubmitManuscript = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    abstract: "",
    keywords: "",
    manuscriptType: "",
    wordCount: "",
    authors: [{
      firstName: "",
      lastName: "",
      email: "",
      affiliation: "",
      isCorresponding: false,
      orcidId: ""
    }],
    manuscript: null,
    figures: [],
    supplementaryMaterials: [],
    fundingInfo: "",
    ethicsStatement: "",
    conflictOfInterest: "",
    coverLetter: "",
    suggestedReviewers: [{
      name: "",
      email: "",
      affiliation: "",
      reason: ""
    }]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      <div className="container mx-auto py-12 px-4">
        <Card className="w-full max-w-4xl mx-auto backdrop-blur-sm bg-white/90 shadow-xl border-t-4 border-t-primary">
          <CardHeader className="space-y-1 text-center pb-8">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Submit Your Manuscript
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Complete all required fields to submit your research paper
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Manuscript Details Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b-2 border-primary/20">
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Manuscript Details</h3>
                </div>
                
                <div className="space-y-6 animate-fade-in">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Manuscript Title *
                    </label>
                    <Input
                      required
                      placeholder="Enter manuscript title"
                      className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Abstract *
                    </label>
                    <Textarea
                      required
                      placeholder="Enter abstract (max 300 words)"
                      className="h-32 bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Keywords *
                    </label>
                    <Input
                      required
                      placeholder="Enter keywords (separated by commas)"
                      className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Manuscript Type *
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors">
                        <SelectValue placeholder="Select manuscript type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="original-research">Original Research</SelectItem>
                        <SelectItem value="review">Review Article</SelectItem>
                        <SelectItem value="case-study">Case Study</SelectItem>
                        <SelectItem value="methodology">Methodology</SelectItem>
                        <SelectItem value="perspective">Perspective</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Author Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b-2 border-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Author Information</h3>
                </div>
                
                <div className="space-y-6 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                        First Name *
                      </label>
                      <Input required className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors" />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                        Last Name *
                      </label>
                      <Input required className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Institution/Affiliation *
                    </label>
                    <Input required className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors" />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      ORCID iD
                    </label>
                    <Input
                      placeholder="e.g., 0000-0002-1825-0097"
                      className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b-2 border-primary/20">
                  <Upload className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">File Upload</h3>
                </div>
                
                <div className="space-y-6 animate-fade-in">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Manuscript File (PDF) *
                    </label>
                    <Input
                      type="file"
                      required
                      accept=".pdf"
                      className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Figures (if any)
                    </label>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Supplementary Materials
                    </label>
                    <Input
                      type="file"
                      multiple
                      className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Research Details Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b-2 border-primary/20">
                  <Microscope className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Research Details</h3>
                </div>
                
                <div className="space-y-6 animate-fade-in">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Funding Information
                    </label>
                    <Textarea
                      placeholder="Enter funding details if applicable"
                      className="h-24 bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Ethics Statement *
                    </label>
                    <Textarea
                      required
                      placeholder="Describe ethics approval and consent details"
                      className="h-24 bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Conflict of Interest Statement *
                    </label>
                    <Textarea
                      required
                      placeholder="Declare any potential conflicts of interest"
                      className="h-24 bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Cover Letter Section */}
              <div className="group">
                <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                  Cover Letter *
                </label>
                <Textarea
                  required
                  placeholder="Enter your cover letter"
                  className="h-48 bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                />
              </div>

              {/* Suggested Reviewers Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b-2 border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Suggested Reviewers</h3>
                </div>
                
                <div className="space-y-6 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                        Name
                      </label>
                      <Input className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors" />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                        Email
                      </label>
                      <Input type="email" className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Affiliation
                    </label>
                    <Input className="bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors" />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-700 group-hover:text-primary transition-colors">
                      Reason for Suggestion
                    </label>
                    <Textarea
                      placeholder="Explain why this reviewer would be suitable"
                      className="h-24 bg-white/50 backdrop-blur-sm shadow-sm border-gray-200 hover:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <Alert className="bg-primary/5 border-primary/20">
                <AlertDescription className="text-primary">
                  Fields marked with * are required
                </AlertDescription>
              </Alert>

              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                >
                  Submit Paper
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitManuscript;
