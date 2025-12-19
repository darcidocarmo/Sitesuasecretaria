import React from 'react';
import { ShieldCheck, TrendingUp, Users2, Clock, MessageSquareText, CalendarCheck } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Vantagens Concretas</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-navy-900">Por que escolher o nosso secretariado?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-slate-50">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CalendarCheck className="text-green-600" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">Agenda Confirmada</h4>
              <p className="text-gray-600 text-sm">Não perca mais consultas por falta de retorno. Realizamos confirmações ativas com cada paciente.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-slate-50">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users2 className="text-blue-600" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">Atendimento Humanizado</h4>
              <p className="text-gray-600 text-sm">Nada de robôs genéricos. Seu paciente é tratado com empatia e profissionalismo em cada interação.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-slate-50">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <MessageSquareText className="text-purple-600" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">Resposta Rápida</h4>
              <p className="text-gray-600 text-sm">Retorno ágil no WhatsApp para dúvidas e agendamentos, aumentando a taxa de conversão do seu consultório.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-slate-50">
            <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Clock className="text-red-600" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">Economia de Tempo</h4>
              <p className="text-gray-600 text-sm">Delegue a burocracia e ganhe até 15 horas semanais para focar em diagnósticos ou na sua vida pessoal.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-slate-50">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-yellow-600" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">Custo-Benefício Real</h4>
              <p className="text-gray-600 text-sm">Sem encargos trabalhistas ou custos de infraestrutura. Pague apenas pelo serviço de alta performance.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-slate-50">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">Organização Financeira</h4>
              <p className="text-gray-600 text-sm">Auxílio em faturamentos e controle de entradas para que você tenha clareza sobre seus rendimentos.</p>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5521980819854"
            target="_blank"
            className="inline-flex items-center gap-3 bg-navy-900 text-white px-10 py-4 rounded-full font-bold hover:bg-navy-800 transition-all shadow-xl group"
          >
            Quero otimizar minha agenda
            <Clock size={20} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};