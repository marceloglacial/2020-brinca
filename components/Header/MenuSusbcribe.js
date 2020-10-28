import Logo from 'components/Logo/Logo';
import Link from 'next/link';
import styles from './Header.module.scss';
import useMenu from 'functions/useMenu';
import HeaderLoading from './HeaderLoading';
import HeaderError from './HeaderError';

const MenuSubscribe = (props) => {
  const { menuContent, isLoading, isError } = useMenu('subscribe');

  if (isLoading) return <HeaderLoading />;
  if (isError) return <HeaderError />;

  return (
    <ul className='navbar-nav ml-3'>
      {menuContent.items.map((item) => {
        const { ID, title, slug } = item;
        return (
          <li className='nav-item' key={ID}>
            <Link href={slug} key={ID}>
              <a
                className={`nav-link py-3 px-4 ${styles.subscribeNavLink}`}
                href={slug}
              >
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
