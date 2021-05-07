import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { useRouter } from 'next/router';
import { getData } from 'functions/getData';
import HtmlParser from 'react-html-parser';

const Page = (props) => {
  const { page } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const title = HtmlParser(page[0].title.rendered);

  const blocks = page[0].blocks.map((block, index) => {
    return <Blocks {...block} key={index} />;
  });

  return (
    <Layout pageTitle={title} {...props}>
      <header data-aos='fade-in'>
        <h1 className='content-title'>{title}</h1>
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
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const pageRes = await fetch(`${wordpressApiUrl}/pages?slug=${params.slug}`);
  const page = await pageRes.json();
  const allData = (await getData()) || {};
  const {
    headerMenu = [],
    footerMenu = [],
    subscribeMenu = [],
    socialMenu = [],
  } = allData;

  return {
    props: {
      page,
      params,
      headerMenu,
      footerMenu,
      subscribeMenu,
      socialMenu,
    },
    revalidate: 1,
  };
}

export default Page;
