import Link from 'next/link';
import useMenu from 'functions/useMenu';
import Alert from 'components/Alert/Alert';

const MenuSubscribe = (props) => {
  const { menuContent, isLoading, isError } = useMenu('subscribe');

  if (isLoading) return 'Loading ...';
  if (isError) return 'Error!';
  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <ul className='navbar-nav ml-3'>
      {menuContent.items.map((item) => {
        const { ID, title, slug } = item;
        return (
          <li className='nav-item' key={ID}>
            <Link href={slug} key={ID}>
              <a className={`btn btn-primary`} href={slug}>
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