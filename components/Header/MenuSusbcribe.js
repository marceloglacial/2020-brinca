import useMenu from 'functions/useMenu';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import getSlug from 'functions/getSlug';

const MenuSubscribe = (props) => {
  const { menuContent, isLoading, isError } = useMenu('subscribe');

  if (isLoading) return 'Loading ...';
  if (isError) return 'Error!';
  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <ul className='navbar-nav ml-3'>
      {menuContent.items.map((item) => {
        const { ID, title, url } = item;
        return (
          <li className='nav-item' key={ID}>
            <Button
              title={title}
              type={'primary'}
              link={getSlug(url)}
              key={ID}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default MenuSubscribe;
