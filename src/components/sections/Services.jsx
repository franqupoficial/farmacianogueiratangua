import "../../styles/services.css";


const services = [

"Medicamentos e perfumaria",

"Atendimento farmacêutico personalizado",

"Estética avançada",

"Cuidados para sua família",

"Orientação e acompanhamento"

];


export default function Services(){

return (

<section id="servicos" className="services">


<div className="services-container">


<div className="section-header">


<span>
NOSSOS SERVIÇOS
</span>


<h2>
Soluções completas para sua saúde.
</h2>


<p>
Tudo o que você precisa em um só lugar,
com atendimento humanizado.
</p>


</div>



<div className="services-grid">


{services.map((item,index)=>(


<div className="service-card" key={index}>

<h3>
{item}
</h3>

<p>
Cuidado, segurança e qualidade em cada atendimento.
</p>

</div>


))}


</div>


</div>


</section>

)

}