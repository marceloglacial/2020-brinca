import Logo from 'components/Logo/Logo';
import MenuSubscribe from './MenuSusbcribe';
import HeaderNav from './HeaderNav';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <div
      className={`container d-flex justify-content-between ${styles.navbarContainer}`}
    >
      <div className={`navbar-brand mx-0 ${styles.brandLogo}`}>
        <Logo />
      </div>
      <div className={`d-flex ${styles.navigation}`}>
        <input
          type='checkbox'
          className={`${styles.navigation__checkbox}`}
          id='nav__toggle'
        />
        <label htmlFor='nav__toggle' className={`${styles.navigation__button}`}>
          <span className={`${styles.navigation__icon}`}>&nbsp;</span>
        </label>
        <div className={`${styles.navigation__background}`}>&nbsp;</div>
        <nav className={`navbar navbar-expand-lg ${styles.navigation__nav}`}>
          <div className={`${styles.listsWrap}`}>
            <HeaderNav {...props} />
            {/* <MenuSubscribe {...props} /> */}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
