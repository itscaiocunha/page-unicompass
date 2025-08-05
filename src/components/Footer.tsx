const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Nossa Equipe", href: "#sobre" },
      { label: "Missão & Visão", href: "#sobre" },
      { label: "Carreiras", href: "#" }
    ],
    otherPages: [
      { label: "Home", href: "#inicio" },
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Blog", href: "#blog" }
    ],
    quickLinks: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Serviço", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "FAQ", href: "#" }
    ]
  };

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <div className="w-4 h-4 border-2 border-dark-foreground rounded-sm" />
                </div>
                <h3 className="text-2xl font-bold text-dark-foreground">
                  ConsultPro
                </h3>
              </div>
              <p className="text-dark-foreground/80 mb-6 leading-relaxed">
                Conectamos as melhores oportunidades de negócios com soluções 
                confiáveis em gestão empresarial, desenvolvendo competências e 
                promovendo crescimento sustentável.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mr-3">
                    <span className="text-primary text-sm">📞</span>
                  </div>
                  <span className="text-dark-foreground/80">(+021) 250-365</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mr-3">
                    <span className="text-primary text-sm">✉️</span>
                  </div>
                  <span className="text-dark-foreground/80">contato@consultpro.com</span>
                </div>
              </div>
            </div>

            {/* About ConsultPro */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">
                About ConsultPro
              </h4>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-dark-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Pages */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">
                Other Pages
              </h4>
              <ul className="space-y-2">
                {footerLinks.otherPages.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-dark-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-dark-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dark-foreground/20 py-6">
          <div className="text-center">
            <p className="text-dark-foreground/60">
              Copyright © {currentYear} ConsultPro Template Kit By Baliniz.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;