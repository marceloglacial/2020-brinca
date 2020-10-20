import Link from 'next/link';
import styles from './Logo.module.scss';
import { Image } from 'react-bootstrap';

const Logo = (props) => {
  // TODO: Get logo pro API
  return (
    <Link href='/'>
      <a alt='Home'>
        <Image
          src='/images/logo.png'
          alt='Brinca logo'
          className={`mb-1 mb-sm-3 mt-0 mt-sm-2 ${styles.logo}`}
        />
      </a>
    </Link>
  );
};
export default Logo;
