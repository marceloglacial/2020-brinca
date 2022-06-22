import { useState } from 'react';
import PartnersFilterList from './PartnersFilterList';
import PartnersTags from './PartnersTags';

const PartnersFilter = ({
  title = 'Filtros',
  categories = [],
  checked,
  setChecked,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const categoriesProps = {
    title: 'Categorias',
    setIsOpen,
    isOpen,
    checked,
    setChecked,
    list: categories,
  };
  const tagsProps = {
    tags: checked,
    setTags: setChecked,
  };

  return (
    <div className='partners__filter' data-aos='fade-in'>
      <div className='partners__filter-header'>
        <div className='partners__filter-title'>{title}</div>
        <PartnersFilterList {...categoriesProps} />
      </div>
      <div className='partners__filter-body'>
        <PartnersTags {...tagsProps} />
      </div>
    </div>
  );
};

export default PartnersFilter;
