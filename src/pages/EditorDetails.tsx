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
}

const editors: Editor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Editor-in-Chief",
    institution: "Harvard University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    expertise: "Molecular Biology",
    bio: "Dr. Sarah Johnson is a distinguished professor of Molecular Biology at Harvard University. With over 20 years of research experience, she has made significant contributions to understanding cellular mechanisms and gene regulation.",
    education: [
      "Ph.D. in Molecular Biology, Stanford University",
      "M.S. in Biochemistry, MIT",
      "B.S. in Biology, Yale University"
    ],
    publications: [
      "Johnson et al. (2023). Novel mechanisms in gene regulation. Nature",
      "Smith, Johnson, et al. (2022). Advances in CRISPR technology. Cell",
      "Johnson & Williams (2021). Understanding cellular pathways. Science"
    ],
    researchInterests: [
      "Gene Regulation",
      "CRISPR Technology",
      "Cellular Signaling",
      "Protein-DNA Interactions"
    ]
  },
  // ... Add similar detailed information for other editors
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
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Biography</h2>
                <p className="text-gray-600">{editor.bio}</p>
              </div>

              {editor.education && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Education</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>
              )}

              {editor.researchInterests && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Research Interests</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.researchInterests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </div>
              )}

              {editor.publications && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Selected Publications</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {editor.publications.map((pub, index) => (
                      <li key={index}>{pub}</li>
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