import Image from 'next/image';

const GalleryImage = (props) => {
  const { id, source_url, alt_text, media_details, toggleModal, index } = props;

  if (!media_details) return <p>loading ...</p>;

  const { width, height } = media_details;
  return (
    <li className='blocks-gallery-item' key={id} data-aos='fade-in'>
      <a href='#' onClick={(e) => toggleModal(e, index)}>
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
      </a>
    </li>
  );
};

export default GalleryImage;
