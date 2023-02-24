import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getHomePageData } from 'functions/getHomepageData';
import useApi from 'hooks/useApi';

const Home = ({ navigation, blocks }) => {
  return (
    <Layout
      pageTitle={`Sua comunidade Brasileira em Ottawa-Gatineau!`}
      navigation={navigation}
    >
      {blocks?.map((block, index) => (
        <Blocks {...block} id={index} key={index} />
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const blocks = await getHomePageData();
  return {
    props: {
      blocks,
      navigation: [],
    },
    revalidate: 30,
  };
}

export default Home;
