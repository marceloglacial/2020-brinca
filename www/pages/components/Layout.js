import PageHeader from './PageHeader';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  const data = {
    siteInfo: {
      title: 'Brinca 2020',
      description: 'Brazilian website',
    },
    page: {
      name: 'Home',
    },
    topMenu: [
      {
        pt: {
          name: 'Conheça a Brinca',
          link: '/conheca',
        },
      },
      {
        pt: {
          name: 'Nossa missão',
          link: '/missao',
        },
      },
      {
        pt: {
          name: 'Quem Somos',
          link: '/quem-somos',
        },
      },
    ],
  };

  return (
    <>
      <PageHeader {...data} />
      <Header />
      <Menu {...data} />
      <Main {...data}>{props.children}</Main>
      <Footer {...data} />
    </>
  );
};
export default Layout;
