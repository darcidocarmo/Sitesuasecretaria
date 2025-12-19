import React from 'react';
import { MessageSquare, TrendingDown, Layout, ArrowRight } from 'lucide-react';
import { PracticeItem } from '../types';

const practices: PracticeItem[] = [
  {
    id: 1,
    title: "Por que seu consultório perde pacientes no WhatsApp",
    description: "A demora na resposta é a principal causa de desistência. Descubra como um atendimento ágil e humanizado retém seus pacientes.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Agendamento mal feito impacta no faturamento?",
    description: "Buracos na agenda e falta de confirmação resultam em prejuízo direto. Saiba como a gestão estratégica maximiza seus ganhos.",
    icon: TrendingDown,
  },
  {
    id: 3,
    title: "Secretária presencial ou virtual: o que faz sentido hoje?",
    description: "Compare custos, eficiência e flexibilidade. Entenda por que o modelo remoto está revolucionando os consultórios modernos.",
    icon: Layout,
  }
];

export const BestPractices: React.FC = () => {
  return (
    <section id="practices" className="py-24 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Conhecimento Estratégico</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Boas Práticas de Gestão</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights fundamentais para elevar o nível do seu atendimento e garantir a saúde financeira do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((item) => (
            <div key={item.id} className="bg-navy-800 p-8 rounded-2xl border border-navy-700 flex flex-col h-full hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon size={24} />
              </div>
              
              <h4 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              
              <a 
                href="https://wa.me/5521980819854" 
                target="_blank"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
              >
                Saiba mais
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};