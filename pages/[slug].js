import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getPages, getSinglePage } from 'functions/getPages';
import { getNavigation } from 'functions/getNavigation';

const Page = ({ navigation, pageData }) => {
  const { title, blocks } = pageData;
  return (
    <Layout pageTitle={title} navigation={navigation}>
      <h2>{title}</h2>
      {blocks?.map((block, index) => (
        <Blocks {...block} id={index} key={index} />
      ))}
    </Layout>
  );
};

export async function getStaticPaths() {
  const allPages = await getPages();
  const paths = allPages.map((page) => ({
    params: { slug: page.attributes.slug },
  }));
  return { paths, fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
  const pageData = await getSinglePage(params.slug);
  const navigation = await getNavigation();

  return {
    props: {
      pageData: pageData,
      navigation,
    },
    revalidate: 30,
  };
}

export default Page;
