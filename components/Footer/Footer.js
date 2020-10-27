import Link from 'next/link';
import styles from './Footer.module.scss';
import useMenu from 'functions/useMenu';
import FooterLoading from './FooterLoading';
import FooterError from './FooterError';

const Footer = (props) => {
  const year = new Date().getUTCFullYear();
  const { menuContent, isLoading, isError } = useMenu('footer');

  if (isLoading) return <FooterLoading />;
  if (isError) return <FooterError />;

  return (
    <footer>
      <div className={`container-fluid ${styles.footer}`}>
        <ul className='nav justify-content-center py-3'>
          {menuContent.items.map((item) => {
            const { ID, title, slug } = item;
            return (
              <li className='nav-item' key={ID}>
                <Link href={slug} key={ID}>
                  <a className='nav-link' href={slug}>
                    {title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`container-fluid`}>
        <ul
          className={`nav justify-content-center py-3 ${styles.copyrightMenu}`}
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
    </footer>
  );
};
export default Footer;
