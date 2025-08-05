import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import hrImage from "@/assets/hr-services.jpg";
import bpoImage from "@/assets/bpo-services.jpg";
import esgImage from "@/assets/esg-services.jpg";

const Services = () => {
  const services = [
    {
      title: "Recursos Humanos",
      description: "Gestão completa de talentos, desde recrutamento e seleção até desenvolvimento organizacional e gestão de performance.",
      image: hrImage,
      features: [
        "Recrutamento & Seleção",
        "Gestão de Performance",
        "Desenvolvimento de Talentos",
        "Consultoria em RH"
      ]
    },
    {
      title: "BPO - Business Process Outsourcing",
      description: "Terceirização inteligente de processos de negócio para otimizar operações e reduzir custos operacionais.",
      image: bpoImage,
      features: [
        "Processos Administrativos",
        "Gestão Financeira",
        "Atendimento ao Cliente",
        "Automação de Processos"
      ]
    },
    {
      title: "ESG - Governança Sustentável",
      description: "Implementação de práticas ESG para empresas comprometidas com sustentabilidade e responsabilidade social.",
      image: esgImage,
      features: [
        "Relatórios de Sustentabilidade",
        "Compliance ESG",
        "Programas Sociais",
        "Gestão de Riscos"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções especializadas que transformam a gestão empresarial e impulsionam o crescimento sustentável dos nossos clientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-500 border-0 shadow-card bg-card/50 backdrop-blur-sm hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções podem impulsionar o crescimento da sua empresa.
            </p>
            <Button variant="hero" size="lg">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;