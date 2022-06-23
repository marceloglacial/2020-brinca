import Layout from 'components/Layout/Layout'
import Padrinho from 'components/Padrinho/Padrinho'
import { getData } from 'functions/getData';

const Apadrinhamento = (props) => {
  const { headerMenu } = props
  const { title } = headerMenu?.items[2] || ''

  return (
    <Layout pageTitle={title} {...props}>
      <header data-aos='fade-in'>
        <h1
          className='content-title'
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </header>
      <Padrinho />
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
