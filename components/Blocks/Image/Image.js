import parseTagFromString from 'functions/parseTagFromString';
import Image from 'next/image';
import styles from './Image.module.scss';

const ImageCore = (props) => {
  const { attrs, innerHTML } = props;
  const { align, width, height } = attrs;
  const image = parseTagFromString(innerHTML, 'img');
  const caption = parseTagFromString(innerHTML, 'figcaption');
  const link = parseTagFromString(innerHTML, 'a');

  const imageAlign = {
    left: 'float-left mr-3',
    right: 'float-right ml-3',
  };

  return (
    <div className={`text-${align} ${align === 'full' && styles.full}`}>
      <figure className={`${styles.figure} ${imageAlign[align]} mt-4 mb-5`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={width || 1440}
          height={height || 900}
        />
        {caption && (
          <figcaption className={styles['figure-caption']}>
            {caption.innerHTML}
          </figcaption>
        )}
      </figure>
    </div>
  );
};
export default ImageCore;
