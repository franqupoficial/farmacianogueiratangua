import { Star } from "lucide-react";

const reviews = [
  { name: "Maria Silva", text: "Excelente atendimento. A equipe sempre orienta com muita atenção e cuidado." },
  { name: "João Pereira", text: "Farmácia muito organizada, ambiente agradável e profissionais excelentes." },
  { name: "Ana Souza", text: "Sempre encontro o que preciso e sou atendida muito bem." },
];

export default function Reviews() {
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="site-container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">AVALIAÇÕES</span>
          <h2 id="reviews-title">O que nossos clientes dizem</h2>
          <p>A confiança dos nossos clientes é o que nos motiva a oferecer sempre o melhor atendimento.</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-card__stars" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={17} fill="currentColor" aria-hidden="true" />)}
              </div>
              <p>“{review.text}”</p>
              <footer className="review-card__author">
                <span aria-hidden="true">{review.name.charAt(0)}</span>
                <strong>{review.name}</strong>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
