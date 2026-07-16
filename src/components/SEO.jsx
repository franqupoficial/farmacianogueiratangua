import { Helmet } from "react-helmet-async";

export default function SEO(){

  return(
    <Helmet>

      <title>
        Farmácia Nogueira Tanguá | Saúde e Confiança
      </title>

      <meta
        name="description"
        content="Farmácia Nogueira Tanguá em Almirante Tamandaré - PR. Medicamentos, atendimento farmacêutico, estética avançada e cuidado para sua família."
      />

      <meta
        name="keywords"
        content="farmácia Almirante Tamandaré, Farmácia Tanguá, medicamentos, farmacêutico, estética avançada"
      />

      <meta
        property="og:title"
        content="Farmácia Nogueira Tanguá"
      />

      <meta
        property="og:description"
        content="Cuidado, saúde e confiança perto de você."
      />

    </Helmet>
  )
}
