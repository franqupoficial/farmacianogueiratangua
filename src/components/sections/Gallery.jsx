import "../../styles/gallery.css";

import galleryImage from "../../assets/images/hero-farmacia.jpg";

export default function Gallery(){

return(

<section className="gallery" id="espaco">

<div className="gallery-container">


<div className="gallery-image">

<img 
src={galleryImage}
alt="Espaço Farmácia Nogueira Tanguá"
/>

</div>


<div className="gallery-text">

<span className="section-tag">
NOSSO ESPAÇO
</span>


<h2>
Um ambiente preparado para cuidar de você.
</h2>


<p>
Nossa estrutura foi pensada para oferecer conforto,
organização e um atendimento tranquilo para toda
a família.
</p>


<p>
Um espaço moderno, acolhedor e preparado para
atender suas necessidades de saúde e bem-estar.
</p>


</div>


</div>

</section>

)

}