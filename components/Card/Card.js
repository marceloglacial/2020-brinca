import getSlug from 'functions/getSlug';
import Link from 'next/link';
import CardImage from './CardImage';

const Card = (props) => {
  const {
    id,
    title,
    excerpt,
    link,
    image,
    date,
    showImage = 'yes',
    showDate = 'yes',
    showText = 'yes',
    type = '',
  } = props;

  return (
    <div data-aos='fade-up'>
      <div className={`card`} key={id}>
        <Link href={type + '/' + getSlug(link)}>
          <a className={'card-link'} href={type + '/' + getSlug(link)}>
            {showImage === 'yes' && (
              <div
                className={`card-img-top ${!image && `card-img-top--empty`}`}
              >
                <CardImage {...image} />
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
