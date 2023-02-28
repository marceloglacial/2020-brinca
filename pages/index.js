import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getHomePage } from 'functions/getHomepage';

const Home = ({ navigation, pageData }) => {
  const { blocks } = pageData;
  return (
    <Layout navigation={navigation}>
      {blocks?.map((block, index) => (
        <Blocks {...block} id={index} key={index} />
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const pageData = await getHomePage();
  return {
    props: {
      pageData: pageData,
      navigation: [],
    },
    revalidate: 30,
  };
}

export default Home;
