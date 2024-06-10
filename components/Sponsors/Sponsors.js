const Image = require('next/image');
import styles from './Sponsors.module.scss';

const Sponsors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {new Date().getFullYear()} Diamond Sponsors
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <a
            href='https://www.instagram.com/ottawabrazilrealestategroup/'
            target='_blank'
          >
            <Image
              src={`https://res.cloudinary.com/brinca/image/upload/v1717987646/sponsors/OttawaBrazilRealEstateGroup-removebg-preview_jm4q6g.png`}
              layout='fill'
            />
          </a>
        </div>
        <div className={styles.logo}>
          <a href='https://www.bmo.com/en-ca/main/personal/' target='_blank'>
            <Image
              src={`https://res.cloudinary.com/brinca/image/upload/v1717984776/sponsors/ppcn1zpomodwxluq9wik.jpg`}
              layout='fill'
            />
          </a>
        </div>
        <div className={styles.logo}>
          <a
            href='https://www.britanniavillagedentalcentre.com/'
            target='_blank'
          >
            <Image
              src={`https://res.cloudinary.com/brinca/image/upload/v1717984776/sponsors/chvucmjvkawvzamhlehm.png`}
              layout='fill'
            />
          </a>
        </div>
        <div className={styles.logo}>
          <a href='https://horizonsdentalcare.ca/' target='_blank'>
            <Image
              src={`https://res.cloudinary.com/brinca/image/upload/v1717987636/sponsors/BritanniaVillage-removebg-preview_bkxw7i.png`}
              layout='fill'
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sponsors;
