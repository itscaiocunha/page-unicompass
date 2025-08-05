import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bpoImage from "@/assets/bpo-services.jpg";
import financialImage from "@/assets/financial-management.jpg";

const ContabilidadeDP = () => {
  const services = [
    {
      icon: "📋",
      title: "Contabilidade Geral",
      description: "Escrituração contábil completa e demonstrações financeiras."
    },
    {
      icon: "💰",
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento e benefícios."
    },
    {
      icon: "📊",
      title: "Relatórios Gerenciais",
      description: "Informações estratégicas para tomada de decisões."
    },
    {
      icon: "🏛️",
      title: "Obrigações Fiscais",
      description: "Cumprimento de todas as obrigações tributárias."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={bpoImage} 
            alt="Contabilidade e DP" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contabilidade e <span className="text-primary">Departamento Pessoal</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Cuidamos de toda a gestão contábil e de pessoal da sua empresa com 
            precisão e conformidade legal.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Nossos Serviços
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Soluções completas em contabilidade e gestão de pessoal para sua empresa.
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
            <div className="relative">
              <img 
                src={financialImage} 
                alt="Gestão Financeira" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Simplifique sua Gestão
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Deixe conosco toda a burocracia contábil e de pessoal enquanto você foca no crescimento do seu negócio.
          </p>
          <Button variant="secondary" size="lg">
            Falar com Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContabilidadeDP;