import Link from 'next/link';

const Header = (props) => {
  return (
    <header>
      <Link href={'/'}>
        <a>
          <h1>Brinca 2020</h1>
        </a>
      </Link>
      <hr />
    </header>
  );
};
export default Header;
