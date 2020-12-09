import Alert from 'components/Alert/Alert';
import Card from 'components/Card/Card';
import usePosts from 'functions/usePosts';

const PostListPage = (props) => {
  const { per_page, offSet } = props;
  const { postData, isLoading, isError } = usePosts(null, per_page, offSet);

  if (isLoading) return <p>loading ...</p>;
  if (isError) return <Alert title='Error fetching API' />;

  const { showImage, showDate, showText } = props;
  return (
    <>
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
    </>
  );
};
export default PostListPage;
