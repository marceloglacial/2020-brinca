// Gallery Block needs to fetch each image
// @see https://github.com/WordPress/gutenberg/issues/10994

import Carousel, { Modal, ModalGateway } from 'react-images';
import GalleryImage from './components/GalleryImage';
import { useState } from 'react';

const Gallery = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { images, title } = props;

  const modalImages = images?.map((item) => {
    return { source: item ? item.url : '' };
  });

  const toggleModal = (e, index) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen);
    setSelectedIndex(index);
  };

  return (
    <div className='wp-block-gallery columns-4'>
      {title && <h3>{title}</h3>}
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={(e) => toggleModal(e, 0)}>
            <Carousel currentIndex={selectedIndex} views={modalImages} />
          </Modal>
        ) : null}
      </ModalGateway>

      <figure className={`gallery`}>
        <ul className='blocks-gallery-grid'>
          {images?.map((item, index) => {
            const imageProps = {
              ...item,
              index,
              modalIsOpen,
              setModalIsOpen,
              selectedIndex,
              setSelectedIndex,
              toggleModal,
            };

            return <GalleryImage {...imageProps} key={index} />;
          })}
        </ul>
      </figure>
    </div>
  );
};
export default Gallery;
