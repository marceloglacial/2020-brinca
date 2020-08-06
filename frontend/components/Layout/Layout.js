import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import LayoutLoading from './LayoutLoading';
import dataContext from 'context/dataContext';

const Layout = (props) => {
  const [pages, setPages] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/pages/`)
      .then((response) => response.json())
      .then((data) => setPages(data));

    fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/menus/v1/menus/main`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // Loading states
  if (!data || !pages) return <LayoutLoading />;

  const menuItems = data.items;

  const pageProps = {
    menuItems,
    pages,
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
