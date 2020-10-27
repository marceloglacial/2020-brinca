import { Nav, Navbar, Container } from 'react-bootstrap';
import Logo from 'components/Logo/Logo';
import Link from 'next/link';
import styles from './Header.module.scss';
import useMenu from 'functions/useMenu';
import HeaderLoading from './HeaderLoading';
import HeaderError from './HeaderError';

const Header = (props) => {
  const { menuContent, isLoading, isError } = useMenu('header');

  if (isLoading) return <HeaderLoading />;
  if (isError) return <HeaderError />;

  //
  // WIP: Remove React Bootstrap
  //

  return (
    <Navbar expand='lg' fixed='top' className={styles.navbarContainer}>
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className={styles.navBarButton}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {menuContent.items.map((item) => {
              const { ID, title, slug } = item;
              return (
                <Link href={slug} key={ID}>
                  <Nav.Link className={styles.topNavLink} href={slug}>
                    {title}
                  </Nav.Link>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
