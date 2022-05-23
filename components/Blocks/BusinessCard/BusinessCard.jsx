import Image from 'next/image';

const BusinessCard = (props) => {
  const { title, description, image } = props;
  return (
    <div className='card card--business'>
      <div className={`card-img-top ${!image ? 'hidden' : ''}`}>
        {image && <Image src={image} layout='fill' />}
      </div>
      <div className='card-body'>
        <div className='card-title'>{title}</div>
        <div className='card-description'>{description}</div>
      </div>
    </div>
  );
};

export default BusinessCard;
