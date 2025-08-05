import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="text-primary text-lg font-medium">Consultoria Estratégica</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-foreground mb-6 leading-tight">
              Transforme Seu Negócio com
              <span className="block text-primary">
                Consultoria Estratégica
              </span>
            </h1>
            
            <p className="text-xl text-dark-foreground/80 mb-8 leading-relaxed">
              Encontre as melhores oportunidades e soluções confiáveis em RH, BPO e ESG 
              conosco, desenvolvendo suas competências empresariais.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                "✓ Encontre mais de 200+ oportunidades de serviços",
                "✓ Desenvolva novas competências para preparar sua empresa",
                "✓ Mantenha o progresso de todos os talentos",
                "✓ Conexão com mais de 90+ empresas"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center text-dark-foreground/90">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>{benefit.replace('✓ ', '')}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="xl" className="bg-primary hover:bg-primary-dark">
                Sobre Nós
              </Button>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <div className="w-0 h-0 border-l-[6px] border-l-primary border-y-[4px] border-y-transparent ml-1" />
                </div>
                <div>
                  <p className="text-dark-foreground font-medium">
                    Encontre as melhores & confiáveis oportunidades de negócios
                  </p>
                  <p className="text-dark-foreground/70 text-sm">
                    conosco e desenvolva suas competências
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full h-64 bg-card rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop" 
                    alt="Escritório moderno com espaços abertos" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-48 bg-card rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop" 
                    alt="Ambiente corporativo aberto" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8">
                <div className="w-full h-80 bg-card rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop" 
                    alt="Escritório aberto com colaboração" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
