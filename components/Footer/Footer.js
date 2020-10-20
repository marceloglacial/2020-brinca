import { Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Footer.module.scss';
import useMenu from 'functions/useMenu';
import FooterLoading from './FooterLoading';

const Footer = (props) => {
  const year = new Date().getUTCFullYear();
  const { menuContent, isLoading, isError } = useMenu('footer');

  if (isLoading) return <FooterLoading />;
  if (isError) return <HeaderError />;

  return (
    <footer>
      <Container className={styles.footer} fluid>
        <Nav className='justify-content-center py-4  flex-column flex-sm-row'>
          {menuContent.items.map((item) => {
            const { ID, title, slug, icon, url } = item;
            if (!slug) {
              return (
                <Nav.Link
                  key={ID}
                  href={url}
                  target='_blank'
                  className={`mx-3`}
                >
                  {icon && <i className={`${icon} mr-2`}></i>}
                  {title}
                </Nav.Link>
              );
            }
            return (
              <Link href={slug} key={ID}>
                <Nav.Link href={slug} className={`mx-3`}>
                  {icon && <i className={`${icon} mr-2`}></i>}
                  {title}
                </Nav.Link>
              </Link>
            );
          })}
        </Nav>
      </Container>
      <Container className={styles.copyright}>
        <Nav
          className={`justify-content-center py-4 flex-column flex-sm-row ${styles.copyrightMenu}`}
        >
          <Nav.Item className={`py-2 px-3`}>
            Copyrights Brinca - {year}
          </Nav.Item>
          <Nav.Item className={`py-2 px-3`}>
            <a href={`http://marceloglacial.com`}>
              Developed by Marcelo Glacial
            </a>
          </Nav.Item>
          <Nav.Item className={`py-2 px-3`}>
            <a href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-admin`}>
              User Login
            </a>
          </Nav.Item>
        </Nav>
      </Container>
    </footer>
  );
};
export default Footer;
