import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook, MessageSquare, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Arizon<span>.</span>
            </Link>
            <p className="footer-desc">
              Impulsionando a presença digital de negócios locais com estratégia, design e tecnologia.
            </p>
            <div className="social-links">
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Facebook size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/como-funciona">Como funciona</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Serviços</h4>
            <ul>
              <li><Link to="/servicos">Sites Profissionais</Link></li>
              <li><Link to="/servicos">Google Meu Negócio</Link></li>
              <li><Link to="/servicos">SEO Local</Link></li>
              <li><Link to="/servicos">Tráfego Pago</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <div className="contact-item">
              <MessageSquare size={16} />
              <a href="https://wa.me/5515996197691">(15) 99619-7691</a>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <a href="mailto:contato@arizon.com.br">contato@arizon.com.br</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Arizon. Todos os direitos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
