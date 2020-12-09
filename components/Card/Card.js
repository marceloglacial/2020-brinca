import Button from 'components/Button/Button';
import getSlug from 'functions/getSlug';
import CardImage from './CardImage';

const Card = (props) => {
  const {
    id,
    title,
    excerpt,
    link,
    image,
    date,
    showImage = true,
    showDate = false,
    showText = true,
  } = props;

  return (
    <div className={`card`} key={id}>
      {showImage && (
        <div className={`card-img-top ${!image && `card-img-top--empty`}`}>
          <CardImage {...image} />
        </div>
      )}
      <div className='card-body'>
        <h5
          className='card-title'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {showText && (
          <div
            className='card-text'
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        )}
        {showDate && (
          <p className='card-text'>
            <small className='text-muted'>{date}</small>
          </p>
        )}
        <Button title={`Veja a cobertura`} type='link' link={getSlug(link)} />
      </div>
    </div>
  );
};
export default Card;
