import Layout from 'components/Layout/Layout';
import { getData } from 'functions/getData';
import getRecords from 'functions/getRecords';
import Partners from 'components/Blocks/Partners/Partners';
import slugfy from 'functions/slugfy';
import PartnersContent from 'components/Blocks/Partners/PartnersContent';
import PartnersTags from 'components/Blocks/Partners/PartnersTags';
import { getGold, getSilver } from 'functions/getPartners';
import filterData from 'functions/filterData';
import { getNavigation } from 'functions/getNavigation';

const ParceirosTag = (props) => {
  const { partners, categories, params } = props;
  const partnersProps = {
    data: partners,
    filter: params.slug,
    categories,
  };
  const tagsNames = categories.map((item) => item[1]);
  const hasGold = filterData(getGold(partners), params.slug).length;
  const data = hasGold ? getGold(partners) : getSilver(partners);
  const subTitle = filterData(data, params.slug)[0]?.category;

  return (
    <Layout pageTitle={`Parceiros`} navigation={props.navigation}>
      <header data-aos='fade-in'>
        <h1 className='content-title'>Parceiros - {subTitle}</h1>
      </header>
      <Partners {...partnersProps} />
      <PartnersTags tags={tagsNames} filter={params.slug} />
      <h2 className='partners__title'>Quer fazer parte?</h2>
      <PartnersContent />
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories =
    (await getRecords({
      spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
      range: 'Categories',
    })) || [];

  const paths = categories.map((item) => ({
    params: { slug: slugfy(item[1]) },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
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
      params,
    },

    revalidate: 30,
  };
}
export default ParceirosTag;
