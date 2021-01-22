import useApi from 'hooks/useApi';
import styles from './InstaFeed.module.scss';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const InstaFeed = (props) => {
  const { userID, itemsNumber = '6', imageType = 'default' } = props;
  const url = `https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":${userID},"first":${itemsNumber}}`;
  const { data, isLoading, isError } = useApi(url);

  if (isError) return <p>Error!</p>;
  if (isLoading) return <p>Loading ...</p>;

  if (!data.data) return <p>No items.</p>;
  const array = data.data.user.edge_owner_to_timeline_media.edges;
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter={'2rem'}>
        {array.map((item) => {
          const {
            id,
            display_url,
            thumbnail_src,
            edge_media_to_caption,
            shortcode,
          } = item.node;
          const title = edge_media_to_caption.edges[0];
          const imageSrc =
            imageType !== 'default' ? thumbnail_src : display_url;

          return (
            <a
              href={`https://www.instagram.com/p/${shortcode}`}
              target='_blank'
              className={styles.card}
              data-aos='fade-up'
              key={id}
            >
              <img src={imageSrc} alt='' className={styles.cardImage} />
              <div className={styles.cardBody}>
                {title && <p className={styles.cardTitle}>{title.node.text}</p>}
              </div>
            </a>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};
export default InstaFeed;
