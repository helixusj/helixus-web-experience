import Navigation from '../components/Navigation';
import { ArrowRight, BookOpen, Users, Award, Globe2, ChevronRight, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { editors } from '../components/Team';

const Index = () => {
  const editorInChief = editors.find(editor => editor.role === "Editor-in-Chief");
  const strategicAdvisor = editors.find(editor => editor.role === "Strategic Advisor");
  const featuredEditors = editors.filter(editor => 
    editor.role !== "Editor-in-Chief" && editor.role !== "Strategic Advisor"
  ).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-sm uppercase tracking-wider text-primary mb-4">
                Intersections in Lifesciences
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0A2472]">
                Advancing Scientific Discovery
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Helixus is a peer-reviewed journal publishing groundbreaking research across multiple disciplines.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/submit-manuscript" 
                  className="inline-flex items-center bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Submit Your Research
                  <ArrowRight className="ml-2" />
                </a>
                <a 
                  href="/journal-information" 
                  className="inline-flex items-center border-2 border-[#FFB800] text-[#0A2472] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                >
                  <Play className="mr-2" size={20} />
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Content - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img 
                    src="/lovable-uploads/9773f725-8c48-44ea-8a3e-94422319c13a.png" 
                    alt="DNA Structure"
                    className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center gap-2">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">24/7</p>
                    <p className="font-semibold">Support</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex -space-x-2">
                      {editors.slice(0, 4).map((editor, index) => (
                        <img 
                          key={index}
                          src={editor.image} 
                          alt={editor.name}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Satisfied authors</p>
                  <p className="font-semibold">10+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats Section */}
      <div className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">TBA</p>
              <p className="text-gray-600">Impact Factor</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-gray-600">Global Authors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">21</p>
              <p className="text-gray-600">Days to Decision</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-gray-600">Open Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Journal Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Journal Overview</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              Helixus - Intersections in Lifesciences is an international, interdisciplinary, peer-reviewed journal dedicated to publishing cutting-edge research at the convergence of biological sciences, biotechnology, and biomedical research.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  Providing a multidisciplinary platform that bridges diverse fields within life sciences, fostering integrative research, innovative approaches, and transformative discoveries.
                </p>
              </div>
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Info</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Semi-annual Journal</li>
                  <li>Interdisciplinary</li>
                  <li>Peer Reviewed</li>
                  <li>Open Access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          {editorInChief && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Editor in Chief</h2>
              <Link to={`/editors/${editorInChief.id}`}>
                <Card className="max-w-2xl mx-auto overflow-hidden">
                  <div className="p-6 flex items-center space-x-6">
                    <img 
                      src={editorInChief.image} 
                      alt={editorInChief.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{editorInChief.name}</h3>
                      <p className="text-primary font-medium">{editorInChief.role}</p>
                      <p className="text-gray-600">{editorInChief.institution}</p>
                      <p className="text-gray-500 mt-2">{editorInChief.expertise}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          {strategicAdvisor && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Strategic Advisor</h2>
              <Link to={`/editors/${strategicAdvisor.id}`}>
                <Card className="max-w-2xl mx-auto overflow-hidden">
                  <div className="p-6 flex items-center space-x-6">
                    <img 
                      src={strategicAdvisor.image} 
                      alt={strategicAdvisor.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{strategicAdvisor.name}</h3>
                      <p className="text-primary font-medium">{strategicAdvisor.role}</p>
                      <p className="text-gray-600">{strategicAdvisor.institution}</p>
                      <p className="text-gray-500 mt-2">{strategicAdvisor.expertise}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          <h2 className="text-3xl font-bold text-center mb-8">Editorial Board</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {featuredEditors.map((editor) => (
              <Link to={`/editors/${editor.id}`} key={editor.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-4">
                    <img 
                      src={editor.image} 
                      alt={editor.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-center">{editor.name}</h3>
                    <p className="text-primary font-medium text-center">{editor.role}</p>
                    <p className="text-gray-600 text-center text-sm">{editor.institution}</p>
                    <p className="text-gray-500 text-center text-sm mt-2">{editor.expertise}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Publications Preview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Publications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent p-6 rounded-lg">
              <span className="text-sm text-primary font-medium">RESEARCH ARTICLE</span>
              <h3 className="text-xl font-semibold mt-2 mb-4">
                Novel Approaches in Quantum Computing: A Comprehensive Review
              </h3>
              <p className="text-gray-600 mb-4">
                By Dr. James Wilson, et al.
              </p>
              <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="bg-accent p-6 rounded-lg">
              <span className="text-sm text-primary font-medium">REVIEW</span>
              <h3 className="text-xl font-semibold mt-2 mb-4">
                The Future of Sustainable Energy: Current Trends and Perspectives
              </h3>
              <p className="text-gray-600 mb-4">
                By Dr. Maria Rodriguez, et al.
              </p>
              <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
