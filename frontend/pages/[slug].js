import Layout from 'components/Layout/Layout';
import Main from 'components/Main/Main';
import Content from '../components/Content/Content';

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
