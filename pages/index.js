import Layout from 'components/Layout/Layout';
import Content from 'components/Content/Content';

const Index = (props) => {
  // TODO: Get front page from REST API
  return (
    <Layout>
      <Content slug={'pagina-inicial'} frontpage />
    </Layout>
  );
};
export default Index;
