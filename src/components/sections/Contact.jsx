import { MapPinned, MessageCircle, Phone } from "lucide-react";

const phone = "5541996330476";
const mapUrl = "https://maps.google.com/?q=Farmácia+Nogueira+Tanguá";

export default function Contact() {
  return (
    <section className="section contact" id="contato" aria-labelledby="contact-title">
      <div className="site-container contact-grid">
        <div className="section-copy">
          <span className="eyebrow">FALE CONOSCO</span>
          <h2 id="contact-title">Estamos prontos para cuidar de você.</h2>
          <p>Entre em contato com a Farmácia Nogueira Tanguá. Nossa equipe está à disposição.</p>
          <p className="contact-business">Farmácia Nogueira Tanguá<br />Atendimento próximo e humanizado para sua família.</p>
        </div>
        <div className="contact-actions" aria-label="Canais de contato">
          <a href={`https://wa.me/${phone}`} className="contact-action" target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /><span><strong>WhatsApp</strong><small>Fale com a nossa equipe</small></span>
          </a>
          <a href={`tel:+${phone}`} className="contact-action">
            <Phone aria-hidden="true" /><span><strong>Telefone</strong><small>(41) 99633-0476</small></span>
          </a>
          <a href={mapUrl} className="contact-action" target="_blank" rel="noopener noreferrer">
            <MapPinned aria-hidden="true" /><span><strong>Localização</strong><small>Como chegar até nós</small></span>
          </a>
        </div>
      </div>
    </section>
  );
}
