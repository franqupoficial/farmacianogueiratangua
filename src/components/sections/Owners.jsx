export default function Owners() {
  return (
    <section
      style={{
        padding: "100px 60px",
        background: "#f8fafc",
      }}
    >

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >

        <span
          style={{
            color:"#1565FF",
            fontWeight:"700",
            letterSpacing:"2px",
            textTransform:"uppercase",
          }}
        >
          Nossa equipe
        </span>


        <h2
          style={{
            fontSize:"42px",
            color:"#1f2937",
            margin:"20px 0",
          }}
        >
          Profissionais que cuidam de você
        </h2>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
            gap:"40px",
            marginTop:"60px",
          }}
        >


          <div
            style={{
              background:"#fff",
              padding:"40px",
              borderRadius:"25px",
              boxShadow:"0 15px 35px rgba(0,0,0,.08)",
            }}
          >

            <div
              style={{
                width:"120px",
                height:"120px",
                borderRadius:"50%",
                background:"#1565FF",
                margin:"0 auto 25px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"#fff",
                fontSize:"45px",
              }}
            >
              👨‍⚕️
            </div>


            <h3
              style={{
                fontSize:"28px",
                color:"#1f2937",
              }}
            >
              Márcio Nogueira
            </h3>


            <p
              style={{
                color:"#1565FF",
                fontWeight:"700",
                margin:"15px 0",
              }}
            >
              Farmacêutico | Empresário | Cursando Medicina
            </p>


            <p
              style={{
                color:"#666",
                lineHeight:"1.7",
              }}
            >
              Atua unindo conhecimento farmacêutico,
              gestão e dedicação para oferecer um atendimento
              seguro e de excelência aos clientes.
            </p>

          </div>



          <div
            style={{
              background:"#fff",
              padding:"40px",
              borderRadius:"25px",
              boxShadow:"0 15px 35px rgba(0,0,0,.08)",
            }}
          >

            <div
              style={{
                width:"120px",
                height:"120px",
                borderRadius:"50%",
                background:"#1565FF",
                margin:"0 auto 25px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"#fff",
                fontSize:"45px",
              }}
            >
              👩‍⚕️
            </div>


            <h3
              style={{
                fontSize:"28px",
                color:"#1f2937",
              }}
            >
              Dra. Rúbia Nogueira
            </h3>


            <p
              style={{
                color:"#1565FF",
                fontWeight:"700",
                margin:"15px 0",
              }}
            >
              Farmacêutica | Pós-graduada em Estética Avançada
            </p>


            <p
              style={{
                color:"#666",
                lineHeight:"1.7",
              }}
            >
              Especialista em procedimentos estéticos avançados,
              proporcionando resultados com segurança e cuidado.
            </p>


            <div
              style={{
                marginTop:"20px",
                color:"#444",
              }}
            >
              Botox • Preenchimento • Bioestimuladores
              <br/>
              Criomodelagem • Tratamentos para varizes
            </div>

          </div>


        </div>

      </div>

    </section>
  );
}
