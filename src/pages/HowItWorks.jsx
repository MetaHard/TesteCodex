import React, { useState } from 'react'

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Diagnóstico Inicial',
      desc: 'Analisamos profundamente sua presença digital atual, seus concorrentes diretos e identificamos as maiores oportunidades de crescimento na sua região.',
      arizon: ' Auditoria técnica, pesquisa de palavras-chave locais e análise de performance.',
      client: ' Preencher um breve questionário e fornecer acessos (Google, Redes Sociais).'
    },
    {
      id: '02',
      title: 'Desenho da Estratégia',
      desc: 'Com base nos dados, criamos um plano de ação personalizado. Definimos as prioridades: é um novo site? Otimizar o Google Maps? Tráfego Pago?',
      arizon: ' Planejamento estratégico, definição de KPI (indicadores) e cronograma de 7 a 30 dias.',
      client: ' Aprovação da estratégia e materiais de apoio (logo, fotos).'
    },
    {
      id: '03',
      title: 'Execução e Lançamento',
      desc: 'Nossa equipe técnica e criativa entra em campo. Sites são construídos, campanhas são configuradas e o Google Meu Negócio é turbinado.',
      arizon: ' Design, copywriting, SEO on-page e configuração técnica completa.',
      client: ' Revisão final e feedback sobre os materiais criados.'
    },
    {
      id: '04',
      title: 'Otimização e Escala',
      desc: 'O trabalho não termina no lançamento. Monitoramos os leads, ajustamos os anúncios e refinamos o conteúdo para que o resultado cresça mês a mês.',
      arizon: ' Monitoramento diário, ajustes técnicos e reuniões mensais de progresso.',
      client: ' Acompanhar os relatórios e atender os novos leads que chegam.'
    }
  ]

  const faqs = [
    { q: 'Quanto tempo leva para ver resultados?', a: 'Depende do serviço. Anúncios (Tráfego Pago) podem gerar leads em 24-48 horas. Estratégias orgânicas (SEO/Google Maps) costumam levar de 3 a 6 meses para consolidar no topo.' },
    { q: 'Preciso me envolver muito no processo?', a: 'Nosso objetivo é tirar o peso do marketing das suas costas. Precisamos da sua participação ativa apenas nas etapas iniciais de diagnóstico e aprovação de materiais. O restante é conosco.' },
    { q: 'Existe fidelidade nos contratos?', a: 'Acreditamos em resultados, não em amarras. Trabalhamos com contratos mensais flexíveis. Você continua conosco porque vê valor e ROI.' },
    { q: 'Atendem qualquer tipo de negócio?', a: 'Nosso foco é exclusivamente Negócios Locais: Clínicas, Escritórios, Restaurantes, Prestadores de Serviços e Comércio Regional.' }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="how-it-works-page">
      <section className="how-hero">
        <div className="container text-center">
          <span className="badge mb-s3">Nossa Metodologia</span>
          <h1 className="mb-s3">Do diagnóstico ao resultado — sem complicação</h1>
          <p className="max-w-600 mx-auto">Um processo transparente e estruturado para que você saiba exatamente o que está sendo feito pelo seu negócio.</p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="timeline-wrapper">
            {steps.map((step, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">
                  <div className="dot-inner">{step.id}</div>
                </div>
                <div className="timeline-content">
                  <div className="content-inner">
                    <h3>{step.title}</h3>
                    <p className="mb-s4">{step.desc}</p>
                    <div className="responsibilities">
                      <div className="resp-box arizon-resp">
                        <strong>Arizon faz:</strong> {step.arizon}
                      </div>
                      <div className="resp-box client-resp">
                        <strong>Você faz:</strong> {step.client}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center mb-s7">
            <h2 className="mb-s3">Perguntas Frequentes Reais</h2>
            <p>Tudo o que você precisa saber antes de começarmos.</p>
          </div>
          <div className="faq-wrapper max-w-700 mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-cta text-center">
        <div className="container">
          <div className="cta-highlight">
            <h2>Pronto para começar?</h2>
            <p className="mb-s4">Vamos analisar sua presença digital hoje mesmo e traçar o melhor caminho.</p>
            <a href="https://wa.me/5500000000000" className="btn btn-primary">Agendar conversa gratuita</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
