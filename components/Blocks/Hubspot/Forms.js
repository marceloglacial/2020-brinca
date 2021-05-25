import useApi from 'hooks/useApi';

const HsForms = (props) => {
  const { data, isLoading } = useApi('/api/hubspot/forms');
  if (isLoading) return 'loading ...';

  const { name, fieldGroups, legalConsentOptions, displayOptions } = data;
  const { communicationConsentText, communicationsCheckboxes } =
    legalConsentOptions;

  console.log(data);

  return (
    <section className='form'>
      <header className='form__header'>
        <h3>{name}</h3>
      </header>
      <form className='form'>
        {fieldGroups.map((item, index) => {
          const { label, required } = item.fields[0];
          return (
            <div className='form__group' key={index}>
              <label className='label'>{label}:</label>
              <input className='input' required={required} />
            </div>
          );
        })}
        <div className='form__consent'>
          <label
            className='label'
            dangerouslySetInnerHTML={{
              __html: communicationConsentText,
            }}
          />
          {communicationsCheckboxes.map((item, index) => {
            const { label, required } = item;
            return (
              <div className='form__group' key={index}>
                <input
                  type='checkbox'
                  className='checkbox'
                  id={`content__${index}`}
                  required={required}
                />
                <label className='label' htmlFor={`content__${index}`}>
                  {label}
                </label>
              </div>
            );
          })}
        </div>

        <input
          type='submit'
          className='btn btn-secondary btn-form'
          value={displayOptions.submitButtonText}
        />
      </form>
    </section>
  );
};
export default HsForms;
