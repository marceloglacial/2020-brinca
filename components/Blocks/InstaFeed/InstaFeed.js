import useApi from 'hooks/useApi';
import styles from './InstaFeed.module.scss';

const InstaFeed = (props) => {
  const { userID, title, itemsNumber = '6', imageType } = props;
  const url = `https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":${userID},"first":${itemsNumber}}`;
  const { data, isLoading, isError } = useApi(url);
  const isThumbnail = imageType === 'thumbnail';

  if (isError) return <p>Error!</p>;
  if (isLoading) return <p>Loading ...</p>;

  if (!data.data) return <p>No items.</p>;
  const array = data.data.user.edge_owner_to_timeline_media.edges;
  return (
    <section className='instafeed'>
      {title && <h2 className={'pb-5'}>{title}</h2>}
      <div className={styles.instaFeedContainer}>
        {array.map((item) => {
          const {
            id,
            display_url,
            thumbnail_src,
            edge_media_to_caption,
            shortcode,
          } = item.node;
          const title = edge_media_to_caption.edges[0];
          const imageSrc = isThumbnail ? thumbnail_src : display_url;

          return (
            <a
              href={`https://www.instagram.com/p/${shortcode}`}
              target='_blank'
              className={styles.card}
              data-aos='fade-up'
              key={id}
            >
              <img
                src={imageSrc}
                alt=''
                className={isThumbnail ? styles.cardImageThumb : ''}
              />
              <div className={styles.cardContainer}>
                <div className={styles.cardBody}>
                  {title && (
                    <p className={`line-clamp ${styles.cardTitle}`}>
                      {title.node.text}
                    </p>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default InstaFeed;
