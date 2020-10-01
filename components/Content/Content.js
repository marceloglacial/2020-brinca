import { useState, useEffect } from 'react';
import styles from './Content.module.scss';
import fetchData from 'functions/fechData';
import ContentLoading from './ContentLoading';
import Head from 'next/head';

const Content = (props) => {
  const { slug, frontpage } = props;
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetchData(`wp/v2/pages?slug=${slug}`, setPageData);
  }, []);

  const hasData = pageData.length > 0;
  if (!hasData) return <ContentLoading />;

  const { title, content } = pageData[0];

  return (
    <>
      {!frontpage && (
        <>
          <Head>
            <title>Brinca 2020 {`- ${title.rendered}`}</title>
          </Head>
          <h2 className={`bottomLine ${styles.contentTitle} mb-5`}>
            {title.rendered}
          </h2>
        </>
      )}
      <main
        className={`content container ${styles.content}`}
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
    </>
  );
};
export default Content;
