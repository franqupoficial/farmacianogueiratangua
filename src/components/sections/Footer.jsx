export default function Footer(){

  return(

    <footer
      style={{
        background:"#0A2E73",
        color:"#fff",
        padding:"80px 60px 30px"
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"auto",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"50px"
        }}
      >

        <div>

          <h2
            style={{
              fontSize:"30px",
              marginBottom:"20px"
            }}
          >
            Farmácia Nogueira Tanguá
          </h2>


          <p
            style={{
              color:"#EAF2FF",
              lineHeight:"1.7"
            }}
          >
            Saúde, confiança e cuidado perto de você.
            Uma farmácia feita para cuidar da sua família.
          </p>

        </div>



        <div>

          <h3
            style={{
              marginBottom:"20px"
            }}
          >
            Navegação
          </h3>


          <p>
            Sobre nós
          </p>

          <p>
            Serviços
          </p>

          <p>
            Contato
          </p>

        </div>



        <div>

          <h3
            style={{
              marginBottom:"20px"
            }}
          >
            Atendimento
          </h3>


          <p>
            📍 Almirante Tamandaré - PR
          </p>


          <p>
            📞 (41) 99633-0476
          </p>


          <p>
            🕒 Seg a Sáb: 08h às 21h
          </p>


          <p>
            Domingo: 08h30 às 15h
          </p>


        </div>


      </div>


      <div
        style={{
          maxWidth:"1200px",
          margin:"60px auto 0",
          paddingTop:"25px",
          borderTop:"1px solid rgba(255,255,255,.2)",
          textAlign:"center"
        }}
      >

        <p
          style={{
            fontSize:"14px",
            color:"#D6E4FF"
          }}
        >
          © {new Date().getFullYear()} Farmácia Nogueira Tanguá.
          Todos os direitos reservados.
        </p>


      </div>


    </footer>

  )

}
