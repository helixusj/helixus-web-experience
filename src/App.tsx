import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

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
          <Route path="/journal-information" element={<PlaceholderPage title="Journal Information" />} />
          <Route path="/instructions-to-authors" element={<PlaceholderPage title="Instructions to Authors" />} />
          <Route path="/current-issue" element={<PlaceholderPage title="Current Issue" />} />
          <Route path="/editors" element={<PlaceholderPage title="Editors" />} />
          <Route path="/submit-manuscript" element={<PlaceholderPage title="Submit Manuscript" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;