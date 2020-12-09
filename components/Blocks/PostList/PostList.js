import Button from 'components/Button/Button';
import PosstListPage from './components/PostListPage';
import { useState } from 'react';

const PostList = (props) => {
  const per_page = 3;
  const [offSet, setOffSet] = useState(0);
  const [pages, setPages] = useState([
    <PosstListPage offset={offSet} per_page={per_page} key={offSet} />,
  ]);
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  const pageProps = {
    isLoadingPage,
    setIsLoadingPage,
    per_page,
    offSet,
  };

  const handleClick = (e) => {
    e.preventDefault();
    setOffSet(offSet + per_page);
    setIsLoadingPage(true);
    return setPages([
      ...pages,
      <PosstListPage {...pageProps} key={offSet + 1} />,
    ]);
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
