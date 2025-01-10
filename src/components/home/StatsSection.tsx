import { BookOpen, Users, Award, Globe2 } from 'lucide-react';

export const StatsSection = () => {
  return (
    <div className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard
            icon={<BookOpen className="w-6 h-6 text-primary" />}
            value="TBA"
            label="Impact Factor"
          />
          <StatCard
            icon={<Users className="w-6 h-6 text-primary" />}
            value="1000+"
            label="Global Authors"
          />
          <StatCard
            icon={<Award className="w-6 h-6 text-primary" />}
            value="21"
            label="Days to Decision"
          />
          <StatCard
            icon={<Globe2 className="w-6 h-6 text-primary" />}
            value="100%"
            label="Open Access"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
      {icon}
    </div>
    <p className="text-4xl font-bold text-primary mb-2">{value}</p>
    <p className="text-gray-600">{label}</p>
  </div>
);