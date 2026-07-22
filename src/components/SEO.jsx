import { Helmet } from "react-helmet-async";

const siteUrl = "https://farmacianogueiratangua.com.br";
const description = "Farmácia Nogueira Tanguá em Almirante Tamandaré - PR. Medicamentos, atendimento farmacêutico, estética avançada e cuidado para sua família.";
const shareImage = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=85";

export default function SEO() {
  return (
    <Helmet>
      <title>Farmácia Nogueira Tanguá | Saúde e Confiança</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content="Farmácia Nogueira Tanguá | Saúde e Confiança" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={shareImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Farmácia Nogueira Tanguá | Saúde e Confiança" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Pharmacy",
        name: "Farmácia Nogueira Tanguá",
        telephone: "+55 41 99633-0476",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Prof. Alberto Krause, 2019",
          addressLocality: "Almirante Tamandaré",
          addressRegion: "PR",
          addressCountry: "BR",
        },
      })}</script>
    </Helmet>
  );
}
