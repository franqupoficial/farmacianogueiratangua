import "../../styles/hero.css";
import heroImage from "../../assets/images/hero-farmacia.jpg";


export default function Hero() {

return (

<section className="hero">


<div className="hero-container">


<div className="hero-content">


<span className="hero-tag">
FARMÁCIA NOGUEIRA TANGUÁ
</span>


<h1>
Sua saúde merece cuidado de verdade.
</h1>


<p>
Uma farmácia completa em Almirante Tamandaré,
com atendimento farmacêutico humanizado,
estética avançada e soluções modernas para
cuidar da sua família.
</p>



<div className="hero-buttons">


<a 
href="#contato"
className="primary-button"
>
Fale conosco
</a>



<a 
href="#servicos"
className="secondary-button"
>
Conheça nossos serviços
</a>



</div>


</div>




<div className="hero-image">

<img
src={heroImage}
alt="Farmácia Nogueira Tanguá"
/>

</div>



</div>


</section>

)

}