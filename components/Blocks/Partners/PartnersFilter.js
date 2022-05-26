import { useState } from 'react';
import handleCheck from 'functions/handleCheck';

const PartnersFilter = ({ categories, checked, setChecked }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!categories?.length) return false;

  return (
    <div className='partners__filter'>
      <div className='partners__filter-title'>Filtros</div>
      <form className='partners__list'>
        <fieldset className='partners__list-container'>
          <legend className='partners__list-title'>
            <button
              type='button'
              className='btn btn--clear'
              onClick={() => setIsOpen(!isOpen)}
            >
              Categorias
            </button>
          </legend>
          {isOpen && (
            <div className='partners__list-items'>
              <div className='partners__list-item' key={0}>
                <input type='checkbox' id={`category-all`} name='categories' />
                <label htmlFor={`category-all`}>Todas</label>
              </div>
              {categories.map((category, index) => (
                <div className='partners__list-item' key={index}>
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
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default PartnersFilter;
