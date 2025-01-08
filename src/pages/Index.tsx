import Navigation from '@/components/Navigation';
import { ArrowRight, BookOpen, Users, Award, Globe2, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { editors } from '../components/Team';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Gradient background for the text section */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        
        {/* White background for the image section */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white hidden md:block"></div>
        
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/30 md:via-black/30 md:to-transparent"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advancing Scientific Knowledge Through Rigorous Research
              </h1>
              <p className="text-lg mb-8">
                Join us in our mission to publish groundbreaking research in biotechnology and life sciences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#submit-manuscript"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Submit Manuscript
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-full w-full">
              <img
                src="/lovable-uploads/66e72688-4d52-44b7-98c3-9166143e9ebd.png"
                alt="DNA Research"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Journal?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open Access</h3>
              <p className="text-gray-600">Free access to all published research for maximum impact and visibility.</p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Review</h3>
              <p className="text-gray-600">Rigorous peer review process by leading experts in the field.</p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">High Standards</h3>
              <p className="text-gray-600">Commitment to publishing only the highest quality research.</p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Globe2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">International readership and diverse author base.</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Latest Publications Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Publications</h2>
            <a href="/publications" className="text-primary hover:text-primary/80 inline-flex items-center">
              View All
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editors.slice(0, 3).map((editor) => (
              <Card key={editor.id} className="p-6 hover:shadow-lg transition-shadow">
                <img
                  src={editor.image}
                  alt={editor.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{editor.name}</h3>
                <p className="text-gray-600 mb-4">{editor.expertise}</p>
                <a
                  href={`/editors/${editor.id}`}
                  className="text-primary hover:text-primary/80 inline-flex items-center"
                >
                  Read More
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;