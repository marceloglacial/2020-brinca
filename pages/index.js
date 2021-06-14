import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getData } from 'functions/getData';

const Blog = (props) => {
  const { posts, frontPage } = props;
  const blocks = frontPage[0].blocks.map((block, index) => {
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
      {blocks}
    </Layout>
  );
};

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

export default Blog;
