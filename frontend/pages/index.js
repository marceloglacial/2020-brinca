import Header from 'components/Head';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import HighLights from 'components/Highlights';
import Footer from 'components/Footer';

const Home = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <HighLights />
        <Footer />
      </Layout>
    </>
  );
};
export default Home;
