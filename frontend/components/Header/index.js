import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import Logo from 'components/Logo';
import Link from 'next/link';
import styles from './styles.module.scss';

const Header = (props) => {
  const menuItems = [
    {
      id: 1,
      title: 'Quem somos',
      link: '/quem-somos',
    },
    {
      id: 2,
      title: 'Associe-se',
      link: '/associe-se',
    },
    {
      id: 3,
      title: 'Eventos',
      link: '/eventos',
    },
    {
      id: 4,
      title: 'Fale Conosco',
      link: '/fale-conosco',
    },
  ];

  return (
    <Container>
      <Navbar expand='lg'>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className={styles.navBarButton}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {menuItems.map((item) => {
              const { id, title, link } = item;
              return (
                <Link href={link} key={id}>
                  <Nav.Link className={styles.topNavLink} href={link}>
                    {title}
                  </Nav.Link>
                </Link>
              );
            })}
          </Nav>
          <Nav>
            <NavDropdown
              title='Idioma'
              id='basic-nav-dropdown'
              className={styles.dropDownNavLink}
            >
              <NavDropdown.Item>Português</NavDropdown.Item>
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>Française</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default Header;
