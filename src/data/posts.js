export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'como-aparecer-google-maps',
    title: 'Como aparecer no Google Maps: Guia completo para negócios locais',
    excerpt: 'Descubra as estratégias essenciais para colocar sua empresa no mapa e atrair clientes da sua região.',
    category: 'Google Meu Negócio',
    date: '15 Mar 2024',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>Por que o Google Maps é vital para seu negócio?</h2>
      <p>Se você tem um estabelecimento físico ou atende uma região específica, o Google Maps não é apenas um mapa — é a principal porta de entrada para novos clientes. Quando alguém pesquisa "Padaria perto de mim" ou "Advogado em [Sua Cidade]", o Google prioriza o 'Local Pack', aquele quadro com o mapa e os três principais resultados.</p>
      
      <h2>1. Reivindique e Verifique sua Empresa</h2>
      <p>O primeiro passo é garantir que o perfil pertence a você. Acesse o Google Business Profile e siga o processo de verificação, que geralmente envolve o recebimento de um código via correio ou telefone.</p>
      
      <h2>2. Otimize as Informações de Contato (NAP)</h2>
      <p>NAP significa Name, Address, Phone (Nome, Endereço e Telefone). Essas informações devem ser IDÊNTICAS em todo o seu site, redes sociais e diretórios. O Google valoriza a consistência.</p>
      
      <h3>3. Consiga Avaliações Reais</h3>
      <p>Avaliações positivas e constantes são o maior fator de ranqueamento local. Incentive seus clientes satisfeitos a deixarem um comentário. Responda a TODOS, inclusive os negativos, com profissionalismo.</p>
      
      <h2>Conclusão</h2>
      <p>Estar no Google Maps exige manutenção. Poste fotos novas toda semana, use a ferramenta de 'Novidades' e mantenha seus horários sempre atualizados, especialmente em feriados.</p>
    `
  },
  {
    id: '2',
    slug: 'checklist-site-negocio-local',
    title: 'Checklist: o que todo negócio local precisa ter online',
    excerpt: 'Não basta ter um site. Ele precisa converter. Veja os elementos obrigatórios para seu site dar resultado.',
    category: 'Sites',
    date: '10 Mar 2024',
    readingTime: '6 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>O básico não é mais o suficiente</h2>
      <p>Muitos empresários locais criam sites que parecem cartões de visita estáticos. Em 2024, seu site precisa ser uma ferramenta de vendas ativa.</p>
      
      <ul>
        <li><strong>Botão de WhatsApp Flutuante:</strong> 80% das conversões locais acontecem via chat.</li>
        <li><strong>Velocidade de Carregamento:</strong> Se o site demora mais de 3 segundos, você perdeu o cliente.</li>
        <li><strong>Provas Sociais:</strong> Depoimentos e logotipos de parceiros geram confiança imediata.</li>
        <li><strong>Formulários Curtos:</strong> Peça apenas o essencial para o primeiro contato.</li>
      </ul>
      
      <p>Se o seu site atual não tem esses elementos, você está deixando dinheiro na mesa.</p>
    `
  },
  {
    id: '3',
    slug: 'por-que-site-nao-aparece-google',
    title: 'Por que seu site não aparece no Google: 5 motivos comuns',
    excerpt: 'Seu site está no ar mas ninguém encontra? Identificamos os erros técnicos que estão te escondendo.',
    category: 'SEO Local',
    date: '05 Mar 2024',
    readingTime: '10 min',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>1. Falta de Indexação</h2>
      <p>Às vezes, o robô do Google nem sabe que seu site existe. Use o Google Search Console para enviar seu sitemap.</p>
      
      <h2>2. Conteúdo Duplicado ou Pobre</h2>
      <p>Se o seu texto foi copiado de outro lugar, o Google vai te penalizar. O conteúdo deve ser original e útil para o usuário.</p>
      
      <h2>3. Ausência de Palavras-Chave Locais</h2>
      <p>Se você é um dentista em Curitiba, mas seu site não diz "Dentista em Curitiba", como o Google vai saber?</p>
    `
  }
];
