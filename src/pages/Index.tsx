import Navigation from '../components/Navigation';
import { ArrowRight, BookOpen, Users, Award, Globe2, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { editors } from '../components/Team';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/95 to-primary/80">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Advancing Scientific Discovery
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white/90">
                Helixus is a peer-reviewed journal publishing groundbreaking research across multiple disciplines.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/submit-manuscript" 
                  className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Submit Your Research
                  <ArrowRight className="ml-2" />
                </a>
                <a 
                  href="/journal-information" 
                  className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/66e72688-4d52-44b7-98c3-9166143e9ebd.png" 
                alt="Scientific Journal"
                className="rounded-lg shadow-xl"
              />
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
              <p className="text-4xl font-bold text-primary mb-2">4.832</p>
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
                <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Molecular and Cellular Biology</li>
                  <li>Biotechnology and Bioengineering</li>
                  <li>Environmental Sciences</li>
                  <li>Computational Biology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Board Section */}
      <div className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Editorial Board</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {editors.slice(0, 4).map((editor) => (
              <Card key={editor.id} className="overflow-hidden">
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
