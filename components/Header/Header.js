import Logo from 'components/Logo/Logo';
import Link from 'next/link';
import styles from './Header.module.scss';
import useMenu from 'functions/useMenu';
import HeaderLoading from './HeaderLoading';
import HeaderError from './HeaderError';
import MenuSubscribe from './MenuSusbcribe';

const Header = (props) => {
  const { menuContent, isLoading, isError } = useMenu('header');

  if (isLoading) return <HeaderLoading />;
  if (isError) return <HeaderError />;

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${styles.navbarContainer}`}
    >
      <div className='container'>
        <div className='navbar-brand'>
          <Logo />
        </div>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            {menuContent.items.map((item) => {
              const { ID, title, slug } = item;
              return (
                <li className='nav-item mx-2' key={ID}>
                  <Link href={slug} key={ID}>
                    <a className={`nav-link ${styles.topNavLink}`} href={slug}>
                      {title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <MenuSubscribe />
        </div>
      </div>
    </nav>
  );
};
export default Header;
