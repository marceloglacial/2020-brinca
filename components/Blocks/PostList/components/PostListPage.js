import Alert from 'components/Alert/Alert';
import Card from 'components/Card/Card';
import useApi from 'hooks/useApi';
import { useState } from 'react';

const PostListPage = (props) => {
  const { per_page, offSet } = props;
  const { data, isLoading, isError, isLastPage } = useApi(
    `/api/posts/${per_page}/${offSet}`
  );

  if (isLoading) return <p>loading ...</p>;
  if (isError) return <Alert title='Error fetching API' />;
  if (isLastPage) return null;

  const { showImage, showDate, showText } = props;
  return data.map((item) => {
    const { id, title, excerpt, link, better_featured_image, type } = item;
    const cardProps = {
      showImage,
      showDate,
      showText,
      id,
      title: title.rendered,
      excerpt: excerpt.rendered,
      link,
      image: better_featured_image,
      type,
    };
    return <Card {...cardProps} key={id} />;
  });
};
export default PostListPage;
