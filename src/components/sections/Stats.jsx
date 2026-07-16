export default function Stats(){

  const pillars = [
    {
      title:"Atendimento farmacêutico",
      text:"Orientação profissional para cuidar da sua saúde com mais segurança."
    },
    {
      title:"Conhecimento e experiência",
      text:"Uma equipe preparada para oferecer um atendimento próximo e qualificado."
    },
    {
      title:"Compromisso com pessoas",
      text:"Relacionamento, confiança e cuidado em todos os momentos."
    }
  ];


  return(

    <section
      style={{
        padding:"100px 60px",
        background:"#ffffff"
      }}
    >

      <div
        style={{
          maxWidth:"1100px",
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
          NOSSA ESSÊNCIA
        </span>


        <h2
          style={{
            fontSize:"44px",
            color:"#111827",
            margin:"25px 0"
          }}
        >
          Cuidado que gera confiança
        </h2>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
            gap:"50px",
            marginTop:"60px"
          }}
        >

          {pillars.map((item,index)=>(

            <div key={index}>

              <h3
                style={{
                  fontSize:"22px",
                  color:"#111827",
                  marginBottom:"15px"
                }}
              >
                {item.title}
              </h3>


              <p
                style={{
                  color:"#6b7280",
                  lineHeight:"1.7",
                  fontSize:"17px"
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
