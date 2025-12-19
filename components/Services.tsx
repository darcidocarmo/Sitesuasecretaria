import React from 'react';
import { Calendar, PhoneCall, CheckSquare, Wallet, Headset, FileEdit, Star } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Agendamento de Consultas",
    description: "Gestão completa de entradas para clínicas e consultórios, garantindo que cada horário seja preenchido com inteligência.",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Atendimento WhatsApp",
    description: "Triagem e resposta humanizada imediata. Não deixe seu paciente esperando ou buscando o concorrente por falta de atenção.",
    icon: Headset,
  },
  {
    id: 3,
    title: "Confirmação de Presença",
    description: "Reduzimos as faltas (no-show) através de lembretes e confirmações ativas 24h a 48h antes do procedimento.",
    icon: CheckSquare,
  },
  {
    id: 4,
    title: "Gestão de Agenda",
    description: "Organização diária, encaixes de emergência e reagendamentos por solicitações de pacientes ou do profissional.",
    icon: FileEdit,
  },
  {
    id: 5,
    title: "Suporte ao Paciente",
    description: "Orientações básicas de pré-atendimento, envio de endereços e informações sobre convênios aceitos.",
    icon: PhoneCall,
  },
  {
    id: 6,
    title: "Controle Administrativo",
    description: "Organização de planilhas de faturamento, emissão de notas fiscais e suporte básico financeiro para o seu CNPJ.",
    icon: Wallet,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Soluções Especializadas</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6">Tudo o que seu consultório precisa para crescer</h3>
          <p className="text-gray-600 text-lg">
            Oferecemos um suporte administrativo de 360 graus, permitindo que você se dedique exclusivamente aos seus pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={30} />
              </div>
              
              <h4 className="text-xl font-extrabold text-navy-900 mb-4">
                {service.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>
            </div>
          ))}

          <div className="md:col-span-2 lg:col-span-3 bg-navy-900 rounded-3xl p-10 mt-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Star size={20} fill="#0ea5e9" />
                <span className="font-bold uppercase tracking-widest text-sm">Diferencial Exclusivo</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Relatórios Mensais de Produtividade</h4>
              <p className="text-gray-400">
                Você recebe mensalmente indicadores de atendimento, taxa de conversão de novos pacientes e sugestões estratégicas para o seu negócio.
              </p>
            </div>
            <a 
              href="https://wa.me/5521980819854" 
              target="_blank"
              className="relative z-10 bg-primary hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg whitespace-nowrap"
            >
              Solicitar Orçamento
            </a>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};