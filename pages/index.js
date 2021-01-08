import { useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import Content from 'components/Content/Content';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = (props) => {
  // TODO: Get front page from REST API
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <Content slug={['pagina-inicial']} frontpage />
    </Layout>
  );
};
export default Index;
