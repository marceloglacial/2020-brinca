import Image from 'next/image';
import styles from './Image.module.scss';

const ImageCore = (props) => {
  const { src, alt, caption, width, height } = props.attrs;

  return (
    <figure className={`${styles.figure} mt-4 mb-5`} data-aos='fade-in'>
      <Image
        src={src}
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
