import { HeartPulse, Users } from "lucide-react";

const owners = [
  {
    name: "Márcio Nogueira",
    role: "Farmacêutico | Empresário | Cursando Medicina",
    text: "Atua unindo conhecimento farmacêutico, gestão e dedicação para oferecer um atendimento seguro e de excelência aos clientes.",
    icon: HeartPulse,
  },
  {
    name: "Rúbia Nogueira",
    role: "Proprietária",
    text: "Faz parte da história e da gestão da Farmácia Nogueira Tanguá.",
    icon: Users,
  },
];

export default function Owners() {
  return (
    <section className="section team" aria-labelledby="team-title">
      <div className="site-container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">NOSSA EQUIPE</span>
          <h2 id="team-title">Profissionais que cuidam de você</h2>
        </div>
        <div className="team-grid">
          {owners.map(({ name, role, text, detail, icon: Icon }) => (
            <article className="team-card" key={name}>
              <span className="team-card__icon" aria-hidden="true"><Icon size={32} /></span>
              <h3>{name}</h3>
              <p className="team-card__role">{role}</p>
              <p>{text}</p>
              {detail && <p className="team-card__detail">{detail}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
