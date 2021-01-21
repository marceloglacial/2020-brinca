import styles from './Content.module.scss';
import ContentLoading from './ContentLoading';
import Head from 'next/head';
import usePage from 'hooks/usePage';
import Blocks from 'components/Blocks/Blocks';
import Alert from 'components/Alert/Alert';

const Content = (props) => {
  const { slug, frontpage } = props;
  const type = slug && slug.length > 1 && slug[0];
  const { pageContent, isLoading, isError } = usePage(slug, type);

  if (isLoading) return <ContentLoading />;
  if (isError) return <Alert title='Data error' />;
  if (pageContent.length === 0)
    return <Alert title={`Please setup a Homepage`} />;

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
          <header className='article__title' data-aos='fade-in'>
            <h1 className={`bottomLine ${styles.contentTitle} mb-md-5`}>
              {title.rendered}
            </h1>
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
