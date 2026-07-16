export default function Contact(){

  return(

    <section
      id="contato"
      style={{
        padding:"120px 60px",
        background:"#f8fafc"
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"auto"
        }}
      >

        <div
          style={{
            textAlign:"center",
            marginBottom:"70px"
          }}
        >

          <span
            style={{
              color:"#1565FF",
              fontWeight:"700",
              letterSpacing:"3px",
              fontSize:"14px"
            }}
          >
            ENTRE EM CONTATO
          </span>


          <h2
            style={{
              fontSize:"46px",
              color:"#111827",
              margin:"20px 0"
            }}
          >
            Estamos perto de você
          </h2>


          <p
            style={{
              fontSize:"20px",
              color:"#6b7280",
              maxWidth:"700px",
              margin:"auto",
              lineHeight:"1.7"
            }}
          >
            Converse diretamente com nossa equipe farmacêutica.
            Estamos prontos para orientar, ajudar e cuidar da sua saúde.
          </p>


        </div>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
            gap:"35px"
          }}
        >


          <div style={cardStyle}>

            <div style={iconStyle}>
              📍
            </div>

            <h3>
              Nossa localização
            </h3>

            <p>
              Rua Prof. Alberto Krause, 2019
              <br/>
              Tanguá - Almirante Tamandaré/PR
            </p>

            <a
              href="https://maps.google.com/?q=Farmácia+Nogueira+Tanguá"
              target="_blank"
              style={buttonStyle}
            >
              Como chegar
            </a>

          </div>



          <div style={cardStyle}>

            <div style={iconStyle}>
              📞
            </div>

            <h3>
              Atendimento
            </h3>

            <p>
              (41) 99633-0476
            </p>

            <a
              href="https://wa.me/5541996330476"
              target="_blank"
              style={buttonStyle}
            >
              Falar com Farmacêutico
            </a>

          </div>



          <div style={cardStyle}>

            <div style={iconStyle}>
              🕒
            </div>

            <h3>
              Horários
            </h3>

            <p>
              Segunda a sábado
              <br/>
              08h às 21h
              <br/><br/>
              Domingo
              <br/>
              08h30 às 15h
            </p>

          </div>


        </div>


        <div
          style={{
            marginTop:"60px",
            textAlign:"center"
          }}
        >

          <a
            href="#"
            style={{
              display:"inline-block",
              background:"#ea1d2c",
              color:"#fff",
              padding:"18px 40px",
              borderRadius:"50px",
              textDecoration:"none",
              fontWeight:"700",
              fontSize:"18px"
            }}
          >
            🛵 Pedir pelo iFood
          </a>


        </div>


      </div>

    </section>

  )

}


const cardStyle = {
  background:"#ffffff",
  padding:"40px",
  borderRadius:"30px",
  boxShadow:"0 15px 40px rgba(0,0,0,.06)",
  textAlign:"center"
};


const iconStyle = {
  fontSize:"40px",
  marginBottom:"20px"
};


const buttonStyle = {
  display:"inline-block",
  marginTop:"20px",
  background:"#1565FF",
  color:"#fff",
  padding:"14px 28px",
  borderRadius:"50px",
  textDecoration:"none",
  fontWeight:"700"
};
