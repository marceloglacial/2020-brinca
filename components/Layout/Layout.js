import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';

const Layout = (props) => {
  const { pageTitle, navigation } = props;
  const headerMenu = {
    items: navigation.map((item) => {
      return {
        id: item.id,
        title: item.text,
        url: item.value,
      };
    }),
  };

  return (
    <>
      <Head>
        <title>Brinca {pageTitle && `- ${pageTitle}`}</title>
        <meta
          name='description'
          content='Sua comunidade Brasileira em Ottawa-Gatineau!'
        />
        <meta
          name='keywords'
          content='brinca, brazil, ottawa, gatineau, canada'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header headerMenu={headerMenu} />
      <a className='skip-link' href='#main'>
        Skip to main
      </a>
      <Main>{props.children}</Main>
      {/* <Footer {...props} /> */}
    </>
  );
};
export default Layout;
