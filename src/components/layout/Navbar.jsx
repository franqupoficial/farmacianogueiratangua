import Logo from "./Logo";

export default function Navbar() {

return (

<nav className="navbar">

<div className="navbar-container">

<Logo />


<div className="navbar-links">

<a href="#sobre">
Sobre nós
</a>

<a href="#servicos">
Serviços
</a>


<a 
href="#contato"
className="navbar-button"
>
Contato
</a>


</div>

</div>

</nav>

);

}