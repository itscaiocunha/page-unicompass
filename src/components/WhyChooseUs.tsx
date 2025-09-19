const EscolhaNos = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="text-primary text-lg font-medium">POR QUE A UNICOMPASS?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-8 leading-tight">
              Melhores oportunidades para <span className="text-primary">sua empresa</span>
            </h2>
            
            <p className="text-xl text-dark-foreground/80 mb-12 leading-relaxed">
              Na Unicompass, integramos finanças, pessoas e compliance para prevenir riscos e impulsionar resultados, transformando a complexidade empresarial em crescimento sustentável.
            </p>

            {/* Método 8+3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <div className="w-8 h-8 border-2 border-dark-foreground rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-dark-foreground mb-2">
                    Método 8+3 exclusivo
                  </h4>
                  <p className="text-dark-foreground/70 text-sm leading-relaxed">
                    O modelo integra 8 áreas de consultoria com 3 verticais de treinamento, entregando soluções completas para o crescimento e a prevenção de riscos na sua empresa.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <div className="w-8 h-8 border-2 border-dark-foreground rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-dark-foreground mb-2">
                    Consultoria integrada
                  </h4>
                  <p className="text-dark-foreground/70 text-sm leading-relaxed">
                    Unimos finanças, pessoas, compliance e saúde ocupacional em uma abordagem única, garantindo resultados para o seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">              
              {/* Eficiência Operacional */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="8" fill="none" className="text-dark-foreground/20" />
                    <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray={`${80 * 3.14159} ${100 * 3.14159}`} className="text-primary" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-dark-foreground">80%</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-dark-foreground mb-2">Eficiência operacional</h4>
                <p className="text-dark-foreground/70 text-sm">
                  Margem média em serviços estratégicos, com alta performance nos resultados.
                </p>
              </div>

              {/* Satisfação de Clientes */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="8" fill="none" className="text-dark-foreground/20" />
                    <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray={`${92 * 3.14159} ${100 * 3.14159}`} className="text-primary" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-dark-foreground">92%</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-dark-foreground mb-2">Satisfação de clientes</h4>
                <p className="text-dark-foreground/70 text-sm">
                  Alto índice de fidelização e renovação de contratos graças à entrega de valor.
                </p>
              </div>
            </div>

            {/* Team Image */}
            <div className="mt-12">
              <div className="w-full h-64 bg-card rounded-xl overflow-hidden">
                <img 
                  src="https://unicompass-alpha.vercel.app/images/time/foto-escritorio.jpg" 
                  alt="Escritório da Unicompass" 
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

export default EscolhaNos;