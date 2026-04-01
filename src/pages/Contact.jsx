import React from 'react'
import { MessageSquare, Mail, Send, CheckCircle2 } from 'lucide-react'

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container text-center">
          <span className="badge mb-s3">Contato</span>
          <h1 className="mb-s3">Fale com a Arizon</h1>
          <p className="max-w-600 mx-auto">Sem formulário complicado. Escolha como prefere iniciar seu diagnóstico gratuito.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-blocks">
              <a href="https://wa.me/5500000000000" className="contact-block-card wa-card">
                <div className="block-icon"><MessageSquare size={32} /></div>
                <h3>WhatsApp</h3>
                <p>Número direto para falar com um especialista agora mesmo.</p>
                <div className="block-status">Resposta em até 2h em dias úteis</div>
                <span className="block-link">Abrir conversa WhatsApp</span>
              </a>

              <a href="mailto:contato@arizon.com.br" className="contact-block-card mail-card">
                <div className="block-icon"><Mail size={32} /></div>
                <h3>E-mail</h3>
                <p>Para propostas formais ou dúvidas detalhadas.</p>
                <div className="block-status">Respondemos em até 24h</div>
                <span className="block-link">Enviar e-mail para a Arizon</span>
              </a>
            </div>

            <div className="contact-form-container">
              <div className="form-card">
                <h3>Prefere que a gente entre em contato?</h3>
                <form className="simple-form">
                  <div className="form-group">
                    <label>Seu nome</label>
                    <input type="text" placeholder="Como podemos te chamar?" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>E-mail</label>
                      <input type="email" placeholder="seu@email.com" required />
                    </div>
                    <div className="form-group">
                      <label>WhatsApp</label>
                      <input type="tel" placeholder="(00) 00000-0000" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Tipo de negócio</label>
                    <select required>
                      <option value="">Selecione uma opção</option>
                      <option value="clinica">Clínica / Saúde</option>
                      <option value="restaurante">Restaurante / Alimentação</option>
                      <option value="servicos">Prestação de Serviços</option>
                      <option value="varejo">Varejo Local</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mensagem (opcional)</label>
                    <textarea placeholder="Conte um pouco sobre seu desafio..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Enviar mensagem <Send size={18} style={{ marginLeft: '12px' }} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expect-section">
        <div className="container">
          <div className="expect-card">
            <h2 className="mb-s4 text-center">O que acontece depois do contato?</h2>
            <div className="expect-grid">
              <div className="expect-item">
                <CheckCircle2 size={24} className="text-purple" />
                <p>Você receberá um diagnóstico inicial da sua presença digital atual.</p>
              </div>
              <div className="expect-item">
                <CheckCircle2 size={24} className="text-purple" />
                <p>Nenhuma venda agressiva. Apenas foco em resolver seus problemas.</p>
              </div>
              <div className="expect-item">
                <CheckCircle2 size={24} className="text-purple" />
                <p>Uma proposta personalizada que cabe no seu momento de negócio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
