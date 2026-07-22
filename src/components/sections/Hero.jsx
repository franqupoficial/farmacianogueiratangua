import pharmacyFacade from "../../assets/images/farmacia-nogueira.png";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="site-container hero-container">
        <div className="hero-content">
          <span className="eyebrow">FARMÁCIA NOGUEIRA TANGUÁ</span>
          <h1 id="hero-title">Sua saúde merece cuidado de verdade.</h1>
          <p>Uma farmácia completa em Almirante Tamandaré, com atendimento farmacêutico humanizado, estética avançada e soluções modernas para cuidar da sua família.</p>
          <div className="hero-buttons">
            <a href="#contato" className="button button--primary">Fale conosco</a>
            <a href="#servicos" className="button button--secondary">Conheça nossos serviços</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={pharmacyFacade}
            alt="Fachada da Farmácia Nogueira Tanguá"
            width="1024"
            height="683"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
