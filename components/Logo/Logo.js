import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.scss';

const Logo = (props) => {
  // TODO: Get logo from API
  return (
    <Link href='/'>
      <a alt='Home' className={styles.logo}>
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
