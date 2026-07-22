export default function Inside() {
  return (
    <section className="section inside" id="espaco" aria-labelledby="inside-title">
      <div className="site-container inside-grid">
        <div className="section-copy">
          <span className="eyebrow">NOSSO ESPAÇO</span>
          <h2 id="inside-title">Um ambiente preparado para cuidar de você</h2>
          <p>Cada detalhe da Farmácia Nogueira Tanguá foi pensado para oferecer uma experiência mais confortável, segura e próxima para nossos clientes.</p>
          <ul className="feature-list">
            <li><strong>Cuidado próximo</strong><span>Atendimento realizado por profissionais que valorizam cada cliente e sua história.</span></li>
            <li><strong>Estrutura moderna</strong><span>Um ambiente organizado e preparado para oferecer conforto, segurança e confiança.</span></li>
          </ul>
        </div>
        <figure className="inside-image">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=85"
            alt="Interior moderno de uma farmácia"
            width="1200"
            height="960"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
