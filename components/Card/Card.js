import Image from 'next/image';
import Link from 'next/link';
import CardImage from './CardImage';

const Card = (props) => {
  const {
    id,
    title,
    excerpt,
    link = '',
    image,
    date,
    showImage = 'yes',
    showDate = 'yes',
    showText = 'yes',
  } = props;

  return (
    <div data-aos='fade-up'>
      <div className={`card`} key={id}>
        <Link href={link}>
          <a className={'card-link'} href={link}>
            {showImage === 'yes' && image && (
              <div
                className={`card-img-top ${!image && `card-img-top--empty`}`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  height={200}
                  width={300}
                  layout='responsive'
                />
              </div>
            )}
            <div className='card-body'>
              <div
                className='card-title'
                dangerouslySetInnerHTML={{ __html: title }}
              />
              {showText === 'yes' && (
                <div
                  className='card-text'
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              )}
              {showDate === 'yes' && (
                <p className='card-text'>
                  <small className='text-muted'>{date}</small>
                </p>
              )}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Card;
