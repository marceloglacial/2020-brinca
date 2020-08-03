import { Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './styles.module.scss';

const Footer = (props) => {
  const menuItems = [
    {
      id: 1,
      title: 'Associe-se',
      link: 'associe-se',
    },
    {
      id: 2,
      title: 'Facebook',
      link: '/',
    },
    {
      id: 3,
      title: 'Associe-se',
      link: 'associe-se',
    },
  ];
  return (
    <>
      <Container className={styles.footer} fluid>
        <Nav className='justify-content-center py-3'>
          {menuItems.map((item) => {
            const { id, title, link } = item;
            return (
              <Link href={link} key={id}>
                <Nav.Link href={link}>{title}</Nav.Link>
              </Link>
            );
          })}
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
