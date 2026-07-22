import pharmacyInterior from "../../assets/images/espaco-farmacia.png";

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
            src={pharmacyInterior}
            alt="Interior da Farmácia Nogueira Tanguá"
            width="941"
            height="768"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
