import Link from 'next/link';
import { Image } from 'react-bootstrap';
import styles from './logo.module.scss';

const Logo = (props) => {
  return (
    <Link href='/'>
      <a alt='Home'>
        <Image
          src='/images/logo.png'
          alt='Brinca logo'
          className={`mb-3 mt-2 ${styles.logo}`}
        />
      </a>
    </Link>
  );
};
export default Logo;
