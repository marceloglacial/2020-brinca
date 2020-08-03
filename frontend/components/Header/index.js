import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import Logo from 'components/Logo';
import Link from 'next/link';
import styles from './styles.module.scss';

const Header = (props) => {
  return (
    <Container>
      <Navbar expand='lg'>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link href='/fale-conosco'>
              <Nav.Link className={styles.topNavLink} href='/fale-conosco'>
                Quem Somos
              </Nav.Link>
            </Link>
            <Link href='/eventos/'>
              <Nav.Link className={styles.topNavLink} href='/eventos/'>
                Eventos
              </Nav.Link>
            </Link>
            <Link href='/fale-conosco'>
              <Nav.Link className={styles.topNavLink} href='/fale-conosco'>
                Fale Conosco
              </Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title='Language' id='basic-nav-dropdown'>
              <NavDropdown.Item>Português</NavDropdown.Item>
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>Frensh</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default Header;
