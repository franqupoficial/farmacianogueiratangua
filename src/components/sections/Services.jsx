export default function Services(){

  const services = [
    {
      icon:"💊",
      title:"Medicamentos e Saúde",
      text:"Medicamentos de qualidade, produtos de saúde e orientação farmacêutica para você e sua família."
    },
    {
      icon:"🩺",
      title:"Acompanhamento Farmacêutico",
      text:"Orientação profissional, esclarecimento de dúvidas e cuidado personalizado para uma vida mais saudável."
    },
    {
      icon:"❤️",
      title:"Aferição de Pressão e Saúde",
      text:"Acompanhamento da saúde com aferição de pressão e cuidados preventivos para você e sua família."
    },
    {
      icon:"👂",
      title:"Colocação de Brincos",
      text:"Serviço realizado com segurança, higiene e cuidado para todas as idades."
    },
    {
      icon:"💉",
      title:"Aplicação de Medicamentos",
      text:"Aplicação de medicamentos com segurança e responsabilidade por profissionais capacitados."
    },
    {
      icon:"🛵",
      title:"Entrega Rápida",
      text:"Receba seus produtos com praticidade e comodidade através da Farmácia Nogueira."
    }
  ];


  return(

    <section
      id="servicos"
      style={{
        padding:"100px 30px",
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
            marginBottom:"60px"
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
            NOSSOS SERVIÇOS
          </span>


          <h2
            style={{
              fontSize:"36px",
              color:"#111827",
              marginTop:"20px",
              lineHeight:"1.25",
              maxWidth:"800px",
              marginLeft:"auto",
              marginRight:"auto",
              fontWeight:"700"
            }}
          >
            Muito além de uma farmácia.
          </h2>


          <p
            style={{
              color:"#6b7280",
              fontSize:"17px",
              lineHeight:"1.6",
              maxWidth:"650px",
              margin:"20px auto 0"
            }}
          >
            Cuidado, conhecimento farmacêutico e soluções modernas para acompanhar todas as fases da sua vida.
          </p>


        </div>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
            gap:"30px"
          }}
        >

          {services.map((service,index)=>(

            <div
              key={index}
              style={{
                background:"#ffffff",
                padding:"35px",
                borderRadius:"25px",
                border:"1px solid #eef2f7",
                boxShadow:"0 10px 30px rgba(0,0,0,0.04)"
              }}
            >

              <div
                style={{
                  fontSize:"42px",
                  marginBottom:"20px"
                }}
              >
                {service.icon}
              </div>


              <h3
                style={{
                  color:"#111827",
                  fontSize:"21px",
                  marginBottom:"15px",
                  lineHeight:"1.3"
                }}
              >
                {service.title}
              </h3>


              <p
                style={{
                  color:"#6b7280",
                  lineHeight:"1.7",
                  fontSize:"16px"
                }}
              >
                {service.text}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>

  )

}