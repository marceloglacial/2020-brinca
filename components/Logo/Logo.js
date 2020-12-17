import Link from 'next/link';
import Image from 'next/image';

const Logo = (props) => {
  // TODO: Get logo from API
  return (
    <Link href='/'>
      <a alt='Home'>
        <Image
          src='/images/logo.png'
          alt='Brinca logo'
          width={233}
          height={95}
        />
      </a>
    </Link>
  );
};
export default Logo;
