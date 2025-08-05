import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "contato@consultpro.com.br",
      icon: "📧"
    },
    {
      title: "Telefone",
      value: "+55 (11) 9999-9999",
      icon: "📞"
    },
    {
      title: "Endereço",
      value: "São Paulo, SP - Brasil",
      icon: "📍"
    },
    {
      title: "Horário",
      value: "Seg-Sex: 8h às 18h",
      icon: "⏰"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Nossa equipe de especialistas está aqui para ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-0 bg-card/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicitar Proposta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome *
                    </label>
                    <Input 
                      placeholder="Seu nome completo"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input 
                      placeholder="Nome da sua empresa"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input 
                      placeholder="(11) 99999-9999"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Serviço de Interesse
                  </label>
                  <select className="w-full p-3 border border-border/50 rounded-md bg-background focus:border-primary focus:outline-none">
                    <option value="">Selecione um serviço</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="bpo">BPO - Business Process Outsourcing</option>
                    <option value="esg">ESG - Governança Sustentável</option>
                    <option value="todos">Todos os serviços</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem *
                  </label>
                  <Textarea 
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    className="min-h-[120px] border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Enviar Solicitação
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nossa equipe está pronta para atender você. Entre em contato através de qualquer um dos canais abaixo ou preencha o formulário ao lado.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="p-6 hover:shadow-card transition-all duration-300 border-0 shadow-sm bg-card/50 backdrop-blur-sm group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0 text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="p-8 bg-gradient-primary text-primary-foreground shadow-glow border-0">
              <CardContent className="p-0 text-center">
                <h4 className="text-xl font-bold mb-4">
                  Atendimento Especializado
                </h4>
                <p className="mb-6 opacity-90">
                  Agende uma consulta gratuita com nossos especialistas e descubra como podemos ajudar sua empresa.
                </p>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;