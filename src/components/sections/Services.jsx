export default function Services(){

const services = [

{
title:"Medicamentos",
text:"Amplo catálogo de medicamentos com orientação farmacêutica."
},

{
title:"Atendimento Farmacêutico",
text:"Cuidado personalizado para orientar você e sua família."
},

{
title:"Estética Avançada",
text:"Tratamentos e soluções para sua beleza e bem-estar."
},

{
title:"Saúde e Bem-estar",
text:"Produtos selecionados para melhorar sua qualidade de vida."
}

];


return(

<section id="servicos" className="services">


<div className="services-container">


<div className="services-header">

<span className="section-tag">
NOSSOS SERVIÇOS
</span>


<h2>
Tudo que você precisa em um só lugar.
</h2>


<p>
Soluções completas para cuidar da sua saúde
com segurança e confiança.
</p>


</div>



<div className="services-grid">


{
services.map((service,index)=>(

<div 
className="service-card"
key={index}
>


<h3>
{service.title}
</h3>


<p>
{service.text}
</p>


<a href="#contato">
Saiba mais
</a>


</div>

))

}


</div>


</div>


</section>

)

}