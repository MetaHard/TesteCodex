import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, MapPin, Users, Target, Zap, BarChart3, ArrowRight } from 'lucide-react'

const Services = () => {
  const allServices = [
    {
      id: 'site',
      icon: <Globe size={32} />,
      title: 'Site Profissional',
      problem: 'Seu concorrente tem um site moderno e você não.',
      included: [
        'Design Mobile-First (específico para celular)',
        'Otimização de velocidade (carregamento ultra-rápido)',
        'Botões de WhatsApp estratégicos',
        'Indexação imediata no Google'
      ],
      forWho: 'Empresas que querem profissionalizar sua imagem e converter visitantes em leads.'
    },
    {
      id: 'gnm',
      icon: <MapPin size={32} />,
      title: 'Google Meu Negócio',
      problem: 'Sua empresa não aparece no mapa quando alguém busca por perto.',
      included: [
        'Otimização completa do perfil (SEO Local)',
        'Gestão de avaliações e fotos',
        'Postagens semanais no perfil',
        'Relatórios de visualizações e chamadas'
      ],
      forWho: 'Negócios físicos como clínicas, escritórios, lojas e restaurantes.'
    },
    {
      id: 'social',
      icon: <Users size={32} />,
      title: 'Redes Sociais',
      problem: 'Perfil abandonado ou com posts que não geram autoridade.',
      included: [
        'Estratégia de conteúdo mensal',
        'Design profissional para posts e stories',
        'Copywriting focado em engajamento',
        'Análise de métricas e performance'
      ],
      forWho: 'Qualquer negócio que precise manter um relacionamento ativo com o cliente.'
    },
    {
      id: 'seo',
      icon: <Target size={32} />,
      title: 'SEO Local',
      problem: 'Você só aparece no Google se pagar anúncios.',
      included: [
        'Pesquisa de palavras-chave da sua região',
        'Otimização técnica do site',
        'Criação de conteúdo para blog (SEO)',
        'Estratégia de Link Building regional'
      ],
      forWho: 'Negócios que buscam sustentabilidade e tráfego orgânico a longo prazo.'
    },
    {
      id: 'ads',
      icon: <Zap size={32} />,
      title: 'Tráfego Pago',
      problem: 'Preciso de clientes hoje, não posso esperar meses.',
      included: [
        'Gestão de Google Ads (Rede de pesquisa)',
        'Meta Ads (Instagram e Facebook)',
        'Segmentação por raio de km do seu negócio',
        'Acompanhamento diário de ROI'
      ],
      forWho: 'Empresas que querem acelerar o faturamento e escalar vendas.'
    },
    {
      id: 'analytics',
      icon: <BarChart3 size={32} />,
      title: 'Análise de Dados',
      problem: 'Não sei de onde vêm meus clientes nem qual canal funciona.',
      included: [
        'Configuração de Google Analytics 4',
        'Pixel do Meta instalado e testado',
        'Dashboard de resultados simplificado',
        'Reunião mensal de consultoria estratégica'
      ],
      forWho: 'Empresários que querem profissionalizar a tomada de decisão.'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container text-center">
          <span className="badge mb-s3">Nossos Serviços</span>
          <h1 className="mb-s3">Soluções estruturadas para acelerar seu negócio</h1>
          <p className="max-w-600 mx-auto">Não vendemos apenas serviços digitais. Entregamos processos que transformam a forma como sua empresa é encontrada na internet.</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-expanded-grid">
            {allServices.map((service, i) => (
              <div key={i} className="service-expanded-card">
                <div className="card-header">
                  <div className="service-icon-box">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <div className="card-body">
                  <div className="problem-tag">
                    <strong>O problema:</strong> {service.problem}
                  </div>
                  <div className="included-section">
                    <h4>O que está incluído:</h4>
                    <ul>
                      {service.included.map((item, idx) => (
                        <li key={idx}><ArrowRight size={14} className="text-purple" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="for-who">
                    <strong>Para quem é:</strong> {service.forWho}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-box text-center">
            <h2>Não sabe por onde começar?</h2>
            <p className="mb-s4">Agende uma conversa gratuita de 15 minutos para avaliarmos sua presença digital.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/5515996197691" className="btn btn-primary">
                Falar no WhatsApp
              </a>
              <Link to="/contato" className="btn btn-outline" style={{ marginLeft: '16px' }}>
                Solicitar E-mail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
