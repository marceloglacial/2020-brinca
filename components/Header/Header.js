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
        <div
          className={`${headStyles.mobile} ${headStyles.tablet} ${headStyles.desktop}`}
        >
          <HeaderNav {...props} />
          <MenuSubscribe {...props} />
        </div>
      </div>
    </nav>
  );
};
export default Header;

const headStyles = {
  mobile: 'd-none',
  tablet: '',
  desktop: 'd-xl-flex gap-1 align-items-center',
};
