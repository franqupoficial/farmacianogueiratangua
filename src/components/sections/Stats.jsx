const pillars = [
  ["Atendimento farmacêutico", "Orientação profissional para cuidar da sua saúde com mais segurança."],
  ["Conhecimento e experiência", "Uma equipe preparada para oferecer um atendimento próximo e qualificado."],
  ["Compromisso com pessoas", "Relacionamento, confiança e cuidado em todos os momentos."],
];

export default function Stats() {
  return (
    <section className="section essence" aria-labelledby="essence-title">
      <div className="site-container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">NOSSA ESSÊNCIA</span>
          <h2 id="essence-title">Cuidado que gera confiança</h2>
        </div>
        <div className="essence-grid">
          {pillars.map(([title, text], index) => (
            <article className="essence-item" key={title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
