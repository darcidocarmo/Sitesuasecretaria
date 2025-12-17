import React from "react";

export function Contact() {
  return (
    <section id="contato" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
          Fale conosco
        </h2>

        <p className="text-slate-600 text-center mb-10">
          Preencha o formul�rio e entraremos em contato o mais breve poss�vel.
        </p>

        <form
          action="https://formsubmit.co/suasecretariavirtual@outlook.com"
          method="POST"
          className="space-y-6"
        >
          {/* Configura��es do FormSubmit */}
          <input
            type="hidden"
            name="_subject"
            value="Novo contato pelo site - Sua Secret�ria Virtual"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* Honeypot anti-spam */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Seu nome"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="seu@email.com"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Telefone / WhatsApp
            </label>
            <input
              type="tel"
              name="telefone"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="(00) 00000-0000"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Conte um pouco sobre sua necessidade"
            />
          </div>

          {/* Bot�o */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3 text-white font-semibold hover:bg-sky-600 transition"
          >
            Enviar mensagem
          </button>
        </form>

        <p className="text-xs text-slate-500 text-center mt-6">
          Seus dados ser�o utilizados apenas para retorno do contato.
        </p>
      </div>
    </section>
  );
}
