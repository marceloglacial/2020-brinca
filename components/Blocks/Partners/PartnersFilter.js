import { useState, useRef } from 'react';
import handleCheck from 'functions/handleCheck';
import useOnClickOutside from 'hooks/useOnClickOutside';

const PartnersFilter = ({ categories, checked, setChecked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasCategories = categories?.length;
  const hasItem = (item) => checked.includes(item);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  if (!hasCategories) return false;

  return (
    <div className='partners__filter'>
      <div className='partners__filter-title'>Filtros</div>
      <form className='partners__list' ref={ref}>
        <fieldset className='partners__list-container'>
          <legend className='partners__list-title'>
            <button
              type='button'
              className={`btn btn--clear ${isOpen ? `link link--primary` : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Categorias
            </button>
          </legend>
          {isOpen && (
            <div className='partners__list-items'>
              {categories.map((category, index) => (
                <div className='partners__list-item' key={index}>
                  <input
                    type='checkbox'
                    id={`category-${index}`}
                    name='categories'
                    onChange={() =>
                      setChecked(handleCheck(category[1], checked))
                    }
                    defaultChecked={hasItem(category[1])}
                  />
                  <label htmlFor={`category-${index}`}>{category[1]}</label>
                </div>
              ))}
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default PartnersFilter;
