import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import leadershipImage from "@/assets/leadership-communication.jpg";
import recruitmentImage from "@/assets/recruitment-interview.jpg";
import womenTechImage from "@/assets/women-tech-careers.jpg";

const BlogPage = () => {
  const featuredPosts = [
    {
      category: "Tips",
      title: "Como líderes podem abordar tópicos sensíveis com funcionários",
      description: "Estratégias eficazes para comunicação transparente e empática no ambiente corporativo, construindo confiança e melhorando o clima organizacional.",
      image: leadershipImage,
      readTime: "5 min",
      date: "15 Jan 2024"
    },
    {
      category: "Tips", 
      title: "5 perguntas de entrevista para ajudar a garantir o melhor talento",
      description: "Descubra técnicas avançadas de recrutamento que vão além do currículo, identificando candidatos com potencial real de crescimento na sua empresa.",
      image: recruitmentImage,
      readTime: "7 min",
      date: "12 Jan 2024"
    },
    {
      category: "News",
      title: "Como apoiar mulheres em carreiras de desenvolvimento de software",
      description: "Iniciativas e práticas que promovem diversidade e inclusão no setor tech, criando oportunidades equitativas e ambientes mais inovadores.",
      image: womenTechImage,
      readTime: "6 min",
      date: "08 Jan 2024"
    }
  ];

  const recentPosts = [
    {
      title: "Tendências de RH para 2024: O que esperar",
      category: "Trends",
      date: "20 Jan 2024"
    },
    {
      title: "Como implementar feedback contínuo na sua empresa",
      category: "Management",
      date: "18 Jan 2024"
    },
    {
      title: "A importância da cultura organizacional no home office",
      category: "Culture",
      date: "16 Jan 2024"
    },
    {
      title: "Métricas de RH: indicadores essenciais para gestores",
      category: "Analytics",
      date: "14 Jan 2024"
    }
  ];

  const categories = ["Todos", "Tips", "News", "Trends", "Management", "Culture", "Analytics"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nosso <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Insights, tendências e melhores práticas em gestão de pessoas, 
            recrutamento e desenvolvimento organizacional.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {featuredPosts.map((post, index) => (
              <Card key={post.title} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary text-sm font-medium">{post.category}</span>
                    <span className="text-muted-foreground text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Ler mais →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* More Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-foreground mb-8">Mais Artigos</h2>
              
              <div className="space-y-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="aspect-video bg-muted rounded-lg"></div>
                      <div className="md:col-span-3">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-primary text-sm font-medium">Management</span>
                          <span className="text-muted-foreground text-sm">4 min</span>
                          <span className="text-muted-foreground text-sm">10 Jan 2024</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                          Como construir uma cultura de alta performance
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Estratégias comprovadas para desenvolver uma cultura organizacional focada em resultados excepcionais.
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Ler artigo completo →
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Posts Recentes</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 bg-primary text-white">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="mb-6 text-white/90">
                  Receba nossos melhores conteúdos diretamente no seu email.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Seu melhor email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                  />
                  <Button variant="secondary" className="w-full">
                    Assinar Newsletter
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;