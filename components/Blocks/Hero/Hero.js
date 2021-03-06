import Image from 'next/image';
import styles from './Hero.module.scss';
import getSlug from 'functions/getSlug';
import Link from 'next/link';

const Hero = (props) => {
  const {
    title,
    description,
    imageUrl,
    image,
    hasButton,
    buttonText,
    buttonLink,
    imagePosition,
    imageStyle,
  } = props;
  const { alt } = image || {};

  if (!imageUrl)
    return (
      <div className='alert alert-danger' role='alert'>
        Please add an image.
      </div>
    );

  return (
    <section className={`hero  ${styles.heroContainer}`}>
      <div className={`row ${imagePosition === 'left' && `flex-row-reverse`}`}>
        <div className={`col-12 col-lg-6 col-xl-5`}>
          <div className={styles.contentContainer}>
            <h2 className={styles.heroTitle}>{title}</h2>
            <div
              className={styles.heroDescription}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {hasButton && (
              <div className={styles.heroButton}>
                <Link href={getSlug(buttonLink)}>
                  <a href={getSlug(buttonLink)} className={`btn btn-secondary`}>
                    {buttonText}
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className={`col-12 col-lg-6 col-xl-7`}>
          <div
            className={`${styles.imageContainer} ${
              styles[`heroImage--${imageStyle}`]
            }`}
          >
            <Image
              src={imageUrl}
              alt={alt ? alt : 'Hero Image'}
              width={615}
              height={465}
              className={`${imageStyle} ${styles.heroImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
