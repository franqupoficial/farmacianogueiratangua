export default function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <div className="site-container about-grid">
        <div className="section-copy">
          <span className="eyebrow">SOBRE A FARMÁCIA NOGUEIRA</span>
          <h2 id="about-title">Cuidado que vai além do medicamento.</h2>
          <p>A Farmácia Nogueira Tanguá nasceu com um propósito: oferecer uma experiência de saúde mais próxima, segura e humana para cada pessoa.</p>
          <p>Unimos conhecimento farmacêutico, atendimento personalizado e inovação para cuidar da sua família.</p>
          <p>Mais do que entregar produtos, buscamos entregar confiança, orientação e cuidado em todos os momentos.</p>
        </div>
        <aside className="mission-card" aria-label="Nossa missão">
          <span className="mission-card__icon" aria-hidden="true">+</span>
          <h3>Nossa missão</h3>
          <p>Promover saúde e bem-estar através de um atendimento humanizado, produtos de qualidade e profissionais preparados para ajudar você.</p>
        </aside>
      </div>
    </section>
  );
}
