import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, MapPin, Users, Target, Zap, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import heroMockup from '../assets/hero_mockup.png'

const Home = () => {
  const services = [
    { icon: <Globe size={24} />, title: 'Site Profissional', desc: 'Sua vitrine 24h por dia.' },
    { icon: <MapPin size={24} />, title: 'Google Meu Negócio', desc: 'Apareça para quem busca perto.' },
    { icon: <Users size={24} />, title: 'Redes Sociais', desc: 'Relacionamento e autoridade.' },
    { icon: <Target size={24} />, title: 'SEO Local', desc: 'Ranquear no topo da sua região.' },
    { icon: <Zap size={24} />, title: 'Tráfego Pago', desc: 'Resultados rápidos e escaláveis.' },
    { icon: <BarChart3 size={24} />, title: 'Análises', desc: 'Dados reais para decisões certas.' },
  ]

  const process = [
    { step: '01', title: 'Diagnóstico', desc: 'Analisamos sua presença atual e a concorrência.' },
    { step: '02', title: 'Estratégia', desc: 'Plano de ação sob medida para seu negócio.' },
    { step: '03', title: 'Execução', desc: 'Implementação técnica e design de alta conversão.' },
    { step: '04', title: 'Crescimento', desc: 'Otimização contínua focada em resultados.' },
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.span 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="badge mb-s3"
            >
              Presença Digital Estratégica
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-s3"
            >
              Seu negócio local <span className="text-purple">merece</span> estar no topo.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-s4"
            >
              Não somos apenas uma agência. Somos seu braço direito na conquista de clientes online. Criamos sites e estratégias focadas exclusivamente em negócios locais.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-btns"
            >
              <a href="https://wa.me/5515996197691" className="btn btn-primary">
                Quero aparecer no Google
                <ArrowRight size={18} style={{ marginLeft: '12px' }} />
              </a>
              <Link to="/servicos" className="btn btn-outline" style={{ marginLeft: '16px' }}>
                Ver serviços
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-visual"
          >
            <div className="mockup-container">
              <img src={heroMockup} alt="Arizon Local Website Mockup" className="hero-mockup-img" />
              <div className="google-badge">
                <div className="google-icon">G</div>
                <div>
                  <div className="badge-title">SEO Local</div>
                  <div className="badge-stars">★★★★★</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="problems-section">
        <div className="container">
          <div className="section-header text-center mb-s7">
            <h2 className="mb-s2">Reconhece algum desses problemas?</h2>
            <p>Se você se identifica, a Arizon foi feita para você.</p>
          </div>
          <div className="problems-grid">
            {[
              "Meu concorrente aparece no Google. Eu não.",
              "Tenho um bom negócio mas ninguém me encontra online.",
              "Já tentei fazer eu mesmo e não funcionou."
            ].map((problem, i) => (
              <div key={i} className="problem-card">
                <div className="problem-icon">!</div>
                <p>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="container">
          <div className="section-header mb-s7">
            <span className="badge mb-s2">Nossas Soluções</span>
            <h2 className="mb-s3">A Arizon existe para resolver isso.</h2>
            <p>Foco total em converter visitantes em clientes reais.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/servicos" className="service-link">
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-s6">
            <Link to="/servicos" className="btn btn-outline">Ver todos os serviços</Link>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="process-wrapper">
            <div className="process-content">
              <span className="badge mb-s2">Metodologia</span>
              <h2 className="mb-s3">Do diagnóstico ao resultado.</h2>
              <p className="mb-s4">Nosso processo é estruturado para garantir que cada etapa contribua para o crescimento do seu negócio.</p>
              <div className="btn-group">
                <Link to="/como-funciona" className="btn btn-primary">Entenda o processo</Link>
              </div>
            </div>
            <div className="process-steps">
              {process.map((p, i) => (
                <div key={i} className="process-item">
                  <div className="p-number">{p.step}</div>
                  <div className="p-text">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Pronto para aparecer onde seus clientes buscam?</h2>
              <p>Vamos transformar sua presença digital em uma máquina de vendas.</p>
              <div className="cta-btns">
                <a href="https://wa.me/5515996197691" className="btn btn-primary">
                  Falar no WhatsApp
                </a>
                <Link to="/contato" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                  Solicitar E-mail
                </Link>
              </div>
              <p className="cta-footer">Sem urgência falsa. Apenas um diagnóstico honesto.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
