import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = (props) => {
  const { title, description, imageUrl, image, hasButton } = props;
  const { alt } = image;
  return (
    <section className={`${styles.heroContainer}`}>
      <div className='row'>
        <div className={`col col-lg-6 col-xl-5`}>
          <div className={styles.contentContainer}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroDescription}>{description}</p>
            {hasButton && (
              <div className={styles.heroButton}>
                <button className='btn btn-secondary'>Saiba mais</button>
              </div>
            )}
          </div>
        </div>
        <div className={`col col-lg-6 col-xl-7`}>
          <div className={styles.imageContainer}>
            <Image
              src={imageUrl}
              alt={alt ? alt : 'Hero Image'}
              width={615}
              height={460}
              className={`rounded ${styles.heroImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
