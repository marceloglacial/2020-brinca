import Image from 'next/image';

const CardImage = (props) => {
  const {
    source_url: src = '/images/logo-white.png',
    alt_text: alt = '',
    media_details: { height, width } = { height: '200', width: '300' },
  } = props;

  return <Image src={src} alt={alt} height={height} width={width} />;
};
export default CardImage;
