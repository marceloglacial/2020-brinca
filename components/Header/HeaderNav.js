import useMenu from 'hooks/useMenu';
import HeaderLoading from './HeaderLoading';
import Alert from 'components/Alert/Alert';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useState } from 'react';

const HeaderNav = (props) => {
  const { menuContent, isLoading, isError } = useMenu('header');
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <HeaderLoading />;
  if (isError) return <Alert title='Data error' />;
  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <ul className='navbar-nav ml-auto'>
      {menuContent.items.map((item) => {
        const { ID, title, slug, child_items } = item;
        const hasSubMenu = child_items && isOpen;
        return (
          <li
            className={`nav-item mx-2 ${styles.navItem}`}
            key={ID}
            onMouseOver={() => child_items && setIsOpen(true)}
            onMouseLeave={() => child_items && setIsOpen(false)}
          >
            <Link href={`/${slug}`} key={ID}>
              <a className={`nav-link ${styles.topNavLink}`} href={`/${slug}`}>
                {title}
              </a>
            </Link>
            {hasSubMenu && (
              <ul className={styles.navbarSub} data-aos='fade-in'>
                {child_items.map((child, index) => {
                  return (
                    <li className={`nav-item ${styles.navSubItem}`} key={index}>
                      <Link href={`/${child.slug}`} key={index}>
                        <a
                          className={`nav-link ${styles.topNavLink}`}
                          href={`/${child.slug}`}
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
