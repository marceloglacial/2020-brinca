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
  const heroContainerStyles = isReversed ? `flex-row-reverse` : '';
  const heroContentStyles = isReversed ? `ps-4` : ``;

  if (!imageUrl)
    return (
      <div className='alert alert-danger' role='alert'>
        Please add an image.
      </div>
    );

  return (
    <section className={`hero  ${styles.heroContainer}`}>
      <div className={`hero__container row ${heroContainerStyles}`}>
        <div className={`hero__content col-12 col-lg-6 col-xl-6`}>
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
        <div className={`col-12 col-lg-6 col-xl-6`}>
          <div className={`image__container ${roundedStyles}`}>
            <Image
              src={imageUrl}
              alt={alt ? alt : 'Hero Image'}
              layout='responsive'
              width={480}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
