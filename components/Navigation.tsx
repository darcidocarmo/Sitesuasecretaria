import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, MessageCircle } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Quem Somos', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Vantagens', href: '#benefits' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-bold text-2xl ${scrolled ? 'text-navy-900' : 'text-navy-900 md:text-white'}`}>
              Secretaria<span className="text-primary">.Virtual</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium hover:text-primary transition-colors cursor-pointer ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-navy-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Secretaria Virtual</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevando o padrão do seu atendimento e organizando seu negócio para que você possa focar no que realmente importa: seu crescimento.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato Direto</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2 text-white font-medium">
                <MessageCircle size={18} className="text-green-500" /> 
                <a href="https://wa.me/5521980819854" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (21) 98081-9854 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={18} className="text-primary" /> 
                <a href="https://www.instagram.com/suasecretaria_virtual/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @suasecretaria_virtual
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
            <p className="text-gray-400 text-sm">
              Segunda a Sexta: 09:00 - 18:00<br/>
              Atendimento Remoto em todo Brasil.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sua Secretaria Virtual. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5521980819854"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
    </a>
  );
};