import { useRef, useState, KeyboardEvent } from "react";
import { Card } from "@/components/ui/card";

type StoryProps = {
  videoUrl: string;
  poster?: string;
  className?: string;
};

function StoryVideo({ videoUrl, poster, className = "" }: StoryProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <Card
      className={`relative mx-auto max-w-[22rem] overflow-hidden rounded-[1.75rem] shadow-elegant bg-black ${className}`}
    >
      <div
        className="w-full aspect-[9/16] outline-none"
        tabIndex={0}
        role="button"
        aria-pressed={!paused}
        aria-label={paused ? "Reproduzir vídeo" : "Pausar vídeo"}
        onKeyDown={onKey}
        onClick={togglePlay}
        title="Clique para reproduzir/pausar"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover cursor-pointer"
          src={videoUrl}
          poster={poster}
          loop
          muted
          playsInline
          preload="metadata"
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
        />
      </div>
    </Card>
  );
}

const Team = () => {
  const bullets = [
    "Proximidade regional com padrão de grandes consultorias",
    "Abordagem preventiva: reduzir riscos antes que virem custo",
    "Decisões suportadas por dados, KPIs e tecnologia",
    "Sinergia entre Financeiro, Fiscal/Trabalhista, SST e DHO",
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">NOSSO TIME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-6">
            Lideranças que conectam{" "}
            <span className="block text-primary">estratégia e execução</span>
          </h2>
          <p className="text-xl text-dark-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Uma equipe multidisciplinar que une finanças, compliance, SST e gestão de pessoas
            para entregar resultados consistentes e sustentáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-dark-foreground mb-6">Liderança com Propósito</h3>
            <p className="text-dark-foreground/80 mb-6 text-lg leading-relaxed">
              Atuamos com proximidade e método: diagnóstico claro, indicadores acionáveis e
              acompanhamento contínuo para transformar complexidade em simplicidade estratégica.
            </p>

            <div className="space-y-4 mb-8">
              {bullets.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-dark-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: somente o vídeo (stories) */}
          <div className="relative">
            <StoryVideo videoUrl="https://w7startup.com.br/video/socios.mp4" />
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📊</span>
            </div>
            <h4 className="text-xl font-bold text-dark-foreground mb-2">Financeiro & BPO</h4>
            <p className="text-dark-foreground/70 text-sm">
              CFO externo, fluxo de caixa preditivo e operação financeira enxuta, com KPIs e governança.
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚖️</span>
            </div>
            <h4 className="text-xl font-bold text-dark-foreground mb-2">Compliance Fiscal & Trabalhista</h4>
            <p className="text-dark-foreground/70 text-sm">
              Planejamento tributário, obrigações acessórias e e-Social com foco em prevenção de passivos.
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🛡️</span>
            </div>
            <h4 className="text-xl font-bold text-dark-foreground mb-2">SST & DHO</h4>
            <p className="text-dark-foreground/70 text-sm">
              Segurança do trabalho integrada a cultura, liderança e bem-estar — menos afastamentos, mais engajamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
