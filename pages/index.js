import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';

const Blog = (props) => {
  const { posts, pages } = props;
  const blocks = pages[0].blocks.map((block, index) => {
    const blockProps = {
      ...block,
      posts,
    };
    return <Blocks {...blockProps} key={index} />;
  });

  return <Layout>{blocks}</Layout>;
};

//
// Getting Data
// @see https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
//

const wordpressApiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2`;

export async function getStaticProps() {
  // Get Posts
  const postRes = await fetch(`${wordpressApiUrl}/posts/`);
  const posts = await postRes.json();

  // Get Pages
  const pageRes = await fetch(`${wordpressApiUrl}/pages?slug=pagina-inicial`);
  const pages = await pageRes.json();

  return {
    props: {
      posts,
      pages,
    },
    revalidate: 1,
  };
}

export default Blog;
