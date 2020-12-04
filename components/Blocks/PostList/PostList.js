import Alert from 'components/Alert/Alert';
import usePosts from 'functions/usePosts';
import PostListImage from './components/PostListImage';
import PostListLoading from './components/PostListLoading';

const PostList = (props) => {
  const { showImage, showDate, showText } = props;
  const { postData, isLoading, isError } = usePosts();
  if (isLoading) return <PostListLoading />;
  if (isError) return <Alert title='Error fetching API' />;

  return (
    <div className='card-deck'>
      {postData.map((item) => {
        const { id, title, excerpt, better_featured_image } = item;
        return (
          <div className='card' key={id}>
            <div className='card-body'>
              {!showImage && <PostListImage {...better_featured_image} />}
              <h5 className='card-title'>{title.rendered}</h5>
              {showText && <p className='card-text'>{excerpt.rendered}</p>}
              {showDate && (
                <p className='card-text'>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PostList;
