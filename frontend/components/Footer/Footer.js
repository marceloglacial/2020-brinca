import { Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './styles.module.scss';

import dataContext from 'context/dataContext';
import { useContext } from 'react';

const Footer = (props) => {
  const { footerMenu } = useContext(dataContext);
  const menuItems = footerMenu.items;
  return (
    <>
      <Container className={styles.footer} fluid>
        <Nav className='justify-content-center py-4'>
          {menuItems.map((item) => {
            const { ID, title, slug, icon, url, style } = item;
            if (!slug) {
              return (
                <Nav.Link
                  key={ID}
                  href={url}
                  target='_blank'
                  className={`mx-3 ${style && styles.navItemHighlight}`}
                >
                  {icon && <i className={`${icon} mr-2`}></i>}
                  {title}
                </Nav.Link>
              );
            }
            return (
              <Link href={slug} key={ID}>
                <Nav.Link
                  href={slug}
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
