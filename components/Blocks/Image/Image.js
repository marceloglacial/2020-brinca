import Image from 'next/image';
import styles from './Image.module.scss';
import useApi from 'hooks/useApi';

const ImageCore = (props) => {
  const { id, align } = props.attrs;
  const { data: image, isLoading, isError } = useApi(`/api/media/${id}`);

  if (isLoading) return 'loading ...';
  if (isError) return 'Error!';

  const { width, height } = image.media_details;
  const imageSrc = image.source_url;
  const imageAlt = image.alt_text;

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
      </figure>
    </div>
  );
};
export default ImageCore;
