import Image from 'next/image';
import BusinessCardFooter from './BusinessCardFooter';

const BusinessCard = ({
  active,
  title,
  description,
  image,
  membership,
  address,
  category,
  email,
  facebook,
  instagram,
  phone,
  website,
  whatsapp,
}) => {
  if (active !== 'TRUE') return false;

  const hasImage = image && membership;
  const footerProps = {
    address,
    category,
    email,
    facebook,
    instagram,
    phone,
    website,
    whatsapp,
    iconSize: `24px`,
  };

  return (
    <div className='card card--business'>
      <div className='card-body'>
        <div className={`card-img-top ${!hasImage ? 'hidden' : ''}`}>
          {hasImage && <Image src={image} width={130} height={100} />}
        </div>
        <div className='card-info'>
          <div className='card-title'>{title}</div>
          <div className='card-description'>{description}</div>
        </div>
      </div>
      <BusinessCardFooter {...footerProps} />
    </div>
  );
};

export default BusinessCard;
