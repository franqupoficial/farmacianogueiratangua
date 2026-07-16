import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <img
        src={logo}
        alt="Farmácia Nogueira Tanguá"
        style={{
          width: "95px",
          height: "95px",
          objectFit: "contain",
          display: "block",
          flexShrink: 0,
        }}
      />

      <div>
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 700,
            color: "#1565FF",
            lineHeight: 1.1,
          }}
        >
          Farmácia Nogueira Tanguá
        </h2>

        <span
          style={{
            display: "block",
            marginTop: "4px",
            color: "#6B7280",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          Saúde • Confiança • Qualidade
        </span>
      </div>
    </div>
  );
}