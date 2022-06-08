import HeaderLoading from './HeaderLoading';
import Alert from 'components/Alert/Alert';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useState } from 'react';

const HeaderNav = (props) => {
  const menuContent = props.headerMenu;

  const isError = menuContent === undefined ? true : false;
  if (isError) return <Alert title='Data error' />;

  const isLoading = menuContent.length === 0;
  if (isLoading) return <HeaderLoading />;

  const [isOpen, setIsOpen] = useState(false);

  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <ul className='navbar-nav ml-auto'>
      {menuContent.items.map((item) => {
        const { ID, title, slug, url, child_items } = item;
        const hasSubMenu = child_items && isOpen;
        const link = slug ? `/${slug}` : url;
        return (
          <li
            className={`nav-item mx-2 ${styles.navItem}`}
            key={ID}
            onMouseOver={() => child_items && setIsOpen(true)}
            onMouseLeave={() => child_items && setIsOpen(false)}
          >
            <Link href={link} key={ID}>
              <a className={`nav-link ${styles.topNavLink}`} href={link}>
                {title}
              </a>
            </Link>
            {hasSubMenu && (
              <ul className={styles.navbarSub} data-aos='fade-in'>
                {child_items.map((child, index) => {
                  const childLink = child.slug ? `/${child.slug}` : child.url;

                  return (
                    <li className={`nav-item ${styles.navSubItem}`} key={index}>
                      <Link href={childLink} key={index}>
                        <a
                          className={`nav-link ${styles.topNavLink}`}
                          href={childLink}
                        >
                          {child.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default HeaderNav;
