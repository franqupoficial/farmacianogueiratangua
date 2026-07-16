export default function FutureMedFlash(){

  return(

    <section
      style={{
        padding:"120px 60px",
        background:"#0A2E73",
        color:"#fff",
        textAlign:"center"
      }}
    >

      <div
        style={{
          maxWidth:"900px",
          margin:"auto"
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
          EM BREVE
        </span>


        <h2
          style={{
            fontSize:"56px",
            margin:"25px 0 10px",
            letterSpacing:"1px"
          }}
        >
          MEDFLASH
        </h2>


        <h3
          style={{
            fontSize:"32px",
            fontWeight:"500",
            marginBottom:"30px"
          }}
        >
          A evolução da experiência em saúde.
        </h3>


        <p
          style={{
            fontSize:"20px",
            lineHeight:"1.8",
            color:"#EAF2FF",
            maxWidth:"700px",
            margin:"auto"
          }}
        >
          Uma nova forma de conectar clientes,
          farmácia e tecnologia para tornar o acesso
          aos produtos de saúde mais simples,
          rápido e inteligente.
        </p>



        <div
          style={{
            marginTop:"60px",
            display:"flex",
            justifyContent:"center",
            gap:"25px",
            flexWrap:"wrap"
          }}
        >

          <div style={item}>
            📱
            <br/>
            Pedidos pelo celular
          </div>


          <div style={item}>
            ⚡
            <br/>
            Mais praticidade
          </div>


          <div style={item}>
            🛵
            <br/>
            Entrega inteligente
          </div>


        </div>



        <button
          style={{
            marginTop:"60px",
            padding:"16px 40px",
            borderRadius:"50px",
            border:"1px solid #1565FF",
            background:"transparent",
            color:"#fff",
            fontSize:"18px",
            fontWeight:"700",
            cursor:"pointer"
          }}
          onClick={()=>{
            alert("A MEDFLASH estará disponível em breve 🚀");
          }}
        >
          Pedir pela MEDFLASH
        </button>


      </div>

    </section>

  )

}


const item = {
  padding:"25px 35px",
  borderRadius:"25px",
  background:"rgba(255,255,255,.08)",
  fontSize:"18px",
  lineHeight:"1.6"
};
