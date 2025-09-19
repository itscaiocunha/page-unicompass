import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    "Integração de áreas críticas: finanças, compliance, SST e pessoas",
    "Foco preventivo: reduzir riscos antes que virem custo",
    "Tomada de decisão orientada por dados e tecnologia",
    "Proximidade regional com padrão de grandes consultorias",
  ];

  return (
    <section className="py-20 bg-background" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">SOBRE NÓS</span>
          </div>
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transformando complexidade em
            <span className="block text-primary">vantagem competitiva sustentável</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unimos finanças, compliance, SST e gestão de pessoas em soluções integradas que
            simplificam a gestão empresarial, previnem riscos e potencializam resultados para
            PMEs do interior paulista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">Nossa Jornada</h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Em pouco tempo de mercado, crescemos de forma orgânica com uma proposta clara:
              oferecer consultoria que antecipa problemas e acelera o crescimento, combinando
              metodologia, dados e acompanhamento próximo.
            </p>

            <div className="space-y-4 mb-8" role="list" aria-label="Diferenciais">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start" role="listitem">
                  <div
                    className="mt-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a href="/sobre-nos">
              <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                Conheça nossa história
              </Button>
            </a>
          </div>

          {/* Right Single Image */}
          <div className="relative">
            <div className="w-full h-96 bg-card rounded-xl overflow-hidden shadow-elegant">
              <img
                src="/images/time/foto-reuniao.JPG"
                alt="Equipe executiva colaborando em reunião estratégica"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 left-6 right-6">
              <Card className="bg-white/95 backdrop-blur-sm shadow-elegant">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Crescimento orgânico</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">Cidades atendidas e em expansão</div>
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
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed">
                Transformar a complexidade em simplicidade estratégica, ajudando empresas a crescer
                com segurança, previsibilidade e eficiência.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <span className="text-2xl">👁️</span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Nossa Visão</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed">
                Ser referência no interior paulista em consultoria integrada que combina tecnologia,
                pessoas e compliance para gerar crescimento sustentável.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <span className="text-2xl">💎</span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Nossos Valores</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm" aria-hidden="true">●</span>
                  Transparência e ética
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm" aria-hidden="true">●</span>
                  Prevenção e responsabilidade
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm" aria-hidden="true">●</span>
                  Inovação orientada por dados
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm" aria-hidden="true">●</span>
                  Proximidade e parceria com o cliente
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2 text-sm" aria-hidden="true">●</span>
                  Impacto sustentável no longo prazo
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
