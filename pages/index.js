import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getData } from 'functions/getData';
import getRecords from 'functions/getRecords';
import Partners from 'components/Blocks/Partners/Partners';

const Blog = (props) => {
  const { posts, frontPage, partners } = props;
  const blocks = frontPage[0].blockData.map((block, index) => {
    const blockProps = {
      ...block,
      posts,
    };
    return <Blocks {...blockProps} key={index} />;
  });

  return (
    <Layout
      pageTitle={`Sua comunidade Brasileira em Ottawa-Gatineau!`}
      {...props}
    >
      <Partners data={partners} />
      {blocks}
    </Layout>
  );
};

export async function getStaticProps() {
  const partners =
    (await getRecords({
      spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
      range: 'Companies!A1:AB',
    })) || [];
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
      partners,
    },

    revalidate: 30,
  };
}

export default Blog;
