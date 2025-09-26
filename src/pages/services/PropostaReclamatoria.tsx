import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import womenTechImage from "@/assets/women-tech-careers.jpg";
import legalImage from "@/assets/legal-consultation.jpg";
import { useEffect } from "react";

const PropostaReclamatoria = () => {
  const services = [
    { icon: "⚖️", title: "Análise Jurídica", description: "Avaliação de risco, base legal e cenários prováveis (acordo x contencioso)." },
    { icon: "📋", title: "Elaboração de Proposta", description: "Estruturação de proposta com condicionantes, prazos e etapas de pagamento." },
    { icon: "🤝", title: "Negociação", description: "Condução da mediação com argumentos técnicos e registro de tratativas." },
    { icon: "📊", title: "Gestão de Riscos", description: "Matriz de risco, provisionamento e checklist de prevenções futuras." }
  ];

  const benefits = [
    "Redução de custos processuais e incertezas",
    "Celeridade na resolução do conflito",
    "Preservação de imagem e relacionamento",
    "Previsibilidade financeira",
    "Aprendizados para evitar recorrência"
  ];

  const deliverables = [
    "Parecer de risco e cenários (sumário executivo)",
    "Minuta de proposta com condições, prazos e garantias",
    "Relatório de negociação e histórico de contrapropostas",
    "Acordo formal (quando aplicável) e checklist de cumprimento",
    "Plano preventivo pós-acordo (políticas, treinamentos, controles)"
  ];

  const steps = [
    { step: "01", title: "Intake & Documentos", desc: "Coleta de dados, histórico e pontos críticos do caso." },
    { step: "02", title: "Análise de Risco", desc: "Base legal, precedentes e cálculo estimado de exposição." },
    { step: "03", title: "Estratégia & Proposta", desc: "Definição de faixa de negociação e condicionantes." },
    { step: "04", title: "Negociação", desc: "Reuniões/atos, contrapropostas e alinhamentos finais." },
    { step: "05", title: "Formalização", desc: "Minuta final, homologação e plano de cumprimento." },
    { step: "06", title: "Pós-acordo", desc: "Acompanhamento de prazos e plano de prevenção de novos riscos." }
  ];

  const faqs = [
    { q: "Em quanto tempo um acordo pode ser fechado?", a: "Casos simples podem ser resolvidos em poucas semanas; situações complexas, com múltiplos pedidos, tendem a demandar mais rodadas. O prazo depende de disponibilidade das partes e agenda do juízo (quando houver homologação)." },
    { q: "Há garantia de acordo?", a: "Não. Acordo depende de vontade das partes. O que garantimos é método, análise clara de riscos e condução técnica das negociações." },
    { q: "Como é tratado o sigilo?", a: "Tratativas e documentos são conduzidos com confidencialidade; quando pertinente, incluímos cláusulas específicas no instrumento de acordo." },
    { q: "Vocês também apoiam a prevenção?", a: "Sim. Após o acordo, entregamos um plano com medidas de prevenção (políticas, treinamentos, controles) para reduzir recorrência." }
  ];

  // SEO básico: JSON-LD do serviço
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Proposta de Reclamatória Trabalhista",
      "description": "Análise de risco, elaboração de proposta, negociação e plano preventivo para resolução estratégica de conflitos trabalhistas.",
      "provider": { "@type": "Organization", "name": "Unicompass" },
      "areaServed": "Interior de SP",
      "serviceType": "Acordo em Reclamações Trabalhistas",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(jsonLd);
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative py-48 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/time/foto-time-reuniao.JPG"
            alt="Proposta Reclamatória"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Proposta de <span className="text-primary">Reclamatória Trabalhista</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Resolução estratégica de conflitos com análise clara de risco, proposta bem estruturada e plano preventivo pós-acordo.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/contato">Solicitar análise</a>
          </Button>
        </div>
      </section>

      {/* Como podemos ajudar */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/time/foto-time-reuniao.JPG"
                alt="Consultoria Jurídica"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Como podemos ajudar</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Especialistas em acordo trabalhista com método, transparência e foco na prevenção de novos riscos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card key={service.title} className="p-4 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-4">
                      <div className="text-3xl mb-3" aria-hidden="true">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Vantagens do acordo</h2>
              <p className="text-xl text-white/80 mb-8">
                Optar por um acordo estratégico traz benefícios significativos para sua empresa:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white/90">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">85%</div>
                <div className="text-white/70">Casos resolvidos por acordo</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">60%</div>
                <div className="text-white/70">Redução média de custos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">30</div>
                <div className="text-white/70">Dias para resolução</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-white/70">Confidencialidade</div>
              </div>
              <p className="col-span-full text-xs text-white/60 mt-2">
                *Métricas ilustrativas. Resultados variam conforme o caso, a jurisdição e a disponibilidade das partes.*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-background" id="processo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Como funciona</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Do intake à prevenção: método claro, documentos organizados e acompanhamentos até a quitação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Perguntas frequentes</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border border-border bg-card/50 p-4">
                <summary className="cursor-pointer text-lg font-semibold text-foreground">{f.q}</summary>
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

export default PropostaReclamatoria;
