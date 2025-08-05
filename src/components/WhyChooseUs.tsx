import { Card, CardContent } from "@/components/ui/card";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="text-primary text-lg font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-8 leading-tight">
              Oferecendo as Melhores Oportunidades que se Adequam ao
              <span className="block text-primary">Seu Perfil</span>
            </h2>
            
            <p className="text-xl text-dark-foreground/80 mb-12 leading-relaxed">
              Encontramos soluções sob medida para sua empresa, conectando talentos 
              excepcionais com oportunidades que realmente fazem a diferença no crescimento do seu negócio.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <div className="w-8 h-8 border-2 border-dark-foreground rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-dark-foreground mb-2">
                    A Melhor Agência de Contratação
                  </h4>
                  <p className="text-dark-foreground/70 text-sm leading-relaxed">
                    Conectamos os melhores talentos com as empresas certas, garantindo um match perfeito entre competências e necessidades.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <div className="w-8 h-8 border-2 border-dark-foreground rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-dark-foreground mb-2">
                    Melhor Tratamento aos Profissionais
                  </h4>
                  <p className="text-dark-foreground/70 text-sm leading-relaxed">
                    Oferecemos suporte completo e desenvolvimento contínuo para cada profissional em nossa rede de parceiros.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Expert Team Stat */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-dark-foreground/20"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${89 * 3.14159} ${100 * 3.14159}`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-dark-foreground">89%</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-dark-foreground mb-2">Expert Team</h4>
                <p className="text-dark-foreground/70 text-sm">
                  Nossa equipe especializada garante excelência em cada projeto
                </p>
              </div>

              {/* Best Service Stat */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-dark-foreground/20"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${85 * 3.14159} ${100 * 3.14159}`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-dark-foreground">85%</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-dark-foreground mb-2">Best Service</h4>
                <p className="text-dark-foreground/70 text-sm">
                  Oferecemos o melhor atendimento e soluções do mercado
                </p>
              </div>
            </div>

            {/* Team Image */}
            <div className="mt-12">
              <div className="w-full h-64 bg-card rounded-xl overflow-hidden">
                <img 
                  src={teamCollaborationImage} 
                  alt="Professional team working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;