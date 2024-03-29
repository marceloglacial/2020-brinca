import Alert from 'components/Alert/Alert';
import getSlug from 'functions/getSlug';
import Link from 'next/link';
import styles from './Header.module.scss';

const MenuSubscribe = (props) => {
  const menuContent = props.subscribeMenu;

  const isError = menuContent === undefined ? true : false;
  if (isError) return <Alert title='Data error' />;

  const isLoading = menuContent.length === 0;
  if (isLoading) return <HeaderLoading />;

  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <ul className={`navbar-nav ml-3 ${styles.navigation__subscribe}`}>
      {menuContent.items.map((item) => {
        const { ID, title, url } = item;
        return (
          <li className={`nav-item ${styles.navigation__item}`} key={ID}>
            <Link href={`/${getSlug(url)}`}>
              <a href={`/${getSlug(url)}`} className={`btn btn-primary ${styles.topNavLink} ${styles.topNavLinkBtn} ${styles.navigation__link}`}>
                {title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MenuSubscribe;
