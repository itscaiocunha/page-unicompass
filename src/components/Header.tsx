import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { label: "Consultoria Empresarial", href: "/servicos/consultoria-empresarial" },
    { label: "Contabilidade e DP", href: "/servicos/contabilidade-dp" },
    { label: "DHO & Desenvolvimento", href: "/servicos/dho-desenvolvimento" },
    { label: "Recrutamento & Seleção", href: "/servicos/recrutamento-selecao" },
    { label: "Treinamentos", href: "/servicos/treinamentos" },
    { label: "ESG/SST", href: "/servicos/esg-sst" },
    { label: "Proposta Reclamatória", href: "/servicos/proposta-reclamatoria" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
                <img 
                    src="/images/logo/Logo.png" 
                    alt="Logo Consultoria Estratégica" 
                    className="h-16 w-auto"
                />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/" 
                      className="text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-dark hover:text-primary bg-transparent">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-80 bg-background border border-border rounded-md shadow-lg">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.label} asChild>
                          <Link
                            to={service.href}
                            className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                          >
                            {service.label}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/blog" 
                      className="text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
                    >
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/sobre-nos" 
                      className="text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
                    >
                      Sobre Nós
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/contato" 
                      className="text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
                    >
                      Contato
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-dark-foreground hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Submenu */}
              <div className="px-3 py-2">
                <div className="text-dark font-medium mb-2">Serviços</div>
                <div className="ml-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      className="block px-2 py-1 text-sm text-dark hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/blog"
                className="block px-3 py-2 text-dark hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/sobre-nos"
                className="block px-3 py-2 text-dark hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>

              <Link
                to="/contato"
                className="block px-3 py-2 text-dark hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;