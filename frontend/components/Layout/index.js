import Head from 'components/Head';
import Header from 'components/Header';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Brinca 2020 </title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      {props.children}
    </>
  );
};
export default Layout;
