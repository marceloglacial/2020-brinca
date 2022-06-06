import Layout from 'components/Layout/Layout';
import { getData } from 'functions/getData';
import getRecords from 'functions/getRecords';
import Partners from 'components/Blocks/Partners/Partners';
import slugify from 'functions/slugfy';

const ParceirosTag = (props) => {
  const { partners, categories, params } = props;

  return (
    <Layout pageTitle={`Parceiros`} {...props}>
      <Partners data={partners} filter={params.slug} categories={categories} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories =
    (await getRecords({
      spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
      range: 'Categories!A1:AB',
    })) || [];

  const paths = categories.map((item) => ({
    params: { slug: slugify(item[1]) },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
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
      params,
    },

    revalidate: 30,
  };
}
export default ParceirosTag;
