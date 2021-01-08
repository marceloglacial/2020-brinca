import useGallery from 'functions/useGallery';
import parseTagFromString from 'functions/parseTagFromString';
import Image from 'next/image';
import Alert from 'components/Alert/Alert';

const Gallery = (props) => {
  const { attrs, innerHTML } = props;
  const { ids } = attrs;
  const galleryClass = parseTagFromString(innerHTML, 'figure').className;

  const images = ids.map((id) => {
    const { mediaContent, isLoading, isError } = useGallery(id);

    if (isLoading) return 'loading ...';
    if (isError) return <Alert title='ERROR' />;

    const { source_url, alt_text, media_details } = mediaContent;
    const { width, height } = media_details;
    return (
      <li className='blocks-gallery-item' key={id} data-aos='fade-in'>
        <figure>
          <Image
            src={source_url}
            alt={alt_text}
            data-id={id}
            data-full-url={source_url}
            data-link={source_url}
            className={`wp-image-${id}`}
            width={width}
            height={height}
          />
        </figure>
      </li>
    );
  });

  return (
    <figure className={galleryClass} data-aos='fade-up'>
      <ul className='blocks-gallery-grid'>{images}</ul>
    </figure>
  );
};
export default Gallery;
