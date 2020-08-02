import Header from 'components/Head';
import Layout from 'components/Layout';
import Hero from 'components/Hero';

const Home = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};
export default Home;
