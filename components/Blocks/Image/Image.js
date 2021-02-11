import parseTagFromString from 'functions/parseTagFromString';
import Image from 'next/image';
import styles from './Image.module.scss';

const ImageCore = (props) => {
  const { attrs, innerHTML } = props;
  const { align, width, height } = attrs;
  const image = parseTagFromString(innerHTML, 'image');
  const imageSrc = image.src;
  const imageAlt = image.alt;
  const imageCaption = image.caption;

  const imageAlign = {
    left: 'float-left mr-3',
    right: 'float-right ml-3',
  };

  return (
    <div className={`text-${align} ${align === 'full' && styles.full}`}>
      <figure
        className={`${styles.figure} ${imageAlign[align]} mt-4 mb-5`}
        data-aos='fade-in'
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={width || 1440}
          height={height || 900}
        />
        {imageCaption && (
          <figcaption className={styles['figure-caption']}>
            {imageCaption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};
export default ImageCore;
