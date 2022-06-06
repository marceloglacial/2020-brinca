import Button from 'components/Button/Button'

const Padrinho = (props) => {
  const { title } = props

  return (
    <section data-aos="fade-in" className="aos-init aos-animate">
      <div>
        <h1 className="content-title">{title}</h1>
        <p>Todos nós, que vivemos em um novo país, certamente fomos ajudados por alguém em algum momento da nossa chegada. São muitos os desafios, desde burocracias como carteira de habilitação, cartão de saúde até coisas mais simples, como escolher marca de sabão no supermercado. Temos que aprender tudo novamente e o choque cultural pode ser amenizado quando encontramos compatriotas dispostos a nos ajudar nesse processo.</p>
        <p>Pensando em facilitar o encontro entre essas pessoas na comunidade, a BRINCA criou o projeto de apadrinhamento. Através de um cadastro simples, selecionamos os perfis que mais se adequam e o contato entre padrinho e apadrinhado é feito. A partir daí os dois lados poderão combinar a melhor forma de comunicação e periodicidade dos encontros. Não há limites!</p>
        <p>Queremos criar uma comunidade cada vez mais forte e unida, e acreditamos que esse link possa criar laços fortes entre as pessoas. Aquele que foi ajudado pode ser o que ajuda no futuro, e assim todos ganham.</p>
        <p>Para participar do nosso projeto é só clicar no link abaixo e fazer o seu cadastro, ou envie um e-mail para <a href="mailto:padrinho@brinca.ca?subject=Cadastro - Gostaria de ser Padrinho/Apadrinhado">padrinho@brinca.ca</a>. Este é um trabalho 100% voluntário e coordenado também por voluntários, portanto, você não precisa pagar nada.</p>
      </div>
      <div className={`text-center py-5`}>
        <Button title={`Quero apadrinhar um recém chegado`} link={`/apadrinhar`} type={`primary`} className={`mb-3 mr-2`} />
        <Button title={`Quero ser apadrinhado`} link={`/ser-apadrinhado`} type={`primary`} className={`mb-3`} />
      </div>
    </section>
  )
}

export default Padrinho
