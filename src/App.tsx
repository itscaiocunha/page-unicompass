import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConsultoriaEmpresarial from "./pages/services/ConsultoriaEmpresarial";
import ContabilidadeDP from "./pages/services/ContabilidadeDP";
import DHODesenvolvimento from "./pages/services/DHODesenvolvimento";
import RecrutamentoSelecao from "./pages/services/RecrutamentoSelecao";
import Treinamentos from "./pages/services/Treinamentos";
import ESGSST from "./pages/services/ESGSST";
import PropostaReclamatoria from "./pages/services/PropostaReclamatoria";
import BlogPage from "./pages/BlogPage";
import SobreNos from "./pages/SobreNos";
import ContatoPage from "./pages/ContatoPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Pages */}
          <Route path="/servicos/consultoria-empresarial" element={<ConsultoriaEmpresarial />} />
          <Route path="/servicos/contabilidade-dp" element={<ContabilidadeDP />} />
          <Route path="/servicos/dho-desenvolvimento" element={<DHODesenvolvimento />} />
          <Route path="/servicos/recrutamento-selecao" element={<RecrutamentoSelecao />} />
          <Route path="/servicos/treinamentos" element={<Treinamentos />} />
          <Route path="/servicos/esg-sst" element={<ESGSST />} />
          <Route path="/servicos/proposta-reclamatoria" element={<PropostaReclamatoria />} />
          
          {/* General Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/contato" element={<ContatoPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
