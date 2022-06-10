import { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { getData } from 'functions/getData';
import getRecords from 'functions/getRecords';
import Partners from 'components/Blocks/Partners/Partners';
import PartnersContent from 'components/Blocks/Partners/PartnersContent';
import PartnersTags from 'components/Blocks/Partners/PartnersTags';

const Padrinhos = (props) => {
  // const { partners, categories } = props;
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);

  // useEffect(() => {
  //   setData([...partners]);
  //   setTags([...categories]);
  // }, []);

  // const tagsNames = categories.map((item) => item[1]);

  return (
    <Layout pageTitle={`Padrinhos`} {...props}>
      <h2 className='partners__title'>Padrinhos</h2>
      {/* <PartnersContent /> */}
      {/* <PartnersTags tags={tagsNames} /> */}
      {/* <Partners data={data} categories={tags} /> */}
    </Layout>
  );
};

export async function getStaticProps() {
  const partners =
    (await getRecords({
      spreadsheetId: '1mxfh4txJiC5cY-uHe7ND5YPCAzzFBP3gAne6vFN1fSY',
      range: 'Padrinhos',
    })) || [];
  const categories =
    (await getRecords({
      spreadsheetId: '1mxfh4txJiC5cY-uHe7ND5YPCAzzFBP3gAne6vFN1fSY',
      range: 'Padrinhos',
    })) || [];
  const allData = (await getData()) || {};
  const {
    headerMenu = [],
    footerMenu = [],
    subscribeMenu = [],
    socialMenu = [],
  } = allData;
  return {
    props: {
      headerMenu,
      footerMenu,
      subscribeMenu,
      socialMenu,
    },

    revalidate: 30,
  };
}

export default Padrinhos;
