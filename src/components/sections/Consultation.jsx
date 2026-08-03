import { useState } from "react";

const WHATSAPP_NUMBER = "5541996330476";

const weekendOptions = [
  { value: "Proximo sabado", label: "Próximo sábado" },
  { value: "Proximo domingo", label: "Próximo domingo" },
  { value: "Qualquer final de semana deste mes", label: "Qualquer final de semana deste mês" },
  { value: "A combinar", label: "A combinar" },
];

const initialForm = {
  name: "",
  phone: "",
  weekend: "Proximo sabado",
  reason: "",
};

function buildWhatsAppUrl(form) {
  const lines = [
    "Ola! Gostaria de consultar horario de atendimento medico com o Dr. Marcio.",
    "",
    `*Nome:* ${form.name.trim()}`,
    `*Telefone:* ${form.phone.trim()}`,
    `*Preferencia de final de semana:* ${form.weekend}`,
  ];

  if (form.reason.trim()) {
    lines.push(`*Motivo da consulta:* ${form.reason.trim()}`);
  }

  lines.push("", "Poderiam me informar os horarios disponiveis?");

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function Consultation() {
  const [form, setForm] = useState(initialForm);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section consultation" id="consulta" aria-labelledby="consultation-title">
      <div className="site-container consultation-grid">
        <div className="section-copy">
          <span className="eyebrow">CONSULTA MÉDICA</span>
          <h2 id="consultation-title">Atendimento com o Dr. Márcio</h2>
          <p>
            O Dr. Márcio realiza consultas médicas em alguns finais de semana na Farmácia Nogueira Tanguá.
            Preencha o formulário e consulte os horários disponíveis pelo WhatsApp.
          </p>
          <ul className="consultation-highlights">
            <li>Consultas em finais de semana selecionados</li>
            <li>Atendimento na própria farmácia</li>
            <li>Retorno rápido pelo WhatsApp</li>
          </ul>
        </div>

        <form className="consultation-form" onSubmit={handleSubmit} noValidate>
          <div className="consultation-field">
            <label htmlFor="consulta-nome">Nome completo</label>
            <input
              id="consulta-nome"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Seu nome"
              value={form.name}
              onChange={updateField("name")}
            />
          </div>

          <div className="consultation-field">
            <label htmlFor="consulta-telefone">Telefone / WhatsApp</label>
            <input
              id="consulta-telefone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              inputMode="tel"
              placeholder="(41) 99999-9999"
              value={form.phone}
              onChange={updateField("phone")}
            />
          </div>

          <div className="consultation-field">
            <label htmlFor="consulta-fim-de-semana">Preferência de final de semana</label>
            <select
              id="consulta-fim-de-semana"
              name="weekend"
              value={form.weekend}
              onChange={updateField("weekend")}
            >
              {weekendOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="consultation-field">
            <label htmlFor="consulta-motivo">Motivo da consulta <span>(opcional)</span></label>
            <textarea
              id="consulta-motivo"
              name="reason"
              rows="3"
              placeholder="Descreva brevemente o motivo"
              value={form.reason}
              onChange={updateField("reason")}
            />
          </div>

          <button className="button button--primary consultation-submit" type="submit">
            Consultar horário
          </button>
          <p className="consultation-note">
            Ao clicar, você será direcionado ao WhatsApp da farmácia com seus dados preenchidos.
          </p>
        </form>
      </div>
    </section>
  );
}
