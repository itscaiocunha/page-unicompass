import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import processImage from "@/assets/process-optimization.jpg";

const ConsultoriaEmpresarial = () => {
  const features = [
    {
      icon: "🧭",
      title: "Diagnóstico 360º",
      description:
        "Levantamento de dados financeiros, fiscal/trabalhista, SST e pessoas — mapeando riscos e oportunidades."
    },
    {
      icon: "🎯",
      title: "Estratégia Prioritária",
      description:
        "Roteiro de 90 dias com metas, responsáveis e prazos para entregar resultado com previsibilidade."
    },
    {
      icon: "⚙️",
      title: "Execução Assistida",
      description:
        "Rotinas, ritos e cadência operacional para garantir a virada de plano em prática, com suporte próximo."
    },
    {
      icon: "📊",
      title: "KPIs & Governança",
      description:
        "Indicadores claros, rituais de acompanhamento e ajustes de rota — gestão por dados, não por achismo."
    }
  ];

  const steps = [
    { step: "01", title: "Diagnóstico", desc: "Entrevistas, dados e análise de contexto (financeiro, fiscal, SST e pessoas)." },
    { step: "02", title: "Estratégia", desc: "Definição de alvos, backlog priorizado e plano tático de 90 dias." },
    { step: "03", title: "Implementação", desc: "Execução assistida, rotinas, treinamentos e transferência de método." },
    { step: "04", title: "Acompanhamento", desc: "Painel de KPIs, ritos quinzenais/mensais e melhorias contínuas." }
  ];

  const faqs = [
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Em média, de 30 a 90 dias para impactos operacionais; resultados financeiros mais estruturais aparecem entre 60 e 120 dias, conforme maturidade."
    },
    {
      q: "Vocês implementam ou apenas recomendam?",
      a: "Implementamos junto com o time — estruturamos rotinas, treinamos responsáveis e acompanhamos os indicadores até a autonomia."
    },
    {
      q: "É possível começar por uma área específica?",
      a: "Sim. Podemos iniciar por Financeiro/BPO, Fiscal/Trabalhista, SST ou Pessoas, mantendo a visão integrada para evitar retrabalho."
    },
    {
      q: "Como funciona o acompanhamento?",
      a: "Definimos KPIs, instalamos ritos (semanal/quinzenal/mensal) e usamos um painel simples para monitorar avanço e ajustar a rota."
    }
  ];

  // SEO básico: JSON-LD de Service (sem depender de bibliotecas)
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Consultoria Empresarial",
      "description": "Diagnóstico 360º, estratégia priorizada, execução assistida e KPIs para crescimento sustentável.",
      "provider": {
        "@type": "Organization",
        "name": "Unicompass"
      },
      "areaServed": "Interior de SP",
      "serviceType": "Consultoria de Gestão",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-48 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/time/foto-time-reuniao.JPG"
            alt="Consultoria Empresarial"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-dark/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Consultoria <span className="text-primary">Empresarial</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Transformamos complexidade em simplicidade estratégica — do diagnóstico à execução,
            com indicadores claros e acompanhamento próximo.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/contato">Solicitar consultoria</a>
          </Button>
        </div>
      </section>

      {/* Features / Value Props */}
      <section className="py-20 bg-background" id="servicos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Nossos serviços</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Atuação integrada em finanças/BPO, fiscal & trabalhista, SST e gestão de pessoas —
                com método, ritos e KPIs para garantir resultado.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <Card key={feature.title} className="p-4 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-4">
                      <div className="text-3xl mb-3" aria-hidden="true">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/time/foto-consultoria.JPG"
                alt="Planejamento Estratégico"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark" id="processo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={processImage as unknown as string}
                alt="Processo de Implementação"
                className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Nosso processo</h2>
              <p className="text-xl text-white/80 mb-8">Método simples, cadência clara e foco em resultado.</p>

              <div className="space-y-6">
                {steps.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-primary">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ simples (nativo) */}
      <section className="py-20 bg-background" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Perguntas frequentes</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border border-border bg-card/50 p-4">
                <summary className="cursor-pointer text-lg font-semibold text-foreground">
                  {f.q}
                </summary>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaEmpresarial;
