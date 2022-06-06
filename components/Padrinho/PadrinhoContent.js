import Link from 'next/link'

const PadrinhosContent = (props) => {

  const { title } = props

  return (
    <section data-aos="fade-in" className="aos-init aos-animate">
      <h1 className="content-title">{title}</h1>
      <div>
        <div>
          <p>Todos nós, que vivemos em um novo país, certamente fomos ajudados por alguém em algum momento da nossa chegada. São muitos os desafios, desde burocracias como carteira de habilitação, cartão de saúde até coisas mais simples, como escolher marca de sabão no supermercado. Temos que aprender tudo novamente e o choque cultural pode ser amenizado quando encontramos compatriotas dispostos a nos ajudar nesse processo.</p>
        </div>
        <div>
          <p>Pensando em facilitar o encontro entre essas pessoas na comunidade, a BRINCA criou o projeto de apadrinhamento. Através de um cadastro simples, selecionamos os perfis que mais se adequam e o contato entre padrinho e apadrinhado é feito. A partir daí os dois lados poderão combinar a melhor forma de comunicação e periodicidade dos encontros. Não há limites!</p>
        </div>
        <div>
          <p>Queremos criar uma comunidade cada vez mais forte e unida, e acreditamos que esse link possa criar laços fortes entre as pessoas. Aquele que foi ajudado pode ser o que ajuda no futuro, e assim todos ganham.</p>
        </div>
        <div>
          <p>Para participar do nosso projeto é só clicar no link abaixo e fazer o seu cadastro, ou envie um e-mail para <Link href="mailto:padrinho@brinca.ca?subject=Cadastro - Gostaria de ser Padrinho/Apadrinhado">padrinho@brinca.ca</Link>. Este é um trabalho 100% voluntário e coordenado também por voluntários, portanto, você não precisa pagar nada.</p>
        </div>
      </div>
    </section>
  )
}

export default PadrinhosContent
