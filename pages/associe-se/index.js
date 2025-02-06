import Layout from 'components/Layout/Layout';
import { getNavigation } from 'functions/getNavigation';

const AssocieSe = (props) => {
  const { navigation } = props;
  return (
    <Layout pageTitle={'Associe-se'} navigation={navigation}>
      <header data-aos='fade-in'>
        <h1 className='content-title'>Associe-se</h1>
      </header>
      <section className='padrinho pt-0'>
        <p>
          Junte-se à BRINCA e ajude-nos a fazer a diferença! Sua associação nos
          ajuda a continuar com as tivividades que desenvolvemos anualment para
          a comunidade brasileira de Ottawa-Gatineau
        </p>
        <h4 className='text-center'>Opções e Valores de Assinatura</h4>
        <p>
          Abaixo as opções de “membership” para se adequar às suas necessidades:
        </p>
        <ul>
          <li>
            Membership Familiar: CAD$30 (cobre todos os membros da família
            residentes no mesmo endereço)
          </li>
          <li>Membership Individual: CAD$20</li>
        </ul>
        <p>
          Tornar-se membro da BRINCA é fácil! Basta clicar no link abaixo,
          preencher o formulário e concluir seu pagamento seguro via Zeffy.
        </p>
        <p>
          <strong>ATENÇÃO:</strong> A BRINCA utiliza a plataforma gratuita
          Zeffy, que solicita uma contribuição opicional ao final da sua compra.
        </p>
        <br />
        <p className='text-center'>
          <a
            href='https://www.zeffy.com/en-CA/ticketing/brazil-canada-commnity-association-memberships--2025'
            className='btn btn-primary'
            target='_blank'
          >
            Clique aqui para se cadastrar!
          </a>
        </p>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const navigation = await getNavigation();
  return {
    props: {
      navigation,
    },
    revalidate: 30,
  };
}

export default AssocieSe;
