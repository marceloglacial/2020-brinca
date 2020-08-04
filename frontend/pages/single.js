import Layout from 'components/Layout';
import Main from 'components/Main';

const Home = (props) => {
  return (
    <>
      <Layout {...props}>
        <Main {...props} />
      </Layout>
    </>
  );
};
export default Home;
