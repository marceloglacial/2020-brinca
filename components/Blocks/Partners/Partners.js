import { useState, useEffect } from 'react';
import getPartners from 'functions/getPartners';
import BusinessCard from '../BusinessCard/BusinessCard';
import randomArray from 'functions/ramdomArray';

const Partners = (props) => {
  const [partners, setPartners] = useState();

  useEffect(() => {
    setPartners(randomArray(getPartners(props.data)));
  }, []);

  if (!partners) return <section>loading...</section>;

  return (
    <section className='partners'>
      <div className='partners__header'>
        <h2>Parceiros</h2>
      </div>
      <div className='partners__body'>
        <div className='grid grid-2'>
          {partners.map((item) => (
            <BusinessCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
