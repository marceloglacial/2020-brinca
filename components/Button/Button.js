import Link from 'next/link';

const Button = (props) => {
  const { title, link, type = 'primary' } = props;
  return (
    <Link href={link}>
      <a className={`btn btn-${type}`}>{title}</a>
    </Link>
  );
};
export default Button;
