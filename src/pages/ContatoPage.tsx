import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContatoPage = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: ["contato@empresa.com.br", "comercial@empresa.com.br"],
      link: "mailto:contato@empresa.com.br"
    },
    {
      icon: "📞",
      title: "Telefone",
      details: ["(11) 3456-7890", "(11) 9 8765-4321"],
      link: "tel:+551134567890"
    },
    {
      icon: "📍",
      title: "Endereço",
      details: ["Av. Paulista, 1000", "São Paulo - SP", "CEP: 01310-000"],
      link: "https://maps.google.com"
    },
    {
      icon: "🕒",
      title: "Horário de Atendimento",
      details: ["Segunda a Sexta", "8h às 18h", "Sábado: 8h às 12h"],
      link: null
    }
  ];

  const services = [
    "Consultoria Empresarial",
    "Contabilidade e DP",
    "DHO & Desenvolvimento", 
    "Recrutamento & Seleção",
    "Treinamentos",
    "ESG/SST",
    "Proposta Reclamatória"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a alcançar seus objetivos. 
            Fale conosco e descubra como podemos contribuir para seu sucesso.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Envie sua Mensagem
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input placeholder="(11) 9 9999-9999" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input placeholder="Nome da sua empresa" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Serviço de Interesse
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground">
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    rows={6}
                  />
                </div>

                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Concordo com os termos de privacidade e autorizo o contato comercial.
                  </label>
                </div>

                <Button size="lg" className="w-full md:w-auto">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-3 mb-12">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="p-3 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-3">
                      <div className="flex items-start">
                        <div className="text-xl mr-3 flex-shrink-0">{info.icon}</div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <div className="space-y-0.5">
                            {info.details.map((detail, index) => (
                              <p key={index} className="text-xs text-muted-foreground">
                                {info.link && index === 0 ? (
                                  <a href={info.link} className="hover:text-primary transition-colors">
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Mapa da localização</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-white/80">
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Qual o prazo médio para início dos projetos?",
                answer: "Normalmente iniciamos os projetos em até 15 dias após a assinatura do contrato, dependendo da complexidade e disponibilidade da equipe."
              },
              {
                question: "Atendem empresas de todos os portes?",
                answer: "Sim, atendemos desde pequenas empresas até grandes corporações, adaptando nossas soluções às necessidades específicas de cada cliente."
              },
              {
                question: "Como é feito o acompanhamento dos projetos?",
                answer: "Utilizamos metodologias ágeis com reuniões periódicas, relatórios de progresso e canais diretos de comunicação com nossa equipe."
              },
              {
                question: "Oferecem suporte pós-implementação?",
                answer: "Sim, oferecemos suporte contínuo e acompanhamento pós-implementação para garantir o sucesso dos projetos a longo prazo."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/70">
                    {faq.answer}
                  </p>
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
            Pronto para Começar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende uma reunião gratuita e descubra como podemos transformar sua empresa.
          </p>
          <Button variant="secondary" size="lg">
            Agendar Reunião
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContatoPage;