import Link from 'next/link';

const Button = (props) => {
  const { title, link, type } = props;
  return (
    <Link href={link || '#'}>
      <a className={`btn btn-${type || 'primary'}`}>
        {title || 'Please add a title'}
      </a>
    </Link>
  );
};
export default Button;
