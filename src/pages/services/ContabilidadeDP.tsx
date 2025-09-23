import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const ContabilidadeDP = () => {
  const services = [
    {
      icon: "🧾",
      title: "Folha & Encargos",
      description:
        "Processamento mensal de folha, pró-labore, férias, 13º, adiantamentos, eventos e conferência de encargos (INSS, FGTS, IRRF).",
    },
    {
      icon: "📥",
      title: "Admissões & Rescisões",
      description:
        "Onboarding completo, contratos, benefícios, cálculo rescisório, homologação e comunicação de eventos obrigatórios.",
    },
    {
      icon: "🧩",
      title: "eSocial & Obrigações",
      description:
        "Envio de eventos periódicos e não periódicos, EFD-Reinf, DCTFWeb e cumprimento dos prazos legais.",
    },
    {
      icon: "📊",
      title: "Relatórios Gerenciais",
      description:
        "Custo de pessoal por centro de custo, provisões, comparativos e indicadores para decisão.",
    },
    {
      icon: "🎯",
      title: "Rotinas & Compliance",
      description:
        "Calendário de fechamentos, conferências, checklists e trilhas para reduzir riscos trabalhistas.",
    },
    {
      icon: "⏱️",
      title: "Atendimento & SLA",
      description:
        "Canal direto para solicitações do time, com prazos definidos (SLA) e acompanhamento.",
    },
  ];

  const steps = [
    { step: "01", title: "Onboarding & Mapeamento", desc: "Coleta de dados, conferência de cadastros, benefícios e políticas internas." },
    { step: "02", title: "Implantação", desc: "Setup de rotinas, conferência de bases, testes de folha e eventos obrigatórios." },
    { step: "03", title: "Rotina Mensal", desc: "Processamento de folha, encargos, admissões/rescisões, férias e ponto." },
    { step: "04", title: "Fechamento & KPIs", desc: "Envio de obrigações (eSocial/Reinf/DCTFWeb) e relatórios gerenciais." },
    { step: "05", title: "Acompanhamento", desc: "Ritos mensais, revisão de controles e melhoria contínua." },
  ];

  const faqs = [
    {
      q: "Em quanto tempo vocês implantam a operação?",
      a: "Em geral, entre 2 e 4 semanas, variando com o volume de colaboradores, benefícios e histórico de dados.",
    },
    {
      q: "Vocês atendem apenas folha ou também contabilidade?",
      a: "Atendemos ambos. Podemos atuar só em DP/folha ou integrar com a contabilidade para gerar visão completa.",
    },
    {
      q: "Como é feito o envio de documentos e a aprovação da folha?",
      a: "Centralizamos em um fluxo simples: recebimento de eventos, prévia de folha, aprovação e fechamento com guias.",
    },
    {
      q: "Conseguem segmentar relatórios por centro de custo?",
      a: "Sim. Entregamos relatórios por centro de custo e comparativos mensais para análise gerencial.",
    },
  ];

  // SEO básico: JSON-LD do serviço
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Contabilidade e Departamento Pessoal",
      "description":
        "Folha de pagamento, encargos, admissões/rescisões, eSocial e relatórios gerenciais, com SLAs e compliance.",
      "provider": { "@type": "Organization", "name": "Unicompass" },
      "areaServed": "Interior de SP",
      "serviceType": "BPO de DP e Contabilidade",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
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
            alt="Contabilidade e DP"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-dark/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contabilidade e <span className="text-primary">Departamento Pessoal</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            BPO de folha, eSocial e rotinas trabalhistas — fechamentos com precisão e relatórios que viram decisão.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/contato">Solicitar orçamento</a>
          </Button>
        </div>
      </section>

      {/* Serviços — apenas os cards */}
      <section className="py-20 bg-background" id="servicos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                alt="Processo operacional"
                className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Como funciona</h2>
              <p className="text-xl text-white/80 mb-8">Método simples, prazos definidos e zero surpresa no fechamento.</p>

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

export default ContabilidadeDP;
