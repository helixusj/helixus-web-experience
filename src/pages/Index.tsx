import Navigation from '../components/Navigation';
import EditorsCarousel from '../components/EditorsCarousel';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advancing Scientific Discovery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Helixus is a peer-reviewed journal publishing groundbreaking research across multiple disciplines.
          </p>
          <a 
            href="/submit-manuscript" 
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Your Research
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* Journal Info Preview */}
      <div className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Impact Factor</h3>
              <p className="text-4xl font-bold text-primary mb-2">4.832</p>
              <p className="text-gray-600">2023 Journal Citation Reports</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Time to First Decision</h3>
              <p className="text-4xl font-bold text-primary mb-2">21 Days</p>
              <p className="text-gray-600">Average review time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Open Access</h3>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-gray-600">Freely available research</p>
            </div>
          </div>
        </div>
      </div>

      {/* Editors Carousel */}
      <EditorsCarousel />

      {/* Latest Publications Preview */}
      <div className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Publications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="text-sm text-primary font-medium">RESEARCH ARTICLE</span>
              <h3 className="text-xl font-semibold mt-2 mb-4">
                Novel Approaches in Quantum Computing: A Comprehensive Review
              </h3>
              <p className="text-gray-600 mb-4">
                By Dr. James Wilson, et al.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Read More →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="text-sm text-primary font-medium">REVIEW</span>
              <h3 className="text-xl font-semibold mt-2 mb-4">
                The Future of Sustainable Energy: Current Trends and Perspectives
              </h3>
              <p className="text-gray-600 mb-4">
                By Dr. Maria Rodriguez, et al.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;