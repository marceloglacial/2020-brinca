import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getData } from 'functions/getData';
import getRecords from 'functions/getRecords';

const Blog = (props) => {
  const { posts, frontPage, members } = props;
  const blocks = frontPage[0].blockData.map((block, index) => {
    const blockProps = {
      ...block,
      posts,
    };
    return <Blocks {...blockProps} key={index} />;
  });
  console.log('index', members);

  return (
    <Layout
      pageTitle={`Sua comunidade Brasileira em Ottawa-Gatineau!`}
      {...props}
    >
      {blocks}
    </Layout>
  );
};

export async function getStaticProps() {
  const members = (await getRecords()) || [];
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
      members,
    },

    revalidate: 30,
  };
}

export default Blog;
