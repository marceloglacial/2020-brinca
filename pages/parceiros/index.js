import { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { getData } from 'functions/getData';
import getRecords from 'functions/getRecords';
import Partners from 'components/Blocks/Partners/Partners';
import PartnersContent from 'components/Blocks/Partners/PartnersContent';
import PartnersTags from 'components/Blocks/Partners/PartnersTags';
import { getNavigation } from 'functions/getNavigation';

const Parceiros = (props) => {
  const { partners, categories } = props;
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setData([...partners]);
    setTags([...categories]);
  }, []);

  const tagsNames = categories.map((item) => item[1]);

  return (
    <Layout pageTitle={`Parceiros`} navigation={props.navigation}>
      <h1 className='content-title'>Parceiros</h1>
      <PartnersContent />
      <PartnersTags tags={tagsNames} />
      <Partners data={data} categories={tags} />
    </Layout>
  );
};

export async function getStaticProps() {
  const partners =
    (await getRecords({
      spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
      range: 'Companies!A1:AB',
    })) || [];
  const categories =
    (await getRecords({
      spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
      range: 'Categories',
    })) || [];
  const navigation = await getNavigation();
  return {
    props: {
      navigation,
      partners,
      categories,
    },

    revalidate: 30,
  };
}

export default Parceiros;
