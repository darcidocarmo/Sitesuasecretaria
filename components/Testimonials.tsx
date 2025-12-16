import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Dr. Ricardo Mendes",
    role: "Cardiologista",
    text: "Desde que contratei o serviço, o número de faltas no meu consultório caiu 40% graças à confirmação ativa de consultas. Incrível!",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Advogada Trabalhista",
    text: "Eu perdia horas respondendo WhatsApp e agendando reuniões. Agora recebo tudo organizado e só foco nas petições. Recomendo demais.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Agência Start",
    role: "Consultoria de Marketing",
    text: "O relatório mensal de produtividade foi um divisor de águas. Conseguimos identificar gargalos no nosso atendimento que nem imaginávamos.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Quem Confia Recomenda</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-navy-800 p-8 rounded-xl border border-navy-700 relative">
              <Quote className="absolute top-6 right-6 text-navy-900 opacity-50" size={48} />
              <p className="text-gray-300 mb-6 italic relative z-10">"{item.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-primary text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};