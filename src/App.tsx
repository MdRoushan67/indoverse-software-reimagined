import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";
import ScrollProgress from "@/components/ScrollProgress";
import AIChatbot from "@/components/AIChatbot";
import BrandIntroOverlay from "@/components/BrandIntroOverlay";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen">
            {/* Brand Intro Overlay - plays once per page load on tablet/desktop */}
            <BrandIntroOverlay 
              onAnimationStart={() => setShowLogoAnimation(true)}
              onComplete={() => setIntroComplete(true)} 
            />

            {/* Premium Background effects */}
            <AuroraBackground />
            <ScrollProgress />
            
            {/* Navigation with animated logo reveal */}
            <Navbar showLogoAnimation={showLogoAnimation} />
            
            {/* Main content */}
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Index introComplete={introComplete} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            
            {/* Footer */}
            <Footer />

            {/* AI Chatbot */}
            <AIChatbot />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
