import Navigation from '../components/Navigation';
import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, FileText } from 'lucide-react';

const CallForPapers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Call for Papers</h1>
            <p className="text-xl text-gray-600">Submit your research to Helixus Journal</p>
          </div>

          <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Special Issue</h3>
                <p className="text-gray-600">Emerging Trends in Life Sciences</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Submission Deadline</h3>
                <p className="text-gray-600">December 31, 2024</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Publication Date</h3>
                <p className="text-gray-600">June 2025</p>
              </div>
            </div>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Topics of Interest</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                  <h3 className="font-semibold mb-3">Molecular Biology</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Gene regulation and expression</li>
                    <li>Cellular signaling pathways</li>
                    <li>Molecular mechanisms of disease</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                  <h3 className="font-semibold mb-3">Biotechnology</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Synthetic biology</li>
                    <li>Bioprocess engineering</li>
                    <li>Bioinformatics</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Submission Guidelines</h2>
              <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Format:</span>
                    Original research articles, reviews, and perspectives
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Length:</span>
                    5,000-8,000 words for research articles
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Language:</span>
                    English (UK or US)
                  </li>
                </ul>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;