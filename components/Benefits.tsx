import React from 'react';
import { ShieldCheck, TrendingDown, Award } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck size={40} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Sem Vínculo Empregatício</h3>
            <p className="text-gray-600">
              Contrate via PJ. Sem encargos trabalhistas, 13º salário, férias ou preocupações com leis trabalhistas. Apenas serviço entregue.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <TrendingDown size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Redução de Custos</h3>
            <p className="text-gray-600">
              Não gaste com espaço físico, equipamentos, luz ou internet. Você paga apenas pelas horas ou pacote contratado.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Award size={40} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Profissionalismo Extremo</h3>
            <p className="text-gray-600">
              Atendimento treinado e padronizado. Transmita uma imagem corporativa e confiável para seus pacientes e clientes desde o primeiro contato.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};