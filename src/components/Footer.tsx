import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: "Sobre Nós", href: "/sobre-nos" },
      { label: "Carreiras", href: "#" }
    ],
    otherPages: [
      { label: "Home", href: "#inicio" },
      { label: "Serviços", href: "#servicos" },
      { label: "Blog", href: "/blog" }
    ],
    quickLinks: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Serviço", href: "#" },
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
                <img src="/images/logo/logotipo.png" alt="LogoTipo" className="w-20 h-auto" />
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mr-3">
                    <span className="text-primary text-sm">📞</span>
                  </div>
                  <span className="text-dark-foreground/80">(+99) 9999-99999</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mr-3">
                    <span className="text-primary text-sm">✉️</span>
                  </div>
                  <span className="text-dark-foreground/80">contato@unicompass.com.br</span>
                </div>

                {/* Redes sociais */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.linkedin.com/company/unicompassoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/unicompassoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* About ConsultPro */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">
                Sobre Nós
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
                Outras Páginas
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
                Links Rápidos
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
              Copyright © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
