import logo from "../../assets/images/logo-nogueira.svg";

export default function Logo() {
  return (
    <span className="brand-logo">
      <img
        className="brand-logo__image"
        src={logo}
        alt="Farmácia Nogueira"
        width="175"
        height="211"
        decoding="async"
      />
    </span>
  );
}
