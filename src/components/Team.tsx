import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

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

export const editors: Editor[] = [
  {
    id: 1,
    name: "Dr. Aravind Jayaseelan",
    role: "Associate Editor",
    institution: "Environmental Science and Biotechnology",
    image: "/lovable-uploads/8ee1349b-8a96-4eca-9832-b5ee454b1335.png",
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
    image: "/lovable-uploads/2a5967e1-1a68-4cef-93c1-798d717ecd5f.png",
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

const Team = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Editorial Board</h1>
        
        {/* Editor in Chief Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Editor in Chief</h2>
          <div className="max-w-2xl mx-auto">
            {editors.filter(editor => editor.role === "Editor-in-Chief").map((editor) => (
              <Link to={`/editors/${editor.id}`} key={editor.id}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-6">
                    <img 
                      src={editor.image} 
                      alt={editor.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{editor.name}</h3>
                      <p className="text-primary">{editor.role}</p>
                      <p className="text-gray-600">{editor.institution}</p>
                      <p className="text-gray-500 mt-2">{editor.expertise}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Associate Editors Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">Associate Editors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editors.filter(editor => editor.role === "Associate Editor").map((editor) => (
              <Link to={`/editors/${editor.id}`} key={editor.id}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={editor.image} 
                      alt={editor.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold">{editor.name}</h3>
                    <p className="text-primary">{editor.role}</p>
                    <p className="text-gray-600">{editor.institution}</p>
                    <p className="text-gray-500 mt-2">{editor.expertise}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
