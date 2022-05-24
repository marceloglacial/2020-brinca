import filterData from 'functions/filterData';
import { getGold, getSilver } from 'functions/getPartners';
import handleCheck from 'functions/handleCheck';
import { useState, useEffect } from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';

const Partners = (props) => {
  const { data } = props;
  const [partnersGold, setPartnersGold] = useState();
  const [partners, setPartners] = useState();
  const [categories, setCategories] = useState();
  const [checked, setChecked] = useState([]);

  const handleFilter = () => {
    if (checked.length) {
      setPartnersGold(filterData(getGold(data), checked));
      setPartners(filterData(getSilver(data), checked));
    } else {
      setPartnersGold(getGold(data));
      setPartners(getSilver(data));
    }
  };

  useEffect(() => {
    setPartnersGold(getGold(data));
    setPartners(getSilver(data));
    setCategories(props.categories);
  }, []);

  useEffect(() => {
    handleFilter();
  }, [checked, setChecked]);

  if (!partners) return <section>loading...</section>;

  return (
    <section className='partners'>
      <div className='partners__header'>
        <h2>Parceiros</h2>
      </div>
      <div className='partners__grid'>
        <div className='partners__filter'>
          <form>
            <fieldset>
              <legend>Selecione as categorias</legend>
              {categories.map((category, index) => (
                <div key={index}>
                  <input
                    type='checkbox'
                    id={`category-${index}`}
                    name='categories'
                    onChange={() =>
                      setChecked(handleCheck(category[1], checked))
                    }
                  />
                  <label htmlFor={`category-${index}`}>{category[1]}</label>
                </div>
              ))}
            </fieldset>
          </form>
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
      </div>
    </section>
  );
};
export default Partners;
