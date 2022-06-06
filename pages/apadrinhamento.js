import Layout from 'components/Layout/Layout'
import PadrinhoContent from 'components/Padrinho/PadrinhoContent'
import Button from 'components/Button/Button'
import { getData } from 'functions/getData';

const Apadrinhamento = (props) => {
  const { headerMenu } = props

  return (
    <Layout pageTitle={`Torne-se um Padrinho`} {...props}>
      <PadrinhoContent title={`Apadrinhe um recém-chegado ao Canada!`} />
      <section className={`text-center`}>
        <Button title={`Quero apadrinhar um recém chegado`} link={`/apadrinhar`} type={`primary`} className={`mb-3 mr-2`} />
        <Button title={`Quero ser apadrinhado`} link={`/ser-apadrinhado`} type={`primary`} className={`mb-3`} />
      </section>
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
