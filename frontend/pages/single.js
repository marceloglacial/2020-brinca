import Layout from 'components/Layout';
import Main from 'components/Main';
import Content from '../components/Content';

const Home = (props) => {
  return (
    <>
      <Layout {...props}>
        <Main {...props}>
          <Content {...props} />
        </Main>
      </Layout>
    </>
  );
};
export default Home;
