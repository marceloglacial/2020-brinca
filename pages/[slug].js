import Layout from 'components/Layout/Layout';
import Content from '../components/Content/Content';
import { useRouter } from 'next/router';

const Page = (props) => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <Layout>
      <Content slug={slug} />
    </Layout>
  );
};
export default Page;
