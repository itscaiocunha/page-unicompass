import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import businessConsultingImage from "@/assets/business-consulting.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: "🔍",
      title: "Reconhecimento",
      description: "Sua empresa ganha visibilidade no mercado através de nossas soluções estratégicas e networking qualificado.",
      linkText: "Learn More"
    },
    {
      icon: "🏢", 
      title: "Grandes Empresas",
      description: "Conectamos você com as maiores empresas do mercado, ampliando suas oportunidades de crescimento e parcerias.",
      linkText: "Learn More"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">The Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ampla Exposição para
            <span className="block">Empresas Parceiras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma plataforma completa que conecta empresas com oportunidades 
            estratégicas e soluções personalizadas para acelerar o crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Job Solution Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="w-full h-96 bg-card rounded-xl overflow-hidden shadow-elegant">
                <img 
                  src={businessConsultingImage}
                  alt="Business consulting solutions" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 border-2 border-white rounded-sm" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Soluções Empresariais
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={benefit.title}
                  className="p-6 hover:shadow-elegant transition-all duration-300 border border-border/50 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">{benefit.icon}</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary hover:text-primary-dark font-medium"
                    >
                      → {benefit.linkText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-scale-in">
              <div className="text-5xl font-bold text-primary mb-2">2.560+</div>
              <div className="text-muted-foreground font-medium">Empresas Conectadas</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground font-medium">Taxa de Sucesso</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Projetos Concluídos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;