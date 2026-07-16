export default function Reviews(){

const reviews = [

{
name:"Maria Silva",
text:"Excelente atendimento. Sempre fui muito bem orientada pela equipe."
},

{
name:"João Pereira",
text:"Farmácia completa, atendimento rápido e profissionais muito atenciosos."
},

{
name:"Ana Souza",
text:"Um lugar de confiança para cuidar da minha família."
}

];


return(

<section className="reviews">


<div className="reviews-container">


<div className="reviews-header">

<span className="section-tag">
AVALIAÇÕES
</span>


<h2>
Quem conhece recomenda.
</h2>


<p>
A opinião dos nossos clientes é o que nos
motiva todos os dias.
</p>


</div>



<div className="reviews-grid">


{
reviews.map((review,index)=>(

<div 
className="review-card"
key={index}
>


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

))

}


</div>


</div>


</section>

)

}
