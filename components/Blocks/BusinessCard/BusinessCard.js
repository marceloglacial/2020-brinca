import Image from 'next/image';
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';

const BusinessCard = (props) => {
  const {
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
  } = props;

  if (active !== 'TRUE') return false;

  const hasImage = image && membership;
  return (
    <div className='card card--business'>
      <div className={`card-img-top ${!hasImage ? 'hidden' : ''}`}>
        {hasImage && <Image src={image} width={150} height={150} />}
      </div>
      <div className='card-body'>
        <div className='card-title'>{title}</div>
        <div className='card-description'>{description}</div>
        <div className='card-meta'>
          {address && <div className='card-address'>{address}</div>}
          {email && (
            <div className='card-email'>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          )}
          {phone && (
            <div className='card-phone'>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          )}
          {website && (
            <div className='card-url'>
              <a href={website} target={`_blank`}>
                {website}
              </a>
            </div>
          )}
          <div className='card-social'>
            <BsWhatsapp />
            <BsFacebook />
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
