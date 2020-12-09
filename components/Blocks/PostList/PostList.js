import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import getSlug from 'functions/getSlug';
import usePosts from 'functions/usePosts';
import { useState } from 'react';
import PostListImage from './components/PostListImage';
import PostListLoading from './components/PostListLoading';

const PostList = (props) => {
  const { showImage, showDate, showText } = props;
  const per_page = 3;
  const [offSet, setOffSet] = useState(per_page);
  const { postData, isLoading, isError } = usePosts(null, offSet);
  if (isLoading) return <PostListLoading />;
  if (isError) return <Alert title='Error fetching API' />;

  const handleClick = (e) => {
    e.preventDefault();
    setOffSet(offSet + per_page);
  };

  return (
    <section className={`posts-list`}>
      <div className={`card-grid`}>
        {postData.map((item) => {
          const { id, title, excerpt, link, better_featured_image } = item;
          return (
            <div className={`card`} key={id}>
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
      <div className={`card-grid__load`}>
        <Button
          title='Carregar Mais'
          type={'secondary'}
          onClick={(e) => handleClick(e)}
        />
      </div>
    </section>
  );
};
export default PostList;
