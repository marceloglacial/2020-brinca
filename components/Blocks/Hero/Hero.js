import Image from 'next/image';
import styles from './Hero.module.scss';
import Button from 'components/Button/Button';

const Hero = (props) => {
  const {
    title,
    description,
    imageUrl,
    image,
    hasButton,
    buttonText,
    buttonSlug,
    imagePosition,
    imageStyle,
  } = props;
  const { alt } = image;

  if (!imageUrl)
    return (
      <div className='alert alert-danger' role='alert'>
        Please add an image.
      </div>
    );

  return (
    <section className={`hero  ${styles.heroContainer}`}>
      <div className={`row ${imagePosition === 'left' && `flex-row-reverse`}`}>
        <div className={`col col-lg-6 col-xl-5`}>
          <div className={styles.contentContainer}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroDescription}>{description}</p>
            {hasButton && (
              <div className={styles.heroButton}>
                <Button
                  link={buttonSlug}
                  title={buttonText}
                  type={'secondary'}
                />
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
              className={`${imageStyle} ${styles.heroImage} ${
                styles[`heroImage--${imageStyle}`]
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
