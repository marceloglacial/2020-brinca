import filterData from 'functions/filterData';
import { getGold, getSilver } from 'functions/getPartners';
import { useState, useEffect } from 'react';
import PartnersFilter from './PartnersFilter';
import PartnersGroup from './PartnersGroup';

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
    checked,
    setChecked,
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
        <PartnersGroup title={'Membros'} partners={partnersGold} />
        <PartnersGroup title={'Comunidade'} partners={partners} />
      </div>
    </section>
  );
};
export default Partners;
