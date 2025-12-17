import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Texto formatado para o WhatsApp
    const messageText = `Olá! Gostaria de solicitar uma proposta personalizada para secretariado remoto.%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.phone}%0A` +
      `*Mensagem:* ${formData.message}`;

    const whatsappNumber = "5521980819854";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');

    // Mostra estado de sucesso e limpa o form
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            <div className="md:col-span-2 bg-navy-900 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Vamos Conversar?</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Ao clicar no botão, sua mensagem será preparada e você será redirecionado para o nosso WhatsApp para finalizar o atendimento.
                </p>
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                <p><strong>Foco em Agilidade:</strong> Respondemos em tempo real durante o horário comercial.</p>
              </div>
            </div>

            <div className="md:col-span-3 p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Redirecionando...</h3>
                  <p className="text-gray-600 mb-6">Sua conversa foi iniciada. Se a aba não abriu automaticamente, verifique seu bloqueador de pop-ups.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-600 transition-colors"
                  >
                    Novo Formulário
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Como deseja ser chamado?"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="(21) 98081-9854"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Como podemos te ajudar?</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Descreva brevemente sua necessidade (ex: Gestão de agenda para consultório médico)"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-3 text-lg"
                  >
                    <MessageCircle size={22} />
                    Iniciar Conversa no WhatsApp
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};