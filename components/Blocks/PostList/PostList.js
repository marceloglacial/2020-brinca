import Button from 'components/Button/Button';
import PosstListPage from './components/PostListPage';
import { useEffect, useState } from 'react';
import usePosts from 'functions/usePosts';

const PostList = (props) => {
  const per_page = 3;
  const [offSet, setOffSet] = useState(0);
  const [pages, setPages] = useState([]);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const { postData, isLoading, isError } = usePosts(
    null,
    per_page,
    offSet + per_page
  );
  const hasPosts = !isLoading && !isError && postData.length > 0 ? true : false;

  useEffect(() => {
    setPages([<PosstListPage per_page={per_page} {...props} key={offSet} />]);
  }, []);

  useEffect(() => {
    setPages([
      ...pages,
      <PosstListPage
        per_page={per_page}
        offSet={offSet}
        {...props}
        key={offSet}
      />,
    ]);
    setIsLoadingPage(false);
  }, [offSet]);

  const handleClick = (e) => {
    e.preventDefault();
    setOffSet(offSet + per_page);
    setIsLoadingPage(true);
  };

  const { title } = props;

  return (
    <section className={`posts-list`} data-aos='fade-up'>
      {title && <h2>{title}</h2>}
      <div className={`card-grid`}>{pages}</div>
      {hasPosts && (
        <div className={`card-grid__load`}>
          <Button
            title={isLoadingPage ? 'Loading ... ' : 'Carregar Mais'}
            type={isLoadingPage ? 'disable' : 'secondary'}
            onClick={(e) => handleClick(e)}
          />
        </div>
      )}
    </section>
  );
};
export default PostList;
