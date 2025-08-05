import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-collaboration.jpg";

const SobreNos = () => {
  const values = [
    {
      icon: "🎯",
      title: "Excelência",
      description: "Buscamos sempre a excelência em tudo que fazemos, superando expectativas e entregando resultados excepcionais."
    },
    {
      icon: "🤝",
      title: "Confiança",
      description: "Construímos relacionamentos sólidos baseados na transparência, honestidade e cumprimento de compromissos."
    },
    {
      icon: "💡",
      title: "Inovação",
      description: "Estamos sempre em busca de soluções inovadoras e tecnologias que agreguem valor aos nossos clientes."
    },
    {
      icon: "🌱",
      title: "Sustentabilidade",
      description: "Promovemos práticas sustentáveis e responsáveis em todos os aspectos do nosso negócio."
    }
  ];

  const timeline = [
    { year: "2018", title: "Fundação", description: "Início das atividades com foco em consultoria empresarial" },
    { year: "2019", title: "Expansão", description: "Ampliação dos serviços para RH e recrutamento" },
    { year: "2021", title: "Crescimento", description: "Incorporação de serviços de ESG e sustentabilidade" },
    { year: "2023", title: "Consolidação", description: "Mais de 500 empresas atendidas com excelência" }
  ];

  const stats = [
    { number: "500+", label: "Empresas Atendidas" },
    { number: "5", label: "Anos de Experiência" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "50+", label: "Especialistas" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={teamImage} 
            alt="Nossa equipe" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sobre <span className="text-primary">Nós</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Somos uma empresa de consultoria especializada em soluções integradas 
            para gestão empresarial, recursos humanos e desenvolvimento organizacional.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Nossa Missão
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transformar organizações através de soluções inovadoras e personalizadas, 
                promovendo o crescimento sustentável e o desenvolvimento do capital humano.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser reconhecida como a principal consultoria em gestão empresarial e 
                    desenvolvimento humano no Brasil.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Propósito</h3>
                  <p className="text-muted-foreground">
                    Conectar pessoas e organizações ao seu máximo potencial, criando 
                    valor sustentável para todos os stakeholders.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="p-6 text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação e definem nossa cultura organizacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Nossa Jornada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma trajetória de crescimento e conquistas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{item.year}</span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Profissionais especializados e apaixonados por transformar organizações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ana Silva", role: "CEO & Fundadora", speciality: "Estratégia Empresarial" },
              { name: "Carlos Santos", role: "Diretor de RH", speciality: "Gestão de Pessoas" },
              { name: "Maria Oliveira", role: "Especialista ESG", speciality: "Sustentabilidade" }
            ].map((member, index) => (
              <Card key={member.name} className="p-6 bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.speciality}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Descubra como podemos ajudar sua empresa a alcançar novos patamares de sucesso.
          </p>
          <Button variant="secondary" size="lg">
            Entrar em Contato
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;