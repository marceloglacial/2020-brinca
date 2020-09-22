import { useContext } from 'react';
import dataContext from 'context/dataContext';

const Content = (props) => {
  // TODO: Get it from the API
  const slug = 'pagina-inicial';
  const { pages } = useContext(dataContext);
  const hasPages = pages.length > 0;

  if (!hasPages) return <div className='container'>Loading ...</div>;

  const actualPage = pages.find((item) => item.slug === slug) || {};
  const { content = '' } = actualPage;

  return <div dangerouslySetInnerHTML={{ __html: content.rendered }} />;
};
export default Content;
