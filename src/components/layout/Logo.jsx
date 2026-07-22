import logo from "../../assets/images/logo-nogueira.png";

export default function Logo() {
  return (
    <span className="brand-logo">
      <img className="brand-logo__mark" src={logo} alt="" aria-hidden="true" width="80" height="80" />
      <span className="brand-logo__copy">
        <strong>Farmácia Nogueira Tanguá</strong>
        <small>Saúde • Confiança • Qualidade</small>
      </span>
    </span>
  );
}