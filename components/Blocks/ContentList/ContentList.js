import Alert from 'components/Alert/Alert';
import Card from 'components/Card/Card';
import useContentList from 'hooks/useContentList';

const ContentList = (props) => {
  const { title, contentType, items } = props;
  const { data: cards, isLoading, isError } = useContentList(contentType);

  if (isLoading) return <p>...</p>;
  if (isError)
    return <Alert title='Error loading Content' error={isError.message} />;

  return (
    <div className='content-list'>
      {title && <h2 className='pb-4'>{title}</h2>}
      <div className={`card-grid`}>
        {cards
          .map((card, index) => {
            const link = `${contentType === 'pages' ? '' : `/${contentType}`}/${
              card.link
            }`;
            return <Card {...card} link={link} key={index} />;
          })
          .slice(0, items)}
      </div>
    </div>
  );
};
export default ContentList;
