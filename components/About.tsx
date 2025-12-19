import React from 'react';
import { CheckCircle, Award, Briefcase, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Keite Cardoso - Fundadora Sua Secretaria Virtual" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background elements for visual flair */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full z-0 blur-2xl"></div>
            <div className="absolute top-10 -right-10 w-64 h-64 bg-navy-900/5 rounded-full z-0"></div>
            
            <div className="absolute bottom-10 right-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block max-w-[200px]">
              <div className="flex items-center gap-2 text-primary font-bold mb-1">
                <Award size={20} />
                <span>+15 Anos</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">De experiência em Gestão Executiva</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Sua Parceira Estratégica</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-8 leading-tight">Keite Cardoso: Experiência que gera resultados</h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                Como fundadora da <strong>Sua Secretaria Virtual</strong>, dediquei mais de 15 anos de minha carreira ao suporte executivo bilíngue de alto nível em grandes corporações. Hoje, trago essa mentalidade de excelência para o dia a dia de profissionais liberais.
              </p>
              
              <p>
                Entendo que, para um médico, advogado ou empresário, <strong>tempo não é apenas dinheiro; tempo é qualidade de atendimento e vida pessoal.</strong> Minha missão é garantir que sua operação administrativa seja impecável, discreta e altamente produtiva.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full"><Briefcase size={18} className="text-primary" /></div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Visão Corporativa</h4>
                  <p className="text-xs text-gray-500">Processos estruturados e profissionais.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full"><UserCheck size={18} className="text-primary" /></div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Atendimento VIP</h4>
                  <p className="text-xs text-gray-500">Seu paciente se sente único e respeitado.</p>
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Especialista em Atendimento para profissionais liberais",
                "Conformidade total com a LGPD e Privacidade"
                            ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-navy-900 font-bold">
                  <CheckCircle size={22} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="inline-block bg-primary hover:bg-sky-600 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-lg transform hover:-translate-y-1"
            >
              Conhecer minha metodologia
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};