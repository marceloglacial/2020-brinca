import Image from 'next/image';

const CardImage = (props) => {
  const { source_url: src = '/images/logo-white.png', alt_text: alt = '' } =
    props;

  return (
    <Image src={src} alt={alt} height={200} width={300} layout='responsive' />
  );
};
export default CardImage;
