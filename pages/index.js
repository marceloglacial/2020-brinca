import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getContentful } from 'functions/getContentful';

const Home = ({ navigation, blocks, events }) => {
  console.log(events);
  return (
    <Layout
      pageTitle={`Sua comunidade Brasileira em Ottawa-Gatineau!`}
      navigation={navigation}
    >
      {blocks?.map((block) => (
        <Blocks {...block} key={block.id} />
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const events = await getContentful('eventos');
  return {
    props: {
      blocks: [],
      navigation: [],
      events,
    },
    revalidate: 30,
  };
}

export default Home;
