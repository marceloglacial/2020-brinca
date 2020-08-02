import { Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './styles.module.scss';

const Footer = (props) => {
  return (
    <>
      <Container className={styles.footer} fluid>
        <Nav className='justify-content-center py-3'>
          <Link href='/fale-conosco'>
            <Nav.Link href='/fale-conosco'>Associe-se</Nav.Link>
          </Link>
          <Link href='/eventos/'>
            <Nav.Link href='/eventos/'>FaceBook</Nav.Link>
          </Link>
          <Link href='/fale-conosco'>
            <Nav.Link href='/fale-conosco'>Quem Somos</Nav.Link>
          </Link>
        </Nav>
      </Container>
      <Container className={styles.copyright}>
        <Nav className={`justify-content-center py-3`}>
          <Link href='/fale-conosco'>
            <Nav.Item>Copyrights Brinca - 2020</Nav.Item>
          </Link>
        </Nav>
      </Container>
    </>
  );
};
export default Footer;
