import useApi from 'hooks/useApi';
import styles from './InstaFeed.module.scss';

const InstaFeed = (props) => {
  const { data, isLoading, isError } = useApi(
    'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":31258902099,"first":6}'
  );

  if (isError) return <p>Error!</p>;
  if (isLoading) return <p>Loading ...</p>;

  const array = data.data.user.edge_owner_to_timeline_media.edges;
  return (
    <div className={`row row-cols-1 row-cols-md-2 g-4`}>
      {array.map((item, index) => {
        return (
          <div className={`col ${styles.cardCol}`} key={index}>
            <div className='card'>
              <img src={item.node.display_url} className='card-img-top' />
              <div className={`card-body ${styles.cardBody}`}>
                <p>{item.node.edge_media_to_caption.edges[0].node.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default InstaFeed;
