import Link from 'next/link';
const Nav = (props) => {
  const navLinks = [
    {
      id: 0,
      title: 'Home',
      link: '/',
    },
    {
      id: 1,
      title: 'About',
      link: 'about',
    },
    {
      id: 2,
      title: 'Posts',
      link: 'posts',
    },
  ];

  const navRender = navLinks.map((item, index) => {
    return (
      <li key={index}>
        <Link href={item.link}>
          <a>{item.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul>{navRender}</ul>
      <hr />
    </nav>
  );
};
export default Nav;
