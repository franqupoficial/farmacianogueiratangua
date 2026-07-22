import Logo from "../layout/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Cuidado, saúde e confiança para sua família.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <h2>Institucional</h2>
          <a href="#sobre">Sobre nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="footer-contact">
          <h2>Contato</h2>
          <a href="https://wa.me/5541996330476" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="tel:+5541996330476">(41) 99633-0476</a>
          <a href="#espaco">Nosso espaço</a>
        </div>
      </div>
      <div className="site-container footer-bottom">© 2026 Farmácia Nogueira Tanguá. Todos os direitos reservados.</div>
    </footer>
  );
}
