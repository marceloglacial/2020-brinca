import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import LayoutLoading from './LayoutLoading';
import dataContext from 'context/dataContext';
import fetchData from 'functions/fechData';

const Layout = (props) => {
  const [pages, setPages] = useState(null);
  const [headerMenu, setHeaderMenu] = useState(null);
  const [footerMenu, setFooterMenu] = useState(null);

  useEffect(() => {
    fetchData('menus/v1/menus/header', setHeaderMenu);
    fetchData('menus/v1/menus/footer', setFooterMenu);
  }, []);

  // Loading states
  if (!headerMenu || !footerMenu) return <LayoutLoading />;

  const pageProps = {
    menuItems: headerMenu.items,
    pages,
    footerMenu,
  };

  return (
    <dataContext.Provider value={pageProps}>
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
      {props.children}
      <Footer />
    </dataContext.Provider>
  );
};
export default Layout;
