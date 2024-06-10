import Image from 'next/image';
import styles from './Hero.module.scss';
import Link from 'next/link';

const Hero = (props) => {
  const {
    id,
    title,
    description,
    imageUrl,
    image,
    hasButton,
    buttonText,
    buttonLink,
    imagePosition,
    isRounded,
  } = props;
  const { alt } = image || {};

  const roundedStyles = isRounded ? `rounded shadow-lg overflow-hidden` : '';
  const isReversed = id % 2;
  const heroContainerStyles = isReversed ? styles.heroContainerReverse : '';
  const heroContentStyles = isReversed ? `ps-4` : ``;

  if (!imageUrl)
    return (
      <div className='alert alert-danger' role='alert'>
        Please add an image.
      </div>
    );

  return (
    <section className={`hero  ${styles.heroContainer} ${heroContainerStyles}`}>
      <div className={`hero__content`}>
        <div
          className={`hero__content-container ${styles.contentContainer} ${heroContentStyles}`}
        >
          <h2 className={styles.heroTitle}>{title}</h2>
          <div
            className={styles.heroDescription}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {hasButton && (
            <div className={styles.heroButton}>
              <Link href={buttonLink}>
                <a href={buttonLink} className={`btn btn-secondary`}>
                  {buttonText}
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.imageContainer} ${roundedStyles}`}>
        <Image
          src={imageUrl}
          alt={alt ? alt : 'Hero Image'}
          layout='fill'
          width={480}
          height={480}
        />
      </div>
    </section>
  );
};
export default Hero;
