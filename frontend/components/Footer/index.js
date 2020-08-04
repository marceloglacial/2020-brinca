import { Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './styles.module.scss';

const Footer = (props) => {
  const menuItems = [
    {
      id: 1,
      title: 'Associe-se',
      link: 'associe-se',
      style: true,
    },
    {
      id: 2,
      title: 'Facebook',
      link: '/',
      icon: 'fab fa-facebook-square',
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
        <Nav className='justify-content-center py-4'>
          {menuItems.map((item) => {
            const { id, title, link, icon, style } = item;
            return (
              <Link href={link} key={id}>
                <Nav.Link
                  href={link}
                  className={`mx-3 ${style && styles.navItemHighlight}`}
                >
                  {icon && <i className={`${icon} mr-2`}></i>}
                  {title}
                </Nav.Link>
              </Link>
            );
          })}
        </Nav>
      </Container>
      <Container className={styles.copyright}>
        <Nav className={`justify-content-center py-3`}>
          <Nav.Item>Copyrights Brinca - 2020</Nav.Item>
        </Nav>
      </Container>
    </>
  );
};
export default Footer;
