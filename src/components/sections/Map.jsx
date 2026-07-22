import { MapPin } from "lucide-react";

export default function Map() {
  return (
    <section className="section map-section" aria-labelledby="map-title">
      <div className="site-container map-grid">
        <div className="section-copy">
          <span className="eyebrow">LOCALIZAÇÃO</span>
          <h2 id="map-title">Estamos perto de você</h2>
          <address>
            <MapPin aria-hidden="true" size={21} />
            <span>Farmácia Nogueira Tanguá<br />Rua Prof. Alberto Krause, 2019<br />Tanguá - Almirante Tamandaré/PR</span>
          </address>
          <a className="button button--primary" href="https://maps.google.com/?q=Farmácia+Nogueira+Tanguá" target="_blank" rel="noopener noreferrer">Abrir rota</a>
        </div>
        <div className="map-frame">
          <iframe
            title="Mapa com a localização da Farmácia Nogueira Tanguá"
            src="https://www.google.com/maps?q=Farmácia%20Nogueira%20Tanguá%20Almirante%20Tamandaré%20PR&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
