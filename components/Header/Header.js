import Logo from 'components/Logo/Logo';
import HeaderNav from './HeaderNav';
import styles from './Header.module.scss';
import { useState } from 'react';
import HeaderNavButton from './HeaderNavButton';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`container d-flex justify-content-between ${styles.navbarContainer}`}
    >
      <div className={`navbar-brand mx-0 ${styles.brandLogo}`}>
        <Logo />
      </div>
      <div className={`d-flex ${styles.navigation}`}>
        <div
          className={`${styles.navigationButton} ${
            isOpen && styles.navigationButtonIsOpen
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? `Close` : <HeaderNavButton />}
        </div>
        <nav
          className={`navbar navbar-expand-lg ${styles.navigationNav} ${
            isOpen && styles.navigationNavIsOpen
          }`}
          onClick={() => setIsOpen(false)}
        >
          <HeaderNav {...props} />
        </nav>
      </div>
    </div>
  );
};
export default Header;
