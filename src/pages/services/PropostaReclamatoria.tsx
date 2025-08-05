import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import womenTechImage from "@/assets/women-tech-careers.jpg";
import legalImage from "@/assets/legal-consultation.jpg";

const PropostaReclamatoria = () => {
  const services = [
    {
      icon: "⚖️",
      title: "Análise Jurídica",
      description: "Avaliação detalhada de riscos e viabilidade da reclamatória trabalhista."
    },
    {
      icon: "📋",
      title: "Elaboração de Proposta",
      description: "Estruturação de propostas de acordo estratégico personalizadas."
    },
    {
      icon: "🤝",
      title: "Negociação",
      description: "Mediação e negociação para alcançar o melhor acordo para ambas as partes."
    },
    {
      icon: "📊",
      title: "Gestão de Riscos",
      description: "Identificação e mitigação de riscos trabalhistas futuros."
    }
  ];

  const benefits = [
    "Redução de custos processuais",
    "Celeridade na resolução",
    "Preservação da imagem empresarial",
    "Previsibilidade financeira",
    "Relacionamento positivo com ex-funcionários"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={womenTechImage} 
            alt="Proposta Reclamatória" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Proposta de <span className="text-primary">Reclamatória Trabalhista</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Soluções estratégicas para resolução de conflitos trabalhistas através 
            de acordos eficientes e justos para todas as partes envolvidas.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Solicitar Análise
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={legalImage} 
                alt="Consultoria Jurídica" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Como Podemos Ajudar
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Especialistas em resolução eficiente de conflitos trabalhistas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card key={service.title} className="p-4 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-4">
                      <div className="text-3xl mb-3">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Vantagens do Acordo
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Optar por um acordo estratégico traz benefícios significativos para sua empresa:
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white/90">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">85%</div>
                <div className="text-white/70">Casos Resolvidos por Acordo</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">60%</div>
                <div className="text-white/70">Redução de Custos Médios</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">30</div>
                <div className="text-white/70">Dias para Resolução</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-white/70">Confidencialidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Resolva com Estratégia
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nossa expertise em direito do trabalho garante soluções eficientes e econômicas para sua empresa.
          </p>
          <Button variant="secondary" size="lg">
            Agendar Consultoria
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropostaReclamatoria;