import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
const Layout = (props) => {
  const { title } = props;
  return (
    <>
      <Head>
        <title>{title && title + ' - '} Brinca 2020</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Nav />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};
export default Layout;
