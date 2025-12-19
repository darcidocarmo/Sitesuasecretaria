import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

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
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Escritório profissional e organizado" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="inline-block px-4 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-semibold mb-8 animate-pulse">
          Secretariado Remoto Profissional
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          Atendimento e organização da sua <br className="hidden md:block" />
          <span className="text-primary">agenda médica</span> sem complicação
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
          Recupere seu tempo e garanta que nenhum paciente fique sem resposta. 
          Focamos na burocracia para você focar na saúde.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-gray-200 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle2 size={18} className="text-green-500" />
            <span className="text-sm font-medium">Redução de faltas</span>
          </div>
          <div className="flex items-center gap-2 text-gray-200 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle2 size={18} className="text-green-500" />
            <span className="text-sm font-medium">Atendimento humanizado</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a 
            href="https://wa.me/5521980819854"
            target="_blank"
            className="px-10 py-5 bg-primary hover:bg-sky-600 text-white font-bold rounded-xl shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
          >
            <MessageCircle size={24} />
            Solicitar Proposta Personalizada
          </a>
          <a 
            href="#services"
            onClick={(e) => handleScrollTo(e, '#services')}
            className="px-10 py-5 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-navy-900 font-bold rounded-xl transition-all flex items-center justify-center text-lg"
          >
            Conhecer Serviços
          </a>
        </div>
      </div>
      
      {/* Visual detail at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};