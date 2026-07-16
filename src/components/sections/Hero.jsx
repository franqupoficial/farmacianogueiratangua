import "../../styles/hero.css";
import heroImage from "../../assets/images/hero-farmacia.jpg";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div>

          <span className="hero-tag">
            FARMÁCIA NOGUEIRA TANGUÁ
          </span>

          <h1 className="hero-title">
            Sua saúde merece cuidado de verdade.
          </h1>

          <p className="hero-text">
            Uma farmácia completa em Almirante Tamandaré,
            com atendimento farmacêutico humanizado,
            estética avançada e soluções modernas para
            cuidar da sua família.
          </p>

        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Farmácia Nogueira Tanguá"
          />
        </div>

      </div>

    </section>
  );
}
