import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Users, Flask, Mail } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto py-8 px-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-primary">Submit Your Manuscript</CardTitle>
            <p className="text-muted-foreground">Complete all required fields to submit your research paper</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Manuscript Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <FileText className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Manuscript Details</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Manuscript Title *
                    </label>
                    <Input
                      required
                      placeholder="Enter manuscript title"
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Abstract *
                    </label>
                    <Textarea
                      required
                      placeholder="Enter abstract (max 300 words)"
                      className="h-32 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Keywords *
                    </label>
                    <Input
                      required
                      placeholder="Enter keywords (separated by commas)"
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Manuscript Type *
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white">
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
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Author Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name *
                    </label>
                    <Input required className="bg-white" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name *
                    </label>
                    <Input required className="bg-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Institution/Affiliation *
                  </label>
                  <Input required className="bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    ORCID iD
                  </label>
                  <Input
                    placeholder="e.g., 0000-0002-1825-0097"
                    className="bg-white"
                  />
                </div>
              </div>

              {/* File Upload Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Upload className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">File Upload</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Manuscript File (PDF) *
                    </label>
                    <Input
                      type="file"
                      required
                      accept=".pdf"
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Figures (if any)
                    </label>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Supplementary Materials
                    </label>
                    <Input
                      type="file"
                      multiple
                      className="bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Research Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Flask className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Research Details</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Funding Information
                    </label>
                    <Textarea
                      placeholder="Enter funding details if applicable"
                      className="h-24 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Ethics Statement *
                    </label>
                    <Textarea
                      required
                      placeholder="Describe ethics approval and consent details"
                      className="h-24 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Conflict of Interest Statement *
                    </label>
                    <Textarea
                      required
                      placeholder="Declare any potential conflicts of interest"
                      className="h-24 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Cover Letter Section */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Cover Letter *
                </label>
                <Textarea
                  required
                  placeholder="Enter your cover letter"
                  className="h-48 bg-white"
                />
              </div>

              {/* Suggested Reviewers Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Suggested Reviewers</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input className="bg-white" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input type="email" className="bg-white" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Affiliation
                    </label>
                    <Input className="bg-white" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Reason for Suggestion
                    </label>
                    <Textarea
                      placeholder="Explain why this reviewer would be suitable"
                      className="h-24 bg-white"
                    />
                  </div>
                </div>
              </div>

              <Alert>
                <AlertDescription>
                  Fields marked with * are required
                </AlertDescription>
              </Alert>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white"
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