import { useContext } from 'react';
import styles from './styles.module.scss';
import dataContext from 'context/dataContext';
import { useRouter } from 'next/router';

const Content = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const { pages } = useContext(dataContext);
  const hasPages = pages.length > 0;

  if (!hasPages) return <div className='container'>Loading ...</div>;

  const actualPage = pages.find((item) => item.slug === slug);
  const { title, content } = actualPage;

  return (
    <>
      <h2 className={`bottomLine ${styles.contentTitle} mb-5`}>
        {title.rendered}
      </h2>
      <div
        contentEditable='true'
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
    </>
  );
};
export default Content;
