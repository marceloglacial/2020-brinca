import Layout from 'components/Layout';
import Hero from 'components/Hero';
import HighLights from 'components/Highlights';

const Home = (props) => {
  return (
    <>
      <Layout>
        <Hero />
        <HighLights />
      </Layout>
    </>
  );
};
export default Home;
