import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import esgImage from "@/assets/esg-services.jpg";
import sustainabilityImage from "@/assets/sustainability-meeting.jpg";
import { useEffect } from "react";

const ESGSST = () => {
  const services = [
    { icon: "🌱", title: "ESG Strategy", description: "Estratégia, metas e roadmap ESG conectados ao negócio." },
    { icon: "🛡️", title: "Segurança do Trabalho (SST)", description: "PGR/GRO, PCMSO, treinamentos NR e controle de indicadores." },
    { icon: "📋", title: "Compliance Ambiental", description: "Matriz de requisitos, licenças, controles e auditorias internas." },
    { icon: "🎯", title: "Auditoria & Indicadores", description: "KPI de clima, acidentes, resíduos/água/energia e plano de ação." },
  ];

  const pillars = [
    { letter: "E", title: "Environmental", subtitle: "Ambiental", description: "Gestão de impactos, uso de recursos, resíduos, água e energia." },
    { letter: "S", title: "Social", subtitle: "Social", description: "Saúde e segurança, diversidade, clima e relacionamento com comunidades." },
    { letter: "G", title: "Governance", subtitle: "Governança", description: "Ética, transparência, políticas e conformidade." },
  ];

  const deliverables = [
    "Matriz de materialidade e prioridades ESG",
    "Política ESG e Código de Conduta (versão inicial)",
    "PGR/GRO e PCMSO (em conjunto com médico do trabalho)",
    "Mapa de riscos, plano de treinamentos e controles NR",
    "Indicadores: acidentes, afastamentos, resíduos/água/energia, clima",
    "Relato/summary ESG e dashboard mensal de KPIs",
    "Checklist de eSocial (ex.: S-2240) e rotinas de atualização",
  ];

  const steps = [
    { step: "01", title: "Diagnóstico & Materialidade", desc: "Levantamento de dados, entrevistas e definição de temas materiais." },
    { step: "02", title: "Roadmap & Metas", desc: "Objetivos, KPIs e plano de 90 dias + horizonte anual." },
    { step: "03", title: "Implantação ESG/SST", desc: "Políticas, PGR/PCMSO, rotinas, treinamentos e controles." },
    { step: "04", title: "Monitoramento", desc: "Acompanhamento mensal de KPIs e conformidades (inclui eSocial)." },
    { step: "05", title: "Relato & Melhoria", desc: "Resumo ESG, lições aprendidas e novos incrementos." },
  ];

  const faqs = [
    { q: "Quanto tempo até ver resultados?", a: "Em 60–90 dias já é possível observar indicadores básicos e rotinas de SST estabilizadas; metas ambientais e de clima tendem a maturar ao longo de 6–12 meses." },
    { q: "Vocês cuidam de PGR/PCMSO e treinamentos NR?", a: "Sim. Estruturamos PGR/GRO, apoiamos PCMSO com médico do trabalho e implantamos o plano de treinamentos obrigatórios." },
    { q: "Conseguem integrar ESG com eSocial?", a: "Integramos as frentes — mapeamento de riscos e exposições alimenta rotinas e eventos do eSocial, como o S-2240." },
    { q: "Precisamos de certificações?", a: "Não necessariamente. Começamos com conformidade + KPIs. Se fizer sentido, avaliamos selos/auditorias mais adiante." },
  ];

  // SEO básico: JSON-LD do serviço
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ESG & SST",
      "description": "Estratégia ESG integrada a Segurança do Trabalho (PGR/PCMSO), com indicadores e conformidade contínua.",
      "provider": { "@type": "Organization", "name": "Unicompass" },
      "areaServed": "Interior de SP",
      "serviceType": "ESG e Segurança do Trabalho",
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
            alt="ESG/SST"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary">ESG</span> & SST
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Práticas sustentáveis e segurança do trabalho — com metas, rotinas e KPIs que cabem no seu dia a dia.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/contato">Solicitar proposta</a>
          </Button>
        </div>
      </section>

      {/* Pilares ESG */}
      <section className="py-20 bg-background" id="pilares">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Os Pilares ESG</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Construindo negócios responsáveis por meio de práticas ambientais, sociais e de governança.
              </p>
              <div className="space-y-6">
                {pillars.map((p) => (
                  <Card key={p.letter} className="p-4 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {p.letter}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {p.title} - {p.subtitle}
                          </h3>
                          <p className="text-sm text-muted-foreground">{p.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/time/foto-time-reuniao.JPG"
                alt="Sustentabilidade e gestão"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-dark" id="processo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Como funciona</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              De um diagnóstico simples a rotinas que garantem compliance e evolução contínua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((i) => (
              <div key={i.step} className="text-center">
                <div className="text-5xl font-bold text-primary mb-3">{i.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{i.title}</h3>
                <p className="text-white/70 text-sm">{i.desc}</p>
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

export default ESGSST;
