import Image from 'next/image';

const GalleryImage = (props) => {
  const { id, url, alternativeText, toggleModal, index } = props;

  return (
    <li className='blocks-gallery-item' key={id} data-aos='fade-in'>
      <a href='#' onClick={(e) => toggleModal(e, index)}>
        <figure className='brinca-image'>
          <Image
            src={url}
            alt={alternativeText}
            data-id={id}
            data-full-url={url}
            data-link={url}
            className={`wp-image-${id}`}
            layout='responsive'
            width={300}
            height={300}
          />
        </figure>
      </a>
    </li>
  );
};

export default GalleryImage;
