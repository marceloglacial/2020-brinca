import Image from 'next/image';

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
      </div>
    </div>
  );
};

export default BusinessCard;
