import Layout from 'components/Layout/Layout'
import Padrinho from 'components/Padrinho/Padrinho'
import { getData } from 'functions/getData';

const Apadrinhamento = (props) => {
  const { headerMenu } = props

  return (
    <Layout pageTitle={`Torne-se um Padrinho`} {...props}>
      <Padrinho title={`Apadrinhe um recém-chegado ao Canada!`} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allData = (await getData()) || {};
  const {
    frontPage = [],
    headerMenu = [],
    footerMenu = [],
    subscribeMenu = [],
    socialMenu = [],
  } = allData;
  return {
    props: {
      frontPage,
      headerMenu,
      footerMenu,
      subscribeMenu,
      socialMenu,
    },
    revalidate: 30,
  };
}

export default Apadrinhamento
