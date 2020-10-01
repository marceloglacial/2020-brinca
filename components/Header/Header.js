import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import Logo from 'components/Logo/Logo';
import Link from 'next/link';
import styles from './Header.module.scss';

import dataContext from 'context/dataContext';
import { useContext } from 'react';

const Header = (props) => {
  const { menuItems } = useContext(dataContext);
  const items = menuItems
    ? menuItems
    : [{ ID: 0, title: 'Please create a menu called Header', slug: '/' }];

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
            {items.map((item) => {
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
