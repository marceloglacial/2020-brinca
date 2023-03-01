import Layout from 'components/Layout/Layout';
import Padrinho from 'components/Padrinho/Padrinho';
import { getHomePage } from 'functions/getHomepage';
import { getNavigation } from 'functions/getNavigation';

const Apadrinhamento = (props) => {
  const { navigation } = props;
  return (
    <Layout navigation={navigation}>
      <header data-aos='fade-in'>
        <h1 className='content-title'>Padrinhos</h1>
      </header>
      <Padrinho />
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

export default Apadrinhamento;
