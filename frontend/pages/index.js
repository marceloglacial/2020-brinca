import Layout from 'components/Layout/Layout';
import Hero from 'components/Hero/Hero';
import HighLights from 'components/Highlights/Highlights';

const Home = (props) => {
  return (
    <Layout>
      <Hero />
      <HighLights />
    </Layout>
  );
};
export default Home;
