import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { useRouter } from 'next/router';
import { getData } from 'functions/getData';

const Post = (props) => {
  const { post } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const title = post[0]?.title?.rendered;

  const blocks = post[0].blockData.map((block, index) => {
    return <Blocks {...block} key={index} />;
  });

  return (
    <Layout pageTitle={title} {...props}>
      <header data-aos='fade-in'>
        <h1
          className='content-title'
          dangerouslySetInnerHTML={{ __html: title }}
        />
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
  const res = await fetch(`${wordpressApiUrl}/posts`);
  const posts = await res.json();
  const paths = posts.map((page) => ({
    params: { slug: page.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const pageRes = await fetch(`${wordpressApiUrl}/posts?slug=${params.slug}`);
  const post = await pageRes.json();
  const allData = (await getData()) || {};
  const {
    headerMenu = [],
    footerMenu = [],
    subscribeMenu = [],
    socialMenu = [],
  } = allData;

  return {
    props: {
      post,
      params,
      headerMenu,
      footerMenu,
      subscribeMenu,
      socialMenu,
    },
    revalidate: 30,
  };
}

export default Post;
