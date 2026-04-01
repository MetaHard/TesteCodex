import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Serviços', path: '/servicos' },
    { name: 'Como funciona', path: '/como-funciona' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          Arizon<span>.</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/5515996197691" className="btn btn-primary btn-cta">
            <MessageSquare size={18} style={{ marginRight: '8px' }} />
            Falar com especialista
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`burger ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
