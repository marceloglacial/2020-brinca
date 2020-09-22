import Layout from 'components/Layout/Layout';
import Main from 'components/Main/Main';
import Content from '../components/Content/Content';
import { useRouter } from 'next/router';

const Page = (props) => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <Layout>
      <Main>
        <Content slug={slug} />
      </Main>
    </Layout>
  );
};
export default Page;
