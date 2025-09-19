import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
  {
    icon: "🛡️", 
    title: "Prevenção de Riscos",
    description: "Atuamos de forma preventiva em finanças, compliance, SST e pessoas, reduzindo custos e passivos trabalhistas.",
  },
  {
    icon: "📊", 
    title: "Tecnologia Inteligente",
    description: "Aplicamos business intelligence e indicadores estratégicos que transformam dados em decisões assertivas.",
  }
];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">BENEFÍCIOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções integradas para
            <span className="block">empresas parceiras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unimos consultoria e treinamentos em um modelo exclusivo, com estratégias personalizadas que previnem riscos, otimizam processos e impulsionam o crescimento sustentável do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Job Solution Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="w-full h-96 bg-card rounded-xl overflow-hidden shadow-elegant">
                <img 
                  src="/images/time/foto-ambiente.jpg"
                  alt="Business consulting solutions" 
                  className="w-full h-full object-cover"
                />
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
              <div className="text-5xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground font-medium">Margem em consultoria financeira</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-primary mb-2">+200%</div>
              <div className="text-muted-foreground font-medium">Crescimento em compliance fiscal</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground font-medium">Cidades com atuação estratégica</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;