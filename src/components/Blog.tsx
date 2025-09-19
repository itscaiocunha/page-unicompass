import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BlogPost = {
  category: "Financeiro" | "Fiscal/Trabalhista" | "SST";
  title: string;
  description: string;
  image: string;
  readTime: string; // ex.: "5 min"
  slug: string;     // ex.: "/blog/impacto-reforma-tributaria"
  date: string;     // ISO "2025-08-10" (ou "2025-08-10T00:00:00Z")
  author?: string;
};

const BLOG_CATEGORY_STYLES: Record<BlogPost["category"], string> = {
  "Financeiro": "bg-emerald-600 text-white",
  "Fiscal/Trabalhista": "bg-indigo-600 text-white",
  "SST": "bg-amber-600 text-white",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      category: "Fiscal/Trabalhista",
      title: "Reforma Tributária na prática: o que muda para as PMEs e como se preparar",
      description:
        "Entenda impactos reais da reforma, mapeie riscos e veja um roteiro de adequação fiscal para evitar autuações e otimizar carga tributária.",
      image: "/images/blog/foto-reforma.jpg",
      readTime: "6 min",
      slug: "/blog/reforma-tributaria-pmes-roteiro-de-adequacao",
      date: "2025-08-10",
      author: "Equipe Unicompass",
    },
    {
      category: "Financeiro",
      title: "Fluxo de caixa preditivo: decisões melhores com dados e cenários",
      description:
        "Como projetar entradas e saídas, calcular ponto de equilíbrio e priorizar investimentos usando cenários para crescer com segurança.",
      image: "/images/blog/foto-fluxo.jpg",
      readTime: "5 min",
      slug: "/blog/fluxo-de-caixa-preditivo-cenarios-e-decisoes",
      date: "2025-08-21",
      author: "Equipe Unicompass",
    },
    {
      category: "SST",
      title: "Saúde mental corporativa: indicadores, programas e ROI em SST",
      description:
        "Quais métricas acompanhar, como desenhar programas efetivos e reduzir afastamentos conectando SST com RH e liderança.",
      image: "/images/blog/foto-saude.jpg",
      readTime: "7 min",
      slug: "/blog/saude-mental-corporativa-indicadores-e-roi",
      date: "2025-09-02",
      author: "Equipe Unicompass",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">NOSSO BLOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Últimas Notícias e Artigos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tendências em finanças, compliance, SST e gestão de pessoas — com
            insights práticos para decisões melhores e crescimento sustentável.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card
              key={post.slug}
              className="group hover:shadow-elegant transition-all duration-500 border-0 shadow-card bg-card/50 backdrop-blur-sm hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <a href={post.slug} className="block focus:outline-none focus:ring-2 focus:ring-primary/50">
                {/* Cover */}
                <div className="relative">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${BLOG_CATEGORY_STYLES[post.category]}`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs bg-black/50 text-white rounded">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>

                  {/* Meta */}
                  <div className="mt-1 text-xs text-muted-foreground">
                    {post.author ? `${post.author} • ` : ""}{formatDate(post.date)}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary hover:text-primary/80 font-medium group-hover:translate-x-2 transition-transform"
                    asChild
                  >
                    <a href={post.slug} aria-label={`Ler mais: ${post.title}`}>
                      Ler mais →
                    </a>
                  </Button>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
