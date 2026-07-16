import "../../styles/reviews.css";

const reviews = [
  {
    name:"Maria Silva",
    text:"Excelente atendimento. A equipe sempre orienta com muita atenção e cuidado.",
    stars:"★★★★★"
  },
  {
    name:"João Pereira",
    text:"Farmácia muito organizada, ambiente agradável e profissionais excelentes.",
    stars:"★★★★★"
  },
  {
    name:"Ana Souza",
    text:"Sempre encontro o que preciso e sou atendida muito bem.",
    stars:"★★★★★"
  }
];


export default function Reviews(){

return(

<section className="reviews">

<div className="reviews-container">


<div className="reviews-header">

<span className="section-tag">
AVALIAÇÕES
</span>


<h2>
O que nossos clientes dizem
</h2>


<p>
A confiança dos nossos clientes é o que nos motiva
a oferecer sempre o melhor atendimento.
</p>

</div>



<div className="reviews-grid">


{reviews.map((review,index)=>(

<div 
className="review-card"
key={index}
>


<div className="stars">
{review.stars}
</div>


<p>
"{review.text}"
</p>


<h3>
{review.name}
</h3>


</div>

))}


</div>


</div>

</section>

)

}