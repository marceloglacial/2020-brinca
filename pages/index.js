import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getData } from 'functions/getData';

const Blog = (props) => {
  const { posts, pages } = props;
  const blocks = pages[0].blocks.map((block, index) => {
    const blockProps = {
      ...block,
      posts,
    };
    return <Blocks {...blockProps} key={index} />;
  });

  return <Layout {...props}>{blocks}</Layout>;
};

export async function getStaticProps() {
  const allData = (await getData()) || {};
  const {
    posts = [],
    pages = [],
    headerMenu = [],
    footerMenu = [],
    subscribeMenu = [],
    socialMenu = [],
  } = allData;
  return {
    props: {
      posts,
      pages,
      headerMenu,
      footerMenu,
      subscribeMenu,
      socialMenu,
    },
    revalidate: 1,
  };
}

export default Blog;
