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
  if (!hasData)
    return (
      <div className='pt-4'>
        <ContentLoading />
      </div>
    );

  const { title, content } = pageData[0];

  return (
    <>
      {!frontpage && (
        <Head>
          <title>Brinca 2020 {`- ${title.rendered}`}</title>
        </Head>
      )}
      <article className='content pb-5'>
        {!frontpage && (
          <header className='article__title'>
            <h2 className={`bottomLine ${styles.contentTitle} pt-5 mb-5`}>
              {title.rendered}
            </h2>
          </header>
        )}
        <section
          className={`article__content`}
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        />
      </article>
    </>
  );
};
export default Content;
