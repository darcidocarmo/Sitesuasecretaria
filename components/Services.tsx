import React from 'react';
import { Calendar, PhoneCall, FileText, Wallet, Plane, Users, BarChart } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Gestão de Agenda",
    description: "Agendamento, reagendamento e confirmação de consultas ou reuniões. Organização otimizada para evitar buracos na sua agenda.",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Atendimento Remoto",
    description: "Gestão de e-mails, atendimento telefônico e resposta rápida via WhatsApp com script personalizado para sua clínica ou escritório.",
    icon: PhoneCall,
  },
  {
    id: 3,
    title: "Gestão Financeira Básica",
    description: "Emissão de boletos, notas fiscais, cobrança de inadimplentes e organização de fluxo de caixa simples.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Documentos e Relatórios",
    description: "Organização digital de arquivos, formatação de documentos, elaboração de propostas comerciais e relatórios simples.",
    icon: FileText,
  },
  {
    id: 5,
    title: "Concierge Corporativo",
    description: "Planejamento completo de viagens (voos, hotéis), reservas de restaurantes e organização de pequenas reuniões.",
    icon: Plane,
  },
  {
    id: 6,
    title: "Controle de Reuniões",
    description: "Preparação de pautas, envio de convites e atas de reunião para garantir que nenhum alinhamento seja perdido.",
    icon: Users,
  },
  {
    id: 7,
    title: "DIFERENCIAL: Inteligência de Dados",
    description: "Relatórios mensais de produtividade, indicadores de atendimento e sugestões de melhoria baseadas em dados reais do seu negócio.",
    icon: BarChart,
    isHighlight: true,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">O Que Fazemos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Soluções Completas para sua Rotina</h3>
          <p className="text-gray-600">
            Deixe a burocracia conosco e foque no core business da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`
                relative p-8 rounded-xl transition-all duration-300 hover:shadow-xl group
                ${service.isHighlight 
                  ? 'bg-navy-900 text-white md:col-span-2 lg:col-span-3 border-2 border-primary transform hover:-translate-y-1' 
                  : 'bg-white text-gray-800 border border-gray-100 hover:border-primary/30'}
              `}
            >
              <div className={`
                w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-2xl
                ${service.isHighlight ? 'bg-primary text-white' : 'bg-blue-50 text-navy-900'}
              `}>
                <service.icon size={28} />
              </div>
              
              <h4 className={`text-xl font-bold mb-3 ${service.isHighlight ? 'text-white' : 'text-navy-900'}`}>
                {service.title}
              </h4>
              
              <p className={`leading-relaxed ${service.isHighlight ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>

              {service.isHighlight && (
                <div className="absolute top-4 right-4 bg-primary text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider">
                  Exclusivo
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};