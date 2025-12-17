import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/suasecretariavirtual@outlook.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `Novo Contato Site: ${formData.name}`,
          _template: 'table', // Formats the email nicely
          _captcha: 'false'   // Disables captcha to keep it simple (optional)
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo WhatsApp.");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
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
                  Preencha o formulário e receba uma proposta personalizada para a sua necessidade em até 24 horas.
                </p>
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                <p><strong>Dica:</strong> Detalhe qual a sua maior dificuldade hoje (ex: agenda, financeiro) para sermos mais assertivos.</p>
              </div>
            </div>

            <div className="md:col-span-3 p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Mensagem Enviada!</h3>
                  <p className="text-gray-600 mb-6">Recebemos seu contato e retornaremos em breve.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Enviar nova mensagem
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
                      placeholder="Seu nome"
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Gostaria de saber mais sobre..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Proposta
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  
                  {/* Honeypot field for simple spam protection (hidden) */}
                  <input type="text" name="_honey" style={{display: 'none'}} />
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};