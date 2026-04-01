import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { ArrowLeft, Clock, Calendar, MessageSquare, Mail } from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()
  const [openFaq, setOpenFaq] = useState(null)
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Artigo não encontrado</h2>
        <Link to="/blog" className="btn btn-primary mt-s4">Voltar ao Blog</Link>
      </div>
    )
  }

  const relatedPosts = posts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <article className="blog-post-page">
      {/* Post Header */}
      <header className="post-header">
        <div className="container max-w-800">
          <Link to="/blog" className="back-link mb-s4">
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>
          <span className="badge mb-s3">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="meta-item"><Calendar size={14} /> {post.date}</span>
            <span className="meta-item"><Clock size={14} /> {post.readingTime} de leitura</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="post-hero-image">
        <div className="container max-w-1000">
          <img src={post.image} alt={post.title} className="hero-img" />
        </div>
      </div>

      {/* Post Content */}
      <section className="post-body">
        <div className="container max-w-800">
          <div className="content-render" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* Post Footer CTA */}
          <div className="post-cta-card">
            <h3>Precisa de ajuda para aplicar isso no seu negócio?</h3>
            <p>Nossos especialistas podem desenhar uma estratégia personalizada para você.</p>
            <div className="post-cta-btns">
              <a href="https://wa.me/5515996197691" className="btn btn-primary">
                <MessageSquare size={18} style={{ marginRight: '8px' }} /> Falar no WhatsApp
              </a>
              <Link to="/contato" className="btn btn-outline">
                <Mail size={18} style={{ marginRight: '8px' }} /> Solicitar Diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="related-posts">
        <div className="container max-w-1000">
          <h2 className="mb-s5">Artigos Relacionados</h2>
          <div className="blog-grid">
            {relatedPosts.map((related) => (
              <div key={related.id} className="blog-card mini">
                <Link to={`/blog/${related.slug}`} className="card-image mini">
                  <img src={related.image} alt={related.title} />
                </Link>
                <div className="card-content">
                  <div className="card-meta">
                    <span>{related.date}</span>
                  </div>
                  <Link to={`/blog/${related.slug}`}>
                    <h4>{related.title}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </article>
  )
}

export default BlogPost
