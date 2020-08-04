import Layout from 'components/Layout';
import Hero from 'components/Hero';
import HighLights from 'components/Highlights';

const Home = (props) => {
  return (
    <>
      <Layout {...props}>
        <Hero {...props} />
        <HighLights {...props} />
      </Layout>
    </>
  );
};
export default Home;
