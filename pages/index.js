import Layout from 'components/Layout/Layout';
import Blocks from 'components/Blocks/Blocks';
import { getHomePage } from 'functions/getHomepage';
import { getNavigation } from 'functions/getNavigation';
import Button from 'components/Button/Button';
import Sponsors from 'components/Sponsors/Sponsors';

const Home = ({ navigation, pageData }) => {
  const { blocks } = pageData;

  return (
    <Layout navigation={navigation}>
      {blocks?.map((block, index) => {
        if (index === 1)
          return (
            <>
              <Sponsors />
              <Blocks {...block} id={index} key={index} />
            </>
          );
        return <Blocks {...block} id={index} key={index} />;
      })}
      <div className='centered pt-6'>
        <Button title={'Veja todos os eventos'} link={'/eventos'} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const pageData = await getHomePage();
  const navigation = await getNavigation();
  return {
    props: {
      pageData,
      navigation,
    },
    revalidate: 30,
  };
}

export default Home;
