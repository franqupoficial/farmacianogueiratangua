import { Smartphone, Truck, Zap } from "lucide-react";

const benefits = [
  ["Pedidos pelo celular", Smartphone],
  ["Mais praticidade", Zap],
  ["Entrega inteligente", Truck],
];

export default function FutureMedFlash() {
  return (
    <section className="section medflash" aria-labelledby="medflash-title">
      <div className="site-container medflash__content">
        <span className="eyebrow">EM BREVE</span>
        <h2 id="medflash-title">MEDFLASH</h2>
        <h3>A evolução da experiência em saúde.</h3>
        <p>Uma nova forma de conectar clientes, farmácia e tecnologia para tornar o acesso aos produtos de saúde mais simples, rápido e inteligente.</p>
        <div className="medflash__benefits">
          {benefits.map(([label, Icon]) => <div key={label}><Icon aria-hidden="true" size={22} /><span>{label}</span></div>)}
        </div>
        <a className="button button--light" href="#contato">Quero saber mais</a>
      </div>
    </section>
  );
}
