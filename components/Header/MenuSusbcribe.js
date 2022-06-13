import Alert from 'components/Alert/Alert';
import getSlug from 'functions/getSlug';
import Link from 'next/link';

const MenuSubscribe = (props) => {
  const menuContent = props.subscribeMenu;

  const isError = menuContent === undefined ? true : false;
  if (isError) return <Alert title='Data error' />;

  const isLoading = menuContent.length === 0;
  if (isLoading) return <HeaderLoading />;

  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <ul className='navbar-nav d-none d-xl-flex'>
      {menuContent.items.map((item) => {
        const { ID, title, url } = item;
        return (
          <li className='nav-item' key={ID}>
            <Link href={`/${getSlug(url)}`}>
              <a href={`/${getSlug(url)}`} className={`btn btn-primary`}>
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
