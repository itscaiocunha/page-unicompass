import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  company: string;
  category: "Financeiro & BPO" | "Fiscal/Trabalhista" | "SST & DHO" | "Governança & Processos";
  description: string;
  image: string;
  results: string;
  slug: string; // rota do estudo de caso
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Planejamento Financeiro & BPO",
      company: "AgroAlfa (Piracicaba/SP)",
      category: "Financeiro & BPO",
      description: "Reestruturação do contas a pagar/receber, projeção de caixa e rotinas com KPIs.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
      results: "↓ inadimplência 18% em 6 meses",
      slug: "/cases/planejamento-financeiro-bpo-agroalfa",
    },
    {
      title: "Adequação Fiscal & e-Social",
      company: "MetalPrime (Americana/SP)",
      category: "Fiscal/Trabalhista",
      description: "Mapeamento de obrigações, revisão tributária e calendário de compliance.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop",
      results: "↓ retrabalho 35% e prazos sob controle",
      slug: "/cases/adequacao-fiscal-e-social-metalprime",
    },
    {
      title: "Programa de SST & DHO",
      company: "VitalCare (Campinas/SP)",
      category: "SST & DHO",
      description: "Integração de segurança do trabalho com pessoas, clima e liderança.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&h=800&fit=crop",
      results: "↓ afastamentos 12% | ↑ engajamento",
      slug: "/cases/sst-dho-integrado-vitalcare",
    },
    {
      title: "Governança & Processos",
      company: "RetailMax (Região de Limeira/SP)",
      category: "Governança & Processos",
      description: "Padronização de processos críticos, papéis e indicadores para escala.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop",
      results: "↑ SLA de entregas +22% | ↓ falhas",
      slug: "/cases/governanca-processos-retailmax",
    },
  ];

  const achievements = [
    { number: "30+", label: "Projetos Entregues" },
    { number: "96%", label: "Satisfação Média" },
    { number: "24h", label: "Primeiro Retorno" },
    { number: "12m", label: "Parceria Média" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">Portfólio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Casos de sucesso que
            <span className="block text-primary">geram impacto real</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Projetos integrados em finanças, fiscal/trabalhista, SST e processos — do diagnóstico à execução.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-20">
          <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Caso em destaque
                  </span>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary font-medium text-sm uppercase tracking-wide">
                    {projects[0].category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">{projects[0].title}</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-1">{projects[0].results}</div>
                  <div className="text-sm text-muted-foreground">Cliente: {projects[0].company}</div>
                </div>
                <Button variant="default" className="w-fit" asChild>
                  <a href={projects[0].slug} aria-label={`Ver caso completo: ${projects[0].title}`}>
                    Ver caso completo
                  </a>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.slice(1).map((project, index) => (
            <Card
              key={project.slug}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={project.slug} className="block focus:outline-none focus:ring-2 focus:ring-primary/50">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{project.results}</div>
                      <div className="text-xs text-muted-foreground">{project.company}</div>
                    </div>
                    <Button variant="link" size="sm" className="p-0 text-primary">
                      Ver mais →
                    </Button>
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-12">Resultados que falam por si</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((a, index) => (
              <div
                key={a.label}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{a.number}</div>
                <div className="text-muted-foreground font-medium">{a.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Pronto para começar?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Diagnóstico claro, priorização e execução — com acompanhamento e KPIs mensais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="/contato">Solicitar proposta</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/cases">Ver mais casos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
