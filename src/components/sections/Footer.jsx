export default function Footer(){

return(

<footer className="footer">


<div className="footer-container">


<div>

<h3>
Farmácia Nogueira Tanguá
</h3>


<p>
Cuidado, saúde e confiança para sua família.
</p>

</div>



<div className="footer-links">

<a href="#sobre">
Sobre nós
</a>

<a href="#servicos">
Serviços
</a>

<a href="#contato">
Contato
</a>

</div>



</div>



<div className="footer-bottom">

© {new Date().getFullYear()} Farmácia Nogueira Tanguá.
Todos os direitos reservados.

</div>


</footer>

)

}