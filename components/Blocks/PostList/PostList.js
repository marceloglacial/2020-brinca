import PosstListPage from './components/PostListPage';
import { useEffect, useState } from 'react';
import useApi from 'hooks/useApi';

const PostList = (props) => {
  const per_page = parseInt(props.per_page) || 12;
  const [offSet, setOffSet] = useState(1);
  const [pages, setPages] = useState([]);
  const { isLoading, isLastPage } = useApi(
    `/api/posts/${per_page}/${offSet + 1}`
  );

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
  }, [offSet]);

  const handleClick = (e) => {
    e.preventDefault();
    setOffSet(offSet + 1);
  };

  const { title } = props;

  return (
    <section className={`posts-list`}>
      {title && <h2 className='pb-4'>{title}</h2>}
      <div className={`card-grid`}>{pages}</div>
      {!isLastPage && (
        <div className={`card-grid__load`}>
          <a
            href='#'
            className='btn btn-secondary'
            onClick={(e) => handleClick(e)}
          >
            {isLoading ? 'Carregando ...' : 'Carregar mais'}
          </a>
        </div>
      )}
    </section>
  );
};
export default PostList;
