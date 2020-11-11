import Link from 'next/link';

const Button = (props) => {
  const { title, link, type, className } = props;
  return (
    <Link href={link || '#'}>
      <a className={`btn btn-${type || 'primary'} ${className}`}>
        {title || 'Please add a title'}
      </a>
    </Link>
  );
};
export default Button;
