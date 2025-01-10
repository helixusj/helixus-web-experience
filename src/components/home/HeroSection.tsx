import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="relative bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A2472]">
              Advancing Life Science Breakthroughs
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Helixus is a peer-reviewed journal publishing impactful research across all disciplines in the Life Sciences, driving discovery and innovation.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/submit-manuscript" 
                className="inline-flex items-center bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Submit Your Research
                <ArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/journal-information" 
                className="inline-flex items-center border-2 border-[#FFB800] text-[#0A2472] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
              >
                <Play className="mr-2" size={20} />
                Learn More
              </Link>
            </div>
          </div>
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
                  {editors.slice(0, 4).map((editor, index) => (
                    <img 
                      key={index}
                      src={editor.image} 
                      alt={editor.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">Satisfied authors</p>
                <p className="font-semibold">10+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};