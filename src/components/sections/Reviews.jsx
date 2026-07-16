export default function Reviews(){

  return(

    <section
      style={{
        padding:"110px 60px",
        background:"#ffffff"
      }}
    >

      <div
        style={{
          maxWidth:"1000px",
          margin:"auto",
          textAlign:"center"
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
          CONFIANÇA DOS CLIENTES
        </span>


        <h2
          style={{
            fontSize:"46px",
            color:"#111827",
            margin:"25px 0"
          }}
        >
          Uma farmácia presente na vida da comunidade
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
          O reconhecimento dos nossos clientes é resultado
          de um atendimento próximo, profissional e humano.
        </p>



        <div
          style={{
            marginTop:"60px",
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
            gap:"30px"
          }}
        >


          <div
            style={{
              padding:"40px",
              borderRadius:"30px",
              background:"#f8fafc"
            }}
          >

            <div
              style={{
                fontSize:"32px",
                marginBottom:"15px"
              }}
            >
              ⭐⭐⭐⭐⭐
            </div>


            <h3
              style={{
                color:"#111827",
                fontSize:"24px"
              }}
            >
              4,5 estrelas no Google
            </h3>


            <p
              style={{
                color:"#6b7280",
                lineHeight:"1.6"
              }}
            >
              Clientes que confiam no atendimento
              da Farmácia Nogueira Tanguá.
            </p>

          </div>



          <div
            style={{
              padding:"40px",
              borderRadius:"30px",
              background:"#0A2E73",
              color:"#fff"
            }}
          >

            <div
              style={{
                fontSize:"32px",
                marginBottom:"15px"
              }}
            >
              🛵
            </div>


            <h3
              style={{
                fontSize:"24px"
              }}
            >
              Peça pelo iFood
            </h3>


            <p
              style={{
                color:"#EAF2FF",
                lineHeight:"1.6"
              }}
            >
              Mais praticidade para receber
              seus produtos onde estiver.
            </p>


            <a
              href="#"
              style={{
                display:"inline-block",
                marginTop:"20px",
                background:"#ffffff",
                color:"#0A2E73",
                padding:"14px 30px",
                borderRadius:"50px",
                textDecoration:"none",
                fontWeight:"700"
              }}
            >
              Pedir agora
            </a>

          </div>


        </div>


      </div>


    </section>

  )

}
