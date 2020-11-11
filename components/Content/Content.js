import styles from './Content.module.scss';
import ContentLoading from './ContentLoading';
import Head from 'next/head';
import usePage from 'functions/usePage';
import ContentError from './ContentError';
import Blocks from 'components/Blocks/Blocks';

const Content = (props) => {
  const { slug, frontpage } = props;
  const { pageContent, isLoading, isError } = usePage(slug);

  if (isLoading) return <ContentLoading />;
  if (isError) return <ContentError />;

  const { title, blocks = [] } = pageContent[0];

  return (
    <>
      {!frontpage && (
        <Head>
          <title>Brinca 2020 {`- ${title.rendered}`}</title>
        </Head>
      )}
      <article className={`${styles.content} pb-5`}>
        {!frontpage && (
          <header className='article__title'>
            <h2 className={`bottomLine ${styles.contentTitle} pt-5 mb-5`}>
              {title.rendered}
            </h2>
          </header>
        )}

        <section className={`article__content`}>
          {blocks.map((block, index) => (
            <Blocks {...block} key={index} />
          ))}
        </section>
      </article>
    </>
  );
};
export default Content;
