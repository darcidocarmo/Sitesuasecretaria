import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fundadora da empresa" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy-900/10 rounded-full z-0"></div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Excelência e Discrição no Suporte ao Seu Negócio</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Olá, sou Keite Cardoso, fundadora da <strong>Sua Secretaria Virtual</strong>. Com mais de 15 anos de experiência em administração corporativa e secretariado executivo bilíngue, decidi aplicar minha expertise para ajudar profissionais liberais a recuperarem sua liberdade de tempo.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Meu propósito é claro: oferecer um suporte administrativo robusto e estratégico, permitindo que médicos cuidem de pacientes, advogados foquem em teses e empresários desenvolvam negócios, sem serem consumidos pela burocracia do dia a dia.
            </p>

            <ul className="space-y-3">
              {[
                "Atendimento Humanizado e Personalizado",
                "Confidencialidade Absoluta",
                "Foco em Resultados e Organização"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-navy-900 font-medium">
                  <CheckCircle size={20} className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};