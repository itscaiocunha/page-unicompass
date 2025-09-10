import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Corrigido para react-router-dom

// Conteúdo da página
const heroContent = {
  pretitle: "Soluções Estratégicas",
  title: "Transforme sua empresa com",
  highlightedTitle: "soluções estratégicas",
  subtitle: "Potencialize seu negócio com soluções integradas em Finanças, Compliance, RH e SST, unindo consultoria estratégica e treinamentos para resultados sustentáveis.",
  primaryCta: "Nossos Serviços",
  secondaryCta: "Fale Conosco",
  backgroundImage: "/images/time/foto-escada-time.JPG",
  backgroundImageAlt: "A equipe da nossa empresa posando para uma foto na escadaria do escritório.",
};

const Hero = () => {
  const navigate = useNavigate();
  
  const handleContato = () => {
    navigate("/contato");
  };

  const handleSobre = () => {
    navigate("/sobre-nos");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark text-dark-foreground">
      {/* Imagem de Fundo Otimizada */}
      <img
        src="/images/time/foto-escada-time.JPG"
        alt={heroContent.backgroundImageAlt}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/10 to-transparent" />

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-4">
            <span className="text-primary text-lg font-semibold tracking-wider uppercase">
              {heroContent.pretitle}
            </span>
          </div>
          
          {/* Título com fonte responsiva e Espaçamento ajustado */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {heroContent.title}
            <span className="block text-primary mt-2">
              {heroContent.highlightedTitle}
            </span>
          </h1>
          
          {/* Espaçamento do parágrafo ajustado */}
          <p className="text-lg md:text-xl text-dark-foreground/80 mb-8 sm:mb-10 max-w-3xl mx-auto">
            {heroContent.subtitle}
          </p>
          
          {/* CTAs duplos para maior engajamento */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botão com fonte responsiva */}
            <Button size="xl" className="font-bold text-lg sm:text-[20px] hover:bg-white hover:text-primary" onClick={handleSobre}>
              {heroContent.primaryCta}
            </Button>
            {/* Botão com fonte responsiva */}
            <Button variant="outline" size="xl" className="font-bold text-primary text-lg sm:text-[20px]" onClick={handleContato}>
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;