import Logo from 'components/Logo/Logo';
import Link from 'next/link';
import styles from './Header.module.scss';
import useMenu from 'functions/useMenu';
import HeaderLoading from './HeaderLoading';
import Alert from 'components/Alert/Alert';
import MenuSubscribe from './MenuSusbcribe';

const Header = (props) => {
  const { menuContent, isLoading, isError } = useMenu('header');

  if (isLoading) return <HeaderLoading />;
  if (isError) return <Alert title='Data error' />;
  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarContainer}`}>
      <div className='container'>
        <div className={`navbar-brand mx-0 ${styles.brandLogo}`}>
          <Logo />
        </div>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            {menuContent.items.map((item) => {
              const { ID, title, slug } = item;
              return (
                <li className='nav-item mx-3' key={ID}>
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
