import "../../styles/services.css";

const services = [
  {
    title:"Medicamentos",
    text:"Grande variedade de medicamentos com orientação farmacêutica para cuidar da sua saúde."
  },
  {
    title:"Atendimento Farmacêutico",
    text:"Profissionais preparados para orientar você com segurança e confiança."
  },
  {
    title:"Perfumaria e Beleza",
    text:"Produtos para cuidados pessoais, higiene e bem-estar."
  },
  {
    title:"Saúde e Bem-estar",
    text:"Soluções completas para cuidar de você e da sua família."
  }
];


export default function Services(){

return(

<section className="services" id="servicos">

<div className="services-container">


<div className="services-header">

<span className="section-tag">
NOSSOS SERVIÇOS
</span>


<h2>
Tudo para cuidar da sua saúde em um só lugar.
</h2>


<p>
Oferecemos produtos e serviços com qualidade,
segurança e atendimento humanizado.
</p>

</div>



<div className="services-grid">


{services.map((service,index)=>(

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

</div>

))}


</div>


</div>

</section>

)

}