import { useEffect } from 'react';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <Head>
        <title>Brinca 2020 </title>
        <meta name='description' content='Brinca 2020' />
        <meta name='keywords' content='description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <a className='skip-link' href='#main'>
        Skip to main
      </a>
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};
export default Layout;
