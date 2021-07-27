import Image from 'next/image';
import styles from './Image.module.scss';

const ImageCore = (props) => {
  const { media, imageSize = 'full' } = props.attrs || props.attributes;
  const { url, width, height } = media?.sizes[imageSize];
  const { alt, caption } = media;
  return (
    <figure className={`${styles.figure} mt-4 mb-5`} data-aos='fade-in'>
      <Image
        src={url}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={styles.image}
      />
      {caption && (
        <figcaption
          className={styles.figureCaption}
          style={{ width: `${width}px` }}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </figure>
  );
};
export default ImageCore;
