import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { BreadcrumbNav } from "./BreadcrumbNav";
import { editors } from "./editors.data"; // We'll move the data to a separate file

const Team = () => {
  const editorInChief = editors.find(editor => editor.role === "Editor-in-Chief");
  const associateEditors = editors.filter(editor => editor.role === "Associate Editor");

  return (
    <div className="py-12">
      <Navigation />
      <div className="container mx-auto px-4">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold text-center mb-12">Editorial Board</h1>
        
        {/* Editor in Chief Section */}
        {editorInChief && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Editor in Chief</h2>
            <div className="max-w-2xl mx-auto">
              <Link to={`/editors/${editorInChief.id}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-6">
                    <img 
                      src={editorInChief.image} 
                      alt={editorInChief.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{editorInChief.name}</h3>
                      <p className="text-primary">{editorInChief.role}</p>
                      <p className="text-gray-600">{editorInChief.institution}</p>
                      <p className="text-gray-500 mt-2">{editorInChief.expertise}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        )}

        {/* Associate Editors Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">Associate Editors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associateEditors.map((editor) => (
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