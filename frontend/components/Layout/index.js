import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Brinca 2020 </title>
        <meta name='description' content='Brinca 2020' />
        <meta name='keywords' content='description' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
