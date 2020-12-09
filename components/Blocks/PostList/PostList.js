import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import getSlug from 'functions/getSlug';
import usePosts from 'functions/usePosts';
import PostListImage from './components/PostListImage';
import PostListLoading from './components/PostListLoading';
import styles from './PostList.module.scss';

const PostList = (props) => {
  const { showImage, showDate, showText } = props;
  const { postData, isLoading, isError } = usePosts();
  if (isLoading) return <PostListLoading />;
  if (isError) return <Alert title='Error fetching API' />;

  return (
    <section className={styles.postList}>
      <div className='card-deck row-cols-1 row-cols-md-3'>
        {postData.map((item) => {
          const { id, title, excerpt, link, better_featured_image } = item;
          return (
            <div className={`card ${styles.postListCard}`} key={id}>
              {!showImage && (
                <div
                  className={`card-img-top ${
                    !better_featured_image && `card-img-top--empty`
                  }`}
                >
                  <PostListImage {...better_featured_image} />
                </div>
              )}
              <div className='card-body'>
                <h5 className='card-title'>{title.rendered}</h5>
                {showText && (
                  <div
                    className='card-text'
                    dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
                  />
                )}
                {showDate && (
                  <p className='card-text'>
                    <small className='text-muted'>
                      Last updated 3 mins ago
                    </small>
                  </p>
                )}
                <Button
                  title={`Veja a cobertura`}
                  type='link'
                  link={getSlug(link)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.postListloadMore}>
        <Button title='Carregar Mais' type={'secondary'} />
      </div>
    </section>
  );
};
export default PostList;
