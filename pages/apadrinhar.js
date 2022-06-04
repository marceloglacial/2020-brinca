import Layout from 'components/Layout/Layout'
import Main from 'components/Main/Main'

import PadrinhoContent from 'components/Padrinho/PadrinhoContent'

const Apadrinhar = (props) => {
  return (
    <Layout pageTitle={`Torne-se um Padrinho`}>
      <PadrinhoContent title={`Apadrinhe um recém-chegado ao Canada!`} />
      <section data-aos="fade-in" className="aos-init aos-animate pt-0">
        <h4 className="text-left">Quero apadrinhar:</h4>
        <div>
          <p>Para ser um padrinho ou madrinha, você precisa estar morando há pelo menos 3 anos no Canadá e ter disponibilidade e boa vontade para responder às mais diversas questões de famílias que estão chegando ou que chegaram recentemente em Ottawa e região.</p>
          <p>Você estará lidando com sonhos e ansiedades, então se você é do tipo que vê o WhatsApp a cada três dias, talvez essa não seja a melhor opção de voluntariado pra você.</p>
          <p>Preencha os dados abaixo e aguarde o nosso contato em breve!</p>
        </div>
      </section>
    </Layout>
  )
}

export default Apadrinhar
