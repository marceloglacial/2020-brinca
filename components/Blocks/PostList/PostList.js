import Button from 'components/Button/Button';
import PosstListPage from './components/PostListPage';
import { useEffect, useState } from 'react';

const PostList = (props) => {
  const per_page = 3;
  const [offSet, setOffSet] = useState(0);
  const [pages, setPages] = useState([]);
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  useEffect(() => {
    setPages([<PosstListPage per_page={per_page} key={offSet} />]);
  }, []);

  useEffect(() => {
    setPages([
      ...pages,
      <PosstListPage per_page={per_page} offSet={offSet} key={offSet} />,
    ]);
    setIsLoadingPage(false);
  }, [offSet]);

  const handleClick = (e) => {
    e.preventDefault();
    setOffSet(offSet + per_page);
    setIsLoadingPage(true);
  };

  return (
    <section className={`posts-list`}>
      <div className={`card-grid`}>{pages}</div>
      <div className={`card-grid__load`}>
        <Button
          title={isLoadingPage ? 'Loading ... ' : 'Carregar Mais'}
          type={isLoadingPage ? 'disable' : 'secondary'}
          onClick={(e) => handleClick(e)}
        />
      </div>
    </section>
  );
};
export default PostList;
