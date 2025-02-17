const Image = require('next/image');
import styles from './Sponsors.module.scss';

const Sponsors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{new Date().getFullYear()} Sponsors</div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src={`https://res.cloudinary.com/brinca/image/upload/v1717987646/sponsors/OttawaBrazilRealEstateGroup-removebg-preview_jm4q6g.png`}
            layout='fill'
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={`https://res.cloudinary.com/brinca/image/upload/v1739760061/Screenshot_2025-02-16_at_9.40.56_PM_oyonuu.png`}
            layout='fill'
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={`https://res.cloudinary.com/brinca/image/upload/v1739759860/Screenshot_2025-02-16_at_9.37.15_PM_zjo8wv.png`}
            layout='fill'
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={`https://res.cloudinary.com/brinca/image/upload/c_pad,w_200/v1739759860/Screenshot_2025-02-16_at_9.37.20_PM_fggroy.png`}
            layout='fill'
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={`https://res.cloudinary.com/brinca/image/upload/v1739759860/Screenshot_2025-02-16_at_9.37.27_PM_iyvud1.png`}
            layout='fill'
          />
        </div>
      </div>
    </div>
  );
};
export default Sponsors;
