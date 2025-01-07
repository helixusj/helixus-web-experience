import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import JournalInformation from "./pages/JournalInformation";
import Team from "./components/Team";
import EditorDetails from "./pages/EditorDetails";
import InstructionsToAuthors from "./pages/InstructionsToAuthors";
import Contact from "./pages/Contact";

// Import placeholder pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen">
    <Navigation />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p>Content coming soon...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/journal-information" element={<JournalInformation />} />
          <Route path="/instructions-to-authors" element={<InstructionsToAuthors />} />
          <Route path="/current-issue" element={<PlaceholderPage title="Current Issue" />} />
          <Route path="/editors" element={<Team />} />
          <Route path="/editors/:id" element={<EditorDetails />} />
          <Route path="/submit-manuscript" element={<PlaceholderPage title="Submit Manuscript" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;