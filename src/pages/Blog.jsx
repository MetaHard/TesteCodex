import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const categories = ['Todos', ...new Set(posts.map(p => p.category))]

  const filteredPosts = activeCategory === 'Todos' 
    ? posts 
    : posts.filter(p => p.category === activeCategory)

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container text-center">
          <span className="badge mb-s3">Blog Arizon</span>
          <h1 className="mb-s3">Conteúdo para quem quer crescer online</h1>
          <p className="max-w-600 mx-auto">Estratégias reais de presença digital, sem enrolação, direto ao ponto para o seu negócio local.</p>
        </div>
      </section>

      <section className="blog-list">
        <div className="container">
          <div className="blog-filters mb-s6">
            <div className="filter-group">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link to={`/blog/${post.slug}`} className="card-image">
                  <img src={post.image} alt={post.title} />
                  <span className="card-badge">{post.category}</span>
                </Link>
                <div className="card-content">
                  <div className="card-meta">
                    <span>{post.date}</span>
                    <span className="dot">•</span>
                    <span className="reading-time"><Clock size={14} /> {post.readingTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="read-more">
                    Ler artigo <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-footer-cta">
        <div className="container">
          <div className="blog-cta-box">
            <div className="cta-text">
              <h3>Quer saber como isso se aplica ao seu negócio?</h3>
              <p>Solicite um diagnóstico inicial gratuito da sua presença digital.</p>
            </div>
            <Link to="/contato" className="btn btn-primary">Falar com especialista</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
