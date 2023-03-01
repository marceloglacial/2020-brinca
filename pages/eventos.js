import ContentList from 'components/Blocks/ContentList/ContentList';
import Layout from 'components/Layout/Layout';
import { getNavigation } from 'functions/getNavigation';

const Home = ({ navigation }) => {
  return (
    <Layout pageTitle={'Eventos'} navigation={navigation}>
      <ContentList title='Eventos' contentType={'events'} />
    </Layout>
  );
};

export async function getStaticProps() {
  const navigation = await getNavigation();
  return {
    props: {
      navigation,
    },
    revalidate: 30,
  };
}

export default Home;
