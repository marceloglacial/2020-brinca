import PageHeader from './PageHeader';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

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
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
    ],
  };

  return (
    <>
      <PageHeader {...data} />
      <Menu {...data} />
      <Main {...data}>{props.children}</Main>
      <Footer {...data} />
    </>
  );
};
export default Layout;
