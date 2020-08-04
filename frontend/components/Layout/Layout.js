import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import useSWR from 'swr';
import fetcher from 'functions/fetcher';

const Layout = (props) => {
  const { data, error } = useSWR(
    'http://localhost:8000/wp-json/menus/v1/menus/main',
    fetcher
  );

  const menuItems = data ? data.items : [];

  const pageProps = {
    menuItems,
  };

  return (
    <>
      <Head>
        <title>Brinca 2020 </title>
        <meta name='description' content='Brinca 2020' />
        <meta name='keywords' content='description' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header {...pageProps} />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
