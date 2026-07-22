import { MessageCircle } from "lucide-react";

export default function WhatsApp() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/5541996330476"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Farmácia Nogueira Tanguá pelo WhatsApp"
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
