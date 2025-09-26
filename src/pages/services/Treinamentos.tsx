import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import trainingImage from "@/assets/leadership-communication.jpg";
import corporateTrainingImage from "@/assets/corporate-training.jpg";
import { useEffect } from "react";

const Treinamentos = () => {
  const courses = [
    {
      icon: "👔",
      title: "Liderança e Gestão",
      description: "Competências de liderança, ritos de gestão (1:1, feedback, OKRs) e comunicação assertiva.",
      duration: "40h",
    },
    {
      icon: "💼",
      title: "Vendas e Negociação",
      description: "Prospecção, pipeline, SPIN/GPCT, condução de objeções e fechamento com margem.",
      duration: "32h",
    },
    {
      icon: "🎯",
      title: "Produtividade",
      description: "Priorização, foco, rituais semanais, uso de KPIs e ferramentas para execução.",
      duration: "24h",
    },
    {
      icon: "🤝",
      title: "Atendimento ao Cliente",
      description: "Experiência do cliente, NPS, postura consultiva e padronização de atendimento.",
      duration: "20h",
    },
  ];

  const modalities = [
    { icon: "🏢", title: "Presencial", desc: "Realizado na sua empresa, com práticas aplicadas à rotina do time." },
    { icon: "💻", title: "Online", desc: "Aulas ao vivo por plataforma, com gravação e material digital." },
    { icon: "🔄", title: "Híbrido", desc: "Blocos online + imersão presencial para fortalecer a prática." },
    { icon: "🎯", title: "In Company", desc: "Conteúdo customizado ao contexto e metas da sua operação." },
  ];

  const deliverables = [
    "Plano didático + ementa por módulo",
    "Materiais (playbooks, templates e exercícios)",
    "Certificado de conclusão",
    "Relatório de participação e avaliação de reação",
    "Plano de 30/60/90 dias pós-treinamento",
  ];

  const steps = [
    { step: "01", title: "Briefing", desc: "Metas de negócio, público e nível de maturidade." },
    { step: "02", title: "Customização", desc: "Ajustes de conteúdo, cases e exercícios ao seu contexto." },
    { step: "03", title: "Entrega", desc: "Facilitação dinâmica, prática guiada e feedback em tempo real." },
    { step: "04", title: "Follow-up", desc: "Materiais, desafios aplicados e suporte assíncrono." },
    { step: "05", title: "Mensuração", desc: "Relatório com KPIs de reação, aprendizado e aplicação." },
  ];

  const faqs = [
    { q: "Qual o tamanho ideal de turma?", a: "Recomendamos 12–25 participantes por turma. Turmas maiores podem ser divididas para preservar a prática." },
    { q: "Os treinamentos são certificados?", a: "Sim. Emitimos certificados para participantes com presença mínima e conclusão das atividades." },
    { q: "Vocês personalizam o conteúdo?", a: "Totalmente. Adaptamos exemplos, exercícios e simulações à realidade do seu negócio." },
    { q: "É possível ter gravação das aulas online?", a: "Sim. Para formato online, disponibilizamos gravações por período definido em contrato." },
  ];

  // SEO básico: JSON-LD do serviço
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Treinamentos Corporativos",
      "description": "Trilhas práticas e personalizadas em liderança, vendas, produtividade e atendimento, com mensuração de resultados.",
      "provider": { "@type": "Organization", "name": "Unicompass" },
      "areaServed": "Interior de SP",
      "serviceType": "Treinamentos In Company",
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
            alt="Treinamentos Corporativos"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary">Treinamentos</span> Corporativos
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Desenvolvemos as competências da sua equipe com trilhas práticas, personalizadas e mensuráveis.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/contato">Solicitar proposta</a>
          </Button>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-20 bg-background" id="cursos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <img
                src="/images/time/foto-time-reuniao.JPG"
                alt="Treinamento Corporativo"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Principais treinamentos</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Programas conduzidos por especialistas, com foco em prática e impacto no dia a dia.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {courses.map((course) => (
                  <Card key={course.title} className="p-4 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-2xl" aria-hidden="true">{course.icon}</div>
                            <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">{course.description}</p>
                        </div>
                        <div className="text-primary font-semibold text-sm">{course.duration}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 bg-dark" id="modalidades">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Modalidades de ensino</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Flexibilidade para se adaptar à rotina da sua empresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {modalities.map((m) => (
              <Card key={m.title} className="bg-white/5 border-white/10 p-6 text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-2">
                  <div className="text-5xl mb-3" aria-hidden="true">{m.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{m.title}</h3>
                  <p className="text-white/70 text-sm">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-background" id="processo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Como funciona</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Do briefing à mensuração: método simples para transformar aprendizado em execução.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-5xl font-bold text-primary mb-3">{s.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
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

export default Treinamentos;
