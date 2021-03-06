import Link from 'next/link';
import styles from './Footer.module.scss';
import FooterLoading from './FooterLoading';
import Alert from 'components/Alert/Alert';
import Image from 'next/image';
import FooterSocial from './FooterSocial';

const Footer = (props) => {
  const year = new Date().getUTCFullYear();
  const menuContent = props.footerMenu;

  const isError = menuContent === undefined ? true : false;
  if (isError) return <Alert title='Data error' />;

  const isLoading = menuContent.length === 0;
  if (isLoading) return <FooterLoading />;

  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <footer className={`${styles.footer} container`}>
      <div className={`${styles.footerNav}`}>
        <ul
          className={`container align-items-center justify-content-sm-center ${styles.menuNav}`}
        >
          <li className={`mr-auto ${styles.footerLogo}`}>
            <Link href='/'>
              <a href='/'>
                <Image
                  src='/images/logo-white.png'
                  alt='Brinca logo'
                  width={152}
                  height={60}
                />
              </a>
            </Link>
          </li>
          {menuContent.items.map((item) => {
            const { ID, title, slug } = item;
            return (
              <li className={styles.menuLink} key={ID}>
                <Link href={`/${slug}`} key={ID}>
                  <a href={`/${slug}`}>{title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.copyright}>
        <ul
          className={`nav justify-content-center flex-column flex-md-row py-3 ${styles.copyrightMenu}`}
        >
          <li className='nav-item' className='nav-link'>
            Copyrights Brinca - {year}
          </li>
          <li className='nav-item'>
            <a href={`http://marceloglacial.com`} className='nav-link'>
              Developed by Marcelo Glacial
            </a>
          </li>
          <li className='nav-item'>
            <a
              href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-admin`}
              className='nav-link'
            >
              User Login
            </a>
          </li>
        </ul>
      </div>
      <FooterSocial {...props} />
    </footer>
  );
};
export default Footer;
