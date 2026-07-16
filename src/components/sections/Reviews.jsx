import "../../styles/reviews.css";


const reviews = [

{
name:"Cliente da Farmácia",
text:"Excelente atendimento, sempre sou muito bem atendido pela equipe."
},

{
name:"Cliente da Farmácia",
text:"Farmácia completa, ambiente agradável e profissionais muito atenciosos."
},

{
name:"Cliente da Farmácia",
text:"Confiança e cuidado em todos os atendimentos."

}

];


export default function Reviews(){


return (

<section className="reviews">


<div className="reviews-container">


<div className="section-header">

<span>
AVALIAÇÕES
</span>


<h2>
O cuidado que nossos clientes reconhecem.
</h2>


<p>
A satisfação de quem escolhe a Farmácia Nogueira Tanguá.
</p>


</div>



<div className="reviews-grid">


{reviews.map((review,index)=>(


<div className="review-card" key={index}>


<div className="stars">
★★★★★
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