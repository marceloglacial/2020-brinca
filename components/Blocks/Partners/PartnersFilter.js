import handleCheck from 'functions/handleCheck';

const PartnersFilter = ({ categories, setChecked }) => {
  if (!categories?.length) return false;

  return (
    <div className='partners__filter'>
      <div className='parterns__title'>
        <h4>Filtros</h4>
      </div>
      <form className='partners__list'>
        <fieldset className='patners__list-container'>
          <legend className='partners__list-title'>Categorias</legend>
          <div>
            <div className='partners__listitem' key={0}>
              <input type='checkbox' id={`category-all`} name='categories' />
              <label htmlFor={`category-all`}>Todas</label>
            </div>
            {categories.map((category, index) => (
              <div className='partners__listitem' key={index}>
                <input
                  type='checkbox'
                  id={`category-${index}`}
                  name='categories'
                  onChange={() => setChecked(handleCheck(category[1], checked))}
                />
                <label htmlFor={`category-${index}`}>{category[1]}</label>
              </div>
            ))}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default PartnersFilter;
