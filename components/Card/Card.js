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
    showImage = 'no',
    showDate = 'no',
    showText = 'no',
  } = props;

  return (
    <div className={`card`} key={id}>
      {showImage === 'yes' && (
        <div className={`card-img-top ${!image && `card-img-top--empty`}`}>
          <CardImage {...image} />
        </div>
      )}
      <div className='card-body'>
        <h5
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
        <Link href={getSlug(link)}>
          <a className='btn btn-link' href={getSlug(link)}>
            Leia mais
            <svg
              width='15'
              height='10'
              viewBox='0 0 15 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={`btn__icon`}
            >
              <path
                d='M0.818581 5.80357L11.6248 5.80357L9.2507 8.13393C8.92324 8.45536 8.92323 8.9375 9.2507 9.25893C9.57816 9.58036 10.0693 9.58036 10.3968 9.25893L14.1626 5.5625C14.4901 5.24107 14.4901 4.75893 14.1626 4.4375L10.3968 0.741071C10.0693 0.419642 9.57816 0.419642 9.2507 0.741071C8.92324 1.0625 8.92324 1.54464 9.2507 1.86607L11.6248 4.19643L0.818581 4.19643C0.409256 4.19643 -7.01282e-05 4.51786 -7.01711e-05 5C-7.02141e-05 5.48214 0.409255 5.80357 0.818581 5.80357Z'
                fill='#4D4D4D'
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Card;
