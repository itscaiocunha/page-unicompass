import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      category: "Tips",
      title: "Como líderes podem abordar tópicos sensíveis com funcionários",
      description: "Estratégias eficazes para comunicação transparente e empática no ambiente corporativo, construindo confiança e melhorando o clima organizacional.",
      image: "/src/assets/leadership-communication.jpg",
      readTime: "5 min"
    },
    {
      category: "Tips", 
      title: "5 perguntas de entrevista para ajudar a garantir o melhor talento",
      description: "Descubra técnicas avançadas de recrutamento que vão além do currículo, identificando candidatos com potencial real de crescimento na sua empresa.",
      image: "/src/assets/recruitment-interview.jpg",
      readTime: "7 min"
    },
    {
      category: "News",
      title: "Como apoiar mulheres em carreiras de desenvolvimento de software",
      description: "Iniciativas e práticas que promovem diversidade e inclusão no setor tech, criando oportunidades equitativas e ambientes mais inovadores.",
      image: "/src/assets/women-tech-careers.jpg",
      readTime: "6 min"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">Our Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Últimas Notícias e Artigos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fique por dentro das últimas tendências em gestão de pessoas, 
            processos de negócio e governança empresarial com insights dos nossos especialistas.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title}
              className="group hover:shadow-elegant transition-all duration-500 border-0 shadow-card bg-card/50 backdrop-blur-sm hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    post.category === 'Tips' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
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

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.description}
                </p>
                
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary hover:text-primary-dark font-medium group-hover:translate-x-2 transition-transform"
                >
                  Ler mais →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="relative">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-dark-foreground mb-4">
                Assine Nossa Newsletter & Receba as Últimas Notícias
              </h3>
              <p className="text-xl text-dark-foreground/80 mb-8 max-w-2xl mx-auto">
                Fique atualizado com insights exclusivos sobre gestão empresarial, 
                tendências de mercado e estratégias de crescimento.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="Seu endereço de email"
                  className="flex-1 w-full px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-dark-foreground placeholder-dark-foreground/50 focus:outline-none focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary-dark px-8 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;