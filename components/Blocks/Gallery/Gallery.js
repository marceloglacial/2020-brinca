import useGallery from 'hooks/useGallery';
import parseTagFromString from 'functions/parseTagFromString';
import Carousel, { Modal, ModalGateway } from 'react-images';
import GalleryImage from './components/GalleryImage';
import { useState } from 'react';

const Gallery = (props) => {
  const { attrs, innerHTML } = props;
  const { ids } = attrs;
  const galleryClass = parseTagFromString(innerHTML, 'figure').className;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = ids.map((id) => {
    const { mediaContent, isLoading, isError } = useGallery(id);
    if (isLoading) return null;
    if (isError) return null;
    return mediaContent;
  });

  const modalImages = images.map((item) => {
    console.log(item);
    return { source: item ? item.source_url : '' };
  });

  const toggleModal = (e, index) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen);
    setSelectedIndex(index);
  };

  return (
    <>
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={(e) => toggleModal(e, 0)}>
            <Carousel currentIndex={selectedIndex} views={modalImages} />
          </Modal>
        ) : null}
      </ModalGateway>

      <figure className={galleryClass}>
        <ul className='blocks-gallery-grid'>
          {images.map((item, index) => {
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
    </>
  );
};
export default Gallery;
