import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getEvents, getSingleEvent } from 'functions/getEvents';
import { getNavigation } from 'functions/getNavigation';

const Event = ({ navigation, pageData }) => {
  const { title, blocks } = pageData;
  return (
    <Layout pageTitle={title} navigation={navigation}>
      <h2>{title}</h2>
      {blocks?.map((block, index) => (
        <Blocks {...block} id={index} key={index} />
      ))}
    </Layout>
  );
};

export async function getStaticPaths() {
  const allEvents = await getEvents();
  const paths = allEvents.map((event) => ({
    params: { slug: event.attributes.slug },
  }));
  return { paths, fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
  const pageData = await getSingleEvent(params.slug);
  const navigation = await getNavigation();

  return {
    props: {
      pageData: pageData,
      navigation,
    },
    revalidate: 30,
  };
}

export default Event;
