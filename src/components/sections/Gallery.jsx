export default function Gallery(){

  const images = [
    {
      title:"Nossa estrutura",
      image:"/images/farmacia.jpg"
    },
    {
      title:"Atendimento personalizado",
      image:"/images/atendimento.jpg"
    },
    {
      title:"Cuidado e saúde",
      image:"/images/saude.jpg"
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
              letterSpacing:"2px"
            }}
          >
            NOSSA ESTRUTURA
          </span>


          <h2
            style={{
              fontSize:"42px",
              color:"#111827",
              margin:"20px 0"
            }}
          >
            Um ambiente preparado para cuidar de você
          </h2>


          <p
            style={{
              color:"#6b7280",
              fontSize:"18px",
              maxWidth:"700px",
              margin:"auto"
            }}
          >
            Espaço pensado para oferecer conforto,
            segurança e um atendimento próximo para
            cada cliente.
          </p>

        </div>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
            gap:"30px"
          }}
        >

          {images.map((item,index)=>(

            <div
              key={index}
              style={{
                borderRadius:"30px",
                overflow:"hidden",
                boxShadow:"0 20px 40px rgba(0,0,0,.10)",
                background:"#fff"
              }}
            >

              <img
                src={item.image}
                alt={item.title}
                style={{
                  width:"100%",
                  height:"320px",
                  objectFit:"cover"
                }}
              />


              <div
                style={{
                  padding:"25px"
                }}
              >

                <h3
                  style={{
                    margin:0,
                    color:"#111827",
                    fontSize:"22px"
                  }}
                >
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>


      </div>

    </section>

  )

}
