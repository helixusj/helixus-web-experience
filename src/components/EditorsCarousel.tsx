import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const editors = [
  {
    name: "Dr. Sarah Johnson",
    role: "Editor-in-Chief",
    institution: "Harvard University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Prof. Michael Chen",
    role: "Associate Editor",
    institution: "Stanford University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Dr. Emily Williams",
    role: "Associate Editor",
    institution: "MIT",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  }
];

const EditorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === editors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? editors.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Editorial Board</h2>
      
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {editors.map((editor, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img 
                  src={editor.image} 
                  alt={editor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{editor.name}</h3>
                <p className="text-primary font-medium">{editor.role}</p>
                <p className="text-gray-600">{editor.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default EditorsCarousel;