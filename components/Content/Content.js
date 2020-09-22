import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import fetchData from 'functions/fechData';

const Content = (props) => {
  const { slug, frontpage } = props;
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetchData(`wp/v2/pages?slug=${slug}`, setPageData);
  }, []);

  const hasData = pageData.length > 0;
  if (!hasData) return null;

  const { title, content } = pageData[0];

  return (
    <>
      {!frontpage && (
        <h2 className={`bottomLine ${styles.contentTitle} mb-5`}>
          {title.rendered}
        </h2>
      )}
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </>
  );
};
export default Content;
