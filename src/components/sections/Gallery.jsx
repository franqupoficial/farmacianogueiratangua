export default function Gallery(){

const images = [

"/images/interior-farmacia.jpg",
"/images/interior-farmacia.jpg",
"/images/interior-farmacia.jpg"

];


return(

<section className="gallery">


<div className="gallery-container">


<div className="gallery-header">

<span className="section-tag">
NOSSO ESPAÇO
</span>


<h2>
Conheça nossa farmácia.
</h2>


<p>
Um ambiente preparado para receber você
com conforto e segurança.
</p>


</div>



<div className="gallery-grid">


{
images.map((image,index)=>(

<div 
className="gallery-item"
key={index}
>

<img 
src={image}
alt="Farmácia Nogueira Tanguá"
/>

</div>

))

}


</div>


</div>


</section>

)

}