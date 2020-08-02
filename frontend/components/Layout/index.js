import Head from 'components/Head';
import { Container } from 'react-bootstrap';
import Header from 'components/Header';

const Layout = (props) => {
  return (
    <>
      <Head />
      <Container fluid>
        <Header />
      </Container>
      <Container fluid>{props.children}</Container>
    </>
  );
};
export default Layout;
