import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';

const Blog = (props) => {
  const { posts, pages } = props;
  const { title } = pages[0];

  const blocks = pages[0].blocks.map((block, index) => {
    const blockProps = {
      ...block,
      posts,
    };
    return <Blocks {...blockProps} key={index} />;
  });

  return (
    <Layout>
      <header data-aos='fade-in'>
        <h1 className={`bottomLine`}>{title.rendered}</h1>
      </header>
      {blocks}
    </Layout>
  );
};

//
// Getting Data
// @see https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
//

const wordpressApiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2`;

export async function getStaticPaths() {
  const res = await fetch(`${wordpressApiUrl}/pages`);
  const pages = await res.json();
  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Get Posts
  const postRes = await fetch(`${wordpressApiUrl}/posts/`);
  const posts = await postRes.json();

  // Get Pages
  const pageRes = await fetch(`${wordpressApiUrl}/pages?slug=${params.slug}`);
  const pages = await pageRes.json();

  return {
    props: {
      posts,
      pages,
      params,
    },
    revalidate: 1,
  };
}

export default Blog;
