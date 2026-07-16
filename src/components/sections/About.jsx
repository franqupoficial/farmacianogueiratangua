export default function About(){

  const pillars = [
    {
      title:"Atendimento Humanizado",
      text:"Cada cliente é atendido com atenção, orientação e cuidado individualizado."
    },
    {
      title:"Conhecimento Farmacêutico",
      text:"Profissionais preparados para oferecer segurança e confiança em cada atendimento."
    },
    {
      title:"Compromisso com Pessoas",
      text:"Uma farmácia próxima da comunidade, construída através de relacionamento e confiança."
    }
  ];


  return(

    <section
      id="sobre"
      style={{
        padding:"120px 60px",
        background:"#ffffff"
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
              SOBRE A FARMÁCIA NOGUEIRA
            </span>


            <h2
              style={{
                fontSize:"48px",
                lineHeight:"1.2",
                color:"#111827",
                margin:"25px 0"
              }}
            >
              Cuidado que vai além do medicamento.
            </h2>


            <p
              style={{
                fontSize:"20px",
                color:"#6b7280",
                lineHeight:"1.8"
              }}
            >
              A Farmácia Nogueira Tanguá nasceu com um propósito:
              oferecer uma experiência de saúde mais próxima,
              segura e humana para cada pessoa que entra em nossa história.
            </p>


            <p
              style={{
                fontSize:"18px",
                color:"#6b7280",
                lineHeight:"1.8",
                marginTop:"20px"
              }}
            >
              Unimos conhecimento farmacêutico, atendimento
              personalizado e inovação para cuidar da sua família.
            </p>

          </div>


          <div
            style={{
              background:"#1565FF",
              borderRadius:"35px",
              padding:"50px",
              color:"#fff"
            }}
          >

            <h3
              style={{
                fontSize:"30px",
                marginBottom:"30px"
              }}
            >
              Essência
            </h3>


            <p
              style={{
                fontSize:"20px",
                lineHeight:"1.7"
              }}
            >
              Mais do que entregar produtos,
              buscamos entregar confiança,
              orientação e cuidado em todos os momentos.
            </p>


          </div>


        </div>



        <div
          style={{
            marginTop:"80px",
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
            gap:"30px"
          }}
        >

          {pillars.map((item,index)=>(

            <div
              key={index}
              style={{
                padding:"35px",
                borderRadius:"25px",
                background:"#f8fafc",
                border:"1px solid #eef2f7"
              }}
            >

              <h3
                style={{
                  color:"#111827",
                  fontSize:"22px"
                }}
              >
                {item.title}
              </h3>


              <p
                style={{
                  color:"#6b7280",
                  lineHeight:"1.7"
                }}
              >
                {item.text}
              </p>

            </div>

          ))}

        </div>


      </div>

    </section>

  )

}
