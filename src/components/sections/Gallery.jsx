import "../../styles/gallery.css";

import img1 from "../../assets/images/hero-farmacia.jpg";

export default function Gallery() {

  return (

    <section className="gallery" id="espaco">

      <div className="gallery-container">


        <div className="section-header">

          <span>
            NOSSO ESPAÇO
          </span>

          <h2>
            Um ambiente preparado para cuidar de você.
          </h2>

          <p>
            Uma estrutura pensada para oferecer conforto,
            segurança e um atendimento próximo para toda família.
          </p>

        </div>


        <div className="gallery-image">

          <img 
            src={img1}
            alt="Farmácia Nogueira Tanguá"
          />

        </div>


      </div>


    </section>

  );

}