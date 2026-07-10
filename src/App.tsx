import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RedirectToHash = ({ target }: { target: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/" + target, { replace: true });
  }, [navigate, target]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<RedirectToHash target="#about" />} />
            <Route path="/skills" element={<RedirectToHash target="#skills" />} />
            <Route path="/projects" element={<RedirectToHash target="#projects" />} />
            <Route path="/achievements" element={<RedirectToHash target="#achievements" />} />
            <Route path="/ai-profile" element={<RedirectToHash target="#ai-profile" />} />
            <Route path="/contact" element={<RedirectToHash target="#contact" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
