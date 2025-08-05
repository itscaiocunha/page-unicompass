import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hrImage from "@/assets/hr-services.jpg";

const DHODesenvolvimento = () => {
  const services = [
    {
      icon: "👥",
      title: "Desenvolvimento Humano",
      description: "Programas de capacitação e desenvolvimento pessoal e profissional."
    },
    {
      icon: "🎯",
      title: "Gestão de Performance",
      description: "Avaliação e melhoria contínua do desempenho organizacional."
    },
    {
      icon: "📈",
      title: "Cultura Organizacional",
      description: "Construção e fortalecimento da cultura empresarial."
    },
    {
      icon: "⚖️",
      title: "Compliance Trabalhista",
      description: "Adequação às normas e legislações trabalhistas vigentes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={hrImage} 
            alt="DHO & Desenvolvimento" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            DHO & <span className="text-primary">Desenvolvimento</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Desenvolvemos pessoas e organizações através de soluções integradas 
            de gestão humana e desenvolvimento organizacional.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Conhecer Soluções
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Desenvolvimento Humano Organizacional
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Soluções completas para o desenvolvimento de pessoas e processos organizacionais.
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
                src={hrImage} 
                alt="Desenvolvimento Humano" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Invista no seu Capital Humano
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Pessoas são o maior ativo da sua empresa. Vamos desenvolver esse potencial juntos.
          </p>
          <Button variant="secondary" size="lg">
            Conversar com Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DHODesenvolvimento;