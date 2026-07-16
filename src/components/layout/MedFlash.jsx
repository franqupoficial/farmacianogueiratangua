export default function MedFlash(){

  function handleClick(){
    alert("🚀 A MedFlash estará disponível em breve! Aguarde o lançamento da nova experiência digital da Farmácia Nogueira.");
  }


  return(
    <button
      onClick={handleClick}
      style={{
        position:"fixed",
        left:"25px",
        bottom:"90px",
        background:"#1565FF",
        color:"#fff",
        padding:"15px 25px",
        borderRadius:"50px",
        border:"none",
        cursor:"pointer",
        fontWeight:"700",
        boxShadow:"0 10px 25px rgba(0,0,0,.20)",
        zIndex:999,
        display:"flex",
        alignItems:"center",
        gap:"10px",
        fontSize:"15px"
      }}
    >
      ⚡ Pedir pela MedFlash
    </button>
  )

}
