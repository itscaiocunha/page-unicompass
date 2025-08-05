import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechCorp",
      image: "/lovable-uploads/3729814e-1de0-4ac9-92fe-abd5e00d409a.png",
      quote: "A ConsultPro transformou nossa gestão de RH. O processo de recrutamento ficou 300% mais eficiente e encontramos talentos excepcionais que impulsionaram nosso crescimento exponencial."
    },
    {
      name: "Ana Costa", 
      role: "Diretora de Operações",
      company: "InnovateB",
      image: "/lovable-uploads/42e99f14-c476-47f1-834e-5e1c034fe6e8.png",
      quote: "As soluções de BPO da ConsultPro nos permitiram focar no que fazemos de melhor. Reduziram nossos custos operacionais em 40% mantendo a qualidade dos serviços."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="text-primary text-lg font-medium">Testimonials</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              A História de Sucesso dos
              <span className="block">Nossos Clientes</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubra como transformamos negócios através de soluções estratégicas 
              em RH, BPO e ESG. Nossos clientes são a prova do nosso compromisso 
              com a excelência e resultados excepcionais.
            </p>

            {/* Company Logos or Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="text-2xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Crescimento</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Resposta</div>
              </div>
            </div>
          </div>

          {/* Right Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-0 shadow-card bg-card/50 backdrop-blur-sm group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <p className="text-muted-foreground leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20">
          <div className="relative h-64 bg-primary/10 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Cuidamos Sempre dos Nossos Clientes com Seriedade
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Nosso compromisso é com a excelência e resultados que transformam negócios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;