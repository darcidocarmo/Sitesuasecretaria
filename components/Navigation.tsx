import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Quem Somos', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Vantagens', href: '#benefits' },
  { label: 'Boas Práticas', href: '#practices' },
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-black text-2xl tracking-tight ${scrolled ? 'text-navy-900' : 'text-white md:text-white'}`}>
              Secretaria<span className="text-primary">.Virtual</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors cursor-pointer ${scrolled ? 'text-navy-800' : 'text-gray-100'}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/5521980819854"
              target="_blank"
              className="bg-primary hover:bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-navy-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full border-t border-gray-100 animate-fadeIn">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 rounded-xl text-lg font-bold text-navy-900 hover:text-primary hover:bg-gray-50 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/5521980819854"
              target="_blank"
              className="block w-full text-center bg-green-600 text-white py-4 rounded-xl font-bold mt-4"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-6">Secretaria<span className="text-primary">.Virtual</span></h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Transformando a gestão de consultórios e escritórios através de um atendimento remoto estratégico, humanizado e focado em resultados.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/suasecretaria_virtual/" target="_blank" className="w-10 h-10 bg-white/5 hover:bg-primary transition-colors rounded-full flex items-center justify-center">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest border-l-4 border-primary pl-3">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="text-primary mt-1 shrink-0" /> 
                <a href="https://wa.me/5521980819854" target="_blank" className="hover:text-white transition-colors">
                  (21) 98081-9854<br/>
                  <span className="text-xs">Atendimento em todo Brasil</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-1 shrink-0" /> 
                <a href="mailto:suasecretariavirtual@outlook.com" className="hover:text-white transition-colors break-all">
                  suasecretariavirtual@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" /> 
                <span>Remoto / Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest border-l-4 border-primary pl-3">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Agendamento de Consultas</li>
              <li className="hover:text-white transition-colors cursor-pointer">Gestão de Agenda Médica</li>
              <li className="hover:text-white transition-colors cursor-pointer">Confirmação de Presença</li>
              <li className="hover:text-white transition-colors cursor-pointer">Atendimento WhatsApp</li>
              <li className="hover:text-white transition-colors cursor-pointer">Faturamento e Notas Fiscais</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest border-l-4 border-primary pl-3">Confiança</h3>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-4 text-green-500 font-bold">
                <ShieldCheck size={24} />
                <span>Dados Seguros</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Operamos em conformidade com a LGPD para garantir a total privacidade dos dados de seus pacientes e clientes.
              </p>
              <div className="flex gap-4 text-[10px] text-gray-600 font-bold uppercase tracking-tighter">
                <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Keite Cardoso - Sua Secretaria Virtual. CNPJ: 50.123.456/0001-00. Todos os direitos reservados.
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
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
    </a>
  );
};