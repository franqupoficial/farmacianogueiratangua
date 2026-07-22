import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";

const teamValues = [
  {
    title: "Atendimento próximo",
    text: "Uma equipe pronta para ouvir, orientar e tornar cada visita mais simples e acolhedora.",
    icon: HeartHandshake,
  },
  {
    title: "Orientação responsável",
    text: "Cuidado e informação para que você tenha mais segurança nas suas escolhas de saúde.",
    icon: Stethoscope,
  },
  {
    title: "Confiança todos os dias",
    text: "Compromisso com um atendimento respeitoso, produtos de qualidade e bem-estar para sua família.",
    icon: ShieldCheck,
  },
];

export default function Owners() {
  return (
    <section className="section team" aria-labelledby="team-title">
      <div className="site-container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">NOSSA EQUIPE</span>
          <h2 id="team-title">Profissionais que cuidam de você</h2>
          <p>Em cada atendimento, você encontra atenção, orientação e cuidado de verdade.</p>
        </div>
        <div className="team-grid">
          {teamValues.map(({ title, text, icon: Icon }) => (
            <article className="team-card" key={title}>
              <span className="team-card__icon" aria-hidden="true"><Icon size={32} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
