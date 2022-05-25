import filterData from 'functions/filterData';
import { getGold, getSilver } from 'functions/getPartners';
import { useState, useEffect } from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';
import PartnersFilter from './PartnersFilter';

const Partners = (props) => {
  const { data } = props;
  const initialGold = getGold(data);
  const initialSilver = getSilver(data);
  const [partnersGold, setPartnersGold] = useState();
  const [partners, setPartners] = useState();
  const [categories, setCategories] = useState();
  const [checked, setChecked] = useState([]);

  const handleFilter = () => {
    if (checked.length) {
      setPartnersGold(filterData(initialGold, checked));
      setPartners(filterData(initialSilver, checked));
    } else {
      setPartnersGold(initialGold);
      setPartners(initialSilver);
    }
  };

  useEffect(() => {
    setPartnersGold(initialGold);
    setPartners(initialSilver);
    setCategories(props.categories);
  }, []);

  useEffect(() => {
    handleFilter();
  }, [checked, setChecked]);

  if (!partners) return <section>loading...</section>;

  const filtersProps = {
    categories,
    setCategories,
  };

  return (
    <section className='partners'>
      <div className='partners__header'>
        <h2 className='partners__title'>Parceiros</h2>
      </div>
      <PartnersFilter {...filtersProps} />
      <div className='partners__body'>
        {partnersGold.length > 0 && (
          <>
            <h4>Membros</h4>
            <div className='grid grid-2 mb-5'>
              {partnersGold.map((item) => (
                <BusinessCard key={item.id} {...item} />
              ))}
            </div>
          </>
        )}
        {partners.length > 0 && (
          <>
            <h4>Comunidade</h4>
            <div className='grid grid-2'>
              {partners.map((item) => (
                <BusinessCard key={item.id} {...item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Partners;
