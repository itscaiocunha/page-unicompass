import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      description: "15+ anos em consultoria empresarial e transformação organizacional",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop"
    },
    {
      name: "Carlos Santos",
      role: "Diretor de RH",
      description: "Especialista em gestão de pessoas e desenvolvimento de talentos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop"
    },
    {
      name: "Marina Costa",
      role: "Head de ESG",
      description: "Certificada em sustentabilidade corporativa e governança",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">Nossa Equipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-6">
            Especialistas que Fazem a
            <span className="block text-primary">Diferença</span>
          </h2>
          <p className="text-xl text-dark-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe multidisciplinar combina experiência, inovação e paixão para 
            entregar resultados excepcionais para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-dark-foreground mb-6">
              Liderança com Propósito
            </h3>
            <p className="text-dark-foreground/80 mb-6 text-lg leading-relaxed">
              Nossos líderes são especialistas reconhecidos em suas áreas, com formações 
              internacionais e experiência comprovada em grandes corporações.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Certificações internacionais",
                "MBA em universidades renomadas",
                "Experiência em multinacionais",
                "Publicações e palestras no setor"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-dark-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Conheça Todo o Time
            </Button>
          </div>

          {/* Right Team Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Large Featured Member */}
              <div className="col-span-2">
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                  <div className="relative h-64">
                    <img 
                      src={teamMembers[0].image}
                      alt={teamMembers[0].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-xl font-bold text-white mb-1">{teamMembers[0].name}</h4>
                      <p className="text-primary font-medium mb-2">{teamMembers[0].role}</p>
                      <p className="text-white/80 text-sm">{teamMembers[0].description}</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Smaller Team Members */}
              {teamMembers.slice(1).map((member, index) => (
                <Card key={member.name} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                  <div className="relative h-48">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                      <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                      <p className="text-white/80 text-xs">{member.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-6 -right-6 z-10">
              <div className="bg-primary rounded-full p-4 shadow-elegant">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-white/90">Especialistas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👥</span>
            </div>
            <h4 className="text-xl font-bold text-dark-foreground mb-2">Recursos Humanos</h4>
            <p className="text-dark-foreground/70 text-sm">
              Especialistas em gestão de pessoas, recrutamento e desenvolvimento organizacional
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚙️</span>
            </div>
            <h4 className="text-xl font-bold text-dark-foreground mb-2">BPO & Processos</h4>
            <p className="text-dark-foreground/70 text-sm">
              Experts em otimização de processos e terceirização de operações empresariais
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h4 className="text-xl font-bold text-dark-foreground mb-2">ESG & Sustentabilidade</h4>
            <p className="text-dark-foreground/70 text-sm">
              Consultores certificados em práticas ambientais, sociais e de governança
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;