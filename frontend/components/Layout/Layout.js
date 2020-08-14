import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import LayoutLoading from './LayoutLoading';
import dataContext from 'context/dataContext';

const Layout = (props) => {
  const [pages, setPages] = useState(null);
  const [data, setData] = useState(null);
  const [footerMenu, setFooterMenu] = useState(null);

  const fetchData = (endpoint, setter) => {
    return fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setter(data));
  };

  useEffect(() => {
    fetchData('wp/v2/pages/', setPages);
    fetchData('menus/v1/menus/main', setData);
    fetchData('menus/v1/menus/footer', setFooterMenu);
  }, []);

  // Loading states
  if (!data || !pages || !footerMenu) return <LayoutLoading />;

  const menuItems = data.items;

  const pageProps = {
    menuItems,
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
      {props.children}
      <Footer />
    </dataContext.Provider>
  );
};
export default Layout;
