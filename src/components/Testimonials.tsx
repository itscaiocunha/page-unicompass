import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Eduarda Ribeiro",
      role: "CEO",
      company: "AgroAlfa (Piracicaba/SP)",
      image: "/lovable-uploads/3729814e-1de0-4ac9-92fe-abd5e00d409a.png",
      quote:
        "O CFO externo trouxe previsibilidade ao nosso caixa e clareza de decisão. Com cenários e KPIs, priorizamos investimentos com segurança.",
    },
    {
      name: "Marcos Lima",
      role: "Diretor de Operações",
      company: "MetalPrime (Americana/SP)",
      image: "/lovable-uploads/42e99f14-c476-47f1-834e-5e1c034fe6e8.png",
      quote:
        "A adequação fiscal e trabalhista, com foco no e-Social, reduziu retrabalhos e trouxe controle de prazos. A abordagem preventiva fez diferença.",
    },
    {
      name: "Patrícia Souza",
      role: "Gerente de Gente & Gestão",
      company: "VitalCare (Campinas/SP)",
      image: "/lovable-uploads/7b1b12d1-aaaa-4b21-9e77-123456789abc.png",
      quote:
        "Integrar SST e DHO elevou o engajamento e melhorou indicadores de bem-estar. Programa com metas claras e acompanhamento mensal.",
    },
  ];

  const highlights = [
    { icon: "⏱️", title: "Resposta ágil", desc: "Primeiro retorno em até 24h" },
    { icon: "🤝", title: "Parceria contínua", desc: "Acompanhamento mensal com KPIs" },
    { icon: "🔗", title: "Integração", desc: "Finanças • Fiscal • SST • DHO" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="text-primary text-lg font-medium">DEPOIMENTOS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Histórias de
              <span className="block">transformação empresarial</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Resultados em finanças, compliance fiscal/trabalhista e SST/DHO — com diagnóstico claro,
              indicadores acionáveis e acompanhamento próximo.
            </p>

            {/* Highlights (em vez de métricas exageradas) */}
            <div className="grid grid-cols-3 gap-6">
              {highlights.map((h) => (
                <div className="text-center" key={h.title}>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">{h.icon}</span>
                  </div>
                  <div className="text-sm font-semibold text-foreground">{h.title}</div>
                  <div className="text-xs text-muted-foreground">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Testimonials */}
          <div className="space-y-8">
            {testimonials.map((t, index) => (
              <Card
                key={`${t.name}-${index}`}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-0 shadow-card bg-card/50 backdrop-blur-sm group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <figure className="mb-4">
                        <blockquote className="text-muted-foreground leading-relaxed italic">
                          “{t.quote}”
                        </blockquote>
                      </figure>

                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{t.name}</h4>
                        <p className="text-primary font-medium">{t.role}</p>
                        <p className="text-muted-foreground text-sm">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
