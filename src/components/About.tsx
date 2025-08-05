import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">Sobre Nós</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transformando Negócios com
            <span className="block text-primary">Excelência e Inovação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em transformação organizacional com mais de 15 anos de experiência 
            em RH, BPO e ESG, impulsionando o crescimento sustentável das empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nossa Jornada de Sucesso
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Desde 2008, temos sido pioneiros em soluções empresariais que combinam tecnologia, 
              sustentabilidade e capital humano para criar organizações mais eficientes e responsáveis.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "15+ anos de experiência no mercado",
                "500+ projetos concluídos com sucesso",
                "98% de taxa de satisfação dos clientes",
                "Certificações internacionais em ESG"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" className="bg-primary hover:bg-primary-dark">
              Conheça Nossa História
            </Button>
          </div>

          {/* Right Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full h-48 bg-card rounded-xl overflow-hidden shadow-elegant">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop"
                    alt="Executivos em sala de reunião" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-32 bg-card rounded-xl overflow-hidden shadow-elegant">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=200&fit=crop"
                    alt="Ambiente corporativo moderno" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8">
                <div className="w-full h-56 bg-card rounded-xl overflow-hidden shadow-elegant">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=350&fit=crop"
                    alt="Board meeting corporativo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 left-6 right-6">
              <Card className="bg-white/95 backdrop-blur-sm shadow-elegant">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">2.560+</div>
                      <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Anos de Mercado</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mission & Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-elegant transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar soluções inovadoras que impulsionem o crescimento sustentável 
                das empresas através de práticas responsáveis e eficientes.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">👁️</span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Nossa Visão</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional em consultoria empresarial, reconhecida pela 
                excelência e inovação em soluções de RH, BPO e ESG.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">💎</span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Nossos Valores</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm">●</span>
                  Transparência e ética
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm">●</span>
                  Inovação constante
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm">●</span>
                  Sustentabilidade
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm">●</span>
                  Excelência no atendimento
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;