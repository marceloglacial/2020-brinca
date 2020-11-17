import Link from 'next/link';
import styles from './Footer.module.scss';
import useMenu from 'functions/useMenu';
import FooterLoading from './FooterLoading';
import Alert from 'components/Alert/Alert';
import Image from 'next/image';

const Footer = (props) => {
  const year = new Date().getUTCFullYear();
  const { menuContent, isLoading, isError } = useMenu('footer');

  if (isLoading) return <FooterLoading />;
  if (isError) return <Alert title={`Data error`} />;
  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  const socialIcons = [
    {
      id: 1,
      title: 'facebook',
      link: 'http://facebook.com',
    },
    {
      id: 2,
      title: 'instagram',
      link: 'http://instagram.com',
    },
    {
      id: 3,
      title: 'linked-in',
      link: 'http://linkedin.com',
    },
    {
      id: 4,
      title: 'youtube',
      link: 'http://youtube.com',
    },
  ];

  return (
    <footer>
      <div className={`container p-3 ${styles.footerNav}`}>
        <ul
          className={`container align-items-center justify-content-sm-center ${styles.menuNav}`}
        >
          <li className={`mr-auto pt-2 ${styles.footerLogo}`}>
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
              <li className='pr-4 pt-3' key={ID}>
                <Link href={slug} key={ID}>
                  <a href={slug}>{title}</a>
                </Link>
              </li>
            );
          })}
          <li className={'ml-auto pt-3'}>
            {socialIcons.map((item) => {
              const { id, title, link } = item;
              return (
                <Link href={link} key={id}>
                  <a href={link}>
                    <Image
                      src={`/images/icon-${title}.png`}
                      alt={`logo ${title}`}
                      width={32}
                      height={32}
                    />
                  </a>
                </Link>
              );
            })}
          </li>
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
    </footer>
  );
};
export default Footer;
