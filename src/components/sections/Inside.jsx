export default function Inside(){

  return(

    <section
      style={{
        padding:"120px 60px",
        background:"#f8fafc"
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"auto",
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"70px",
          alignItems:"center"
        }}
      >

        <div>

          <span
            style={{
              color:"#1565FF",
              fontWeight:"700",
              letterSpacing:"3px",
              fontSize:"14px"
            }}
          >
            NOSSO ESPAÇO
          </span>


          <h2
            style={{
              fontSize:"46px",
              color:"#111827",
              margin:"25px 0",
              lineHeight:"1.2"
            }}
          >
            Um ambiente preparado para cuidar de você
          </h2>


          <p
            style={{
              fontSize:"19px",
              color:"#6b7280",
              lineHeight:"1.8"
            }}
          >
            Cada detalhe da Farmácia Nogueira Tanguá foi pensado
            para oferecer uma experiência mais confortável,
            segura e próxima para nossos clientes.
          </p>


          <div
            style={{
              marginTop:"45px",
              display:"grid",
              gap:"25px"
            }}
          >

            <div>

              <h3
                style={{
                  color:"#111827",
                  fontSize:"22px",
                  marginBottom:"8px"
                }}
              >
                + Cuidado próximo
              </h3>

              <p
                style={{
                  color:"#6b7280",
                  lineHeight:"1.6"
                }}
              >
                Atendimento realizado por profissionais
                que valorizam cada cliente e sua história.
              </p>

            </div>


            <div>

              <h3
                style={{
                  color:"#111827",
                  fontSize:"22px",
                  marginBottom:"8px"
                }}
              >
                + Estrutura moderna
              </h3>

              <p
                style={{
                  color:"#6b7280",
                  lineHeight:"1.6"
                }}
              >
                Um ambiente organizado e preparado para
                oferecer conforto, segurança e confiança.
              </p>

            </div>


          </div>


        </div>



        <div
          style={{
            borderRadius:"40px",
            overflow:"hidden",
            boxShadow:"0 30px 70px rgba(0,0,0,.15)"
          }}
        >

          <img
            src="/images/interior-farmacia.jpg"
            alt="Interior Farmácia Nogueira Tanguá"
            style={{
              width:"100%",
              height:"520px",
              objectFit:"cover"
            }}
          />

        </div>


      </div>


    </section>

  )

}
