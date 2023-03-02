import Link from 'next/link';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { CMS_ADMIN_URL } from '../../constants';

const Footer = (props) => {
  const year = new Date().getUTCFullYear();
  const { navigation } = props;
  return (
    <footer className={`${styles.footer} container`}>
      <div className={`${styles.footerNav}`}>
        <ul
          className={`container align-items-center justify-content-sm-center ${styles.menuNav}`}
        >
          <li className={`${styles.footerLogo}`}>
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
          {navigation?.items?.map((item) => {
            const { id, title, slug, url } = item;
            const link = slug ? `/${slug}` : url;

            return (
              <li className={styles.menuLink} key={id}>
                <Link href={link}>
                  <a href={link}>{title}</a>
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
          <li className='nav-item p-2'>Copyrights Brinca - {year}</li>
          <li className='nav-item'>
            <a href={`http://marceloglacial.com`} className='nav-link'>
              Developed by Marcelo Glacial
            </a>
          </li>
          <li className='nav-item'>
            <a href={CMS_ADMIN_URL} className='nav-link'>
              User Login
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
