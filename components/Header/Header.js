import Logo from 'components/Logo/Logo';
import MenuSubscribe from './MenuSusbcribe';
import HeaderNav from './HeaderNav';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarContainer}`}>
      <div className='container'>
        <div className={`navbar-brand mx-0 ${styles.brandLogo}`}>
          <Logo />
        </div>
        <div className={`d-none d-xl-flex gap-1 align-items-center`}>
          <HeaderNav {...props} />
          <MenuSubscribe {...props} />
        </div>
      </div>
    </nav>
  );
};
export default Header;
