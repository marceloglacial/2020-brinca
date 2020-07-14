import Head from 'next/head';
import checkProps from '../functions/checkProps';

const PageHeader = (props) => {
  const { title } = checkProps('siteInfo', props);
  const { name } = checkProps('page', props);

  return (
    <Head>
      <title>
        {title && title} {name && `- ${name}`}
      </title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
export default PageHeader;
