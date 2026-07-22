import { HeartPulse, Pill, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  { title: "Medicamentos", text: "Grande variedade de medicamentos com orientação farmacêutica para cuidar da sua saúde.", icon: Pill },
  { title: "Atendimento Farmacêutico", text: "Profissionais preparados para orientar você com segurança e confiança.", icon: ShieldCheck },
  { title: "Perfumaria e Beleza", text: "Produtos para cuidados pessoais, higiene e bem-estar.", icon: Sparkles },
  { title: "Saúde e Bem-estar", text: "Soluções completas para cuidar de você e da sua família.", icon: HeartPulse },
];

export default function Services() {
  return (
    <section className="section services" id="servicos" aria-labelledby="services-title">
      <div className="site-container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">NOSSOS SERVIÇOS</span>
          <h2 id="services-title">Tudo para cuidar da sua saúde em um só lugar.</h2>
          <p>Oferecemos produtos e serviços com qualidade, segurança e atendimento humanizado.</p>
        </div>
        <div className="services-grid">
          {services.map(({ title, text, icon: Icon }) => (
            <article className="service-card" key={title}>
              <span className="service-card__icon" aria-hidden="true"><Icon size={27} strokeWidth={2} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
