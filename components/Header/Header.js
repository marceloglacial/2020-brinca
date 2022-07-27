import Logo from 'components/Logo/Logo';
import MenuSubscribe from './MenuSusbcribe';
import HeaderNav from './HeaderNav';
import styles from './Header.module.scss';

const Header = (props) => {
  console.log(styles)
  return (
    <div className={`container d-flex justify-content-between ${styles.navbarContainer}`}>
      <div className={`navbar-brand mx-0 ${styles.brandLogo}`}>
        <Logo />
      </div>
      <nav className={`navbar navbar-expand-lg`}>
        <div className={`d-flex ${styles.navigation}`}>
          <input type="checkbox" className={`${styles.navigation__checkbox}`} id="nav__toggle" />
          <label htmlFor="nav__toggle" className={`${styles.navigation__button}`}>
            <span className={`${styles.navigation__icon}`}>&nbsp;</span>
          </label>
          <div className={`${styles.navigation__background}`}>&nbsp;</div>
          <HeaderNav {...props} />
          <MenuSubscribe {...props} />
        </div>
      </nav>
    </div>
  );
};
export default Header;


{/* <div class="navigation">
  <input type="checkbox" class="navigation__checkbox" id="nav__toggle" />

  <label for="nav__toggle" class="navigation__button">
      // navigation line
    <span class="navigation__icon">&nbsp;</span>
  </label>

  <div class="navigation__background">&nbsp;</div>

  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>About Natours</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your Benefits</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular Tours</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Book Now</a></li>
    </ul>
  </nav>
</div> */}
