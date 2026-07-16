export default function Team(){

  const team = [
    {
      name:"Márcio Nogueira",
      role:"Farmacêutico | Empresário",
      image:"/images/marcio.jpg",
      description:
      "Atua unindo conhecimento farmacêutico, gestão e dedicação para oferecer um atendimento seguro e de excelência."
    },

    {
      name:"Dra. Rúbia Nogueira",
      role:"Farmacêutica | Especialista em Estética Avançada",
      image:"/images/rubia.jpg",
      description:
      "Especialista em procedimentos estéticos avançados, oferecendo segurança, tecnologia e cuidado personalizado."
    }
  ];


  return(

    <section
      style={{
        padding:"100px 60px",
        background:"#f8fafc"
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"auto",
          textAlign:"center"
        }}
      >

        <span
          style={{
            color:"#1565FF",
            fontWeight:"700",
            letterSpacing:"2px"
          }}
        >
          NOSSA EQUIPE
        </span>


        <h2
          style={{
            fontSize:"42px",
            color:"#111827",
            margin:"20px 0"
          }}
        >
          Profissionais que cuidam de você
        </h2>


        <div
          style={{
            marginTop:"60px",
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
            gap:"40px"
          }}
        >

          {team.map((person,index)=>(

            <div
              key={index}
              style={{
                background:"#fff",
                borderRadius:"35px",
                overflow:"hidden",
                boxShadow:"0 20px 40px rgba(0,0,0,.08)"
              }}
            >

              <img
                src={person.image}
                alt={person.name}
                style={{
                  width:"100%",
                  height:"350px",
                  objectFit:"cover"
                }}
              />


              <div
                style={{
                  padding:"30px",
                  textAlign:"left"
                }}
              >

                <h3
                  style={{
                    fontSize:"26px",
                    color:"#111827",
                    marginBottom:"10px"
                  }}
                >
                  {person.name}
                </h3>


                <strong
                  style={{
                    color:"#1565FF"
                  }}
                >
                  {person.role}
                </strong>


                <p
                  style={{
                    color:"#6b7280",
                    lineHeight:"1.6",
                    marginTop:"15px"
                  }}
                >
                  {person.description}
                </p>


              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}
