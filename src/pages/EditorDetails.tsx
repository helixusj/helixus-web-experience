import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Card } from "@/components/ui/card";

interface Editor {
  id: number;
  name: string;
  role: string;
  institution: string;
  image: string;
  expertise: string;
  bio?: string;
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

const editors: Editor[] = [
  {
    id: 1,
    name: "Dr. J. Aravind",
    role: "Associate Editor",
    institution: "Environmental Science and Biotechnology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    expertise: "Environmental Science and Biotechnology",
    bio: "Dr. J. Aravind is an accomplished researcher in environmental science and biotechnology with extensive expertise in bioremediation, environmental remediation, and sustainable technologies. His research has made significant contributions to environmental science and pollution mitigation strategies.",
    keyHighlights: [
      "Published over 100 research papers with a cumulative impact factor exceeding 170",
      "Strong citation metrics: h-index of 23 (Google Scholar) and 17 (Scopus)",
      "Total citations: 1990+ (Google Scholar), 1321 (Scopus)"
    ],
    editorialExperience: [
      "Served as Associate Editor for International Journal of Environmental Science and Technology (Springer Nature) for 12 years",
      "Current editorial board member for prestigious journals"
    ],
    recognition: [
      "Outstanding reviewer for multiple high-impact journals",
      "Led publication of several influential books on environmental remediation",
      "Current research focuses on emerging contaminants, microplastics, and innovative approaches"
    ]
  },
  {
    id: 2,
    name: "Dr. Satish Ramalingam",
    role: "Associate Editor",
    institution: "SRM Institute of Science and Technology",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    expertise: "Cancer Biology",
    bio: "Dr. Satish Ramalingam is an accomplished researcher and Associate Professor in the Department of Genetic Engineering at SRM Institute of Science and Technology. His pioneering work in cancer biology, particularly in understanding RNA binding proteins and cancer stem cells, has led to significant breakthroughs in cancer research.",
    researchImpact: [
      "Published over 60 papers in high-impact journals with cumulative IF >297",
      "Strong citation metrics: h-index of 22 with 2400+ citations",
      "Secured three patents related to cancer detection and treatment"
    ],
    keyResearchAreas: [
      "Cancer stem cell biology",
      "RNA binding proteins in cancer progression",
      "Novel therapeutic approaches for cancer treatment",
      "Molecular medicine and drug discovery"
    ],
    leadershipRecognition: [
      "Director of Stemonc R&D Private Limited",
      "Editorial board member for Frontiers in Pharmacology and Scientific Reports",
      "Recipient of multiple research awards including GRG/AGA Fellow Travel Award"
    ]
  },
  {
    id: 3,
    name: "Dr. Aravindan Natarajan",
    role: "Associate Editor",
    institution: "Oklahoma State University",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    expertise: "Radiation Biology and Cancer",
    bio: "Professor and Kerr Chair in the Department of Physiological Sciences, Oklahoma State University"
  },
  {
    id: 4,
    name: "Dr. Rajasingh Johnson",
    role: "Associate Editor",
    institution: "The University of Tennessee Health Science Center",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    expertise: "Stem cell Biology",
    bio: "Professor, College of Dentistry, Department of Bioscience Research"
  },
  {
    id: 5,
    name: "Dr. Shahid Umar",
    role: "Associate Editor",
    institution: "University of Kansas Medical Center",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    expertise: "Gut Microbiome, Cancer Biology",
    bio: "Professor, Department of Surgery"
  },
  {
    id: 6,
    name: "Dr. Joy Scaria",
    role: "Associate Editor",
    institution: "Oklahoma State University",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    expertise: "Veterinary Pathobiology, Gut Microbiome",
    bio: "Associate Professor, Veterinary Pathobiology, Stillwater, Oklahoma"
  },
  {
    id: 7,
    name: "Dr. Selvendiran Karuppaiyah",
    role: "Associate Editor",
    institution: "The Ohio State University",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    expertise: "Hormones and Cancer",
    bio: "Associate Professor, Translational Therapeutics, The James"
  },
  {
    id: 8,
    name: "Dr. Sitadjody Sivanandane",
    role: "Associate Editor",
    institution: "Wake Forest Institute for Regenerative Medicine",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    expertise: "Regenerative Medicine",
    bio: "Associate Staff Scientist"
  },
  {
    id: 9,
    name: "Dr. Kumar S. Bishnupuri",
    role: "Associate Editor",
    institution: "Washington University in St. Louis",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    expertise: "Inflammation and cancer",
    bio: "Assistant Professor of Medicine, Division of Gastroenterology"
  },
  {
    id: 10,
    name: "Dr. Ilangovan Ramachandran",
    role: "Associate Editor",
    institution: "University of Madras",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    expertise: "Endocrinology",
    bio: "Assistant Professor, Department of Endocrinology"
  },
  {
    id: 11,
    name: "Dr. Surajit Pathak",
    role: "Associate Editor",
    institution: "Chettinad Academy of Research and Education",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    expertise: "Cancer Biology",
    bio: "Professor"
  }
];

const EditorDetails = () => {
  const { id } = useParams();
  const editor = editors.find(e => e.id === Number(id));

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
