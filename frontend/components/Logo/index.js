import Link from 'next/link';
import { Image } from 'react-bootstrap';

const styles = {
  maxWidth: '200px',
};

const Logo = (props) => {
  return (
    <Link href='/'>
      <a alt='Home'>
        <Image
          src='/images/logo.png'
          alt='Brinca logo'
          className='mb-3 mt-2'
          style={styles}
        />
      </a>
    </Link>
  );
};
export default Logo;
