import { useRef } from 'react';
import handleCheck from 'functions/handleCheck';
import useOnClickOutside from 'hooks/useOnClickOutside';

const PartnersFilterList = ({
  title = 'Items',
  setIsOpen,
  isOpen,
  setChecked,
  checked,
  list,
}) => {
  if (!list?.length) return false;

  const hasItem = (item) => checked.includes(item);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <form className='partners__list' ref={ref}>
      <fieldset className='partners__list-container'>
        <legend className='partners__list-title'>
          <button
            type='button'
            className={`btn btn--clear ${isOpen ? `link link--primary` : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
          </button>
        </legend>
        {isOpen && (
          <div className='partners__list-items'>
            {list.map((listItem, index) => (
              <div className='partners__list-item' key={index}>
                <input
                  type='checkbox'
                  id={`listItem-${index}`}
                  name='categories'
                  onChange={() => setChecked(handleCheck(listItem[1], checked))}
                  defaultChecked={hasItem(listItem[1])}
                />
                <label htmlFor={`listItem-${index}`}>{listItem[1]}</label>
              </div>
            ))}
          </div>
        )}
      </fieldset>
    </form>
  );
};

export default PartnersFilterList;
