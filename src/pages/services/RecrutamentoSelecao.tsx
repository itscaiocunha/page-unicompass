import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import recruitmentImage from "@/assets/recruitment-interview.jpg";
import { useEffect } from "react";

const RecrutamentoSelecao = () => {
  const services = [
    { icon: "🏹", title: "Headhunting Executivo", description: "Busca ativa e confidencial para liderança e C-level, com scorecard e entrevistas por competências." },
    { icon: "🧪", title: "Seleção Técnica", description: "Processo seletivo para funções técnicas/operacionais com cases práticos e teste técnico." },
    { icon: "📋", title: "Assessment Center", description: "Avaliação comportamental (DISC/Big Five), dinâmica situacional e parecer estruturado." },
    { icon: "⚡", title: "Recrutamento Express", description: "Pipeline acelerado com Sourcing em 72h e short list em até 7–10 dias." },
    { icon: "🌍", title: "Talent Mapping", description: "Mapeamento de mercado por região/segmento, benchmark de faixa salarial e disponibilidade." },
    { icon: "🤝", title: "Onboarding Assistido", description: "Apoio na proposta, pré-admissão e primeiros 30/60/90 dias com ritos e metas." },
  ];

  const process = [
    { step: "01", title: "Briefing", desc: "Levantamento do contexto, cultura, objetivos e scorecard da vaga." },
    { step: "02", title: "Sourcing", desc: "Mapa de talentos, hunting ativo, triagem e entrevistas iniciais." },
    { step: "03", title: "Seleção", desc: "Entrevistas por competência, testes/assessments e checagens." },
    { step: "04", title: "Apresentação", desc: "Short list com relatório comparativo, parecer e recomendações." },
    { step: "05", title: "Fechamento", desc: "Apoio na proposta, referência final e alinhamento de início." },
    { step: "06", title: "Onboarding", desc: "Acompanhamento 30/60/90, feedbacks e ajustes de rampa." },
  ];

  const deliverables = [
    "Scorecard da vaga (competências, metas 90 dias, must/plus)",
    "Relatórios individuais e comparativos da short list",
    "Gravações/registro de entrevistas (opcional)",
    "Assessments (comportamental/técnico) e parecer",
    "Checklist de proposta e apoio no aceite",
    "Follow-up 30/60/90 com gestor e contratado",
  ];

  const faqs = [
    {
      q: "Qual o prazo médio para apresentar candidatos?",
      a: "Em posições técnicas/operacionais, primeiros perfis entre 5–10 dias. Em executivas, 10–15 dias (pode variar por senioridade/região).",
    },
    {
      q: "Vocês substituem gratuitamente se não houver fit?",
      a: "Sim. Oferecemos garantia de substituição dentro de um período acordado no contrato (ex.: 60 ou 90 dias).",
    },
    {
      q: "Podemos contratar só o Assessment?",
      a: "Pode. Os módulos são modulares: Assessment Center pode ser contratado de forma avulsa.",
    },
    {
      q: "Vocês atuam fora do interior de SP?",
      a: "Sim. Nosso foco é interior paulista, mas conduzimos processos em outras regiões quando necessário.",
    },
  ];

  // SEO básico: JSON-LD do serviço
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Recrutamento e Seleção",
      "description": "Headhunting executivo, seleção técnica, assessment e onboarding assistido com foco em fit e ramp-up 90 dias.",
      "provider": { "@type": "Organization", "name": "Unicompass" },
      "areaServed": "Interior de SP",
      "serviceType": "Recrutamento e Seleção / Headhunting",
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
            alt="Recrutamento & Seleção"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Recrutamento & <span className="text-primary">Seleção</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Talento certo, no tempo certo: hunting ativo, avaliação por competências e onboarding com metas de 90 dias.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/contato">Marcar reunião</a>
          </Button>
        </div>
      </section>

      {/* Modalidades / Serviços */}
      <section className="py-20 bg-background" id="servicos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagem ilustrativa */}
            <div className="relative">
              <img
                src="/images/time/foto-time-reuniao.JPG"
                alt="Processo de Recrutamento"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Cards */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Modalidades de Recrutamento</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Soluções personalizadas para atrair, avaliar e fechar com os melhores talentos do mercado.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-dark" id="processo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Nosso processo</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Do briefing ao onboarding — com transparência, velocidade e foco no fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
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

export default RecrutamentoSelecao;
