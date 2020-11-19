import parseTagFromString from 'functions/parseTagFromString';
import Image from 'next/image';
import styles from './Image.module.scss';

const ImageCore = (props) => {
  const { attrs, innerHTML } = props;
  const { align, width, height } = attrs;
  const image = parseTagFromString(innerHTML, 'img');
  const caption = parseTagFromString(innerHTML, 'figcaption');

  const imageAlign = {
    center: 'mx-auto d-block',
    left: 'float-left mr-3',
    right: 'float-right ml-3',
  };

  return (
    <figure className={`${styles.figure} ${imageAlign[align]} mb-5`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={width || 800}
        height={height || 600}
      />
      {caption && (
        <figcaption className={styles['figure-caption']}>
          {caption.innerHTML}
        </figcaption>
      )}
    </figure>
  );
};
export default ImageCore;
