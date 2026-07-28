import logo from "../../assets/images/logo-nogueira.png";

export default function Logo() {
  return (
    <span className="brand-logo">
      <img
        className="brand-logo__image"
        src={logo}
        alt="Farmácia Nogueira"
        width="200"
        height="192"
      />
    </span>
  );
}
