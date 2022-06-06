import filterData from 'functions/filterData';
import { getGold, getSilver } from 'functions/getPartners';
import PartnersGroup from './PartnersGroup';

const Partners = (props) => {
  const { data, filter } = props;
  const partnersGold = filterData(getGold(data), filter);
  const partnersSilver = filterData(getSilver(data), filter);
  const hasPartners = partnersGold && partnersSilver;

  if (!hasPartners) return <section>loading...</section>;

  return (
    <section className='partners pt-0'>
      <div className='partners__body'>
        <PartnersGroup title={'Membros'} partners={partnersGold} />
        <PartnersGroup title={'Comunidade'} partners={partnersSilver} />
      </div>
    </section>
  );
};
export default Partners;
