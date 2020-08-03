import Head from 'next/head';
import Header from 'components/Header';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Brinca 2020 </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {props.children}
    </>
  );
};
export default Layout;
