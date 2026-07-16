export default function Map(){

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
          margin:"auto",
          display:"grid",
          gridTemplateColumns:"1fr 1.2fr",
          gap:"50px",
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
            LOCALIZAÇÃO
          </span>


          <h2
            style={{
              fontSize:"44px",
              color:"#111827",
              margin:"25px 0"
            }}
          >
            Estamos perto de você
          </h2>


          <p
            style={{
              fontSize:"18px",
              color:"#6b7280",
              lineHeight:"1.8"
            }}
          >
            📍 Farmácia Nogueira Tanguá
            <br/>
            Rua Prof. Alberto Krause, 2019
            <br/>
            Tanguá - Almirante Tamandaré/PR
          </p>


          <a
            href="https://maps.google.com/?q=Farmácia+Nogueira+Tanguá"
            target="_blank"
            style={{
              display:"inline-block",
              marginTop:"30px",
              background:"#1565FF",
              color:"#fff",
              padding:"16px 35px",
              borderRadius:"50px",
              textDecoration:"none",
              fontWeight:"700"
            }}
          >
            Abrir rota
          </a>


        </div>



        <div
          style={{
            borderRadius:"35px",
            overflow:"hidden",
            boxShadow:"0 20px 50px rgba(0,0,0,.12)"
          }}
        >

          <iframe
            title="Localização Farmácia Nogueira"
            src="https://www.google.com/maps?q=Farmácia%20Nogueira%20Tanguá%20Almirante%20Tamandaré%20PR&output=embed"
            width="100%"
            height="450"
            style={{
              border:0,
              display:"block"
            }}
            loading="lazy"
          />

        </div>


      </div>


    </section>

  )

}
