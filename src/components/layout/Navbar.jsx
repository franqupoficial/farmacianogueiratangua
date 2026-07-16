import Logo from "./Logo";

export default function Navbar() {

  return (

    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(255,255,255,.95)",
        backdropFilter: "blur(12px)",
        zIndex: 1000,
        boxShadow: "0 5px 20px rgba(0,0,0,.08)"
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 25px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15px"
        }}
      >

        <Logo />


        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent:"center"
          }}
        >

          <a
            href="#sobre"
            style={linkStyle}
          >
            Sobre nós
          </a>


          <a
            href="#servicos"
            style={linkStyle}
          >
            Serviços
          </a>


          <a
            href="#contato"
            style={{
              ...linkStyle,
              background: "#1565FF",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: "50px"
            }}
          >
            Contato
          </a>


        </div>


      </div>


    </nav>

  );

}


const linkStyle = {

  textDecoration:"none",

  color:"#1F2937",

  fontWeight:"600",

  fontSize:"15px"

};