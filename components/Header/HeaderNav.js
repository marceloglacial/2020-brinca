import useMenu from 'hooks/useMenu';
import HeaderLoading from './HeaderLoading';
import Alert from 'components/Alert/Alert';
import Link from 'next/link';
import { topNavLink } from './Header.module.scss';

const HeaderNav = (props) => {
  const { menuContent, isLoading, isError } = useMenu('header');

  if (isLoading) return <HeaderLoading />;
  if (isError) return <Alert title='Data error' />;
  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <ul className='navbar-nav ml-auto'>
      {menuContent.items.map((item) => {
        const { ID, title, slug } = item;
        return (
          <li className='nav-item mx-3' key={ID}>
            <Link href={`/${slug}`} key={ID}>
              <a className={`nav-link ${topNavLink}`} href={`/${slug}`}>
                {title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default HeaderNav;
