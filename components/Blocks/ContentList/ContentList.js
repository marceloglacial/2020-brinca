import Alert from 'components/Alert/Alert';
import Card from 'components/Card/Card';
import useContent from 'hooks/useContent';

const ContentList = (props) => {
  const { title, contentType } = props;
  const { data: cards, isLoading, isError } = useContent(contentType);

  if (isLoading) return <p>...</p>;
  if (isError)
    return <Alert title='Error loading Content' error={isError.message} />;

  return (
    <div className='content-list'>
      {title && <h2 className='pb-4'>{title}</h2>}
      <div className={`card-grid`}>
        {cards.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </div>
    </div>
  );
};
export default ContentList;
