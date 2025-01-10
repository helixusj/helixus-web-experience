import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Card } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Link } from "lucide-react";
import { editors } from "../components/editors.data";

interface ScholarLinks {
  orcid?: string;
  scopus?: string;
  googleScholar?: string;
}

interface Editor {
  id: number;
  name: string;
  role: string;
  institution: string;
  image: string;
  expertise: string;
  bio?: string;
  scholarLinks?: ScholarLinks;
  education?: string[];
  publications?: string[];
  researchInterests?: string[];
  keyHighlights?: string[];
  editorialExperience?: string[];
  recognition?: string[];
  researchImpact?: string[];
  keyResearchAreas?: string[];
  leadershipRecognition?: string[];
}

const EditorDetails = () => {
  const { id } = useParams();
  const editor = editors.find(e => e.id === Number(id));

  console.log('Editor ID:', id);
  console.log('Found editor:', editor);

  if (!editor) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <p>Editor not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <Card className="max-w-4xl mx-auto p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src={editor.image} 
                alt={editor.name}
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold mb-2">{editor.name}</h1>
              <p className="text-primary font-medium">{editor.role}</p>
              <p className="text-gray-600">{editor.institution}</p>
              <p className="text-gray-500 mt-2">{editor.expertise}</p>
              
              {editor.scholarLinks && (
                <div className="mt-4 space-y-2">
                  {editor.scholarLinks.orcid && (
                    <a 
                      href={editor.scholarLinks.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-primary hover:underline"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      ORCID
                    </a>
                  )}
                  {editor.scholarLinks.scopus && (
                    <a 
                      href={editor.scholarLinks.scopus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-primary hover:underline"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Scopus
                    </a>
                  )}
                  {editor.scholarLinks.googleScholar && (
                    <a 
                      href={editor.scholarLinks.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-primary hover:underline"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Google Scholar
                    </a>
                  )}
                </div>
              )}
            </div>
            
            <div className="md:col-span-2">
              {editor.bio && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Biography</h2>
                  <p className="text-gray-600">{editor.bio}</p>
                </div>
              )}

              {editor.keyHighlights && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.keyHighlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {editor.editorialExperience && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Editorial Experience</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.editorialExperience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {editor.recognition && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Recognition</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.recognition.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}

              {editor.researchImpact && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Research Impact</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.researchImpact.map((impact, index) => (
                      <li key={index}>{impact}</li>
                    ))}
                  </ul>
                </div>
              )}

              {editor.keyResearchAreas && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Key Research Areas</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.keyResearchAreas.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </div>
              )}

              {editor.leadershipRecognition && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Leadership & Recognition</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.leadershipRecognition.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EditorDetails;