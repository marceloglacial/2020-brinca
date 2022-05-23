import { useState, useEffect } from 'react';
import getPartners from 'functions/getPartners';
import BusinessCard from '../BusinessCard/BusinessCard';
import randomArray from 'functions/ramdomArray';

const getGold = (data) => {
  const partners = getPartners(data);
  return randomArray(partners.filter((item) => item.membership));
};

const getSilver = (data) => {
  const partners = getPartners(data);
  return randomArray(partners.filter((item) => !item.membership));
};

const Partners = (props) => {
  const [partnersGold, setPartnersGold] = useState();
  const [partners, setPartners] = useState();

  useEffect(() => {
    setPartnersGold(getGold(props.data));
    setPartners(getSilver(props.data));
  }, []);

  if (!partners) return <section>loading...</section>;

  return (
    <section className='partners'>
      <div className='partners__header'>
        <h2>Parceiros</h2>
      </div>
      <div className='partners__body'>
        <div className='grid grid-2'>
          {partnersGold?.map((item) => (
            <BusinessCard key={item.id} {...item} />
          ))}
          {partners?.map((item) => (
            <BusinessCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
