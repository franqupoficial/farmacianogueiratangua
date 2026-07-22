import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-container">
        <a className="navbar-brand" href="#conteudo" aria-label="Ir para o início">
          <Logo />
        </a>
        <button
          className="navbar-toggle"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="menu-principal"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className={`navbar-links ${isOpen ? "navbar-links--open" : ""}`} id="menu-principal" aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#contato" className="navbar-button" onClick={closeMenu}>Contato</a>
        </nav>
      </div>
    </header>
  );
}