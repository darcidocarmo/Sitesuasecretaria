import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
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
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Liberte Seu Tempo, <br/>
          <span className="text-primary">Maximize Seus Resultados</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Seu Secretariado Remoto Estratégico
        </p>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Agendamento, Financeiro, Documentos e Gestão de Produtividade para Médicos, Advogados e Empresários.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-8 py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
          >
            Solicitar Proposta Personalizada
            <ArrowRight size={20} />
          </a>
          <a 
            href="#services"
            onClick={(e) => handleScrollTo(e, '#services')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold rounded-lg transition-all cursor-pointer"
          >
            Conhecer Serviços
          </a>
        </div>
      </div>
    </section>
  );
};