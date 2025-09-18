import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SimsLogin from "./pages/sims/SimsLogin";
import SimsDashboard from "./pages/sims/SimsDashboard";
import SimsResults from "./pages/sims/SimsResults";
import SimsProfile from "./pages/sims/SimsProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SimsLogin />} />
          <Route path="/dashboard" element={<SimsDashboard />} />
          <Route path="/results" element={<SimsResults />} />
          <Route path="/profile" element={<SimsProfile />} />
          <Route path="/old-index" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
