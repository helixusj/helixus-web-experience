import Navigation from '../components/Navigation';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { JournalOverview } from '../components/home/JournalOverview';
import { EditorialBoard } from '../components/home/EditorialBoard';
import { LatestPublications } from '../components/home/LatestPublications';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <JournalOverview />
      <EditorialBoard />
      <LatestPublications />
    </div>
  );
};

export default Index;