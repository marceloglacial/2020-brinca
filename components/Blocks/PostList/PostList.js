import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import usePosts from 'functions/usePosts';
import { useState } from 'react';
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
          const cardProps = {
            showImage,
            showDate,
            showText,
            id,
            title: title.rendered,
            excerpt: excerpt.rendered,
            link,
            image: better_featured_image,
          };
          return <Card {...cardProps} key={id} />;
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
