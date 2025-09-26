import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hrImage from "@/assets/hr-services.jpg";
import { useEffect } from "react";

const DHODesenvolvimento = () => {
  const services = [
    { icon: "🧭", title: "Trilhas de Liderança", description: "Formação de líderes (nível básico ao avançado), com módulos práticos e mentoria." },
    { icon: "📌", title: "Gestão de Performance", description: "OKRs/metas, 1:1, 9-Box e calibragem — alinhamento entre estratégia e execução." },
    { icon: "🧠", title: "PDI & Feedback Contínuo", description: "Planos individuais de desenvolvimento, feedback 360° e rituais de evolução." },
    { icon: "🏛️", title: "Cultura & Valores", description: "Definição de princípios, códigos de conduta e ritos que sustentam a cultura." },
    { icon: "📚", title: "Mapeamento de Competências", description: "Modelo de competências por função e avaliação peródica estruturada." },
    { icon: "⚖️", title: "Compliance Trabalhista", description: "Políticas, treinamentos mandatórios e prevenção de passivos junto ao RH." },
  ];

  const steps = [
    { step: "01", title: "Diagnóstico", desc: "Entrevistas, dados de pessoas, clima e mapeamento de competências." },
    { step: "02", title: "Desenho", desc: "Trilhas, calendário e ritos de gestão (OKRs/1:1/feedback/avaliações)." },
    { step: "03", title: "Implementação", desc: "Workshops, mentorias, playbooks e materiais de apoio." },
    { step: "04", title: "Acompanhamento", desc: "Painel de KPIs, reuniões mensais e planos de ação por time." },
    { step: "05", title: "Evolução", desc: "Revisões trimestrais, novas trilhas e transferência da metodologia." },
  ];

  const faqs = [
    { q: "Em quanto tempo vemos mudanças?", a: "Em 30–60 dias já é possível observar melhor alinhamento e ritos funcionando; engajamento e performance consolidam entre 90–120 dias." },
    { q: "É só treinamento ou também acompanhamento?", a: "Ambos. Desenhamos e implementamos trilhas + ritos e acompanhamos os indicadores com você." },
    { q: "Podemos começar por um piloto?", a: "Sim. Começamos por um time/unidade, medimos impacto e escalamos com ajustes." },
    { q: "Vocês integram com RH/DP e SST?", a: "Integramos. O plano de DHO conversa com rotinas de RH/DP e com indicadores de SST." },
  ];

  // SEO básico: JSON-LD do serviço
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "DHO & Desenvolvimento Organizacional",
      "description": "Trilhas de liderança, gestão de performance, clima & engajamento e academia interna com KPIs e ritos.",
      "provider": { "@type": "Organization", "name": "Unicompass" },
      "areaServed": "Interior de SP",
      "serviceType": "Desenvolvimento Humano e Organizacional",
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
            alt="DHO & Desenvolvimento"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            DHO & <span className="text-primary">Desenvolvimento</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Desenvolvemos pessoas e organizações com trilhas, ritos e indicadores que conectam estratégia e execução.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/contato">Conhecer soluções</a>
          </Button>
        </div>
      </section>

      {/* Soluções — sem imagem */}
      <section className="py-20 bg-background" id="servicos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">Soluções de DHO</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Integramos liderança, performance, clima e cultura — com método, cadência e KPIs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="p-4 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-4">
                  <div className="text-3xl mb-3" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-dark" id="processo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/time/foto-time-reuniao.JPG"
                alt="Processo de DHO"
                className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Como funciona</h2>
              <p className="text-xl text-white/80 mb-8">
                Método simples, foco em ritos e indicadores — para mudar comportamento e resultado.
              </p>
              <div className="space-y-6">
                {steps.map((i) => (
                  <div key={i.step} className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-primary">{i.step}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{i.title}</h3>
                      <p className="text-white/70">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="secondary" asChild>
                  <a href="/cases">Ver casos relacionados</a>
                </Button>
              </div>
            </div>
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

export default DHODesenvolvimento;
