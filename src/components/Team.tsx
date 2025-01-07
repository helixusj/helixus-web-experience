import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Editor {
  id: number;
  name: string;
  role: string;
  institution: string;
  image: string;
  expertise: string;
}

const editors: Editor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Editor-in-Chief",
    institution: "Harvard University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    expertise: "Molecular Biology"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Associate Editor",
    institution: "Stanford University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    expertise: "Biotechnology"
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    role: "Associate Editor",
    institution: "MIT",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    expertise: "Systems Biology"
  },
  {
    id: 4,
    name: "Dr. James Rodriguez",
    role: "Associate Editor",
    institution: "Oxford University",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    expertise: "Computational Biology"
  },
  // Additional Associate Editors
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    role: "Associate Editor",
    institution: "Yale University",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    expertise: "Genetics"
  },
  {
    id: 6,
    name: "Dr. David Kim",
    role: "Associate Editor",
    institution: "UC Berkeley",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    expertise: "Neuroscience"
  },
  {
    id: 7,
    name: "Dr. Rachel Martinez",
    role: "Associate Editor",
    institution: "Johns Hopkins University",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    expertise: "Immunology"
  },
  {
    id: 8,
    name: "Dr. Thomas Anderson",
    role: "Associate Editor",
    institution: "University of Cambridge",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    expertise: "Bioinformatics"
  },
  {
    id: 9,
    name: "Dr. Anna Petrova",
    role: "Associate Editor",
    institution: "ETH Zurich",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    expertise: "Cell Biology"
  },
  {
    id: 10,
    name: "Dr. Robert Lee",
    role: "Associate Editor",
    institution: "University of Tokyo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    expertise: "Biochemistry"
  },
  {
    id: 11,
    name: "Dr. Sofia Garcia",
    role: "Associate Editor",
    institution: "Max Planck Institute",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    expertise: "Structural Biology"
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