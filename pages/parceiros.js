import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getData } from 'functions/getData';
import getRecords from 'functions/getRecords';
import Partners from 'components/Blocks/Partners/Partners';

const Parceiros = (props) => {
  const { partners, categories } = props;

  return (
    <Layout pageTitle={`Parceiros`} {...props}>
      <Partners data={partners} categories={categories} />
    </Layout>
  );
};

export async function getStaticProps() {
  const partners =
    (await getRecords({
      spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
      range: 'Companies!A1:AB',
    })) || [];
  const categories =
    (await getRecords({
      spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
      range: 'Categories!A1:AB',
    })) || [];
  const allData = (await getData()) || {};
  const {
    headerMenu = [],
    footerMenu = [],
    subscribeMenu = [],
    socialMenu = [],
  } = allData;
  return {
    props: {
      headerMenu,
      footerMenu,
      subscribeMenu,
      socialMenu,
      partners,
      categories,
    },

    revalidate: 30,
  };
}

export default Parceiros;
